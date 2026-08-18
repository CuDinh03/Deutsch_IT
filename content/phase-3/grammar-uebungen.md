# Phase 3 · Grammar — Übungsteil · Workbook

> **Level:** B2+ · **Focus:** Nominalstil, Passiv, Funktionsverbgefüge, Partizipialattribute, präzise Konnektoren · **Time:** ~3 h
> _After this workbook you can read a German ADR without slowing down — and write one._

This is the practice half of [Phase 3 · Grammar](#/phase-3/grammar). Phase 2 made you *precise*;
Phase 3 makes you sound like the documentation. Every structure here exists to **remove the actor**
and **pack more into fewer words** — which is exactly what technical German does.

**How it works:** blocks A and B grade themselves. Answer, press **Prüfen**, read why. Blocks C and D
are free production with model answers at the end.

---

## 🏋️ Übungsteil · Workbook

### A. Erkennen — spot the structure

**A1–A5 · Verbalstil oder Nominalstil?**

```uebung
? Nachdem wir die Daten migriert haben, prüfen wir die Integrität.
* Verbalstil
x Nominalstil
! Ein vollständiger Nebensatz mit konjugiertem Verb — gesprochenes Register.

? Nach der Migration der Daten wird die Integrität geprüft.
x Verbalstil
* Nominalstil
! Der ganze Nebensatz ist zu **Präposition + Nomen** zusammengeschrumpft.

? Weil das System ausgefallen ist, konnten wir nicht deployen.
* Verbalstil
x Nominalstil
! *weil* + Verb am Ende.

? Wegen des Systemausfalls war kein Deployment möglich.
x Verbalstil
* Nominalstil
! *wegen* + Genitiv-Nomen ersetzt den ganzen Kausalsatz.

? Beim Neustart des Dienstes werden die Verbindungen neu aufgebaut.
x Verbalstil
* Nominalstil
! *beim* + nominalisierter Infinitiv = *wenn man neu startet*.
```

**A6 · Wann benutzt man Nominalstil NICHT?**

```uebung
? In welcher Situation ist Nominalstil falsch?
* im Daily, wenn du sagst, was du gestern gemacht hast
x in einem ADR
x in einer README
x in einer Commit-Message-Beschreibung
! Gesprochen sagst du *„Ich habe deployt"* — nicht *„Die Durchführung des Deployments erfolgte durch mich."* Nominalstil ist ein **Schriftregister**. Wer ihn im Gespräch benutzt, klingt wie ein Amtsbescheid.
```

**A7–A10 · Vorgangspassiv oder Zustandspassiv?**

```uebung
? Der Dienst wird bereitgestellt.
x Zustandspassiv — es ist fertig
* Vorgangspassiv — es läuft gerade
! *werden* + Partizip II = der Vorgang läuft.

? Der Dienst ist bereitgestellt.
* Zustandspassiv — Ergebnis
x Vorgangspassiv
! *sein* + Partizip II = der resultierende Zustand. Der Dienst ist oben.

? Die Migration wird gerade durchgeführt.
* Vorgangspassiv
x Zustandspassiv
! Prozess.

? Die Datenbank ist gesichert.
x Vorgangspassiv
* Zustandspassiv
! Zustand — das Backup existiert bereits. Der Unterschied entscheidet in einem Incident-Report, ob etwas noch läuft oder schon fertig ist.
```

**A11–A14 · Funktionsverbgefüge erkennen.**

```uebung
? Welche Ausdrücke sind Funktionsverbgefüge? (mehrere richtig)
* in Frage stellen
x deployen
x testen
* zur Verfügung stellen
* in Betrieb nehmen
* eine Entscheidung treffen
! Ein FVG ist ein festes Paar aus „leichtem" Verb + bedeutungstragendem Nomen. Als Block lernen — nicht Wort für Wort übersetzen.

? „in Betrieb nehmen" bedeutet …
x reparieren
x kaufen
* in Betrieb setzen, live schalten
x abschalten
! Gegenteil: *außer Betrieb nehmen*.

? „Berücksichtigung finden" bedeutet …
x gesucht werden
x abgelehnt werden
x gefunden werden
* berücksichtigt werden
! Passivische Bedeutung ohne Passivform — typisch für FVG im Amtsdeutsch.

? „etwas in Frage stellen" bedeutet …
* etwas bezweifeln
x eine Frage stellen
x etwas beantworten
x etwas beschließen
! Falscher Freund für Lernende: es geht nicht ums Fragen, sondern ums Anzweifeln.
```

**A15–A18 · Partizip I, Partizip II oder „zu" + Partizip I?**

```uebung
? der laufende Prozess
x zu + Partizip I — Notwendigkeit
* Partizip I — aktiv, andauernd
x Partizip II — passiv, abgeschlossen
! Infinitiv + *d*.

? die deployte Version
x Partizip I
* Partizip II
x zu + Partizip I
! Abgeschlossen, passivisch.

? die zu behebende Störung
x Partizip I
x Partizip II
* zu + Partizip I
! *zu* + Partizip I drückt **Notwendigkeit** aus: die Störung, die behoben werden muss.

? die vom Client gesendete Anfrage
x Partizip I
* Partizip II
x zu + Partizip I
! Komprimierter Relativsatz: *die Anfrage, die vom Client gesendet wurde*.
```

**A19 · Lesestrategie bei langem Attribut.**

```uebung
? Du siehst „die vom Load Balancer auf drei Replikate verteilte Last". Wie liest du das?
x im Wörterbuch nachschlagen
* zuerst das Nomen „Last" suchen, dann das Attribut rückwärts lesen
x von links nach rechts durchlesen
x das Attribut überspringen und weiterlesen
! Artikel → langes Attribut überspringen → **Nomen finden** → Attribut rückwärts auflösen. Ohne diese Reihenfolge verlierst du bei jedem Fachtext den Faden.
```

**A20–A24 · Welcher Konnektor?**

```uebung
? „Wir cachen die Antworten, ___ die Latenz sinkt." (Folge)
x während
x wohingegen
* sodass
x indem
! *sodass* = Konsequenz.

? „Wir erhöhen den Durchsatz, ___ wir horizontal skalieren." (Mittel/Methode)
x während
x sofern
x sodass
* indem
! *indem* beantwortet **wie?**

? „REST ist zustandslos, ___ eine Session Zustand hält." (starker Gegensatz)
x sodass
x indem
x sofern
* wohingegen
! *wohingegen* stellt zwei Dinge scharf gegenüber.

? „___ die Tests grün sind, wird deployt." (Bedingung)
x sodass
x indem
* sofern
x wohingegen
! *sofern* = vorausgesetzt, dass.

? Alle fünf Konnektoren aus diesem Kapitel sind …
x adverbial mit Inversion
* subordinierend — das Verb geht ans Ende
x koordinierend
! *sodass, indem, während, wohingegen, sofern* leiten alle einen Nebensatz ein.
```

---

### B. Anwenden — apply with a frame

**B1–B5 · Verbalstil → Nominalstil.**

```uebung
? „Nachdem wir bereitgestellt haben, prüfen wir die Metriken." → mit „Nach ___"
= der Bereitstellung
! *bereitstellen* → *die Bereitstellung*; *nach* + Dativ.

? „Weil das System ausgefallen ist, …" → mit „Wegen ___"
= des Systemausfalls
! *wegen* + Genitiv. *der Systemausfall* → *des Systemausfalls*.

? „Wenn man den Dienst neu startet, …" → mit „Beim ___"
= Neustart des Dienstes | Neustart
! *beim* = *bei dem*, nominalisierter Vorgang.

? „Nachdem die Daten migriert wurden, …" → mit „Nach ___"
= der Migration der Daten | der Migration
! Passivsatz wird zum Nomen.

? „Bevor wir das Release ausliefern, …" → mit „Vor ___"
= der Auslieferung des Releases | der Auslieferung
! *vor* + Dativ.
```

**B6–B9 · Aktiv → Passiv (technischer Register).**

```uebung
? „Der Server verarbeitet die Anfrage." → Passiv
= Die Anfrage wird verarbeitet | Die Anfrage wird vom Server verarbeitet
! Akkusativobjekt wird Subjekt; Handelnder optional mit *von* + Dativ.

? „Wir müssen die Migration vor dem Release durchführen." → Passiv
= Die Migration muss vor dem Release durchgeführt werden
! Modalverb Position 2, **Partizip II + werden** ganz am Ende.

? „Das Gateway authentifiziert die Anfrage." → Passiv
= Die Anfrage wird authentifiziert | Die Anfrage wird vom Gateway authentifiziert
! Standardsatz in jeder Architekturbeschreibung.

? „Man kann den Cache manuell leeren." → Passiv
= Der Cache kann manuell geleert werden
! Aus *man* wird ein sauberes Passiv.
```

**B10–B12 · Passiv → „man" (How-to-Register).**

```uebung
? „Zuerst wird das Repository geklont." → mit man
= Zuerst klont man das Repository
! In Anleitungen ist *man* leichter lesbar als das Passiv.

? „Anschließend werden die Abhängigkeiten installiert." → mit man
= Anschließend installiert man die Abhängigkeiten
! Inversion nach *anschließend*.

? „Die Konfiguration muss angepasst werden." → mit man
= Man muss die Konfiguration anpassen
! Modalverb bleibt, Passiv verschwindet.
```

**B13–B18 · Funktionsverbgefüge einsetzen.**

```uebung
? Wir stellen dem Frontend-Team eine dokumentierte Schnittstelle ___ ___.
= zur Verfügung
! *jemandem etwas zur Verfügung stellen*.

? Das neue Dashboard wird nächste Woche ___ ___ genommen.
= in Betrieb
! *in Betrieb nehmen* = live schalten.

? Der alte Dienst wurde letzten Monat ___ ___ genommen.
= außer Betrieb
! Gegenteil von *in Betrieb nehmen*.

? Das Team hat gestern eine ___ getroffen.
= Entscheidung
! *eine Entscheidung treffen* — nicht *machen*.

? Diese Annahme müssen wir ___ ___ stellen.
= in Frage
! *in Frage stellen* = bezweifeln.

? Die Sicherheitsanforderungen müssen ___ finden.
= Berücksichtigung
! *Berücksichtigung finden* = berücksichtigt werden.
```

**B19–B23 · Relativsatz → Partizipialattribut.**

```uebung
? „die Anfrage, die vom Client gesendet wurde" → Attribut
= die vom Client gesendete Anfrage
! Partizip II + Adjektivendung, alles vor das Nomen.

? „der Dienst, der gerade läuft" → Attribut
= der gerade laufende Dienst
! Partizip I für Andauerndes.

? „die Störung, die noch behoben werden muss" → Attribut mit zu
= die noch zu behebende Störung
! *zu* + Partizip I = Notwendigkeit.

? „die Version, die gestern deployt wurde" → Attribut
= die gestern deployte Version
! Partizip II.

? „die Last, die auf drei Replikate verteilt wird" → Attribut
= die auf drei Replikate verteilte Last
! Dieselbe Kompression, nur länger.
```

**B24–B26 · Partizipialattribut → Relativsatz (Leserichtung).**

```uebung
? „die vom Team getroffene Entscheidung" → Relativsatz
= die Entscheidung, die vom Team getroffen wurde
! Rückwärts auflösen: Nomen zuerst, dann das Attribut als Relativsatz.

? „das im RAM gehaltene Zwischenergebnis" → Relativsatz
= das Zwischenergebnis, das im RAM gehalten wird
! Präsens, weil es ein andauernder Zustand ist.

? „die zu prüfenden Anforderungen" → Relativsatz
= die Anforderungen, die geprüft werden müssen
! *zu* + Partizip I trägt immer die Bedeutung *müssen*.
```

**B27–B31 · Präzise Konnektoren einsetzen.**

```uebung
? Wir cachen die Antworten, ___ die Datenbank entlastet wird.
= sodass
! Folge.

? Wir reduzieren die Kopplung, ___ wir Events statt direkter Aufrufe verwenden.
= indem
! Methode.

? ___ Redis die Daten im RAM hält, schreibt Postgres auf die Platte.
= Während
! Gleichzeitigkeit/Gegensatz.

? Die Latenz ist niedrig, ___ der Durchsatz begrenzt bleibt.
= wohingegen
! Scharfer Gegensatz.

? ___ die Tests grün sind, wird automatisch deployt.
= Sofern
! Bedingung.
```

**B32–B34 · Fehler finden.**

```uebung
? Korrigiere: „Wir erhöhen den Durchsatz, indem wir skalieren horizontal."
= Wir erhöhen den Durchsatz, indem wir horizontal skalieren
! *indem* ist subordinierend → Verb ans Ende.

? Korrigiere: „Die Migration muss durchgeführt werden vor dem Release."
= Die Migration muss vor dem Release durchgeführt werden
! Im Passiv mit Modalverb steht **Partizip II + werden** ganz am Schluss.

? Korrigiere: „Das Team hat eine Entscheidung gemacht."
= Das Team hat eine Entscheidung getroffen
! FVG ist fest: *eine Entscheidung **treffen***. *machen* ist eine wörtliche Übersetzung aus dem Englischen.
```

---

### C. Produzieren — build it yourself

**C1.** Beschreibe deinen Deployment-Prozess in **4 Sätzen im Passiv**.
**C2.** Schreibe dieselben 4 Sätze mit **man**. Welche Version gehört in eine README?
**C3.** Formuliere 3 Sätze über dein System mit **Funktionsverbgefügen**.
**C4.** Komprimiere 3 Relativsätze aus deiner Doku zu **Partizipialattributen**.
**C5.** Schreibe je einen Satz mit **sodass**, **indem**, **wohingegen**.
**C6.** Übersetze: *The caching introduced to reduce latency significantly relieves the database.*
**C7.** Schreibe einen **ADR-Satz** über eine echte Entscheidung deines Teams — mit Nominalstil,
Passiv und einem präzisen Konnektor.

---

### D. Transfer — your real work

**D1.** Nimm einen Absatz aus deiner echten README und schreibe ihn im **Passiv** um.
**D2.** Nimm einen langen Satz aus einer deutschen Doku (heise, Doku eines Tools) und zerlege ihn
nach der Drei-Pass-Methode: Verb finden → Attribut auflösen → Nominalstil zurückübersetzen.
**D3.** Schreibe einen echten **ADR** auf Deutsch: Kontext, Entscheidung, Konsequenzen.
**D4.** Shadow die Audiozeile, dann beschreibe deinen eigenen Request-Flow.

```audio
Die Anfrage wird vom Gateway authentifiziert, an den zuständigen Service weitergeleitet und in der Datenbank gespeichert. Anschließend wird eine Antwort an den Client zurückgegeben.
```

---

## ✅ Musterlösungen für C und D

```spoiler
**C6.** *Die zur Reduzierung der Latenz eingeführte Zwischenspeicherung entlastet die Datenbank
erheblich.*
Drei Strukturen in einem Satz: Nominalstil (*zur Reduzierung*), Partizipialattribut
(*eingeführte*), und ein Nomen als Subjekt (*die Zwischenspeicherung*).

**C1. Musterlösung (Passiv):**
*Nach dem Merge wird die Pipeline automatisch gestartet. Zuerst werden die Tests ausgeführt.
Anschließend wird das Image gebaut und in die Registry hochgeladen. Nach erfolgreicher Prüfung wird
die neue Version auf Staging bereitgestellt.*

**C2. Dieselben Sätze mit man:**
*Nach dem Merge startet man die Pipeline automatisch. Zuerst führt man die Tests aus …*
Für eine **README** ist die *man*-Variante meist besser: kürzer, und sie sagt, wer handelt. Für eine
**Spezifikation** ist Passiv üblicher, weil der Handelnde bewusst offenbleibt. Beides ist korrekt —
die Wahl ist Register, nicht Grammatik.

**C7. Musterlösung (ADR-Satz):**
*Zur Reduzierung der Kopplung zwischen Bestell- und Zahlungsdienst wurde die Entscheidung getroffen,
die Kommunikation auf Events umzustellen, sodass beide Dienste unabhängig voneinander ausgeliefert
werden können.*
Enthält: Nominalstil (*zur Reduzierung*), FVG (*die Entscheidung getroffen*), Passiv (*wurde …
getroffen*, *ausgeliefert werden können*) und *sodass*.

**C3–C5** sind offen. Selbstkontrolle:

| Check | Frage |
|---|---|
| Register | Nominalstil nur im Geschriebenen, nicht im Daily? |
| Passiv | Bei Modalverb: Partizip II + *werden* ganz am Ende? |
| FVG | Als festen Block benutzt, nicht wörtlich übersetzt? |
| Attribut | Endung stimmt mit Artikel und Kasus überein? |
| Konnektor | Verb am Ende nach *sodass / indem / wohingegen / sofern*? |

**D1–D4.** Eigener Inhalt. Bei D2 ist das Ziel nicht die Übersetzung, sondern die **Reihenfolge**:
Wenn du beim langen Attribut zuerst das Nomen suchst, liest du Fachtexte plötzlich flüssig.
```

---

## 🧾 Zusammenfassung · Summary

Technical German removes the actor and packs more per sentence. **Nominalstil** collapses a
subordinate clause into preposition + noun — in **writing only**, never in a Daily. **Passiv** and
**man** both hide the actor; *werden* is the process, *sein* the resulting state. **Funktionsverbgefüge**
(*zur Verfügung stellen, in Betrieb nehmen, eine Entscheidung treffen*) are fixed blocks, not
word-for-word translations. **Partizipialattribute** compress a relative clause in front of the
noun — read the noun first, then the attribute backwards. And five connectors do precise work:
*sodass* (result), *indem* (method), *während* (contrast/simultaneity), *wohingegen* (strong
contrast), *sofern* (condition) — all subordinating.

## 📇 Vokabel-Checkliste · Vocabulary checklist

| Deutsch | Artikel | Plural | English | VI (if hard) |
|---|---|---|---|---|
| Nominalstil | der | — | nominal style | lối viết danh từ hoá |
| Funktionsverbgefüge | das | -gefüge | light-verb construction | cụm động từ chức năng |
| Zwischenspeicherung | die | -speicherungen | caching | bộ nhớ đệm |
| Kopplung | die | Kopplungen | coupling | sự phụ thuộc |
| Systemausfall | der | -ausfälle | system outage | sự cố hệ thống |
| Auslieferung | die | Auslieferungen | delivery, release | phát hành |
| entlasten | — | — | to relieve, offload | giảm tải |
| bereitstellen | — | — | to provide, deploy | cung cấp, triển khai |

→ Drill these in [Flashcards](#/@flashcards).

## 📝 Hausaufgabe · Homework

- [ ] Block **A und B** komplett, Ziel ≥ 80 %.
- [ ] Falsche Aufgaben am nächsten Tag mit „Zurücksetzen" wiederholen.
- [ ] Einen echten **ADR** auf Deutsch schreiben (**D3**).
- [ ] Einen langen Satz aus einer deutschen Doku zerlegen (**D2**).
- [ ] Zehn Funktionsverbgefüge in [Flashcards](#/@flashcards) anlegen.

## 📚 Empfohlene Ressourcen · Recommended resources

- **Referenz:** mein-deutschbuch.de (Nominalisierung, Partizipialattribute), DWDS.de.
- **Echte Texte:** heise.de, Informatik Aktuell, deutschsprachige Tool-Dokumentation.
- **Zurück zur Theorie:** [Phase 3 · Grammar](#/phase-3/grammar).
- **Weiter:** [Phase 3 · Vocabulary](#/phase-3/vocabulary) und der [Übungsteil](#/phase-3/vocabulary-uebungen).
