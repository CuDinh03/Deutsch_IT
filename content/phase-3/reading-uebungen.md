# Phase 3 · Reading — Übungsteil · Workbook

> **Level:** B2+ · **Focus:** Komposita-Algorithmus, verschachtelte Sätze, echte technische Texte · **Time:** ~2 h
> _After this workbook a packed German sentence stops being a wall and becomes a structure you can walk through._

This is the practice half of [Phase 3 · Reading](#/phase-3/reading). The texts below are written in
the register of German technical documentation and heise-style prose: long compounds, participial
attributes before the noun, and the verb parked at the end.

**The method stays three passes:** find the finite verb → resolve the attribute → unfold the
Nominalstil. Do block A with **no dictionary**.

---

## 🏋️ Übungsteil · Workbook

### Text 1 — Doku-Auszug

> **Zwischenspeicherung von Produktabfragen**
>
> Die zur Reduzierung der Latenz eingeführte, im Arbeitsspeicher gehaltene Zwischenspeicherung
> entlastet die Datenbank erheblich. Bei jeder Anfrage wird zunächst geprüft, ob ein gültiger
> Eintrag vorliegt. Ist das der Fall, wird die Antwort unmittelbar zurückgegeben, wohingegen bei
> einem fehlenden oder abgelaufenen Eintrag die Datenbank abgefragt und das Ergebnis anschließend
> im Cache abgelegt wird.
>
> Zu beachten ist, dass die im Cache gehaltenen Daten nach fünf Minuten verfallen. Sofern
> aktuellere Daten benötigt werden, kann die Zwischenspeicherung über den Parameter
> `no-cache` umgangen werden. Von einer dauerhaften Deaktivierung wird abgeraten, da die
> Datenbanklast dadurch erheblich steigt.

### Text 2 — Störungsmeldung

> **Störungsmeldung: Erhöhte Fehlerrate im Zahlungsdienst**
>
> Zwischen 02:14 und 03:07 Uhr kam es im Zahlungsdienst zu einer erhöhten Fehlerrate. Betroffen
> waren etwa zwölf Prozent der Anfragen, die mit dem Status 503 abgewiesen wurden.
>
> Ausgelöst wurde der Vorfall durch eine am Vorabend ausgerollte Konfigurationsänderung, durch die
> die maximale Anzahl gleichzeitiger Datenbankverbindungen versehentlich von 100 auf 10 reduziert
> worden war. Da die Änderung zunächst nur auf einem Replikat wirksam wurde, blieb sie im
> Monitoring länger unauffällig, als es wünschenswert gewesen wäre.
>
> Nach dem Zurücksetzen der Konfiguration normalisierte sich die Fehlerrate innerhalb weniger
> Minuten. Als Maßnahmen wurden beschlossen: eine Begrenzung der zulässigen Änderungsgröße, eine
> Alarmierung bereits ab einer Fehlerrate von zwei Prozent sowie die Aufnahme des
> Verbindungslimits in die Bereitstellungsprüfung.

---

### A. Erkennen — structure first

**A1–A4 · Komposita zerlegen.** Artikel angeben.

```uebung
? ___ Zwischenspeicherung
= die
! Kopf: *die Speicherung* (*-ung* → die).

? ___ Datenbanklast
= die
! Kopf: *die Last*.

? ___ Konfigurationsänderung
= die
! Kopf: *die Änderung*.

? ___ Verbindungslimit
= das
! Kopf: *das Limit*.
```

**A5–A8 · Partizipialattribut auflösen.**

```uebung
? „die zur Reduzierung der Latenz eingeführte Zwischenspeicherung" — was ist das Kopfnomen?
* die Zwischenspeicherung
x die Reduzierung
x die Latenz
! Erst das Nomen suchen, dann das Attribut rückwärts lesen. Genau diese Reihenfolge macht Fachtexte lesbar.

? Löse auf: „die im Arbeitsspeicher gehaltene Zwischenspeicherung"
= die Zwischenspeicherung, die im Arbeitsspeicher gehalten wird
! Partizip II → Relativsatz im Passiv.

? Löse auf: „eine am Vorabend ausgerollte Konfigurationsänderung"
= eine Konfigurationsänderung, die am Vorabend ausgerollt wurde
! Vergangenheit, weil es ein abgeschlossener Vorgang ist.

? „die im Cache gehaltenen Daten" — welche Zeit passt beim Auflösen?
x Futur
* Präsens — es ist ein andauernder Zustand
x Perfekt
! *die Daten, die im Cache gehalten werden.*
```

**A9–A12 · Konnektoren im Text erkennen.**

```uebung
? „…, wohingegen bei einem fehlenden Eintrag die Datenbank abgefragt wird." — was signalisiert *wohingegen*?
* einen starken Gegensatz zwischen zwei Fällen
x eine Folge
x eine Bedingung
x eine Methode
! Es stellt Cache-Treffer und Cache-Fehlschlag gegenüber.

? „Sofern aktuellere Daten benötigt werden, …" — was signalisiert *sofern*?
x Folge
* Bedingung
x Zeitpunkt
x Gegensatz
! *sofern* = vorausgesetzt, dass.

? „…, da die Datenbanklast dadurch erheblich steigt." — was signalisiert *da*?
x einen Ort
x eine Zeit
* einen Grund (schriftsprachlich für *weil*)
x eine Bedingung
! *da* ist die formelle Variante von *weil*, gleiche Wortstellung.

? „Da die Änderung zunächst nur auf einem Replikat wirksam wurde, blieb sie länger unauffällig." — wo steht das Verb im Hauptsatz?
x am Ende
x vor dem Nebensatz
* direkt nach dem Nebensatz, an Position 2 des Gesamtsatzes
! Der ganze Nebensatz besetzt Position 1, also folgt sofort *blieb*.
```

---

### B. Anwenden — read for detail

**B1–B5 · Text 1: Verständnis.**

```uebung
? Wozu wurde die Zwischenspeicherung eingeführt?
* um die Latenz zu reduzieren
x um Speicher zu sparen
x um die Sicherheit zu erhöhen
x um Kosten zu senken
! Steht direkt im ersten Satz — im Nominalstil: *zur Reduzierung der Latenz*.

? Was passiert bei einem gültigen Cache-Eintrag?
x Die Anfrage wird abgewiesen.
* Die Antwort wird unmittelbar zurückgegeben.
x Die Datenbank wird trotzdem abgefragt.
x Der Eintrag wird gelöscht.
! Der *wohingegen*-Satz stellt beide Fälle gegenüber.

? Nach wie vielen Minuten verfallen die Cache-Daten?
= 5 | fünf | fünf Minuten | 5 Minuten
! „nach fünf Minuten verfallen".

? Wie umgeht man die Zwischenspeicherung?
= no-cache | über den Parameter no-cache | mit no-cache
! Im zweiten Absatz.

? Warum wird von dauerhafter Deaktivierung abgeraten?
x weil es die Latenz senkt
x weil der Cache dann veraltet
* weil die Datenbanklast dadurch erheblich steigt
x weil es technisch nicht möglich ist
! Der *da*-Satz nennt den Grund.
```

**B6–B12 · Text 2: Störungsmeldung.**

```uebung
? Wie lange dauerte die Störung?
= 53 Minuten | 53 | etwa 53 Minuten
! 02:14 bis 03:07 — die Aufgabe verlangt eine kleine Rechnung, genau wie im Prüfungshören.

? Wie viel Prozent der Anfragen waren betroffen?
= 12 | zwölf | 12 Prozent | zwölf Prozent
! „etwa zwölf Prozent".

? Was war die Ursache?
x ein Hardwaredefekt
x ein Angriff von außen
x ein Fehler im Zahlungsanbieter
* eine ausgerollte Konfigurationsänderung, die das Verbindungslimit von 100 auf 10 senkte
! Der zweite Absatz nennt sie im Partizipialattribut.

? Von welchem Wert auf welchen wurde das Verbindungslimit reduziert?
= von 100 auf 10 | 100 auf 10
! *von X auf Y* — die Richtung ist Teil der Information.

? Warum fiel der Fehler im Monitoring spät auf?
* weil die Änderung zunächst nur auf einem Replikat wirksam wurde
x weil niemand Bereitschaft hatte
x weil das Monitoring ausgefallen war
x weil die Fehlerrate zu niedrig war
! Der *Da*-Satz am Anfang des dritten Satzes.

? Welche Maßnahmen wurden beschlossen? (mehrere richtig)
x Einstellung zusätzlicher Mitarbeiter
* Begrenzung der zulässigen Änderungsgröße
* Alarmierung ab zwei Prozent Fehlerrate
* Aufnahme des Verbindungslimits in die Bereitstellungsprüfung
! Drei Maßnahmen, alle im letzten Absatz.

? „als es wünschenswert gewesen wäre" — welche Form ist das?
x Futur
x Imperativ
* Konjunktiv II der Vergangenheit
x Passiv
! Irrealer Vergleich — typisch für den zurückhaltenden Ton deutscher Störungsmeldungen.
```

**B13–B18 · Fachwortschatz aus den Texten.**

```uebung
? Deutsch für „to bypass" (den Cache)
= umgehen
! *die Zwischenspeicherung umgehen*.

? Deutsch für „to expire" (Cache-Eintrag)
= verfallen
! Auch für Urlaub und Verträge — siehe [Alltag · Telefon](#/alltag/telefon-bank-vertrag).

? Deutsch für „to advise against"
= abraten | abraten von
! *Von einer Deaktivierung wird abgeraten.* Signatur: *abraten von* + Dativ.

? Deutsch für „error rate"
= Fehlerrate | die Fehlerrate
! Kopf *die Rate*.

? Deutsch für „to be triggered by"
= ausgelöst werden durch | ausgelöst durch
! *Ausgelöst wurde der Vorfall durch …*

? Deutsch für „alerting"
= Alarmierung | die Alarmierung
! *-ung* → die.
```

**B19–B21 · Sätze entpacken.**

```uebung
? Was ist das finite Verb in: „Die zur Reduzierung der Latenz eingeführte, im Arbeitsspeicher gehaltene Zwischenspeicherung entlastet die Datenbank erheblich."?
= entlastet
! Erst das finite Verb suchen — es gibt dir das Gerüst *wer tut was*.

? Was ist das Subjekt in demselben Satz?
= die Zwischenspeicherung | Zwischenspeicherung
! Alles davor ist Attribut, nicht Subjekt.

? Löse den Nominalstil auf: „Nach dem Zurücksetzen der Konfiguration normalisierte sich die Fehlerrate."
= Nachdem die Konfiguration zurückgesetzt worden war, normalisierte sich die Fehlerrate | Nachdem die Konfiguration zurückgesetzt wurde, normalisierte sich die Fehlerrate
! Nominalstil zurück in einen Nebensatz — der dritte Pass der Lesemethode.
```

---

### C. Produzieren — write from the reading

**C1.** Fasse Text 1 in **3 deutschen Sätzen** zusammen.
**C2.** Schreibe die Störungsmeldung aus Text 2 als **Chat-Nachricht** ans Team (3 Sätze, informell).
**C3.** Übersetze: *The caching held in memory, introduced to reduce latency, relieves the database.*
**C4.** Übersetze: *The incident was triggered by a configuration change rolled out the previous evening.*
**C5.** Schreibe eine eigene **Störungsmeldung** über einen echten Vorfall: Zeitraum, Auswirkung,
Ursache, Maßnahmen.

---

### D. Transfer — real sources

**D1.** Lies einen Artikel auf **Informatik Aktuell** oder **heise Developer** und markiere drei
Partizipialattribute.
**D2.** Nimm einen Absatz aus einer deutschen Tool-Dokumentation und zerlege ihn nach der
Drei-Pass-Methode.
**D3.** Höre und lies mit:

```audio
Die vom Team nach langer Diskussion getroffene Entscheidung, auf eine ereignisgesteuerte Architektur umzusteigen, hat die Kopplung zwischen den Diensten deutlich reduziert.
```

---

## ✅ Musterlösungen für C und D

```spoiler
**C3.** *Die zur Reduzierung der Latenz eingeführte, im Arbeitsspeicher gehaltene Zwischenspeicherung
entlastet die Datenbank.*

**C4.** *Ausgelöst wurde der Vorfall durch eine am Vorabend ausgerollte Konfigurationsänderung.*
Beachte die Inversion: Beginnt der Satz mit dem Partizip *Ausgelöst*, folgt sofort das finite Verb.

**C1. Musterlösung:** *Ein Cache im Arbeitsspeicher senkt die Latenz und entlastet die Datenbank.
Liegt ein gültiger Eintrag vor, wird er direkt zurückgegeben; sonst wird die Datenbank abgefragt und
das Ergebnis gespeichert. Die Einträge verfallen nach fünf Minuten und lassen sich mit `no-cache`
umgehen.*

**C2. Musterlösung (Chat):** *Kurze Info: Heute Nacht zwischen 2 und 3 Uhr hatte der Zahlungsdienst
eine erhöhte Fehlerrate, ca. 12 % der Anfragen mit 503. Ursache war eine Config-Änderung, die das
DB-Verbindungslimit von 100 auf 10 gesetzt hat. Ist zurückgerollt, läuft wieder — Maßnahmen stehen
im Ticket.*
Derselbe Inhalt, völlig anderes Register: kurze Sätze, kein Nominalstil, Abkürzungen erlaubt.

**C5.** Offen. Prüfe: Zeitraum mit *von … bis*, Auswirkung mit Zahl, Ursache im Passiv
(*Ausgelöst wurde … durch*), Maßnahmen als Aufzählung.

**D1–D3.** Eigenes Material. Bei D1 ist das Ziel nicht Übersetzen, sondern **Erkennen** — sobald du
das Muster „Artikel + langer Block + Nomen" siehst, liest du automatisch richtig.
```

---

## 🧾 Zusammenfassung · Summary

Technical German is readable once you attack it in a fixed order: **find the finite verb** (the
spine), **jump to the noun** when an article is followed by a long block and read the attribute
backwards, then **unfold the Nominalstil** back into a clause. Compounds split right-to-left and take
their article from the last part; the *-s-* and *-en-* between parts are just joining letters. Two
patterns carry most incident prose: *Ausgelöst wurde … durch …* and *von X auf Y*. Theory:
[Phase 3 · Reading](#/phase-3/reading).

## 📇 Vokabel-Checkliste · Vocabulary checklist

| Deutsch | Artikel | Plural | English | VI (if hard) |
|---|---|---|---|---|
| Zwischenspeicherung | die | -speicherungen | caching | bộ nhớ đệm |
| Fehlerrate | die | Fehlerraten | error rate | tỉ lệ lỗi |
| Alarmierung | die | Alarmierungen | alerting | cảnh báo |
| Vorfall | der | Vorfälle | incident | sự cố |
| Arbeitsspeicher | der | — | RAM, memory | bộ nhớ trong |
| umgehen | — | — | to bypass | vòng qua |
| verfallen | — | — | to expire | hết hạn |
| abraten (von) | — | — | to advise against | khuyên không nên |

→ Drill these in [Flashcards](#/@flashcards).

## 📝 Hausaufgabe · Homework

- [ ] Beide Texte durch **Block A und B**, erster Durchgang ohne Wörterbuch.
- [ ] **C5** schreiben: eigene Störungsmeldung über einen echten Vorfall.
- [ ] **Drei Partizipialattribute** in echter Doku markieren (**D1**).
- [ ] Einen Absatz nach der Drei-Pass-Methode zerlegen (**D2**).

## 📚 Empfohlene Ressourcen · Recommended resources

- **Quellen:** heise Developer, Informatik Aktuell, deutschsprachige Tool-Dokumentation.
- **Struktur:** [Phase 3 · Grammar](#/phase-3/grammar) §4 (Partizipialattribute).
- **Zurück zur Theorie:** [Phase 3 · Reading](#/phase-3/reading).
- **Weiter:** [Phase 3 · Writing](#/phase-3/writing) und der [Übungsteil](#/phase-3/writing-uebungen).
