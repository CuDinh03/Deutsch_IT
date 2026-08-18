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

### A. Erkennen — skim & scan

**A1–A3 · Textsorte bestimmen.**

```uebung
? Text 1 („IT-Branche sucht weiter Personal") ist …
x eine Anleitung
* eine Nachricht
x eine Ankündigung
! Bericht über einen Sachverhalt, mit Quellenangabe („nach einer Studie").

? Text 2 (zahlungs-service README) ist …
* eine Anleitung
x eine Nachricht
x eine Ankündigung
! Voraussetzungen, nummerierte Schritte, Befehle — eine Handlungsanweisung.

? Text 3 („Wartungsarbeiten am Freitag") ist …
x eine Anleitung
x eine Nachricht
* eine Ankündigung
! Interne Mitteilung über etwas Bevorstehendes, mit Anrede und Gruß.
```

**A4–A8 · Scannen.** Finde die Information, ohne den ganzen Text zu lesen.

```uebung
? Wie viele Fachleute fehlen laut Text 1?
= 150.000 | rund 150.000 | 150000
! Steht im ersten Absatz. Beim Scannen suchst du nur die Zahl, nicht den Satz.

? Welche Java-Version verlangt Text 2?
= Java 17 | 17
! Unter „Voraussetzungen".

? Unter welchem Port läuft die Anwendung in Text 2?
= 8080
! Schritt 4 der Installation.

? Wann beginnen die Wartungsarbeiten in Text 3?
= 18:00 | 18 Uhr | 18:00 Uhr
! Zweiter Absatz.

? Wie lange dauern sie voraussichtlich?
= drei Stunden | 3 Stunden
! *voraussichtlich drei Stunden*.
```

**A9 · Welcher Lesegang war das?**

```uebung
? Für die Aufgaben A4–A8 hast du …
x geskimmt
* gescannt
x intensiv gelesen
! **Scannen** = gezielt nach Einzelinformationen suchen, ohne den Zusammenhang zu lesen. Genau das brauchst du im Job am häufigsten.
```

**A10–A13 · Worttyp bestimmen.**

```uebung
? „das Repository" ist …
x ein Cognate
* ein Tech-Lehnwort
x ein Kompositum
! Direkt aus dem Englischen übernommen, unverändert.

? „die Arbeitsbedingungen" ist …
x ein Cognate
x ein Tech-Lehnwort
* ein Kompositum
! Arbeit + Bedingungen. Von rechts lesen: Bedingungen, und zwar der Arbeit.

? „die Industrie" ist …
* ein Cognate
x ein Tech-Lehnwort
x ein Kompositum
! Fast identisch mit dem englischen Wort — geschenkte Verständlichkeit.

? „der Bereitschaftsdienst" ist …
x ein Cognate
x ein Tech-Lehnwort
* ein Kompositum
! Bereitschaft + Dienst → der Dienst der Bereitschaft = on-call.
```

**A14–A18 · Aus dem Kontext erraten.** Kein Wörterbuch.

```uebung
? „stellen auch Quereinsteiger ein, wenn sie praktische Kenntnisse mitbringen" — was ist ein Quereinsteiger?
* jemand, der aus einem anderen Bereich in den Beruf wechselt
x ein Berufsanfänger direkt von der Uni
x ein befristeter Mitarbeiter
x ein Freiberufler
! *quer* (seitwärts) + *Einsteiger* (jemand, der einsteigt) → jemand, der seitlich hineinkommt. Zerleg das Kompositum, und die Bedeutung ist praktisch geschenkt.

? „Voraussetzungen: Java 17, Docker, PostgreSQL" — was sind Voraussetzungen?
x Empfehlungen
* Dinge, die vorher da sein müssen
x Warnungen
x Einstellungen
! *voraus* + *setzen* → was vorausgesetzt wird. Das nützlichste README-Wort überhaupt.

? „Ohne Datenbank schlagen sie fehl." — was heißt fehlschlagen?
x langsam sein
x fehlen
* scheitern, nicht funktionieren
x überspringen
! *fehlschlagen* = to fail. Nicht mit *fehlen* (to be missing) verwechseln.

? „dauern voraussichtlich drei Stunden" — was heißt voraussichtlich?
x höchstens
x mindestens
x sicher
* wahrscheinlich, geplant
! Es ist eine Schätzung, keine Garantie.

? „Bei dringenden Fragen wendet euch an den Bereitschaftsdienst." — was ist das?
* die Person, die außerhalb der Arbeitszeit erreichbar ist
x die IT-Abteilung
x der Betriebsrat
x die Geschäftsführung
! Bereitschaft = Verfügbarkeit auf Abruf. Im Dev-Alltag sagt man auch „On-Call".
```

**A19 · Anrede in Text 3.**

```uebung
? Ist Text 3 formell (Sie) oder informell (ihr)?
x formell (Sie)
* informell (ihr)
! *Liebe Kolleginnen und Kollegen*, *speichert eure Änderungen*, *wendet euch*, *euer Verständnis* — alles *ihr*-Formen. Deutsche Firmen nutzen intern häufig *ihr*, nach außen aber *Sie*.
```

---

### B. Anwenden — read for detail

**B1–B5 · Text 1: richtig oder falsch?**

```uebung
? Etwa zwei Drittel der Betriebe haben teilweise ausgelagert.
* richtig
x falsch
! Steht so im Text.

? Mittelständische Unternehmen lagern am wenigsten aus.
x richtig
* falsch
! Bei ihnen ist der Anteil **besonders stark gewachsen** — das ist fast das Gegenteil. Klassische Prüfungsumkehrung.

? Der Fachkräftemangel ist einer der genannten Gründe.
* richtig
x falsch
! „Auch der Fachkräftemangel spielt eine Rolle."

? Der Text erwartet, dass der Trend endet.
x richtig
* falsch
! „Branchenbeobachter rechnen dennoch damit, dass sich der Trend **fortsetzt**."

? Datenschützer wollen klarere Regeln für Daten außerhalb der EU.
* richtig
x falsch
! Letzter Satz des dritten Absatzes.
```

**B6–B8 · Text 2: Reihenfolge und Details.**

```uebung
? Welcher Schritt kommt zuerst?
x Container starten
x Umgebungsvariablen setzen
x Anwendung im Browser öffnen
* Repository klonen
! Ohne Repository gibt es nichts zu konfigurieren.

? Warum schlagen die Integrationstests manchmal fehl?
* weil keine Datenbank läuft
x weil das Repository veraltet ist
x weil der Port belegt ist
x weil Java 17 fehlt
! „Die Integrationstests benötigen eine laufende Datenbank."

? Wie löst man das Windows-Problem aus Text 2?
= core.autocrlf auf false setzen | core.autocrlf false | autocrlf false
! Es geht um die Zeilenenden. Die Lösung steht wörtlich im Abschnitt „Bekannte Probleme".
```

**B9–B12 · Text 3: Fakten.**

```uebung
? An welchem Datum finden die Wartungsarbeiten statt?
= 12. September | Freitag, 12. September | 12.9.
! „am Freitag, dem 12. September".

? Was sollen die Kollegen vorher tun?
x den Bereitschaftsdienst anrufen
* ihre Änderungen rechtzeitig speichern
x das Büro verlassen
x die Anwendung neu starten
! „Bitte speichert eure Änderungen rechtzeitig vorher."

? Wo wird informiert, wenn es länger dauert?
= im üblichen Chat-Kanal | Chat-Kanal | im Chat
! Vierter Absatz.

? Was passiert mit nicht gespeicherten Vorgängen?
x nichts
x sie werden automatisch gesichert
* sie gehen verloren
x sie werden nachträglich übertragen
! „Offene Vorgänge, die nicht gespeichert wurden, gehen verloren."
```

**B13–B19 · Vokabular aus den Texten.**

```uebung
? Deutsch für „prerequisites"
= Voraussetzungen | die Voraussetzungen
! Aus Text 2.

? Deutsch für „to clone"
= klonen
! Aus Text 2.

? Deutsch für „environment variables"
= Umgebungsvariablen | die Umgebungsvariablen
! Umgebung + Variablen.

? Deutsch für „to fail" (von einem Test)
= fehlschlagen
! Trennbar: *die Tests schlagen fehl*.

? Deutsch für „reachable / available"
= erreichbar
! Auch für Personen: *Ich bin ab neun Uhr erreichbar.*

? Deutsch für „on-call duty"
= Bereitschaftsdienst | der Bereitschaftsdienst
! Aus Text 3.

? Deutsch für „maintenance work"
= Wartungsarbeiten | die Wartungsarbeiten
! Meist im Plural.
```

**B20–B25 · Komposita zerlegen.** Gib den Artikel an.

```uebung
? ___ Arbeitsbedingungen
= die
! Kopf ist *die Bedingungen*.

? ___ Bereitschaftsdienst
= der
! Kopf ist *der Dienst*.

? ___ Sprachkenntnisse
= die
! Kopf ist *die Kenntnisse* (nur Plural).

? ___ Integrationstests
= die
! Kopf ist *die Tests*.

? ___ Wartungsarbeiten
= die
! Kopf ist *die Arbeiten*.

? ___ Zeilenenden
= die
! Kopf ist *die Enden*.
```

**B26–B27 · Grammatik im Text erkennen.**

```uebung
? „Offene Vorgänge, die nicht gespeichert wurden, gehen verloren." — was für ein Satz ist der eingeschobene Teil?
* ein Relativsatz
x ein Kausalsatz
x ein Konditionalsatz
! Er beschreibt das Nomen *Vorgänge* näher; das Verb *wurden* steht am Ende des Einschubs.

? „In dieser Zeit ist die interne Anwendung nicht erreichbar." — warum steht „ist" an zweiter Stelle?
x weil es Passiv ist
* weil „In dieser Zeit" Position 1 besetzt (Inversion)
x weil es ein Nebensatz ist
! Standard-Inversion: Wenn eine Angabe vorn steht, folgt sofort das konjugierte Verb.
```

**B28 · Warum funktioniert das Sprachgemisch in Text 2?**

```uebung
? Welche Wörter bleiben in deutschen Tech-Dokumenten typischerweise englisch? (mehrere richtig)
* Konfigurationsschlüssel wie core.autocrlf
x Verben wie „klonen"
x Nomen wie „die Voraussetzungen"
* Befehle wie „docker compose up"
* Produktnamen wie PostgreSQL
! Befehle, Tool- und Produktnamen bleiben englisch; das **Bindegewebe** dazwischen ist deutsch. Genau deshalb ist Lesen deine billigste Fertigkeit: die halbe Seite kannst du schon.
```

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

## ✅ Musterlösungen für C und D

```spoiler
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
