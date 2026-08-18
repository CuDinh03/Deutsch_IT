# Phase 4 · Reading — Übungsteil · Workbook

> **Level:** B2 → C1 · **Focus:** Wiki-Seite, Richtlinie, Rundmail — Pflichten, Fristen und Ausnahmen finden · **Time:** ~2,5 h
> _After this workbook you can read a two-page German Richtlinie in five minutes and say exactly what it obliges you to do, by when, and with which exception._

Das ist der Übungsteil zu [Phase 4 · Reading](#/phase-4/reading). Firmentexte sind **dicht, aber
vorhersagbar**: Jede Gattung hat eine feste Form. Wer die Form kennt, liest nicht von oben nach
unten, sondern **zielgerichtet** — Überschriften überfliegen, Signalwörter scannen, Nominalstil
auflösen.

Drei echte Textsorten warten unten: eine Wiki-Seite, eine Richtlinie und eine Rundmail.

**How it works:** Block A und B werden benotet. Block C und D sind offene Aufgaben mit
Musterlösungen am Ende.

---

## 🏋️ Übungsteil · Workbook

### A. Erkennen — Gattung, Signalwörter, Struktur

**A1–A4 · Welche Textsorte?**

```uebung
? „Stand: 12.06.2026 — diese Seite wird nicht mehr gepflegt." Welche Textsorte?
* Wiki-Seite
x Richtlinie
x Rundmail
x Stellenanzeige
! Nur Wiki-Seiten führen einen *Stand*. Das ist zugleich das Erste, was du prüfst: Eine Seite ohne aktuelles Datum ist ein Gerücht.

? „Die Nutzung privater Geräte ist untersagt, es sei denn, sie wurde von der IT genehmigt."
x Wiki-Seite
* Richtlinie
x Anleitung
x Protokoll
! *ist untersagt* + *es sei denn* = Pflicht plus Ausnahme. Das ist die DNA jeder Richtlinie.

? „Liebe Kolleginnen und Kollegen, ab nächster Woche wird das interne Wiki umgestellt."
x Richtlinie
* Rundmail / Ankündigung
x Anleitung
x Betriebsvereinbarung
! Ankündigungen stellen den Punkt nach vorn: Anrede, dann sofort die Neuigkeit mit Datum.

? „1. Klone das Repository. 2. Kopiere die Beispiel-Konfiguration."
x Richtlinie
x Rundmail
* Anleitung / Runbook
x Protokoll
! Nummerierte Imperative = Anleitung. Du liest sie nicht, du **arbeitest sie ab**.
```

**A5–A9 · Signalwörter richtig gewichten.**

```uebung
? Welche Formulierungen sind **harte Pflicht**? (mehrere richtig)
* ist verpflichtet
* muss
* ist untersagt
x sollte
x wird empfohlen
! *muss / ist verpflichtet / ist untersagt / ist nicht gestattet* sind bindend. *sollte / wird empfohlen / kann* sind es nicht — und dieser Unterschied entscheidet, ob du heute etwas tun musst.

? „es sei denn" leitet ein …
* eine Ausnahme
x eine Begründung
x eine Frist
x eine Empfehlung
! Das Schlupfloch. In einer Richtlinie ist es oft der einzige Satzteil, der dich betrifft.

? „bis spätestens 15. September" heißt …
* Frist — danach ist es zu spät
x Empfehlung für einen Termin
x Beginn eines Zeitraums
x Dauer der Maßnahme
! *bis spätestens* markiert immer das Ende. *ab* markiert den Anfang: *ab dem 1. Oktober*.

? „Ausnahmen können auf Antrag gewährt werden." Was bedeutet das praktisch?
* Es gibt eine Ausnahme, aber du musst sie beantragen.
x Es gibt keine Ausnahmen.
x Die Ausnahme gilt automatisch.
x Die Regel ist unverbindlich.
! *auf Antrag* heißt: Der Vorgang startet nicht von selbst. Übersehen führt regelmäßig zu abgelaufenen Fristen.

? Welche drei Dinge suchst du in einer Richtlinie zuerst?
* Pflicht, Geltungsbereich, Ausnahme
x Autor, Datum, Länge
x Einleitung, Hauptteil, Schluss
x Kosten, Nutzen, Risiko
! Was muss ich tun · gilt das für mich · komme ich raus. Alles andere ist Begründungstext.
```

---

### B. Anwenden — die drei Texte

**Text 1 · Wiki-Seite (Auszug)**

> **Zahlungsdienst — Lokale Einrichtung**
> *Stand: 04.08.2026 · Ansprechpartner: Team Payments*
>
> **Überblick.** Dieser Dienst verarbeitet eingehende Zahlungen und stellt sie dem
> Bestellsystem über eine interne Schnittstelle zur Verfügung. Für die lokale Entwicklung wird
> eine abgespeckte Konfiguration verwendet; externe Zahlungsanbieter werden dabei durch einen
> Simulator ersetzt.
>
> **Voraussetzungen.** Zugriff auf das Repository, eine gültige VPN-Verbindung sowie eine
> lokal laufende Datenbank ab Version 15. Ohne VPN schlägt bereits das Abrufen der
> Konfiguration fehl.
>
> **Vorgehen.** 1. Klone das Repository. 2. Kopiere die Beispiel-Konfiguration nach
> `config/local.yml` und passe die Datenbank-URL an. 3. Starte den Dienst. Der erste Start
> dauert wegen der Schemaerstellung mehrere Minuten.
>
> **Bekannte Probleme.** Nach einem Wechsel des Branches kann der Simulator in einem alten
> Zustand verharren. In diesem Fall hilft ein Neustart des Simulators; ein Neuaufsetzen der
> Datenbank ist nicht erforderlich.

```uebung
? Wie aktuell ist diese Seite?
= 04.08.2026 | 4.8.2026 | 04.08. | August 2026
! Immer zuerst der *Stand*. Bei einer Seite von vor zwei Jahren liest du die Schritte gar nicht erst.

? Was passiert ohne VPN?
* Schon das Abrufen der Konfiguration schlägt fehl.
x Der Dienst startet langsamer.
x Der Simulator fehlt.
x Nichts, VPN ist optional.
! Steht ausdrücklich im Abschnitt *Voraussetzungen* — genau deshalb liest man den zuerst.

? Warum dauert der erste Start lange?
= wegen der Schemaerstellung | Schemaerstellung | wegen der Erstellung des Schemas
! Nominalstil: *die Schemaerstellung* = „weil das Schema erstellt wird".

? Der Simulator hängt nach einem Branch-Wechsel. Was tust du?
* den Simulator neu starten
x die Datenbank neu aufsetzen
x das Repository neu klonen
x den VPN-Zugang beantragen
! Der Abschnitt sagt es doppelt: Neustart hilft, Neuaufsetzen *ist nicht erforderlich*. Verneinte Hinweise sind in Wikis oft die wertvollsten.

? Welchen Abschnitt liest du zuerst, wenn du den Dienst nur schnell starten willst?
x Überblick
* Voraussetzungen
x Bekannte Probleme
x Ansprechpartner
! Erst prüfen, ob du überhaupt starten kannst. Wer mit *Vorgehen* anfängt, scheitert an Schritt 1 und sucht den Fehler an der falschen Stelle.

? „stellt sie dem Bestellsystem über eine interne Schnittstelle zur Verfügung" — welches Funktionsverbgefüge steckt darin?
= zur Verfügung stellen
! Aus [Phase 3 · Grammar](#/phase-3/grammar): festes Paar aus leichtem Verb und bedeutungstragendem Nomen. Als Block lesen, nicht Wort für Wort.
```

**Text 2 · Richtlinie (Auszug)**

> **Richtlinie zur Nutzung privater Endgeräte**
> *Gültig ab: 01.10.2026*
>
> **§1 Geltungsbereich.** Diese Richtlinie gilt für alle Mitarbeitenden der Gesellschaft
> einschließlich der befristet Beschäftigten. Für externe Dienstleister gelten die
> Regelungen des jeweiligen Rahmenvertrags.
>
> **§2 Grundsatz.** Die Verarbeitung personenbezogener Daten auf privaten Endgeräten ist
> untersagt. Der Zugriff auf interne Systeme ist ausschließlich über die vom Unternehmen
> bereitgestellten Geräte gestattet.
>
> **§3 Ausnahmen.** Abweichungen von §2 sind nur nach vorheriger schriftlicher Genehmigung
> durch die IT-Sicherheit zulässig. Anträge sind bis spätestens 15.09.2026 einzureichen.
> Bei Nichteinhaltung der Frist erlischt die bestehende Übergangsregelung.

```uebung
? Gilt die Richtlinie für einen externen Dienstleister?
x ja, uneingeschränkt
* nein — für ihn gilt sein Rahmenvertrag
x nur mit Genehmigung
x das steht nicht im Text
! §1 *Geltungsbereich* beantwortet immer die Frage „betrifft mich das?". Hier wird eine ganze Gruppe ausdrücklich anders geregelt.

? Was ist nach §2 verboten?
* personenbezogene Daten auf privaten Geräten zu verarbeiten
x jede Nutzung privater Geräte
x der Zugriff auf das Internet
x das Arbeiten von zu Hause
! Genau lesen: verboten ist die **Verarbeitung personenbezogener Daten**, nicht das Gerät an sich. Richtlinien sind eng formuliert — und diese Enge ist dein Freiraum.

? Wie bekommt man eine Ausnahme?
* durch vorherige schriftliche Genehmigung der IT-Sicherheit
x durch eine mündliche Absprache mit dem Team
x automatisch nach Ablauf der Frist
x gar nicht
! Drei Bedingungen in einem Satz: *vorher*, *schriftlich*, *durch die IT-Sicherheit*. Fehlt eine, gilt die Ausnahme nicht.

? Was passiert bei Nichteinhaltung der Frist?
* Die bestehende Übergangsregelung erlischt.
x Es wird eine Geldstrafe fällig.
x Die Frist verlängert sich automatisch.
x Die Richtlinie gilt nicht mehr.
! *erlöschen* = ohne weiteres Zutun enden. Ein typisches Verwaltungswort, das man einmal lernt und dann überall wiedersieht.

? „Anträge sind bis spätestens 15.09.2026 einzureichen." Was drückt „sind … einzureichen" aus?
* eine Pflicht — sie müssen eingereicht werden
x eine Möglichkeit
x eine Empfehlung
x eine Vergangenheit
! *sein* + *zu* + Infinitiv = Passiv mit Notwendigkeit, das Gegenstück zu *die einzureichenden Anträge*. Amtsdeutsch pur — und extrem häufig.

? Bis wann musst du handeln, wenn du eine Ausnahme brauchst?
= 15.09.2026 | 15.09. | 15. September | 15.9.2026 | 15.9.
! Zwei Daten im Text, zwei Funktionen: *gültig ab 01.10.* ist der Start der Regel, *bis spätestens 15.09.* ist **deine** Frist. Verwechseln kostet die Ausnahme.
```

**Text 3 · Rundmail**

> **Betreff: Umstellung des internen Wikis — Aktion erforderlich bis 29.08.**
>
> Liebe Kolleginnen und Kollegen,
>
> ab dem 1. September wird unser internes Wiki auf eine neue Version umgestellt. Die
> Umstellung erfolgt über das Wochenende; mit einer Nichtverfügbarkeit von etwa vier Stunden
> ist zu rechnen.
>
> Zur Vorbereitung bitten wir euch, eure Seiten bis zum 29. August zu prüfen und veraltete
> Inhalte zu archivieren. Seiten ohne Aktualisierung seit mehr als zwei Jahren werden im Zuge
> der Migration automatisch archiviert; eine Wiederherstellung ist auf Anfrage möglich.
>
> Bei Fragen ist das Plattform-Team euer Ansprechpartner.

```uebung
? Was musst du selbst tun?
* die eigenen Seiten bis zum 29.08. prüfen und Veraltetes archivieren
x nichts
x das Wiki am Wochenende offenhalten
x eine Genehmigung beantragen
! Der Betreff sagt es schon: *Aktion erforderlich bis 29.08.* Deutsche Rundmails stellen die Handlung nach vorn — der Betreff ist kein Titel, sondern eine Anweisung.

? Was passiert mit einer Seite, die seit drei Jahren niemand angefasst hat?
* Sie wird automatisch archiviert.
x Sie wird gelöscht.
x Sie bleibt unverändert.
x Sie wird an den Autor geschickt.
! *archiviert*, nicht *gelöscht* — und der nächste Halbsatz sagt sogar, dass man sie zurückholen kann. Genau hinsehen lohnt sich: Der Unterschied entscheidet, ob du am Wochenende arbeitest.

? Kann man eine archivierte Seite zurückholen?
* ja, auf Anfrage
x nein
x nur innerhalb von 24 Stunden
x nur die Autorin selbst
! „eine Wiederherstellung ist auf Anfrage möglich". *auf Anfrage* = du musst danach fragen, es passiert nicht von selbst.

? „mit einer Nichtverfügbarkeit von etwa vier Stunden ist zu rechnen" — was heißt das?
* Das System wird voraussichtlich vier Stunden nicht erreichbar sein.
x Das System fällt garantiert vier Stunden aus.
x Die Umstellung dauert vier Stunden pro Seite.
x Vier Stunden Arbeit werden dir angerechnet.
! *mit etwas ist zu rechnen* = es ist zu erwarten. Wieder *sein* + *zu* + Infinitiv, diesmal in der Bedeutung „man muss damit rechnen".
```

**B17–B21 · Nominalstil auflösen.**

```uebung
? „nach Prüfung des Antrags" → mit Nebensatz: „nachdem man den Antrag ___ hat"
= geprüft
! Nomen zurück ins Verb. Das ist der schnellste Weg durch dichte Firmentexte.

? „zur Verbesserung der Informationssicherheit" → „um die Informationssicherheit zu ___"
= verbessern
! *zur* + Nomen = Zweck → *um … zu* + Infinitiv.

? „bei Nichteinhaltung der Frist" → „wenn man die Frist nicht ___"
= einhält
! Die Vorsilbe *Nicht-* verneint das ganze Nomen. Ebenso: *Nichtverfügbarkeit*, *Nichterscheinen*.

? „im Zuge der Migration" bedeutet …
* während der Migration / im Rahmen der Migration
x nach Abschluss der Migration
x anstelle der Migration
x vor Beginn der Migration
! *im Zuge* ist eine feste Präposition der Verwaltungssprache, immer mit Genitiv.

? „nach vorheriger schriftlicher Genehmigung" → „nachdem es vorher schriftlich ___ wurde"
= genehmigt
! Drei Bedingungen in vier Wörtern gepackt. Genau diese Verdichtung macht Richtlinien schwer — und genau sie löst du auf, indem du das Nomen zum Verb machst.
```

---

### C. Produzieren — selbst schreiben

**C1.** Fasse Text 2 (Richtlinie) in **drei Sätzen** zusammen: Pflicht, Geltungsbereich, Ausnahme.
**C2.** Schreibe die drei Nominalstil-Ausdrücke aus Text 3 als **Nebensätze** aus.
**C3.** Formuliere Text 3 als **Chat-Nachricht an dein Team** — maximal drei Zeilen, per du.
**C4.** Schreibe für Text 1 eine **Inhaltsübersicht** aus fünf Überschriften, wie du die Seite gliedern würdest.
**C5.** Übersetze: *Exceptions are only permitted after prior written approval; applications must be submitted by 15 September at the latest.*
**C6.** Lies einen echten heise- oder Golem-Artikel und schreibe fünf deutsche Sätze zum Inhalt.

---

### D. Transfer — deine echte Arbeit

**D1.** Nimm eine **echte Wiki-Seite** aus deiner Firma und prüfe in 60 Sekunden: Stand, Ansprechpartner, Voraussetzungen. Reicht die Seite, um zu arbeiten?
**D2.** Nimm eine **echte Richtlinie** (auch eine deutsche öffentliche, z. B. eine Datenschutzerklärung) und extrahiere Pflicht, Geltungsbereich, Ausnahme, Frist.
**D3.** Schreibe eine Wiki-Seite deines Teams auf Deutsch um — mit *Überblick · Voraussetzungen · Vorgehen · Bekannte Probleme*.
**D4.** Lies eine Woche lang täglich einen deutschen Fachartikel und trage je fünf Begriffe in [Flashcards](#/@flashcards) ein.

```audio
Zur Verbesserung der Informationssicherheit gilt ab dem ersten Oktober eine neue Richtlinie. Alle Mitarbeitenden sind verpflichtet, die Zwei-Faktor-Authentifizierung zu aktivieren. Ausnahmen müssen bis spätestens fünfzehnten September beantragt werden.
```

---

## ✅ Musterlösungen für C und D

```spoiler
**C5.** *Ausnahmen sind nur nach vorheriger schriftlicher Genehmigung zulässig; Anträge sind bis
spätestens 15. September einzureichen.*
Beachte die zwei Verwaltungsformen: *zulässig sein* statt „are permitted" und *sind einzureichen*
statt „must be submitted".

**C1. Musterlösung (Richtlinie in drei Sätzen):**
*Pflicht: Personenbezogene Daten dürfen nicht auf privaten Endgeräten verarbeitet werden; der
Zugriff auf interne Systeme ist nur über Firmengeräte gestattet. Geltungsbereich: alle
Mitarbeitenden einschließlich befristet Beschäftigter — externe Dienstleister fallen unter ihren
Rahmenvertrag. Ausnahme: nur mit vorheriger schriftlicher Genehmigung der IT-Sicherheit, Antrag bis
spätestens 15.09.2026.*

**C2. Musterlösung (Nominalstil aufgelöst):**

| Text 3 | als Nebensatz |
|---|---|
| zur Vorbereitung | damit wir uns vorbereiten können |
| im Zuge der Migration | während migriert wird |
| eine Wiederherstellung ist auf Anfrage möglich | die Seite kann wiederhergestellt werden, wenn man danach fragt |

**C3. Musterlösung (Chat-Version):**
*„Kurz zur Info: Das Wiki wird am 1.9. umgestellt, am Wochenende ist es ca. 4 h weg. Bis 29.8. bitte
eure Seiten durchgehen und Altes archivieren — Seiten, die seit 2+ Jahren keiner angefasst hat,
werden automatisch archiviert (kann man aber zurückholen). Fragen: Plattform-Team."*
Beachte, was beim Registerwechsel passiert: Nominalstil verschwindet, Zahlen werden abgekürzt, und
aus *Nichtverfügbarkeit* wird „ist weg".

**C4. Musterlösung (Gliederung Text 1):** Überblick · Voraussetzungen · Vorgehen · Bekannte Probleme
· Ansprechpartner. Das ist zugleich die Standardgliederung, nach der du deine eigenen Seiten baust.

**C6** und **D1–D4** prüfst du selbst:

| Check | Frage |
|---|---|
| Stand | Hast du das Datum geprüft, bevor du die Anleitung befolgt hast? |
| Pflicht | *muss / ist untersagt* von *sollte / wird empfohlen* getrennt? |
| Frist | Welche der Datumsangaben ist **deine** Frist, welche nur der Beginn der Regel? |
| Nominalstil | Jedes schwierige Nomen einmal ins Verb zurückgedreht? |
| Tempo | Wie lange hast du gebraucht, um die drei Kernpunkte zu finden? Ziel: unter fünf Minuten. |
```

---

## 🧾 Zusammenfassung · Summary

Company reading is **genre-shaped, so read to the shape**. A wiki page starts with its **Stand** —
no date, no trust — then *Voraussetzungen* before *Vorgehen*. A Richtlinie packs everything into
three questions: **Pflicht, Geltungsbereich, Ausnahme**, marked by *muss / ist untersagt / es sei
denn / bis spätestens*. A Rundmail front-loads the action, usually in the Betreff itself. And the
one skill that unlocks all three is turning **Nominalstil back into verbs** — *nach Prüfung* →
*nachdem geprüft wurde*, *bei Nichteinhaltung* → *wenn man nicht einhält*, *sind einzureichen* →
*müssen eingereicht werden*.

## 📇 Vokabel-Checkliste · Vocabulary checklist

| Deutsch | Artikel | Plural | English | VI (if hard) |
|---|---|---|---|---|
| Geltungsbereich | der | -bereiche | scope of application | phạm vi áp dụng |
| Abweichung | die | Abweichungen | deviation, exception | sai lệch |
| Genehmigung | die | Genehmigungen | approval, permit | sự phê duyệt |
| Nichteinhaltung | die | — | non-compliance | việc không tuân thủ |
| Übergangsregelung | die | -regelungen | transitional arrangement | quy định chuyển tiếp |
| Wiederherstellung | die | -herstellungen | restoration, recovery | khôi phục |
| erlöschen | — | — | to lapse, to expire | hết hiệu lực |
| einreichen | — | — | to submit | nộp |
| zulässig | — | — | permissible | được phép |
| im Zuge (+ Gen.) | — | — | in the course of | trong quá trình |

→ Drill these in [Flashcards](#/@flashcards).

## 📝 Hausaufgabe · Homework

- [ ] Block **A und B** komplett, Ziel ≥ 80 %.
- [ ] **C1** — die Richtlinie in drei Sätzen.
- [ ] **D2** — eine echte Richtlinie auf Pflicht/Bereich/Ausnahme/Frist abklopfen.
- [ ] **D3** — eine Wiki-Seite auf Deutsch nach dem Vierteiler umschreiben.
- [ ] Fünf Verwaltungswörter (*erlöschen, einreichen, zulässig, im Zuge, Abweichung*) in [Flashcards](#/@flashcards).

## 📚 Empfohlene Ressourcen · Recommended resources

- **Fachmedien:** heise.de, Golem.de, t3n.de, Informatik Aktuell, entwickler.de.
- **Wörterbücher:** DWDS.de (Verwaltungssprache), Duden.de, Linguee für Formulierungen im Kontext.
- **Prüfung:** [telc B2 · Lesen & Sprachbausteine](#/exams/telc-b2-lesen-sprachbausteine) — dasselbe Scannen unter Zeitdruck.
- **Zurück zur Theorie:** [Phase 4 · Reading](#/phase-4/reading).
- **Weiter:** [Phase 4 · Writing](#/phase-4/writing) und der [Übungsteil](#/phase-4/writing-uebungen).
