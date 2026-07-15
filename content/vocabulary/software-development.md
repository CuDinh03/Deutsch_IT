# Software Development — IT-Vokabular

> **Level:** B2 · **Focus:** the everyday German of building software — Anforderung, Entwurf, Umsetzung, Wartung, Refactoring, Bereitstellung · **Time:** ~1.5 h
> _After this module you can narrate the whole software lifecycle in German — from requirement to maintenance — with the correct article, plural and verb._

Every task you pick up travels through the same stations: someone writes a **requirement**, you design a solution, implement it, test it, ship it, and then maintain it. German teams name each station precisely — in Jira tickets, in the *Daily*, and in design docs. This module gives you that backbone so you can follow a *Planungsmeeting*, write a clean commit message, and estimate work out loud. It is the hub module: the language here reappears in [Java](#/vocabulary/java), [Spring Boot](#/vocabulary/spring-boot) and [CI/CD, Git & DevOps](#/vocabulary/cicd-git-devops).

## Objectives / Lernziele

- Name every phase of the software lifecycle in German **with article and plural**.
- Talk about **requirements, effort and deadlines** the way a German team does.
- Use the core verbs (*umsetzen, warten, bereitstellen, refaktorisieren*) in real collocations.
- Read the **Komposita** that German tickets are built from (recall [Phase 3 · Vocabulary](#/phase-3/vocabulary)).

## Kernbegriffe · Core terms

The nouns you will hear in every refinement and every review. Watch the gender colours — most process nouns end in **-ung** and are therefore **die**.

| Deutsch | Artikel | Plural | English | Beispiel |
|---|---|---|---|---|
| Anwendung | die | Anwendungen | application | Die Anwendung läuft stabil in Produktion. |
| Software | die | — | software | Wir aktualisieren die Software jede Woche. |
| Quellcode | der | Quellcodes | source code | Der Quellcode liegt im Repository. |
| Codebasis | die | Codebasen | codebase | Die Codebasis ist über die Jahre stark gewachsen. |
| Anforderung | die | Anforderungen | requirement | Die fachliche Anforderung ist noch unklar. |
| Funktion | die | Funktionen | feature / function | Diese Funktion ist für das nächste Release geplant. |
| Feature | das | Features | feature | Das Feature wird gerade umgesetzt. |
| Fehler | der | Fehler | bug / error | Ich habe den Fehler in der Anmeldung behoben. |
| Entwurf | der | Entwürfe | design / draft | Der Entwurf muss noch vom Team abgenommen werden. |
| Umsetzung | die | Umsetzungen | implementation | Die Umsetzung dauert etwa drei Tage. |

## Prozess, Aufwand & Termine

The words for *how much* work and *by when* — the vocabulary of estimation and planning.

| Deutsch | Artikel | Plural | English | Beispiel |
|---|---|---|---|---|
| Wartung | die | — | maintenance | Die Wartung des Altsystems kostet viel Zeit. |
| Refactoring | das | Refactorings | refactoring | Vor dem Feature machen wir ein Refactoring. |
| Umgestaltung | die | Umgestaltungen | refactoring (German term) | Die Umgestaltung verbessert die Lesbarkeit des Codes. |
| Bereitstellung | die | Bereitstellungen | deployment | Die Bereitstellung erfolgt heute Abend um 20 Uhr. |
| Auslieferung | die | Auslieferungen | release / delivery | Die Auslieferung ist auf Freitag verschoben. |
| Aufwand | der | Aufwände | effort | Der Aufwand ist höher als ursprünglich geschätzt. |
| Frist | die | Fristen | deadline | Wir müssen die Frist unbedingt einhalten. |
| Meilenstein | der | Meilensteine | milestone | Der nächste Meilenstein ist Ende des Monats. |
| Umgebung | die | Umgebungen | environment | In der Testumgebung funktioniert alles. |
| Ansatz | der | Ansätze | approach | Dein Ansatz gefällt mir besser als meiner. |

> **Register tip:** in writing prefer the German word (*die Bereitstellung*, *die Auslieferung*); in the office the anglicism is normal (*das Deployment*, *das Release*). Recall the canonical glossary from the style guide — write German, speak either.

## Der Lebenszyklus · The lifecycle

Every station has its noun and its verb. Read the flow, then say it aloud.

```mermaid
flowchart LR
  A[Anforderung] --> B[Entwurf]
  B --> C[Umsetzung]
  C --> D[Test]
  D --> E[Bereitstellung]
  E --> F[Wartung]
```

🇩🇪 **Jede Aufgabe beginnt mit einer Anforderung; nach dem Test wird die Funktion bereitgestellt und danach gewartet.**
*Every task begins with a requirement; after the test the feature is deployed and then maintained.*

```audio
In unserem Team beginnt jede Aufgabe mit einer Anforderung. Danach schreiben wir einen Entwurf, setzen die Funktion um und liefern sie nach dem Test aus.
```

## Verben & Kollokationen

Many of these are **separable** (recall [Phase 1 · Grammar](#/phase-1/grammar)): the prefix jumps to the end — *ich setze die Anforderung **um***, *wir stellen die Version **bereit***.

| Deutsch | Artikel | Plural | English | Beispiel |
|---|---|---|---|---|
| entwickeln | — | — | to develop | Wir entwickeln eine neue Anwendung für den Kunden. |
| umsetzen | — | — | to implement | Ich setze die Anforderung heute um. |
| warten | — | — | to maintain | Wer wartet eigentlich diesen alten Dienst? |
| pflegen | — | — | to maintain / curate | Wir pflegen die Dokumentation sorgfältig im Wiki. |
| refaktorisieren | — | — | to refactor | Wir sollten diese Klasse dringend refaktorisieren. |
| bereitstellen | — | — | to deploy | Wir stellen die neue Version morgen früh bereit. |
| ausliefern | — | — | to ship / deliver | Wir liefern das Feature am Freitag aus. |
| beheben | — | — | to fix | Ich habe den kritischen Fehler behoben. |
| schätzen | — | — | to estimate | Kannst du den Aufwand für das Ticket schätzen? |
| einhalten | — | — | to meet / keep | Ohne Überstunden halten wir die Frist nicht ein. |
| abnehmen | — | — | to sign off / accept | Der Product Owner nimmt das Feature morgen ab. |

### Nützliche Phrasen · Handy phrases

| Deutsch | Artikel | Plural | English | Beispiel |
|---|---|---|---|---|
| eine Anforderung umsetzen | — | — | to implement a requirement | Wir setzen die Anforderung im nächsten Sprint um. |
| den Aufwand schätzen | — | — | to estimate the effort | Lass uns den Aufwand gemeinsam schätzen. |
| eine Frist einhalten | — | — | to meet a deadline | Wir halten die Frist trotz des Fehlers ein. |
| technische Schulden abbauen | — | — | to reduce technical debt | Wir sollten unsere technischen Schulden abbauen. |
| in Produktion gehen | — | — | to go into production | Das Release geht heute Nacht in Produktion. |

A real ticket description at a company like **idealo** or **Otto** reads: *"Als Nutzer möchte ich mich einloggen. **Aufwand:** 3 Punkte. **Anforderung** abgestimmt, **Umsetzung** startet im Sprint 14."* — three of today's words in one sentence.

---

## 🧾 Zusammenfassung · Summary

Software work is a chain of stations, each with a German noun and a verb: **Anforderung → Entwurf → Umsetzung → Test → Bereitstellung → Wartung**. Process nouns mostly end in **-ung** (*die*), effort words like **der Aufwand** and **die Frist** power your estimation talk, and the core verbs (*umsetzen, warten, bereitstellen, refaktorisieren, ausliefern*) are largely **separable**. Write the German term, speak the anglicism when the team does. From here, drill down into [Java](#/vocabulary/java) and [Spring Boot](#/vocabulary/spring-boot).

## 📇 Vokabel-Checkliste · Vocabulary checklist

| Deutsch | Artikel | Plural | English | VI (if hard) |
|---|---|---|---|---|
| Anforderung | die | Anforderungen | requirement | yêu cầu |
| Umsetzung | die | Umsetzungen | implementation | việc triển khai code |
| Wartung | die | — | maintenance | bảo trì |
| Refactoring | das | Refactorings | refactoring | tái cấu trúc |
| Bereitstellung | die | Bereitstellungen | deployment | triển khai |
| Auslieferung | die | Auslieferungen | release / delivery | |
| Aufwand | der | Aufwände | effort | công sức / khối lượng việc |
| Frist | die | Fristen | deadline | thời hạn |
| Fehler | der | Fehler | bug / error | lỗi |
| Quellcode | der | Quellcodes | source code | |

→ Add these to [Flashcards](#/@flashcards) with article + plural.

## 🗣️ Sprechübung · Speaking practice

1. Walk your current ticket through **all six lifecycle stations** in German: *"Zuerst kam die Anforderung, dann …"*.
2. Estimate a task out loud: *"Der Aufwand beträgt … , die Frist ist … , wir liefern … aus."*
3. Read the audio line below, then swap in your own service name and dates.

```audio
Gestern habe ich die Anforderung analysiert. Heute setze ich sie um, und morgen stellen wir die neue Version in der Testumgebung bereit.
```

## ❓ Mini-Quiz

1. Article + plural of *Anforderung*? And of *Aufwand*?
2. Which verb completes *"eine Frist ___"* (to meet a deadline)?
3. Fill the separable verb: *"Wir ___ das Feature am Freitag ___."* (to ship)
4. Give the German phrase for *"to reduce technical debt"*.

> **Lösungen:** 1) **die** Anforderung, **die** Anforderungen · **der** Aufwand, **die** Aufwände. · 2) *einhalten* → **eine Frist einhalten**. · 3) *Wir **liefern** das Feature am Freitag **aus**.* · 4) *technische Schulden **abbauen***. More: [Quizzes](#/@quiz).

## 📝 Hausaufgabe · Homework

- [ ] Write **6 sentences** describing your current feature, one per lifecycle station (Anforderung → Wartung).
- [ ] Estimate **3 tickets** aloud using *Aufwand*, *Frist* and *Meilenstein*.
- [ ] Turn **5 English collocations** from the Phrasen table into full German sentences about your project.
- [ ] Add the checklist to [Flashcards](#/@flashcards) and confirm each article on DWDS.de.

## 📚 Empfohlene Ressourcen · Recommended resources

- **Confirm articles/plurals:** DWDS.de, dict.leo.org, Duden.de.
- **Terms in context:** heise Developer (heise.de), Golem.de, t3n.de, Informatik Aktuell.
- **Podcast:** programmier.bar and Engineering Kiosk — hear these words in real dev talk.
- **Next:** [Java](#/vocabulary/java) → [Spring Boot](#/vocabulary/spring-boot) → [CI/CD, Git & DevOps](#/vocabulary/cicd-git-devops).
