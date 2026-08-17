/*!
 * quizzes.js — seed interactive quizzes.
 * Each: { id, title, level, topic, questions:[{ q, options[], answer(index), explain }] }
 * Add more quizzes freely; the Quizzes tool lists them automatically.
 */
window.QUIZZES = [
  {
    id: "q-p1-grammar", title: "Phase 1 · Grammar Basics", level: "B1", topic: "Grammar",
    questions: [
      { q: "Verb position: „Ich habe den Fehler gefunden, ___ ich den Log gelesen habe.“ (Which conjunction sends the verb to the end?)",
        options: ["denn", "nachdem", "und", "sondern"], answer: 1,
        explain: "„nachdem“ is a subordinating conjunction (Nebensatz) → the conjugated verb goes to the END: „…nachdem ich den Log gelesen habe.“ „denn/und/sondern“ keep normal word order." },
      { q: "Correct case: „Ich arbeite mit ___ neuen Framework.“",
        options: ["der", "das", "dem", "den"], answer: 2,
        explain: "„mit“ takes Dativ. „das Framework“ (neuter) → Dativ = dem. So: „mit dem neuen Framework.“" },
      { q: "Perfekt of „deployen“: „Wir ___ den Service gestern ___.“",
        options: ["haben … deployt", "sind … deployt", "haben … gedeployt", "werden … deployen"], answer: 0,
        explain: "Anglicisms usually form the participle without ge-: „deployt“ (many devs also say „gedeployt“, but „deployt“ is standard). Auxiliary = haben." },
      { q: "Which sentence is correct?",
        options: ["Ich kann das Bug fixen.", "Ich kann den Bug fixen.", "Ich kann dem Bug fixen.", "Ich kann der Bug fixen."], answer: 1,
        explain: "„der Bug“ is masculine; as a direct object it takes Akkusativ → „den Bug“." },
      { q: "Adjective ending: „ein ___ Test“ (Nominativ, masculine).",
        options: ["grüner", "grünen", "grünes", "grüne"], answer: 0,
        explain: "After „ein“ (no clear gender marker) the adjective must show it: masculine Nominativ = „-er“ → „ein grüner Test“." }
    ]
  },
  {
    id: "q-it-articles", title: "IT Vocabulary · Articles (der/die/das)", level: "B2", topic: "Vocabulary",
    questions: [
      { q: "___ Schnittstelle", options: ["der", "die", "das"], answer: 1, explain: "die Schnittstelle (interface/API). Nouns in -e are very often feminine." },
      { q: "___ Dienst", options: ["der", "die", "das"], answer: 0, explain: "der Dienst (service), plural die Dienste." },
      { q: "___ Abbild", options: ["der", "die", "das"], answer: 2, explain: "das Abbild (container image); most day-to-day: „das Image“ (also neuter)." },
      { q: "___ Abhängigkeit", options: ["der", "die", "das"], answer: 1, explain: "die Abhängigkeit. Nouns ending in -keit/-heit/-ung/-ion are ALWAYS feminine — a huge shortcut." },
      { q: "___ Repository", options: ["der", "die", "das"], answer: 2, explain: "das Repository (das Repo). Borrowed neuter noun." }
    ]
  },
  {
    id: "q-it-collocations", title: "IT Deutsch · Verbs & Collocations", level: "B2", topic: "IT",
    questions: [
      { q: "„einen Fehler ___“ (to fix a bug)", options: ["beheben", "bekommen", "besuchen", "bestellen"], answer: 0,
        explain: "„einen Fehler beheben“ = to fix a bug. Also common: „einen Bug fixen“." },
      { q: "„eine Ausnahme ___“ (to throw an exception)", options: ["schießen", "werfen", "wählen", "ziehen"], answer: 1,
        explain: "„eine Ausnahme werfen“ = to throw an exception; „abfangen“ = to catch." },
      { q: "„die Frist ___“ (to meet the deadline)", options: ["treffen", "schlagen", "einhalten", "nehmen"], answer: 2,
        explain: "„eine Frist einhalten“ = to meet a deadline; „verpassen“ = to miss it." },
      { q: "„einen Branch ___“ (to merge a branch)", options: ["zusammenführen", "zusammenbauen", "zusammenlegen", "zusammenfassen"], answer: 0,
        explain: "„einen Branch/Zweig zusammenführen“ = to merge; colloquially „mergen“. „zusammenfassen“ = to summarize (false friend!)." },
      { q: "„die Abfrage ___“ (to optimize the query)", options: ["optimalisieren", "optimieren", "optimalen", "optimalstellen"], answer: 1,
        explain: "The verb is „optimieren“ (not *optimalisieren). „eine Abfrage optimieren“." }
    ]
  },
  {
    id: "q-foundations", title: "Foundations · Think in Systems", level: "All", topic: "Foundations",
    questions: [
      { q: "Gender of „Verfügbarkeit“ (availability) — which rule decides?",
        options: ["der — devices are masculine", "die — the suffix -keit is always feminine", "das — abstract nouns are neuter", "It must be memorized; there is no rule"], answer: 1,
        explain: "Suffix rules cover ~80 % of genders: -keit/-heit/-ung/-ion/-tät → ALWAYS die. Pattern-match first, memorize only exceptions." },
      { q: "Satzklammer: „Ich ___ die Migration heute noch ___.“ Which pair completes the bracket?",
        options: ["muss … testen", "teste … muss", "muss … geteste", "testen … müssen"], answer: 0,
        explain: "The conjugated verb (muss) opens the bracket in position 2; the infinitive (testen) closes it at the end. One pattern covers modals, Perfekt AND separable verbs." },
      { q: "What is the full signature of „warten“ (to wait for)?",
        options: ["warten + Dativ", "warten für + Akkusativ", "warten auf + Akkusativ", "warten an + Dativ"], answer: 2,
        explain: "Verbs are APIs — learn the whole signature as one unit: warten auf + Akk → „Ich warte auf den Build.“ Never store a bare verb." },
      { q: "„die Fehlerbehebungsstrategie“ — what gender, and why?",
        options: ["der, because of Fehler", "das, because it's technical", "die, because the head is die Strategie", "unpredictable"], answer: 2,
        explain: "Compounds are head-final: the LAST noun sets gender and base meaning. die Strategie → die Fehlerbehebungsstrategie (error-fixing strategy). Parse right to left, like List<User> is a List." },
      { q: "Your profile: reading B2+, listening B1, speaking A2+. Where do the next 30 evenings go?",
        options: ["More reading — it's working!", "Grammar videos", "Speaking practice — it's the bottleneck", "A new app"], answer: 2,
        explain: "Theory of constraints: throughput = the slowest stage. Adding input before the bottleneck adds inventory, not fluency. Practice AT the constraint." },
      { q: "Which intervention has the highest leverage?",
        options: ["+15 min Anki per day", "A bigger flashcard deck", "A weekly tutor session that corrects you", "Switching to a new textbook"], answer: 2,
        explain: "Meadows' leverage hierarchy: parameters (minutes, deck size) are the weakest lever. A tutor installs the missing balancing loop — feedback → correction — which prevents fossilized errors." }
    ]
  },
  {
    id: "q-p1-wortstellung", title: "Phase 1 · Wortstellung & Konnektoren", level: "B1", topic: "Übungen",
    questions: [
      { q: "„Die Pipeline ist rot, deshalb ___ heute nicht.“",
        options: ["ich deploye", "deploye ich", "ich deployen", "deployen ich"], answer: 1,
        explain: "„deshalb“ takes position 1, so the conjugated verb must come second and the subject third: „…deshalb deploye ich heute nicht.“ This is the mirror image of „weil“." },
      { q: "„Ich bleibe im Büro, weil ich den Release fertig machen ___.“",
        options: ["muss", "musst", "müssen", "gemusst"], answer: 0,
        explain: "After „weil“ the conjugated verb goes to the very END — behind the infinitive. So the order is: …fertig machen muss." },
      { q: "Which connector does NOT change the word order?",
        options: ["weil", "dass", "denn", "nachdem"], answer: 2,
        explain: "„denn“ is coordinating: „Ich deploye nicht, denn die Tests sind rot.“ Normal V2 order. „weil / dass / nachdem“ all send the verb to the end. If unsure in a real message, use denn — it cannot be got wrong." },
      { q: "Correct TeKaMoLo order: „Ich arbeite ___.“",
        options: ["im Büro heute konzentriert wegen des Releases", "heute wegen des Releases konzentriert im Büro", "konzentriert heute im Büro wegen des Releases", "wegen des Releases im Büro heute konzentriert"], answer: 1,
        explain: "TeKaMoLo = Temporal (heute) → Kausal (wegen des Releases) → Modal (konzentriert) → Lokal (im Büro)." },
      { q: "Where does „nicht“ go? „Ich habe den Fehler ___ ___.“",
        options: ["nicht gefunden", "gefunden nicht", "nicht gefunden nicht", "gefunden"], answer: 0,
        explain: "„nicht“ goes late but BEFORE the participle: „Ich habe den Fehler nicht gefunden.“ Same rule before an infinitive: „Ich kann das nicht machen.“" },
      { q: "„Gestern ___ ich ins Büro gegangen.“",
        options: ["habe", "bin", "war", "wurde"], answer: 1,
        explain: "„gehen“ = movement → Perfekt with sein. „Gestern bin ich ins Büro gegangen.“ Note the inversion after „Gestern“ too." },
      { q: "Which sentence is correct?",
        options: ["Nachdem ich den Log gelesen habe, habe ich die Ursache gefunden.", "Nachdem ich habe den Log gelesen, ich habe die Ursache gefunden.", "Nachdem habe ich den Log gelesen, habe ich die Ursache gefunden.", "Nachdem ich den Log gelesen habe, ich habe die Ursache gefunden."], answer: 0,
        explain: "Two rules at once: verb last in the Nebensatz (gelesen habe), and because the whole Nebensatz fills position 1, the main clause starts with its verb (habe ich)." },
      { q: "„Könntest du bitte den Branch ___?“",
        options: ["reviewen", "reviewst", "gereviewt", "zu reviewen"], answer: 0,
        explain: "The modal-like „könntest“ is conjugated in position 2; the main verb stays an infinitive at the end. No „zu“ after modal verbs." },
      { q: "Comma check: which is punctuated correctly?",
        options: ["Ich glaube dass wir mehr Zeit brauchen.", "Ich glaube, dass wir mehr Zeit brauchen.", "Ich glaube dass, wir mehr Zeit brauchen.", "Ich, glaube dass wir mehr Zeit brauchen."], answer: 1,
        explain: "German requires a comma before every Nebensatz — unlike English, where it is often optional." },
      { q: "„Ich arbeite ___ fünf Jahren als Entwickler.“",
        options: ["seit", "für", "vor", "seitdem"], answer: 0,
        explain: "„seit“ + Dativ + PRÄSENS. German says „ich arbeite seit fünf Jahren“, not a present-perfect form. A very common English-speaker slip." }
    ]
  },
  {
    id: "q-p1-hoeren-lesen", title: "Phase 1 · Hören & Lesen (Detail)", level: "B1", topic: "Übungen",
    questions: [
      { q: "„Wir treffen uns um halb eins.“ — What time is that?",
        options: ["13:30", "12:30", "01:30", "11:30"], answer: 1,
        explain: "German counts TOWARDS the next hour: halb eins = half an hour before one = 12:30. „halb zwei“ = 1:30. Getting this wrong costs you meetings." },
      { q: "„einhundertfünfzigtausend“ — in digits?",
        options: ["15.000", "150.000", "1.500.000", "115.000"], answer: 1,
        explain: "150,000. Large numbers spoken as one compound word are a standard listening trap at B1/B2 — practise them deliberately." },
      { q: "A colleague says: „Sieht insgesamt gut aus, aber an zwei Stellen habe ich Kommentare hinterlassen.“ What's the tone?",
        options: ["Verärgert — sie lehnt den PR ab", "Freundlich — Lob zuerst, dann konkrete Punkte", "Neutral — reine Information", "Unsicher — sie weiß es nicht"], answer: 1,
        explain: "German code-review feedback is typically wrapped exactly like this: a positive frame, then specifics. The softeners ARE the politeness; the content is still a request for changes." },
      { q: "„Ohne Datenbank schlagen die Integrationstests fehl.“ What does „fehlschlagen“ mean?",
        options: ["to be missing", "to fail", "to be skipped", "to hang"], answer: 1,
        explain: "fehlschlagen = to fail. Separable: „schlagen … fehl“. Don't confuse it with „fehlen“ (to be missing)." },
      { q: "„Freitags wird nur nach Rücksprache mit dem Bereitschaftsdienst deployt.“ — So on Fridays…",
        options: ["deployment is completely forbidden", "deployment is normal", "deployment needs prior consultation with on-call", "only the on-call engineer may deploy"], answer: 2,
        explain: "„nach Rücksprache mit …“ = after consulting with. It's allowed, but conditional. Exam texts love this partial-restriction pattern — a statement saying 'never on Friday' would be falsch." },
      { q: "„der Quereinsteiger“ — guess from the parts.",
        options: ["a senior engineer", "a career changer entering from another field", "a contractor", "a trainee straight from university"], answer: 1,
        explain: "quer (sideways/across) + Einsteiger (someone getting in) → someone entering the field sideways. Splitting the compound gives you the meaning for free." },
      { q: "Which is READ access only?",
        options: ["der Schreibzugriff", "der Vollzugriff", "der Lesezugriff", "der Zugang"], answer: 2,
        explain: "Lesezugriff = read access; Schreibzugriff = write access. In a real workplace this distinction decides whether you can change production — listen for the prefix." },
      { q: "„Die Anwendung war ungefähr vierzig Minuten nicht erreichbar.“ — What happened?",
        options: ["It was slow for 40 minutes", "It was down for about 40 minutes", "It will be down for 40 minutes", "It was reachable after 40 minutes of work"], answer: 1,
        explain: "„nicht erreichbar“ = unreachable/down. „ungefähr“ = approximately. Past tense („war“) — it already happened." },
      { q: "In a README: „Voraussetzungen: Java 17, Docker“. What is „Voraussetzungen“?",
        options: ["suggestions", "prerequisites", "warnings", "settings"], answer: 1,
        explain: "die Voraussetzung = prerequisite. This is the single most useful README word to know — it tells you what to install before anything else works." },
      { q: "„Für jedes Release braucht ihr zwei Freigaben.“ — „die Freigabe“ is…",
        options: ["a release branch", "an approval / sign-off", "a free slot", "a rollback"], answer: 1,
        explain: "die Freigabe = approval/sign-off (frei + geben = to give free). Fachliche Freigabe = from the PO; technische = from code review." }
    ]
  }
];
