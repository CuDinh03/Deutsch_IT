# Phase 1 · Reading — Übungsteil · Workbook

> **Level:** B1 · **Focus:** three graded texts, skim/scan drills, guessing from context, a real README · **Time:** ~2 h
> _After this workbook you read a German text for meaning at speed, without the dictionary reflex._

This is the practice half of [Phase 1 · Reading](#/phase-1/reading). The texts are here in the file —
no external links needed for the core work. They're graded for B1 and written around situations you
actually meet: a tech news item, a project README, and an internal announcement.

**The one rule:** on a first pass, look up **nothing**. Guess from cognates, tech loanwords and
compound structure. Only after answering the A and B questions may you check a dictionary — and
even then, at most five words per text.

---

## 🏋️ Übungsteil · Workbook

### Text 1 — Nachrichten: Fachkräfte in der IT

> **IT-Branche sucht weiter Personal**
>
> Deutsche Unternehmen suchen weiterhin dringend Fachkräfte in der Informationstechnik. Nach einer
> aktuellen Studie fehlen im Land rund 150.000 Fachleute. Besonders groß ist der Bedarf bei
> Cloud-Systemen, bei der IT-Sicherheit und bei der Entwicklung von Software für die Industrie.
>
> Viele Firmen haben ihre Anforderungen inzwischen angepasst. Früher war ein abgeschlossenes Studium
> fast immer Voraussetzung. Heute stellen mehrere Unternehmen auch Quereinsteiger ein, wenn sie die
> nötigen praktischen Kenntnisse mitbringen. Wichtiger als das Zeugnis sind oft konkrete Projekte.
>
> Auch die Arbeitsbedingungen haben sich verändert. Ein großer Teil der Stellen erlaubt es, teilweise
> von zu Hause zu arbeiten. Manche Arbeitgeber bieten zusätzlich flexible Arbeitszeiten oder eine
> Vier-Tage-Woche an.
>
> Bei den Sprachkenntnissen ist das Bild gemischt. In internationalen Teams ist Englisch die
> Arbeitssprache. Trotzdem erhöhen Deutschkenntnisse die Chancen deutlich — vor allem bei kleineren
> und mittleren Unternehmen außerhalb der großen Städte.

### Text 2 — README eines internen Projekts

> **# zahlungs-service**
>
> Der Zahlungs-Service verarbeitet Zahlungen für den Online-Shop. Er stellt eine REST-Schnittstelle
> bereit und speichert alle Vorgänge in einer PostgreSQL-Datenbank.
>
> **## Voraussetzungen**
> Java 17, Docker, PostgreSQL 15. Zugang zum internen Maven-Repository wird benötigt.
>
> **## Installation**
> 1. Repository klonen.
> 2. Die Datei `.env.beispiel` nach `.env` kopieren und die Umgebungsvariablen setzen.
> 3. Mit `docker compose up` die Container starten.
> 4. Die Anwendung ist danach unter `http://localhost:8080` erreichbar.
>
> **## Tests**
> Die Tests werden mit `./mvnw verify` ausgeführt. Achtung: Die Integrationstests benötigen eine
> laufende Datenbank. Ohne Datenbank schlagen sie fehl.
>
> **## Bekannte Probleme**
> Unter Windows kann es beim Start zu einem Fehler wegen der Zeilenenden kommen. In diesem Fall die
> Git-Einstellung `core.autocrlf` auf `false` setzen.

### Text 3 — Interne Ankündigung

> **Betreff: Wartungsarbeiten am Freitag**
>
> Liebe Kolleginnen und Kollegen,
>
> am Freitag, dem 12. September, führen wir Wartungsarbeiten an unserer Datenbank durch. Die Arbeiten
> beginnen um 18:00 Uhr und dauern voraussichtlich drei Stunden.
>
> In dieser Zeit ist die interne Anwendung nicht erreichbar. Bitte speichert eure Änderungen
> rechtzeitig vorher. Offene Vorgänge, die nicht gespeichert wurden, gehen verloren.
>
> Falls die Arbeiten länger dauern, informieren wir euch über den üblichen Chat-Kanal. Bei dringenden
> Fragen wendet euch bitte an den Bereitschaftsdienst.
>
> Vielen Dank für euer Verständnis.
> Viele Grüße
> Das Plattform-Team

---

### A. Erkennen — skim & scan (A1–A7)

**A1.** Skim all three texts for 60 seconds. Match text to type.

| Text | a) Anleitung | b) Nachricht | c) Ankündigung |
|---|:--:|:--:|:--:|
| Text 1 | ☐ | ☐ | ☐ |
| Text 2 | ☐ | ☐ | ☐ |
| Text 3 | ☐ | ☐ | ☐ |

**A2.** Scan only. Find these as fast as you can — no reading in full.

| Nr | Gesucht | Antwort |
|---|---|---|
| a | Wie viele Fachleute fehlen? (Text 1) | |
| b | Welche Java-Version? (Text 2) | |
| c | Unter welchem Port läuft die Anwendung? (Text 2) | |
| d | Wann beginnen die Wartungsarbeiten? (Text 3) | |
| e | Wie lange dauern sie voraussichtlich? (Text 3) | |

**A3.** Which gear did you use for A2 — skim, scan or intensive?

**A4.** Cognate, tech loanword, or compound? Sort these words from the texts.

*die Industrie · das Repository · die Arbeitsbedingungen · die Integrationstests ·
der Bereitschaftsdienst · flexibel · die Zeilenenden · der Quereinsteiger*

**A5.** Guess from context — no dictionary. Write your guess, then a confidence mark (✓ sure /
? unsure).

| Wort | Kontext | Deine Vermutung |
|---|---|---|
| der Quereinsteiger | "stellen auch Quereinsteiger ein, wenn sie praktische Kenntnisse mitbringen" | |
| die Voraussetzung | "Java 17, Docker, PostgreSQL 15" | |
| fehlschlagen | "Ohne Datenbank schlagen sie fehl." | |
| voraussichtlich | "dauern voraussichtlich drei Stunden" | |
| der Bereitschaftsdienst | "Bei dringenden Fragen wendet euch an den …" | |

**A6.** In Text 3 — is the tone formal (*Sie*) or informal (*ihr*)? Find the evidence.

**A7.** Which text would you read **intensively**, and which only **skim**, if you had five minutes
before a meeting?

---

### B. Anwenden — read for detail (B1–B10)

**B1 · Text 1** — richtig oder falsch?

| Nr | Aussage | R | F |
|---|---|:--:|:--:|
| a | Es fehlen etwa 15.000 Fachleute. | ☐ | ☐ |
| b | Ein Studium ist heute immer Voraussetzung. | ☐ | ☐ |
| c | Konkrete Projekte sind oft wichtiger als das Zeugnis. | ☐ | ☐ |
| d | In internationalen Teams spricht man meist Englisch. | ☐ | ☐ |
| e | Deutschkenntnisse helfen besonders bei großen Konzernen in Großstädten. | ☐ | ☐ |

**B2 · Text 1** — answer in one German sentence each.

- a) In welchen drei Bereichen ist der Bedarf besonders groß?
- b) Was hat sich bei den Arbeitsbedingungen verändert?
- c) Wo helfen Deutschkenntnisse am meisten?

**B3 · Text 2** — put the setup steps in the right order.

☐ Container starten · ☐ Umgebungsvariablen setzen · ☐ Repository klonen · ☐ Anwendung im Browser öffnen

**B4 · Text 2** — answer.

- a) Was macht der Service?
- b) Welche Datenbank wird benutzt?
- c) Warum schlagen die Integrationstests manchmal fehl?
- d) Was ist das bekannte Problem unter Windows und wie löst man es?

**B5 · Text 3** — fill in the facts.

| Nr | Frage | Antwort |
|---|---|---|
| a | Datum? | |
| b | Uhrzeit Beginn? | |
| c | Voraussichtliche Dauer? | |
| d | Was sollen die Kollegen vorher tun? | |
| e | Wo wird informiert, wenn es länger dauert? | |

**B6.** Now check five words you guessed in A5. How many did you get right?

**B7.** Find in the texts the German for:

| Englisch | Deutsch (aus dem Text) |
|---|---|
| prerequisites | |
| to clone | |
| environment variables | |
| to fail (of a test) | |
| reachable / available | |
| on-call duty | |
| maintenance work | |

**B8.** Decode these compounds right-to-left, then give article + meaning.

*die Arbeitsbedingungen · der Bereitschaftsdienst · die Sprachkenntnisse · die Integrationstests ·
die Wartungsarbeiten · die Zeilenenden*

**B9.** In Text 3, find one sentence with a **Nebensatz** and one with **inversion**. Write both out
and mark the verb.

**B10.** Which words in Text 2 are English and which German? Why does the mixture work?

---

### C. Produzieren — write from the reading (C1–C7)

**C1.** Summarize Text 1 in **3 German sentences**.

**C2.** Summarize Text 2's setup as a **4-step list** in German, in your own words.

**C3.** Rewrite Text 3 as a short **chat message** to the team (2 sentences, informal *du/ihr*).

**C4.** Write a reply to Text 3 asking whether the maintenance can be moved to Saturday.

**C5.** Translate into German: *Without a database the integration tests fail.*

**C6.** Translate into German: *The application is available at localhost port 8080 after the
containers have started.*

**C7.** Write a 5-line README section in German for **your own** service: Voraussetzungen +
Installation.

---

### D. Transfer — real texts (D1–D4)

**D1.** Read one **DW Top-Thema** or **nachrichtenleicht** article this week, intensively. Write 2
German sentences about it and harvest 5 words.

**D2.** Skim tech headlines on heise.de or Golem.de on five days. Titles only — log them:

| Tag | Schlagzeile | Worum ging es? (1 Satz) |
|---|---|---|
| Mo | | |
| Di | | |
| Mi | | |
| Do | | |
| Fr | | |

**D3.** Take your own project's README. If it's in English, translate the **Installation** section
into German. If it's already German, list every word you had to guess.

**D4.** Read the line below aloud, then say which German tech site you'll skim daily.

```audio
In dem Artikel geht es um die IT-Branche in Deutschland. Viele Unternehmen suchen Fachkräfte und bieten flexible Arbeitszeiten an.
```

---

## ✅ Lösungen & Erklärungen

```spoiler
### A. Erkennen

**A1.** Text 1 → **b) Nachricht** · Text 2 → **a) Anleitung** · Text 3 → **c) Ankündigung**

**A2.** a) **rund 150.000** · b) **Java 17** · c) **8080** · d) **18:00 Uhr** ·
e) **drei Stunden** (voraussichtlich)

**A3.** **Scan** — you hunted for specific data points without reading the surrounding sentences.
That's the gear you'll use most often at work.

**A4.**
| Typ | Wörter |
|---|---|
| Cognate | die Industrie, flexibel |
| Tech-Lehnwort | das Repository, die Integrationstests |
| Kompositum | die Arbeitsbedingungen, der Bereitschaftsdienst, die Zeilenenden, der Quereinsteiger |

*die Integrationstests* is arguably both — a loanword stem plus a German plural. That's very typical
of German tech writing and it's good news for you: half the word is already yours.

**A5.**
| Wort | Bedeutung |
|---|---|
| der Quereinsteiger | career changer, someone entering from another field |
| die Voraussetzung | prerequisite |
| fehlschlagen | to fail |
| voraussichtlich | expected / probably |
| der Bereitschaftsdienst | on-call duty |

*Quer* = across/sideways + *Einsteiger* = someone getting in → "someone getting in sideways". Once
you split it, the guess is nearly free — which is the whole point of the compound rule from
[Phase 1 · Vocabulary](#/phase-1/vocabulary).

**A6.** **Informal** — *Liebe Kolleginnen und Kollegen*, *Bitte speichert eure Änderungen*,
*wendet euch*, *euer Verständnis*. All *ihr*-forms. German companies commonly use *ihr* for
all-staff mails while keeping *Sie* for external contacts.

**A7.** Intensive: **Text 2** (you'd have to act on it correctly). Skim: **Text 1** (background
information, nothing depends on the detail).

### B. Anwenden

**B1.** a) **F** — 150.000, nicht 15.000 · b) **F** — heute nicht mehr immer · c) **R** ·
d) **R** · e) **F** — besonders bei **kleineren und mittleren** Unternehmen **außerhalb** der großen
Städte

Item e) inverts the text on purpose. When a statement reverses a detail you skimmed past, you'll
mark it *richtig* out of familiarity — this is the single most common exam-reading mistake, and telc
B2 leans on it heavily.

**B2.** a) *Bei Cloud-Systemen, bei der IT-Sicherheit und bei der Entwicklung von Software für die
Industrie.* · b) *Viele Stellen erlauben Homeoffice; manche Firmen bieten flexible Arbeitszeiten
oder eine Vier-Tage-Woche.* · c) *Bei kleineren und mittleren Unternehmen außerhalb der großen
Städte.*

**B3.** 1. Repository klonen → 2. Umgebungsvariablen setzen → 3. Container starten →
4. Anwendung im Browser öffnen

**B4.** a) *Er verarbeitet Zahlungen für den Online-Shop und stellt eine REST-Schnittstelle bereit.* ·
b) **PostgreSQL 15** · c) *Weil die Integrationstests eine laufende Datenbank benötigen.* ·
d) *Ein Fehler wegen der Zeilenenden; man setzt `core.autocrlf` auf `false`.*

**B5.** a) **Freitag, 12. September** · b) **18:00 Uhr** · c) **drei Stunden** ·
d) *Ihre Änderungen rechtzeitig vorher speichern.* · e) **im üblichen Chat-Kanal**

**B6.** Your own score. Three or more out of five is a healthy guessing rate at B1 — it means the
5-word rule is working and you don't need the dictionary reflex.

**B7.**
| Englisch | Deutsch |
|---|---|
| prerequisites | die Voraussetzungen |
| to clone | klonen |
| environment variables | die Umgebungsvariablen |
| to fail | fehlschlagen |
| reachable / available | erreichbar |
| on-call duty | der Bereitschaftsdienst |
| maintenance work | die Wartungsarbeiten |

**B8.**
| Kompositum | Zerlegung | Artikel | Bedeutung |
|---|---|---|---|
| die Arbeitsbedingungen | Arbeit + Bedingungen | die | working conditions |
| der Bereitschaftsdienst | Bereitschaft + Dienst | der | on-call duty |
| die Sprachkenntnisse | Sprache + Kenntnisse | die | language skills |
| die Integrationstests | Integration + Tests | die | integration tests |
| die Wartungsarbeiten | Wartung + Arbeiten | die | maintenance work |
| die Zeilenenden | Zeile + Enden | die | line endings |

**B9. Nebensatz:** *Offene Vorgänge, **die** nicht gespeichert wurden, **gehen** verloren.* —
relative clause, verb *wurden* at the end of the clause.
**Inversion:** *In dieser Zeit **ist** die interne Anwendung nicht erreichbar.* — *In dieser Zeit*
takes position 1, so the verb comes second.

**B10.** English: Repository, Docker, PostgreSQL, `docker compose up`, `core.autocrlf`, localhost,
REST. German: everything connecting them. This is exactly how German tech docs read — commands and
product names stay English, and you only decode the connective tissue. It's why reading is your
cheapest skill to grow.

### C. Produzieren

**C5.** *Ohne Datenbank schlagen die Integrationstests fehl.*
(*ohne* + Akkusativ, no article needed here; *fehlschlagen* is separable → *schlagen … fehl*.)

**C6.** *Die Anwendung ist unter localhost Port 8080 erreichbar, nachdem die Container gestartet
sind.*

**C1. Musterlösung:** *In Deutschland fehlen rund 150.000 IT-Fachkräfte, vor allem in den Bereichen
Cloud und Sicherheit. Viele Firmen stellen inzwischen auch Quereinsteiger ein, wenn sie praktische
Erfahrung haben. Englisch reicht in internationalen Teams, aber Deutschkenntnisse verbessern die
Chancen deutlich.*

**C2. Musterlösung:**
*1. Zuerst klont man das Repository. 2. Danach kopiert man die Beispiel-Datei und setzt die
Umgebungsvariablen. 3. Dann startet man die Container mit Docker. 4. Zum Schluss öffnet man die
Anwendung im Browser unter Port 8080.*

**C3. Musterlösung:** *Kurze Info: Am Freitag ab 18 Uhr machen wir Wartungsarbeiten an der Datenbank,
ca. 3 Stunden. Bitte speichert vorher alles — die Anwendung ist in der Zeit nicht erreichbar!*

**C4. Musterlösung:** *Hallo zusammen, danke für die Info. Wäre es möglich, die Wartungsarbeiten auf
Samstag zu verschieben? Am Freitagabend läuft bei uns noch das Release. Viele Grüße, Huy*

**C7.** Open. Check that every noun has an article and that your imperatives or infinitives are
consistent (German READMEs usually use the infinitive: *Repository klonen*, not *Klone das
Repository*).

### D. Transfer

Your own material. For D3, the words you had to guess are the highest-value flashcards you'll make
this week — they're the vocabulary of *your* actual codebase.
```

---

## 🧾 Zusammenfassung · Summary

Three gears did the work: **skim** to place a text, **scan** to pull a fact, **intensive** only where
acting on it matters. The **5-word rule** held up — cognates, tech loanwords and right-to-left
compound decoding cover most unknowns, so *Quereinsteiger* and *Bereitschaftsdienst* are guessable
without a dictionary. Watch the exam-style trap in B1e: a statement that quietly reverses a detail
you skimmed reads as true. Theory lives in [Phase 1 · Reading](#/phase-1/reading).

## 📇 Vokabel-Checkliste · Vocabulary checklist

| Deutsch | Artikel | Plural | English | VI (if hard) |
|---|---|---|---|---|
| Quereinsteiger | der | Quereinsteiger | career changer | người chuyển ngành |
| Bereitschaftsdienst | der | Bereitschaftsdienste | on-call duty | trực hệ thống |
| Wartungsarbeiten | die | (Plural) | maintenance work | bảo trì |
| Kenntnisse | die | (Plural) | knowledge / skills | kiến thức |
| Vorgang | der | Vorgänge | process / transaction | thao tác, giao dịch |
| Bedarf | der | — | demand / need | nhu cầu |
| fehlschlagen | — | — | to fail | thất bại |
| erreichbar | — | — | reachable / available | |

→ Drill these and more in [Flashcards](#/@flashcards).

## 📝 Hausaufgabe · Homework

- [ ] Work all three texts through blocks **A–B** without a dictionary on the first pass.
- [ ] Do the **C1–C3** summaries in writing.
- [ ] Fill the **D2 headline tracker** for five days.
- [ ] Translate your own README's install section into German (**D3**).
- [ ] Add the **B7 + B8** words to [Flashcards](#/@flashcards).

## 📚 Empfohlene Ressourcen · Recommended resources

- **Graded news:** nachrichtenleicht; DW – Top-Thema (article + audio + exercises).
- **Tech headlines:** heise.de, Golem.de, t3n.de.
- **Dictionaries:** dict.leo.org, DWDS.de, Linguee for context.
- **Back to theory:** [Phase 1 · Reading](#/phase-1/reading).
- **Next:** [Phase 1 · Writing](#/phase-1/writing) and its [Übungsteil](#/phase-1/writing-uebungen).
