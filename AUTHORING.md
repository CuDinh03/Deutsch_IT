# AUTHORING — how to continue this project in a new session

> Read this **before** writing any content. It is the how-to; [UPGRADE-PLAN.md](UPGRADE-PLAN.md)
> is the what-and-when (batch table with ✅ markers at §8).
>
> Last verified: **18.08.2026**, commit `0fd9399`, everything pushed to `origin/main`.

---

## 1. Where the project stands

| | Value |
|---|---:|
| Content modules | **119** |
| Words | **~220,000** |
| Interactive exercises | **935** |
| Flashcards | **431** (target 2,050) |
| Quizzes / questions | **11 / 96** |
| Checklist weeks | **1–28** (of 52) |

**Done:** Đợt 0 (engine) · 1 (Phase 1) · 2 (Alltag) · 3 (Phase 2) · 4 (telc B2) · 5 (Phase 3).
**Next:** Đợt 6 — Phase 4 workbooks + `content/templates/`. See UPGRADE-PLAN §8.

Workbooks exist for Phase 1–3. **Missing:** all six for each of Phase 4, 5 and 6.

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
   `window.FLASHCARDS = (window.FLASHCARDS || []).concat([...])`. **Next free id range: `fc5001`+**
   (used so far: fc0xx, fc1xx/9xx, fc10xx, fc20xx, fc30xx, fc40xx). Every noun needs article **and**
   plural **and** an example sentence with translation. Add the `<script>` tag to `index.html`.
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
node -e 'const w={};global.window=w;["flashcards","flashcards-2","flashcards-3","flashcards-4","flashcards-5","flashcards-6","flashcards-7","quizzes"].forEach(f=>require("./js/"+f+".js"));const ids=w.FLASHCARDS.map(c=>c.id);console.log("cards:",w.FLASHCARDS.length,"dup:",ids.filter((v,i)=>ids.indexOf(v)!==i).length);const q=w.QUIZZES.map(x=>x.id);console.log("quizzes:",w.QUIZZES.length,"dup:",q.filter((v,i)=>q.indexOf(v)!==i).length)'
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

| Batch | Work | ≈ words |
|---|---|---:|
| **6** | Phase 4 workbooks (6) + `content/templates/` (4 modules) | ~25k |
| **7** | Phase 5 workbooks (6) + 3 dialogues (Gehalt, Career talk, Kunde/PO) | ~24k |
| **8** | Phase 6 workbooks (6) + `content/bewerbung/` (5 modules) | ~28k |
| **9** | Goethe C1 (3 modules) + 4 interview banks + final sweep | ~22k |

Plus, spread across those batches or as its own pass: **flashcards 431 → ~2,050** (the largest
remaining gap against the plan), and **checklist weeks 29–52**.

Two open questions in UPGRADE-PLAN §11 the user has not answered: real recorded audio instead of
TTS, and whether to personalise the Lebenslauf/Anschreiben templates (Đợt 8) against the user's
actual CV.

Still self-scored on purpose: the `assessment.md` mock exams. They simulate exam conditions, where
scoring yourself against a published band is the point, and Teil 4/5 are open production in the real
exam too. Converting Teil 1–3 to `uebung` is possible if asked.

---

## 9. To start Đợt 6

```
Read AUTHORING.md, then do Đợt 6 from UPGRADE-PLAN §8.
```

That is enough. Everything needed is in those two files.
