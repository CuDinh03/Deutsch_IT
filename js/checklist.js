/*!
 * checklist.js — weekly study checklist data (persists via localStorage).
 * Seeded with Phase 1, Weeks 1–4. The full 52-week plan is added in later
 * "Continue" passes. Each week: { title, items:[strings] }.
 */
window.CHECKLIST = [
  {
    title: "Woche 1 · Diagnose & Setup (B1 auffrischen)",
    items: [
      "Einstufungstest machen (z. B. Goethe-Online-Test) und Ergebnis notieren",
      "Anki installieren + IT-Deck aus dieser App als Vorbild anlegen",
      "Grammatik: Wortstellung (Haupt-/Nebensatz) wiederholen — 45 Min",
      "20 IT-Vokabeln lernen (Flashcards: Software Development)",
      "Easy German (YouTube): 1 Folge mit Untertiteln, 10 neue Wörter notieren",
      "Schreiben: 5 Sätze über dein aktuelles Projekt (Perfekt)",
      "Shadowing: 5 Minuten eine Audiodatei nachsprechen",
      "Wochenrückblick: Was war schwer? Nächste Woche anpassen."
    ]
  },
  {
    title: "Woche 2 · Fälle & Präpositionen",
    items: [
      "Grammatik: Akkusativ vs. Dativ (Wechselpräpositionen) — 2×30 Min",
      "25 IT-Vokabeln (Java, Datenbank) mit Artikel lernen",
      "Hören: 1 Folge „Coffee Break German“ — Hauptidee zusammenfassen",
      "Sprechen: 3 Minuten Monolog „Wie funktioniert meine App?“ aufnehmen",
      "Lesen: 1 kurzer Artikel (heise.de) — 8 neue Wörter markieren",
      "Schreiben: kurze Slack-Nachricht an einen Kollegen (formell/informell)",
      "Mini-Quiz „Phase 1 Grammar Basics“ machen (Ziel ≥ 4/5)"
    ]
  },
  {
    title: "Woche 3 · Perfekt, Modalverben & Standup-Deutsch",
    items: [
      "Grammatik: Perfekt (haben/sein) + trennbare Verben — 2×30 Min",
      "25 IT-Vokabeln (Git, CI/CD) lernen",
      "Dialog „Daily Standup“ laut lesen + Rollen üben",
      "Sprechen: eigenes Standup auf Deutsch aufnehmen (gestern/heute/Blocker)",
      "Hören: Nachrichten in einfacher Sprache (DW) — 1 Meldung",
      "Schreiben: 3 Bullet-Points für dein nächstes echtes Standup",
      "Aussprache: ch / r / ü gezielt 10 Min üben (TTS vergleichen)"
    ]
  },
  {
    title: "Woche 4 · Konsolidierung + Monatsassessment",
    items: [
      "Alle 100+ gelernten Vokabeln wiederholen (Anki Reviews leeren)",
      "Grammatik-Selbsttest: Wortstellung + Fälle (10 Sätze schreiben)",
      "Sprechen: 5-Minuten-Gespräch mit Tandem/AI über ein Tech-Thema",
      "Lesen: 1 README eines Open-Source-Projekts auf Deutsch skimmen",
      "Schreiben: kurze E-Mail „Statusupdate an den Team Lead“",
      "Monatsassessment (Phase 1 → Assessment-Modul) durchführen",
      "Ergebnisse eintragen + Entscheidung: bereit für Phase 2?"
    ]
  }
];
