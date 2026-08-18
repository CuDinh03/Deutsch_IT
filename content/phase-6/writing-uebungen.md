# Phase 6 · Writing — Übungsteil · Workbook

> **Level:** C1 · **Focus:** asynchrone Statusmeldung, blamefreies Postmortem, schriftliches Feedback, Vorstellung und Abschied · **Time:** ~3 h
> _After this workbook your short German texts survive without you in the room — which is the only thing async writing has to do._

Das ist der Übungsteil zu [Phase 6 · Writing](#/phase-6/writing). Der Großteil deines geschriebenen
Deutschen im Job ist **kurz und folgenreich**: ein Statusposting, auf das dein Team handelt, ein
Postmortem, das die halbe Firma liest, eine Rückmeldung, an die sich jemand ein Jahr später erinnert.
Bei diesen Texten entscheidet die **Struktur**, nicht der schöne Satz.

**How it works:** Block A und B werden benotet. Block C und D sind Schreibaufgaben mit
Musterlösungen am Ende.

---

## 🏋️ Übungsteil · Workbook

### A. Erkennen — Struktur und Ton

**A1–A4 · Asynchrone Statusmeldung.**

```uebung
? Was muss eine asynchrone Meldung leisten?
* selbsttragend sein — die lesende Person darf keine Rückfrage brauchen
x möglichst kurz sein
x möglichst höflich sein
x den ganzen Arbeitstag dokumentieren
! Async heißt: Niemand kann nachfragen, ohne einen halben Tag zu verlieren. Alles Nötige steht im Text oder es fehlt.

? Welche Meldung ist die beste?
* Update Zahlungsdienst: Fix ist deployt und läuft stabil in Prod, Fehlerrate wieder normal. Offen: Alerting justiere ich morgen. Kein Handeln nötig.
x Fix ist raus.
x Ich habe heute am Zahlungsdienst gearbeitet und einiges geschafft.
x Melde mich später nochmal dazu.
! Zustand, Detail, offener Punkt, explizite Aussage über Handlungsbedarf. Die anderen drei erzeugen genau die Rückfrage, die async teuer ist.

? Welcher Satz gehört ans Ende einer Statusmeldung?
* Kein Handeln nötig. / Ich brauche von euch: …
x Danke fürs Lesen.
x Bei Fragen meldet euch.
x Mehr dazu bald.
! Der **Ask** ist der wichtigste Teil. „Bei Fragen meldet euch“ schiebt die Arbeit zurück zur lesenden Person.

? Wo steht der Zustand?
* am Anfang, im ersten Satz
x am Ende, nach der Erklärung
x im Betreff, sonst nirgends
x das ist egal
! Erst der Zustand, dann die Details. Wer chronologisch erzählt, zwingt alle, bis zum Ende zu lesen.
```

**A5–A8 · Das Postmortem.**

```uebung
? Welche fünf Abschnitte hat das Postmortem-Skelett — in dieser Reihenfolge?
* Zusammenfassung · Auswirkung · Zeitverlauf · Ursache · Maßnahmen
x Ursache · Zeitverlauf · Auswirkung · Maßnahmen · Zusammenfassung
x Was passiert ist · Wer schuld war · Was wir tun
x Einleitung · Hauptteil · Schluss
! Ergebnis zuerst, Analyse danach. Die meisten Lesenden hören nach der Auswirkung auf — und sollen genau dort schon das Wichtigste haben.

? Welche Ursachenformulierung ist blamefrei?
* Die Auswirkung der Konfigurationsänderung auf die Last wurde nicht geprüft.
x Thomas hat vergessen, die Last zu prüfen.
x Das Team war unaufmerksam.
x Der Fehler war vermeidbar.
! Passiv ohne Akteur. Der Inhalt bleibt vollständig — nur die Zuweisung fällt weg, und genau die beendet sonst die Suche nach der systemischen Ursache.

? Womit gibst du im Postmortem eine fremde Aussage wieder?
* Konjunktiv I: „Der Kollege gab an, das Alerting habe nicht ausgelöst.“
x Indikativ: „Das Alerting hat nicht ausgelöst.“
x Konjunktiv II: „Das Alerting hätte nicht ausgelöst.“
x direkte Rede mit Anführungszeichen
! Konjunktiv I trennt sauber, was du festgestellt hast, von dem, was dir berichtet wurde. Siehe [Grammar · Übungsteil](#/phase-6/grammar-uebungen).

? Was gehört in „Auswirkung“?
* Zahlen: wie viele Nutzer, wie lange, welcher Schaden
x die Vermutung zur Ursache
x die Namen der Beteiligten
x die geplanten Maßnahmen
! Die Auswirkung entscheidet über die Priorität der Maßnahmen. Ohne Zahlen wird sie zur Meinungsfrage.
```

**A9–A12 · Feedback, Vorstellung, Abschied.**

```uebung
? Welches schriftliche Lob wirkt?
* Dein Refactoring des Auth-Moduls war sehr sauber — besonders die Tests.
x Guter Job!
x Weiter so!
x Du machst das super.
! Konkretes Lob ist wiederholbar, allgemeines ist Höflichkeit. Nur das erste sagt der Person, was sie beibehalten soll.

? Wie viele Kritikpunkte gehören in eine schriftliche Rückmeldung?
* einer, nach vorne gerichtet
x alle, die man gesammelt hat
x mindestens drei, damit es ausgewogen wirkt
x keiner, Kritik gehört ins Gespräch
! Ein Punkt wird umgesetzt, fünf werden verwaltet. Und Schriftliches überlebt den Moment — was du schreibst, liest die Person eventuell mehrfach.

? Was gehört in eine Vorstellungsnachricht?
* Name, Rolle, ein persönlicher Satz, eine Einladung zum Kontakt
x der komplette Lebenslauf
x nur der Name
x deine Gehaltsstufe
! Kurz, warm, im Register des Teams (meist du). Der letzte Teil ist der wichtigste: Eine gute Vorstellung **lädt ein**.

? Was gehört NICHT in eine Abschiedsnachricht?
* Kritik an der Firma oder am Team
x Dank
x eine Kontaktmöglichkeit
x ein guter Wunsch
! Die Abschiedsmail bleibt in vielen Postfächern liegen — und die Branche ist kleiner, als sie sich anfühlt.
```

---

### B. Anwenden — Bausteine bauen

**B1–B5 · Statusmeldung.**

```uebung
? Zustand zuerst: „Update Zahlungsdienst: Der Fix ist ___ und läuft stabil in Prod.“
= deployt | ausgeliefert
! *deployt* ist Standard, *ausgeliefert* die deutschere Variante. Beide sind üblich.

? Offener Punkt markieren: „___: Das Alerting justiere ich morgen.“
= Offen
! Ein Wort als Marker spart der lesenden Person das Suchen. Ebenso üblich: *Noch offen:*

? Handlungsbedarf verneinen: „___ nötig.“
= Kein Handeln | Keine Aktion
! Ausdrücklich zu sagen, dass **nichts** zu tun ist, ist genauso wertvoll wie eine Bitte. Ohne den Satz prüfen fünf Leute, ob sie gemeint sind.

? Bitte formulieren: „Ich ___ von euch: eine Freigabe bis morgen Mittag.“
= brauche
! Direkt und klar. Im deutschen Arbeitskontext ist das nicht unhöflich, sondern hilfreich.

? Was fehlt: „Fix ist raus, läuft.“
= der offene Punkt und der Handlungsbedarf | der Handlungsbedarf | ob etwas zu tun ist
! Zwei Wörter Zustand, null Kontext. Wer das liest, weiß nicht, ob er reagieren muss.
```

**B6–B11 · Postmortem-Sätze.**

```uebung
? Zusammenfassung in einem Satz: „Zwischen 14:20 und 14:52 Uhr ___ etwa 18 Prozent der Zahlungsanfragen fehl.“
= schlugen
! *fehlschlagen* ist trennbar und stark: *schlug fehl, ist fehlgeschlagen*. Präteritum ist die Erzählzeit des Berichts.

? Auswirkung mit Zahl: „Betroffen waren rund 1 200 ___ Zahlungsversuche.“
= fehlgeschlagene
! Partizip II als Adjektiv, mit Endung. Zahlen gehören in diesen Abschnitt, Adjektive wie *viele* nicht.

? Ursache blamefrei: „Die Auswirkung der Änderung auf die Last ___ nicht ___.“
= wurde … geprüft | wurde geprüft
! Vorgangspassiv im Präteritum, ohne Akteur — die Standardform der Ursachenzeile.

? Fremde Aussage: „Der Kollege gab an, das Alerting ___ nicht ausgelöst.“
= habe
! Konjunktiv I. Mit *hat* würdest du die Aussage zu deiner eigenen Feststellung machen.

? Maßnahme mit Verantwortlichem: „Lasttest für Konfigurationsänderungen einführen — ___: T. Klein, bis 30.09.“
= Verantwortlich | verantwortlich
! Ohne Namen und Datum ist eine Maßnahme eine Absichtserklärung. Dieselbe Regel wie im Protokoll.

? Was gehört in den „Zeitverlauf“?
* Uhrzeiten mit Ereignis, in chronologischer Reihenfolge
x die Ursache
x die Maßnahmen
x eine Erklärung, warum es passiert ist
! An der Zeitlinie liest man ab, wo Zeit verloren ging — meist zwischen erstem Alarm und Entscheidung. Das ist oft die eigentliche Erkenntnis.
```

**B12–B16 · Feedback schriftlich.**

```uebung
? Konkret loben: statt „Gute Arbeit.“ →
= Dein Refactoring des Auth-Moduls war sehr sauber, besonders die Tests | Dein Refactoring war sehr sauber, besonders die Tests
! Was genau, und woran man es sieht. Zwei Bestandteile, ein Satz.

? Kritik nach vorne richten: „Das Review lag zu lange.“ → als Ich-Botschaft mit Wunsch
= Mir ist aufgefallen, dass das Review lange lag — können wir uns das nächste Mal früher abstimmen | Mir ist aufgefallen, dass das Review lange lag. Können wir uns das nächste Mal früher abstimmen
! Beobachtung plus Vorschlag. Kein *du*, keine Bewertung — dieselbe Technik wie in der [Retrospektive](#/dialogues/retrospektive).

? Welche Reihenfolge hat gute schriftliche Rückmeldung?
* konkretes Lob → ein Punkt für nächstes Mal
x Kritik → Lob → Kritik
x nur Kritik, das spart Zeit
x nur Lob, Kritik gehört ins Gespräch
! Das Sandwich mit Kritik in der Mitte gilt im deutschen Berufskontext als durchschaubar. Ein echtes Lob plus ein Punkt wirkt.

? Was macht schriftliches Feedback riskanter als mündliches?
* Es überlebt den Moment und wird ohne deinen Tonfall gelesen.
x Es ist weniger verbindlich.
x Es wird selten gelesen.
x Es ist unhöflich.
! Deshalb: konkret, verhaltensbezogen, ein Punkt. Ironie und Emojis tragen die Nuance nicht zuverlässig.

? „Danke für deinen Einsatz beim Release! Ein Punkt für nächstes Mal: ___.“
= Lass uns die Doku direkt mitschreiben | Lass uns die Doku direkt mitschreiben.
! *Ein Punkt für nächstes Mal* ist die Standardformel: Sie begrenzt die Kritik ausdrücklich auf eine Sache und richtet sie in die Zukunft.
```

**B17–B20 · Vorstellung und Abschied.**

```uebung
? Vorstellung, Einstieg: „Hallo zusammen, ich bin Huy, seit heute neu ___ Backend-Team.“
= im
! *in dem* → *im* + Dativ. Ort, keine Richtung.

? Vorstellung, Einladung: „Sprecht mich gern ___ an!“
= jederzeit
! Der Satz, der aus einer Vorstellung eine Einladung macht. Ohne ihn ist es eine Bekanntmachung.

? Abschied: „Liebe Kolleginnen und Kollegen, heute ist mein ___ Tag.“
= letzter
! Adjektivendung nach Possessivpronomen im Nominativ maskulin: *mein letzter Tag*.

? Welches Register haben Vorstellung und Abschied?
* das des Teams — meist du, warm und kurz
x immer formell mit Sie
x immer sehr ausführlich
x das der Personalabteilung
! Diese beiden Nachrichten liest das ganze Team. Sie im falschen Register zu schreiben, fällt sofort auf — im Zweifel spiegelst du, wie im Kanal geschrieben wird.
```

---

### C. Produzieren — selbst schreiben

**C1.** Schreibe **drei selbsttragende Statusmeldungen**: ein Deploy, ein Blocker, ein Abschluss. Jede mit explizitem Handlungsbedarf.
**C2.** Schreibe ein vollständiges **Postmortem** zu einem echten oder erfundenen Vorfall, auf dem Fünf-Abschnitte-Skelett.
**C3.** Schreibe die Ursachenzeile deines Postmortems **dreimal um**, bis kein Mensch mehr darin vorkommt.
**C4.** Schreibe **zwei Rückmeldungen**: eine reine Lobnachricht, eine mit einem Punkt für nächstes Mal.
**C5.** Schreibe deine **Vorstellungsnachricht** und eine **Abschiedsnachricht**, je vier bis fünf Zeilen.
**C6.** Übersetze: *The colleague reported that the alerting had not triggered; the impact on load had not been tested beforehand.*
**C7.** Nimm eine deiner echten englischen Statusmeldungen und schreibe sie auf Deutsch neu.

---

### D. Transfer — deine echte Arbeit

**D1.** Schreibe eine Woche lang **alle Statusmeldungen auf Deutsch** — auch wenn der Kanal englisch läuft.
**D2.** Schreibe das nächste echte **Postmortem auf Deutsch** und lass es gegenlesen.
**D3.** Gib in dieser Woche **eine schriftliche Rückmeldung auf Deutsch** — konkret, ein Punkt.
**D4.** Lege dir eine **Vorlage** für Statusmeldung und Postmortem an, die du in fünf Minuten füllen kannst.

```audio
Kurzer Statusbericht: Der Fix ist live, die Fehlerrate ist normal, offene Punkte gibt es keine. Das Postmortem schreibe ich bis morgen, die Maßnahmen ordne ich den jeweiligen Kollegen zu.
```

---

## ✅ Musterlösungen für C und D

```spoiler
**C6.** *Der Kollege gab an, das Alerting habe nicht ausgelöst; die Auswirkung auf die Last sei
vorher nicht geprüft worden.*
Zweimal Konjunktiv I, weil beides Bericht ist. Der zweite Teil steht zusätzlich im Passiv, damit
kein Name auftaucht — genau die Kombination, die ein deutsches Postmortem ausmacht.

**C1. Musterlösung (drei Statusmeldungen):**

> **Deploy:** *Update Zahlungsdienst: Der Fix ist deployt und läuft seit 11:40 stabil in Prod, die
> Fehlerrate ist wieder im Normalbereich. Offen: Das Alerting justiere ich morgen früh. Kein
> Handeln nötig.*

> **Blocker:** *Status Bestellhistorie: Ich hänge seit gestern am Zugriff auf die Testumgebung —
> ohne den komme ich nicht weiter. Ich brauche von euch: eine Freigabe durch das Plattform-Team,
> idealerweise bis morgen Mittag. Alles andere im Ticket läuft.*

> **Abschluss:** *BES-118 ist fertig und auf Staging abgenommen. Alle drei Akzeptanzkriterien sind
> erfüllt, der Test für Sonderzeichen ist ergänzt. Nicht enthalten war der PDF-Export — dafür habe
> ich BES-121 angelegt. Bitte um Abnahme durch das Produkt.*

Alle drei nennen den Zustand zuerst und enden mit einer klaren Aussage über den Handlungsbedarf.

**C2. Musterlösung (Postmortem, gekürzt):**

> **Zusammenfassung.** Zwischen 14:20 und 14:52 Uhr schlugen etwa 18 Prozent der Zahlungsanfragen
> mit einem Fehler 500 fehl. Nach einem Rollback normalisierte sich die Fehlerrate innerhalb von
> vier Minuten.
>
> **Auswirkung.** Rund 1 200 fehlgeschlagene Zahlungsversuche; keine doppelten Buchungen, keine
> Datenverluste. Alle betroffenen Vorgänge wurden erfolgreich wiederholt.
>
> **Zeitverlauf.** 13:55 Konfigurationsänderung ausgeliefert · 14:20 erste Alarme · 14:26
> Bereitschaft übernimmt, Beobachtung: Zeitüberschreitungen im Verbindungspool · 14:41 Entscheidung
> für Rollback · 14:48 Rollback abgeschlossen · 14:52 Fehlerrate normal.
>
> **Ursache.** Das Verbindungslimit wurde von 50 auf 20 gesenkt. Bei üblicher Mittagslast reichte
> der Pool nicht aus. Die Änderung war fachlich begründet; ihre Auswirkung auf die Last wurde nicht
> geprüft. Der Kollege aus dem Betrieb gab an, das Alerting für die Poolauslastung habe nicht
> ausgelöst.
>
> **Maßnahmen.** Lasttest für Konfigurationsänderungen einführen (T. Klein, 30.09.) · Grenzwerte im
> Betriebshandbuch dokumentieren (C. Dinh, 05.09.) · Alarm für Poolauslastung ergänzen (A. Weber,
> 20.09.).

Zwischen erstem Alarm (14:20) und Rollback-Entscheidung (14:41) liegen 21 Minuten. Diese Lücke ist
die eigentliche Erkenntnis — und sie ist nur sichtbar, weil der Zeitverlauf Uhrzeiten hat.

**C3. Musterlösung (dreimal umgeschrieben):**

| Fassung | Satz |
|---|---|
| 1 | *Thomas hat vergessen, die Last zu prüfen.* |
| 2 | *Die Last wurde vor der Änderung nicht geprüft.* |
| 3 | *Für Konfigurationsänderungen existiert kein Lasttest; die Auswirkung wurde daher nicht geprüft.* |

Fassung 3 ist die beste, weil sie vom Menschen zum **System** wechselt. Aus einem Versäumnis wird
eine fehlende Absicherung — und daraus lässt sich eine Maßnahme ableiten.

**C4. Musterlösung (zwei Rückmeldungen):**
*Lob: „Danke für das Review gestern — die Anmerkung zum Verbindungspool hat uns vermutlich einen
Vorfall erspart. Besonders hilfreich fand ich, dass du gleich ein Beispiel dazugeschrieben hast."*
*Mit einem Punkt: „Danke für deinen Einsatz beim Release, das lief sehr rund. Ein Punkt für nächstes
Mal: Lass uns die Doku direkt mitschreiben — im Nachhinein hat sie uns zwei Tage gekostet."*

**C5. Musterlösung (Vorstellung und Abschied):**
*Vorstellung: „Hallo zusammen, ich bin Cu und seit heute neu im Backend-Team. Ich komme aus Vietnam
und arbeite hauptsächlich mit Java und Spring. In den ersten Wochen werde ich viel fragen — sprecht
mich gern jederzeit an, ich bin per du."*
*Abschied: „Liebe Kolleginnen und Kollegen, heute ist mein letzter Tag. Danke für die gute
Zusammenarbeit und besonders für die Geduld in meinen ersten Monaten. Ihr erreicht mich weiterhin
unter … — meldet euch gern. Alles Gute euch!"*

**C7** und **D1–D4** prüfst du selbst:

| Check | Frage |
|---|---|
| Selbsttragend | Bräuchte jemand eine Rückfrage, um zu handeln? |
| Zustand | Steht er im ersten Satz? |
| Ask | Ist ausdrücklich gesagt, ob etwas zu tun ist? |
| Postmortem | Kommt in der Ursache ein Mensch vor? Dann umschreiben. |
| Zeitverlauf | Sieht man, wo Zeit verloren ging? |
| Feedback | Ein Punkt — oder eine Liste? |
| Register | Vorstellung und Abschied im Ton des Kanals? |
```

---

## 🧾 Zusammenfassung · Summary

Workplace writing is judged on structure, not elegance. An **async status** must be self-supporting:
state first, then detail, then an explicit ask — and *„Kein Handeln nötig"* is as valuable as a
request, because it stops five people wondering whether they are meant. A **Postmortem** runs
Zusammenfassung → Auswirkung → Zeitverlauf → Ursache → Maßnahmen, with numbers under Auswirkung,
timestamps under Zeitverlauf (the gap between first alarm and decision is usually the real finding),
an actorless passive in the Ursache, **Konjunktiv I** wherever you relay what someone reported, and a
name plus a date on every Maßnahme. **Written feedback** outlives the moment and arrives without
your tone, so make it concrete, behaviour-focused and limited to **one** forward-looking point. And
the two messages the whole team reads — **Vorstellung** and **Abschied** — stay short, warm, in the
channel's register, and end by inviting contact.

## 📇 Vokabel-Checkliste · Vocabulary checklist

| Deutsch | Artikel | Plural | English | VI (if hard) |
|---|---|---|---|---|
| Statusmeldung | die | Statusmeldungen | status update | báo cáo trạng thái |
| Zeitverlauf | der | Zeitverläufe | timeline | dòng thời gian |
| Handlungsbedarf | der | — | need for action | việc cần làm |
| Grenzwert | der | Grenzwerte | threshold | ngưỡng |
| Verbindungspool | der | -pools | connection pool | nhóm kết nối |
| fehlschlagen | — | — | to fail | thất bại |
| justieren | — | — | to adjust, fine-tune | tinh chỉnh |
| ableiten | — | — | to derive | rút ra |
| mitschreiben | — | — | to write along, document as you go | ghi song song |
| gegenlesen | — | — | to proofread | đọc soát |

→ Drill these in [Flashcards](#/@flashcards).

## 📝 Hausaufgabe · Homework

- [ ] Block **A und B** komplett, Ziel ≥ 80 %.
- [ ] **C2** — ein vollständiges Postmortem auf dem Fünf-Abschnitte-Skelett.
- [ ] **C3** — die Ursachenzeile dreimal umschreiben, bis kein Mensch mehr vorkommt.
- [ ] **D1** — eine Woche lang alle Statusmeldungen auf Deutsch.
- [ ] **D4** — zwei Vorlagen anlegen: Statusmeldung und Postmortem.

## 📚 Empfohlene Ressourcen · Recommended resources

- **Vorlagen:** [Protokoll, Incident-Report & Übergabe](#/templates/protokoll-incident) · [E-Mail-Baukasten](#/templates/emails).
- **Register:** [Phase 4 · Writing](#/phase-4/writing) und der [Übungsteil](#/phase-4/writing-uebungen).
- **Blamefrei formulieren:** [Dialogue · Retrospektive](#/dialogues/retrospektive) · [Deployment-Notfall](#/dialogues/deployment-notfall).
- **Zurück zur Theorie:** [Phase 6 · Writing](#/phase-6/writing).
- **Weiter:** [Phase 6 · Plan](#/phase-6/plan) und [Phase 6 · Assessment](#/phase-6/assessment).
