# Templates · Protokoll, Incident-Report & Übergabe

> **Level:** B2 → C1 · **Focus:** die drei Dokumente, die ein Team über sich selbst schreibt — neutral, ohne Schuldige, vollständig · **Time:** ~2,5 h
> _After this module you can write minutes, a post-mortem and a handover in German that a stranger could act on six months later._

Diese drei Textsorten haben eines gemeinsam: Sie werden von **Fremden** gelesen — von der Kollegin,
die nicht dabei war, von der Bereitschaft um drei Uhr nachts, von dir selbst in einem halben Jahr.
Deshalb sind sie neutral formuliert, vollständig und **frei von Personen**, wo immer es geht.

Grammatisch ist das der Anwendungsfall für alles aus [Phase 4 · Grammar](#/phase-4/grammar):
**Passiv** für Beschlüsse, **indirekte Rede** für Diskussion, **Nominalstil** in Tabellen.

## Objectives / Lernziele

- Ein **Protokoll** schreiben, das Beschlüsse und Maßnahmen festhält statt des Gesprächsverlaufs.
- Einen **Incident-Report** ohne Schuldzuweisung verfassen — mit Zeitlinie und Ursache.
- Eine **Übergabe** schreiben, mit der jemand anders weiterarbeiten kann.
- Die Register sicher trennen: Beschluss ≠ Diskussion ≠ Maßnahme.

## 1. Vorlage · Protokoll

> **Protokoll — Abstimmung Datenbankmigration**
> **Datum:** 18.08.2026, 10:00–10:40 Uhr · **Ort:** Videokonferenz
> **Teilnehmende:** A. Weber (Betrieb), T. Klein (Entwicklung), C. Dinh (Entwicklung)
> **Entschuldigt:** M. Sauer · **Protokoll:** C. Dinh
>
> **Tagesordnung**
> 1. Stand der Testmigration
> 2. Termin für die Produktivmigration
> 3. Offene Punkte
>
> **TOP 1 — Stand der Testmigration**
> Herr Klein berichtete, die Testmigration sei vollständig durchgelaufen und habe zwei Stunden und
> zwanzig Minuten gedauert. Frau Weber wies darauf hin, dass ein Zeitfenster an einem Werktag
> fachlich nicht vertretbar sei.
>
> **TOP 2 — Termin**
> Es wurde beschlossen, die Migration am Samstag, 07.09.2026, ab 06:00 Uhr durchzuführen. Ein
> Rollback-Fenster von zwei Stunden wurde vereinbart.
>
> **TOP 3 — Offene Punkte**
> Die Rückmeldung des Betriebs zum Wartungsfenster steht noch aus. Die Frage der Kundeninformation
> wurde auf die nächste Sitzung vertagt.
>
> **Maßnahmen**

| Maßnahme | Verantwortlich | Frist |
|---|---|---|
| Wartungsfenster mit dem Betrieb abstimmen | A. Weber | Mi, 20.08. |
| Kunden informieren | C. Dinh | Di, 19.08. |
| Rollback-Skript testen | T. Klein | Fr, 05.09. |

> **Nächster Termin:** 25.08.2026, 10:00 Uhr

**Drei Register in einem Dokument.** Die Diskussion steht in **indirekter Rede** (*berichtete, …
sei*), der Beschluss im **Passiv** (*Es wurde beschlossen*), die Maßnahmen im **Nominalstil**
(*Wartungsfenster abstimmen*). Wer das mischt, klingt entweder wie ein Chatprotokoll oder wie ein
Amtsbescheid.

```uebung
? Was gehört NICHT in ein deutsches Protokoll?
x die offenen Punkte
* der vollständige Gesprächsverlauf
x die Beschlüsse
x die Maßnahmen mit Verantwortlichen und Fristen
! Ein Protokoll ist ein Ergebnisdokument. Wer mitstenografiert, produziert etwas, das niemand liest — und übersieht dabei den Beschluss.

? In welcher Form steht ein Beschluss?
x Ich beschließe die Migration für den 07.09.
x Die Migration wäre am 07.09. möglich.
* Es wurde beschlossen, die Migration am 07.09. durchzuführen.
x Wir haben beschlossen, dass wir am 07.09. migrieren.
! Passiv, kein Subjekt, Vergangenheit. So bleibt der Beschluss auch gültig, wenn niemand aus der Runde mehr in der Firma ist.

? In welcher Form steht die Diskussion?
x Herr Klein sagte: „Die Testmigration ist durchgelaufen."
x Die Testmigration ist durchgelaufen.
x Herr Klein hat gesagt, dass die Testmigration durchgelaufen ist.
* Herr Klein berichtete, die Testmigration sei durchgelaufen.
! Konjunktiv I hält Aussage und Feststellung auseinander. Ohne ihn steht im Protokoll, das Protokoll behaupte es selbst.

? Was fehlt einer Maßnahme, wenn nur „Kunden informieren" dasteht?
* Verantwortliche/r und Frist
x eine Begründung
x eine Priorität
x ein Ticketlink
! Ohne Namen und Datum ist es eine Absichtserklärung. Die Tabelle hat genau deshalb drei Spalten.

? Was bedeutet „vertagt"?
x an eine andere Abteilung abgegeben
* auf eine spätere Sitzung verschoben
x abgelehnt
x beschlossen
! *vertagen* = auf einen anderen Tag legen. Im Protokoll steht das Thema damit weiterhin offen — nicht erledigt.
```

## 2. Vorlage · Incident-Report (Post-Mortem)

Deutsche Post-Mortems sind **unpersönlich formuliert** — dieselbe Technik wie in der
[Retrospektive](#/dialogues/retrospektive). Das ist keine Höflichkeit, sondern Methode: Sobald ein
Name in der Ursache steht, hört die Suche nach der eigentlichen Ursache auf.

> **Incident-Report — Erhöhte Fehlerrate im Zahlungsdienst**
> **Datum des Vorfalls:** 12.08.2026 · **Dauer:** 14:20–14:52 Uhr (32 Minuten)
> **Schweregrad:** hoch · **Verfasser:** C. Dinh · **Stand:** 13.08.2026
>
> **Zusammenfassung**
> Zwischen 14:20 und 14:52 Uhr schlugen etwa 18 % der Zahlungsanfragen mit einem Fehler 500 fehl.
> Ursache war eine Änderung des Verbindungslimits, durch die der Verbindungspool unter Last
> erschöpft wurde. Nach einem Rollback normalisierte sich die Fehlerrate innerhalb von vier
> Minuten.
>
> **Auswirkung**
> - Etwa 1 200 fehlgeschlagene Zahlungsversuche; keine doppelten Buchungen.
> - Keine Datenverluste; alle betroffenen Vorgänge wurden erfolgreich wiederholt.
>
> **Zeitlicher Ablauf**

| Uhrzeit | Ereignis |
|---|---|
| 13:55 | Konfigurationsänderung wird ausgeliefert |
| 14:20 | Erste Alarme zur Fehlerrate |
| 14:26 | Bereitschaft übernimmt; Beobachtung: Zeitüberschreitungen im Pool |
| 14:41 | Entscheidung für ein Rollback |
| 14:48 | Rollback abgeschlossen |
| 14:52 | Fehlerrate wieder im Normalbereich |

> **Ursache**
> Das Verbindungslimit wurde von 50 auf 20 gesenkt. Bei der üblichen Mittagslast reichte der Pool
> nicht aus; wartende Anfragen liefen in eine Zeitüberschreitung. Die Änderung war fachlich
> begründet, ihre Auswirkung auf die Last wurde jedoch nicht geprüft.
>
> **Was gut lief**
> - Die Alarmierung griff innerhalb von fünf Minuten.
> - Die Entscheidung für das Rollback fiel früh, vor der vollständigen Analyse.
>
> **Was gefehlt hat**
> - Für Konfigurationsänderungen existiert kein Lasttest.
> - Der Zusammenhang zwischen Poolgröße und Antwortzeit war nicht dokumentiert.
>
> **Maßnahmen**

| Maßnahme | Verantwortlich | Frist |
|---|---|---|
| Lasttest für Konfigurationsänderungen einführen | T. Klein | 30.09. |
| Grenzwerte im Betriebshandbuch dokumentieren | C. Dinh | 05.09. |
| Alarm für Poolauslastung ergänzen | A. Weber | 20.09. |

Beachte die Formulierung der Ursache: *„Die Änderung war fachlich begründet, ihre Auswirkung wurde
jedoch nicht geprüft."* Sachlich vollständig — und ohne ein einziges *du*.

```uebung
? Wie formulierst du die Ursache blamefrei?
x Der Betrieb hätte das merken müssen.
x Das war ein klassischer Anfängerfehler.
* Die Auswirkung der Änderung auf die Last wurde nicht geprüft.
x Thomas hat vergessen, die Last zu prüfen.
! Passiv ohne Akteur. Der Inhalt bleibt vollständig, die Zuweisung fällt weg — und genau die blockiert sonst die Suche nach der systemischen Ursache.

? Warum enthält der Report eine Zeitlinie mit Uhrzeiten?
x weil es offizieller aussieht
x weil die Versicherung das verlangt
x weil sie den Ursachenabschnitt ersetzt
* weil sich daran ablesen lässt, wo Zeit verloren ging
! Zwischen erstem Alarm (14:20) und Rollback-Entscheidung (14:41) liegen 21 Minuten. Diese Lücke ist die eigentliche Erkenntnis.

? Welcher Abschnitt fehlt in vielen schlechten Reports?
* „Was gut lief"
x die Zusammenfassung
x die Auswirkung
x die Maßnahmen
! Ohne ihn liest sich jedes Post-Mortem wie eine Anklageschrift — und niemand meldet freiwillig den nächsten Vorfall.

? „Nach einem Rollback normalisierte sich die Fehlerrate." Welche Zeitform?
x Konjunktiv
* Präteritum — die Erzählzeit des Berichts
x Perfekt
x Präsens
! Berichte über Abgeschlossenes stehen im Präteritum. Das Perfekt wirkt gesprochen, das Präsens verwischt, ob es vorbei ist.

? Was gehört in „Auswirkung"?
x die Namen der Beteiligten
x die geplanten Maßnahmen
* Zahlen: wie viele Vorgänge, welcher Schaden, welche Daten
x die Vermutung über die Ursache
! Die Auswirkung entscheidet über die Priorität der Maßnahmen. Ohne Zahlen wird sie zur Meinungsfrage.
```

## 3. Vorlage · Übergabe

Drei Anlässe, ein Muster: **Stand · offene Punkte · Zugänge · Ansprechpartner.**

**(a) Übergabe vor dem Urlaub**

> **Übergabe C. Dinh — 01.–12.09.2026 · Vertretung: A. Weber**
>
> **Laufende Aufgaben**
> - *Zahlungsdienst, Anbindung Version 2.3* — Stand: umgesetzt, Abnahme steht aus. Nächster
>   Schritt: Rückmeldung von Frau Weber abwarten, dann auf Staging ausliefern. Ticket *PAY-118*.
> - *Migration 07.09.* — vorbereitet; das Rollback-Skript ist getestet. Bei Problemen:
>   Betriebshandbuch, Abschnitt „Rollback Zahlungsdienst".
>
> **Offene Punkte**
> - Antwort der Rechtsabteilung zur Datenschutzprüfung steht aus (angefragt am 14.08.).
>
> **Zugänge**
> - Alle nötigen Rechte liegen bei der Vertretung; Notfallzugang über den Bereitschaftsschlüssel.
>
> **Nicht übernommen**
> - Konzept „Bestellhistorie" — ruht bis zu meiner Rückkehr, keine Frist betroffen.
>
> **Erreichbarkeit:** in dringenden Fällen über *A. Weber*; ich lese in dieser Zeit keine Mails.

**(b) Bereitschaftsübergabe (kurz, mündlich oder im Chat)**

> *Übergabe Bereitschaft: In der Nacht keine Vorfälle. Offen ist eine erhöhte Latenz im
> Bestelldienst seit etwa 04:00 Uhr — noch unterhalb des Alarms, Beobachtung läuft. Das
> Wartungsfenster für die Datenbank ist heute 22:00 bis 24:00 Uhr angemeldet.*

**(c) Projektübergabe**

Wie (a), zusätzlich: **Historie** (welche Entscheidungen wurden warum getroffen — verlinke die
ADRs), **Risiken** und **Wissenslücken** („Was nur ich weiß"). Der letzte Punkt ist der wertvollste
und wird fast immer vergessen.

```uebung
? Welche vier Blöcke hat eine Übergabe?
x Was ich gemacht habe · Was ich nicht geschafft habe · Warum · Entschuldigung
x Aufgaben · Termine · Kosten · Risiken
x Einleitung · Hauptteil · Schluss · Anhang
* Stand · offene Punkte · Zugänge · Ansprechpartner
! Die vertretende Person muss handeln können, nicht nachvollziehen, was du getan hast.

? Warum steht „Nicht übernommen" in der Übergabe?
* damit klar ist, was liegen bleibt — und dass das in Ordnung ist
x um die Übergabe kürzer zu machen
x um Aufgaben abzugeben
x weil es Pflicht ist
! Ohne diesen Abschnitt sucht die Vertretung nach Aufgaben, die bewusst ruhen — oder übersieht, dass etwas ruht.

? Was ist der wertvollste Teil einer Projektübergabe?
x die Zugangsdaten
* die Wissenslücken — „was nur ich weiß"
x die Aufgabenliste
x die Terminübersicht
! Alles andere steht irgendwo geschrieben. Implizites Wissen verschwindet mit der Person, wenn es nicht ausdrücklich benannt wird.

? „Noch unterhalb des Alarms, Beobachtung läuft." Was heißt das?
x Es liegt ein Vorfall vor.
x Nichts ist zu tun.
* Der Wert ist auffällig, aber noch nicht kritisch; jemand schaut hin.
x Der Alarm ist ausgefallen.
! Genau diese Zwischenkategorie braucht eine Bereitschaftsübergabe: nicht „alles gut", nicht „Vorfall", sondern „im Blick behalten".
```

## 4. Kurzmeldung während eines Vorfalls

Stakeholder wollen während eines Vorfalls **drei Zeilen alle 30 Minuten**, keinen Bericht:

> *Stand 14:35: Erhöhte Fehlerrate im Zahlungsdienst seit 14:20, etwa 18 % der Anfragen betroffen.
> Ursache wird eingegrenzt, ein Rollback wird vorbereitet. Nächstes Update um 15:00 Uhr.*

Drei Teile: **was ist**, **was läuft**, **wann kommt das nächste Update**. Der dritte Teil ist der
wichtigste — er verhindert zehn Rückfragen.

```audio
Stand vierzehn Uhr fünfunddreißig: Erhöhte Fehlerrate im Zahlungsdienst seit vierzehn Uhr zwanzig, etwa achtzehn Prozent der Anfragen sind betroffen. Die Ursache wird gerade eingegrenzt, ein Rollback wird vorbereitet. Das nächste Update kommt um fünfzehn Uhr.
```

## 🏋️ Kurzübung · Schreib nach Vorlage

**Ü1.** Schreibe ein **Protokoll** deiner letzten echten Besprechung — höchstens eine halbe Seite.
**Ü2.** Schreibe einen **Incident-Report** zu einem echten Vorfall, mit Zeitlinie und blamefreier Ursache.
**Ü3.** Schreibe deine **Urlaubsübergabe** für den nächsten Urlaub.
**Ü4.** Formuliere drei **Kurzmeldungen** im Abstand von 30 Minuten für einen erfundenen Vorfall.

```spoiler
**Ü4. Musterlösung (drei Kurzmeldungen):**

> *Stand 14:35: Erhöhte Fehlerrate im Zahlungsdienst seit 14:20, ca. 18 % der Anfragen betroffen.
> Ursache wird eingegrenzt, Rollback wird vorbereitet. Nächstes Update 15:05.*
>
> *Stand 15:05: Rollback um 14:48 abgeschlossen, Fehlerrate seit 14:52 wieder im Normalbereich.
> Ursache: geänderte Poolgröße. Betroffene Zahlungen werden derzeit wiederholt. Nächstes Update
> 15:45.*
>
> *Stand 15:45: Alle 1 200 betroffenen Vorgänge wurden erfolgreich wiederholt, keine doppelten
> Buchungen. Der Vorfall ist abgeschlossen; der Incident-Report folgt bis morgen Mittag. Keine
> weiteren Updates.*

Jede Meldung endet mit dem nächsten Termin — bis auf die letzte, die ausdrücklich schließt.
„Keine weiteren Updates" ist ein eigener, wichtiger Satz.

**Ü1** Musterlösung siehe §1 — dieselbe Struktur, nur mit deinen Inhalten. Selbstkontrolle:

| Check | Frage |
|---|---|
| Kopf | Datum, Teilnehmende, Protokollant/in vollständig? |
| Diskussion | In indirekter Rede — oder behauptest du es selbst? |
| Beschluss | Passiv, ohne Namen? |
| Maßnahmen | Jede Zeile mit Verantwortlicher **und** Frist? |
| Länge | Passt es auf eine halbe Seite? Wenn nicht: Was davon war Gesprächsverlauf? |

**Ü2, Ü3** prüfst du selbst:

| Check | Frage |
|---|---|
| Ursache | Kommt darin eine Person vor? Dann umformulieren. |
| Zeitlinie | Sieht man, wo Zeit verloren ging? |
| Auswirkung | Stehen Zahlen da, keine Adjektive? |
| „Was gut lief" | Vorhanden — oder liest es sich wie eine Anklage? |
| Übergabe | Könnte jemand ohne Rückfrage an dich weiterarbeiten? |
| Wissenslücken | Steht da, was nur du weißt? |
```

---

## 🧾 Zusammenfassung · Summary

Three documents a team writes about itself, all read by strangers. A **Protokoll** records
decisions, not conversation: discussion in **indirekte Rede**, decisions in the **Passiv**
(*Es wurde beschlossen …*), and a **Maßnahme · Verantwortlich · Frist** table where every row has a
name and a date. An **Incident-Report** is deliberately impersonal — *„die Auswirkung wurde nicht
geprüft"*, never a name — and carries a timestamped **Zeitlinie**, hard numbers under
**Auswirkung**, and a **„Was gut lief"** section without which nobody reports the next incident
voluntarily. An **Übergabe** answers four things: Stand · offene Punkte · Zugänge ·
Ansprechpartner, plus the section everyone forgets — **what only you know**. And during a live
incident, three lines every thirty minutes, always ending with the time of the next update.

## 📇 Vokabel-Checkliste · Vocabulary checklist

| Deutsch | Artikel | Plural | English | VI (if hard) |
|---|---|---|---|---|
| Protokollant / Protokollantin | der / die | -anten / -antinnen | minute-taker | người ghi biên bản |
| Beschluss | der | Beschlüsse | resolution | nghị quyết |
| Vorfall | der | Vorfälle | incident | sự cố |
| Zeitlicher Ablauf | der | Abläufe | timeline | dòng thời gian |
| Auswirkung | die | Auswirkungen | impact | tác động |
| Übergabe | die | Übergaben | handover | bàn giao |
| Bereitschaftsdienst | der | -dienste | on-call duty | trực hệ thống |
| Betriebshandbuch | das | -handbücher | runbook, ops manual | sổ tay vận hành |
| vertagen | — | — | to postpone to a later session | hoãn sang buổi sau |
| erschöpfen (sich) | — | — | to be exhausted (a pool) | cạn kiệt |

→ Drill these in [Flashcards](#/@flashcards).

## 🗣️ Sprechübung · Speaking practice

1. Sprich die **Kurzmeldung** aus §4 laut — mit Uhrzeiten als Wörtern.
2. Lies deine Bereitschaftsübergabe laut: keine Vorfälle, ein Beobachtungspunkt, ein Termin.
3. Berichte einen echten Vorfall in **fünf Sätzen im Passiv**, ohne Namen.

## 📝 Hausaufgabe · Homework

- [ ] **Ü1–Ü4** schreiben.
- [ ] Das nächste echte Protokoll auf Deutsch führen.
- [ ] Einen alten englischen Post-Mortem-Text auf Deutsch und blamefrei umschreiben.
- [ ] Die Übergabe für den nächsten Urlaub vorbereiten und ablegen.
- [ ] [Phase 4 · Grammar · Übungsteil](#/phase-4/grammar-uebungen) Block B14–B17 (Passiv) wiederholen.

## 📚 Empfohlene Ressourcen · Recommended resources

- **Theorie:** [Phase 4 · Grammar](#/phase-4/grammar) (Passiv, indirekte Rede) · [Phase 4 · Writing](#/phase-4/writing).
- **Gesprochen:** [Dialog · Deployment-Notfall](#/dialogues/deployment-notfall) · [Dialog · Production Incident](#/dialogues/incident) · [Dialog · Retrospektive](#/dialogues/retrospektive).
- **Weitere Vorlagen:** [E-Mail-Baukasten](#/templates/emails) · [Ticket & Akzeptanzkriterien](#/templates/tickets) · [PR & Review-Kommentare](#/templates/pull-requests).
- **Übergabe & Urlaub:** [Dialog · Krankmeldung & Urlaub](#/dialogues/krankmeldung).
