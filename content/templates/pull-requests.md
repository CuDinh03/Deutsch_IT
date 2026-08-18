# Templates · Pull Request & Review-Kommentare

> **Level:** B2 → C1 · **Focus:** PR-Beschreibung, Review-Kommentare in vier Schärfegraden, Antworten auf Kritik · **Time:** ~2 h
> _After this module you can review a colleague's code in German without sounding harsh — and take a review without sounding defensive._

Der Pull Request ist der Ort, an dem deutsche Direktheit auf schriftliche Form trifft — und
schriftlich fehlt die Stimme, die alles abfedert. Deshalb hat sich in deutschen Teams eine
erstaunlich feine **Abstufung** eingebürgert: Ein Kommentar sagt nicht nur *was*, sondern auch, wie
verbindlich er gemeint ist.

Die gesprochene Variante dieses Themas ist der [Dialog · Code Review](#/dialogues/code-review);
hier bekommst du die **schriftlichen Vorlagen**.

## Objectives / Lernziele

- Eine **PR-Beschreibung** schreiben, die das Review beschleunigt.
- Review-Kommentare in vier **Verbindlichkeitsstufen** formulieren.
- Kritik **unpersönlich** und als Frage oder Vorschlag formulieren.
- Auf Review-Kommentare antworten: zustimmen, widersprechen, vertagen.

## 1. Vorlage · PR-Beschreibung

> **Titel:** feat(bestellung): letzte Bestellungen im Kundenkonto anzeigen
>
> **Was**
> Zeigt im Kundenkonto die letzten zehn Bestellungen mit Datum, Betrag und Status an.
>
> **Warum**
> Ticket *BES-118*. Kundinnen und Kunden sollen eine Nachbestellung auslösen können, ohne den
> Support zu kontaktieren.
>
> **Wie umgesetzt**
> - Neuer Endpunkt `GET /konto/bestellungen` mit Begrenzung auf zehn Einträge.
> - Die Sortierung erfolgt in der Datenbank, nicht in der Anwendung.
> - Der leere Zustand wird eigens behandelt (Hinweistext statt leerer Liste).
>
> **Wie geprüft**
> - Unit-Tests für Erfolgsfall, leere Liste und Fehler der Bestellhistorie-API.
> - Manuell auf Staging mit drei Testkonten geprüft.
>
> **Auswirkung / Risiko**
> Keine Änderung an bestehenden Endpunkten. Bei Ausfall der Bestellhistorie-API zeigt die Seite
> eine Fehlermeldung statt eines leeren Zustands.
>
> **Nicht enthalten**
> Filter, Suche und PDF-Export — siehe *BES-121*.
>
> **Hinweis für das Review**
> Die Sortierung in *BestellungRepository* würde ich gern gegenprüfen lassen; dort bin ich mir bei
> der Indexnutzung nicht sicher.

Der letzte Abschnitt ist der wertvollste. **„Hinweis für das Review"** lenkt die Aufmerksamkeit
dorthin, wo du sie brauchst — und im deutschen Arbeitskontext gilt es als souverän, eine eigene
Unsicherheit zu benennen, nicht als Schwäche.

```uebung
? Welcher Abschnitt beschleunigt ein Review am stärksten?
* Hinweis für das Review — wo soll die reviewende Person genau hinsehen
x eine möglichst lange Liste der Änderungen
x der Ticketlink allein
x die Anzahl der geänderten Zeilen
! Reviewzeit ist knapp. Wer sie lenkt, bekommt eine bessere Rückmeldung an der Stelle, an der es zählt.

? Warum steht „Nicht enthalten" auch im PR?
* damit niemand eine fehlende Funktion für ein Versehen hält
x um das Ticket zu ersetzen
x um den PR kürzer wirken zu lassen
x weil GitHub das verlangt
! Dieselbe Abgrenzung wie im [Ticket](#/templates/tickets) — hier verhindert sie Kommentare zu Dingen, die bewusst fehlen.

? Was gehört unter „Wie geprüft"?
* welche Tests es gibt und was manuell geprüft wurde
x wie lange die Umsetzung gedauert hat
x wer den Code geschrieben hat
x welche Werkzeuge benutzt wurden
! Die reviewende Person muss entscheiden, wie tief sie prüft. Diese Entscheidung triffst du für sie, indem du deine eigene Prüfung offenlegst.
```

## 2. Die vier Verbindlichkeitsstufen im Review

Deutsche Reviews sind direkt in der Sache und **explizit in der Verbindlichkeit**. Markiere jede
Anmerkung:

| Stufe | Marker | Bedeutung | Beispiel |
|---|---|---|---|
| 1 · Frage | *Frage:* | echtes Nichtverstehen, keine Kritik | „Frage: Warum wird hier zweimal sortiert?" |
| 2 · Kleinigkeit | *Kleinigkeit:* / *nit:* | Geschmack, blockiert nicht | „Kleinigkeit: Der Name *liste2* sagt wenig." |
| 3 · Änderungswunsch | *Änderungswunsch:* | sollte vor dem Merge geändert werden | „Änderungswunsch: Der Fehlerfall sollte protokolliert werden." |
| 4 · Blocker | *Blocker:* | darf so nicht gemerged werden | „Blocker: Die Abfrage läuft ohne Begrenzung." |

Ohne Marker liest jede Anmerkung wie Stufe 3 oder 4 — und genau daraus entstehen die meisten
Missverständnisse zwischen internationalen und deutschen Teams.

```uebung
? Du hast eine reine Geschmacksfrage zum Variablennamen. Welche Stufe?
* Kleinigkeit
x Frage
x Änderungswunsch
x Blocker
! *Kleinigkeit:* (oder das eingebürgerte *nit:*) sagt ausdrücklich: Das hält den Merge nicht auf.

? Die Abfrage hat kein Limit und kann die Datenbank belasten. Welche Stufe?
x Kleinigkeit
x Frage
x Änderungswunsch
* Blocker
! Ein Blocker braucht eine Begründung, die auf Auswirkung zeigt — nicht auf Geschmack.

? Was passiert, wenn du gar keinen Marker setzt?
* Die Anmerkung wirkt verbindlicher, als du sie meinst.
x Sie wird ignoriert.
x Sie gilt automatisch als Kleinigkeit.
x GitHub setzt automatisch einen.
! Schriftlich fehlt die Stimme. Der Marker ersetzt den Tonfall, den du im Gespräch mitgeliefert hättest.
```

## 3. Kritik formulieren — drei Techniken

**(a) Als Frage.** Die höflichste Form, und oft die ehrlichste — vielleicht gibt es einen Grund.

> *Frage: Gibt es einen Grund, warum die Sortierung in der Anwendung passiert und nicht in der
> Abfrage? Bei großen Listen würde ich das eher in der Datenbank erwarten.*

**(b) Unpersönlich.** Der Code ist das Subjekt, nicht die Person.

| Persönlich | Unpersönlich |
|---|---|
| Du hast das Limit vergessen. | Hier fehlt eine Begrenzung. |
| Du behandelst den Fehlerfall nicht. | Der Fehlerfall wird noch nicht behandelt. |
| Dein Name ist unklar. | Der Name *liste2* verrät wenig über den Inhalt. |

**(c) Als Vorschlag mit Begründung.** *Ich würde …, weil …*

> *Änderungswunsch: Ich würde den Fehlerfall protokollieren, weil wir sonst im Betrieb nicht
> sehen, wenn die Bestellhistorie-API ausfällt.*

Die Begründung ist im deutschen Review nicht optional. Ein Vorschlag ohne *weil* wirkt wie eine
Geschmacksfrage — und wird auch so behandelt.

```uebung
? Formuliere unpersönlich: „Du hast das Limit vergessen."
= Hier fehlt eine Begrenzung | Hier fehlt ein Limit | Die Abfrage hat noch keine Begrenzung
! Der Code steht im Mittelpunkt, nicht die Person. Inhaltlich identisch, in der Wirkung völlig anders.

? Welcher Kommentar ist am besten?
* Änderungswunsch: Ich würde den Fehlerfall protokollieren, weil wir sonst einen Ausfall im Betrieb nicht sehen.
x Fehlerbehandlung fehlt.
x Das macht man nicht so.
x Bitte nochmal überarbeiten.
! Stufe, Vorschlag und Begründung in einem Satz. Die anderen drei zwingen zu einer Rückfrage.

? Wann ist die Frageform besser als der Änderungswunsch?
* wenn es einen Grund geben könnte, den du nicht kennst
x immer
x nie, sie wirkt unsicher
x nur bei Kleinigkeiten
! Die Frage lässt Raum für eine Antwort wie „bewusst so, weil …". Ein Änderungswunsch dagegen zwingt die andere Seite in die Verteidigung.

? Was fehlt: „Ich würde hier lieber ein Repository verwenden."
* die Begründung
x der Marker
x die Höflichkeit
x der Bezug zum Ticket
! *weil …* macht aus einer Meinung ein Argument. Ohne sie diskutiert ihr Geschmack.
```

## 4. Auf Kommentare antworten

| Situation | Formulierung |
|---|---|
| Zustimmen | „Guter Punkt, ist geändert." · „Stimmt, das war ein Versehen — angepasst." |
| Zustimmen, aber später | „Berechtigt. Ich würde das gern in einem eigenen Ticket machen, sonst wird der PR zu groß — *BES-121* angelegt." |
| Widersprechen | „Da sehe ich das anders: Die Sortierung liegt bewusst in der Abfrage, weil der Index sonst nicht greift." |
| Nachfragen | „Kannst du das etwas ausführen? Ich bin nicht sicher, ob wir denselben Fall meinen." |
| Erledigt melden | „Alle Punkte sind eingearbeitet — bitte noch einmal drüberschauen." |
| Freigeben | „Von meiner Seite passt das." · „Sieht gut aus, nur eine Kleinigkeit." |

Zwei kulturelle Punkte, die Lernende oft überraschen:

- **Widersprechen ist normal und erwünscht.** *„Da sehe ich das anders, weil …"* beendet keine
  Zusammenarbeit; wer jeden Kommentar kommentarlos umsetzt, wirkt eher unsicher.
- **„Von meiner Seite passt das"** ist eine vollwertige Freigabe. Es klingt zurückhaltender, als es
  gemeint ist — dieselbe Untertreibung wie bei *„nicht schlecht"*.

```uebung
? Wie stimmst du zu, willst die Änderung aber nicht in diesem PR machen?
* Berechtigt. Ich mache das in einem eigenen Ticket, sonst wird der PR zu groß.
x Mach ich später.
x Das ist nicht so wichtig.
x Kann man so lassen.
! Zustimmung, Grund, konkreter nächster Schritt. Ohne das angelegte Ticket ist es nur eine Absichtserklärung.

? Du bist anderer Meinung als die reviewende Person. Was tust du?
* Widersprechen mit Begründung: „Da sehe ich das anders, weil …"
x kommentarlos umsetzen
x den Kommentar ignorieren
x die Diskussion in den Chat verlagern
! In einem deutschen Team ist ein begründeter Widerspruch der Normalfall — und er verbessert die Entscheidung.

? „Von meiner Seite passt das." Was bedeutet das?
* Freigabe — du kannst mergen.
x Es fehlt noch etwas.
x Die Person hat nicht geprüft.
x Es ist nur eine vorläufige Meinung.
! Deutsche Zustimmung ist oft leiser, als Lernende erwarten. Das ist ein volles „ja".

? Wie meldest du, dass alle Kommentare eingearbeitet sind?
= Alle Punkte sind eingearbeitet | Alle Punkte sind eingearbeitet, bitte noch einmal drüberschauen | Ich habe alle Punkte eingearbeitet
! *einarbeiten* ist das übliche Verb für „Kommentare umsetzen". Danach folgt die Bitte um einen zweiten Blick.
```

## 5. Häufige Fallen

| Falle | Warum sie zündet | Besser |
|---|---|---|
| „Das ist falsch." | Urteil ohne Begründung | „Hier fehlt … , weil sonst …" |
| „Warum hast du …?" | *du* + *warum* klingt nach Verhör | „Gibt es einen Grund, warum …?" |
| Ironie oder Emojis als Kritik | schriftlich nicht zuverlässig lesbar | klarer Marker + Sachargument |
| Kommentarflut ohne Stufen | alles wirkt gleich dringend | Marker setzen, Kleinigkeiten bündeln |
| „Bitte überall anpassen." | unklar, wie viel Arbeit | konkrete Stellen nennen oder Ticket anlegen |

```audio
Frage: Gibt es einen Grund, warum die Sortierung in der Anwendung passiert und nicht in der Abfrage? Änderungswunsch: Ich würde den Fehlerfall protokollieren, weil wir sonst einen Ausfall der Bestellhistorie nicht sehen. Ansonsten passt das von meiner Seite.
```

## 🏋️ Kurzübung · Schreib nach Vorlage

**Ü1.** Schreibe eine vollständige **PR-Beschreibung** für deine letzte echte Änderung.
**Ü2.** Formuliere **vier Review-Kommentare** — je einen pro Verbindlichkeitsstufe.
**Ü3.** Schreibe drei persönliche Kommentare in **unpersönliche** um.
**Ü4.** Antworte auf einen echten Review-Kommentar auf Deutsch: einmal zustimmend, einmal widersprechend.

```spoiler
**Ü2. Musterlösung (vier Stufen):**

> *Frage: Warum wird die Liste zweimal sortiert — einmal in der Abfrage und einmal im Dienst?*
>
> *Kleinigkeit: Der Name `liste2` verrät wenig; `letzteBestellungen` wäre sprechender.*
>
> *Änderungswunsch: Der Fehlerfall der Bestellhistorie-API sollte protokolliert werden, weil wir
> einen Ausfall sonst im Betrieb nicht bemerken.*
>
> *Blocker: Die Abfrage läuft ohne Begrenzung. Bei Konten mit vielen Bestellungen lädt sie die
> gesamte Historie in den Speicher.*

Jede Stufe hat ihre eigene Grammatik: die Frage fragt wirklich, die Kleinigkeit schlägt vor, der
Änderungswunsch begründet mit Betriebsauswirkung, der Blocker beschreibt den Schaden.

**Ü3. Musterlösung (unpersönlich):**

| Persönlich | Unpersönlich |
|---|---|
| Du fängst die Ausnahme nicht ab. | Die Ausnahme wird hier noch nicht abgefangen. |
| Du hast den Test vergessen. | Für den Fehlerfall fehlt noch ein Test. |
| Dein Endpunkt ist nicht abgesichert. | Der Endpunkt ist noch ohne Berechtigungsprüfung. |

**Ü4. Musterlösung:**
*Zustimmend: „Guter Punkt, das war ein Versehen — ist angepasst und mit einem Test abgedeckt."*
*Widersprechend: „Da sehe ich das anders: Die Sortierung liegt bewusst in der Abfrage, weil der
Index sonst nicht greift. Ich habe das als Kommentar im Repository ergänzt, damit es nachvollziehbar
bleibt."*
Beachte den Zusatz beim Widerspruch: Wer widerspricht, hinterlässt idealerweise eine Spur, damit
dieselbe Frage nicht in drei Monaten wieder auftaucht.

**Ü1** prüfst du selbst:

| Check | Frage |
|---|---|
| Was / Warum | Steht der Nutzen da, nicht nur die Änderung? |
| Wie geprüft | Weiß die reviewende Person, wie tief sie prüfen muss? |
| Risiko | Ist benannt, was schiefgehen kann? |
| Abgrenzung | Steht da, was bewusst fehlt? |
| Hinweis | Ist gesagt, wo du besonders hinschauen lassen willst? |
```

---

## 🧾 Zusammenfassung · Summary

A German PR description answers five questions — **Was · Warum · Wie umgesetzt · Wie geprüft ·
Auswirkung** — plus two sections that save the most time: **„Nicht enthalten"** and **„Hinweis für
das Review"**. Review comments carry an explicit **verbindlichkeitsstufe**: *Frage · Kleinigkeit ·
Änderungswunsch · Blocker*. Without a marker every comment reads like a blocker. Phrase criticism
as a question, keep the **code** as the subject rather than the person, and always add the *weil* —
a suggestion without a reason is treated as taste. Answering is symmetrical: agree and fix, agree
and ticket it, or disagree with a reason — disagreeing is expected, not rude. And *„von meiner
Seite passt das"* is a full approval, quieter than it sounds.

## 📇 Vokabel-Checkliste · Vocabulary checklist

| Deutsch | Artikel | Plural | English | VI (if hard) |
|---|---|---|---|---|
| Änderungswunsch | der | -wünsche | requested change | yêu cầu chỉnh sửa |
| Kleinigkeit | die | Kleinigkeiten | nit, minor point | điểm nhỏ |
| Begrenzung | die | Begrenzungen | limit | giới hạn |
| Auswirkung | die | Auswirkungen | impact | tác động |
| Berechtigungsprüfung | die | -prüfungen | authorization check | kiểm tra quyền |
| einarbeiten | — | — | to incorporate (comments) | tiếp thu, chỉnh theo |
| abfangen | — | — | to catch (an exception) | bắt lỗi |
| gegenprüfen | — | — | to double-check | kiểm tra chéo |
| nachvollziehbar | — | — | comprehensible, traceable | dễ hiểu, lần lại được |

→ Drill these in [Flashcards](#/@flashcards).

## 🗣️ Sprechübung · Speaking practice

1. Sprich deine PR-Beschreibung in **60 Sekunden** laut: Was, Warum, Risiko.
2. Formuliere laut vier Kommentare — je einer pro Stufe, jeder mit *weil*.
3. Widersprich laut einem erfundenen Review-Kommentar, ohne dich zu entschuldigen.

## 📝 Hausaufgabe · Homework

- [ ] **Ü1–Ü4** schreiben.
- [ ] Den nächsten echten PR auf Deutsch beschreiben.
- [ ] In einem echten Review **jeden** Kommentar mit einer Stufe markieren.
- [ ] Fünf unpersönliche Kritikformulierungen in [Flashcards](#/@flashcards) anlegen.
- [ ] [Dialog · Code Review](#/dialogues/code-review) noch einmal laut lesen.

## 📚 Empfohlene Ressourcen · Recommended resources

- **Gesprochen:** [Dialog · Code Review](#/dialogues/code-review) · [Dialog · Pair Programming](#/dialogues/pair-programming).
- **Commit & README:** [Phase 3 · Writing](#/phase-3/writing) und der [Übungsteil](#/phase-3/writing-uebungen).
- **Weitere Vorlagen:** [E-Mail-Baukasten](#/templates/emails) · [Ticket & Akzeptanzkriterien](#/templates/tickets) · [Protokoll, Incident-Report & Übergabe](#/templates/protokoll-incident).
- **Feedback-Sprache:** [Phase 4 · Speaking](#/phase-4/speaking) — Ich-Botschaften funktionieren schriftlich genauso.
