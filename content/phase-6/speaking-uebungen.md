# Phase 6 · Speaking — Übungsteil · Workbook

> **Level:** C1 · **Focus:** Daily, Code-Review, Retro, Incident-Call, Smalltalk und Widerspruch · **Time:** ~3 h
> _After this workbook the five conversations that fill an engineer's week run on autopilot — including the one where you disagree._

Das ist der Übungsteil zu [Phase 6 · Speaking](#/phase-6/speaking). Für große Meetings hast du
Phase 4. Phase 6 macht die **kleinen, täglichen, wiederkehrenden** Gespräche automatisch — die,
für die niemand Folien baut und trotzdem alle deine Sprache beurteilen.

**How it works:** Block A und B werden benotet. Block C und D sind Sprechaufgaben — nimm dich auf,
das ist der eigentliche Übungsteil.

---

## 🧰 Redemittel-Baukasten für die Woche

| Situation | Redemittel |
|---|---|
| Daily eröffnen | „Von meiner Seite: …“ · „Bei mir kurz: …“ |
| Gestern | „Gestern habe ich … abgeschlossen.“ |
| Heute | „Heute nehme ich mir … vor.“ |
| Blocker | „Ich hänge an … “ · „Ich bin blockiert, weil …“ |
| Hilfe erbitten | „Kann mir jemand bei … helfen?“ |
| Weitergeben | „Ich geb weiter an …“ |
| Review: Lob zuerst | „Sieht insgesamt gut aus!“ |
| Review: Kleinigkeit | „Eine Kleinigkeit: Könntest du … noch …?“ |
| Review: Alternative | „Hier würde ich es anders lösen — was hältst du von …?“ |
| Review annehmen | „Guter Punkt, das passe ich an.“ |
| Retro: positiv | „Gut lief, dass wir …“ |
| Retro: negativ | „Nicht so gut: … hat sich gestaut.“ |
| Retro: Vorschlag | „Vorschlag: eine feste Review-Zeit am Vormittag.“ |
| Incident: Stand | „Kurzer Stand: … ist seit … gestört.“ |
| Incident: Auswirkung | „Rund zwanzig Prozent der Nutzer sind betroffen.“ |
| Incident: nächster Schritt | „Ich habe … zurückgerollt und beobachte die Fehlerrate.“ |
| Incident: Takt | „Ich melde mich in zehn Minuten wieder.“ |
| Smalltalk öffnen | „Na, schönes Wochenende gehabt?“ · „Und, alles gut bei dir?“ |
| Smalltalk schließen | „So, ich muss weiter — bis später!“ |
| Widerspruch weich | „Da bin ich anderer Meinung, und zwar …“ |
| Widerspruch mit Anerkennung | „Ich verstehe den Punkt, aber …“ |
| Alternative anbieten | „Wie wäre es, wenn wir stattdessen …?“ |
| Vertagen | „Lass uns das offline klären.“ |

---

## 🏋️ Übungsteil · Workbook

### A. Erkennen — gute und schwache Beiträge

**A1–A4 · Das Daily.**

```uebung
? Welche drei Beats hat ein Daily-Update?
x was ich mache · warum · wie lange
x Begrüßung · Update · Frage
* gestern · heute · Blocker
x Problem · Ursache · Lösung
! Drei feste Slots, dreißig Sekunden. Wer erzählt, statt zu berichten, kostet zehn Leuten Zeit.

? Welches Update ist das beste?
x Ich habe an verschiedenen Sachen gearbeitet und mache heute weiter.
x Also, es war ziemlich kompliziert gestern, weil das Framework …
x Bei mir gibt's nichts Neues.
* Gestern habe ich den Login-Service refaktoriert. Heute nehme ich mir das Caching vor. Blocker habe ich keine.
! Konkret, drei Beats, ohne Umschweife. „Nichts Neues“ ist bei mehreren Tagen Arbeit auch eine Information — nur keine nützliche.

? Du steckst seit gestern fest. Was sagst du im Daily?
* Ich hänge am OAuth-Refresh — kann mir da jemand nach dem Daily kurz helfen?
x Nichts Neues.
x Es läuft alles gut.
x Ich schaffe das schon irgendwie.
! Blocker früh nennen ist im deutschen Team kein Eingeständnis, sondern Pflicht. Wer drei Tage still festhängt, verliert mehr Ansehen als wer fragt.

? Wie lang sollte ein Daily-Beitrag sein?
x fünf Sekunden
* etwa 30 Sekunden
x zwei bis drei Minuten
x so lang wie nötig
! Bei acht Leuten sind 30 Sekunden schon vier Minuten. Details werden nach dem Daily zu zweit geklärt.
```

**A5–A8 · Code-Review.**

```uebung
? Welcher Review-Kommentar ist kollegial formuliert?
x Warum so kompliziert?
x Fehlt.
* Hier würde ich es anders lösen — was hältst du von einem Repository?
x Das ist falsch.
! Alternative plus Rückfrage. Die anderen drei sind inhaltlich vielleicht richtig, lassen aber keinen Antwortraum.

? Wie beginnt ein deutsches Review idealerweise?
x direkt mit dem größten Problem
x mit einer Entschuldigung
x mit einer Frage nach dem Zeitplan
* mit dem, was gut ist — dann die Kleinigkeit
! „Sieht insgesamt gut aus! Eine Kleinigkeit: …“ ist die Standardform. Das Lob ist keine Höflichkeitsfloskel, sondern die Kalibrierung: Es sagt, wie ernst die Kritik danach gemeint ist.

? Wie nimmst du Kritik im Review an?
= Guter Punkt, das passe ich an | Guter Punkt, das ändere ich | Stimmt, das passe ich an
! Annehmen statt verteidigen. Wer jedes Mal erklärt, warum es so kommen musste, bekommt beim nächsten Mal weniger Rückmeldung.

? Welche Rolle spielen Modalpartikeln im Review?
* Sie mildern die Direktheit: „Geht das vielleicht auch einfacher?“
x Sie gehören nicht in Reviews.
x Sie ersetzen die Begründung.
x Sie machen den Kommentar verbindlicher.
! *auch, noch, vielleicht, mal* nehmen einer schriftlichen Anmerkung die Schärfe — siehe [Grammar · Übungsteil](#/phase-6/grammar-uebungen).
```

**A9–A12 · Retro, Incident, Smalltalk.**

```uebung
? Welche drei Spalten hat eine Retro?
x Problem · Schuld · Lösung
* was lief gut · was lief nicht so gut · was nehmen wir uns vor
x Aufgaben · Aufwand · Termin
x Lob · Kritik · Lob
! Die dritte Spalte ist die entscheidende: Ohne Maßnahme war es eine Aussprache, keine Retro.

? Was sagst du zuerst in einem Incident-Call?
x eine Entschuldigung
x wer den Fehler verursacht hat
* den Stand: was ist gestört, seit wann, wie viele Nutzer betroffen
x deine Vermutung zur Ursache
! Beobachtung vor Interpretation. Rohdaten geben allen anderen die Möglichkeit, selbst zu denken — dieselbe Regel wie im [Deployment-Notfall](#/dialogues/deployment-notfall).

? Welche Smalltalk-Themen sind sicher? (mehrere richtig)
* das Wetter
* Urlaub und Reisen
* Kaffee und Essen
x Gehalt
x Politik
* das Wochenende
! Gehalt und Politik sind im deutschen Büro tabu genug, dass ihr Ansprechen auffällt. Alles andere trägt problemlos fünf Minuten.

? Wie beendest du Smalltalk höflich?
= So, ich muss weiter — bis später | Ich muss weiter, bis später | So, ich muss dann mal weiter
! Ein angekündigter Abschluss ist normal und wird nicht als Desinteresse gelesen. Wortlos weggehen dagegen schon.
```

---

### B. Anwenden — Beiträge bauen

**B1–B5 · Daily-Sätze.**

```uebung
? Beat 1: „___ habe ich den Login-Service refaktoriert.“
= Gestern
! Zeitangabe im Vorfeld, Verb an Position 2. Das ist die natürlichste Wortstellung fürs Daily.

? Beat 2: „Heute ___ ich mir das Caching ___.“
= nehme … vor | nehme vor
! *sich etwas vornehmen* — trennbar, mit Dativ-Reflexivpronomen: *ich nehme mir … vor*.

? Beat 3, kein Blocker: „Blocker habe ich ___.“
= keine
! *der Blocker*, Plural *die Blocker*. Auch üblich: *Blocker gibt es keine.*

? Blocker melden: „Ich ___ am OAuth-Refresh.“
= hänge
! *an etwas hängen* = feststecken. Umgangssprachlich, im Daily aber Standard.

? Weitergeben: „Ich ___ weiter an Anna.“
= gebe | geb
! *weitergeben* trennbar. Im gesprochenen Daily wird das *-e* oft verschluckt: *ich geb weiter*.
```

**B6–B11 · Hart → kollegial (Code-Review).**

```uebung
? „Das ist falsch.“ → kollegial mit Alternative
= Hier würde ich es anders lösen — was hältst du von | Hier würde ich es anders lösen | Das würde ich anders lösen — was hältst du davon
! Konjunktiv II plus Rückfrage. Die Kritik bleibt, der Antwortraum entsteht.

? „Warum so kompliziert?“ → kollegial
= Geht das vielleicht auch einfacher | Ginge das vielleicht auch einfacher
! *vielleicht* und *auch* nehmen die Schärfe. Aus dem Vorwurf wird eine echte Frage.

? „Fehlt.“ → kollegial
= Hier fehlt noch ein Test, oder | Hier fehlt noch ein Test
! Das angehängte *oder?* macht aus der Feststellung eine Rückfrage — sehr verbreitet im deutschen Review.

? Lob konkret: statt „Guter PR.“ →
= Sieht insgesamt gut aus, besonders die Tests | Sieht insgesamt gut aus | Besonders die Tests sehen gut aus
! Konkretes Lob ist wiederholbar, allgemeines ist Höflichkeit. Nur das erste ändert Verhalten.

? Kritik als Frage: „Der Edge-Case ist nicht abgefangen.“ → freundlicher
= Könntest du den Edge-Case noch abfangen | Könntest du den Edge-Case noch abfangen?
! *noch* signalisiert: kleine Ergänzung, kein grundsätzliches Problem.

? Wie viele Hauptkritikpunkte pro Review sind sinnvoll?
* ein bis drei, klar priorisiert
x alle, die man findet
x keiner, wenn es grundsätzlich läuft
x nur einer, immer
! Eine Kommentarflut wirkt gleich dringend und lähmt. Kleinigkeiten bündelt man oder markiert sie ausdrücklich als solche.
```

**B12–B15 · Retro und Incident.**

```uebung
? Retro, positiv: „Gut lief, ___ wir früh deployt haben.“
= dass
! *Gut lief, dass …* — Nebensatz mit Verb am Ende. Kurz und protokollreif.

? Retro, negativ ohne Schuldzuweisung: „Nicht so gut: Die Reviews haben sich ___.“
= gestaut
! *sich stauen* beschreibt einen Zustand, keine Person. Genau das ist die Technik — siehe [Dialogue · Retrospektive](#/dialogues/retrospektive).

? Incident, Stand: „Kurzer Stand: Der Checkout ist ___ 14:12 gestört.“
= seit
! *seit* + Dativ + **Präsens**: *ist gestört*, nicht *war gestört*. Der häufigste Zeitfehler genau in dieser Situation.

? Incident, Takt: „Ich melde mich ___ zehn Minuten wieder.“
= in
! Ein angekündigter nächster Termin verhindert zehn Rückfragen. Ohne ihn ruft jemand nach drei Minuten an.
```

**B16–B19 · Widerspruch auf der Sachebene.**

```uebung
? Welcher Widerspruch ist der stärkste?
x Macht doch, was ihr wollt.
* Ich sehe das etwas anders — aus Performance-Sicht wäre Caching besser. Können wir das kurz durchgehen?
x Das funktioniert nicht.
x Nein.
! Meinung, Begründung, Angebot zum Weiterreden. Die anderen drei schließen das Gespräch, statt es zu öffnen.

? Zuerst anerkennen, dann einschränken: „Ich ___ den Punkt, aber langfristig wäre eine Queue robuster.“
= verstehe
! *Ich verstehe den Punkt, aber …* ist das meistgenutzte Widerspruchsmuster im deutschen Fachgespräch.

? Etwas aus der Runde nehmen: „Lass uns das ___ klären.“
= offline
! Anglizismus, aber völlig etabliert. Er beendet ein Nebenthema, ohne es abzuwerten.

? Ist Widerspruch in einem deutschen Team riskant?
x Nur unter Kollegen gleicher Stufe.
x Nur schriftlich.
* Nein — begründeter Widerspruch gilt als Beteiligung, nicht als Angriff.
x Ja, man sollte der Führungskraft nie widersprechen.
! Wer nie widerspricht, wirkt eher unbeteiligt als höflich. Entscheidend ist die Sachebene: die Sache kritisieren, die Person respektieren.
```

---

### C. Produzieren — sprechen und aufnehmen

**C1.** **Daily.** Nimm fünf Tage lang dein echtes Update auf — 30 Sekunden, drei Beats. Höre am Freitag alle fünf hintereinander.
**C2.** **Review-Bank.** Formuliere sechs harte Kommentare in kollegiale um und sprich beide Versionen laut.
**C3.** **Retro.** Sprich einen Retro-Beitrag: eine positive Sache, eine negative unpersönlich formuliert, ein Vorschlag.
**C4.** **Incident.** Halte ein 60-Sekunden-Update: Stand, Auswirkung, nächster Schritt, nächster Meldezeitpunkt.
**C5.** **Smalltalk.** Führe drei Fünf-Minuten-Gespräche über sichere Themen — laut, allein, mit Rollenwechsel.
**C6.** **Widerspruch.** Widersprich dreimal derselben Aussage: einmal weich, einmal mit Anerkennung, einmal mit Alternative.

```audio
Ich sehe das ehrlich gesagt etwas anders. Dein Ansatz funktioniert, aber langfristig wäre eine Queue robuster. Sollen wir das nach dem Daily kurz zu zweit besprechen?
```

---

### D. Transfer — deine echte Arbeit

**D1.** Halte dein **echtes Daily auf Deutsch** — eine ganze Woche lang, auch wenn das Team englisch spricht.
**D2.** Schreibe deine nächsten fünf **Review-Kommentare auf Deutsch** und markiere jeden mit einer Verbindlichkeitsstufe aus [PR & Review-Kommentare](#/templates/pull-requests).
**D3.** Bring in der nächsten echten **Retro einen Punkt auf Deutsch** ein — unpersönlich formuliert, mit Vorschlag.
**D4.** Führe eine Woche lang **jeden Tag ein Smalltalk-Gespräch** auf Deutsch und notiere abends eine neue Wendung.

---

## ✅ Musterlösungen für C und D

```spoiler
**C1. Musterlösung (Daily, 30 Sekunden):**
*„Von meiner Seite kurz: Gestern habe ich den Login-Service fertig refaktoriert und die Tests
grün bekommen. Heute nehme ich mir das Caching vor, da will ich bis Mittag einen ersten Entwurf
haben. Blocker habe ich keine — nur eine Frage an Anna zum Token-Refresh, das klären wir danach.“*

Beachte den Schluss: Die Frage wird **angekündigt**, aber nicht im Daily geklärt. Das hält die Runde
kurz und macht trotzdem sichtbar, dass etwas offen ist.

**C2. Musterlösung (Review-Bank):**

| Hart | Kollegial |
|---|---|
| Das ist falsch. | Hier würde ich es anders lösen — was hältst du von einem Repository? |
| Warum so kompliziert? | Geht das vielleicht auch einfacher? |
| Fehlt. | Hier fehlt noch ein Test, oder? |
| Schlechter Name. | Der Name sagt noch wenig über den Inhalt — wie wäre *letzteBestellungen*? |
| Das skaliert nicht. | Bei größeren Listen hätte ich Bedenken wegen der Laufzeit. |
| Mach das nochmal. | Könntest du den Teil nochmal überarbeiten? Ich hänge gern zwei Beispiele an. |

**C4. Musterlösung (Incident-Update):**
*„Kurzer Stand: Der Checkout ist seit 14:12 gestört, rund zwanzig Prozent der Anfragen laufen in
einen Fehler. Ausgelöst hat es das Deployment um 14:10 — das habe ich um 14:35 zurückgerollt. Die
Fehlerrate sinkt seitdem, ist aber noch nicht im Normalbereich. Nächster Schritt: Ich beobachte die
Rate noch zehn Minuten und melde mich dann wieder. Falls sie nicht weiter sinkt, ziehe ich die
Datenbank-Kollegen dazu.“*

Vier Teile: Stand · Auswirkung · was getan wurde · nächster Schritt mit Zeitpunkt. Keine Vermutung,
kein Name, keine Entschuldigung.

**C3. Musterlösung (Retro-Beitrag):**
*„Gut lief, dass wir diesmal früh deployt haben — der Freitag war dadurch entspannt. Nicht so gut:
Die Reviews haben sich in der Wochenmitte gestaut, teilweise lagen PRs zwei Tage. Vorschlag: eine
feste Review-Zeit am Vormittag, so um halb zehn.“*

Die Kritik nennt kein *du* und keinen Namen. Was gestaut hat, sind die Reviews — nicht die Leute.

**C5, C6** und **D1–D4** prüfst du beim Abhören selbst:

| Check | Frage |
|---|---|
| Daily | Drei Beats, unter 40 Sekunden, ohne Füllwörter? |
| Review | Kam das Lob vor der Kleinigkeit? |
| Retro | Kommt in deiner Kritik eine Person vor? |
| Incident | Beobachtung vor Vermutung, nächster Meldezeitpunkt genannt? |
| Widerspruch | Begründung dabei — oder nur Ablehnung? |
| Smalltalk | Hast du das Gespräch angekündigt beendet? |
```

---

## 🧾 Zusammenfassung · Summary

Five conversations fill an engineer's week, and all five are drillable. The **Daily** is three beats
in thirty seconds — *gestern · heute · Blocker* — and naming a blocker early is an obligation, not
an admission. The **Code-Review** opens with something concrete that is good, then one
*Kleinigkeit*, phrased as an alternative or a question and softened with a particle; receiving it is
*„Guter Punkt, das passe ich an"*, not a defence. The **Retro** wants what went well, what jammed —
stated as a **state, not a person** — and a proposal, because without a Maßnahme it was only a
conversation. The **Incident-Call** gives observation before hypothesis: status, impact, what you
did, and the time of your next update. And **Smalltalk** runs on Wochenende, Wetter, Urlaub, Kaffee
— never Gehalt or Politik — while **disagreement** is expected rather than risky, as long as it
stays on the Sachebene and comes with a reason.

## 📇 Vokabel-Checkliste · Vocabulary checklist

| Deutsch | Artikel | Plural | English | VI (if hard) |
|---|---|---|---|---|
| Blocker | der | Blocker | blocker | điểm tắc |
| Kleinigkeit | die | Kleinigkeiten | minor point | điểm nhỏ |
| Sachebene | die | — | factual level | bình diện sự việc |
| Widerspruch | der | Widersprüche | objection | sự phản đối |
| Fehlerrate | die | Fehlerraten | error rate | tỉ lệ lỗi |
| sich stauen | — | — | to pile up, to jam | dồn ứ |
| sich vornehmen | — | — | to plan to do | dự định làm |
| hängen an | — | — | to be stuck on | đang tắc ở |
| zurückrollen | — | — | to roll back | quay lui |
| abfangen | — | — | to catch (a case) | bắt lỗi |

→ Drill these in [Flashcards](#/@flashcards).

## 📝 Hausaufgabe · Homework

- [ ] Block **A und B** komplett, Ziel ≥ 80 %.
- [ ] **C1** — fünf Dailys aufnehmen, am Freitag hintereinander anhören.
- [ ] **C2** — sechs harte Kommentare in kollegiale umschreiben.
- [ ] **D1** — eine Woche lang das echte Daily auf Deutsch halten.
- [ ] **D3** — einen Retro-Punkt auf Deutsch einbringen.

## 📚 Empfohlene Ressourcen · Recommended resources

- **Modelldialoge:** [Daily Standup](#/dialogues/standup) · [Code Review](#/dialogues/code-review) · [Retrospektive](#/dialogues/retrospektive) · [Deployment-Notfall](#/dialogues/deployment-notfall).
- **Schriftlich:** [PR & Review-Kommentare](#/templates/pull-requests) — dieselben Stufen im Text.
- **Große Meetings:** [Phase 4 · Speaking](#/phase-4/speaking) und der [Übungsteil](#/phase-4/speaking-uebungen).
- **Zurück zur Theorie:** [Phase 6 · Speaking](#/phase-6/speaking).
- **Weiter:** [Phase 6 · Listening](#/phase-6/listening) und der [Übungsteil](#/phase-6/listening-uebungen).
