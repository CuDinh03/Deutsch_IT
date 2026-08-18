# CONTENT STYLE GUIDE — German-for-IT Roadmap

This guide keeps every chapter consistent. Follow it exactly. (This file lives OUTSIDE
`/content`, so `build.js` does not bundle it.)

## Reader profile
A Vietnamese **backend Java developer** (Spring Boot, microservices, PostgreSQL/MySQL,
Docker, Kubernetes, Jenkins, Redis, RabbitMQ, REST, Git; basic Angular). English = IELTS
7.0. German ≈ **B1**, climbing to **B2/C1** to work as a Software Engineer in Germany.

## Language mix (STRICT)
- **Explain in English.** English is the working language of the handbook.
- **All examples in German**, immediately followed by an English gloss.
- **Vietnamese only for genuinely hard-to-grasp words/nuances** — a short `VI: …` note,
  not full-sentence translation. Do not translate everything into Vietnamese.
- German example lines get the 🇩🇪 flag or live in a table; keep German **bold** or in the
  `de` styling so it stands out. Always show the **article + plural** for new nouns.

## Module = one Markdown file. Skeleton (use this order):

```
# <Phase N · Module Title>

> **Level:** B1/B2/C1 · **Focus:** … · **Time:** ~X h this module
> _One-sentence promise of what the learner can DO after this module._

<short intro paragraph — English, motivating, concrete>

## Objectives / Lernziele
- bullet outcomes ("By the end you can …")

## <core teaching sections — 3-6 of them, topic-specific>
… tables, examples, Mermaid, ```audio widgets, code blocks …

--- (then the MANDATORY chapter-ending blocks, in THIS order) ---

## 🧾 Zusammenfassung · Summary
## 📇 Vokabel-Checkliste · Vocabulary checklist   (a table: DE | Artikel | Plural | EN | VI-if-hard)
## 🗣️ Sprechübung · Speaking practice            (2-4 prompts; include one ```audio widget)
## ❓ Mini-Quiz                                    (3-5 Q&A; put answers under a "Lösungen" note)
## 📝 Hausaufgabe · Homework                        (concrete, checkable tasks — use - [ ] items)
## 📚 Empfohlene Ressourcen · Recommended resources (links from the approved list below)
```

Lighter modules (`overview`, `plan`, `assessment`) still end with **Summary + Homework +
Resources** at minimum.

## Formatting rules
- **Tables** for vocab, grammar paradigms, comparisons, schedules (the app styles them).
- **Mermaid** when a diagram truly helps (learning path, request flow, decision tree,
  grammar decision, sprint cycle). Keep node labels short; avoid special chars/parentheses
  inside labels. Example:
  ```mermaid
  flowchart LR
    A[Nebensatz] --> B[Verb ans Ende]
  ```
- **Audio widget** for at least one German passage per teaching module:
  ```audio
  Guten Morgen! Ich fange gleich mit dem Deployment an.
  ```
- **Code blocks** (```java, ```bash, ```yaml, ```sql) when showing code/CLI/config.
- **Cross-reference** other modules with internal links: `[Phase 1 · Grammar](#/phase-1/grammar)`,
  `[Flashcards](#/@flashcards)`. Reference earlier chapters instead of re-explaining
  (e.g. "Recall the Nebensatz rule from [Phase 1 · Grammar](#/phase-1/grammar)").
- **Do not repeat** long explanations already given earlier — link to them.
- Keep terminology **consistent** — use the canonical glossary below.
- Length: teaching modules should be **rich** (aim ~800–1500+ words). No filler.

## Canonical terminology (use these, consistently)
| Concept | Use in German | Notes |
|---|---|---|
| bug | der Fehler / der Bug | "einen Fehler beheben" |
| deployment | das Deployment / die Bereitstellung | verb: bereitstellen / deployen |
| pull request | der Pull Request (PR) | "einen PR aufmachen/reviewen" |
| merge | zusammenführen / „mergen“ | "einen Branch mergen" |
| code review | das Code-Review / die Codeüberprüfung | |
| standup | das Daily / das Stand-up | "das Daily" is most common |
| deadline | die Frist / der Termin | "eine Frist einhalten" |
| requirement | die Anforderung | fachlich=business, technisch=technical |
| feature | das Feature / die Funktion | |
| release | das Release / die Auslieferung | |
| on-call | der Bereitschaftsdienst / „On-Call“ | |
| to ship | ausliefern / live gehen | |

Formality: teach **Sie** as the workplace default, but note most dev teams use **du**
internally ("Wir sind hier alle per du"). Show both when relevant.

## Real German companies to reference (rotate, be realistic, non-promotional)
SAP (Walldorf), Siemens, Bosch, Zalando, Delivery Hero, N26, Trade Republic, Celonis,
Trivago, idealo, Check24, HelloFresh, DB Systel / Deutsche Bahn, Otto, Personio, sipgate,
GitLab-using Mittelstand, Allianz/Munich Re (insurance IT). Use them for *plausible*
scenarios ("Bei einem Berliner Scale-up wie N26 …"), never invented facts about internals.

## Approved resources (cite ONLY from here — verified current)
**Exam boards:** telc (telc.net), Goethe-Institut (goethe.de).
**Exam textbooks:** *Aspekte neu B2/C1* (Klett), *Sicher! B2/C1* (Hueber), *So geht's noch
besser* (telc trainer), Schubert-Verlag online exercises (schubert-verlag.de).
**YouTube:** Easy German, Deutsch mit Marija, Lingoni German, Deutsch für Euch,
Hallo Deutschschule, Don't Trust The Rabbit.
**Learner podcasts:** Easy German Podcast, Coffee Break German, Slow German (Annik Rubens),
Deutsche Welle — *Langsam gesprochene Nachrichten*, *Top-Thema*, *Das Thema*.
**German tech podcasts:** programmier.bar, Working Draft, Engineering Kiosk, heise show,
Golem.de-Podcast, t3n-Podcast.
**Tech media / reading:** heise.de, Golem.de, t3n.de, Informatik Aktuell, entwickler.de,
Dev-Insider. German docs of tools when available.
**Anki / SRS:** Anki + decks "Master German Vocabulary A1–C1" (Aspekte/Menschen wordlists),
Speakada, Language Atlas; keep a personal IT deck.
**Dictionaries:** dict.leo.org, dict.cc, DWDS.de, Duden.de, Linguee, Reverso Context.
**Grammar:** mein-deutschbuch.de, deutsch.lingolia.com, Schubert-Verlag.
**Pronunciation:** forvo.com, YouGlish (German), the 🔊 TTS in this app.
**Communities:** r/German, r/de, r/germany, r/cscareerquestionsEU; Engineering Kiosk Discord.

## Exam facts (accurate, use where relevant)
- **telc B2:** written parts (reading + language elements ~90 min, listening ~20 min,
  writing ~30 min) + a paired oral exam (~15 min: presentation, discussion, plan together).
  Digital/hybrid/paper options.
- **Goethe-Zertifikat B1:** same modular design as C1 — 4 modules (Lesen ~65 min, Hören ~40 min,
  Schreiben ~60 min, Sprechen ~15 min, paired), each scored /100, **≥60 to pass**, each one
  **takeable and repeatable on its own**. Jointly developed with ÖSD, so it also appears as
  *Zertifikat B1*. B1 is the level normally required for **Niederlassungserlaubnis** and
  **Einbürgerung** — that administrative use, not the language level, is usually the reason to sit it.
- **Goethe-Zertifikat C1:** Lesen ~70 min, Hören ~40 min, Schreiben ~65 min, Sprechen ~15 min
  (paired). Each of the 4 modules scored /100; **≥60 to pass** each.
- Many tech roles are advertised in English, but **A2–B1+ German raises shortlisting odds**,
  and daily life / integration needs German. German firms value **Pünktlichkeit, Struktur,
  klare Kommunikation** over "sales talk".
```
