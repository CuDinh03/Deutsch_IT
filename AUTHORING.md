# AUTHORING — the handbook for working on this project

> **Read this before touching anything.** It is the *how*. Its companions:
> [UPGRADE-PLAN.md](UPGRADE-PLAN.md) is the *what and why* (the original plan plus the ✅ batch
> history at §8), [BACKLOG.md](BACKLOG.md) is **what is still open and whether it is worth doing**,
> [CONTENT-STYLE-GUIDE.md](CONTENT-STYLE-GUIDE.md) is the *voice and vocabulary*, and
> [README.md](README.md) is written for the learner, not for you.
>
> Last verified: **19.08.2026**, after Đợt 9, flashcard passes 1–5 and the Goethe B1 module.

---

## 0. Start here

### Where the project stands

| | Value |
|---|---:|
| Content modules | **157** |
| Words | **~322,850** |
| Interactive exercises | **1,768** |
| Flashcards | **1,378** — table harvest complete (§6.1) |
| Quizzes / questions | **20 / 186** |
| Checklist weeks | **all 52** ✅ |

**All ten batches are done.** Đợt 0 (engine) · 1 (Phase 1) · 2 (Alltag) · 3 (Phase 2) · 4 (telc B2) ·
5 (Phase 3) · 6 (Phase 4 + `templates/`) · 7 (Phase 5 + 3 dialogues) · 8 (Phase 6 + `bewerbung/`) ·
9 (Goethe C1 + 4 interview banks + final sweep).

**Every module UPGRADE-PLAN called for is written, and the flashcard harvest is finished.** Passes
1–5 turned the modules' own vocabulary tables into cards: of **1,280** measured table rows, **1,248**
are carded and the 32 that remain are all deliberate skips, listed in §6.1. The deck sits at
**1,378** against the plan's ~2,050, and closing that gap means **writing new vocabulary** rather
than harvesting tables — a different job with a different quality bar. Read §6.1 before starting it.

**What is still open lives in [BACKLOG.md](BACKLOG.md)** — every item measured, with a command to
re-measure it and an opinion on whether it is worth doing. The short version: the **quiz**
workstream is the one real gap (20 sets / 186 questions against a planned ~70 / ~900), and **74 % of
multiple-choice answers sit in position 1**, so clicking the first option scores 74 % without
reading.

### First five minutes in a new session

```bash
git log --oneline -5          # what happened last
node build.js --strict        # must end "✓ No dead internal links."
python3 -m http.server 8777   # then open http://localhost:8777
```

If the build is clean and the app loads, the repo is in a good state and you can start.

### Ready-made prompts

| You want to … | Say |
|---|---|
| pick up the open work | `Read BACKLOG.md, then do <item>.` |
| add cards beyond the harvest | `Read AUTHORING.md §6.1, then add a flashcard deck on <topic>.` |
| add a module | `Read AUTHORING.md §6.2, then write <module> in content/<group>/.` |
| fix something | `Read AUTHORING.md §5 and §9, then fix <problem>.` |

---

## 1. Architecture in one page

**No framework, no bundler, no npm.** The app is vanilla JS loaded by `<script>` tags. Node is used
only to run `build.js`. There is nothing to install.

```
index.html          the whole shell; every JS file is listed here as a <script defer>
css/styles.css      all styling, CSS custom properties, light + dark
js/markdown.js      the Markdown renderer, including the custom fences (§2)
js/app.js           the engine: routing, sidebar, search, flashcards, quizzes, checklist
js/content-index.js the sidebar/navigation manifest — hand-edited (§4.4)
js/flashcards*.js   13 files, each concatenating onto window.FLASHCARDS (§4.1)
js/quizzes.js       one array, window.QUIZZES (§4.2)
js/checklist.js     one array, window.CHECKLIST (§4.3)
js/content/*.js     GENERATED — one chunk per sidebar group
js/content-manifest.js  GENERATED — module→chunk map plus content hashes
content/**/*.md     all the actual teaching material
build.js            turns content/ into the two generated things above
assets/audio/       (unused so far; TTS is generated in the browser)
```

### The build

`node build.js` does five things:

1. Reads every `content/**/*.md`.
2. Runs `js/content-index.js` in a Node `vm` sandbox to learn the sidebar structure — the nav is
   never duplicated in the build script.
3. Writes **one chunk per sidebar group** to `js/content/<group>.js`, plus `js/content-manifest.js`
   (module → chunk map, per-chunk hashes, and the `eager` list, currently `["start"]`).
4. **Stamps every local `<script>` in `index.html`** with a content hash (`?v=…`) so an edited
   `quizzes.js` can never be served stale.
5. Lints: dead internal links, nested or unclosed fences, sidebar entries with no Markdown file,
   Markdown files no sidebar group claims (they land in a `misc` chunk and are reported), and topics
   with no filter chip.

`--strict` turns those lint findings into exit code 1. **The build is idempotent** — running it
twice produces no diff. Always run it before committing.

### How content reaches the reader

Chunks are loaded by **injecting `<script>` tags**, never `fetch`. That is deliberate: it keeps
`index.html` working when opened directly from disk over `file://`. Only the `start` chunk loads up
front (~10 KB); a phase chunk arrives when you open a page in it, and search loads every chunk once,
the first time you actually search.

### State

Everything the learner does persists in `localStorage` under the prefix **`gfit:`**. Keys in use:
`theme`, `progress`, `checks`, `checklist`, `ueb`, `fc`, `bookmarks`, `journal`, `collapse`,
`lastRoute`. They are read and written through `get()` / `set()` near the top of `js/app.js`.

### Deployment — read this before committing

`.github/workflows/deploy.yml` publishes to GitHub Pages on every push to `main`. It **checks out
the repo and uploads it as-is. It does not run `build.js`.**

> ⚠️ **Consequence:** the generated files (`js/content/*.js`, `js/content-manifest.js`) and the
> stamped `index.html` **must be committed**. Edit a Markdown file, forget to run `node build.js`,
> and the live site keeps serving the old text with no error anywhere.

---

## 2. The three custom fences — the thing that makes this project different

Every exercise is **interactive and self-grading**: the learner answers in the app, presses
**Prüfen**, and gets a score plus a per-item explanation of *why*. Static "answers hidden in a
spoiler" exercises were converted away in an early batch — **do not write them again.**

`js/markdown.js` renders five fenced block types: the standard `mermaid` and `audio`, plus three
custom ones.

### `` ```uebung `` — the graded exercise block

Open with three backticks + `uebung`, close with three backticks. Inside:

| Marker | Meaning |
|---|---|
| `?` | the question (inline Markdown allowed) |
| `*` | a **correct** option |
| `x` | a **wrong** option |
| `=` | accepted free-text answers, `\|`-separated → makes it a gap-fill |
| `!` | the explanation, revealed only after checking |

- One `*` → radio buttons. **Two or more `*`** → checkboxes, and all must match.
- `=` present → text input. Matching ignores case, surrounding spaces, trailing punctuation and
  quote style, so `"  WARNEN.  "` matches `warnen`. **List real alternatives explicitly** —
  a full-sentence answer usually needs two or three accepted forms.
- A blank line or the next `?` starts the next item.
- **Every item must have a `!` explanation.** §5 has a command that checks this repo-wide.
- Answers live in `data-` attributes and are inspectable in devtools. That is fine — the learner is
  not an adversary.

### `` ```spoiler `` — collapsed model answers

For **open production only**: translation, free writing, recordings. In a workbook, blocks C and D
use this; blocks A and B must be `uebung`.

### `` ```hoertext `` — listening exercise

Play button plus a transcript hidden behind a toggle. Use this — **never** `audio` — for anything
the learner is supposed to listen to first. `audio` prints its text and hands over the answer.

### Everything else

`markdown.js` also supports ATX headings (with slug ids), GFM tables, plain code fences, ordered,
unordered and nested lists, GitHub task checkboxes, blockquotes, rules, links and bold/italic.

---

## 3. Rules that will bite you

**Never nest a fence.** `markdown.js` closes a fence on a line of *exactly* three backticks, so a
code fence inside a `spoiler` closes it early and leaks the answers. This shipped once. `build.js`
lints for it now and `--strict` fails — but write it right the first time. To show a code example
inside a spoiler, use a blockquote (`>`).

**Free production does not get auto-graded.** Translations with many valid forms, writing tasks and
recordings belong in blocks C/D with a Musterlösung. Auto-marking them would be wrong, not helpful.

**Answers must not be duplicated.** Block A/B items carry their own explanation, so the
`✅ Musterlösungen` spoiler at the end covers **only C and D**.

**`☐` characters are clickable** (app.js converts them), so they are fine in trackers and homework
lists — but they are *not* exercises. Anything gradeable goes in a `uebung`.

**Checklist entries need a stable `id`.** Progress is stored under `id`, not array index. Never
renumber or reuse one.

**Checklist item text is rendered as inline Markdown**, so links work there. Item text elsewhere may
be escaped — check before assuming.

**Watch your quotes in JS data files.** German typographic quotes are fine inside a
double-quoted JS string — but the *closing* German quote `"` is the same character as a JS string
delimiter, so `ex:"… ist „root"."` is a syntax error. `node --check` catches it; run it (§5).

---

## 4. Data files and their schemas

### 4.1 Flashcards — `js/flashcards*.js`

Thirteen files, each of them:

```js
window.FLASHCARDS = (window.FLASHCARDS || []).concat([ /* cards */ ]);
```

Order does not matter; the app shuffles. One card:

```js
{ id:"fc9001", de:"Codebasis", article:"die", plural:"die Codebasen",
  en:"codebase", vi:"mã nguồn hiện có",
  ex:"Die Codebasis ist über acht Jahre gewachsen — niemand kennt sie ganz.",
  exEn:"The codebase has grown over eight years — nobody knows all of it.",
  ipa:"KOOD-baa-zis", coll:"in der Codebasis arbeiten",
  tip:"Kopf: die Basis → die. Plural wie *die Basen*.",
  topic:"Software Development", level:"B2" }
```

| Field | Required | Rendered where | Notes |
|---|---|---|---|
| `id` | ✅ | — | unique across **all** files; see the id ranges below |
| `de` | ✅ | card front | must be unique across all files too |
| `article` | ✅ | front, colour-coded by gender | `der` / `die` / `das`, or `—` for verbs and phrases |
| `plural` | ✅ | front | `—` when there is none |
| `en` | ✅ | back | |
| `vi` | optional | back | Vietnamese gloss — worth it for genuinely hard words |
| `ex` | ✅ | back, in German quotes | a real sentence in dev or Alltag context, never a dictionary phrase |
| `exEn` | ✅ | back, muted | translation of `ex` |
| `ipa` | optional | front | pseudo-pronunciation in this project's style (`KOOD-baa-zis`), not real IPA |
| `coll` | optional | back | the collocation the word actually lives in |
| `tip` | optional | back, with 💡 | the thing worth knowing: gender rule, false friend, plural trap |
| `topic` | ✅ | tag + filter chip | reuse an existing value; a new one appears in the filter automatically |
| `level` | ✅ | tag + filter | `B1` / `B2` / `C1` |

The TTS button speaks `article + de + ex`, so a bad `ex` is also a bad listening experience.

**Id ranges already used:** `fc0xx`, `fc1xx`/`fc9xx`, `fc10xx`–`fc70xx`, `fc80xx`, `fc81xx`,
`fc90xx`–`fc91xx`, `fc92xx`–`fc93xx`, `fc94xx`–`fc95xx`, `fc96xx`–`fc97xx`, `fc98xx`, `fc99xx`. **Next free: `fc10001`+.**

### 4.2 Quizzes — `js/quizzes.js`

One array, `window.QUIZZES`. The Quizzes tool lists everything in it automatically.

```js
{ id:"q-p6-alltagsdeutsch", title:"Phase 6 · Deutsch im Job", level:"C1", topic:"Übungen",
  questions:[
    { q:"Welche Partikel passt? „Das haben wir ___ gestern besprochen.“",
      options:["mal","doch","wohl","eben"], answer:1,
      explain:"doch erinnert an gemeinsames Wissen …" }
  ] }
```

`answer` is the **zero-based index** into `options`. Every question needs an `explain`. Quiz `topic`
is free text — it is not checked against the sidebar `topics` array.

**Draw questions from an existing workbook's A/B blocks** rather than inventing new ones. Writing
them twice means maintaining them twice.

### 4.3 Checklist — `js/checklist.js`

One array, `window.CHECKLIST`, covering all 52 weeks plus a trailing `habits` entry.

```js
{ id:"w45", title:"Woche 45 · Echtes Daily-Tempo",
  items:[ "[Phase 6 · Speaking · Übungsteil](#/phase-6/speaking-uebungen) Block A + B", … ] }
```

`items` are rendered as **inline Markdown**, so links work. **`id` is the storage key for tick
state** — never renumber or reuse one, or existing ticks land on the wrong row.

### 4.4 Navigation — `js/content-index.js`

Hand-edited. `build.js` reads it to decide the chunking, so its `groups` are also the deployment
unit.

```js
window.CONTENT_INDEX = {
  meta:   { title, subtitle, version, updated },
  topics: [ "Roadmap", "Grammar", … ],   // drives the filter chips
  levels: [ "B1", "B2", "C1" ],
  groups: [ { id, title, icon, badge, open, items:[ { id, title, level, topic, type } ] } ]
};
```

- `item.id` is the module path without `.md` (`phase-4/grammar-uebungen`) — or an `@`-prefixed
  built-in view: `@flashcards`, `@quiz`, `@checklist`, `@journal`, `@bookmarks`.
- `type: "lesson"` is what prev/next navigation and progress counting filter on. Use it for content.
- **Any new `topic` must also be added to the `topics` array**, or its filter chip never renders and
  `build.js` warns.
- Bump `meta.version` when you ship a batch.

---

## 5. Verification — run all of these before committing

```bash
node build.js --strict
```

Must end with `✓ No dead internal links.` **Exits 1** on dead links, nested or unclosed fences,
sidebar entries with no file, **Markdown files missing from `content-index.js`**, and topics with no
chip. Run it **twice** if you want to confirm idempotency — the second run should leave the tree
unchanged.

> **Still read the output, not just the exit code.** Three of those five checks print with `!`
> rather than `✗` — a leftover from when they only warned — so a failing build can look calm until
> the last line, `--strict: failing build.` The orphan check is the one that bites: a Markdown file that exists but is *not* listed in
> `content-index.js` gets swept into a `misc` chunk, so the module builds, looks written, and cannot
> be opened from the sidebar. It failed the build only from 19.08.2026 (BACKLOG §4.2); before that
> it warned and exited 0, which is exactly how one shipped unnoticed.
>
> **Do not pipe the build through `tail`.** The warning header scrolls off and the remaining line
> looks like an ordinary chunk listing. That is the actual mistake that let it through.

```bash
node --check js/markdown.js && node --check js/app.js && node --check js/content-index.js
```

Add whichever data file you touched — `node --check js/flashcards-17.js` and so on. This is what
catches the German-quote syntax trap from §3.

**Every exercise carries an explanation, and how many shipped:**

```bash
node -e 'const MD=require("./js/markdown.js"),fs=require("fs");let t=0,bad=0;for(const d of fs.readdirSync("content")){const p="content/"+d;if(!fs.statSync(p).isDirectory())continue;for(const f of fs.readdirSync(p).filter(x=>x.endsWith(".md"))){const h=MD.render(fs.readFileSync(p+"/"+f,"utf8"));const n=(h.match(/class="ueb-item"/g)||[]).length;t+=n;const fb=(h.match(/<div class="ueb-fb" hidden>([\s\S]*?)<\/div>/g)||[]);const e=fb.filter(x=>x.replace(/<[^>]+>/g,"").trim()==="").length;if(e)console.log("MISSING EXPLANATION:",p+"/"+f,e);bad+=e}}console.log("interactive items:",t,"| without explanation:",bad)'
```

**Flashcard and quiz integrity** — duplicate ids, duplicate German words, incomplete cards:

```bash
node -e 'const w={};global.window=w;["flashcards","flashcards-2","flashcards-3","flashcards-4","flashcards-5","flashcards-6","flashcards-7","flashcards-8","flashcards-9","flashcards-10","flashcards-11","flashcards-12","flashcards-13","flashcards-14","flashcards-15","flashcards-16","flashcards-17","quizzes"].forEach(f=>require("./js/"+f+".js"));
const ids=w.FLASHCARDS.map(c=>c.id), de=w.FLASHCARDS.map(c=>c.de);
console.log("cards:",w.FLASHCARDS.length,"| dup ids:",ids.filter((v,i)=>ids.indexOf(v)!==i).length,"| dup words:",de.filter((v,i)=>de.indexOf(v)!==i).length);
console.log("incomplete:",w.FLASHCARDS.filter(c=>!c.de||!c.en||!c.ex||!c.exEn||!c.topic||!c.level).length);
const q=w.QUIZZES;console.log("quizzes:",q.length,"questions:",q.reduce((a,x)=>a+x.questions.length,0),"| malformed:",q.flatMap(x=>x.questions.filter(y=>typeof y.answer!=="number"||!y.options[y.answer]||!y.explain)).length)'
```

> A handful of duplicate German words exist from before Đợt 5 and are known. What must stay at zero
> is **duplicates involving whatever you just added** — the recipe in §6.1 checks exactly that.

**Browser check** — do this once per piece of work, not once per file:

```bash
python3 -m http.server 8777
```

Then confirm on a page you touched: exercises render, **Prüfen** scores and reveals explanations,
nothing is pre-filled on a fresh load, `hoertext` transcripts start hidden, and the console is clean.

---

## 6. Recipes

### 6.1 Flashcard passes — the harvest is done; read this before adding more

The deck stands at **1,378** (1,369 from passes 1–5, plus 9 written with the Goethe B1 module).
Passes 1–5 harvested every vocabulary table in `content/`: of 1,280 measured rows, 1,248 are carded,
and the 32 left are deliberate skips (listed at the end of this section). **The measured well is dry
— the command in Step 1 will not hand you a bucket any more**; the only way a new deck appears now
is the way deck 18 did, as a by-product of writing a new module.

That leaves a gap to the plan's ~2,050, and it cannot be closed by harvesting. It needs **new
vocabulary, chosen rather than found**. That is a different job, and worth being explicit about:

* **Do not pad.** 1,378 hand-written cards, each with a real example, beat 2,050 where the last
  seven hundred are filler. The number in UPGRADE-PLAN was an estimate made before the tables were
  counted; it is not a promise the deck owes anyone.
* **If you do add cards, start from a gap, not a word list.** Something the learner hits and the
  deck cannot answer — a `content/` module written later, a Prüfungsteil that turns out thin, a
  recurring miss in the review queue. Then the deck grows for a reason you can name.
* **The quality bar in §4.1 still applies to every card**, and every check in Step 3 still runs —
  they compare against existing cards, so they work just as well for hand-picked vocabulary.

**Do 100–150 cards per pass, not one sitting.** A mechanically generated deck without real examples
would break the project's own standard and be worth less than a smaller hand-written one.

#### Step 1 — measure and pick a bucket

```bash
node -e 'const fs=require("fs");const w={};global.window=w;
["flashcards","flashcards-2","flashcards-3","flashcards-4","flashcards-5","flashcards-6","flashcards-7","flashcards-8","flashcards-9","flashcards-10","flashcards-11","flashcards-12","flashcards-13","flashcards-14","flashcards-15","flashcards-16","flashcards-17"].forEach(f=>require("./js/"+f+".js"));
const have=new Set(w.FLASHCARDS.map(c=>c.de.trim()));const rows=new Map();
(function walk(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){const p=d+"/"+e.name;if(e.isDirectory())walk(p);else if(e.name.endsWith(".md")){
for(const L of fs.readFileSync(p,"utf8").split("\n")){const m=L.match(/^\|\s*([^|]+?)\s*\|\s*(der|die|das|—)\s*\|\s*([^|]*?)\s*\|\s*([^|]+?)\s*\|\s*([^|]*?)\s*\|/);
if(!m)continue;const de=m[1].replace(/\*\*/g,"").trim();if(!de||de==="Deutsch"||de.length>60)continue;if(!rows.has(de))rows.set(de,{a:m[2],pl:m[3],en:m[4],vi:m[5],src:p});}}}})("content");
const miss=[...rows.entries()].filter(([de])=>!have.has(de));
const by={};miss.forEach(([,v])=>{const d=v.src.split("/")[1];by[d]=(by[d]||0)+1});
console.log("untapped:",miss.length,JSON.stringify(by,null,1));
// swap the filter below for the bucket you are working on:
console.log(miss.filter(([,v])=>v.src.startsWith("content/dialogues/")).map(([de,v])=>`${v.a}|${de}|${v.pl}|${v.en}|${v.vi}`).join("\n"));'
```

Add each new deck file to the list at the top when you create it, and re-run to confirm the bucket
actually closed.

What the command prints now — **32 terms, all of them deliberate skips.** Every bucket is closed:

| Pass | Bucket | Cards |
|---|---|---:|
| 1 | `vocabulary/` — the 12 IT deep dives | 145 |
| 2 | `dialogues/` — 14 workplace dialogues | 150 |
| 3 | phase Vokabel-Checklisten P1–P4 + `bewerbung/`, `templates/`, `foundations/`, `plans/` | 150 |
| 4 | `alltag/` complete + P5–P6 + exam framing and production modules | 150 |
| 5 | `interviews/` + `exams/` receptive + `vocabulary/` stragglers | 46 |

The 32 that remain, and why — keep the list so nobody re-harvests them by mistake:

* **30 near-duplicates.** Mostly slash pairs whose German half is already carded
  (*Vorfall / Incident*, *Freigabe / Approve*, *Umfang / Scope*, *Retrospektive / Retro*,
  *Zusage / Absage*, *Daily*, *Kompromiss*), bare forms an existing card teaches in collocation
  (*aufteilen*, *umsetzen*, *einhalten*, *zuständig (für)*, *verzichten (auf)*), and reflexive or
  prepositional variants of a carded verb (*sich einigen*, *sich abstimmen*, *koppeln (an)*).
* **`Nom.` in `phase-2/grammar.md`** — a Deklinationstabelle row, not vocabulary. The regex matches
  any five-column table; this is the one row in the whole repo where that bites.
* **`Vererbung überschreiben` in `vocabulary/java.md`** — the row is glossed "to override (a
  method)", but one overrides a *method*, not inheritance. `fc9030 überschreiben` already teaches it
  correctly and `fc012 Vererbung` covers the noun. Left alone deliberately: unlike a typo, changing
  it is a terminology decision for whoever owns the module.

> The exact total moves with the matching regex — the one above requires a five-column table row
> (DE · Artikel · Plural · EN · VI), which is the shape most modules use. A four-column variant
> finds ~35 more in tables that omit the VI column. Either way the **ranking is stable**, and the
> command is the source of truth, not this table.

> **A closed bucket will not read as zero, and that is fine.** Passes 2 and 3 each skipped a
> handful of rows on purpose. Before writing, run the candidates through **three** checks — together
> they have decided the exact card count on both passes, with no judgement calls about "value":
>
> 1. **Containment against every existing `de`.** Catches near-duplicates, usually a slash pair
>    whose German half is already carded (*Vorfall / Incident*, *Umfang / Scope*) or a bare verb
>    that an existing card already teaches in collocation (*aufteilen* vs *aufteilen / splitten*).
>    Ignore the noise it throws from shared substrings — *Sendung* ↔ *Endung* is not a duplicate.
> 2. **Containment of the candidates against each other.** Different table rows in different modules
>    can be the same lexical item: pass 2 hit *Postmortem* vs *Post-Mortem*, pass 3 hit
>    *einigen (sich auf)* vs *sich einigen*. Strip reflexive `sich` and trailing prepositions
>    **in a loop until the string stops changing**, or the two forms normalise differently and the
>    collision slips through.
> 3. **Eyeball the rows the regex returned.** It matches any five-column table, so it occasionally
>    catches something that is not vocabulary at all — pass 3 found a Deklinationstabelle row
>    (`Nom.|die|das|die`) sitting in the candidate list.
>
> Keep a base word whose only "duplicate" is a *subtype* or a *collocation* — pass 3 kept *Passiv*
> next to the existing Vorgangs-/Zustandspassiv cards, and *Entscheidung* next to
> *eine Entscheidung treffen*. Those earn their place.

#### Step 2 — write the deck

New file `js/flashcards-N.js`, next free id range from §4.1. Header comment says which bucket and
which pass. Group the cards with `/* ---- section ---- */` comments so the file stays navigable.

What makes a card worth its place — the example carries the weight:

| Weak | Strong |
|---|---|
| `ex:"Die Codebasis ist groß."` | `ex:"Die Codebasis ist über acht Jahre gewachsen — niemand kennt sie ganz."` |
| `tip:"ein Nomen"` | `tip:"Falscher Freund: warten heißt auch 'to wait'. Nomen: die Wartung."` |
| `coll:"—"` | `coll:"technische Schulden abbauen / aufbauen"` |

The `tip` is often the actual value: gender rules (`-ung → die`), N-declension traps
(*den Monolithen*), false friends, plural umlauts, and the gap between the correct German term and
what a team actually says out loud.

#### Step 3 — wire, verify, ship

```bash
# 1. script tag — unversioned; build.js stamps the hash
#    add <script defer src="js/flashcards-N.js"></script> to index.html after the previous deck
node --check js/flashcards-N.js
# 2. duplicates involving ONLY the new deck (adjust the fcNN prefix)
node -e 'const w={};global.window=w;["flashcards","flashcards-2","flashcards-3","flashcards-4","flashcards-5","flashcards-6","flashcards-7","flashcards-8","flashcards-9","flashcards-10","flashcards-11","flashcards-12","flashcards-13","flashcards-14","flashcards-15","flashcards-16","flashcards-17"].forEach(f=>require("./js/"+f+".js"));
const byDe={};w.FLASHCARDS.forEach(c=>{(byDe[c.de]=byDe[c.de]||[]).push(c.id)});
const nd=Object.entries(byDe).filter(([d,i])=>i.length>1&&i.some(x=>/^fc9[23][0-9][0-9]$/.test(x)));
console.log("cards:",w.FLASHCARDS.length,"| new-deck dups:",nd.length?JSON.stringify(nd):"none");'
node build.js --strict
```

Then the browser check, then update the numbers in `README.md`, `UPGRADE-PLAN.md` (status header)
and this file (§0 table, §4.1 id ranges, §6.1 bucket table, and the deck list inside **every**
command that names the deck files), and commit.

### 6.2 Add a content module

1. **Read what it must fit with first.** `grep -E '^#{2,3} ' content/<group>/*.md` to map the
   siblings, then read the substantive sections. Content that drills nothing specific is filler.
2. Write `content/<group>/<name>.md` following the skeleton in §7 and the voice in
   [CONTENT-STYLE-GUIDE.md](CONTENT-STYLE-GUIDE.md).
3. **Cross-link both ways.** A workbook links back to its teaching module in the header and in
   Resources; the teaching module gets a callout above `## 📝 Hausaufgabe · Homework`.
4. Add the sidebar entry in `js/content-index.js`, next to the module it belongs with (§4.4).
5. Flashcards and a quiz for the new material, if it introduces vocabulary or rules.
6. `node build.js --strict`, verify (§5), update the numbers, commit.

### 6.3 Add a sidebar group

Append a group object to `CONTENT_INDEX.groups` (§4.4), add its `topic` to the `topics` array, and
put the Markdown in `content/<group-id>/`. `build.js` creates the chunk automatically — a new group
means a new `js/content/<id>.js`, which must be committed.

### 6.4 Change the checklist

Insert entries in `js/checklist.js` with **new** ids. Never renumber. Items are inline Markdown, so
link to the exact module each one means.

### 6.5 Fix a module

Edit the Markdown, `node build.js --strict`, browser-check the page, commit. Remember that the
generated chunk changes too and must go in the same commit (§1).

---

## 7. Conventions and skeletons

From [CONTENT-STYLE-GUIDE.md](CONTENT-STYLE-GUIDE.md), still in force:

- Explanations in **English** for Phase 1–2 material, increasingly **German** from Phase 3 on — the
  Phase 3–6 workbooks are written in German, matching the level.
- German examples; `VI:` gloss only for genuinely hard words.
- Every new noun: **Artikel + Plural**.
- Cross-link instead of repeating theory.
- Real companies and real facts only. For exam details, state the **published structure** and tell
  the learner to verify against the current official *Übungstest* / *Modellsatz* — telc and Goethe
  revise their formats. The same rule governs anything with annually-changing numbers: describe the
  structure, name the official source, quote no figure.

**Workbook skeleton** (`phase-N/<skill>-uebungen.md`):

```
# Phase N · <Skill> — Übungsteil · Workbook
> Level / Focus / Time + one-line promise
short intro + how it works
## 🏋️ Übungsteil · Workbook
### A. Erkennen    → uebung blocks
### B. Anwenden    → uebung blocks
### C. Produzieren → open prompts
### D. Transfer    → real-work prompts
## ✅ Musterlösungen für C und D  → one spoiler
## 🧾 Zusammenfassung · Summary
## 📇 Vokabel-Checkliste
## 📝 Hausaufgabe · Homework
## 📚 Empfohlene Ressourcen
```

Target counts (UPGRADE-PLAN §3.2): grammar 35–40, vocabulary 25–30, the other skills 20–25.
Splitting a multi-part exercise into individually graded items is encouraged and pushes counts
higher.

**Dialogue skeleton** (`content/dialogues/`) — Dialog · translation · VI-notes · Kernmuster ·
grammar · vocabulary · Redemittel · Kultur · Zusammenfassung · Vokabel-Checkliste · Sprechübung ·
Mini-Quiz · Hausaufgabe · Ressourcen.

**Since Đợt 7, new dialogues also carry one `## 🏋️ Drill` block of 8–10 `uebung` items**, placed
after the Redemittel tables and before the Kultur section. Rationale: the `templates/` modules of
Đợt 6 established that new reference material gets graded drills too. The blockquote
`> **Lösungen:**` Mini-Quiz stays where readers expect it — it is explicitly sanctioned for 3–5
questions (UPGRADE-PLAN §1) and feeds the quiz written for that batch. The eleven pre-Đợt-7
dialogues were deliberately left as they were.

---

## 8. Gotchas already fixed — do not reintroduce

| Was broken | Fix in place |
|---|---|
| `☐` in tables was plain text; task checkboxes were `disabled` | `addCheckboxes()` in app.js converts both, persists per module |
| Only `content-manifest.js` was cache-stamped, so an edited `quizzes.js` served stale | `build.js` stamps every local `<script>` with a content hash |
| `content-manifest.js` embedded a timestamp → every build produced a diff | timestamp removed; build is idempotent |
| Checklist progress keyed by array index → inserting a week shifted every tick | entries carry `id`; progress keyed on it |
| `renderChecklist` escaped item text → links showed as raw Markdown | `MD.renderInline` exported and used |
| `addTableSpeakers` was not idempotent → re-enhancing doubled 🔊 buttons | guarded with `data-spk` |
| Dialogue lines had no 🔊 — only the vocabulary tables and the `audio` fences did | `addDialogueSpeakers()` adds one per turn, **scoped to `## … Der Dialog …` sections** so the English translation and the "im Dialog markiert" grammar sections stay silent; guarded with the same `.spk` check |
| Nested code fence inside `spoiler` leaked answers | `build.js` fence lint, `--strict` fails |
| A German closing quote `"` inside a JS string broke a deck file | caught by `node --check`; see §3 |

---

## 9. Open questions and deliberate omissions

**Answered 19.08.2026 (UPGRADE-PLAN §11.1):** keep the browser TTS for now. Sources for real
recorded audio are researched and written up in [BACKLOG §6](BACKLOG.md) so the listening work does
not start from scratch. Two things worth knowing before touching audio: the current TTS quality is
**entirely** the OS voice the reader has installed — `speak()` already toasts a hint when no German
voice is found — and CC0 human-voice datasets with trained Piper models exist, so "TTS" and "real
voice" are not the binary the question assumed.

**Answered 18.08.2026:** yes to a Goethe B1 module as the week-8 milestone (§11.3). It does *not*
replace the Phase-1 test — that stays the internal gate to Phase 2 — and it is written as a
*decision* module, because the honest answer for most readers is that B1 matters for paperwork
(Niederlassungserlaubnis, Einbürgerung) and not for hiring, where B2 is the threshold.

**Answered by shipping:** personalising the Lebenslauf/Anschreiben against the user's real CV. Đợt 8
went out with the fictional-but-realistic backend-Java profile UPGRADE-PLAN §4.3 specifies, flagged
in a callout inside [`content/bewerbung/lebenslauf.md`](content/bewerbung/lebenslauf.md). If a real
CV arrives later, the swap is contained: the muster in §4 of that module plus the two model letters
in [`anschreiben.md`](content/bewerbung/anschreiben.md). Structure, bullet formula and paragraph
formulas are profile-independent.

**Self-scored on purpose:** the `assessment.md` mock exams. They simulate exam conditions, where
grading yourself against a published band is the point, and Teil 4/5 are open production in the real
exam too. Converting Teil 1–3 to `uebung` is possible if asked.

**Known and tolerated:** a handful of duplicate German words across decks written before Đợt 5.
Worth a cleanup pass one day; harmless meanwhile.

**Not in the repo:** renderer regression tests. They lived in a session scratchpad. The
`build.js --strict` lint plus the explanation check in §5 cover the same failure modes.
