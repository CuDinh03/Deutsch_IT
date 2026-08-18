# Interview Q&A · System Design auf Deutsch

> **Level:** C1 · **Focus:** die Aufgabe führen, laut denken, Trade-offs benennen, Zahlen sprechen · **Time:** ~2,5 h
> _After this module you can run a German system-design round out loud — including the numbers, which is where most people switch back to English._

Im System-Design-Gespräch wird nicht geprüft, ob du die perfekte Architektur kennst, sondern ob du
eine offene Aufgabe **strukturiert öffnest, laut denkst und Kompromisse benennst**. Auf Deutsch
kommen zwei Hürden dazu: die **Gesprächsführung** (du moderierst, nicht die andere Seite) und die
**Zahlen** — Größenordnungen, Latenzen, Durchsatz auszusprechen ist der Punkt, an dem die meisten
unbewusst ins Englische kippen.

## Objectives / Lernziele

- Die Aufgabe mit **Klärungsfragen** öffnen, bevor du zeichnest.
- Laut denken mit **Signalsätzen**, die deine Struktur hörbar machen.
- **Trade-offs** benennen, statt eine Lösung zu verteidigen.
- **Größenordnungen** auf Deutsch aussprechen und überschlagen.

## 1. „Entwerfen Sie einen ausfallsicheren Zahlungsdienst."

**Frage (DE):** Entwerfen Sie einen Zahlungsdienst, der auch bei Ausfällen des externen Anbieters keine Bestellung verliert.
**Question (EN):** Design a payment service that loses no order even when the external provider fails.

**Musterantwort — Eröffnung (DE):** Bevor ich anfange, würde ich gern drei Dinge klären. Erstens die Größenordnung: Reden wir über hundert Zahlungen pro Minute oder über zehntausend? Zweitens die fachliche Anforderung: Muss die Zahlung sofort bestätigt sein, oder reicht eine spätere Bestätigung? Und drittens: Was ist schlimmer — eine doppelte Buchung oder eine verzögerte? Danach würde ich in drei Schritten vorgehen: zunächst der Ablauf im Normalfall, dann die Fehlerfälle, abschließend Betrieb und Sichtbarkeit.

**English:** Before I start I'd like to clarify three things. First, the order of magnitude: are we talking a hundred payments a minute or ten thousand? Second, the business requirement: must the payment be confirmed immediately, or is later confirmation enough? And third: which is worse — a duplicate booking or a delayed one? Then I'd proceed in three steps: the happy path first, then the failure cases, finally operations and observability.

**Vietnamese:** `VI:` *die Größenordnung* = "bậc độ lớn" (trăm hay chục nghìn). *Was ist schlimmer — X oder Y?* là câu hỏi làm rõ **quan trọng nhất**: nó ép người phỏng vấn nói ra ưu tiên thật.

**Vokabular:** die Größenordnung (order of magnitude) · die Doppelbuchung (duplicate booking) · der Normalfall (happy path) · die Sichtbarkeit (observability).

**Grammatik/Redemittel:** *„Bevor ich anfange, würde ich gern … klären"* — Konjunktiv II als höfliche Führung. Du übernimmst damit die Moderation, ohne es anzukündigen.

**Native tip:** Sofort zu zeichnen ist der häufigste Fehler. Drei Klärungsfragen kosten neunzig Sekunden und ersparen dir, die falsche Aufgabe zu lösen.

## 2. Laut denken — die Signalsätze

Im deutschen Fachgespräch wird **Schweigen als Steckenbleiben gelesen**, nicht als Konzentration.
Du musst hörbar denken.

| Funktion | Signalsatz |
|---|---|
| Struktur ankündigen | „Ich würde in drei Schritten vorgehen: zunächst … , dann … , abschließend …" |
| Annahme setzen | „Ich nehme für den Moment an, dass … — sagen Sie mir gern, wenn das nicht stimmt." |
| Denkschritt zeigen | „Der kritische Punkt ist hier aus meiner Sicht …" |
| Option abwägen | „Es gäbe zwei Wege. Der eine wäre … , der andere …" |
| Entscheiden | „Ich würde mich für … entscheiden, weil …" |
| Zurückstellen | „Das würde ich zunächst zurückstellen und später ergänzen." |
| Lücke zugeben | „Das habe ich noch nicht gebaut — ich würde so vorgehen: …" |
| Zusammenfassen | „Bis hierher haben wir also: …" |

Der letzte ist der wertvollste. Wer nach fünf Minuten kurz bündelt, behält die Führung — und gibt
der anderen Seite die Chance zu korrigieren, bevor der Entwurf in die falsche Richtung wächst.

## 3. Trade-offs — die eigentliche Prüfung

Eine Lösung ohne Preis ist verdächtig. Der Standardsatz lautet:

🇩🇪 **„Der Vorteil wäre … , der Nachteil …"** — und beides gehört ausgesprochen.

| Entscheidung | Vorteil | Preis |
|---|---|---|
| Warteschlange statt direktem Aufruf | keine Bestellung geht bei Ausfall verloren | Betriebsaufwand, Überwachung der Queue |
| Idempotente Endpunkte | Wiederholungen erzeugen keine Doppelbuchung | zusätzlicher Schlüssel, Speicherung der Vorgänge |
| Zwischenspeicherung | geringere Latenz, weniger Last | Daten können veraltet sein |
| Synchrone Bestätigung | sofortige Rückmeldung an Kundschaft | Ausfall des Anbieters trifft direkt durch |
| Mehr Replikate | höhere Ausfallsicherheit | Kosten, komplexere Datenhaltung |

🇩🇪 **Musterformulierung:** *„Ich würde die Zahlung über eine Warteschlange verarbeiten. Der Vorteil wäre, dass ein Ausfall des Anbieters keine Bestellung verliert. Der Preis ist der höhere Betriebsaufwand: Ohne Überwachung der Warteschlangenlänge merkt man einen Rückstau erst beim Kunden."*

## 4. Zahlen auf Deutsch — der unterschätzte Teil

Überschlagsrechnungen sind Teil der Aufgabe, und Zahlen laut auszusprechen ist der Punkt, an dem
Vorbereitung sichtbar wird.

| Geschrieben | Gesprochen |
|---|---|
| 10.000 Anfragen/s | zehntausend Anfragen pro Sekunde |
| 1,5 Mio. Nutzer | eineinhalb Millionen Nutzer |
| 200 ms | zweihundert Millisekunden |
| 99,9 % | neunundneunzig Komma neun Prozent |
| 5 TB | fünf Terabyte |
| ~3× | etwa das Dreifache |
| 10^6 | zehn hoch sechs |
| p95 | das fünfundneunzigste Perzentil |

🇩🇪 **Überschlagen laut:** *„Bei zehntausend Anfragen pro Sekunde und einem Kilobyte pro Anfrage sind das rund zehn Megabyte pro Sekunde — das ist unkritisch. Kritisch wird eher die Anzahl der offenen Verbindungen."*

Zwei Wörter, die du dafür brauchst: **überschlagen** (to estimate roughly) und **die Größenordnung**.
*„Ich überschlage das kurz"* ist der Satz, der dir Zeit kauft und gleichzeitig Methode zeigt.

## 5. „Wie würden Sie das skalieren?"

**Frage (DE):** Die Last verzehnfacht sich. Was ändern Sie?
**Question (EN):** The load increases tenfold. What do you change?

**Musterantwort (DE):** Zuerst würde ich messen statt raten — ohne Zahlen zur aktuellen Auslastung ist jede Antwort geraten. Angenommen, der Engpass liegt bei der Datenbank: Dann würde ich in dieser Reihenfolge vorgehen. Erstens die billigen Schritte: Abfragen optimieren, Indizes prüfen, Zwischenspeicherung für die Lesezugriffe. Zweitens horizontal skalieren, also Leseanfragen auf Replikate verteilen. Drittens, und erst dann, die Daten aufteilen — das ist der teuerste Schritt, weil er die Anwendung verändert und schwer rückgängig zu machen ist. Entscheidend erscheint mir dabei die Reihenfolge: Die ersten beiden Schritte sind umkehrbar, der dritte nicht.

**English:** First I'd measure rather than guess — without numbers on current utilisation any answer is a guess. Assuming the bottleneck is the database, I'd proceed in this order. First the cheap steps: optimise queries, check indexes, add caching for reads. Second, scale horizontally, i.e. distribute reads across replicas. Third, and only then, shard the data — the most expensive step, because it changes the application and is hard to reverse. What seems decisive to me is the order: the first two steps are reversible, the third isn't.

**Vietnamese:** `VI:` *der Engpass* = "điểm nghẽn". *rückgängig machen* = "hoàn tác". *umkehrbar* = "có thể đảo ngược" — tiêu chí sắp xếp thứ tự rất được đánh giá cao.

**Vokabular:** der Engpass (bottleneck) · die Auslastung (utilisation) · aufteilen / das Sharding (to shard) · rückgängig machen (to reverse).

**Grammatik/Redemittel:** *„Angenommen, der Engpass liegt bei …"* — Annahme ohne *wenn*, Verb an zweiter Stelle. Sehr kompakt und typisch für Fachgespräche.

**Native tip:** Ordne nach **Umkehrbarkeit**, nicht nach Eleganz. Wer sagt, dass die ersten Schritte reversibel sind und der letzte nicht, zeigt Betriebserfahrung — und das ist es, was in dieser Runde gesucht wird.

## 6. „Was passiert, wenn X ausfällt?"

**Frage (DE):** Was passiert, wenn die Datenbank für zehn Minuten nicht erreichbar ist?
**Question (EN):** What happens if the database is unreachable for ten minutes?

**Musterantwort (DE):** Ich würde das entlang der Aufrufkette durchgehen. Die Schreibvorgänge laufen in eine Zeitüberschreitung — die möchte ich kurz halten, damit sich keine Verbindungen aufstauen. Die Anfragen selbst gehen aber nicht verloren, weil sie in der Warteschlange liegen und nach Wiederherstellung verarbeitet werden. Lesezugriffe würde ich für diese Zeit aus dem Zwischenspeicher bedienen, mit dem ausdrücklichen Hinweis, dass die Daten veraltet sein können. Was auf keinen Fall passieren darf: dass die Wiederholungsversuche die Datenbank beim Hochfahren sofort wieder umwerfen — deshalb Wiederholung mit wachsendem Abstand und einer Obergrenze. Und für die Kundschaft sichtbar: eine ehrliche Fehlermeldung statt eines leeren Zustands.

**English:** I'd walk the call chain. Writes run into a timeout — I want that short so connections don't pile up. The requests themselves aren't lost, because they sit in the queue and are processed after recovery. Reads I'd serve from the cache for that period, with an explicit note that data may be stale. What must not happen: retries knocking the database over again the moment it comes back — hence backoff with a cap. And visibly for customers: an honest error message rather than an empty state.

**Vietnamese:** `VI:` *aufstauen* = "dồn ứ". *umwerfen* = "làm sập". *Wiederholung mit wachsendem Abstand* = exponential backoff.

**Vokabular:** die Zeitüberschreitung (timeout) · der Wiederholungsversuch (retry) · veraltet (stale) · die Obergrenze (cap, upper limit).

**Grammatik/Redemittel:** *„Was auf keinen Fall passieren darf: …"* — Doppelpunkt-Konstruktion mit vorangestelltem Nebensatz. Sehr wirkungsvoll, um eine Priorität zu markieren.

**Native tip:** Denke bis zur **Wiederherstellung** weiter. Die meisten Antworten enden beim Ausfall; die guten erklären, was beim Hochfahren passiert — dort liegt der zweite Ausfall.

## 🏋️ Drill · System Design auf Deutsch

```uebung
? Womit beginnst du eine System-Design-Aufgabe?
x mit dem Zeichnen
x mit der Datenbankwahl
x mit einer Aufzählung möglicher Technologien
* mit zwei bis drei Klärungsfragen
! Neunzig Sekunden Klärung ersparen dir, die falsche Aufgabe zu lösen. Und du übernimmst damit die Moderation.

? Welche Klärungsfrage ist am wertvollsten?
* Was ist schlimmer — eine doppelte Buchung oder eine verzögerte?
x Welche Datenbank soll ich nehmen?
x Wie viel Zeit habe ich?
x Darf ich zeichnen?
! Sie zwingt die andere Seite, die echte Priorität zu nennen. Aus der Antwort folgt fast der ganze Entwurf.

? Warum darfst du im deutschen Fachgespräch nicht lange schweigen?
x Weil man dann durchfällt.
* Schweigen wird als Steckenbleiben gelesen, nicht als Konzentration.
x Weil Schweigen unhöflich ist.
x Weil die Zeit knapp ist.
! Deshalb die Signalsätze: „Ich nehme für den Moment an, dass …", „Der kritische Punkt ist hier …".

? Welcher Satz gehört zu jeder Entwurfsentscheidung?
= Der Vorteil wäre … , der Nachteil … | Der Vorteil wäre, der Nachteil | Der Vorteil wäre … der Preis ist …
! Eine Lösung ohne Preis ist verdächtig. Der Trade-off ist die eigentliche Prüfung, nicht die Lösung.

? Wie sprichst du „p95“ auf Deutsch aus?
= das fünfundneunzigste Perzentil | fünfundneunzigstes Perzentil | das 95. Perzentil
! Zahlen laut auszusprechen ist der Punkt, an dem die meisten unbewusst ins Englische kippen. Genau das übt man vorher.

? „10.000 Anfragen pro Sekunde“ — wie sagst du das?
= zehntausend Anfragen pro Sekunde | zehntausend pro Sekunde
! Und *1,5 Mio.* wird zu *eineinhalb Millionen*. Deutsche Zahlwörter im Kopf haben ist Teil der Vorbereitung.

? Nach welchem Kriterium ordnest du Skalierungsschritte?
x nach Neuheit der Technologie
x nach persönlicher Erfahrung
* nach Umkehrbarkeit — billige und reversible Schritte zuerst
x nach Eleganz
! Abfragen optimieren ist reversibel, Daten aufteilen kaum. Diese Reihenfolge zu nennen, zeigt Betriebserfahrung.

? Was macht eine gute Ausfall-Antwort vollständig?
x dass sie alle Komponenten nennt
x dass sie eine Zahl enthält
x dass sie kurz ist
* dass sie bis zur Wiederherstellung weiterdenkt
! Der zweite Ausfall passiert beim Hochfahren, wenn alle Wiederholungsversuche gleichzeitig kommen. Deshalb: wachsender Abstand plus Obergrenze.

? Du kennst eine Technologie nicht, nach der gefragt wird.
* Das habe ich noch nicht gebaut — ich würde so vorgehen: …
x etwas Plausibles behaupten
x das Thema wechseln
x sagen, die Technologie sei ungeeignet
! Ehrlichkeit plus Vorgehen. Geraten fällt in dieser Runde spätestens bei der zweiten Nachfrage auf.

? Was tust du nach etwa fünf Minuten Entwurf?
x um Feedback bitten
* kurz bündeln: „Bis hierher haben wir also: …"
x weiterzeichnen
x nach der Zeit fragen
! Bündeln behält die Führung und gibt der anderen Seite die Chance zu korrigieren, bevor der Entwurf in die falsche Richtung wächst.
```

```audio
Bevor ich anfange, würde ich gern klären: Reden wir über hundert Zahlungen pro Minute oder über zehntausend? Und was ist schlimmer — eine doppelte Buchung oder eine verzögerte? Danach würde ich in drei Schritten vorgehen.
```

---

## 🧾 Zusammenfassung · Summary

A German system-design round grades **how you open, think aloud and price your choices**, not whether
you know the ideal architecture. Open with two or three **Klärungsfragen** — above all *„Was ist
schlimmer — X oder Y?"*, which forces the real priority into the open — and only then draw. Because
silence reads as being stuck rather than as thinking, keep the **Signalsätze** running: announce the
structure, state assumptions explicitly, name the critical point, and after five minutes **bündeln**
so the design can still be corrected cheaply. Every decision needs its price: *„Der Vorteil wäre … ,
der Nachteil …"* Order scaling steps by **reversibility**, not elegance, and always carry the failure
answer through to **recovery** — the second outage happens when every retry returns at once. And
practise the numbers out loud: *zehntausend Anfragen pro Sekunde*, *eineinhalb Millionen*, *das
fünfundneunzigste Perzentil*. That is where preparation becomes audible.

## 📇 Vokabel-Checkliste · Vocabulary checklist

| Deutsch | Artikel | Plural | English | VI (if hard) |
|---|---|---|---|---|
| Größenordnung | die | Größenordnungen | order of magnitude | bậc độ lớn |
| Engpass | der | Engpässe | bottleneck | điểm nghẽn |
| Auslastung | die | Auslastungen | utilisation, load | mức tải |
| Zeitüberschreitung | die | -überschreitungen | timeout | quá thời gian chờ |
| Wiederholungsversuch | der | -versuche | retry | lần thử lại |
| Obergrenze | die | Obergrenzen | cap, upper limit | giới hạn trên |
| Doppelbuchung | die | Doppelbuchungen | duplicate booking | ghi trùng |
| überschlagen | — | — | to estimate roughly | ước lượng nhanh |
| aufstauen (sich) | — | — | to pile up | dồn ứ |
| rückgängig machen | — | — | to reverse, undo | hoàn tác |

→ Drill these in [Flashcards](#/@flashcards).

## 🗣️ Sprechübung · Speaking practice

1. Öffne eine beliebige Design-Aufgabe laut mit **drei Klärungsfragen**.
2. Sprich zehn **Größenordnungen** auf Deutsch aus, inklusive Prozent- und Perzentilangaben.
3. Formuliere fünf Entscheidungen laut, jede mit *„Der Vorteil wäre … , der Nachteil …"*.

## 📝 Hausaufgabe · Homework

- [ ] Eine vollständige Design-Aufgabe in 20 Minuten **laut** durchsprechen und aufnehmen.
- [ ] Beim Abhören zählen: Wie oft hast du länger als fünf Sekunden geschwiegen?
- [ ] Zehn Größenordnungen und fünf Perzentilangaben laut üben.
- [ ] Zu drei echten Entscheidungen aus deinem System den Preis formulieren.
- [ ] Die acht Signalsätze aus §2 auswendig.

## 📚 Empfohlene Ressourcen · Recommended resources

- **Fachvokabular:** [Architecture & System Design](#/vocabulary/architecture-system-design) · [Microservices & Cloud](#/vocabulary/microservices-cloud).
- **Verwandte Banken:** [Backend / Java](#/interviews/backend) · [Spring & Microservices](#/interviews/spring-microservices) · [Live-Coding](#/interviews/live-coding).
- **Struktur laut:** [Phase 3 · Speaking · Übungsteil](#/phase-3/speaking-uebungen) — Architektur erklären.
- **Diskutieren:** [Dialogue · Architektur-Diskussion](#/dialogues/architektur-diskussion).
