/*!
 * markdown.js — compact, dependency-free Markdown renderer for the
 * German-for-IT Roadmap study app.
 *
 * Supports: ATX headings (with slug ids), GFM tables, fenced code blocks,
 * mermaid diagrams, audio German-TTS widgets, spoiler blocks (collapsed
 * answer keys), ordered/unordered and nested lists, GitHub task checkboxes,
 * blockquotes, horizontal rules, links, bold/italic (asterisk AND
 * boundary-aware underscore), inline code.
 *
 * NOTE: fences close only on a line of EXACTLY three backticks — nested and
 * 4-backtick fences are not supported. Never nest a fence inside a fence.
 *
 * Works in the browser (window.MD) and in Node (module.exports) so the same
 * renderer powers the app AND the build/test scripts.
 */
(function (global) {
  'use strict';

  var HTML_ESCAPE = { '&': '&amp;', '<': '&lt;', '>': '&gt;' };
  var UML = { 'ä': 'ae', 'ö': 'oe', 'ü': 'ue', 'ß': 'ss' };
  var SENT = String.fromCharCode(0); // // token sentinel — never appears in Markdown source

  function escapeHtml(s) {
    return String(s).replace(/[&<>]/g, function (c) { return HTML_ESCAPE[c]; });
  }
  function escapeAttr(s) {
    return escapeHtml(s).replace(/"/g, '&quot;');
  }
  function slug(s) {
    return String(s).toLowerCase()
      .replace(/[äöüß]/g, function (c) { return UML[c]; })
      .replace(/<[^>]+>/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
  function alignAttr(a) { return a ? ' style="text-align:' + a + '"' : ''; }

  /* ---------- inline ---------- */

  // Emphasis only. Underscore-italic is boundary-aware so snake_case survives.
  function applyEmph(s) {
    s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/__([^_]+)__/g, '<strong>$1</strong>');
    s = s.replace(/\*([^*\n]+)\*/g, '<em>$1</em>');
    s = s.replace(/(^|[^A-Za-z0-9_])_([^_\n]+)_(?![A-Za-z0-9_])/g, '$1<em>$2</em>');
    s = s.replace(/~~([^~]+)~~/g, '<del>$1</del>');
    return s;
  }

  function renderInline(text) {
    // Stash code / images / links as final-HTML tokens FIRST, so emphasis can
    // never touch a URL or an injected attribute like target="_blank". The
    // null-char sentinel never appears in Markdown, so bare numbers in the
    // prose are safe (an older space+digit scheme could corrupt "in 3 Tagen").
    var toks = [];
    function stash(html) { toks.push(html); return SENT + (toks.length - 1) + SENT; }

    text = String(text)
      .replace(/`([^`]+)`/g, function (m, c) { return stash('<code>' + escapeHtml(c) + '</code>'); })
      .replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)/g, function (m, alt, url, title) {
        return stash('<img src="' + escapeAttr(url) + '" alt="' + escapeAttr(alt) + '"' +
          (title ? ' title="' + escapeAttr(title) + '"' : '') + ' loading="lazy">');
      })
      .replace(/\[([^\]]+)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)/g, function (m, t, url, title) {
        var ext = /^https?:/i.test(url) ? ' target="_blank" rel="noopener"' : '';
        return stash('<a href="' + escapeAttr(url) + '"' +
          (title ? ' title="' + escapeAttr(title) + '"' : '') + ext + '>' + applyEmph(escapeHtml(t)) + '</a>');
      });

    text = applyEmph(escapeHtml(text));

    // restore tokens (loop resolves nesting, e.g. a link whose text has code)
    var prev, re = new RegExp(SENT + '(\\d+)' + SENT, 'g');
    do { prev = text; text = text.replace(re, function (m, i) { return toks[+i]; }); }
    while (text !== prev && text.indexOf(SENT) !== -1);
    return text;
  }

  /* ---------- blocks ---------- */
  function isBlank(l) { return /^\s*$/.test(l); }
  function isHeading(l) { return /^#{1,6}\s+/.test(l); }
  function isQuote(l) { return /^\s*>/.test(l); }
  function isListItem(l) { return /^\s*([-*+]|\d+\.)\s+/.test(l); }
  function isFence(l) { return /^```/.test(l); }
  function isHr(l) { return /^\s*([-*_])(\s*\1){2,}\s*$/.test(l); }
  function isTableSep(l) {
    return l != null && l.indexOf('-') !== -1 &&
      /^\s*\|?[\s:|-]*-[\s:|-]*\|?\s*$/.test(l) && l.indexOf('|') !== -1;
  }

  function splitRow(line) {
    return line.trim().replace(/^\|/, '').replace(/\|$/, '')
      .split('|').map(function (x) { return x.trim(); });
  }

  function parseTable(lines, start) {
    var header = splitRow(lines[start]);
    var delim = splitRow(lines[start + 1]);
    var aligns = delim.map(function (c) {
      var l = /^:/.test(c), r = /:$/.test(c);
      return (l && r) ? 'center' : r ? 'right' : l ? 'left' : '';
    });
    var i = start + 2, rows = [];
    while (i < lines.length && !isBlank(lines[i]) && lines[i].indexOf('|') !== -1) {
      rows.push(splitRow(lines[i])); i++;
    }
    var html = '<div class="table-wrap"><table><thead><tr>';
    header.forEach(function (c, idx) {
      html += '<th' + alignAttr(aligns[idx]) + '>' + renderInline(c) + '</th>';
    });
    html += '</tr></thead><tbody>';
    rows.forEach(function (r) {
      html += '<tr>';
      for (var c = 0; c < header.length; c++) {
        html += '<td' + alignAttr(aligns[c]) + '>' + renderInline(r[c] || '') + '</td>';
      }
      html += '</tr>';
    });
    return { html: html + '</tbody></table></div>', next: i };
  }

  function buildList(items, pos, indent) {
    var ordered = /\d+\./.test(items[pos].marker);
    var out = ordered ? '<ol>' : '<ul>';
    while (pos < items.length && items[pos].indent >= indent) {
      if (items[pos].indent > indent) { pos++; continue; }
      var t = items[pos].text, cls = '', prefix = '';
      var tm = t.match(/^\[([ xX])\]\s+([\s\S]*)$/);
      if (tm) {
        cls = ' class="task-item"';
        prefix = '<input type="checkbox" disabled' +
          (tm[1].toLowerCase() === 'x' ? ' checked' : '') + '> ';
        t = tm[2];
      }
      out += '<li' + cls + '>' + prefix + renderInline(t);
      pos++;
      if (pos < items.length && items[pos].indent > indent) {
        var child = buildList(items, pos, items[pos].indent);
        out += child.html; pos = child.pos;
      }
      out += '</li>';
    }
    return { html: out + (ordered ? '</ol>' : '</ul>'), pos: pos };
  }

  function markerOrdered(mk) { return /\d+\./.test(mk); }

  function parseList(lines, start) {
    var i = start, raw = [];
    var baseIndent = lines[start].match(/^(\s*)/)[1].length;
    var baseOrdered = markerOrdered(lines[start].match(/^\s*([-*+]|\d+\.)/)[1]);
    while (i < lines.length) {
      var l = lines[i];
      if (isBlank(l)) {
        // Keep going only if the next item continues the SAME list (nested, or
        // same type at the same indent). A different type at base indent = new list.
        var nx = lines[i + 1];
        if (i + 1 < lines.length && isListItem(nx)) {
          var nm = nx.match(/^(\s*)([-*+]|\d+\.)/);
          var nIndent = nm[1].length, nOrdered = markerOrdered(nm[2]);
          if (nIndent > baseIndent || (nIndent === baseIndent && nOrdered === baseOrdered)) { i++; continue; }
        }
        break;
      }
      var m = l.match(/^(\s*)([-*+]|\d+\.)\s+([\s\S]*)$/);
      if (!m) {
        if (raw.length && /^\s+\S/.test(l)) { raw[raw.length - 1].text += ' ' + l.trim(); i++; continue; }
        break;
      }
      if (m[1].length < baseIndent) break;
      if (m[1].length === baseIndent && markerOrdered(m[2]) !== baseOrdered) break;
      raw.push({ indent: m[1].length, marker: m[2], text: m[3] });
      i++;
    }
    var built = buildList(raw, 0, raw[0].indent);
    return { html: built.html, next: i };
  }

  function renderAudio(text) {
    var t = text.trim();
    return '<div class="audio-widget" data-speak="' + escapeAttr(t) + '">' +
      '<button class="audio-btn" type="button" aria-label="Vorlesen">🔊</button>' +
      '<span class="audio-text">' + renderInline(t) + '</span>' +
      '<span class="audio-hint">Klick zum Vorlesen · TTS (de-DE)</span></div>';
  }

  // Collapsed answer key. The body is full Markdown (tables, lists, bold) and
  // stays hidden until the learner clicks — otherwise a 40-exercise workbook
  // shows every answer on the way down the page. app.js wires the toggle;
  // without JS the <details>-free markup still degrades to "body visible".
  var spoilerSeq = 0;
  function spoilerBlock(text, closedLabel, openLabel) {
    var id = 'sp' + (++spoilerSeq);
    return '<div class="spoiler" data-spoiler>' +
      '<button class="spoiler-btn" type="button" aria-expanded="false" aria-controls="' + id + '"' +
      ' data-closed-label="' + escapeAttr(closedLabel) + '"' +
      ' data-open-label="' + escapeAttr(openLabel) + '">' +
      '<span class="spoiler-ic" aria-hidden="true">🔒</span>' +
      '<span class="spoiler-lbl">' + escapeHtml(closedLabel) + '</span></button>' +
      '<div class="spoiler-body" id="' + id + '" hidden>' + render(text) + '</div></div>';
  }
  function renderSpoiler(text) {
    return spoilerBlock(text, 'Lösungen anzeigen · Show answers', 'Lösungen ausblenden · Hide answers');
  }

  /* Interactive exercise block. Authoring format inside the fence:
   *
   *   ? Question text (inline Markdown allowed)
   *   * correct option          (two or more "*" -> multi-select)
   *   x wrong option
   *   ! Why that is the answer  (revealed after checking)
   *
   *   ? Gap-fill question with ___
   *   = accepted | also accepted
   *   ! explanation
   *
   * A blank line or the next "?" starts the next item. app.js grades the
   * block, scores it and reveals the explanations. Closed-form only —
   * free-production tasks keep their Musterlösung in a ```spoiler. */
  var uebSeq = 0;
  function renderUebung(text) {
    var lines = String(text).replace(/\r\n?/g, '\n').split('\n');
    var items = [], cur = null;
    function flush() { if (cur && cur.q) items.push(cur); cur = null; }
    lines.forEach(function (raw) {
      var l = raw.trim();
      if (!l) return;
      var m = l.match(/^([?*x=!])\s+([\s\S]*)$/i);
      if (!m) { if (cur && cur.q) cur.q += ' ' + l; return; }
      var tag = m[1].toLowerCase(), body = m[2];
      if (tag === '?') { flush(); cur = { q: body, opts: [], correct: [], accept: [], why: '' }; return; }
      if (!cur) return;
      if (tag === '*') { cur.correct.push(cur.opts.length); cur.opts.push(body); }
      else if (tag === 'x') { cur.opts.push(body); }
      else if (tag === '=') { body.split('|').forEach(function (a) { if (a.trim()) cur.accept.push(a.trim()); }); }
      else if (tag === '!') { cur.why = cur.why ? cur.why + ' ' + body : body; }
    });
    flush();
    if (!items.length) return '<pre class="code-block"><code>' + escapeHtml(text) + '</code></pre>';

    var bid = 'ueb' + (++uebSeq);
    var html = '<div class="ueb" data-ueb id="' + bid + '">';
    items.forEach(function (it, i) {
      var type = it.accept.length ? 'gap' : (it.correct.length > 1 ? 'multi' : 'choice');
      html += '<div class="ueb-item" data-type="' + type + '"' +
        (type === 'gap'
          ? ' data-accept="' + escapeAttr(it.accept.join('|')) + '"'
          : ' data-correct="' + escapeAttr(it.correct.join(',')) + '"') + '>';
      html += '<div class="ueb-q"><span class="ueb-n">' + (i + 1) + '</span>' + renderInline(it.q) + '</div>';
      if (type === 'gap') {
        html += '<input class="ueb-in" type="text" autocomplete="off" spellcheck="false" ' +
          'aria-label="Antwort eingeben" placeholder="Antwort eingeben …">';
      } else {
        var kind = type === 'multi' ? 'checkbox' : 'radio';
        it.opts.forEach(function (o, oi) {
          html += '<label class="ueb-opt"><input type="' + kind + '" name="' + bid + '-' + i + '" value="' + oi + '">' +
            '<span>' + renderInline(o) + '</span></label>';
        });
      }
      html += '<div class="ueb-fb" hidden>' + (it.why ? renderInline(it.why) : '') + '</div>';
      html += '</div>';
    });
    html += '<div class="ueb-bar">' +
      '<button class="ueb-check" type="button">Prüfen · Check</button>' +
      '<span class="ueb-score" aria-live="polite"></span>' +
      '<button class="ueb-reset" type="button">Zurücksetzen</button></div>';
    return html + '</div>';
  }

  // A listening exercise: play button plus a transcript that stays hidden.
  // ```audio prints its text, which would hand the learner the answer — so a
  // Hörtext needs its own block where reading along is a deliberate choice.
  function renderHoertext(text) {
    var t = text.trim();
    return '<div class="hoertext">' +
      '<div class="ht-head" data-speak="' + escapeAttr(t) + '">' +
      '<button class="audio-btn" type="button" aria-label="Hörtext abspielen">🔊</button>' +
      '<span class="ht-label">Hörtext · erst hören — nicht mitlesen</span>' +
      '<span class="audio-hint">TTS (de-DE) · beliebig oft wiederholen</span></div>' +
      spoilerBlock(t, 'Transkript anzeigen · Show transcript', 'Transkript ausblenden · Hide transcript') +
      '</div>';
  }

  function render(md) {
    md = String(md).replace(/\r\n?/g, '\n');
    var lines = md.split('\n'), html = [], i = 0;
    while (i < lines.length) {
      var line = lines[i];
      if (isBlank(line)) { i++; continue; }

      if (isFence(line)) {
        var lang = (line.match(/^```(\w*)/) || [])[1] || '';
        var buf = []; i++;
        while (i < lines.length && !/^```\s*$/.test(lines[i])) { buf.push(lines[i]); i++; }
        i++;
        var code = buf.join('\n');
        if (lang === 'mermaid') html.push('<div class="mermaid">' + escapeHtml(code) + '</div>');
        else if (lang === 'audio') html.push(renderAudio(code));
        else if (lang === 'spoiler') html.push(renderSpoiler(code));
        else if (lang === 'hoertext') html.push(renderHoertext(code));
        else if (lang === 'uebung') html.push(renderUebung(code));
        else html.push('<pre class="code-block"><code>' + escapeHtml(code) + '</code></pre>');
        continue;
      }
      if (isHeading(line)) {
        var h = line.match(/^(#{1,6})\s+(.*)$/);
        var lvl = h[1].length, txt = h[2].replace(/\s+#+\s*$/, '');
        html.push('<h' + lvl + ' id="' + slug(txt) + '">' + renderInline(txt) + '</h' + lvl + '>');
        i++; continue;
      }
      if (isHr(line)) { html.push('<hr>'); i++; continue; }
      if (isQuote(line)) {
        var qbuf = [];
        while (i < lines.length && isQuote(lines[i])) { qbuf.push(lines[i].replace(/^\s*>\s?/, '')); i++; }
        html.push('<blockquote>' + render(qbuf.join('\n')) + '</blockquote>');
        continue;
      }
      if (line.indexOf('|') !== -1 && isTableSep(lines[i + 1])) {
        var tbl = parseTable(lines, i); html.push(tbl.html); i = tbl.next; continue;
      }
      if (isListItem(line)) {
        var lst = parseList(lines, i); html.push(lst.html); i = lst.next; continue;
      }
      var pbuf = [];
      while (i < lines.length && !isBlank(lines[i]) && !isFence(lines[i]) &&
             !isHeading(lines[i]) && !isQuote(lines[i]) && !isListItem(lines[i]) &&
             !isHr(lines[i]) && !(lines[i].indexOf('|') !== -1 && isTableSep(lines[i + 1]))) {
        pbuf.push(lines[i]); i++;
      }
      if (pbuf.length) html.push('<p>' + renderInline(pbuf.join(' ')) + '</p>');
    }
    return html.join('\n');
  }

  // Extract plain text for search indexing.
  function toText(md) {
    return String(md)
      .replace(/```[\s\S]*?```/g, ' ')
      .replace(/[#>*_`|]/g, ' ')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/\s+/g, ' ')
      .trim();
  }

  var MD = { render: render, renderInline: renderInline, slug: slug, escapeHtml: escapeHtml, toText: toText };
  if (typeof module !== 'undefined' && module.exports) module.exports = MD;
  else global.MD = MD;
})(typeof window !== 'undefined' ? window : this);
