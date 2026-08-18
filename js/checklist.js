/*!
 * checklist.js — weekly study checklist data (persists via localStorage).
 * Covers Weeks 1–20 (Phase 1 + Phase 2), i.e. every week that has content
 * written for it. Weeks 21+ arrive with the Phase 3–6 workbooks.
 *
 * Each entry: { id, title, items:[strings] }. The id is what progress is
 * stored under — never reuse or renumber one, or ticks land on the wrong row.
 */
window.CHECKLIST = [
  {
    id: "w01", title: "Woche 1 · Diagnose & Setup (B1 auffrischen)",
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
    id: "w02", title: "Woche 2 · Fälle & Präpositionen",
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
    id: "w03", title: "Woche 3 · Perfekt, Modalverben & Standup-Deutsch",
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
    id: "w04", title: "Woche 4 · Konsolidierung + Monatsassessment",
    items: [
      "Alle 100+ gelernten Vokabeln wiederholen (Anki Reviews leeren)",
      "Grammatik-Selbsttest: Wortstellung + Fälle (10 Sätze schreiben)",
      "Sprechen: 5-Minuten-Gespräch mit Tandem/AI über ein Tech-Thema",
      "Lesen: 1 README eines Open-Source-Projekts auf Deutsch skimmen",
      "Schreiben: kurze E-Mail „Statusupdate an den Team Lead“",
      "Monatsassessment (Phase 1 → Assessment-Modul) durchführen",
      "Ergebnisse eintragen + Entscheidung: bereit für Phase 2?"
    ]
  },
  {
    id: "w05", title: "Woche 5 · Modalverben & Alltag: Kaffeeküche",
    items: [
      "Grammatik: Modalverben — [Phase 1 · Grammar](#/phase-1/grammar) §5",
      "Übungsteil Grammar B20–B25 (Modalverben) durcharbeiten, Ziel ≥ 80 %",
      "Alltag: [Kaffeeküche & Modalpartikeln](#/alltag/kaffeekueche) lesen",
      "Eine Modalpartikel pro Tag benutzen (Mo: mal, Di: doch, Mi: denn …)",
      "Hörtext 1–2 aus [Listening · Übungsteil](#/phase-1/listening-uebungen), einmaliges Hören",
      "10 neue Karten in [Flashcards](#/@flashcards)"
    ]
  },
  {
    id: "w06", title: "Woche 6 · Trennbare Verben & Standup",
    items: [
      "Grammatik: trennbare Verben + Negation",
      "Übungsteil Grammar B31–B38 (Negation, Partizip II)",
      "[Dialogue · Daily Standup](#/dialogues/standup) — beide Rollen laut sprechen",
      "Eigenen Standup-Beitrag schreiben und zweimal frei sprechen",
      "Alltag: [Mittagspause](#/alltag/mittagspause) — fünf Reaktionen auswendig",
      "Fehlerjournal: die drei häufigsten eigenen Fehler eintragen"
    ]
  },
  {
    id: "w07", title: "Woche 7 · Fragen, Verbindungen & Schreiben",
    items: [
      "Grammatik: W-Fragen + und/aber/weil/dass",
      "[Writing · Übungsteil](#/phase-1/writing-uebungen) Block A+B komplett",
      "Kurze E-Mail an eine Kollegin schreiben (du) und dieselbe formell (Sie)",
      "[Reading · Übungsteil](#/phase-1/reading-uebungen) Text 1 + 2 mit Fragen",
      "Alltag: [Feierabend mit dem Team](#/alltag/feierabend)",
      "Alle 200 Nomen in [Flashcards](#/@flashcards) durchgehen, ≥ 90 % Treffer"
    ]
  },
  {
    id: "w08", title: "Woche 8 · 🎯 Prüfung Phase 1 (100 Punkte)",
    items: [
      "Alle sechs Übungsteile Phase 1 auf ≥ 80 % bringen",
      "[Prüfung · Phase-1-Test](#/phase-1/assessment) — 90 Minuten am Stück, ohne Wörterbuch",
      "Auswertung ausfüllen, Gesamtpunktzahl notieren",
      "Fehler → Modul-Tabelle ausfüllen und schwächsten Teil markieren",
      "Gate-Entscheidung: ≥ 70 und kein Teil unter 50 % → Phase 2",
      "Falls nein: eine Woche gezielt wiederholen, dann neu testen"
    ]
  },
  {
    id: "w09", title: "Woche 9 · Präteritum & Nachrichten",
    items: [
      "Grammatik: Präteritum — [Phase 2 · Grammar](#/phase-2/grammar)",
      "[Grammar · Übungsteil](#/phase-2/grammar-uebungen) Block A starten",
      "DW *Langsam gesprochene Nachrichten* täglich, eine Meldung nacherzählen",
      "Alltag: [Wohnungsbesichtigung](#/alltag/wohnungsbesichtigung) — die vier Zahlenwörter sitzen",
      "Fehlerjournal aus Phase 1 durchgehen: was ist noch offen?"
    ]
  },
  {
    id: "w10", title: "Woche 10 · Konjunktiv II",
    items: [
      "Grammatik: Konjunktiv II (Gegenwart + Vergangenheit)",
      "Übungsteil Grammar B1–B7 (höfliche Bitten, Irrealis) ≥ 80 %",
      "Zehn schroffe Sätze in höfliche umschreiben",
      "Ein echtes Code-Review-Kommentar auf Deutsch im Konjunktiv II formulieren",
      "Alltag: [Anmeldung & Ausländerbehörde](#/alltag/anmeldung) — Nachfrage-Sätze auswendig"
    ]
  },
  {
    id: "w11", title: "Woche 11 · Passiv",
    items: [
      "Grammatik: Passiv in allen Zeiten + Modalverb-Passiv",
      "Übungsteil Grammar B8–B19 (Passiv, man-Alternative) ≥ 80 %",
      "Den eigenen Deployment-Prozess in vier Passivsätzen beschreiben",
      "Dieselben vier Sätze mit *man* — welche Variante klingt natürlicher?",
      "Alltag: [Beim Arzt](#/alltag/beim-arzt) — krankmelden vs. krankschreiben"
    ]
  },
  {
    id: "w12", title: "Woche 12 · Relativsätze + Prüfung buchen",
    items: [
      "Grammatik: Relativsätze inkl. was/wo + Nominalisierung",
      "Übungsteil Grammar B20–B28 ≥ 80 %",
      "Vier Architekturkomponenten je mit einem Relativsatz beschreiben",
      "⚠️ **telc-B2-Termin jetzt buchen** — siehe [Prüfungen · Überblick](#/exams/overview)",
      "Drei Prüfungszentren heraussuchen und den frühesten Termin notieren"
    ]
  },
  {
    id: "w13", title: "Woche 13 · Prüfungsformat & Lesen",
    items: [
      "[Prüfungen · Überblick](#/exams/overview) lesen, 8-Wochen-Plan in den Kalender",
      "Offiziellen Übungstest von telc.net herunterladen und einmal ansehen",
      "[telc B2 · Lesen & Sprachbausteine](#/exams/telc-b2-lesen-sprachbausteine) durcharbeiten",
      "Zeitbudget üben: Sprachbausteine zuerst, 10 Minuten für den Antwortbogen",
      "Ab jetzt täglich 10 Minuten [Prüfungs-Redemittel](#/exams/pruefungs-redemittel)"
    ]
  },
  {
    id: "w14", title: "Woche 14 · Konnektoren & Hören",
    items: [
      "Grammatik: zweiteilige Konnektoren, je … desto",
      "Übungsteil Grammar B29–B36 ≥ 80 %",
      "[telc B2 · Hörverstehen](#/exams/telc-b2-hoeren) — Notiztechnik üben",
      "Alle Hörtexte in [Listening · Übungsteil](#/phase-2/listening-uebungen), einmaliges Hören",
      "Zahlen laut trainieren: von X auf Y, große Zahlen am Stück"
    ]
  },
  {
    id: "w15", title: "Woche 15 · Argumentieren",
    items: [
      "[Vocabulary · Übungsteil](#/phase-2/vocabulary-uebungen) Block A+B ≥ 80 %",
      "Meinungs-Toolkit auswendig: Meinung → Begründung → Beispiel → Fazit",
      "Einen echten Trade-off aus deinem Stack beidseitig argumentieren",
      "[Reading · Übungsteil](#/phase-2/reading-uebungen) — Kommentar-Struktur erkennen",
      "Alltag: [Bahn & Verspätung](#/alltag/bahn-verspaetung) — Durchsagen entschlüsseln"
    ]
  },
  {
    id: "w16", title: "Woche 16 · Schreiben unter Zeit",
    items: [
      "[telc B2 · Schriftlicher Ausdruck](#/exams/telc-b2-schreiben) durcharbeiten",
      "[Writing · Übungsteil](#/phase-2/writing-uebungen) Block A+B ≥ 80 %",
      "Ersten Brief unter Zeit schreiben: 30 Minuten, 150–200 Wörter",
      "Inhaltspunkte zählen — sind alle vier sichtbar beantwortet?",
      "Alltag: [Telefon: Bank & Handyvertrag](#/alltag/telefon-bank-vertrag)"
    ]
  },
  {
    id: "w17", title: "Woche 17 · Sprechen Teil 1 & 2",
    items: [
      "[telc B2 · Mündlicher Ausdruck](#/exams/telc-b2-sprechen) durcharbeiten",
      "[Speaking · Übungsteil](#/phase-2/speaking-uebungen) Block A+B ≥ 80 %",
      "🎙 Teil-1-Präsentation zu drei Themen aufnehmen, je 2 Minuten",
      "Ping-Pong-Drill täglich: Position + Begründung + Rückgabe",
      "„Und wie siehst du das?\" als Reflex einüben"
    ]
  },
  {
    id: "w18", title: "Woche 18 · Sprechen Teil 3 & Partikeln",
    items: [
      "Teil 3 laut durchspielen und **immer** mit „Dann halten wir fest: …\" beenden",
      "Einen kompletten 15-Minuten-Durchlauf mit einem Partner",
      "[Dialogue · Pair Programming](#/dialogues/pair-programming) — laut denken auf Deutsch",
      "Die fünf Rettungssätze auswendig",
      "Zweiten Brief unter Zeit schreiben"
    ]
  },
  {
    id: "w19", title: "Woche 19 · Kompletter Probelauf",
    items: [
      "Vollständigen offiziellen Übungstest unter Prüfungsbedingungen",
      "Ergebnis mit dem Stand aus Woche 13 vergleichen",
      "Schwächsten Prüfungsteil identifizieren und nur den drillen",
      "Alle sechs Übungsteile Phase 2 auf ≥ 80 %",
      "Prüfungs-Redemittel: Abruftraining ohne Nachsehen"
    ]
  },
  {
    id: "w20", title: "Woche 20 · 🎯 telc-B2-Modelltest",
    items: [
      "[Prüfung · telc-B2-Modelltest](#/phase-2/assessment) — 2 Stunden am Stück",
      "Alle fünf Teile auswerten, Gesamtpunktzahl eintragen",
      "Fehler → Modul-Tabelle ausfüllen",
      "Gate: ≥ 65 und kein Teil unter 50 % → Phase 3",
      "Bei ≥ 80: echte telc-Prüfung ablegen",
      "Ausweis, Anmeldebestätigung und Stifte für den Prüfungstag bereitlegen"
    ]
  },
  {
    id: "habits", title: "🧠 System-Gewohnheiten · täglich / wöchentlich / monatlich (Foundations)",
    items: [
      "TÄGLICH: 20 Anki-Karten vor dem Kaffee (Cache-Refresh gegen das Vergessen)",
      "TÄGLICH: 3-Minuten-Aufnahme — gestern/heute/Blocker, auf Deutsch",
      "TÄGLICH: 10 Min deutscher Podcast ODER 1 heise/Golem-Artikel",
      "WÖCHENTLICH: 1 Tutor-/Tandem-Session — die Korrektur-Schleife braucht Menschen",
      "WÖCHENTLICH: Fehlerjournal reviewen; wiederkehrende Fehler → gezielten Drill schreiben",
      "WÖCHENTLICH: 1 Integrationstest — Standup- oder Meeting-Simulation, laut",
      "MONATLICH: Engpass-Profil — alle 4 Skills 1–10 bewerten, Fokus neu setzen",
      "MONATLICH: Assessment der aktuellen Phase — Gate bestanden?",
      "GATE (Monat ~5): telc B2 Mock — nicht bestanden? Phase 2 wiederholen, nicht weiterdriften",
      "IMMER: Identität laut sagen — „Ich bin Entwickler und ich arbeite auf Deutsch.“"
    ]
  }
];
