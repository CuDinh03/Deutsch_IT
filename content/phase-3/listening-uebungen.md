# Phase 3 · Listening — Übungsteil · Workbook

> **Level:** B2+ · **Focus:** echtes Dev-Tempo, Diskursmarker, Fachdeutsch ohne Untertitel · **Time:** ~2 h
> _After this workbook you can follow two German developers talking shop — fillers and all._

This is the practice half of [Phase 3 · Listening](#/phase-3/listening). The jump here is **speed
plus fillers**: real developers say *quasi, im Prinzip, genau, halt* constantly, and those words
carry rhythm, not content. Learning to skip them is what lets your brain keep up.

The Hörtexte below are in the register of a German dev podcast or an internal call.

---

## 🏋️ Übungsteil · Workbook

### A. Erkennen — gist pass

Spiele jeden Text **einmal**, antworte aus dem Gedächtnis.

**A1 · Hörtext 1 — Architektur-Update**

```hoertext
Also, kurz zum Stand: Wir haben die Zwischenspeicherung jetzt quasi überall drin, im Prinzip vor jeder Produktabfrage. Die Latenz ist dadurch von etwa dreihundert auf achtzig Millisekunden runter, also genau das, was wir wollten. Was noch offen ist: Der Cache wird bisher nicht invalidiert, wenn ein Produkt im Backoffice geändert wird. Das heißt, im schlimmsten Fall sieht ein Kunde fünf Minuten lang den alten Preis. Ich würde vorschlagen, dass wir da ein Event einbauen, bevor wir das Ganze auf alle Regionen ausrollen.
```

```uebung
? Worum geht es?
* um den Stand der Zwischenspeicherung
x um einen Ausfall
x um eine Personalfrage
x um ein Sicherheitsproblem
! Erster Satz nennt das Thema.

? Ist der Sprecher insgesamt zufrieden?
* ja, mit einer offenen Einschränkung
x nein, er lehnt die Lösung ab
x er sagt nichts dazu
! „genau das, was wir wollten" — aber *Was noch offen ist* kündigt die Einschränkung an.
```

**A2 · Hörtext 2 — Diskussion im Team**

```hoertext
Ich sehe das ehrlich gesagt anders. Klar, mit Kubernetes könnten wir feiner skalieren, das bestreitet ja niemand. Nur haben wir aktuell zwei Leute im Bereitschaftsdienst und keinen, der sich mit dem Betrieb wirklich auskennt. Bevor wir also die Plattform wechseln, würde ich lieber das Monitoring in Ordnung bringen. Sonst tauschen wir ein Problem, das wir verstehen, gegen eines, das wir nicht verstehen.
```

```uebung
? Ist die Sprecherin für oder gegen den Wechsel zu Kubernetes?
x klar dafür
* skeptisch wegen des Zeitpunkts, nicht wegen der Technik
x grundsätzlich dagegen
! „Klar, … das bestreitet ja niemand" räumt die Technik ein; der Einwand betrifft Personal und Monitoring.

? Was schlägt sie stattdessen vor?
* zuerst das Monitoring in Ordnung bringen
x mehr Leute einstellen
x bei der aktuellen Lösung bleiben und nichts ändern
x sofort wechseln
! „würde ich lieber das Monitoring in Ordnung bringen".
```

---

### B. Anwenden — detail & Diskursmarker

Jetzt beliebig oft hören. Transkript erst nach dem Antworten.

**B1–B6 · Hörtext 1: Details.**

```uebung
? Von welchem Wert auf welchen ist die Latenz gesunken?
= von 300 auf 80 | 300 auf 80 | von dreihundert auf achtzig
! *von X auf Y* — Richtung gehört zur Antwort.

? Was ist noch offen?
* Der Cache wird bei Änderungen im Backoffice nicht invalidiert.
x Die Latenz ist zu hoch.
x Der Cache ist noch nicht eingebaut.
x Die Region fehlt.
! „Was noch offen ist: …"

? Wie lange sieht ein Kunde im schlimmsten Fall den alten Preis?
= 5 Minuten | fünf Minuten | 5
! Entspricht der Gültigkeitsdauer aus dem Reading-Modul.

? Was schlägt der Sprecher vor?
* ein Event einbauen, bevor auf alle Regionen ausgerollt wird
x den Cache abschalten
x die Gültigkeitsdauer zu erhöhen
x nichts zu tun
! *Ich würde vorschlagen, dass …*

? Welche Struktur benutzt er für den Vorschlag?
* Konjunktiv II (würde vorschlagen)
x Imperativ
x Passiv Perfekt
! Vorschlag, nicht Anweisung.

? „bevor wir das Ganze auf alle Regionen ausrollen" — was signalisiert *bevor*?
* zeitliche Bedingung, Verb am Ende
x einen Grund
x einen Gegensatz
! Subordinierend wie *weil*.
```

**B7–B12 · Diskursmarker erkennen.**

```uebung
? Welche Wörter in Hörtext 1 tragen KEINE Sachinformation? (mehrere richtig)
* quasi
* im Prinzip
* also
* genau
x Latenz
x Zwischenspeicherung
! Diskursmarker geben Rhythmus, nicht Inhalt. Wer sie mitverarbeitet, verliert Tempo.

? „quasi" bedeutet ungefähr …
* sozusagen, gewissermaßen
x genau
x niemals
x sofort
! Abschwächer.

? „im Prinzip / im Grunde" bedeutet …
* im Wesentlichen, grundsätzlich
x ausnahmsweise
x sofort
! Englisch „basically".

? „genau" als Einwurf bedeutet …
* Bestätigung — „richtig, so ist es"
x „ungefähr"
x eine Frage
! Sehr häufig als reines Zustimmungssignal.

? „beziehungsweise (bzw.)" bedeutet …
* oder vielmehr / respektive
x deshalb
x obwohl
! Korrigiert oder präzisiert das Vorherige.

? „das heißt (d. h.)" leitet ein …
* eine Erklärung oder Folge
x einen Gegensatz
x eine Bedingung
! In Hörtext 1: „Das heißt, im schlimmsten Fall …"
```

**B13–B17 · Hörtext 2: Haltung und Argument.**

```uebung
? Welches Zugeständnis macht die Sprecherin?
* dass man mit Kubernetes feiner skalieren könnte
x dass das Monitoring gut ist
x dass genug Personal da ist
! „Klar, mit Kubernetes könnten wir feiner skalieren."

? Welche zwei Gründe nennt sie gegen den Zeitpunkt? (mehrere richtig)
* nur zwei Leute im Bereitschaftsdienst
* niemand kennt sich mit dem Betrieb aus
x die Kosten sind zu hoch
x der Anbieter ist unzuverlässig
! Beide betreffen Menschen, nicht Technik.

? Was meint sie mit „ein Problem, das wir verstehen, gegen eines, das wir nicht verstehen"?
* ein bekanntes Risiko gegen ein unbekanntes tauschen
x zwei gleich große Probleme
x eine technische Verbesserung
! Das ist ihr Kernargument, in einem Bild verpackt.

? „das bestreitet ja niemand" — welche Funktion hat das *ja*?
* Modalpartikel: markiert gemeinsames Wissen
x Zustimmung zu einer Frage
x Verneinung
! Siehe [Alltag · Kaffeeküche](#/alltag/kaffeekueche) — dieselben Partikeln, nur im Fachgespräch.

? „Bevor wir also die Plattform wechseln, würde ich …" — wo steht das Verb im Hauptsatz?
* direkt nach dem Nebensatz
x am Ende
x vor dem Nebensatz
! Der Nebensatz besetzt Position 1, das finite Verb folgt sofort.
```

**B18–B20 · Zahlen und Fachwörter.**

```uebung
? Deutsch für „to invalidate" (einen Cache)
= invalidieren | ungültig machen
! Beides üblich; *invalidieren* im Fachjargon.

? Deutsch für „on-call rotation" (kurz)
= Bereitschaftsdienst | der Bereitschaftsdienst
! Siehe auch [Alltag · Bahn](#/alltag/bahn-verspaetung) für den Alltagsgebrauch.

? Deutsch für „to roll out to all regions"
= auf alle Regionen ausrollen
! *ausrollen* trennbar.
```

---

### C. Produzieren — Diktat & Wiedergabe

**C1 · Diktat.** Schreibe jedes Wort.

```hoertext
Die Latenz ist von etwa dreihundert auf achtzig Millisekunden gesunken. Der Cache wird bisher nicht invalidiert, wenn ein Produkt geändert wird.
```

**C2.** Gib Hörtext 1 in **3 Sätzen** wieder, ohne Diskursmarker.
**C3.** Gib Hörtext 2 in indirekter Rede wieder: *Sie hat gesagt, dass …*
**C4.** Antworte auf Hörtext 2 mündlich: stimme teilweise zu und mache einen Gegenvorschlag.
**C5.** Sammle **8 neue Wörter** aus beiden Texten, mit Artikel und Plural.

---

### D. Transfer — echtes Material

**D1.** Höre eine Folge **Engineering Kiosk** oder **programmier.bar**. Ziel ist nicht volles
Verstehen — notiere **Thema + eine Meinung**.
**D2.** Zähle in fünf Minuten Podcast, wie oft *quasi, genau, im Prinzip, halt* vorkommen.
**D3.** Wochentracker:

| Tag | Quelle | Minuten | Thema erfasst? | Neue Wörter |
|---|---|---|:--:|---|
| Mo | | | ☐ | |
| Di | | | ☐ | |
| Mi | | | ☐ | |
| Do | | | ☐ | |
| Fr | | | ☐ | |

---

## ✅ Musterlösungen für C und D

```spoiler
**C1. Transkript:** *Die Latenz ist von etwa dreihundert auf achtzig Millisekunden gesunken. Der
Cache wird bisher nicht invalidiert, wenn ein Produkt geändert wird.*
Achte auf *ist … gesunken* (Perfekt mit **sein**, Zustandsänderung) und das Passiv *wird …
invalidiert*.

**C2. Musterlösung:** *Die Zwischenspeicherung ist inzwischen vor jeder Produktabfrage aktiv und hat
die Latenz von 300 auf 80 Millisekunden gesenkt. Offen ist die Invalidierung: Bei Änderungen im
Backoffice sehen Kunden bis zu fünf Minuten den alten Preis. Vor dem Ausrollen auf alle Regionen
soll dafür ein Event eingebaut werden.*

Ohne *quasi, im Prinzip, also, genau* ist derselbe Inhalt deutlich kürzer — das ist der Beleg dafür,
dass die Marker keine Information tragen.

**C3. Musterlösung:** *Sie hat gesagt, dass sie das anders sehe. Sie hat eingeräumt, dass man mit
Kubernetes feiner skalieren könne, aber sie hat darauf hingewiesen, dass nur zwei Leute im
Bereitschaftsdienst seien und niemand den Betrieb wirklich kenne. Sie hat vorgeschlagen, zuerst das
Monitoring in Ordnung zu bringen.*
(Konjunktiv I in der indirekten Rede ist das Schriftregister; im Gespräch reicht der Indikativ.)

**C4. Musterlösung:** *Da hast du teilweise recht — das Monitoring ist wirklich unser Engpass. Ich
würde trotzdem vorschlagen, dass wir parallel einen kleinen Dienst auf der neuen Plattform
betreiben, damit wir Erfahrung sammeln, ohne alles zu migrieren.*

**C5.** Kandidaten: die Zwischenspeicherung, die Invalidierung, der Bereitschaftsdienst, die
Gültigkeitsdauer, das Backoffice, die Region (-en), invalidieren, ausrollen.

**D1–D3.** Eigenes Material. Bei D1 ist die realistische Erwartung: Beim ersten echten Dev-Podcast
verstehst du **deutlich weniger** als in den graded Texten hier. Das ist normal und genau die Lücke,
die die nächsten Monate schließen.
```

---

## 🧾 Zusammenfassung · Summary

Real developer German is fast and full of **Diskursmarker** — *quasi, im Prinzip, also, genau, halt,
bzw., d. h.* — that carry rhythm rather than content. Learning to hear past them is what lets you
keep up; strip them from a transcript and the same message becomes half as long. Two structures do
the heavy lifting in tech talk: **von X auf Y** for any change, and **Konjunktiv II** for proposals
(*Ich würde vorschlagen, dass …*). And as in Phase 2, a hedged reservation (*Klar, … nur haben wir
…*) is **not** a rejection. Method and podcast list: [Phase 3 · Listening](#/phase-3/listening).

## 📇 Vokabel-Checkliste · Vocabulary checklist

| Deutsch | Artikel | Plural | English | VI (if hard) |
|---|---|---|---|---|
| Diskursmarker | der | Diskursmarker | discourse marker | từ đệm diễn ngôn |
| Invalidierung | die | Invalidierungen | invalidation | vô hiệu hoá |
| Backoffice | das | — | back office | hệ thống quản trị nội bộ |
| Millisekunde | die | Millisekunden | millisecond | mili giây |
| Region | die | Regionen | region | vùng |
| invalidieren | — | — | to invalidate | làm mất hiệu lực |
| bestreiten | — | — | to dispute, deny | phủ nhận |
| sich auskennen (mit) | — | — | to know one's way around | rành về |

→ Drill these in [Flashcards](#/@flashcards).

## 📝 Hausaufgabe · Homework

- [ ] Beide Hörtexte durch **Block A und B**, erster Durchgang einmaliges Hören.
- [ ] **Diktat C1** Wort für Wort prüfen.
- [ ] Eine Folge **Engineering Kiosk** hören und Thema + eine Meinung notieren (**D1**).
- [ ] Diskursmarker zählen (**D2**) — es sind mehr, als du denkst.
- [ ] Den **Wochentracker** ausfüllen.

## 📚 Empfohlene Ressourcen · Recommended resources

- **Dev-Podcasts:** *Engineering Kiosk*, *programmier.bar*, *Working Draft*.
- **Brücke:** DW Top-Thema, wenn echtes Tempo noch zu schnell ist.
- **Partikeln:** [Alltag · Kaffeeküche](#/alltag/kaffeekueche).
- **Zurück zur Theorie:** [Phase 3 · Listening](#/phase-3/listening).
- **Weiter:** [Phase 3 · Assessment](#/phase-3/assessment).
