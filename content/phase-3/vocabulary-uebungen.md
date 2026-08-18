# Phase 3 · Vocabulary — Übungsteil · Workbook

> **Level:** B2+ · **Focus:** Genus von IT-Lehnwörtern, Komposita zerlegen, Fachbegriffe präzise wählen · **Time:** ~2 h
> _After this workbook you stop guessing the article of English tech nouns._

This is the practice half of [Phase 3 · Vocabulary](#/phase-3/vocabulary). Half your technical
vocabulary is already English — the work is knowing **which article** it takes and **how to split**
the long German compounds around it.

---

## 🏋️ Übungsteil · Workbook

### A. Erkennen — spot the pattern

**A1–A8 · Genus von IT-Lehnwörtern.** Nur den Artikel schreiben.

```uebung
? ___ Server
= der
! Agens-Nomen auf **-er** → *der*. Ebenso: der Container, der Cluster, der Broker, der Compiler.

? ___ Deployment
= das
! Englische **-ing/-ment**-Nomen und Gerundien → *das*. Ebenso: das Logging, das Caching, das Monitoring.

? ___ Container
= der
! Endung *-er*.

? ___ Latenz
= die
! Endung **-enz/-anz** wie *-ität* → *die*. Ebenso: die Redundanz, die Performanz.

? ___ Commit
= der
! Kurze englische Tech-Nomen mit Verbcharakter → *der*. Ebenso: der Bug, der Request, der Pod, der Push.

? ___ Logging
= das
! Gerundium auf *-ing* → *das*.

? ___ Bereitstellung
= die
! *-ung* → *die*, ausnahmslos.

? ___ Pod
= der
! Kurzes englisches Tech-Nomen → *der*.
```

**A9 · Die Regel zusammenfassen.**

```uebung
? Welche Endungen sind bei IT-Lehnwörtern zuverlässig „die"? (mehrere richtig)
* -tion
* -ung
* -heit
* -keit
* -ität
x -er
x -ing
! *-er* → der, *-ing* → das. Die *die*-Gruppe ist dieselbe wie im allgemeinen Deutsch — deshalb überträgt sich das Wissen aus Phase 1 direkt.
```

**A10–A15 · Kompositum: welcher Teil bestimmt Artikel und Bedeutung?**

```uebung
? die Zugriffsberechtigung
x Zugriff
* Berechtigung
! Kopf-final: der **letzte** Teil regiert. *die Berechtigung* → *die Zugriffsberechtigung*.

? das Datenbankverbindungsproblem
x Datenbank
x Verbindung
* Problem
! Von rechts: Problem ← Verbindung ← Datenbank. Egal wie viele Teile — nur der letzte zählt.

? die Benutzerauthentifizierung
x Benutzer
* Authentifizierung
! *die Authentifizierung*.

? das Ausfallsicherheitskonzept
x Ausfall
x Sicherheit
* Konzept
! *das Konzept*.

? Was ist das „-s-" in „Zugriff**s**berechtigung"?
* ein Fugenelement — ohne eigene Bedeutung
x ein Genitiv
x ein Plural
x ein Tippfehler
! Fugenelemente (*-s-*, *-en-*, *-es-*) verbinden nur die Teile. Für die Bedeutung ignorieren.

? Wie liest man ein langes Kompositum?
* von rechts nach links
x von links nach rechts
x in der Mitte anfangen
! Kopf zuerst, dann die Einschränkungen davor.
```

**A16–A19 · Falscher Freund oder korrekt?**

```uebung
? „zusammenfassen" für „to merge (a branch)"
x korrekt
* falscher Freund
! *zusammenfassen* = to summarize. Merge = **zusammenführen** oder *mergen*.

? „die Bibliothek" für „library (code)"
* korrekt
x falscher Freund
! Beides möglich: *die Bibliothek* oder *die Library*.

? „aktuell" für „actually"
x korrekt
* falscher Freund
! *aktuell* = currently/up-to-date. „actually" ist *eigentlich* oder *tatsächlich*.

? „sensibel" für „sensitive (data)"
* korrekt
x falscher Freund
! *sensible Daten* ist der Fachbegriff im Datenschutz. Achtung: *sensibel* heißt bei Personen aber „empfindsam".
```

---

### B. Anwenden — apply with a frame

**B1–B8 · Kompositum bauen (Artikel + Wort).**

```uebung
? Zugriff + Berechtigung →
= die Zugriffsberechtigung
! Fugen-s.

? Daten + Bank + Verbindung →
= die Datenbankverbindung
! Kopf *Verbindung*.

? Ausfall + Sicherheit →
= die Ausfallsicherheit
! Kopf *Sicherheit*.

? Last + Verteilung →
= die Lastverteilung
! Load balancing.

? Fehler + Behandlung →
= die Fehlerbehandlung
! Error handling.

? Schnittstelle + Beschreibung →
= die Schnittstellenbeschreibung
! Fugen-n.

? Betrieb + System →
= das Betriebssystem
! Kopf *System*.

? Quelle + Code + Verwaltung →
= die Quellcodeverwaltung
! Version control. Kopf *Verwaltung*.
```

**B9–B16 · Fachbegriff einsetzen.**

```uebung
? Die ___ zwischen den Diensten soll möglichst gering sein. (coupling)
= Kopplung
! *die Kopplung*. Lose Kopplung = lose coupling.

? Die ___ des Systems liegt bei 99,9 Prozent. (availability)
= Verfügbarkeit
! *-keit* → die.

? Die ___ ist auf 200 Millisekunden begrenzt. (latency)
= Latenz
! *die Latenz*.

? Wir haben den ___ von 100 auf 500 Anfragen pro Sekunde erhöht. (throughput)
= Durchsatz
! *der Durchsatz*.

? Der ___ speichert häufig gelesene Daten im RAM. (cache)
= Cache
! *der Cache*, auch *der Zwischenspeicher*.

? Nach dem Fehler haben wir ein ___ auf die vorige Version gemacht. (rollback)
= Rollback
! *das Rollback* — Gerundium-ähnlich, deshalb neutrum.

? Die ___ beschreibt, wie sich das System bei Last verhält. (scalability)
= Skalierbarkeit
! *-keit* → die.

? Jede Anfrage wird im ___ protokolliert. (log)
= Log | Protokoll
! *das Log* oder *das Protokoll*. Verb: *protokollieren*.
```

**B17–B22 · Präzise wählen — welches Wort passt?**

```uebung
? „to deploy" im formellen Text
* bereitstellen
x zusammenfassen
x einrichten
x verteilen
! *bereitstellen* / *die Bereitstellung*. Umgangssprachlich auch *deployen*.

? „to roll out"
* ausrollen
x abrollen
x aufrollen
! *ausrollen* — ein Feature wird ausgerollt.

? „to throw an exception"
* eine Ausnahme werfen
x eine Ausnahme schießen
x eine Ausnahme machen
! *werfen*; das Gegenstück ist *abfangen*.

? „to meet a requirement"
* eine Anforderung erfüllen
x eine Anforderung treffen
x eine Anforderung halten
! *erfüllen*. *treffen* gehört zu *eine Entscheidung*.

? „to maintain a system"
* ein System warten
x ein System halten
x ein System pflegen — auch möglich
! *warten* ist der Fachbegriff (*die Wartung*). *pflegen* geht bei Code/Doku ebenfalls.

? „downtime"
* die Ausfallzeit
x die Abwesenheit
x die Wartezeit
! *die Ausfallzeit*, oder einfach *der Ausfall*.
```

**B23–B26 · Verb → Nomen (technischer Register).**

```uebung
? skalieren → Nomen mit Artikel
= die Skalierung
! *-ung* → die.

? überwachen → Nomen mit Artikel
= die Überwachung
! Monitoring auf Deutsch.

? verschlüsseln → Nomen mit Artikel
= die Verschlüsselung
! Encryption.

? bereitstellen → Nomen mit Artikel
= die Bereitstellung
! Deployment/provisioning.
```

**B27–B30 · Fehler korrigieren.**

```uebung
? Korrigiere: „das Container"
= der Container
! *-er* → der.

? Korrigiere: „der Deployment"
= das Deployment
! *-ment* → das.

? Korrigiere: „die Branch zusammenfassen"
= den Branch zusammenführen
! Zwei Fehler: *der Branch* (Akkusativ *den*) und *zusammenführen* statt *zusammenfassen*.

? Korrigiere: „die Datenbankverbindungsproblem"
= das Datenbankverbindungsproblem
! Kopf ist *das Problem*.
```

---

### C. Produzieren — build it yourself

**C1.** Schreibe 8 Nomen aus deinem echten Stack mit **Artikel + Plural**.
**C2.** Baue 5 Komposita, die dein System beschreiben, und übersetze sie.
**C3.** Beschreibe deine Architektur in 4 Sätzen — jedes Nomen mit korrektem Artikel.
**C4.** Übersetze: *The coupling between the services should be as low as possible.*
**C5.** Übersetze: *We increased throughput by scaling horizontally.*
**C6.** Schreibe 5 Sätze mit den Kollokationen: *eine Anforderung erfüllen · eine Ausnahme werfen ·
ein System warten · ein Feature ausrollen · einen Dienst bereitstellen*.

---

### D. Transfer — your real work

**D1.** Nimm 10 Fachwörter aus deiner echten Codebasis, schlage Artikel und Plural auf DWDS.de nach
und lege sie in [Flashcards](#/@flashcards) an.
**D2.** Finde in einer deutschen Tool-Dokumentation **5 lange Komposita** und zerlege sie.
**D3.** Lies die Zeile laut und beschreibe danach dein eigenes System.

```audio
Die Zugriffsberechtigung wird im Gateway geprüft, bevor die Anfrage an den zuständigen Dienst weitergeleitet wird. Die Ausfallsicherheit erreichen wir durch drei Replikate.
```

---

## ✅ Musterlösungen für C und D

```spoiler
**C4.** *Die Kopplung zwischen den Diensten sollte möglichst gering sein.*

**C5.** *Wir haben den Durchsatz erhöht, indem wir horizontal skaliert haben.*
(*indem* = Methode, Verb ans Ende — siehe [Grammar · Übungsteil](#/phase-3/grammar-uebungen).)

**C1–C3, C6** sind offen. Selbstkontrolle:

| Check | Frage |
|---|---|
| Genus | *-er* → der · *-ing/-ment* → das · *-ung/-keit/-ität/-enz* → die? |
| Kompositum | Artikel vom **letzten** Teil genommen? |
| Kollokation | Das feste Verb benutzt (*erfüllen*, *werfen*, *warten*)? |
| Register | Fachwort statt Umschreibung, wo es eins gibt? |

**Musterlösung für C3:**
*Der Client sendet seine Anfrage an das API-Gateway. Dort wird die Zugriffsberechtigung geprüft und
die Anfrage an den Bestellservice weitergeleitet. Der Dienst schreibt die Bestellung in eine
PostgreSQL-Datenbank und legt häufig gelesene Daten im Cache ab. Die Ausfallsicherheit erreichen wir
über drei Replikate hinter einem Load Balancer.*

**D1–D3.** Eigener Inhalt. Für D1 gilt weiter die harte Regel: **keine Karte ohne Artikel und
Plural** — sonst hilft sie dir beim Sprechen nicht.
```

---

## 🧾 Zusammenfassung · Summary

IT vocabulary in German is half English already — the work is the **article** and the **compound**.
Four reliable defaults: agent nouns in **-er → der**, English gerunds in **-ing/-ment → das**,
**-ung/-heit/-keit/-ität/-enz → die**, and short verb-like English nouns (*Commit, Bug, Request,
Pod*) **→ der**. Compounds are head-final: split right-to-left, take the article from the last
part, and ignore the *Fugenelement*. Watch the two false friends that cost most: *zusammenfassen*
is **summarize**, not merge, and *aktuell* is **currently**, not actually.

## 📇 Vokabel-Checkliste · Vocabulary checklist

| Deutsch | Artikel | Plural | English | VI (if hard) |
|---|---|---|---|---|
| Zugriffsberechtigung | die | -berechtigungen | access permission | quyền truy cập |
| Ausfallsicherheit | die | — | fault tolerance | khả năng chịu lỗi |
| Lastverteilung | die | -verteilungen | load balancing | cân bằng tải |
| Durchsatz | der | — | throughput | thông lượng |
| Latenz | die | Latenzen | latency | độ trễ |
| Kopplung | die | Kopplungen | coupling | sự phụ thuộc |
| Fugenelement | das | -elemente | linking letter in a compound | chữ nối trong từ ghép |
| ausrollen | — | — | to roll out | triển khai dần |

→ Drill these in [Flashcards](#/@flashcards).

## 📝 Hausaufgabe · Homework

- [ ] Block **A** ohne Nachschlagen — jeder falsche Artikel ins [Fehlerjournal](#/@journal).
- [ ] **10 Fachwörter** aus deiner Codebasis mit Artikel + Plural anlegen (**D1**).
- [ ] **5 Komposita** aus echter Doku zerlegen (**D2**).
- [ ] Das [IT Vocabulary · Articles-Quiz](#/@quiz) machen.

## 📚 Empfohlene Ressourcen · Recommended resources

- **Artikel prüfen:** DWDS.de, Duden.de — beide führen auch neue Lehnwörter.
- **Fachwortschatz im Kontext:** die 12 [IT-Vokabelmodule](#/vocabulary/software-development).
- **Zurück zur Theorie:** [Phase 3 · Vocabulary](#/phase-3/vocabulary).
- **Weiter:** [Phase 3 · Reading](#/phase-3/reading) und der [Übungsteil](#/phase-3/reading-uebungen).
