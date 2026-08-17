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

### A. Erkennen — skim & structure (A1–A7)

**A1.** Skim all three for 90 seconds. Match text to type.

| Text | Nachricht | Kommentar | Fachtext |
|---|:--:|:--:|:--:|
| 1 | ☐ | ☐ | ☐ |
| 2 | ☐ | ☐ | ☐ |
| 3 | ☐ | ☐ | ☐ |

**A2.** Which text has a **stance**? How did you know within ten seconds?

**A3.** Crack these compounds right-to-left: split, article, meaning.

*die Datenverarbeitung · der Fachkräftemangel · die Rückverlagerung · die Wiederholungsstrategie ·
der Branchenverband · die Verhandlungsmacht · die Drittanbieter-Integration*

**A4.** In Text 2, find the four parts of a Kommentar and quote the cue word for each.

| Teil | Signalwort im Text |
|---|---|
| These | |
| Argument | |
| Gegenargument (Einräumung) | |
| Fazit | |

**A5.** Which words in the texts signal **opinion** rather than fact?

*rund zwei Drittel · höchste Zeit · nach einer Erhebung · in Wahrheit · üblicherweise ·
unterm Strich · vermutlich · grundsätzlich*

**A6.** Scan only — find these as fast as you can.

| Nr | Gesucht | Antwort |
|---|---|---|
| a | Anteil der Betriebe, die auslagern (T1) | |
| b | Wie lange dauert die Behebung am Wochenende (T2) | |
| c | Wie viele Mechanismen nennt T3 | |
| d | Bei welchen Operationen sind Wiederholungen unbedenklich (T3) | |

**A7.** Guess from context — no dictionary.

| Wort | Kontext | Vermutung |
|---|---|---|
| die Erhebung | „nach einer aktuellen Erhebung des Branchenverbands" | |
| handlungsfähig | „bis Montagmorgen praktisch nicht handlungsfähig" | |
| die Bevormundung | „keine Bevormundung, sondern Risikomanagement" | |
| nachgelagert | „an einen nachgelagerten Dienst weitergereicht" | |
| unbedenklich | „nur bei idempotenten Operationen unbedenklich" | |

---

### B. Anwenden — read for argument (B1–B10)

**B1 · Text 1** — richtig oder falsch?

| Nr | Aussage | R | F |
|---|---|:--:|:--:|
| a | Etwa zwei Drittel der Betriebe haben teilweise ausgelagert. | ☐ | ☐ |
| b | Mittelständische Unternehmen lagern am wenigsten aus. | ☐ | ☐ |
| c | Der Fachkräftemangel ist einer der Gründe. | ☐ | ☐ |
| d | Der Text erwartet, dass der Trend endet. | ☐ | ☐ |
| e | Datenschützer wollen Regeln für Daten außerhalb der EU. | ☐ | ☐ |

**B2 · Text 1** — answer in a full German sentence.

- a) Warum nennen die Befragten Skalierbarkeit als Hauptgrund?
- b) Welche zwei Dinge verliert man laut Kritikern beim Auslagern?
- c) Warum ist eine Rückverlagerung unwahrscheinlich?

**B3 · Text 2** — what exactly is the author's claim, in one German sentence?

**B4 · Text 2** — the author concedes something. What, and how does he then defeat it?

**B5 · Text 2** — find the sentence that carries the core argument (the "Rechnung"), and explain it
in your own words.

**B6 · Text 3** — fill the mechanism table.

| Mechanismus | Was macht er? |
|---|---|
| Timeout | |
| Circuit Breaker | |
| Wiederholungsstrategie | |

**B7 · Text 3** — why are retries risky for non-idempotent operations? Give the text's example.

**B8.** Find in the texts the German for:

| Englisch | Deutsch |
|---|---|
| survey | |
| skills shortage | |
| bargaining power | |
| downstream service | |
| exponential backoff | |
| to be unreachable | |

**B9.** Passive hunt. Text 3 is written almost entirely in the **Passiv**. Find four examples and
convert two of them into **man**-sentences.

**B10.** Which text would you read **intensively**, and which only **skim**, if you had ten minutes
before an architecture meeting? Justify.

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

## ✅ Lösungen & Erklärungen

```spoiler
### A. Erkennen

**A1.** Text 1 → **Nachricht** · Text 2 → **Kommentar** · Text 3 → **Fachtext**

**A2.** **Text 2.** Tells within seconds from the headline (*Hört auf, …* — an imperative) and
*Es ist höchste Zeit, dass …*. News reports attribute (*nach einer Erhebung*, *Kritiker warnen*);
a Kommentar asserts in its own voice.

**A3.**
| Kompositum | Zerlegung | Artikel | Bedeutung |
|---|---|---|---|
| die Datenverarbeitung | Daten + Verarbeitung | die | data processing |
| der Fachkräftemangel | Fachkräfte + Mangel | der | skills shortage |
| die Rückverlagerung | Rück + Verlagerung | die | moving back (repatriation) |
| die Wiederholungsstrategie | Wiederholung + Strategie | die | retry strategy |
| der Branchenverband | Branche + Verband | der | industry association |
| die Verhandlungsmacht | Verhandlung + Macht | die | bargaining power |
| die Drittanbieter-Integration | Drittanbieter + Integration | die | third-party integration |

**A4.**
| Teil | Signal |
|---|---|
| These | *Es ist höchste Zeit, dass …* |
| Argument | *Denn die Rechnung ist einfach.* |
| Einräumung | *Zwar wird gern eingewendet … Natürlich ist an diesem Einwand etwas dran.* |
| Fazit | *Unterm Strich …* |

**A5.** Meinung: **höchste Zeit, in Wahrheit, unterm Strich, vermutlich** ·
Fakt/neutral: *rund zwei Drittel, nach einer Erhebung, üblicherweise, grundsätzlich*

**A6.** a) **rund zwei Drittel** · b) **zwei Tage** (statt zwanzig Minuten) · c) **drei** ·
d) bei **idempotenten** Operationen

**A7.** die Erhebung = **survey/study** · handlungsfähig = **able to act/respond** ·
die Bevormundung = **patronizing / being told what to do** · nachgelagert = **downstream** ·
unbedenklich = **safe, harmless**

### B. Anwenden

**B1.** a) **R** · b) **F** — bei ihnen ist der Anteil *besonders stark gewachsen* ·
c) **R** · d) **F** — Beobachter rechnen damit, dass er sich **fortsetzt** · e) **R**

Item b) is the classic exam inversion: the text says growth was *strongest* there, the statement
claims they outsource *least*. Skim-reading turns "grew fastest" into "is highest" or its opposite
with equal ease — this is why B2 reading questions must be answered from the sentence, not memory.

**B2.** a) *Weil sich Rechenleistung kurzfristig zubuchen lässt, ohne dass Hardware beschafft
werden muss.* · b) *Technisches Wissen und Verhandlungsmacht.* · c) *Weil sie für die meisten
Betriebe wirtschaftlich kaum darstellbar ist.*

**B3.** *Teams sollten freitagnachmittags nichts mehr ausliefern, weil das Risiko in der
handlungsunfähigen Zeit bis Montag unverhältnismäßig hoch ist.*

**B4.** Einräumung: moderne Pipelines und automatische Rollbacks hätten das Problem gelöst.
Entkräftung: gerade die Fehler, die ein Rollback **nicht** auffängt (fehlerhafte Migrationen,
korrupte Daten, kaputte Integrationen), treten weiter auf.
That's the standard German argumentative move: name the counter-argument, grant it partially
(*Natürlich ist etwas dran*), then narrow it until it no longer covers your case.

**B5.** *„Ein Fehler, der freitags um siebzehn Uhr in Produktion geht, trifft auf ein Unternehmen,
das bis Montagmorgen praktisch nicht handlungsfähig ist."* — the cost isn't the bug, it's the
**window in which nobody can respond**.

**B6.** Timeout = **begrenzt die Wartezeit** · Circuit Breaker = **verhindert weitere Anfragen an
einen überlasteten Dienst** · Wiederholungsstrategie = **wiederholt mit exponentiell wachsenden
Abständen, um den Dienst nicht zusätzlich zu belasten**

**B7.** Weil derselbe Vorgang mehrfach ausgeführt werden kann — Beispiel: **eine Zahlung** würde
doppelt ausgeführt.

**B8.** survey = **die Erhebung** · skills shortage = **der Fachkräftemangel** · bargaining power =
**die Verhandlungsmacht** · downstream service = **der nachgelagerte Dienst** · exponential backoff
= **Wiederholung mit exponentiell wachsenden Abständen** · to be unreachable = **nicht erreichbar
sein**

**B9.** Passiv-Beispiele: *muss davon ausgegangen werden · wird weitergereicht · kann beantwortet
werden · werden kombiniert · geschickt werden · ausgeführt werden*.
Als *man*-Sätze: *Man muss grundsätzlich davon ausgehen, dass …* · *Üblicherweise kombiniert man
drei Mechanismen.*

**B10.** Intensiv: **Text 3** — du musst danach handeln, ein Missverständnis kostet dich
Produktionsfehler. Skim: **Text 1** (Hintergrund) und **Text 2** (Meinung, kein Handlungsbedarf).

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
