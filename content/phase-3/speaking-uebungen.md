# Phase 3 · Speaking — Übungsteil · Workbook

> **Level:** B2+ · **Focus:** Architektur erklären, Whiteboard-Deutsch, laut denken · **Time:** ~2 h + tägliche Reps
> _After this workbook you can talk through a system design in German without going silent._

This is the practice half of [Phase 3 · Speaking](#/phase-3/speaking). The skill here is not
vocabulary — it's **sequencing** (zuerst → dann → anschließend) and **never going quiet**. German
teams read silence as being stuck; thinking aloud is expected.

Everything marked 🎙 is a recording task.

---

## 🏋️ Übungsteil · Workbook

### A. Erkennen — spot the move

**A1–A6 · Welche Funktion hat die Redewendung?**

```uebung
? „Im Großen und Ganzen besteht das System aus drei Diensten."
* Überblick geben
x Einstiegspunkt nennen
x Grund nennen
x Ergebnis nennen
! Big picture zuerst — Struktur vor Detail.

? „Die Anfrage kommt zuerst beim API-Gateway an."
x Überblick
* Einstiegspunkt nennen
x Grund
x Ergebnis
! Wo der Datenfluss beginnt.

? „Anschließend wird sie an den Bestellservice weitergeleitet."
x Überblick
x Einstiegspunkt
* nächster Schritt
x Grund
! Sequenzmarker *anschließend*.

? „Der Grund dafür ist, dass wir die Datenbank entlasten wollen."
x Überblick
x nächster Schritt
* Grund nennen
x Ergebnis
! *Der Grund dafür ist, dass …* — Verb am Ende.

? „Dadurch sinkt die Latenz."
x Grund
x Überblick
* Ergebnis nennen
x Einstiegspunkt
! *dadurch* löst Inversion aus: Verb direkt danach.

? „So wie ich das sehe, liegt es am Connection-Pool."
* hedgen / vorsichtig einschätzen
x Überblick
x Ergebnis
! Weichmacher — du gibst eine Einschätzung, keine Tatsache.
```

**A7–A10 · Sequenzmarker in die richtige Reihenfolge.**

```uebung
? Welcher Marker steht am Anfang einer Beschreibung?
* zuerst
x anschließend
x schließlich
x dadurch
! *zuerst* eröffnet die Sequenz.

? Welcher Marker steht am Ende?
x zuerst
x dann
* schließlich
x dadurch
! *schließlich* = zuletzt.

? Welche Marker lösen Inversion aus? (mehrere richtig)
* dann
* anschließend
* dadurch
* deshalb
x und
x weil
! Alle vier besetzen Position 1 → Verb zweitens.

? „___ wird die Antwort an den Client zurückgegeben." (zuletzt)
= Schließlich | Anschließend
! Beide möglich; *schließlich* markiert stärker das Ende.
```

**A11–A13 · Laut denken oder verstummen?**

```uebung
? Du weißt die Antwort gerade nicht. Was ist im deutschen Team erwartet?
* weiterreden und die Überlegung sichtbar machen
x still werden, bis dir etwas einfällt
x das Thema wechseln
x ins Englische wechseln
! Deutsche Teams bewerten **nachvollziehbares Denken**. Stille wirkt wie Blockade, nicht wie Konzentration.

? Welche Formulierungen kaufen dir Zeit? (mehrere richtig)
* Lass mich kurz überlegen …
* Moment, ich denke laut …
* Das ist eine gute Frage.
x (nichts sagen)
x Ähm … ähm …
! Ein gefüllter deutscher Übergang wirkt souverän; eine stumme Pause nicht.

? „Es könnte sein, dass der Cache veraltet ist." — was tust du damit?
* eine Hypothese aufstellen, ohne dich festzulegen
x eine Tatsache behaupten
x eine Frage stellen
x zustimmen
! *Es könnte sein, dass …* + Verb am Ende. Genau der Ton, den man beim Debuggen braucht.
```

---

### B. Anwenden — drill with a frame

**B1–B6 · Architektur beschreiben — Bausteine ergänzen.**

```uebung
? Ergänze den Überblick: „___ ___ ___ ___ besteht das System aus drei Diensten."
= Im Großen und Ganzen
! Feste Wendung für den Einstieg.

? Ergänze: „Die Anfrage kommt zuerst beim API-Gateway ___."
= an
! *ankommen* ist trennbar — das *an* steht am Ende.

? Ergänze: „Anschließend ___ sie an den Bestellservice weitergeleitet."
= wird
! Passiv, und *anschließend* erzwingt Inversion.

? Ergänze: „Der Dienst speichert die Daten in PostgreSQL ___ cached in Redis."
= und
! Reine Aufzählung.

? Ergänze den Grund: „Der ___ dafür ist, dass wir die Datenbank entlasten wollen."
= Grund
! *Der Grund dafür ist, dass …*

? Ergänze das Ergebnis: „___ sinkt die Latenz."
= Dadurch
! Inversion nach *dadurch*.
```

**B7–B10 · Vom Stichwort zum Satz.**

```uebung
? Formuliere: Anfrage → Gateway (Einstiegspunkt)
= Die Anfrage kommt zuerst beim Gateway an | Die Anfrage erreicht zuerst das Gateway
! Beides idiomatisch.

? Formuliere: Gateway → Bestellservice (Weiterleitung, Passiv)
= Anschließend wird sie an den Bestellservice weitergeleitet
! Passiv + Sequenzmarker.

? Formuliere: Daten landen in PostgreSQL
= Der Dienst speichert die Daten in PostgreSQL | Die Daten werden in PostgreSQL gespeichert
! Aktiv oder Passiv, beides passt.

? Formuliere das Ergebnis: geringere Latenz
= Dadurch sinkt die Latenz
! Kurz, mit Inversion.
```

**B11–B15 · Laut denken.**

```uebung
? Ergänze: „Lass mich kurz ___ …"
= überlegen
! Zeitkauf.

? Ergänze die Hypothese: „Es ___ sein, dass der Cache veraltet ist."
= könnte
! Konjunktiv II — Vermutung, keine Behauptung.

? Ergänze das Hedging: „So wie ___ das sehe, liegt es am Connection-Pool."
= ich
! *So wie ich das sehe, …* + Inversion.

? Ergänze den Abschluss: „Also, mein Vorschlag ___, zuerst die Logs zu prüfen."
= wäre
! Konjunktiv II macht daraus einen Vorschlag statt einer Anweisung.

? Ergänze das Abwägen: „___ ist es schneller, ___ steigt die Komplexität."
= einerseits … andererseits | einerseits...andererseits
! Beide Seiten zeigen — auch beim Whiteboard erwartet.
```

**B16–B19 · Blunt → kollegial im Design-Gespräch.**

```uebung
? Formuliere kollegial: „Das skaliert nicht."
= Ich bin nicht sicher, ob das unter Last skaliert | So wie ich das sehe, könnte das unter Last zum Problem werden
! Bezug auf die Bedingung statt aufs Urteil.

? Formuliere kollegial: „Machen wir es so."
= Ich würde vorschlagen, es so zu machen | Mein Vorschlag wäre, es so zu machen
! Konjunktiv II.

? Formuliere kollegial: „Das ist der falsche Ansatz."
= Da hätte ich Bedenken | Ich sehe den Ansatz etwas anders
! Bedenken äußern statt Bewertung fällen.

? Was tust du, bevor du widersprichst?
* die Stärke des Vorschlags anerkennen (zwar … aber)
x sofort das Gegenargument nennen
x auf ein anderes Thema wechseln
! Einräumen und dann einschränken — das deutsche Standardmuster, auch im Technikgespräch.
```

**B20–B22 · Whiteboard-Deutsch.**

```uebung
? Wie sagst du „let me draw that"?
= Ich zeichne das kurz auf | Lass mich das kurz aufzeichnen
! *aufzeichnen* trennbar.

? Wie verweist du auf die Skizze?
= Hier siehst du … | Wie man hier sieht, … | Auf der linken Seite …
! Mehrere Varianten korrekt.

? Wie beschreibst du einen Pfeil zwischen zwei Kästen?
= Von hier geht die Anfrage an … | Der Pfeil zeigt den Datenfluss von … nach …
! Datenfluss beschreiben, nicht die Zeichnung.
```

---

### C. Produzieren — build it yourself

**C1.** 🎙 Beschreibe deine echte Architektur in **90 Sekunden**: Überblick → Einstiegspunkt →
Schritte → Datenhaltung → Grund → Ergebnis.
**C2.** 🎙 Nimm dieselbe Beschreibung noch einmal auf, nachdem du die fehlenden Bausteine ergänzt hast.
**C3.** 🎙 Denke drei Minuten laut über ein echtes Problem aus deinem Backlog — ohne einmal zu verstummen.
**C4.** Erkläre einen Trade-off aus deinem Stack mit *einerseits … andererseits* und einem Fazit.
**C5.** 🎙 Erkläre dieselbe Architektur einmal einem Entwickler und einmal einer nicht-technischen
Person. Notiere, welche Wörter du austauschst.

---

### D. Transfer — real conversations

**D1.** Erkläre in einem echten Meeting **einen** Punkt auf Deutsch — mit Sequenzmarkern.
**D2.** Beim nächsten Pairing: eine Hypothese laut auf Deutsch formulieren
(*Es könnte sein, dass …*).
**D3.** Nimm 90 Sekunden auf, transkribiere dich selbst und markiere deine eigenen Fehler.
**D4.** Shadow die Zeile, dann deine eigene Version.

```audio
Moment, ich denke laut: Der Fehler tritt nur unter Last auf, also könnte es an den Datenbankverbindungen liegen. So wie ich das sehe, sollten wir zuerst den Connection-Pool prüfen.
```

---

## ✅ Musterlösungen für C und D

```spoiler
**C1. Musterlösung (90 Sekunden):**

*Im Großen und Ganzen besteht das System aus drei Diensten. Die Anfrage kommt zuerst beim
API-Gateway an, wo die Zugriffsberechtigung geprüft wird. Anschließend wird sie an den
Bestellservice weitergeleitet. Der Dienst speichert die Bestellung in PostgreSQL und legt häufig
gelesene Produktdaten in Redis ab. Der Grund dafür ist, dass wir die Datenbank entlasten wollen.
Dadurch sinkt die Latenz bei Produktabfragen deutlich. Schließlich wird eine Antwort an den Client
zurückgegeben.*

Bausteine: Überblick · Einstiegspunkt · Sequenz · Datenhaltung · Grund · Ergebnis · Abschluss.

**C4. Musterlösung (Trade-off):**
*Einerseits ist ein Cache schnell und entlastet die Datenbank spürbar, andererseits kann er
veraltete Daten liefern. So wie ich das sehe, ist eine kurze Gültigkeitsdauer der bessere
Kompromiss — mein Vorschlag wäre fünf Minuten.*

**C5.** Der Unterschied liegt fast nur in den **Nomen**, nicht in der Struktur: aus
*REST-Schnittstelle* wird *Verbindung*, aus *Zwischenspeicherung* wird *Kurzzeitgedächtnis*. Die
Sequenzmarker bleiben identisch. Genau darum ist die Struktur wichtiger als der Wortschatz.

**C2, C3** sind Aufnahmen. Bewerte dich so:

| Kriterium | Frage |
|---|---|
| Struktur | Überblick zuerst, dann Detail? |
| Sequenz | zuerst / anschließend / schließlich benutzt? |
| Grund & Ergebnis | mindestens einmal *Der Grund dafür ist* und *Dadurch*? |
| Stille | Bist du irgendwo verstummt statt zu hedgen? |
| Sprache | Kein Wechsel ins Englische? |

**D1–D4.** Eigene Praxis. Bei D3 findest du beim Transkribieren Fehler, die dein Ohr im Moment
überhört hat — das ist der Punkt der Übung.
```

---

## 🧾 Zusammenfassung · Summary

Explaining a system in German runs on **structure before detail**: *Im Großen und Ganzen* → entry
point → *zuerst / anschließend / schließlich* → where the data lives → *Der Grund dafür ist, dass …*
→ *Dadurch …*. All the sequence markers trigger inversion. The second skill is **never going
silent**: buy time (*Lass mich kurz überlegen*), hypothesise (*Es könnte sein, dass …*), hedge
(*So wie ich das sehe*), and close with a proposal in Konjunktiv II (*mein Vorschlag wäre*). German
teams read visible reasoning as competence and silence as being stuck.

## 📇 Vokabel-Checkliste · Vocabulary checklist

| Deutsch | Artikel | Plural | English | VI (if hard) |
|---|---|---|---|---|
| Datenfluss | der | Datenflüsse | data flow | luồng dữ liệu |
| Einstiegspunkt | der | -punkte | entry point | điểm vào |
| Bedenken | die | (Plural) | reservations, concerns | quan ngại |
| Gültigkeitsdauer | die | -dauern | validity period, TTL | thời hạn hiệu lực |
| Skizze | die | Skizzen | sketch | bản phác |
| weiterleiten | — | — | to forward | chuyển tiếp |
| ablegen | — | — | to store, put down | lưu vào |
| aufzeichnen | — | — | to draw up, record | vẽ ra, ghi lại |

→ Drill these in [Flashcards](#/@flashcards).

## 📝 Hausaufgabe · Homework

- [ ] Block **A und B** komplett, Ziel ≥ 80 %.
- [ ] 🎙 **C1 und C2** aufnehmen und vergleichen.
- [ ] **Drei Minuten laut denken** (C3), ohne zu verstummen.
- [ ] Eine Hypothese im echten Pairing auf Deutsch formulieren (**D2**).
- [ ] Die fünf Laut-Denk-Formeln auswendig.

## 📚 Empfohlene Ressourcen · Recommended resources

- **Register hören:** *Engineering Kiosk*, *programmier.bar* — genau dieses Denken-laut-Deutsch.
- **Redemittel:** [Phase 2 · Speaking · Übungsteil](#/phase-2/speaking-uebungen).
- **Zurück zur Theorie:** [Phase 3 · Speaking](#/phase-3/speaking).
- **Weiter:** [Phase 3 · Listening](#/phase-3/listening) und der [Übungsteil](#/phase-3/listening-uebungen).
