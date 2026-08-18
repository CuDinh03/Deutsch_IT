# Phase 3 · Writing — Übungsteil · Workbook

> **Level:** B2+ · **Focus:** Commit-Messages, Tickets, README, ADR — auf Deutsch · **Time:** ~2 h
> _After this workbook you can write the four text types a German dev team actually produces._

This is the practice half of [Phase 3 · Writing](#/phase-3/writing). Four formats, each with its own
register: **Commit** (imperative subject, passive body), **Ticket** (reproducible), **README**
(instructions), **ADR** (nominal, argued).

---

## 🏋️ Übungsteil · Workbook

### A. Erkennen — recognise the format

**A1–A4 · Commit-Subject: welche Form?**

```uebung
? Welche Subject-Zeile ist korrekt?
* fix(auth): Ablauf des JWT-Tokens korrekt behandeln
x fix(auth): Ich habe den Ablauf des JWT-Tokens korrekt behandelt
x fix(auth): Ablauf des JWT-Tokens wurde korrekt behandelt
x fix(auth): behandelt Ablauf des JWT-Tokens
! Die Subject-Zeile steht im **Infinitiv/Imperativ**: „Was soll dieser Commit tun?" → *… behandeln*. Kein Ich, kein Passiv, kein Perfekt.

? Wie lang sollte die Subject-Zeile höchstens sein?
* etwa 50 Zeichen
x 200 Zeichen
x eine ganze Zeile Fließtext
x egal
! Kurz genug, dass sie in `git log --oneline` lesbar bleibt.

? In welchem Register steht der **Body** einer Commit-Message?
* Passiv / Nominalstil, sachlich
x Imperativ
x Ich-Form
x Umgangssprache
! Der Body erklärt **warum** — sachlich und aktorneutral: *Die Prüfung wird nun im Sicherheitsfilter durchgeführt.*

? Was gehört NICHT in eine gute Commit-Message?
* „habe schnell was gefixt, sollte jetzt gehen"
x eine Begründung im Body
x ein Typ-Präfix wie fix/feat
x eine kurze Subject-Zeile
! Umgangssprache und Unsicherheit („sollte gehen") machen die History unbrauchbar.
```

**A5–A8 · Ticket-Bestandteile.**

```uebung
? Welche Felder gehören in ein reproduzierbares Ticket? (mehrere richtig)
* Titel
* Beschreibung
* Schritte zur Reproduktion
* Erwartetes / Tatsächliches Verhalten
* Akzeptanzkriterien
x eine Schätzung in Stunden
! Die fünf oben machen ein Ticket bearbeitbar, ohne dass jemand nachfragen muss.

? Wie sollte der Ticket-Titel formuliert sein?
* eine sachliche Zeile, die das Problem nennt
x eine Frage
x eine Entschuldigung
x der Name des Entwicklers
! *Login schlägt bei abgelaufenem Token fehl* — Zustand, nicht Vermutung.

? Wie müssen die Reproduktionsschritte sein?
* nummeriert und deterministisch
x als Fließtext
x als Screenshot ohne Text
! Wer sie befolgt, muss den Fehler sehen. Sonst ist das Ticket nicht bearbeitbar.

? Wie schreibt man Akzeptanzkriterien?
* als abhakbare Bedingungen
x als lange Erklärung
x als Meinung
! Prüfbar formulieren: *Abgelaufene Tokens liefern 401.*
```

**A9–A11 · Welcher Texttyp?**

```uebung
? „Zuerst klont man das Repository, dann installiert man die Abhängigkeiten."
* README / Anleitung
x ADR
x Commit-Body
x Ticket
! *man* + Reihenfolge = Handlungsanweisung.

? „Zur Reduzierung der Kopplung wurde entschieden, auf Events umzustellen."
x README
* ADR
x Ticket
x Commit-Subject
! Nominalstil + Passiv + Begründung = Entscheidungsdokument.

? „Nach Ablauf des Tokens erhält der Benutzer einen 500-Fehler statt einer klaren 401-Antwort."
x README
x ADR
* Ticket-Beschreibung
x Commit-Subject
! Problembeschreibung mit Ist-Zustand.
```

---

### B. Anwenden — apply with a frame

**B1–B5 · Commit-Subjects schreiben.**

```uebung
? Du führst einen Redis-Cache für Produktabfragen ein. Subject mit Typ „feat"?
= feat(cache): Redis-Cache für Produktabfragen einführen
! Typ, Scope, dann Infinitiv.

? Du behandelst den Ablauf des JWT-Tokens korrekt. Subject mit „fix"?
= fix(auth): Ablauf des JWT-Tokens korrekt behandeln
! Kein Perfekt, kein Passiv in der Subject-Zeile.

? Du teilst den Bestellservice in kleinere Klassen auf. Subject mit „refactor"?
= refactor(order): Bestellservice in kleinere Klassen aufteilen
! Trennbares Verb bleibt zusammen im Infinitiv: *aufteilen*.

? Du aktualisierst die Installationsschritte. Subject mit „docs"?
= docs(readme): Installationsschritte aktualisieren
! Kurz und sachlich.

? Korrigiere: „fix: habe den Bug behoben"
= fix: Bug beheben | fix: den Bug beheben
! Infinitiv statt Perfekt, kein „habe".
```

**B6–B9 · Commit-Body im richtigen Register.**

```uebung
? Setze ins Passiv: „Ich prüfe den Token jetzt im Sicherheitsfilter."
= Die Prüfung wird nun im Sicherheitsfilter durchgeführt | Der Token wird nun im Sicherheitsfilter geprüft
! Body = sachlich, aktorneutral.

? Setze ins Passiv: „Wir weisen abgelaufene Tokens ab."
= Abgelaufene Tokens werden abgewiesen
! Partizip II am Ende.

? Ergänze den Kausalzusammenhang: „Der Token wurde bisher nicht auf Ablauf geprüft, ___ abgelaufene Tokens akzeptiert wurden."
= sodass
! *sodass* = Folge — siehe [Grammar · Übungsteil](#/phase-3/grammar-uebungen).

? Welche Zeitform beschreibt den alten, fehlerhaften Zustand?
* Präteritum oder Perfekt Passiv (wurde/ist … geprüft)
x Präsens
x Futur
! Der Body kontrastiert *bisher* (Vergangenheit) mit *nun* (Gegenwart).
```

**B10–B14 · Ticket bauen.**

```uebung
? Formuliere den Titel: Login scheitert, wenn das Token abgelaufen ist.
= Login schlägt bei abgelaufenem Token fehl
! *fehlschlagen* ist trennbar → *schlägt … fehl*. Sachlich, ohne Vermutung.

? Formuliere Schritt 1: sich mit einem gültigen Konto anmelden
= Mit gültigem Konto anmelden | Mit einem gültigen Konto anmelden
! Infinitiv-Stil ist in Reproduktionsschritten üblich.

? Formuliere das erwartete Verhalten: Antwort 401 mit einem Hinweis.
= Antwort 401 mit Hinweis „Token abgelaufen" | Antwort 401 mit dem Hinweis, dass das Token abgelaufen ist
! Konkret und prüfbar.

? Formuliere ein Akzeptanzkriterium: abgelaufene Tokens sollen 401 liefern.
= Abgelaufene Tokens liefern 401
! Präsens, Aussagesatz, prüfbar.

? Welches Akzeptanzkriterium ist NICHT prüfbar?
* Die Fehlerbehandlung ist besser.
x Abgelaufene Tokens liefern 401.
x Ein Test deckt den Ablauf-Fall ab.
x Die Fehlermeldung nennt den Grund.
! „besser" lässt sich nicht abhaken. Akzeptanzkriterien müssen binär sein.
```

**B15–B18 · README-Register.**

```uebung
? Welche Formulierung passt in eine README-Anleitung?
* Zuerst klont man das Repository.
x Das Repository wird geklont werden müssen.
x Ich klone dann immer das Repository.
x Man könnte eventuell das Repository klonen.
! *man* + klare Reihenfolge. Kein Konjunktiv, keine Ich-Form.

? Welche Überschriften sind in einer deutschen README üblich? (mehrere richtig)
* Voraussetzungen
* Installation
* Konfiguration
* Nutzung
x Danksagung
! Die vier decken *was brauche ich, wie starte ich, wie stelle ich ein, wie benutze ich*.

? Deutsch für „Prerequisites"
= Voraussetzungen | die Voraussetzungen
! Das nützlichste README-Wort überhaupt.

? Welcher Stil ist in Installationsschritten üblich?
* Infinitiv oder man-Form
x Imperativ mit „Du"
x Passiv Perfekt
! *Repository klonen* / *Man klont das Repository* — nicht *Klone das Repository*.
```

**B19–B23 · ADR schreiben.**

```uebung
? Welche drei Teile hat ein ADR mindestens? (mehrere richtig)
* Kontext
* Entscheidung
* Konsequenzen
x Zeitplan
x Budget
! Warum stand die Frage, was wurde entschieden, was folgt daraus.

? Formuliere im FVG: „Wir haben uns entschieden, auf Events umzustellen."
= Wir haben die Entscheidung getroffen, auf Events umzustellen
! *eine Entscheidung treffen* — nicht *machen*.

? Ergänze im Nominalstil: „___ der Kopplung wurde die Kommunikation auf Events umgestellt."
= Zur Reduzierung
! *zur Reduzierung* + Genitiv — typischer ADR-Einstieg.

? Ergänze die Folge: „…, ___ beide Dienste unabhängig voneinander ausgeliefert werden können."
= sodass
! Konsequenz.

? Welcher Ton passt in ein ADR?
* sachlich, begründend, mit genannten Alternativen
x werbend
x entschuldigend
x umgangssprachlich
! Ein ADR dokumentiert eine Abwägung, keine Meinung.
```

**B24–B26 · Register-Fehler finden.**

```uebung
? Was ist falsch? Commit-Subject: „feat(cache): Die Durchführung der Einführung eines Redis-Caches"
* Nominalstil gehört nicht in die Subject-Zeile
x der Typ ist falsch
x es ist zu kurz
! Subject = Infinitiv: *Redis-Cache einführen*. Nominalstil ist für Body und ADR.

? Was ist falsch? README: „Ich installiere dann immer die Abhängigkeiten."
* Ich-Form gehört nicht in eine Anleitung
x „installieren" ist falsch
x es fehlt ein Komma
! Anleitung → *man* oder Infinitiv.

? Was ist falsch? Ticket-Titel: „Irgendwas mit dem Login kaputt?"
* vage und als Frage formuliert
x zu lang
x zu formell
! Titel = Zustand, sachlich: *Login schlägt bei abgelaufenem Token fehl*.
```

---

### C. Produzieren — write it yourself

**C1.** Schreibe **3 echte Commit-Messages** auf Deutsch (Subject + Body) für Änderungen, die du
wirklich gemacht hast.
**C2.** Schreibe ein **vollständiges Ticket** für einen echten Bug: Titel, Beschreibung, Schritte,
Erwartet/Tatsächlich, Akzeptanzkriterien.
**C3.** Schreibe die **Voraussetzungen + Installation** deiner echten README auf Deutsch.
**C4.** Schreibe einen **ADR** über eine echte Entscheidung: Kontext, Alternativen, Entscheidung,
Konsequenzen.
**C5.** Übersetze: *The check is now performed in the security filter and expired tokens are rejected.*
**C6.** Schreibe dieselbe Änderung einmal als **Commit-Body** (Passiv) und einmal als
**Chat-Nachricht** ans Team (informell). Notiere, was sich ändert.

---

### D. Transfer — your real work

**D1.** Schreibe deine **nächsten fünf echten Commits** auf Deutsch.
**D2.** Übersetze ein echtes Ticket aus deinem Backlog ins Deutsche und lass es gegenlesen.
**D3.** Lies laut mit:

```audio
Der Token wurde bisher nicht auf Ablauf geprüft, sodass abgelaufene Tokens akzeptiert wurden. Die Prüfung wird nun im Sicherheitsfilter durchgeführt.
```

---

## ✅ Musterlösungen für C und D

```spoiler
**C5.** *Die Prüfung wird nun im Sicherheitsfilter durchgeführt und abgelaufene Tokens werden
abgewiesen.*

**C1. Musterlösung (eine Commit-Message):**

> `fix(auth): Ablauf des JWT-Tokens korrekt behandeln`
>
> Der Token wurde bisher nicht auf Ablauf geprüft, sodass abgelaufene Tokens akzeptiert wurden.
> Die Prüfung wird nun im Sicherheitsfilter durchgeführt und abgelaufene Tokens werden mit 401
> abgewiesen.

Subject im **Infinitiv**, Body im **Passiv**, Kausalzusammenhang mit *sodass*.

**C4. Musterlösung (ADR, gekürzt):**

> **Kontext:** Bestell- und Zahlungsdienst kommunizieren direkt über HTTP. Bei jeder Änderung an der
> Zahlungsschnittstelle muss auch der Bestelldienst ausgeliefert werden.
>
> **Entscheidung:** Zur Reduzierung der Kopplung wurde die Entscheidung getroffen, die Kommunikation
> auf Events umzustellen.
>
> **Konsequenzen:** Beide Dienste können unabhängig voneinander ausgeliefert werden. Die
> Nachvollziehbarkeit einzelner Vorgänge sinkt jedoch, sodass ein zentrales Tracing eingeführt
> werden muss.

Enthält Nominalstil, FVG, Passiv und *sodass* — alle vier Strukturen aus
[Phase 3 · Grammar](#/phase-3/grammar).

**C6.** Derselbe Inhalt, zwei Register:
*Commit-Body:* „Die Prüfung wird nun im Sicherheitsfilter durchgeführt."
*Chat:* „Hab die Token-Prüfung in den Security-Filter gezogen — abgelaufene Tokens geben jetzt 401
statt 500."
Beides korrekt. Der Unterschied ist **Register**, nicht Richtigkeit — und genau diesen Wechsel
erwartet ein deutsches Team von dir.

**C2, C3** offen. Selbstkontrolle:

| Check | Frage |
|---|---|
| Commit-Subject | Infinitiv, ≤ 50 Zeichen, kein „ich"? |
| Commit-Body | Passiv/sachlich, erklärt **warum**? |
| Ticket | Kann jemand ohne Rückfrage reproduzieren? |
| Akzeptanzkriterien | Binär abhakbar, nicht „besser"? |
| README | *man* oder Infinitiv, keine Ich-Form? |
| ADR | Kontext, Entscheidung, Konsequenzen — alle drei da? |

**D1–D3.** Eigenes Material. Bei D1 zählt nur eins: dass die fünf Commits wirklich auf Deutsch in
der History landen.
```

---

## 🧾 Zusammenfassung · Summary

Four formats, four registers. **Commit:** imperative/infinitive subject under ~50 characters, body
in the passive explaining *why*. **Ticket:** reproducible — numbered steps, expected vs. actual, and
acceptance criteria that are **binary**, never "better". **README:** instructions with *man* or the
infinitive, under the standard headings *Voraussetzungen · Installation · Konfiguration · Nutzung*.
**ADR:** Kontext → Entscheidung → Konsequenzen, in Nominalstil with a Funktionsverbgefüge
(*eine Entscheidung treffen*) and *sodass* for the consequence. Theory:
[Phase 3 · Writing](#/phase-3/writing).

## 📇 Vokabel-Checkliste · Vocabulary checklist

| Deutsch | Artikel | Plural | English | VI (if hard) |
|---|---|---|---|---|
| Akzeptanzkriterium | das | -kriterien | acceptance criterion | tiêu chí nghiệm thu |
| Voraussetzung | die | Voraussetzungen | prerequisite | điều kiện tiên quyết |
| Nachvollziehbarkeit | die | — | traceability | khả năng truy vết |
| Sicherheitsfilter | der | -filter | security filter | bộ lọc bảo mật |
| Reproduktion | die | Reproduktionen | reproduction (of a bug) | tái hiện lỗi |
| abweisen | — | — | to reject | từ chối |
| aufteilen | — | — | to split up | tách nhỏ |
| nachvollziehen | — | — | to trace, follow | lần theo |

→ Drill these in [Flashcards](#/@flashcards).

## 📝 Hausaufgabe · Homework

- [ ] Block **A und B** komplett, Ziel ≥ 80 %.
- [ ] **Fünf echte Commits** auf Deutsch schreiben (**D1**).
- [ ] Ein vollständiges **Ticket** auf Deutsch verfassen (**C2**).
- [ ] Einen **ADR** über eine echte Entscheidung schreiben (**C4**).
- [ ] Deine README-Installation ins Deutsche übertragen (**C3**).

## 📚 Empfohlene Ressourcen · Recommended resources

- **Konvention:** Conventional Commits (conventionalcommits.org) — Typen und Scopes.
- **Struktur:** [Phase 3 · Grammar](#/phase-3/grammar) für Nominalstil, Passiv und FVG.
- **Zurück zur Theorie:** [Phase 3 · Writing](#/phase-3/writing).
- **Weiter:** [Phase 3 · Speaking](#/phase-3/speaking) und der [Übungsteil](#/phase-3/speaking-uebungen).
