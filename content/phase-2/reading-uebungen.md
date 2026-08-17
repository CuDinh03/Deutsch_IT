# Phase 2 · Reading — Übungsteil · Workbook

> **Level:** B2 · **Focus:** three authentic-style texts, compound cracking, and reading a Kommentar for stance · **Time:** ~2 h
> _After this workbook you can read a German tech article and a Kommentar for argument — not just for facts._

This is the practice half of [Phase 2 · Reading](#/phase-2/reading). The texts below are written in
the register of **heise.de** and **t3n.de**: real sentence length, real compounds, real opinion
markers. The B2 skill isn't decoding words — it's spotting **where the author stands** and which
sentence carries the claim.

**The rule stays:** first pass, look up **nothing**. Crack compounds right-to-left, guess from
context, and only after answering A and B may you open a dictionary.

---

## 🏋️ Übungsteil · Workbook

### Text 1 — Nachricht (heise-Register)

> **Immer mehr Unternehmen verlagern Anwendungen in die Cloud**
>
> Deutsche Unternehmen setzen zunehmend auf Cloud-Infrastruktur. Nach einer aktuellen Erhebung des
> Branchenverbands haben rund zwei Drittel der befragten Betriebe mindestens einen Teil ihrer
> Anwendungen ausgelagert. Besonders stark gewachsen ist der Anteil bei mittelständischen
> Unternehmen, die noch vor drei Jahren überwiegend eigene Rechenzentren betrieben.
>
> Als Hauptgrund nennen die Befragten die bessere Skalierbarkeit. Rechenleistung lässt sich
> kurzfristig zubuchen, ohne dass Hardware beschafft werden muss. Auch der Fachkräftemangel spielt
> eine Rolle: Der Betrieb eigener Systeme bindet Personal, das an anderer Stelle fehlt.
>
> Kritiker warnen jedoch vor der wachsenden Abhängigkeit von wenigen großen Anbietern. Wer seine
> Datenverarbeitung vollständig auslagert, verliert nicht nur technisches Wissen, sondern auch
> Verhandlungsmacht. Datenschützer fordern darüber hinaus klarere Regeln für die Speicherung
> personenbezogener Daten in Rechenzentren außerhalb der Europäischen Union.
>
> Branchenbeobachter rechnen dennoch damit, dass sich der Trend fortsetzt. Eine vollständige
> Rückverlagerung sei für die meisten Betriebe wirtschaftlich kaum darstellbar.

### Text 2 — Kommentar (Meinungstext)

> **Kommentar: Hört auf, freitags zu deployen**
>
> Es ist höchste Zeit, dass Entwicklungsteams eine simple Regel akzeptieren: Am Freitagnachmittag
> wird nichts mehr ausgeliefert. Was wie Bequemlichkeit klingt, ist in Wahrheit eine Frage der
> Verantwortung.
>
> Denn die Rechnung ist einfach. Ein Fehler, der freitags um siebzehn Uhr in Produktion geht,
> trifft auf ein Unternehmen, das bis Montagmorgen praktisch nicht handlungsfähig ist. Die
> Behebung dauert dann nicht zwanzig Minuten, sondern zwei Tage — und sie verbrennt das Wochenende
> von Menschen, die dafür nicht eingeplant waren.
>
> Zwar wird gern eingewendet, moderne Pipelines und automatische Rollbacks hätten dieses Problem
> gelöst. Natürlich ist an diesem Einwand etwas dran. Nur zeigt die Erfahrung, dass genau die
> Fehler, die ein Rollback nicht auffängt — fehlerhafte Migrationen, korrupte Daten, kaputte
> Drittanbieter-Integrationen — sich nicht an Wochenenden halten.
>
> Unterm Strich ist die Freitagssperre keine Bevormundung, sondern schlicht Risikomanagement. Wer
> sie für übertrieben hält, hat vermutlich noch kein Wochenende im Incident-Channel verbracht.

### Text 3 — Fachtext (Ausschnitt aus einer Doku)

> **Fehlerbehandlung in verteilten Systemen**
>
> In verteilten Systemen muss grundsätzlich davon ausgegangen werden, dass Teile des Systems
> zeitweise nicht erreichbar sind. Eine Anfrage, die an einen nachgelagerten Dienst weitergereicht
> wird, kann verzögert, doppelt oder gar nicht beantwortet werden.
>
> Um die Auswirkungen zu begrenzen, werden üblicherweise drei Mechanismen kombiniert. Erstens
> begrenzt ein Timeout die Wartezeit. Zweitens verhindert ein sogenannter Circuit Breaker, dass
> weitere Anfragen an einen bereits überlasteten Dienst geschickt werden. Drittens sorgt eine
> Wiederholungsstrategie mit exponentiell wachsenden Abständen dafür, dass ein kurzzeitig gestörter
> Dienst nicht zusätzlich belastet wird.
>
> Zu beachten ist, dass Wiederholungen nur bei idempotenten Operationen unbedenklich sind. Wird
> eine nicht-idempotente Anfrage — etwa eine Zahlung — wiederholt, kann derselbe Vorgang mehrfach
> ausgeführt werden.

---

### A. Erkennen — skim & structure

**A1–A3 · Textsorte bestimmen.**

```uebung
? Text 1 („Immer mehr Unternehmen verlagern Anwendungen in die Cloud")
* Nachricht
x Kommentar
x Fachtext
! Berichtet und schreibt Aussagen anderen zu („nach einer Erhebung", „Kritiker warnen").

? Text 2 („Hört auf, freitags zu deployen")
x Nachricht
* Kommentar
x Fachtext
! Imperativ in der Überschrift, „Es ist höchste Zeit, dass …" — eine eigene These.

? Text 3 („Fehlerbehandlung in verteilten Systemen")
x Nachricht
x Kommentar
* Fachtext
! Unpersönlich, Passiv, Aufzählung von Mechanismen.
```

**A4 · Woran erkennt man eine Haltung?**

```uebung
? Welcher Text hat eine erkennbare Haltung, und woran siehst du das in zehn Sekunden?
* Text 2 — Imperativ in der Überschrift und „Es ist höchste Zeit, dass …"
x Text 1 — wegen der Zahlen
x Text 3 — wegen der Fachbegriffe
! Nachrichten schreiben zu (*Kritiker warnen*), ein Kommentar behauptet in eigener Stimme.
```

**A5–A11 · Komposita zerlegen.** Gib den Artikel an.

```uebung
? ___ Datenverarbeitung
= die
! Kopf: *die Verarbeitung*.

? ___ Fachkräftemangel
= der
! Kopf: *der Mangel*.

? ___ Rückverlagerung
= die
! Kopf: *die Verlagerung*.

? ___ Wiederholungsstrategie
= die
! Kopf: *die Strategie*.

? ___ Branchenverband
= der
! Kopf: *der Verband*.

? ___ Verhandlungsmacht
= die
! Kopf: *die Macht*.

? ___ Drittanbieter-Integration
= die
! Kopf: *die Integration*.
```

**A12–A15 · Kommentarstruktur in Text 2.**

```uebung
? Welches Signalwort leitet die These ein?
* Es ist höchste Zeit, dass …
x Denn …
x Zwar …
x Unterm Strich …
! Der Anspruch des Autors, direkt im ersten Satz.

? Welches Signalwort leitet das Hauptargument ein?
x Es ist höchste Zeit …
* Denn die Rechnung ist einfach.
x Zwar wird gern eingewendet …
x Unterm Strich …
! *Denn* begründet.

? Welches Signalwort leitet die Einräumung ein?
x Denn …
* Zwar wird gern eingewendet …
x Unterm Strich …
x Es ist höchste Zeit …
! *Zwar* und *Natürlich* kündigen im Deutschen fast immer ein folgendes *aber* an.

? Welches Signalwort leitet das Fazit ein?
x Denn …
x Zwar …
* Unterm Strich …
x Natürlich …
! Klassischer Schlussmarker.
```

**A16 · Meinung oder Fakt?**

```uebung
? Welche Ausdrücke signalisieren eine **Meinung**? (mehrere richtig)
* höchste Zeit
* in Wahrheit
* unterm Strich
* vermutlich
x rund zwei Drittel
x nach einer Erhebung
x üblicherweise
x grundsätzlich
! Die neutralen Ausdrücke schreiben zu oder beschreiben Übliches; die anderen bewerten.
```

**A17–A21 · Aus dem Kontext erraten.**

```uebung
? „nach einer aktuellen Erhebung des Branchenverbands" — die Erhebung ist …
* eine Umfrage/Studie
x eine Erhöhung
x eine Beschwerde
x eine Verordnung
! Formeller als *Umfrage*, gleiche Bedeutung.

? „bis Montagmorgen praktisch nicht handlungsfähig" — handlungsfähig heißt …
* in der Lage zu handeln/zu reagieren
x erreichbar per Telefon
x wirtschaftlich gesund
x rechtlich zuständig
! *Handlung* + *fähig*.

? „keine Bevormundung, sondern Risikomanagement" — Bevormundung heißt …
* jemandem vorschreiben, was er zu tun hat
x eine Warnung
x eine Belohnung
x eine Verzögerung
! *vor* + *Mund* → jemandem den Mund vorschreiben.

? „an einen nachgelagerten Dienst weitergereicht" — nachgelagert heißt …
* downstream, weiter hinten in der Kette
x veraltet
x optional
x extern
! Gegenteil: *vorgelagert* (upstream).

? „nur bei idempotenten Operationen unbedenklich" — unbedenklich heißt …
* ungefährlich, ohne Risiko
x nicht empfohlen
x kompliziert
x kostenlos
! *un-* + *bedenklich* (worrying).
```

---

### B. Anwenden — read for argument

**B1–B5 · Text 1: richtig oder falsch?**

```uebung
? Etwa zwei Drittel der Betriebe haben teilweise ausgelagert.
* richtig
x falsch
! Steht so im Text.

? Mittelständische Unternehmen lagern am wenigsten aus.
x richtig
* falsch
! Bei ihnen ist der Anteil **besonders stark gewachsen**. „Am stärksten gewachsen" ist nicht „am höchsten" — und beim Überfliegen wird daraus leicht das Gegenteil. Genau diese Umkehrung ist der häufigste Prüfungsfehler.

? Der Fachkräftemangel spielt eine Rolle.
* richtig
x falsch
! „Auch der Fachkräftemangel spielt eine Rolle."

? Der Text erwartet, dass der Trend endet.
x richtig
* falsch
! „Branchenbeobachter rechnen dennoch damit, dass sich der Trend fortsetzt."

? Datenschützer fordern Regeln für Daten außerhalb der EU.
* richtig
x falsch
! Letzter Satz des dritten Absatzes.
```

**B6–B8 · Text 1: Inhalt.**

```uebung
? Welche zwei Dinge verliert man laut Kritikern beim vollständigen Auslagern? (mehrere richtig)
* technisches Wissen
* Verhandlungsmacht
x Kunden
x Rechenzentren
! „verliert nicht nur technisches Wissen, sondern auch Verhandlungsmacht".

? Warum nennen die Befragten Skalierbarkeit als Hauptgrund?
* weil sich Rechenleistung kurzfristig zubuchen lässt, ohne Hardware zu beschaffen
x weil es billiger ist als eigene Server
x weil Kunden es verlangen
x weil es gesetzlich gefordert ist
! Wörtlich im zweiten Absatz.

? Warum ist eine Rückverlagerung unwahrscheinlich?
* weil sie wirtschaftlich kaum darstellbar ist
x weil es verboten ist
x weil die Anbieter es nicht zulassen
x weil das Wissen fehlt
! „für die meisten Betriebe wirtschaftlich kaum darstellbar".
```

**B9–B11 · Text 2: Argument.**

```uebung
? Was ist die Kernthese des Kommentars?
* Freitagnachmittags sollte nichts mehr ausgeliefert werden.
x Automatische Rollbacks lösen das Problem.
x Deployments sind generell zu riskant.
x Teams arbeiten am Wochenende zu wenig.
! „Am Freitagnachmittag wird nichts mehr ausgeliefert."

? Was räumt der Autor ein?
* dass moderne Pipelines und Rollbacks vieles abfangen
x dass Freitagsdeployments bequem sind
x dass sein Team es anders macht
x dass die Regel unnötig ist
! „Zwar wird gern eingewendet, moderne Pipelines … hätten dieses Problem gelöst. Natürlich ist an diesem Einwand etwas dran."

? Wie entkräftet er die Einräumung?
* Gerade die Fehler, die ein Rollback nicht auffängt, treten weiter auf.
x Er ignoriert sie.
x Er sagt, Rollbacks funktionieren nie.
x Er verweist auf ein Gesetz.
! Einräumen, teilweise zugestehen, dann so weit einschränken, dass es den eigenen Fall nicht mehr deckt — das deutsche Standardmuster der Argumentation.
```

**B12–B15 · Text 3: Mechanismen.**

```uebung
? Was macht ein Timeout?
* begrenzt die Wartezeit
x verhindert weitere Anfragen
x wiederholt die Anfrage
x speichert das Ergebnis
! Erster der drei Mechanismen.

? Was macht ein Circuit Breaker?
x begrenzt die Wartezeit
* verhindert weitere Anfragen an einen überlasteten Dienst
x wiederholt die Anfrage sofort
x protokolliert Fehler
! Zweiter Mechanismus.

? Was macht die Wiederholungsstrategie?
x begrenzt die Wartezeit
x blockiert den Dienst
* wiederholt mit wachsenden Abständen, um nicht zusätzlich zu belasten
x verwirft die Anfrage
! Exponentiell wachsende Abstände.

? Warum sind Wiederholungen bei nicht-idempotenten Operationen riskant?
* derselbe Vorgang kann mehrfach ausgeführt werden — z. B. eine Zahlung doppelt
x sie dauern zu lange
x sie brauchen mehr Speicher
x sie funktionieren technisch nicht
! Das Beispiel steht wörtlich im Text.
```

**B16–B21 · Vokabular aus den Texten.**

```uebung
? Deutsch für „survey"
= Erhebung | die Erhebung
! Formeller als *Umfrage*.

? Deutsch für „skills shortage"
= Fachkräftemangel | der Fachkräftemangel
! Fachkräfte + Mangel.

? Deutsch für „bargaining power"
= Verhandlungsmacht | die Verhandlungsmacht
! Verhandlung + Macht.

? Deutsch für „downstream service"
= nachgelagerter Dienst | der nachgelagerte Dienst | nachgelagert
! Gegenteil: vorgelagert.

? Deutsch für „to be unreachable"
= nicht erreichbar sein | nicht erreichbar
! Das Standardwort in deutschen Betriebsmeldungen.

? Deutsch für „objection"
= Einwand | der Einwand
! Aus Text 2: „an diesem Einwand ist etwas dran".
```

**B22–B25 · Passiv in Text 3.**

```uebung
? Welche Formen sind Passiv? (mehrere richtig)
* muss davon ausgegangen werden
* wird weitergereicht
* werden kombiniert
x kann beantwortet werden — ja, auch das ist Passiv
! Alle vier sind Passiv. Fachtexte im Deutschen sind fast durchgehend passivisch, weil der Handelnde bewusst offenbleibt.

? Wandle um in einen man-Satz: „In verteilten Systemen muss davon ausgegangen werden, dass …"
= In verteilten Systemen muss man davon ausgehen, dass … | Man muss davon ausgehen, dass
! Das Passiv-zu-*man*-Umwandeln ist ein zuverlässiger Verständnistest: Wer es umformen kann, hat den Satz verstanden.

? Wandle um: „Üblicherweise werden drei Mechanismen kombiniert."
= Üblicherweise kombiniert man drei Mechanismen
! Inversion nach *üblicherweise*.

? Welche Variante passt besser in ein README?
* die Aktiv-Variante mit man — kürzer und sagt, wer handelt
x die Passiv-Variante — klingt professioneller
! Für Spezifikationen ist Passiv üblich, für Anleitungen Aktiv. Beides ist korrekt — die Wahl ist Register, nicht Grammatik.
```

**B26 · Lesegang wählen.**

```uebung
? Du hast zehn Minuten vor einem Architektur-Meeting. Welchen Text liest du intensiv?
* Text 3 — du musst danach handeln
x Text 1 — die Zahlen sind wichtig
x Text 2 — die Meinung ist relevant
! Bei Text 3 kostet ein Missverständnis dich Produktionsfehler. Text 1 ist Hintergrund, Text 2 Meinung ohne Handlungsbedarf — beide reichen zum Überfliegen.
```

---

### C. Produzieren — write from the reading (C1–C7)

**C1.** Summarize Text 1 in **3 German sentences**.

**C2.** Write a **counter-Kommentar** to Text 2 (5 sentences): argue that Friday deployments are
fine, with a concession.

**C3.** Rewrite Text 3's first paragraph in **active voice with *man***. Which reads better in a
README, and why?

**C4.** Translate: *Retries are only safe with idempotent operations.*

**C5.** Translate: *Critics warn of the growing dependence on a few large providers.*

**C6.** Write a 4-sentence **Kommentar** on a real opinion you hold about your team's process,
following the These → Argument → Einräumung → Fazit shape.

**C7.** Extract **8 compounds** from the three texts, split them, and add them to
[Flashcards](#/@flashcards) with article and plural.

---

### D. Transfer — real sources (D1–D4)

**D1.** Read one **t3n.de** article this week on a topic you already know in English. Note where
your domain knowledge carried you over a language gap.

**D2.** Read one **heise.de** article and identify: These, Argumente, Fazit. Was it news or Kommentar?

**D3.** Take one paragraph of German documentation from a tool you use. Convert its Passiv sentences
into *man*-sentences to check you understood them.

**D4.** Headline tracker — five days.

| Tag | Quelle | Schlagzeile | Nachricht oder Kommentar? |
|---|---|---|---|
| Mo | | | |
| Di | | | |
| Mi | | | |
| Do | | | |
| Fr | | | |

---

## ✅ Musterlösungen für C und D

```spoiler
### C. Produzieren

**C4.** *Wiederholungen sind nur bei idempotenten Operationen unbedenklich.*

**C5.** *Kritiker warnen vor der wachsenden Abhängigkeit von wenigen großen Anbietern.*
(*warnen **vor** + Dativ* — verb signature, see [Phase 2 · Grammar](#/phase-2/grammar).)

**C1. Musterlösung:** *Immer mehr deutsche Unternehmen verlagern Anwendungen in die Cloud; rund
zwei Drittel haben bereits Teile ausgelagert. Als Gründe gelten die bessere Skalierbarkeit und der
Fachkräftemangel. Kritiker warnen allerdings vor Abhängigkeit und fordern klarere Datenschutzregeln.*

**C3.** Aktiv mit *man*: *In verteilten Systemen muss man grundsätzlich davon ausgehen, dass Teile
des Systems zeitweise nicht erreichbar sind …*
Für ein README ist die **Aktiv-Variante meist besser** — sie ist kürzer und sagt, wer handelt. Für
eine formale Spezifikation ist das Passiv üblicher, weil der Handelnde bewusst offenbleibt. Beides
ist korrekt; die Wahl ist Register, nicht Grammatik.

**C6. Musterlösung:**
*Es ist höchste Zeit, dass wir Code-Reviews verbindlich machen. Denn zurzeit hängt die Qualität
davon ab, wer gerade Zeit hat. Zwar kostet ein Review Zeit, und natürlich verzögert es die
Auslieferung um einige Stunden. Unterm Strich ist diese Verzögerung aber deutlich billiger als ein
Fehler, den erst der Kunde bemerkt.*

### D. Transfer

Your own material. For D1, the point of choosing a familiar topic is exactly that inference —
domain knowledge is the cheapest reading aid you own, and using it deliberately is a skill, not
cheating.
```

---

## 🧾 Zusammenfassung · Summary

B2 reading is **argument detection**. Three passes stay the same (skim → close read with guessing →
harvest), but the goal shifts: identify the **These**, the **Argumente**, the **Einräumung** and the
**Fazit**, and separate opinion markers (*höchste Zeit, in Wahrheit, unterm Strich, vermutlich*)
from attributed facts (*nach einer Erhebung, rund zwei Drittel*). Compounds still crack
right-to-left, and technical German leans heavily on the **Passiv** — converting it to *man* is a
reliable comprehension check. Watch the exam-style inversion drilled in B1b: "grew fastest" is not
"is highest". Theory: [Phase 2 · Reading](#/phase-2/reading).

## 📇 Vokabel-Checkliste · Vocabulary checklist

| Deutsch | Artikel | Plural | English | VI (if hard) |
|---|---|---|---|---|
| Erhebung | die | Erhebungen | survey, study | khảo sát |
| Fachkräftemangel | der | — | skills shortage | thiếu nhân lực |
| Verhandlungsmacht | die | — | bargaining power | thế thương lượng |
| Einwand | der | Einwände | objection | phản bác |
| Auswirkung | die | Auswirkungen | impact | tác động |
| Bevormundung | die | Bevormundungen | patronizing | sự áp đặt |
| nachgelagert | — | — | downstream | phía sau, phụ thuộc |
| unbedenklich | — | — | safe, harmless | an toàn |
| handlungsfähig | — | — | able to act | có thể xử lý |

→ Drill these in [Flashcards](#/@flashcards).

## 📝 Hausaufgabe · Homework

- [ ] Work all three texts through **A–B** with no dictionary on the first pass.
- [ ] Write the **counter-Kommentar** (C2) and your own **Kommentar** (C6).
- [ ] Extract and drill **8 compounds** (C7).
- [ ] Fill the **D4 headline tracker** for five days.
- [ ] Read one real heise.de article and label These / Argumente / Fazit (D2).

## 📚 Empfohlene Ressourcen · Recommended resources

- **Sources:** t3n.de (start here), heise.de (graduate to this), Informatik Aktuell.
- **Graded bridge:** DW Top-Thema if authentic text still feels too fast.
- **Back to theory:** [Phase 2 · Reading](#/phase-2/reading).
- **Next:** [Phase 2 · Writing](#/phase-2/writing) and its [Übungsteil](#/phase-2/writing-uebungen).
