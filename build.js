#!/usr/bin/env node
/*!
 * build.js — turns the Markdown in /content into lazily-loadable chunks.
 *
 *   js/content/<group>.js   one chunk per sidebar group, loaded on demand
 *   js/content-manifest.js  module-id -> chunk map + per-chunk content hashes
 *
 * Why chunks: the old single content-bundle.js was loaded on every page view.
 * At ~120k words that was 775 KB; the planned ~300k words would have made it
 * ~1.9 MB of blocking JS. Chunks mean a reader downloads the phase they open,
 * not the whole handbook.
 *
 * Loading stays <script>-tag based (never fetch/XHR), so opening index.html
 * straight from disk with file:// keeps working.
 *
 * Usage:  node build.js             build + report problems
 *         node build.js --strict    exit 1 on any problem (CI gate): dead links,
 *                                   nested/unclosed fences, sidebar entries with no
 *                                   file, Markdown files missing from content-index.js,
 *                                   and topics with no filter chip.
 * Re-run whenever you add or edit Markdown in /content.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const crypto = require('crypto');

const ROOT = __dirname;
const CONTENT = path.join(ROOT, 'content');
const JSDIR = path.join(ROOT, 'js');
const CHUNKDIR = path.join(JSDIR, 'content');
const MANIFEST = path.join(JSDIR, 'content-manifest.js');
const INDEX = path.join(ROOT, 'index.html');
const STRICT = process.argv.includes('--strict');

/* Chunk holding any Markdown file that no sidebar group claims. Such a file is
   unreachable from the nav, so the link report calls it out separately. */
const ORPHAN_CHUNK = 'misc';

function walk(dir) {
  let files = [];
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) files = files.concat(walk(full));
    else if (name.endsWith('.md')) files.push(full);
  }
  return files;
}

function hash(s) {
  return crypto.createHash('sha1').update(s).digest('hex').slice(0, 10);
}

/* content-index.js is browser code (`window.CONTENT_INDEX = {...}`); run it in
   a sandbox rather than duplicating the nav structure here. */
function loadIndex() {
  const src = fs.readFileSync(path.join(JSDIR, 'content-index.js'), 'utf8');
  const sandbox = { window: {} };
  vm.runInNewContext(src, sandbox, { filename: 'content-index.js' });
  const ci = sandbox.window.CONTENT_INDEX;
  if (!ci || !Array.isArray(ci.groups)) throw new Error('content-index.js did not define window.CONTENT_INDEX.groups');
  return ci;
}

if (!fs.existsSync(CONTENT)) {
  console.error('No /content directory found at ' + CONTENT);
  process.exit(1);
}

const CI = loadIndex();

/* ---------- module id -> group id ---------- */
const groupOfId = new Map();
const indexIds = new Set();
const indexTopics = new Set(CI.topics || []);
const topicProblems = [];
CI.groups.forEach(g => {
  g.items.forEach(it => {
    indexIds.add(it.id);
    if (!it.id.startsWith('@')) groupOfId.set(it.id, g.id);
    if (it.topic && !indexTopics.has(it.topic)) topicProblems.push({ id: it.id, topic: it.topic });
  });
});

/* ---------- read content ---------- */
const files = walk(CONTENT).sort();
const map = {};
for (const full of files) {
  const key = path.relative(CONTENT, full).replace(/\\/g, '/').replace(/\.md$/, '');
  map[key] = fs.readFileSync(full, 'utf8');
}

/* ---------- group into chunks ---------- */
const chunks = new Map();          // chunkId -> { [moduleId]: markdown }
const orphans = [];
for (const key of Object.keys(map)) {
  const chunk = groupOfId.get(key) || ORPHAN_CHUNK;
  if (chunk === ORPHAN_CHUNK) orphans.push(key);
  if (!chunks.has(chunk)) chunks.set(chunk, {});
  chunks.get(chunk)[key] = map[key];
}

/* ---------- fence lint ----------
   The renderer closes a fence on a line of exactly three backticks, so a code
   fence nested inside ```spoiler silently closes it early and leaks the answers.
   Cheap to make, invisible in a diff, so it gets checked here. */
const fenceProblems = [];
for (const [key, md] of Object.entries(map)) {
  const lines = md.split('\n');
  let open = null, openLine = 0;
  lines.forEach((l, i) => {
    if (!/^```/.test(l)) return;
    const lang = (l.match(/^```(\w*)/) || [])[1] || '';
    if (open === null) { open = lang; openLine = i + 1; }
    else if (l.trim() === '```') { open = null; }
    else {
      // a labelled fence opened while another is still open
      fenceProblems.push({ file: key, line: i + 1, inner: lang, outer: open || '(plain)', openLine });
    }
  });
  if (open !== null) fenceProblems.push({ file: key, line: openLine, inner: '(never closed)', outer: open || '(plain)', openLine });
}

/* ---------- link check ---------- */
const LINK_RE = /\]\(#\/([^)\s]+)\)/g;
const deadLinks = [];
for (const [key, md] of Object.entries(map)) {
  let m;
  LINK_RE.lastIndex = 0;
  while ((m = LINK_RE.exec(md)) !== null) {
    const target = m[1].split('#')[0].replace(/\/$/, '');
    if (!target) continue;
    const ok = target.startsWith('@')
      ? indexIds.has(target)
      : (Object.prototype.hasOwnProperty.call(map, target) || indexIds.has(target));
    if (!ok) deadLinks.push({ from: key, to: target });
  }
}
const missingContent = [...indexIds].filter(id => !id.startsWith('@') && !Object.prototype.hasOwnProperty.call(map, id));

/* ---------- write chunks ---------- */
fs.mkdirSync(CHUNKDIR, { recursive: true });
const chunkMeta = {};   // chunkId -> version hash
const chunkOf = {};     // moduleId -> chunkId
let totalChars = 0;

for (const [chunkId, mods] of [...chunks.entries()].sort()) {
  const json = JSON.stringify(mods);
  const v = hash(json);
  chunkMeta[chunkId] = v;
  Object.keys(mods).forEach(id => { chunkOf[id] = chunkId; totalChars += mods[id].length; });
  const banner =
    '/*! content chunk "' + chunkId + '" — GENERATED by build.js. Do not edit.\n' +
    ' * ' + Object.keys(mods).length + ' modules · ~' + Math.round(json.length / 1024) + ' KB\n' +
    ' */\n';
  fs.writeFileSync(
    path.join(CHUNKDIR, chunkId + '.js'),
    banner + 'window.__contentChunk(' + JSON.stringify(chunkId) + ',' + json + ');\n',
    'utf8'
  );
}

/* Remove stale chunk files from renamed or deleted groups. */
for (const f of fs.readdirSync(CHUNKDIR)) {
  if (f.endsWith('.js') && !Object.prototype.hasOwnProperty.call(chunkMeta, f.replace(/\.js$/, ''))) {
    fs.unlinkSync(path.join(CHUNKDIR, f));
    console.log('· removed stale chunk ' + f);
  }
}

/* "start" holds home + roadmap-overview and must be present before the first
   paint; everything else waits until the reader opens it. */
const EAGER = ['start'].filter(c => Object.prototype.hasOwnProperty.call(chunkMeta, c));

const manifest = { version: hash(JSON.stringify(chunkMeta)), eager: EAGER, chunks: chunkMeta, chunkOf: chunkOf };
fs.writeFileSync(
  MANIFEST,
  '/*! content-manifest.js — GENERATED by build.js. Do not edit.\n' +
  ' * No timestamp here on purpose: manifest.version already identifies the\n' +
  ' * content, and a clock in the banner made every build produce a diff.\n' +
  ' * ' + Object.keys(chunkOf).length + ' modules in ' + Object.keys(chunkMeta).length + ' chunks · ~' +
  Math.round(totalChars / 1000) + 'k chars\n */\n' +
  'window.CONTENT_MANIFEST = ' + JSON.stringify(manifest) + ';\n',
  'utf8'
);

/* Retire the old monolithic bundle once chunks exist. */
const legacy = path.join(JSDIR, 'content-bundle.js');
if (fs.existsSync(legacy)) { fs.unlinkSync(legacy); console.log('· removed legacy js/content-bundle.js (replaced by chunks)'); }

/* ---------- stamp index.html ----------
   Every local js/*.js gets a ?v= hash of its own contents. Without this, an
   edited quizzes.js or flashcards-N.js is silently served from cache and the
   new data never appears — the same failure the content bundle already hit. */
if (fs.existsSync(INDEX)) {
  const html = fs.readFileSync(INDEX, 'utf8');
  const stamped = html.replace(
    /(<script\b[^>]*\bsrc=")(js\/[A-Za-z0-9._/-]+\.js)(?:\?v=[^"]*)?(")/g,
    (m, pre, src, post) => {
      const file = path.join(ROOT, src);
      if (!fs.existsSync(file)) { console.warn('! index.html references missing ' + src); return m; }
      return pre + src + '?v=' + hash(fs.readFileSync(file, 'utf8')) + post;
    }
  );
  if (stamped !== html) { fs.writeFileSync(INDEX, stamped, 'utf8'); console.log('✓ Stamped index.html script tags with content hashes'); }
  else console.log('· index.html script versions already current');
}

/* ---------- report ---------- */
console.log('✓ Built ' + Object.keys(chunkOf).length + ' modules → ' + Object.keys(chunkMeta).length + ' chunks (v=' + manifest.version + ')');
[...chunks.entries()].sort().forEach(([id, mods]) => {
  const kb = Math.round(JSON.stringify(mods).length / 1024);
  console.log('   · ' + id.padEnd(24) + String(Object.keys(mods).length).padStart(3) + ' modules  ' + String(kb).padStart(5) + ' KB' + (EAGER.includes(id) ? '  [eager]' : ''));
});

if (topicProblems.length) {
  console.warn('\n! ' + topicProblems.length + ' item(s) use a topic missing from CONTENT_INDEX.topics — no filter chip will render:');
  topicProblems.forEach(p => console.warn('   · ' + p.id + '  →  topic "' + p.topic + '"'));
}
if (orphans.length) {
  console.warn('\n! ' + orphans.length + ' Markdown file(s) not listed in content-index.js — unreachable from the sidebar:');
  orphans.forEach(o => console.warn('   · content/' + o + '.md'));
}
if (missingContent.length) {
  console.warn('\n! ' + missingContent.length + ' sidebar entr(ies) have no Markdown file — they render an empty state:');
  missingContent.forEach(o => console.warn('   · ' + o));
}
if (fenceProblems.length) {
  console.error('\n✗ ' + fenceProblems.length + ' nested/unclosed fence(s) — a spoiler or uebung block will break:');
  fenceProblems.forEach(f => console.error('   · content/' + f.file + '.md:' + f.line + '  ```' + f.inner + ' inside ```' + f.outer + ' (opened line ' + f.openLine + ')'));
}
if (deadLinks.length) {
  console.error('\n✗ ' + deadLinks.length + ' dead internal link(s):');
  deadLinks.forEach(d => console.error('   · content/' + d.from + '.md  →  #/' + d.to));
} else {
  console.log('\n✓ No dead internal links.');
}

if (STRICT && (deadLinks.length || missingContent.length || topicProblems.length || fenceProblems.length || orphans.length)) {
  console.error('\n--strict: failing build.');
  process.exit(1);
}
