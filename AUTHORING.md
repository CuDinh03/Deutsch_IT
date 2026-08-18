# AUTHORING — how to continue this project in a new session

> Read this **before** writing any content. It is the how-to; [UPGRADE-PLAN.md](UPGRADE-PLAN.md)
> is the what-and-when (batch table with ✅ markers at §8).
>
> Last verified: **18.08.2026**, after Đợt 9 plus flashcard pass 1. Everything committed and
> pushed to `origin/main`.

---

## 1. Where the project stands

| | Value |
|---|---:|
| Content modules | **156** |
| Words | **~319,500** |
| Interactive exercises | **1,756** |
| Flashcards | **873** (target 2,050 — see §8) |
| Quizzes / questions | **19 / 176** |
| Checklist weeks | **all 52** ✅ |

**Done: all ten batches.** Đợt 0 (engine) · 1 (Phase 1) · 2 (Alltag) · 3 (Phase 2) · 4 (telc B2) ·
5 (Phase 3) · 6 (Phase 4 + `templates/`) · 7 (Phase 5 + 3 dialogues) · 8 (Phase 6 + `bewerbung/`) ·
9 (Goethe C1 + 4 interview banks + final sweep).

**Every module UPGRADE-PLAN called for is written.** The flashcard deck is being filled in passes —
pass 1 (IT deep dives) is done. See §8 for the remaining work-list.

---

## 2. The one thing that makes this project different

Every exercise is **interactive and self-grading**. The learner answers in the app, presses
**Prüfen**, and gets a score plus a per-item explanation of *why*. Static "answers in a spoiler"
exercises were converted away in an earlier batch — **do not write them again**.

Three custom fences do this. They are implemented in [`js/markdown.js`](js/markdown.js) and wired in
[`js/app.js`](js/app.js).

### `uebung` — the graded exercise block

Open with three backticks + `uebung`, close with three backticks. Inside:

| Marker | Meaning |
|---|---|
| `?` | the question (inline Markdown allowed) |
| `*` | a **correct** option |
| `x` | a **wrong** option |
| `=` | accepted free-text answers, `\|`-separated (makes it a gap-fill) |
| `!` | the explanation, revealed only after checking |

- One `*` → radio buttons. **Two or more `*`** → checkboxes, all must match.
- `=` present → text input. Matching ignores case, surrounding spaces, trailing punctuation and
  quote style, so `"  WARNEN.  "` matches `warnen`. List real alternatives explicitly.
- A blank line or the next `?` starts the next item.
- **Every item must have a `!` explanation.** A verification command below checks this.
- Answers live in `data-` attributes, so they are inspectable in devtools. That is fine — the
  learner is not an adversary.

### `spoiler` — collapsed model answers

For **open production only** (translation, free writing, recordings). Blocks C and D of a workbook
keep these; blocks A and B must be `uebung`.

### `hoertext` — listening exercise

Play button plus a transcript hidden behind a toggle. Use this, **never** `audio`, for anything the
learner is supposed to listen to — `audio` prints its text and hands over the answer.

---

## 3. Rules that will bite you

**Never nest a fence.** `markdown.js` closes a fence on a line of *exactly* three backticks, so a
code fence inside a `spoiler` closes it early and leaks the answers. This shipped once. `build.js`
now lints for it and `--strict` fails — but write it right in the first place. To show a code
example inside a spoiler, use a blockquote (`>`) instead.

**Free production does not get auto-graded.** Translations with many valid forms, writing tasks and
recordings belong in blocks C/D with a Musterlösung. Auto-marking them would be wrong, not helpful.

**Answers must not be duplicated.** Since block A/B items carry their own explanation, the
`✅ Musterlösungen` spoiler at the end covers **only C and D**.

**`☐` characters are clickable now** (app.js converts them), so they are fine in trackers and
homework lists — but they are *not* exercises. Anything gradeable goes in a `uebung`.

**Checklist entries need a stable `id`.** Progress is stored under `id`, not array index. Never
renumber or reuse one.

**Checklist item text is rendered as inline Markdown**, so links work there. Item text elsewhere may
be escaped — check before assuming.

---

## 4. Workflow for one batch

Every batch ships complete. Do not defer data to a later batch.

1. **Read the teaching modules first.** Exercises must drill what that phase actually teaches —
   `grep -E '^#{2,3} ' content/phase-N/*.md` to map it, then read the substantive sections.
2. **Write six `*-uebungen.md`** — one per teaching module (grammar, vocabulary, speaking,
   listening, reading, writing). Target counts from UPGRADE-PLAN §3.2: grammar 35–40, vocabulary
   25–30, the rest 20–25. Splitting a multi-part exercise into individually graded items is
   encouraged and pushes counts higher.
3. **Cross-link both ways.** Insert a callout above `## 📝 Hausaufgabe · Homework` in each teaching
   module pointing at its workbook; the workbook links back in its header and Resources.
4. **Add sidebar entries** in [`js/content-index.js`](js/content-index.js), right after the module
   they belong to:
   `{ id: "phase-N/grammar-uebungen", title: "↳ Grammar · Übungsteil", level: "...", topic: "Übungen", type: "lesson" },`
   Use `type: "lesson"` — prev/next navigation and progress counting filter on it.
   Any new `topic` must also be added to the `topics` array or its filter chip never renders.
5. **Flashcards** — new file `js/flashcards-N.js`, merged with
   `window.FLASHCARDS = (window.FLASHCARDS || []).concat([...])`. **Next free id range: `fc9201`+**
   (used so far: fc0xx, fc1xx/9xx, fc10xx–fc70xx, fc80xx, fc81xx, fc90xx–fc91xx). Every noun needs article
   **and** plural **and** an example sentence with translation. Add the `<script>` tag to
   `index.html` (unversioned — `build.js` stamps the hash). Check for a duplicate `de` value before
   adding a card; a handful of pre-Đợt-5 duplicates already exist and are worth cleaning up one day.
6. **Quiz** — append to [`js/quizzes.js`](js/quizzes.js). Draw questions from the workbook's A/B
   blocks rather than inventing new ones.
7. **Checklist** — extend [`js/checklist.js`](js/checklist.js) with that phase's weeks, each item
   linking to the specific module it means.
8. **Refresh the numbers** in `README.md` (Build status section) and bump `version` in
   `content-index.js`.
9. **Mark the batch ✅** in UPGRADE-PLAN §8 with what actually shipped.
10. **Verify, commit, push** (next section).

---

## 5. Verification — run all of these before committing

```bash
node build.js --strict
```

Fails on dead internal links, nested/unclosed fences, sidebar entries with no file, Markdown files
missing from the sidebar, and topics with no filter chip. It also rebuilds `js/content/*.js` chunks
and re-stamps `index.html` — the build is idempotent, so a second run produces no diff.

```bash
node --check js/markdown.js && node --check js/app.js && node --check js/content-index.js
```

Check every exercise carries an explanation, and count what shipped:

```bash
node -e 'const MD=require("./js/markdown.js"),fs=require("fs");let t=0,bad=0;for(const d of fs.readdirSync("content")){const p="content/"+d;if(!fs.statSync(p).isDirectory())continue;for(const f of fs.readdirSync(p).filter(x=>x.endsWith(".md"))){const h=MD.render(fs.readFileSync(p+"/"+f,"utf8"));const n=(h.match(/class="ueb-item"/g)||[]).length;t+=n;const fb=(h.match(/<div class="ueb-fb" hidden>([\s\S]*?)<\/div>/g)||[]);const e=fb.filter(x=>x.replace(/<[^>]+>/g,"").trim()==="").length;if(e)console.log("MISSING EXPLANATION:",p+"/"+f,e);bad+=e}}console.log("interactive items:",t,"| without explanation:",bad)'
```

Check flashcard/quiz integrity:

```bash
node -e 'const w={};global.window=w;["flashcards","flashcards-2","flashcards-3","flashcards-4","flashcards-5","flashcards-6","flashcards-7","flashcards-8","flashcards-9","flashcards-10","flashcards-11","flashcards-12","flashcards-13","quizzes"].forEach(f=>require("./js/"+f+".js"));const ids=w.FLASHCARDS.map(c=>c.id);console.log("cards:",w.FLASHCARDS.length,"dup:",ids.filter((v,i)=>ids.indexOf(v)!==i).length);const q=w.QUIZZES.map(x=>x.id);console.log("quizzes:",w.QUIZZES.length,"dup:",q.filter((v,i)=>q.indexOf(v)!==i).length)'
```

Renderer regression tests live in the session scratchpad, not the repo. If they are gone, the
`build.js --strict` lint plus the explanation check above cover the same failures.

**Browser check** (worth doing once per batch): serve and open one new workbook.

```bash
python3 -m http.server 8777
```

Then confirm: exercises render, **Prüfen** scores and reveals explanations, nothing is pre-filled on
a fresh load, and the console is clean.

---

## 6. Content conventions

From [CONTENT-STYLE-GUIDE.md](CONTENT-STYLE-GUIDE.md), still in force:

- Explanations in **English** for Phase 1–2 material, increasingly **German** for Phase 3+ (the
  Phase 3 workbooks are written in German, matching the level).
- German examples, `VI:` gloss only for genuinely hard words.
- Every new noun: **Artikel + Plural**.
- Cross-link instead of repeating theory.
- Real companies and real facts only. For exam details, state the published structure and tell the
  learner to verify item counts against the current official *Übungstest* — telc and Goethe revise
  their formats.

Workbook skeleton:

```
# Phase N · <Skill> — Übungsteil · Workbook
> Level / Focus / Time + one-line promise
short intro + how it works
## 🏋️ Übungsteil · Workbook
### A. Erkennen   → uebung blocks
### B. Anwenden   → uebung blocks
### C. Produzieren → open prompts
### D. Transfer    → real-work prompts
## ✅ Musterlösungen für C und D  → one spoiler
## 🧾 Zusammenfassung · Summary
## 📇 Vokabel-Checkliste
## 📝 Hausaufgabe · Homework
## 📚 Empfohlene Ressourcen
```

Dialogue skeleton (`content/dialogues/`, unchanged for 11 modules) — Dialog · translation ·
VI-notes · Kernmuster · grammar · vocabulary · Redemittel · Kultur · Zusammenfassung ·
Vokabel-Checkliste · Sprechübung · Mini-Quiz · Hausaufgabe · Ressourcen.

**Since Đợt 7, new dialogues also carry one `## 🏋️ Drill` block of 8–10 `uebung` items**, placed
after the Redemittel tables and before the Kultur section. Rationale: the `templates/` modules of
Đợt 6 established that new reference material gets graded drills too. The blockquote `> **Lösungen:**`
Mini-Quiz stays where readers expect it — it is explicitly sanctioned for 3–5 questions (UPGRADE-PLAN
§1) and feeds the quiz written for that batch. The eleven pre-Đợt-7 dialogues were left as they were.

---

## 7. Gotchas already fixed — do not reintroduce

| Was broken | Fix in place |
|---|---|
| `☐` in tables was plain text; task checkboxes were `disabled` | `addCheckboxes()` in app.js converts both, persists per module |
| Only `content-manifest.js` was cache-stamped, so edited `quizzes.js` served stale | `build.js` stamps every local `<script>` with a content hash |
| `content-manifest.js` embedded a timestamp → every build produced a diff | timestamp removed; build is idempotent |
| Checklist progress keyed by array index → inserting a week shifted every tick | entries carry `id`; progress keyed on it |
| `renderChecklist` escaped item text → links showed as raw Markdown | `MD.renderInline` exported and used |
| `addTableSpeakers` was not idempotent → re-enhancing doubled 🔊 buttons | guarded with `data-spk` |
| Nested code fence inside `spoiler` leaked answers | `build.js` fence lint, `--strict` fails |

---

## 8. What is left

**All nine content batches are done.** What is left is one measurable job.

### The flashcard gap

The deck stands at **873** against a plan target of **~2,050**, and it is being filled in passes.

**Pass 1 — done:** the 12 IT deep dives in `content/vocabulary/` are now converted
(`js/flashcards-13.js`, 145 cards, fc9001–fc9145). That bucket is closed: 147 untapped terms → 6.

The remaining work is already scoped: roughly **560 terms sit in the modules' own vocabulary tables**
with article, plural, English and VI gloss already written — they just need an example sentence, a
collocation and a tip to become cards.

Re-measure at any time:

```bash
node -e 'const fs=require("fs");const w={};global.window=w;
["flashcards","flashcards-2","flashcards-3","flashcards-4","flashcards-5","flashcards-6","flashcards-7","flashcards-8","flashcards-9","flashcards-10","flashcards-11","flashcards-12","flashcards-13"].forEach(f=>require("./js/"+f+".js"));
const have=new Set(w.FLASHCARDS.map(c=>c.de.trim()));const rows=new Map();
(function walk(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){const p=d+"/"+e.name;if(e.isDirectory())walk(p);else if(e.name.endsWith(".md")){
for(const L of fs.readFileSync(p,"utf8").split("\n")){const m=L.match(/^\|\s*([^|]+?)\s*\|\s*(der|die|das|—)\s*\|\s*([^|]*?)\s*\|\s*([^|]+?)\s*\|/);
if(!m)continue;const de=m[1].replace(/\*\*/g,"").trim();if(!de||de==="Deutsch"||de.length>60)continue;if(!rows.has(de))rows.set(de,{a:m[2],pl:m[3],en:m[4],src:p});}}}})("content");
const miss=[...rows.entries()].filter(([de])=>!have.has(de));
const by={};miss.forEach(([,v])=>{const d=v.src.split("/")[1];by[d]=(by[d]||0)+1});
console.log("untapped:",miss.length,JSON.stringify(by,null,1));
console.log(miss.slice(0,40).map(([de,v])=>`${v.a} ${de} | ${v.pl} | ${v.en} | ${v.src}`).join("\n"));'
```

Measured after pass 1 — **563 terms**, in suggested order of value for this learner:

| Source | Untapped | Suggested pass |
|---|---:|---|
| `dialogues/` (Redemittel & vocab tables) | 163 | **pass 2** — workplace reflexes, the biggest bucket |
| phase Vokabel-Checklisten (P1–P6) | 209 | passes 3–4, split by phase |
| `alltag/` | 95 | pass 5 — everyday survival, §0 priority |
| `exams/` + `interviews/` | 63 | pass 6 |
| `bewerbung/`, `templates/`, `foundations/`, `plans/` | 27 | fold into any pass |
| `vocabulary/` (12 IT deep dives) | 6 | ✅ **done in pass 1** |

**Do it in passes of 100–150 cards, not one sitting.** The quality bar in §2 still applies: every
noun needs Artikel **and** Plural **and** an example sentence with translation. A mechanically
generated deck without real examples would violate the project's own standard and be worth less
than the smaller hand-written one.

One open question in UPGRADE-PLAN §11 the user has not answered: real recorded audio instead of
TTS.

The second one — personalising the Lebenslauf/Anschreiben against the user's actual CV — was still
unanswered when Đợt 8 shipped. It went out with the fictional-but-realistic backend-Java profile the
plan itself specifies (§4.3), clearly flagged as such in a callout inside
[`content/bewerbung/lebenslauf.md`](content/bewerbung/lebenslauf.md). If the user later supplies a
real CV, swapping the worked example is a contained edit: the muster in §4 of that module plus the
two model letters in [`anschreiben.md`](content/bewerbung/anschreiben.md). Everything else — the
structure, the bullet formula, the paragraph formulas — is profile-independent.

Still self-scored on purpose: the `assessment.md` mock exams. They simulate exam conditions, where
scoring yourself against a published band is the point, and Teil 4/5 are open production in the real
exam too. Converting Teil 1–3 to `uebung` is possible if asked.

---

## 9. To continue

The batch plan is finished. For the flashcard passes described in §8:

```
Read AUTHORING.md §8, then write the next flashcard pass (150 cards, fc9001+).
```

For anything else — a fix, a new module, a format change — the same two files still carry
everything: this one for the how, UPGRADE-PLAN for the what and why.
