/*!
 * app.js — German-for-IT Roadmap study app engine.
 * Vanilla JS, no framework. State persists in localStorage (prefix "gfit:").
 */
(function () {
  'use strict';

  var CI = window.CONTENT_INDEX || { groups: [], meta: {}, topics: [], levels: [] };
  var BUNDLE = window.CONTENT_BUNDLE || {};
  var FC = window.FLASHCARDS || [];
  var QZ = window.QUIZZES || [];
  var CL = window.CHECKLIST || [];

  /* ---------------- storage ---------------- */
  function get(k, d) { try { var v = JSON.parse(localStorage.getItem('gfit:' + k)); return v === null ? d : v; } catch (e) { return d; } }
  function set(k, v) { try { localStorage.setItem('gfit:' + k, JSON.stringify(v)); } catch (e) {} }

  var state = {
    progress: get('progress', {}),
    bookmarks: get('bookmarks', []),
    checklist: get('checklist', {}),
    fc: get('fc', {}),
    collapse: get('collapse', {}),
    filterLevel: '',
    filterTopic: '',
    lastRoute: get('lastRoute', 'home')
  };

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $all = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var el = {};

  /* ---------------- helpers ---------------- */
  function itemById(id) {
    for (var g = 0; g < CI.groups.length; g++) {
      var it = CI.groups[g].items;
      for (var i = 0; i < it.length; i++) if (it[i].id === id) return { item: it[i], group: CI.groups[g] };
    }
    return null;
  }
  function allLessonIds() {
    var ids = [];
    CI.groups.forEach(function (g) { g.items.forEach(function (it) { if (it.type === 'lesson') ids.push(it.id); }); });
    return ids;
  }
  function toast(msg) {
    var t = el.toast; t.textContent = msg; t.classList.add('show');
    clearTimeout(toast._t); toast._t = setTimeout(function () { t.classList.remove('show'); }, 1900);
  }
  function esc(s) { return window.MD ? MD.escapeHtml(s) : s; }

  /* ---------------- theme ---------------- */
  function initTheme() {
    var t = get('theme', null) || (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(t);
  }
  function setTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    set('theme', t);
    if (el.themeBtn) el.themeBtn.textContent = t === 'dark' ? '☀️' : '🌙';
    if (window.mermaid) { try { window.mermaid.initialize({ startOnLoad: false, theme: t === 'dark' ? 'dark' : 'default', securityLevel: 'loose', fontFamily: 'inherit' }); } catch (e) {} }
  }

  /* ---------------- TTS (German audio) ---------------- */
  var voices = [];
  function loadVoices() { try { voices = window.speechSynthesis ? speechSynthesis.getVoices() : []; } catch (e) { voices = []; } }
  function germanVoice() {
    for (var i = 0; i < voices.length; i++) if (/^de/i.test(voices[i].lang)) return voices[i];
    return null;
  }
  function speak(text, btn) {
    if (!('speechSynthesis' in window)) { toast('Text-to-Speech nicht verfügbar in diesem Browser'); return; }
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = 'de-DE'; u.rate = 0.95; u.pitch = 1;
    var v = germanVoice(); if (v) u.voice = v;
    if (btn) { btn.classList.add('speaking'); u.onend = u.onerror = function () { btn.classList.remove('speaking'); }; }
    if (!v) toast('Tipp: Deutsche Stimme im Betriebssystem installieren für beste Aussprache');
    speechSynthesis.speak(u);
  }

  /* ---------------- sidebar ---------------- */
  function buildSidebar() {
    var html = '';
    // progress card
    html += '<div class="progress-card"><div class="p-row"><span>Fortschritt · Progress</span><span id="progPct">0%</span></div>' +
            '<div class="progress-bar"><i id="progFill"></i></div></div>';
    // filters
    html += '<h4>Filter · Level</h4><div class="filters" id="lvlFilters">';
    html += '<span class="chip" data-lvl="">Alle</span>';
    CI.levels.forEach(function (l) { html += '<span class="chip" data-lvl="' + l + '">' + l + '</span>'; });
    html += '</div>';
    html += '<h4>Filter · Topic</h4><div class="filters" id="topFilters">';
    html += '<span class="chip" data-top="">Alle</span>';
    CI.topics.forEach(function (t) { html += '<span class="chip" data-top="' + t + '">' + t + '</span>'; });
    html += '</div><h4>Inhalt · Contents</h4>';
    // groups
    CI.groups.forEach(function (g) {
      var collapsed = state.collapse[g.id] === true || (g.open !== true && state.collapse[g.id] === undefined && g.id.indexOf('phase') === 0 && g.id !== 'phase-1');
      html += '<div class="nav-group ' + (collapsed ? 'collapsed' : '') + '" data-group="' + g.id + '">';
      html += '<button class="nav-head"><span>' + (g.icon || '') + '</span><span>' + esc(g.title) + '</span>' +
              (g.badge ? '<span class="badge">' + esc(g.badge) + '</span>' : '') +
              '<span class="caret">▾</span></button><ul class="nav-list">';
      g.items.forEach(function (it) {
        html += '<li data-level="' + it.level + '" data-topic="' + it.topic + '"><a href="#/' + it.id + '" data-id="' + it.id + '">' +
                '<span class="lbl">' + esc(it.title) + '</span>' +
                '<span class="done">✓</span></a></li>';
      });
      html += '</ul></div>';
    });
    el.nav.innerHTML = html;

    // events
    $all('.nav-head', el.nav).forEach(function (h) {
      h.addEventListener('click', function () {
        var grp = h.parentNode, id = grp.getAttribute('data-group');
        grp.classList.toggle('collapsed');
        state.collapse[id] = grp.classList.contains('collapsed'); set('collapse', state.collapse);
      });
    });
    $all('#lvlFilters .chip', el.nav).forEach(function (c) {
      c.addEventListener('click', function () { state.filterLevel = c.getAttribute('data-lvl'); applyFilters(); });
    });
    $all('#topFilters .chip', el.nav).forEach(function (c) {
      c.addEventListener('click', function () { state.filterTopic = c.getAttribute('data-top'); applyFilters(); });
    });
    applyFilters();
    refreshProgress();
  }

  function applyFilters() {
    $all('#lvlFilters .chip', el.nav).forEach(function (c) { c.classList.toggle('active', c.getAttribute('data-lvl') === state.filterLevel); });
    $all('#topFilters .chip', el.nav).forEach(function (c) { c.classList.toggle('active', c.getAttribute('data-top') === state.filterTopic); });
    $all('.nav-list li', el.nav).forEach(function (li) {
      var okL = !state.filterLevel || li.getAttribute('data-level') === state.filterLevel || li.getAttribute('data-level') === 'All';
      var okT = !state.filterTopic || li.getAttribute('data-topic') === state.filterTopic;
      li.style.display = (okL && okT) ? '' : 'none';
    });
    // hide empty groups
    $all('.nav-group', el.nav).forEach(function (g) {
      var vis = $all('.nav-list li', g).some(function (li) { return li.style.display !== 'none'; });
      g.style.display = vis ? '' : 'none';
    });
  }

  function refreshProgress() {
    var ids = allLessonIds(), done = ids.filter(function (id) { return state.progress[id]; }).length;
    var pct = ids.length ? Math.round(done / ids.length * 100) : 0;
    if ($('#progPct')) $('#progPct').textContent = pct + '%';
    if ($('#progFill')) $('#progFill').style.width = pct + '%';
    $all('.nav-list a', el.nav).forEach(function (a) {
      a.classList.toggle('completed', !!state.progress[a.getAttribute('data-id')]);
    });
  }
  function markActive(id) {
    $all('.nav-list a', el.nav).forEach(function (a) { a.classList.toggle('active', a.getAttribute('data-id') === id); });
  }

  /* ---------------- router ---------------- */
  function go(id) { location.hash = '#/' + id; }
  function currentRoute() {
    var h = location.hash.replace(/^#\/?/, '');
    return h || 'home';
  }
  function route() {
    var id = currentRoute();
    closeNav();
    if (id.indexOf('search/') === 0) { renderSearch(decodeURIComponent(id.slice(7))); return; }
    if (id === 'home') { renderHome(); markActive('home'); }
    else if (id === '@flashcards') { renderFlashcards(); markActive('@flashcards'); }
    else if (id === '@quiz') { renderQuizIndex(); markActive('@quiz'); }
    else if (id === '@checklist') { renderChecklist(); markActive('@checklist'); }
    else if (id === '@bookmarks') { renderBookmarks(); markActive('@bookmarks'); }
    else { renderModule(id); markActive(id); }
    state.lastRoute = id; set('lastRoute', id);
    el.content.scrollTop = 0; window.scrollTo(0, 0);
  }

  /* ---------------- render: module ---------------- */
  function renderModule(id) {
    var meta = itemById(id);
    var md = BUNDLE[id];
    if (!md) {
      el.content.innerHTML = '<div class="content"><div class="empty"><h2>📝 Modul wird geschrieben</h2>' +
        '<p>Dieses Modul (<code>' + esc(id) + '</code>) ist noch nicht im Bundle.</p>' +
        '<p style="max-width:520px;margin:10px auto">If you generated content but it is missing here, run <code>node build.js</code> to rebuild <code>content-bundle.js</code>, then reload. Or type <b>“Continue”</b> in chat to have the next batch written.</p>' +
        '<p><a class="btn primary" href="#/home">← Home</a></p></div></div>';
      return;
    }
    var item = meta ? meta.item : { title: id, level: '', topic: '' };
    var grp = meta ? meta.group : null;
    var isBookmarked = state.bookmarks.indexOf(id) !== -1;
    var isDone = !!state.progress[id];
    var crumbs = '<div class="crumbs">' +
      (item.level ? '<span class="lvl">' + esc(item.level) + '</span>' : '') +
      (grp ? '<span>' + esc(grp.title) + '</span>' : '') +
      (item.topic ? '<span>· ' + esc(item.topic) + '</span>' : '') + '</div>';
    var actions = '<div class="article-actions">' +
      '<button class="btn ' + (isDone ? 'done-state' : 'primary') + '" id="btnDone">' + (isDone ? '✓ Erledigt · Completed' : 'Als erledigt markieren · Mark complete') + '</button>' +
      '<button class="btn" id="btnMark">' + (isBookmarked ? '★ Gemerkt' : '☆ Merken · Bookmark') + '</button>' +
      '<button class="btn" id="btnPrint">🖨 PDF / Print</button>' +
      navPrevNext(id) + '</div>';
    el.content.innerHTML = '<div class="content"><div class="article">' + crumbs + MD.render(md) + '</div>' + actions + '</div>';
    // reinsert actions above article too? keep at bottom + crumbs top
    // wire
    $('#btnDone').addEventListener('click', function () {
      state.progress[id] = !state.progress[id]; if (!state.progress[id]) delete state.progress[id];
      set('progress', state.progress); refreshProgress(); toast(state.progress[id] ? 'Modul erledigt! 🎉' : 'Markierung entfernt'); route();
    });
    $('#btnMark').addEventListener('click', function () { toggleBookmark(id); route(); });
    $('#btnPrint').addEventListener('click', function () { window.print(); });
    enhanceContent(el.content);
  }
  function navPrevNext(id) {
    var ids = []; CI.groups.forEach(function (g) { g.items.forEach(function (it) { if (it.type === 'lesson' || it.type === 'guide') ids.push(it); }); });
    var idx = -1; ids.forEach(function (it, i) { if (it.id === id) idx = i; });
    var out = '';
    if (idx > 0) out += '<a class="btn" href="#/' + ids[idx - 1].id + '">← ' + esc(shorten(ids[idx - 1].title)) + '</a>';
    if (idx !== -1 && idx < ids.length - 1) out += '<a class="btn" href="#/' + ids[idx + 1].id + '">' + esc(shorten(ids[idx + 1].title)) + ' →</a>';
    return out;
  }
  function shorten(s) { return s.length > 22 ? s.slice(0, 20) + '…' : s; }

  function toggleBookmark(id) {
    var i = state.bookmarks.indexOf(id);
    if (i === -1) { state.bookmarks.push(id); toast('Gemerkt ★'); } else { state.bookmarks.splice(i, 1); toast('Entfernt'); }
    set('bookmarks', state.bookmarks);
  }

  /* enhance injected HTML: mermaid + audio + per-word/-sentence speakers */
  var FLAG = '🇩🇪';
  function mkSpeakBtn(text, cls) {
    var b = document.createElement('button');
    b.className = 'spk' + (cls ? ' ' + cls : ''); b.type = 'button';
    b.title = 'Vorlesen · anhören'; b.setAttribute('aria-label', 'Vorlesen'); b.textContent = '🔊';
    b.addEventListener('click', function (e) { e.stopPropagation(); e.preventDefault(); speak(text, b); });
    return b;
  }
  function genderClass(article) {
    var a = (article || '').toLowerCase().trim();
    return a === 'der' ? 'g-der' : a === 'die' ? 'g-die' : a === 'das' ? 'g-das' : '';
  }
  function genderLegend() {
    return '<div class="gender-legend"><span>Genus · gender:</span>' +
      '<span class="gl"><span class="dot" style="background:var(--g-der)"></span><b class="g-der">der</b> (m)</span>' +
      '<span class="gl"><span class="dot" style="background:var(--g-die)"></span><b class="g-die">die</b> (f)</span>' +
      '<span class="gl"><span class="dot" style="background:var(--g-das)"></span><b class="g-das">das</b> (n)</span></div>';
  }
  function germanFromFlagLine(t) {
    var i = t.indexOf(FLAG); if (i === -1) return '';
    var s = t.slice(i + FLAG.length).trim();
    s = s.replace(/\s*[*_]*\([^)]*\)[*_]*\s*$/, '');   // drop a trailing (note)
    s = s.split(/\s[—–]\s/)[0];                        // cut at the English gloss dash
    return s.replace(/\s+/g, ' ').trim();
  }
  function addTableSpeakers(root) {
    $all('table', root).forEach(function (tbl) {
      var ths = $all('thead th', tbl); if (!ths.length) return;
      var wordCol = -1, artCol = -1, exCol = -1;
      ths.forEach(function (th, i) {
        var h = (th.textContent || '').toLowerCase();
        if (wordCol < 0 && /deutsch|wort|begriff|vokabel/.test(h)) wordCol = i;
        if (/artikel/.test(h)) artCol = i;
        if (exCol < 0 && /beispiel|example|satz/.test(h)) exCol = i;
      });
      if (wordCol < 0 && exCol < 0) return;
      $all('tbody tr', tbl).forEach(function (tr) {
        var tds = $all('td', tr); if (!tds.length) return;
        var artRaw = (artCol > -1 && tds[artCol]) ? tds[artCol].textContent.trim() : '';
        var gc = genderClass(artRaw);
        if (wordCol > -1 && tds[wordCol]) {
          var w = tds[wordCol].textContent.trim();
          if (w && w !== '—' && w !== '-') {
            tds[wordCol].insertBefore(mkSpeakBtn((/^(der|die|das)$/i.test(artRaw) ? artRaw + ' ' : '') + w), tds[wordCol].firstChild);
            if (gc) tds[wordCol].classList.add(gc);
          }
        }
        if (gc && artCol > -1 && tds[artCol]) tds[artCol].classList.add(gc);
        if (exCol > -1 && tds[exCol]) {
          var e = tds[exCol].textContent.trim();
          if (e && e !== '—' && e.length > 3) tds[exCol].appendChild(mkSpeakBtn(e));
        }
      });
    });
  }
  function addFlagSpeakers(root) {
    $all('p, li', root).forEach(function (el) {
      if (el.querySelector('.spk')) return;
      if (el.textContent.indexOf(FLAG) === -1) return;
      var g = germanFromFlagLine(el.textContent);
      if (g && g.length > 2) el.appendChild(mkSpeakBtn(g, 'inline'));
    });
  }
  function enhanceContent(root) {
    renderMermaid(root);
    $all('.audio-btn', root).forEach(function (b) {
      b.addEventListener('click', function () { speak(b.parentNode.getAttribute('data-speak') || b.parentNode.textContent, b); });
    });
    addTableSpeakers(root);
    addFlagSpeakers(root);
  }
  function renderMermaid(root) {
    var nodes = $all('.mermaid', root); if (!nodes.length) return;
    nodes.forEach(function (n) { if (!n.getAttribute('data-src')) n.setAttribute('data-src', n.textContent); });
    if (window.mermaid && typeof window.mermaid.run === 'function') {
      nodes.forEach(function (n) { n.removeAttribute('data-processed'); n.innerHTML = n.getAttribute('data-src'); n.removeAttribute('data-err'); });
      try {
        var p = window.mermaid.run({ nodes: nodes });
        if (p && p.catch) p.catch(function () { mermaidFallback(nodes); });
      } catch (e) { mermaidFallback(nodes); }
    } else { mermaidFallback(nodes); }
  }
  function mermaidFallback(nodes) {
    nodes.forEach(function (n) { n.setAttribute('data-err', '1'); n.innerHTML = '<pre>' + esc(n.getAttribute('data-src') || '') + '</pre>'; });
  }

  /* ---------------- render: home ---------------- */
  function renderHome() {
    var ids = allLessonIds(), done = ids.filter(function (x) { return state.progress[x]; }).length;
    var known = Object.keys(state.fc).filter(function (k) { return state.fc[k] === 'known'; }).length;
    var m = CI.meta;
    var html = '<div class="content">';
    html += '<div class="hero"><h1>' + esc(m.title || 'German for Software Engineers') + '</h1>' +
      '<p>' + esc(m.subtitle || '') + ' — Ein interaktives Handbuch, das dich vom Niveau B1 zu B2/C1 und in einen deutschen IT-Job begleitet. <em>An interactive handbook taking you from B1 to a German software job.</em></p></div>';
    html += '<div style="margin:2px 0 14px">' + genderLegend() + '</div>';
    html += '<div class="stat-row">' +
      '<div class="stat"><div class="n">' + done + '/' + ids.length + '</div><div class="l">Module erledigt · Modules done</div></div>' +
      '<div class="stat"><div class="n">' + FC.length + '</div><div class="l">Flashcards</div></div>' +
      '<div class="stat"><div class="n">' + known + '</div><div class="l">Vokabeln gelernt · known</div></div>' +
      '<div class="stat"><div class="n">' + state.bookmarks.length + '</div><div class="l">Bookmarks ★</div></div></div>';
    if (state.lastRoute && state.lastRoute !== 'home' && BUNDLE[state.lastRoute]) {
      var li = itemById(state.lastRoute);
      html += '<p style="margin-top:18px"><a class="btn primary" href="#/' + state.lastRoute + '">▶ Weiterlernen · Continue: ' + esc(li ? li.item.title : state.lastRoute) + '</a></p>';
    }
    if (BUNDLE['home']) { html += '<div class="article" style="margin-top:20px">' + MD.render(BUNDLE['home']) + '</div>'; }
    // phase cards
    html += '<h2 style="margin-top:28px;border:none">Die 6 Phasen · The 6 Phases</h2><div class="card-grid">';
    CI.groups.filter(function (g) { return g.id.indexOf('phase') === 0; }).forEach(function (g) {
      var first = g.items[0];
      html += '<div class="card" data-go="' + first.id + '"><div class="k">' + (g.badge || '') + '</div>' +
        '<div class="t">' + esc(g.title) + '</div><div class="d">' + g.items.length + ' Module</div></div>';
    });
    html += '</div>';
    html += '<div class="card-grid" style="margin-top:14px">' +
      '<div class="card" data-go="@flashcards"><div class="k">Tool</div><div class="t">🃏 Flashcards</div><div class="d">' + FC.length + ' IT-Vokabeln</div></div>' +
      '<div class="card" data-go="@quiz"><div class="k">Tool</div><div class="t">❓ Quizzes</div><div class="d">Grammatik & Vokabeln testen</div></div>' +
      '<div class="card" data-go="@checklist"><div class="k">Tool</div><div class="t">✅ Weekly Checklist</div><div class="d">Wochenplan abhaken</div></div>' +
      '<div class="card" data-go="@bookmarks"><div class="k">Tool</div><div class="t">★ Bookmarks</div><div class="d">Gemerkte Lektionen</div></div></div>';
    html += '</div>';
    el.content.innerHTML = html;
    $all('.card[data-go]', el.content).forEach(function (c) { c.addEventListener('click', function () { go(c.getAttribute('data-go')); }); });
    enhanceContent(el.content);
  }

  /* ---------------- render: flashcards ---------------- */
  var fcView = { list: [], idx: 0, flipped: false };
  function renderFlashcards() {
    var topics = uniq(FC.map(function (c) { return c.topic; }));
    var html = '<div class="content"><h1>🃏 Vokabel-Flashcards</h1>' +
      '<p style="color:var(--text-soft)">Klick auf die Karte zum Umdrehen. „Vorlesen“ nutzt die deutsche TTS-Stimme deines Systems.</p>' +
      '<div class="fc-toolbar">' +
      '<select id="fcTopic"><option value="">Alle Themen · All topics</option>' + topics.map(function (t) { return '<option value="' + esc(t) + '">' + esc(t) + '</option>'; }).join('') + '</select>' +
      '<select id="fcLevel"><option value="">Alle Level</option>' + CI.levels.map(function (l) { return '<option>' + l + '</option>'; }).join('') + '</select>' +
      '<button class="btn" id="fcShuffle">🔀 Mischen</button>' +
      '<button class="btn" id="fcReview">↻ Nur zu wiederholen</button>' +
      '</div>' + genderLegend() + '<div class="fc-stage" id="fcStage"></div></div>';
    el.content.innerHTML = html;
    $('#fcTopic').addEventListener('change', fcApply);
    $('#fcLevel').addEventListener('change', fcApply);
    $('#fcShuffle').addEventListener('click', function () { shuffle(fcView.list); fcView.idx = 0; fcView.flipped = false; drawCard(); });
    $('#fcReview').addEventListener('click', function () {
      fcView.list = FC.filter(function (c) { return state.fc[c.id] === 'review'; });
      if (!fcView.list.length) { toast('Keine Karten zum Wiederholen — gut gemacht!'); fcApply(); return; }
      fcView.idx = 0; fcView.flipped = false; drawCard();
    });
    fcApply();
  }
  function fcApply() {
    var t = $('#fcTopic') ? $('#fcTopic').value : '', l = $('#fcLevel') ? $('#fcLevel').value : '';
    fcView.list = FC.filter(function (c) { return (!t || c.topic === t) && (!l || c.level === l); });
    fcView.idx = 0; fcView.flipped = false; drawCard();
  }
  function drawCard() {
    var stage = $('#fcStage'); if (!stage) return;
    if (!fcView.list.length) { stage.innerHTML = '<div class="empty">Keine Karten für diesen Filter.</div>'; return; }
    var c = fcView.list[fcView.idx];
    var st = state.fc[c.id] || '';
    stage.innerHTML =
      '<div class="flashcard ' + (fcView.flipped ? 'flipped' : '') + '" id="theCard"><div class="fc-inner">' +
        '<div class="fc-face front"><span class="fc-topic-tag">' + esc(c.topic) + ' · ' + esc(c.level || '') + '</span>' +
          '<div class="fc-word"><span class="art ' + genderClass(c.article) + '">' + esc(c.article || '') + '</span> <span class="' + genderClass(c.article) + '">' + esc(c.de) + '</span></div>' +
          (c.plural ? '<div class="fc-ipa">Plural: ' + esc(c.plural) + '</div>' : '') +
          (c.ipa ? '<div class="fc-ipa">' + esc(c.ipa) + '</div>' : '') +
          '<div class="fc-flip-hint">Klick zum Umdrehen · click to flip</div></div>' +
        '<div class="fc-face back"><span class="fc-topic-tag">' + esc(c.topic) + '</span>' +
          '<div class="fc-row"><b>EN:</b> ' + esc(c.en) + '</div>' +
          (c.vi ? '<div class="fc-row"><b>VI:</b> ' + esc(c.vi) + '</div>' : '') +
          (c.ex ? '<div class="fc-row fc-de-ex">„' + esc(c.ex) + '“</div>' : '') +
          (c.exEn ? '<div class="fc-row" style="color:var(--text-soft)">' + esc(c.exEn) + '</div>' : '') +
          (c.coll ? '<div class="fc-row" style="margin-top:6px"><b>Kollokationen:</b> ' + esc(c.coll) + '</div>' : '') +
          (c.tip ? '<div class="fc-row" style="color:var(--text-faint)">💡 ' + esc(c.tip) + '</div>' : '') +
        '</div></div></div>' +
      '<div class="fc-progress">' + (fcView.idx + 1) + ' / ' + fcView.list.length + (st ? ' · ' + (st === 'known' ? '✅ gelernt' : '↻ wiederholen') : '') + '</div>' +
      '<div class="fc-controls">' +
        '<button class="btn" id="fcPrev">← Zurück</button>' +
        '<button class="btn" id="fcSpeak">🔊 Vorlesen</button>' +
        '<button class="btn" id="fcReviewMark">↻ Wiederholen</button>' +
        '<button class="btn primary" id="fcKnown">✅ Gelernt</button>' +
        '<button class="btn" id="fcNext">Weiter →</button>' +
      '</div>';
    $('#theCard').addEventListener('click', function (e) { if (e.target.closest('.fc-controls')) return; fcView.flipped = !fcView.flipped; $('#theCard').classList.toggle('flipped'); });
    $('#fcPrev').addEventListener('click', function () { fcView.idx = (fcView.idx - 1 + fcView.list.length) % fcView.list.length; fcView.flipped = false; drawCard(); });
    $('#fcNext').addEventListener('click', fcNext);
    $('#fcSpeak').addEventListener('click', function () { speak((c.article ? c.article + ' ' : '') + c.de + '. ' + (c.ex || ''), $('#fcSpeak')); });
    $('#fcKnown').addEventListener('click', function () { state.fc[c.id] = 'known'; set('fc', state.fc); toast('Als gelernt markiert ✅'); fcNext(); });
    $('#fcReviewMark').addEventListener('click', function () { state.fc[c.id] = 'review'; set('fc', state.fc); toast('Zum Wiederholen markiert ↻'); fcNext(); });
  }
  function fcNext() { fcView.idx = (fcView.idx + 1) % fcView.list.length; fcView.flipped = false; drawCard(); }

  /* ---------------- render: quiz ---------------- */
  function renderQuizIndex() {
    var html = '<div class="content"><h1>❓ Quizzes</h1><p style="color:var(--text-soft)">Teste Grammatik, Vokabeln und IT-Deutsch. Sofortiges Feedback mit Erklärung.</p><div class="card-grid">';
    if (!QZ.length) html += '<div class="empty">Noch keine Quizzes im Bundle.</div>';
    QZ.forEach(function (q, i) {
      html += '<div class="card" data-quiz="' + i + '"><div class="k">' + esc(q.level || '') + ' · ' + esc(q.topic || '') + '</div>' +
        '<div class="t">' + esc(q.title) + '</div><div class="d">' + q.questions.length + ' Fragen</div></div>';
    });
    html += '</div></div>';
    el.content.innerHTML = html;
    $all('.card[data-quiz]', el.content).forEach(function (c) { c.addEventListener('click', function () { renderQuiz(+c.getAttribute('data-quiz')); }); });
  }
  function renderQuiz(qi) {
    var q = QZ[qi]; if (!q) return renderQuizIndex();
    var answered = 0, score = 0;
    var html = '<div class="content"><a class="btn" href="#/@quiz">← Alle Quizzes</a>' +
      '<h1 style="margin-top:14px">' + esc(q.title) + '</h1><div class="quiz">';
    q.questions.forEach(function (item, i) {
      html += '<div class="quiz-q" data-qi="' + i + '"><div class="qtext">' + (i + 1) + '. ' + esc(item.q) + '</div>';
      item.options.forEach(function (opt, oi) { html += '<button class="quiz-opt" data-oi="' + oi + '">' + esc(opt) + '</button>'; });
      html += '<div class="quiz-fb"></div></div>';
    });
    html += '<div class="quiz-score" id="quizScore"></div></div></div>';
    el.content.innerHTML = html;
    $all('.quiz-q', el.content).forEach(function (qEl, i) {
      var item = q.questions[i], solved = false;
      $all('.quiz-opt', qEl).forEach(function (btn, oi) {
        btn.addEventListener('click', function () {
          if (solved) return; solved = true; answered++;
          var correct = oi === item.answer;
          if (correct) { btn.classList.add('correct'); score++; }
          else { btn.classList.add('wrong'); $all('.quiz-opt', qEl)[item.answer].classList.add('correct'); }
          $all('.quiz-opt', qEl).forEach(function (b) { b.disabled = true; });
          var fb = $('.quiz-fb', qEl); fb.innerHTML = (correct ? '✅ Richtig! ' : '❌ ') + esc(item.explain || ''); fb.classList.add('show');
          if (answered === q.questions.length) $('#quizScore').textContent = 'Ergebnis · Score: ' + score + ' / ' + q.questions.length + (score === q.questions.length ? ' — perfekt! 🎉' : '');
        });
      });
    });
  }

  /* ---------------- render: checklist ---------------- */
  function renderChecklist() {
    var html = '<div class="content"><h1>✅ Weekly Study Checklist</h1>' +
      '<p style="color:var(--text-soft)">Hake Aufgaben ab — der Fortschritt wird lokal gespeichert.</p><div class="checklist">';
    if (!CL.length) html += '<div class="empty">Noch keine Wochen im Bundle.</div>';
    CL.forEach(function (w, wi) {
      var total = w.items.length, done = w.items.filter(function (_, ii) { return state.checklist['w' + wi + '-' + ii]; }).length;
      html += '<div class="wk"><div class="wk-head" data-w="' + wi + '"><b>' + esc(w.title) + '</b><span class="badge">' + done + '/' + total + '</span><span class="caret">▾</span></div>' +
        '<div class="wk-body">';
      w.items.forEach(function (it, ii) {
        var k = 'w' + wi + '-' + ii, on = !!state.checklist[k];
        html += '<label class="' + (on ? 'done' : '') + '"><input type="checkbox" data-k="' + k + '" ' + (on ? 'checked' : '') + '><span>' + esc(it) + '</span></label>';
      });
      html += '</div></div>';
    });
    html += '</div></div>';
    el.content.innerHTML = html;
    $all('.checklist input', el.content).forEach(function (cb) {
      cb.addEventListener('change', function () {
        var k = cb.getAttribute('data-k');
        if (cb.checked) state.checklist[k] = true; else delete state.checklist[k];
        set('checklist', state.checklist);
        cb.parentNode.classList.toggle('done', cb.checked);
        var head = cb.closest('.wk').querySelector('.badge'); var body = cb.closest('.wk-body');
        var total = $all('input', body).length, done = $all('input:checked', body).length;
        head.textContent = done + '/' + total;
      });
    });
    $all('.wk-head', el.content).forEach(function (h) { h.addEventListener('click', function (e) { if (e.target.tagName === 'INPUT') return; h.parentNode.classList.toggle('collapsed'); var b = h.nextElementSibling; b.style.display = b.style.display === 'none' ? '' : 'none'; }); });
  }

  /* ---------------- render: bookmarks ---------------- */
  function renderBookmarks() {
    var html = '<div class="content"><h1>★ Bookmarks</h1>';
    if (!state.bookmarks.length) html += '<div class="empty">Noch nichts gemerkt. Öffne eine Lektion und klick „☆ Merken“.</div>';
    else state.bookmarks.forEach(function (id) {
      var m = itemById(id); if (!m) return;
      html += '<a class="sr-item" href="#/' + id + '"><div class="sr-t">' + esc(m.item.title) + '</div>' +
        '<div class="sr-c">' + esc(m.group.title) + ' · ' + esc(m.item.level) + '</div></a>';
    });
    html += '</div>';
    el.content.innerHTML = html;
  }

  /* ---------------- search ---------------- */
  var searchIndex = null;
  function buildSearchIndex() {
    searchIndex = [];
    CI.groups.forEach(function (g) {
      g.items.forEach(function (it) {
        var text = BUNDLE[it.id] ? MD.toText(BUNDLE[it.id]) : '';
        searchIndex.push({ id: it.id, title: it.title, group: g.title, level: it.level, type: it.type, text: text });
      });
    });
    // flashcards are searchable too
    FC.forEach(function (c) { searchIndex.push({ id: '@flashcards', title: c.de + ' — ' + c.en, group: 'Flashcard', level: c.level, type: 'flashcards', text: [c.de, c.en, c.vi, c.ex].join(' ') }); });
  }
  function renderSearch(qRaw) {
    if (!searchIndex) buildSearchIndex();
    var q = qRaw.trim().toLowerCase();
    if (el.search.value !== qRaw) el.search.value = qRaw;
    if (q.length < 2) { el.content.innerHTML = '<div class="content"><div class="empty">Mindestens 2 Zeichen eingeben…</div></div>'; return; }
    var res = [];
    searchIndex.forEach(function (r) {
      var t = r.title.toLowerCase(), inT = t.indexOf(q) !== -1, inC = r.text.toLowerCase().indexOf(q) !== -1;
      if (inT || inC) res.push({ r: r, score: (inT ? 100 : 0) + (inC ? 10 : 0) - r.title.length * 0.01 });
    });
    res.sort(function (a, b) { return b.score - a.score; });
    var html = '<div class="content"><h1>🔎 Suche · Search</h1><p style="color:var(--text-soft)">' + res.length + ' Treffer für „' + esc(qRaw) + '“</p>';
    if (!res.length) html += '<div class="empty">Nichts gefunden.</div>';
    res.slice(0, 60).forEach(function (o) {
      var r = o.r, snip = snippet(r.text, q);
      html += '<a class="sr-item" href="#/' + r.id + '"><div class="sr-t">' + hl(r.title, q) + '</div>' +
        '<div class="sr-c">' + esc(r.group) + ' · ' + esc(r.level || '') + (r.type ? ' · ' + esc(r.type) : '') + '</div>' +
        (snip ? '<div class="sr-x">' + snip + '</div>' : '') + '</a>';
    });
    html += '</div>';
    el.content.innerHTML = html;
  }
  function snippet(text, q) {
    if (!text) return ''; var i = text.toLowerCase().indexOf(q); if (i === -1) return esc(text.slice(0, 120)) + '…';
    var s = Math.max(0, i - 50); return (s > 0 ? '…' : '') + hl(text.slice(s, s + 140), q) + '…';
  }
  function hl(text, q) {
    var i = text.toLowerCase().indexOf(q.toLowerCase()); if (i === -1) return esc(text);
    return esc(text.slice(0, i)) + '<mark>' + esc(text.slice(i, i + q.length)) + '</mark>' + esc(text.slice(i + q.length));
  }

  /* ---------------- utils ---------------- */
  function uniq(a) { return a.filter(function (v, i) { return a.indexOf(v) === i; }); }
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function closeNav() { document.querySelector('.app-shell').classList.remove('nav-open'); }

  /* ---------------- init ---------------- */
  function init() {
    el.nav = $('#nav'); el.content = $('#content'); el.search = $('#search');
    el.themeBtn = $('#themeBtn'); el.toast = $('#toast');
    initTheme();
    if (window.mermaid) { try { window.mermaid.initialize({ startOnLoad: false, theme: document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'default', securityLevel: 'loose', fontFamily: 'inherit' }); } catch (e) {} }
    loadVoices(); if (window.speechSynthesis) speechSynthesis.onvoiceschanged = loadVoices;
    buildSidebar();

    el.themeBtn.addEventListener('click', function () { setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'); if (BUNDLE[currentRoute()]) route(); });
    $('#menuBtn').addEventListener('click', function () { document.querySelector('.app-shell').classList.toggle('nav-open'); });
    $('#scrim').addEventListener('click', closeNav);

    var searchT;
    el.search.addEventListener('input', function () {
      clearTimeout(searchT); var v = el.search.value;
      searchT = setTimeout(function () {
        if (v.trim().length >= 2) { if (location.hash !== '#/search/' + encodeURIComponent(v)) location.hash = '#/search/' + encodeURIComponent(v); else renderSearch(v); }
        else if (location.hash.indexOf('#/search/') === 0) { location.hash = '#/' + (state.lastRoute && state.lastRoute.indexOf('search') !== 0 ? 'home' : 'home'); }
      }, 200);
    });
    el.search.addEventListener('keydown', function (e) { if (e.key === 'Enter' && el.search.value.trim().length >= 2) location.hash = '#/search/' + encodeURIComponent(el.search.value); });
    document.addEventListener('keydown', function (e) {
      if (e.key === '/' && document.activeElement !== el.search) { e.preventDefault(); el.search.focus(); }
      if (e.key === 'Escape' && document.activeElement === el.search) { el.search.blur(); }
    });

    window.addEventListener('hashchange', route);
    route();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
