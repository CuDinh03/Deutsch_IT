# Interview Q&A · Live-Coding & Technical Screening

> **Level:** C1 · **Focus:** laut denken beim Programmieren, klären, feststecken, Hinweise annehmen · **Time:** ~2 h
> _After this module you can code and narrate at the same time in German — which is a separate skill from either one alone._

Live-Coding auf Deutsch ist **zweimal Multitasking**: Du löst ein Problem und erklärst es
gleichzeitig, in einer Fremdsprache, unter Beobachtung. Die gute Nachricht: Das Vokabular ist klein
und wiederholt sich. Die schlechte: Schweigen wird hier noch schärfer bewertet als im
System-Design-Gespräch, weil die Prüferin sonst nur einen blinkenden Cursor sieht.

Dieses Modul gibt dir die **Sätze**, die zwischen den Tastenanschlägen laufen — und die drei
Situationen, in denen die meisten die Runde verlieren: falsch verstandene Aufgabe, stilles
Feststecken, abgelehnter Hinweis.

## Objectives / Lernziele

- Die Aufgabe mit **Klärungsfragen** eingrenzen, bevor du tippst.
- Beim Programmieren **laut denken**, ohne den Faden zu verlieren.
- **Feststecken** sprachlich sauber machen — und Hinweise annehmen.
- Über **Komplexität und Tests** auf Deutsch sprechen.

## 1. Die Aufgabe eingrenzen

**Frage (DE):** Schreiben Sie eine Funktion, die in einer Liste von Transaktionen Duplikate findet.
**Question (EN):** Write a function that finds duplicates in a list of transactions.

**Musterantwort — Eröffnung (DE):** Bevor ich anfange, drei kurze Fragen. Erstens: Was gilt als Duplikat — dieselbe ID, oder dieselben Felder bei unterschiedlicher ID? Zweitens: Wie groß ist die Liste ungefähr — tausend Einträge oder zehn Millionen? Das entscheidet, ob ich alles im Speicher halten kann. Und drittens: Soll die Funktion die Duplikate zurückgeben oder nur melden, dass es welche gibt? … Gut. Dann fasse ich zusammen: dieselbe ID zählt als Duplikat, die Liste passt in den Speicher, und ich gebe die Duplikate zurück. Ich fange mit der einfachen Variante an und optimiere danach, wenn Zeit bleibt.

**English:** Before I start, three quick questions. First: what counts as a duplicate — the same ID, or the same fields with different IDs? Second: roughly how large is the list — a thousand entries or ten million? That decides whether I can hold everything in memory. And third: should the function return the duplicates or just report that there are some? … Good. So to summarise: same ID counts as a duplicate, the list fits in memory, and I return the duplicates. I'll start with the simple version and optimise afterwards if there's time.

**Vietnamese:** `VI:` *eingrenzen* = "khoanh vùng, thu hẹp". Câu chốt *„Dann fasse ich zusammen: …"* rất quan trọng — nó xác nhận bạn hiểu đúng đề trước khi gõ dòng nào.

**Vokabular:** das Duplikat (duplicate) · der Eintrag (entry) · in den Speicher passen (to fit in memory) · zurückgeben (to return).

**Grammatik/Redemittel:** *„Ich fange mit der einfachen Variante an und optimiere danach"* — trennbares *anfangen mit* + Dativ. Der Satz kauft dir ausdrücklich die Erlaubnis, erst naiv zu lösen.

**Native tip:** Fasse die Antworten **zurück**, bevor du tippst. Das kostet zehn Sekunden und ist die billigste Versicherung gegen die falsche Aufgabe.

## 2. Laut denken beim Tippen

Der Trick ist, in **kurzen Ansagen** zu sprechen statt in Erklärungen. Du kommentierst, was du
gerade tust, nicht warum die Informatik so ist.

| Moment | Satz |
|---|---|
| Anfangen | „Ich fange mit der einfachen Variante an." |
| Struktur wählen | „Ich nehme hier ein Set, weil ich nur wissen muss, ob ich den Wert schon gesehen habe." |
| Schleife ansagen | „Jetzt gehe ich einmal durch die Liste." |
| Bedingung erklären | „Wenn die ID schon im Set ist, ist es ein Duplikat." |
| Randfall nennen | „Den leeren Fall behandle ich gleich noch." |
| Zwischenstand | „Bis hierher hätten wir die einfache Lösung." |
| Umbauen | „Das ziehe ich noch in eine eigene Methode." |
| Selbstkorrektur | „Moment — das stimmt so noch nicht, ich korrigiere das kurz." |
| Prüfen | „Ich gehe das einmal mit einem Beispiel durch." |

**Die wichtigste Zeile ist die Selbstkorrektur.** Einen eigenen Fehler laut zu bemerken und zu
beheben wirkt in einem deutschen Fachgespräch **besser** als fehlerfreier Code, weil es zeigt, dass
du prüfst statt hoffst.

```uebung
? Warum ist Schweigen im Live-Coding besonders teuer?
* Die Prüferin sieht sonst nur einen blinkenden Cursor und kann deinen Gedanken nicht folgen.
x Weil es unhöflich ist.
x Weil die Zeit knapp ist.
x Weil man dann durchfällt.
! Bewertet wird der Denkweg, nicht nur das Ergebnis. Ohne Kommentar ist der Denkweg unsichtbar.

? Was sagst du, wenn du einen eigenen Fehler bemerkst?
= Moment — das stimmt so noch nicht, ich korrigiere das kurz | Moment, das stimmt so noch nicht | Das stimmt so noch nicht, ich korrigiere das
! Laut bemerken und beheben wirkt besser als fehlerfreier Code: Es zeigt, dass du prüfst statt hoffst.

? Wie kommentierst du beim Tippen?
x nur bei Problemen
* in kurzen Ansagen, was du gerade tust
x mit ausführlichen Erklärungen zur Theorie
x gar nicht, danach erklären
! „Jetzt gehe ich einmal durch die Liste" reicht. Vorlesungen über Datenstrukturen kosten Zeit und Konzentration.

? Womit fängst du an?
x mit den Tests
x mit dem Randfall
* mit der einfachen Variante, und sagst das ausdrücklich
x mit der optimalen Lösung
! *„Ich fange mit der einfachen Variante an und optimiere danach"* holt dir ausdrücklich die Erlaubnis — und fast alle Prüferinnen sagen ja.
```

## 3. Wenn du feststeckst

Feststecken ist normal und wird eingeplant. Bewertet wird, **wie** du feststeckst. Drei Stufen,
in dieser Reihenfolge:

| Stufe | Satz |
|---|---|
| 1 · Denkstand offenlegen | „Ich hänge gerade an einer Stelle: Ich weiß, dass ich … brauche, aber mir fehlt noch, wie ich …" |
| 2 · Optionen nennen | „Zwei Möglichkeiten sehe ich: entweder … oder … Ich tendiere zu …, weil …" |
| 3 · Hinweis erbitten | „Wäre es in Ordnung, wenn Sie mir an dieser Stelle einen kleinen Hinweis geben?" |

Und wenn der Hinweis kommt: **annehmen**. Der häufigste vermeidbare Fehler in dieser Runde ist,
einen Hinweis wegzuerklären.

| Statt | Sag |
|---|---|
| „Ja, aber ich wollte das anders machen …" | „Guter Punkt — dann drehe ich das um." |
| Schweigen und weitertippen | „Verstehe, also über einen Index statt über die Liste. Moment, ich baue das um." |
| „Das hätte ich auch gleich gesehen." | „Danke, das war der fehlende Schritt." |

```uebung
? Du steckst fest. Was tust du zuerst?
x um einen Hinweis bitten
x still weiterprobieren
x die Aufgabe wechseln
* deinen Denkstand offenlegen: was du weißt und was dir fehlt
! Erst offenlegen, dann Optionen, dann Hinweis. Wer sofort um Hilfe bittet, überspringt den bewertbaren Teil.

? Wie erbittest du einen Hinweis?
= Wäre es in Ordnung, wenn Sie mir einen kleinen Hinweis geben | Wäre es in Ordnung, wenn Sie mir an dieser Stelle einen kleinen Hinweis geben
! Konjunktiv II, konkrete Stelle. Nachfragen ist eingeplant — es kostet weniger als fünf stille Minuten.

? Du bekommst einen Hinweis, der dir nicht passt.
* annehmen und umbauen — Diskussion später, wenn überhaupt
x erklären, warum dein Weg besser ist
x ignorieren
x um einen anderen Hinweis bitten
! Einen Hinweis wegzuerklären ist der häufigste vermeidbare Fehler dieser Runde. Er wird als mangelnde Zusammenarbeit gelesen, nicht als Selbstbewusstsein.

? Wie lange schweigst du höchstens am Stück?
x gar nicht
* etwa zehn bis fünfzehn Sekunden
x eine Minute
x so lange du brauchst
! Länger wirkt wie ein Blackout. Und eine angekündigte Pause („Lassen Sie mich kurz überlegen") ist völlig in Ordnung — stilles Starren nicht.
```

## 4. Komplexität und Tests auf Deutsch

Zwei Themen kommen fast immer, und beide haben festes Vokabular.

**Komplexität:**

| Notation | Gesprochen |
|---|---|
| O(n) | linear · „linear in der Länge der Liste" |
| O(n²) | quadratisch |
| O(log n) | logarithmisch |
| O(1) | konstant |
| Laufzeit / Speicherbedarf | Zeitkomplexität / Speicherkomplexität |

🇩🇪 **Musterformulierung:** *„Die Laufzeit ist linear, weil ich die Liste einmal durchgehe. Der Speicherbedarf ist ebenfalls linear, weil im schlechtesten Fall alle IDs im Set landen. Man könnte den Speicher sparen, wenn die Liste sortiert wäre — dann käme man mit konstantem Zusatzspeicher aus."*

**Tests:**

| Funktion | Satz |
|---|---|
| Normalfall | „Der normale Fall: drei Einträge, davon zwei gleich." |
| Randfall | „Als Randfälle würde ich die leere Liste und einen einzigen Eintrag prüfen." |
| Fehlerfall | „Und den Fall, dass ein Eintrag keine ID hat." |
| Durchgehen | „Ich gehe das einmal mit dem Beispiel durch: erster Eintrag … " |
| Testabsicht | „Damit ist abgedeckt, dass … " |

🇩🇪 **Der Randfall ist der Punkt, an dem viele Runden entschieden werden.** Wer nach der Lösung von
sich aus *„Als Randfälle würde ich …"* sagt, hebt sich sofort ab — die meisten warten, bis gefragt
wird.

```uebung
? Wie sagst du „O(n)“ auf Deutsch?
= linear | lineare Laufzeit | linear in der Länge der Liste
! Und *O(n²)* ist *quadratisch*, *O(log n)* *logarithmisch*, *O(1)* *konstant*. Fünf Wörter, die man einmal lernt.

? „Der Speicherbedarf ist ebenfalls linear.“ Wovon spricht der Satz?
x von der Dateigröße
x von der Netzwerklast
* von der Speicherkomplexität
x von der Laufzeit
! *die Laufzeit* = Zeit, *der Speicherbedarf* = Platz. Beide gehören in die Antwort, nicht nur die erste.

? Wann nennst du Randfälle?
x wenn gefragt wird
x gar nicht
x vor dem Schreiben
* von dir aus, direkt nachdem die Lösung steht
! Wer sie ungefragt nennt, hebt sich ab. Die meisten warten — und wirken dadurch, als hätten sie nicht daran gedacht.

? Welche Randfälle nennst du bei einer Listenfunktion mindestens?
* die leere Liste und die Liste mit einem einzigen Eintrag
x nur die leere Liste
x sehr große Listen
x gar keine, das macht die Testabteilung
! Leer und Eins fangen die meisten echten Fehler. Große Listen sind eine Performance-, keine Korrektheitsfrage.

? „Ich gehe das einmal mit dem Beispiel durch.“ Warum ist dieser Satz stark?
x Er ist nur höflich.
* Er zeigt, dass du deinen Code prüfst, statt auf Korrektheit zu hoffen.
x Er füllt Zeit.
x Er zeigt Nervosität.
! Den eigenen Code laut an einem Beispiel durchzuspielen findet Fehler — und wird als Methode bewertet.

? Der Code läuft, es sind noch fünf Minuten übrig. Was tust du?
x die Lösung umschreiben
x nach dem Ergebnis fragen
* Randfälle prüfen und laut eine mögliche Optimierung skizzieren
x still warten
! Die verbleibende Zeit gehört noch dir. Randfälle plus eine skizzierte Optimierung sind der beste Abschluss.
```

## 5. Der Abschluss

Wenn der Code läuft, ist die Runde **nicht** vorbei. Drei Sätze, die den Abschluss machen:

> *„Damit läuft der Normalfall. Als Randfälle würde ich die leere Liste und den einzelnen Eintrag
> prüfen — soll ich die noch ergänzen?"*
>
> *„Die Laufzeit ist linear, der Speicherbedarf ebenfalls. Wenn Speicher knapp wäre, würde ich
> stattdessen sortieren und dann in einem Durchgang vergleichen."*
>
> *„In einem echten Projekt würde ich das noch in eine eigene Methode ziehen und einen Test dafür
> schreiben."*

Der letzte Satz ist ein starker Schluss: Er zeigt, dass du weißt, wie sich Prüfungscode von
Produktionscode unterscheidet — ohne dass du im Interview so tust, als wäre es dasselbe.

```audio
Bevor ich anfange, drei kurze Fragen: Was gilt als Duplikat? Wie groß ist die Liste ungefähr? Und soll ich die Duplikate zurückgeben oder nur melden, dass es welche gibt?
```

---

## 🧾 Zusammenfassung · Summary

Live-coding in German is two things at once, so the sentences have to be automatic. Open by
**narrowing the task** with two or three questions and then **summarising the answers back** before
you type — ten seconds of insurance against solving the wrong problem. While coding, speak in
**short announcements** of what you are doing, not lectures on why computer science is that way, and
say *„Ich fange mit der einfachen Variante an"* out loud to earn permission to solve it naively
first. Silence beyond ten or fifteen seconds reads as a blackout: when you get stuck, expose your
thinking, name the options, **then** ask for a hint — and when the hint comes, take it, because
explaining a hint away is the most common avoidable loss in this round. Two topics arrive almost
every time and have fixed vocabulary: **Laufzeit und Speicherbedarf** (*linear, quadratisch,
logarithmisch, konstant*) and **Randfälle** — and naming the edge cases unprompted, right after the
solution works, is what separates you from the candidates who wait to be asked.

## 📇 Vokabel-Checkliste · Vocabulary checklist

| Deutsch | Artikel | Plural | English | VI (if hard) |
|---|---|---|---|---|
| Randfall | der | Randfälle | edge case | trường hợp biên |
| Laufzeit | die | Laufzeiten | runtime complexity | độ phức tạp thời gian |
| Speicherbedarf | der | — | memory footprint | dung lượng bộ nhớ cần |
| Eintrag | der | Einträge | entry, item | mục, phần tử |
| Duplikat | das | Duplikate | duplicate | bản trùng |
| Denkstand | der | — | current state of one's thinking | mạch suy nghĩ hiện tại |
| eingrenzen | — | — | to narrow down | khoanh vùng |
| zurückgeben | — | — | to return (a value) | trả về |
| abdecken | — | — | to cover (a case) | bao phủ |
| feststecken | — | — | to be stuck | bị tắc |

→ Drill these in [Flashcards](#/@flashcards).

## 🗣️ Sprechübung · Speaking practice

1. Löse eine leichte Aufgabe und **sprich dabei durchgehend** — nimm es auf und zähle die Stillephasen über zehn Sekunden.
2. Sprich die fünf Komplexitätsbegriffe und je einen vollständigen Satz dazu.
3. Übe das Feststecken laut: Denkstand, Optionen, Hinweisbitte — in dieser Reihenfolge.

## 📝 Hausaufgabe · Homework

- [ ] Drei Aufgaben lösen und dabei **auf Deutsch** durchsprechen, jede aufgenommen.
- [ ] Beim Abhören zählen: Stillephasen über zehn Sekunden, und wo sie auftraten.
- [ ] Die neun Sätze aus §2 auswendig — sie müssen ohne Nachdenken kommen.
- [ ] Zu drei eigenen Funktionen Laufzeit und Speicherbedarf laut formulieren.
- [ ] Einmal absichtlich feststecken und die Drei-Stufen-Folge durchspielen.

## 📚 Empfohlene Ressourcen · Recommended resources

- **Verwandte Banken:** [Backend / Java](#/interviews/backend) · [System Design](#/interviews/system-design) · [Spring & Microservices](#/interviews/spring-microservices).
- **Fachvokabular:** [Software Development](#/vocabulary/software-development) · [Testing, Agile & Scrum](#/vocabulary/testing-agile).
- **Laut denken im Team:** [Phase 3 · Speaking · Übungsteil](#/phase-3/speaking-uebungen) · [Dialogue · Pair Programming](#/dialogues/pair-programming).
- **Aussprache:** forvo.com und YouGlish für Fachbegriffe; die 🔊-Zeilen zum Shadowing.
