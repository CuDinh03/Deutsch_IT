# 🇩🇪 German for Software Engineers — B1 → B2/C1 Roadmap

An interactive, offline-capable study handbook that takes a backend/Java developer
from **German B1 to B2/C1** and into a **software engineering job in Germany**.

Content is written in **English + German** (with **Vietnamese** for the trickiest
words). Every chapter ends with a **Summary, Vocabulary checklist, Speaking practice,
Mini-quiz, Homework, and Recommended resources**.

> **Standalone & personal.** This is your private study project — **not** part of any other
> codebase. It has no external dependencies and can live in its own Git repository. Move the
> whole `german-it-roadmap/` folder anywhere you like; nothing references anything outside it.

---

## 🚀 Run it

**Option A — double-click (no install, no server):**
Open `index.html` in any modern browser. Everything loads from local `<script>` files,
so it works straight from disk. *(Diagrams need internet the first time to load Mermaid
from a CDN; without internet they gracefully show the diagram source instead.)*

**Option B — GitHub Pages (recommended for you):**
Push the repo and enable **Settings → Pages → Source = "GitHub Actions"**.
The included workflow (`.github/workflows/deploy.yml`) runs `build.js` and publishes the
site automatically on every push. See notes at the top of that file if this project is a
subfolder rather than its own repo.

**Option C — local web server (optional):**
```bash
cd german-it-roadmap
python3 -m http.server 8000    # then open http://localhost:8000
```

---

## 🧩 Features

| Feature | Where |
|---|---|
| Sidebar navigation, collapsible by phase | left sidebar |
| Full-text **search** (`/` to focus) | top bar |
| **Dark / light mode** (remembers choice) | 🌙 top-right |
| **Progress tracking** (mark modules complete) | per lesson + sidebar bar |
| **Flashcards** (flip, shuffle, mark known/review, German TTS) | Study Tools → Flashcards |
| **Interactive quizzes** with instant feedback | Study Tools → Quizzes |
| **Weekly checklist** (persists locally) | Study Tools → Checklist |
| **Bookmarks / favourites** | ☆ on any lesson |
| **Filter by level (B1/B2/C1) and IT topic** | sidebar chips |
| **Click-to-hear** speaker buttons on every vocab word & example sentence (German TTS) | 🔊 in tables & examples |
| **Gender colour-coding** (der = blue · die = red · das = green) | vocab tables & flashcards |
| **German audio placeholders** → real Text-to-Speech (`de-DE`) | 🔊 buttons |
| **Mermaid diagrams**, tables, code blocks | inside lessons |
| Responsive: desktop / tablet / mobile | everywhere |
| Print / export a chapter to PDF | 🖨 button (uses browser print) |

All progress (completed modules, bookmarks, flashcard status, checklist, theme) is stored
in your browser's `localStorage` — private to your machine, no account needed.

---

## 📁 Project structure

```
german-it-roadmap/
├── index.html              # app shell
├── build.js                # bundles /content/*.md → js/content-bundle.js
├── README.md
├── .github/workflows/
│   └── deploy.yml           # GitHub Pages deploy
├── css/
│   └── styles.css           # light + dark themes, responsive
├── js/
│   ├── markdown.js          # dependency-free Markdown renderer
│   ├── content-index.js     # navigation manifest (sidebar/search/filters)
│   ├── content-bundle.js    # GENERATED from /content by build.js
│   ├── flashcards.js        # vocabulary deck data (base)
│   ├── flashcards-2.js      # vocabulary deck data (expansion; merges on)
│   ├── quizzes.js           # quiz data
│   ├── checklist.js         # weekly checklist data
│   └── app.js               # app engine (routing, state, tools)
├── assets/audio/            # (drop real audio files here later)
└── content/                 # ← the handbook itself, editable Markdown
    ├── home.md, roadmap-overview.md
    ├── phase-1/ … phase-6/  # overview, grammar, vocabulary, speaking,
    │                        # listening, reading, writing, plan, assessment
    ├── vocabulary/          # IT vocabulary modules
    ├── dialogues/           # workplace dialogues
    └── interviews/          # interview Q&A
```

---

## ✍️ Edit or add content

1. Edit / add a Markdown file under `content/` (e.g. `content/phase-2/grammar.md`).
2. If you add a **new** file, add an entry for it in `js/content-index.js` so it shows in
   the sidebar (`id` = path under `content/` without `.md`).
3. Rebuild the bundle:
   ```bash
   node build.js
   ```
4. Reload the page. (On GitHub Pages, the Action does step 3 for you on push.)

The Markdown supports headings, tables, fenced code, task lists, blockquotes, plus two
extras used by this app:

- ` ```mermaid ` → rendered diagram
- ` ```audio ` → a 🔊 Text-to-Speech widget (reads the German aloud)

Because content lives in plain `.md`, you can also open any file directly, or convert it
to **Word/PDF** with your tool of choice.

---

## 🗺️ Build status — v0.6

**119 content modules · ~220k words · 935 interactive exercises.**

Included now:

- **All 6 phases** at full depth (54 modules: objectives, grammar, vocabulary, speaking,
  listening, reading, writing, weekly/daily plan, monthly assessment).
- **18 workbooks** (`*-uebungen.md`, Phase 1–3) with **832 self-grading exercises** —
  multiple choice, multi-select and gap-fill. Answer, press *Prüfen*, and each item tells you
  **why** that answer is right. Free-production tasks keep a Musterlösung instead.
- **15 in-app Hörtexte** — listening practice with the transcript hidden behind a toggle,
  plus Diktate and marked shadowing scripts.
- **10 Alltag modules** — everyday survival German: bakery, lunch small talk, Modalpartikeln,
  after-work drinks, flat viewing, Anmeldung & Ausländerbehörde, the doctor, Pfand,
  train delays, bank & phone contracts.
- **6 exam modules** — telc B2 overview, Lesen & Sprachbausteine, Hören, Schreiben, Sprechen,
  and a 120+ phrase Prüfungs-Redemittel bank, all with interactive drills.
- **12 IT-vocabulary deep dives** (Software Dev, Java, Spring Boot, Microservices & Cloud,
  Docker & Kubernetes, CI/CD·Git·DevOps, Database & SQL, Networking & Linux, Security & Auth,
  Testing·Agile·Scrum, Architecture & System Design, AI & ML).
- **Reference library**: 11 workplace dialogues (Onboarding, Standup, Team-Lead 1:1, Code
  Review, Sprint Planning, Production Incident, Krankmeldung & Urlaub, Pair Programming,
  Retrospektive, Architektur-Diskussion, Deployment-Notfall)
  + 3 interview banks (Backend/Java, DevOps, Spring/Microservices).
- **Full 52-week study plan** + **431 flashcards** + **11 quizzes (96 questions)** + weekly checklist.
- Two scored mock exams: a 100-point Phase-1 test and a telc-B2-shaped Phase-2 Modelltest,
  each with a **Fehler → Modul** table pointing at what to redo.

Still growing (type **“Continue”** in chat): workbooks for Phases 4–6, `templates/` and
`bewerbung/` modules, Goethe C1 exam prep, more interview roles, and the flashcard deck
toward 2000+ cards. Any not-yet-written module shows a friendly “being written” note in the app.

> Numbers above are produced by `node build.js` — re-run it after editing content and it will
> tell you the current module count, chunk sizes and any dead internal links.

---

## 📦 Relocating this folder

This project is fully self-contained — **no file references any path outside it** — so you
can move it anywhere and it runs unchanged. To move it out to its own location:

```bash
mv /Users/dinhcu/Developer/DeutschFlow/german-it-roadmap /Users/dinhcu/Developer/german-it-roadmap
cd /Users/dinhcu/Developer/german-it-roadmap
git init && git add -A && git commit -m "German for Software Engineers — study app"
```

Then create an empty GitHub repo, push, and enable **Settings → Pages → GitHub Actions**.

---

## ⌨️ Shortcuts

- `/` — focus search
- Click a flashcard — flip it
- `Esc` — leave search
