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
  }
];
