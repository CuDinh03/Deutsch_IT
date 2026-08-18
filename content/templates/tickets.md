# Templates · Ticket & Akzeptanzkriterien — Vorlagen für Jira & Co.

> **Level:** B2 → C1 · **Focus:** Fehlerticket, User Story, Akzeptanzkriterien, Ticketkommentare — auf Deutsch · **Time:** ~2 h
> _After this module you can write a German ticket that gets picked up and finished without a single clarifying question._

Ein Ticket ist ein **Vertrag**: Es sagt, was getan werden soll und woran man erkennt, dass es
fertig ist. Auf Deutsch ist das sogar leichter als auf Englisch, weil die Sprache Präzision billig
macht — *Erwartet* und *Tatsächlich* stehen einfach da. Die Theorie steht in
[Phase 4 · Writing](#/phase-4/writing); hier sind die Vorlagen.

## Objectives / Lernziele

- Die vier **Ticketarten** auf Deutsch benennen und unterscheiden.
- Ein **Fehlerticket** mit Reproduktion und Erwartet/Tatsächlich schreiben.
- Eine **User Story** in der deutschen Standardform formulieren.
- **Akzeptanzkriterien** schreiben, die binär prüfbar sind — auch im Gegeben/Wenn/Dann-Format.
- Im **Refinement** über Aufwand, Abhängigkeiten und Blocker sprechen.

## 1. Die vier Ticketarten

| Deutsch | Artikel · Plural | Englisch | Wofür |
|---|---|---|---|
| Fehler / Störung | der · Fehler / die · Störungen | bug | etwas funktioniert nicht wie beschrieben |
| Anforderung | die · Anforderungen | story, requirement | etwas Neues soll möglich sein |
| Aufgabe | die · Aufgaben | task | technische Arbeit ohne direkten Nutzerwert |
| Untersuchung | die · Untersuchungen | spike | Wissen fehlt; Ergebnis ist eine Erkenntnis |

🇩🇪 **„Das ist keine Anforderung, das ist eine Untersuchung — wir wissen noch nicht, ob es
überhaupt geht."** Diesen Satz brauchst du im Refinement regelmäßig.

## 2. Der Titel

Ein Titel nennt **Symptom und Bedingung**, nicht die Vermutung.

| Schlecht | Gut |
|---|---|
| Bug | Anmeldung schlägt bei Sonderzeichen im Passwort fehl |
| Login kaputt | Zeitüberschreitung beim Laden der Bestellliste ab 500 Einträgen |
| Cache-Problem | Preisanzeige bleibt nach Änderung im Backoffice bis zu 5 Minuten veraltet |

```uebung
? Welcher Titel ist am besten?
x Performance-Problem
x Liste lädt nicht
x Bitte Bestellliste prüfen
* Zeitüberschreitung beim Laden der Bestellliste ab 500 Einträgen
! Symptom (*Zeitüberschreitung*), Ort (*Bestellliste*) und Bedingung (*ab 500 Einträgen*). Wer den Titel liest, weiß, ob ihn das Ticket betrifft.

? Was gehört NICHT in einen Titel?
* die Vermutung über die Ursache
x das Symptom
x der betroffene Bereich
x die auslösende Bedingung
! „Cache-Problem" legt eine Ursache fest, bevor jemand nachgesehen hat. Beobachtung vor Interpretation — dieselbe Regel wie im [Deployment-Notfall](#/dialogues/deployment-notfall).
```

## 3. Vorlage · Fehlerticket

> **Titel:** Anmeldung schlägt bei Sonderzeichen im Passwort fehl
>
> **Beschreibung**
> Nutzerinnen und Nutzer mit Sonderzeichen (z. B. „ä", „&") im Passwort können sich seit dem
> Release *4.12* nicht mehr anmelden. Betroffen sind nach aktueller Einschätzung *etwa 3 % der
> Konten*.
>
> **Schritte zur Reproduktion**
> 1. Ein Passwort mit dem Zeichen „&" setzen.
> 2. Abmelden.
> 3. Erneut anmelden.
>
> **Erwartetes Verhalten:** Die Anmeldung ist erfolgreich.
> **Tatsächliches Verhalten:** Fehler 500, kein Eintrag im Anwendungsprotokoll.
>
> **Umgebung:** *Produktion und Staging, Version 4.12, Browser unabhängig*
> **Schweregrad:** *hoch — Anmeldung ist blockiert, kein Workaround bekannt*
>
> **Akzeptanzkriterien**
> - Die Anmeldung funktioniert mit allen gültigen Sonderzeichen.
> - Ein automatischer Test deckt mindestens „ä", „&" und „%" ab.
> - Fehlgeschlagene Anmeldeversuche erzeugen einen Protokolleintrag.

Die zwei Zeilen **Erwartet / Tatsächlich** sind das Herz des Tickets. Sie ersetzen einen halben
Absatz Prosa und machen sofort sichtbar, ob überhaupt ein Fehler vorliegt oder nur eine andere
Erwartung.

```uebung
? Welche Angabe fehlt in diesem Ticket am ehesten, wenn du sie weglässt?
x die Beschreibung
* die Schritte zur Reproduktion
x der Schweregrad
x die Umgebung
! Ohne Reproduktion beginnt die Bearbeitung mit einer Rückfrage — und das Ticket liegt einen Tag still.

? „Schweregrad: hoch — Anmeldung ist blockiert, kein Workaround bekannt." Warum steht die Begründung dabei?
x weil Jira das verlangt
x weil der Schweregrad die Priorität ersetzt
* weil „hoch" ohne Begründung eine Meinung ist und diskutiert wird
x weil das Feld sonst leer bleibt
! Priorisierung ist im deutschen Arbeitsalltag Verhandlungssache. Wer die Auswirkung nennt, verhandelt mit Fakten statt mit Adjektiven.

? Was bedeutet „kein Workaround bekannt"?
x Der Fehler tritt nur selten auf.
x Der Fehler ist nicht reproduzierbar.
x Es gibt keine Ursache.
* Es gibt keinen Behelfsweg, mit dem Betroffene sich trotzdem anmelden können.
! Deutsch dafür: *die Behelfslösung* oder *der Umgehungsweg* — im Alltag sagt aber fast jedes Team *Workaround*.
```

## 4. Vorlage · Anforderung (User Story)

Die deutsche Standardform ist eine wörtliche, aber etablierte Übersetzung:

> **Als** *Kundin* **möchte ich** *meine letzten Bestellungen sehen*, **um** *eine Nachbestellung
> auszulösen*.

| Slot | Frage | Typischer Fehler |
|---|---|---|
| Als … | Wer? Eine **Rolle**, kein System | „Als Entwickler möchte ich einen Index" |
| möchte ich … | Was soll möglich sein? | eine Lösung statt eines Ziels |
| um … zu … | Warum? Welcher Nutzen? | fehlt komplett |

🇩🇪 **„Als Entwickler möchte ich einen Index auf der Bestelltabelle"** ist keine Anforderung,
sondern eine **Aufgabe** — der Nutzen fehlt, und die Rolle ist das eigene Team. Das ist völlig in
Ordnung, aber dann gehört es in die Ticketart *Aufgabe*.

> **Titel:** Letzte Bestellungen im Kundenkonto anzeigen
>
> **Beschreibung**
> Als *Kundin* möchte ich *meine letzten zehn Bestellungen im Konto sehen*, um *eine
> Nachbestellung auslösen zu können*.
>
> **Akzeptanzkriterien**
> - Im Kundenkonto werden die letzten *zehn* Bestellungen mit Datum, Betrag und Status angezeigt.
> - Bei weniger als zehn Bestellungen wird die vorhandene Anzahl angezeigt, ohne Fehlermeldung.
> - Ohne Bestellungen erscheint der Hinweis *„Sie haben noch keine Bestellungen."*
> - Die Seite lädt bei zehn Einträgen in unter *500 ms* (95. Perzentil).
>
> **Nicht enthalten (Abgrenzung)**
> - Filter und Suche über ältere Bestellungen.
> - Export als PDF.
>
> **Abhängigkeiten:** *Bestellhistorie-API ab Version 2.3*

Der Abschnitt **„Nicht enthalten"** ist im deutschen Ticketwesen erstaunlich verbreitet und spart
die meisten Diskussionen in der Abnahme. Formuliere ihn als Abgrenzung, nicht als Absage.

## 5. Akzeptanzkriterien, die halten

Ein Akzeptanzkriterium muss **binär prüfbar** sein: erfüllt oder nicht. Es darf keine Wertung
enthalten.

| Nicht prüfbar | Prüfbar |
|---|---|
| Die Seite soll schneller werden. | Die Seite lädt bei 10 Einträgen in unter 500 ms (95. Perzentil). |
| Die Fehlermeldung soll besser sein. | Bei ungültigem Passwort erscheint der Text „Passwort oder E-Mail ist falsch." |
| Der Code soll sauber sein. | Für den neuen Pfad existieren Tests für Erfolg und Fehlerfall. |

Für Verhaltensregeln funktioniert das deutsche **Gegeben / Wenn / Dann** (das Gherkin-Muster):

> **Gegeben,** *die Kundin ist angemeldet und hat drei Bestellungen*,
> **wenn** *sie die Seite „Meine Bestellungen" öffnet*,
> **dann** *werden drei Einträge mit Datum, Betrag und Status angezeigt*.

```uebung
? Welches Akzeptanzkriterium ist prüfbar?
* Bei ungültigem Passwort erscheint der Text „Passwort oder E-Mail ist falsch."
x Die Fehlermeldung soll freundlicher sein.
x Der Login soll zuverlässiger werden.
x Die Nutzererfahrung soll sich verbessern.
! Prüfbar heißt: Zwei Personen kommen unabhängig voneinander zum selben Urteil.

? Wie heißt das Gherkin-Muster auf Deutsch?
x Erst / Dann / Zuletzt
* Gegeben / Wenn / Dann
x Wenn / Aber / Also
x Voraussetzung / Ablauf / Ergebnis
! *Gegeben … , wenn … , dann …* — so steht es auch in deutschsprachigen Cucumber-Feature-Dateien.

? Wozu dient der Abschnitt „Nicht enthalten"?
x Er sammelt Fehler, die nicht behoben werden.
x Er ersetzt die Akzeptanzkriterien.
* Er grenzt ab, was ausdrücklich nicht Teil des Tickets ist.
x Er listet abgelehnte Tickets auf.
! Die Abgrenzung verhindert die häufigste Diskussion der Abnahme: „Ich dachte, das gehört dazu."

? „Die Seite lädt in unter 500 ms (95. Perzentil)." Warum die Perzentilangabe?
x Weil 500 ms zu schnell ist.
x Weil Perzentile in Jira Pflicht sind.
x Weil der Mittelwert genauer ist.
* Ohne sie ist unklar, ob ein einzelner langsamer Aufruf das Kriterium verletzt.
! Ein Durchschnitt versteckt Ausreißer. Beim Perzentil ist die Messvorschrift Teil des Kriteriums — und damit unstrittig.
```

## 6. Refinement — die Sprache der Schätzung

| Deutsch | Artikel · Plural | Bedeutung |
|---|---|---|
| Aufwand | der · Aufwände | effort |
| Schätzung | die · Schätzungen | estimate |
| Abhängigkeit | die · Abhängigkeiten | dependency |
| Blocker / Hindernis | der · Blocker / das · Hindernisse | blocker |
| Priorität | die · Prioritäten | priority |
| Abnahme | die · Abnahmen | acceptance, sign-off |
| Umsetzung | die · Umsetzungen | implementation |

**Redemittel fürs Refinement**

| Funktion | Satz |
|---|---|
| Aufwand einschätzen | „Ich würde den Aufwand auf *drei Tage* schätzen." |
| Unsicherheit benennen | „Solange *die API-Version* unklar ist, kann ich das nicht seriös schätzen." |
| Abhängigkeit melden | „Das hängt an *der Freigabe der Datenschutzprüfung*." |
| Ticket zerlegen | „Ich würde das Ticket aufteilen — der zweite Teil ist eine eigene Anforderung." |
| Akzeptanz einfordern | „Woran erkennen wir, dass das fertig ist?" |
| Abgrenzen | „Ist *der Export* enthalten oder nicht?" |

Der wichtigste Satz ist der vorletzte: **„Woran erkennen wir, dass das fertig ist?"** Er ist im
deutschen Refinement völlig üblich, klingt nicht kritisch und produziert in einer Minute die
Akzeptanzkriterien, die sonst fehlen.

## 7. Ticketkommentare — Status, Rückfrage, Abschluss

> **Statuskommentar:** *Stand: Ursache eingegrenzt — betroffen sind nur Passwörter mit
> Sonderzeichen. Korrektur ist in Arbeit, Auslieferung voraussichtlich Freitag.*

> **Rückfrage:** *Kurze Rückfrage zur Abgrenzung: Sollen auch stornierte Bestellungen angezeigt
> werden? Davon hängt ab, ob wir den Status filtern.*

> **Abschluss:** *Umgesetzt und auf Staging geprüft. Alle drei Akzeptanzkriterien sind erfüllt; der
> Test für „%" wurde ergänzt. Bitte um Abnahme.*

```uebung
? Womit beginnt ein guter Statuskommentar?
* mit dem Stand — was jetzt gilt
x mit einer Entschuldigung
x mit der Vermutung von gestern
x mit der Frage, wer schuld ist
! Wer den Kommentar liest, will wissen, wo das Ticket steht. Alles andere kommt danach.

? Wie schließt du ein Ticket sprachlich sauber ab?
= Bitte um Abnahme | Ich bitte um Abnahme
! *die Abnahme* ist die formelle Übergabe zur Prüfung. Ein Ticket, das ohne diesen Satz auf „fertig" springt, bleibt liegen.

? „Das hängt an der Freigabe der Datenschutzprüfung." Was drückt der Satz aus?
x eine Absage
* eine Abhängigkeit — ohne die Freigabe geht es nicht weiter
x eine Schätzung
x eine Priorität
! *an etwas hängen* ist die umgangssprachliche Form von *von etwas abhängen*. Im Ticket schreibst du besser: *Abhängigkeit: Freigabe der Datenschutzprüfung.*
```

```audio
Kurzer Stand zum Ticket: Die Ursache ist eingegrenzt, betroffen sind nur Passwörter mit Sonderzeichen. Die Korrektur ist in Arbeit, die Auslieferung ist voraussichtlich Freitag. Woran erkennen wir, dass das fertig ist? Ich würde ergänzen, dass ein automatischer Test die Sonderzeichen abdeckt.
```

## 🏋️ Kurzübung · Schreib nach Vorlage

**Ü1.** Schreibe ein **Fehlerticket** zu einem echten Fehler aus deinem Projekt — vollständig, auf Deutsch.
**Ü2.** Formuliere eine **User Story** für ein Feature deines Systems, inklusive „Nicht enthalten".
**Ü3.** Schreibe drei **Akzeptanzkriterien** im Gegeben/Wenn/Dann-Format.
**Ü4.** Formuliere zu einem laufenden Ticket einen **Statuskommentar** und einen **Abschlusskommentar**.

```spoiler
**Ü3. Musterlösung (Gegeben/Wenn/Dann):**

> Gegeben, die Kundin ist angemeldet und hat keine Bestellungen, wenn sie „Meine Bestellungen"
> öffnet, dann erscheint der Hinweis „Sie haben noch keine Bestellungen."
>
> Gegeben, eine Bestellung wurde storniert, wenn die Liste geladen wird, dann erscheint der
> Eintrag mit dem Status „storniert" und nicht in der Summenanzeige.
>
> Gegeben, die Bestellhistorie-API antwortet nicht, wenn die Seite geladen wird, dann erscheint
> eine Fehlermeldung mit Wiederholen-Schaltfläche und kein leerer Zustand.

Beachte den dritten Fall: Das **Fehlerverhalten** gehört genauso in die Akzeptanzkriterien wie der
Erfolgsfall. Fehlt es, wird es nicht gebaut.

**Ü4. Musterlösung:**
*Status: Stand heute — die Anbindung ist umgesetzt, die Tests für Sonderzeichen fehlen noch.
Abhängigkeit: Die Freigabe für Staging steht aus. Voraussichtliche Auslieferung: Donnerstag.*
*Abschluss: Umgesetzt und auf Staging geprüft. Alle Akzeptanzkriterien sind erfüllt, der Test für
„%" wurde ergänzt. Nicht enthalten war der PDF-Export — dafür habe ich Ticket PAY-241 angelegt.
Bitte um Abnahme.*

**Ü1, Ü2** prüfst du selbst:

| Check | Frage |
|---|---|
| Titel | Symptom **und** Bedingung, keine Vermutung? |
| Reproduktion | Kann eine fremde Person den Fehler ohne Rückfrage auslösen? |
| Erwartet/Tatsächlich | Beide Zeilen vorhanden? |
| Akzeptanz | Jedes Kriterium binär prüfbar, ohne Wertung? |
| Abgrenzung | Steht da, was **nicht** enthalten ist? |
| Story | Rolle, Ziel und Nutzen — oder ist es eigentlich eine Aufgabe? |
```

---

## 🧾 Zusammenfassung · Summary

A German ticket is a contract in four parts. The **Titel** names symptom and condition, never a
guessed cause. A **Fehlerticket** needs reproduction steps plus the two lines that do the real
work: **Erwartet / Tatsächlich**. An **Anforderung** uses the standard frame *Als … möchte ich … ,
um … zu …* — and if the role is your own team and the benefit is missing, it is an *Aufgabe*, not a
story. **Akzeptanzkriterien** must be binary and measurement-explicit (*unter 500 ms, 95.
Perzentil*), optionally as **Gegeben / Wenn / Dann**, and a short **„Nicht enthalten"** section
prevents most acceptance disputes. In refinement, one sentence does more than any other:
*„Woran erkennen wir, dass das fertig ist?"*

## 📇 Vokabel-Checkliste · Vocabulary checklist

| Deutsch | Artikel | Plural | English | VI (if hard) |
|---|---|---|---|---|
| Anforderung | die | Anforderungen | requirement, story | yêu cầu |
| Akzeptanzkriterium | das | -kriterien | acceptance criterion | tiêu chí nghiệm thu |
| Abnahme | die | Abnahmen | acceptance, sign-off | nghiệm thu |
| Aufwand | der | Aufwände | effort | công sức |
| Abhängigkeit | die | Abhängigkeiten | dependency | phụ thuộc |
| Schweregrad | der | Schweregrade | severity | mức nghiêm trọng |
| Abgrenzung | die | Abgrenzungen | scoping, delimitation | giới hạn phạm vi |
| eingrenzen | — | — | to narrow down | khoanh vùng |
| umsetzen | — | — | to implement | triển khai |
| zerlegen / aufteilen | — | — | to split (a ticket) | chia nhỏ |

→ Drill these in [Flashcards](#/@flashcards).

## 🗣️ Sprechübung · Speaking practice

1. Beschreibe ein echtes Ticket in **60 Sekunden** laut: Titel, Reproduktion, Erwartet/Tatsächlich.
2. Frage im nächsten Refinement laut: *„Woran erkennen wir, dass das fertig ist?"*
3. Sprich einen **Statuskommentar** laut — Stand, Abhängigkeit, voraussichtlicher Termin.

## 📝 Hausaufgabe · Homework

- [ ] **Ü1–Ü4** schreiben.
- [ ] Ein echtes englisches Ticket vollständig auf Deutsch neu schreiben.
- [ ] Zu drei laufenden Tickets prüfen: Ist jedes Akzeptanzkriterium binär prüfbar?
- [ ] Die sieben Refinement-Wörter aus §6 in [Flashcards](#/@flashcards) anlegen.
- [ ] [Phase 4 · Writing · Übungsteil](#/phase-4/writing-uebungen) Block B16–B20.

## 📚 Empfohlene Ressourcen · Recommended resources

- **Theorie:** [Phase 4 · Writing](#/phase-4/writing) · [Phase 3 · Writing](#/phase-3/writing) für Commit und README.
- **Weitere Vorlagen:** [E-Mail-Baukasten](#/templates/emails) · [PR & Review-Kommentare](#/templates/pull-requests) · [Protokoll, Incident-Report & Übergabe](#/templates/protokoll-incident).
- **Vokabular:** [Testing, Agile & Scrum](#/vocabulary/testing-agile) für die Prozessbegriffe.
- **Dialog:** [Sprint Planning](#/dialogues/sprint-planning) — dieselben Begriffe gesprochen.
