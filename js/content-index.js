/*!
 * content-index.js — navigation manifest for the German-for-IT Roadmap app.
 *
 * Each item.id maps to a Markdown module key in content-bundle.js
 * (generated from /content/**.md by build.js).
 * Ids beginning with "@" are built-in app views, not Markdown.
 *
 * Fields: id, title, level (B1/B2/C1/All), topic (for the filter chips), type.
 */
window.CONTENT_INDEX = {
  meta: {
    title: "German for Software Engineers",
    subtitle: "B1 → B2 / C1 · 12-Month Roadmap",
    version: "0.6",
    updated: "2026-08-18"
  },
  // Drives the sidebar filter chips. Every item.topic MUST appear here or the
  // chip for it never renders. Keep in sync when adding content groups.
  topics: ["Roadmap", "Grammar", "Vocabulary", "Übungen", "Speaking", "Listening", "Reading",
           "Writing", "IT", "Alltag", "Interview", "Bewerbung", "Exam", "Templates", "Culture"],
  levels: ["B1", "B2", "C1"],
  groups: [
    {
      id: "start", title: "Getting Started", icon: "🚀", open: true,
      items: [
        { id: "home", title: "Welcome & How to Use", level: "All", topic: "Roadmap", type: "guide" },
        { id: "roadmap-overview", title: "Roadmap Overview (B1 → C1)", level: "All", topic: "Roadmap", type: "guide" }
      ]
    },
    {
      id: "foundations", title: "Foundations — Think in Systems", icon: "🧠", open: true,
      items: [
        { id: "foundations/german-as-a-system", title: "German as a System (Architecture)",       level: "All", topic: "Grammar", type: "lesson" },
        { id: "foundations/learning-system",    title: "Your Learning System (Loops & Leverage)", level: "All", topic: "Roadmap", type: "lesson" }
      ]
    },
    {
      id: "phase-1", title: "Phase 1 — Strengthen B1", icon: "①", badge: "B1", open: true,
      items: [
        { id: "phase-1/overview",    title: "Objectives & Overview",        level: "B1", topic: "Roadmap",    type: "lesson" },
        { id: "phase-1/grammar",     title: "Grammar",                      level: "B1", topic: "Grammar",    type: "lesson" },
        { id: "phase-1/grammar-uebungen",    title: "↳ Grammar · Übungsteil",    level: "B1", topic: "Übungen", type: "lesson" },
        { id: "phase-1/vocabulary",  title: "Vocabulary",                   level: "B1", topic: "Vocabulary", type: "lesson" },
        { id: "phase-1/vocabulary-uebungen", title: "↳ Vocabulary · Übungsteil", level: "B1", topic: "Übungen", type: "lesson" },
        { id: "phase-1/speaking",    title: "Speaking Practice",            level: "B1", topic: "Speaking",   type: "lesson" },
        { id: "phase-1/speaking-uebungen",   title: "↳ Speaking · Übungsteil",   level: "B1", topic: "Übungen", type: "lesson" },
        { id: "phase-1/listening",   title: "Listening Resources",          level: "B1", topic: "Listening",  type: "lesson" },
        { id: "phase-1/listening-uebungen",  title: "↳ Listening · Übungsteil",  level: "B1", topic: "Übungen", type: "lesson" },
        { id: "phase-1/reading",     title: "Reading Materials",            level: "B1", topic: "Reading",    type: "lesson" },
        { id: "phase-1/reading-uebungen",    title: "↳ Reading · Übungsteil",    level: "B1", topic: "Übungen", type: "lesson" },
        { id: "phase-1/writing",     title: "Writing Exercises",            level: "B1", topic: "Writing",    type: "lesson" },
        { id: "phase-1/writing-uebungen",    title: "↳ Writing · Übungsteil",    level: "B1", topic: "Übungen", type: "lesson" },
        { id: "phase-1/plan",        title: "Weekly Milestones & Daily Plan", level: "B1", topic: "Roadmap",  type: "lesson" },
        { id: "phase-1/assessment",  title: "Prüfung · Phase-1 Test",       level: "B1", topic: "Roadmap",    type: "lesson" }
      ]
    },
    {
      id: "phase-2", title: "Phase 2 — Reach B2", icon: "②", badge: "B2",
      items: [
        { id: "phase-2/overview",    title: "Objectives & Overview",        level: "B2", topic: "Roadmap",    type: "lesson" },
        { id: "phase-2/grammar",     title: "Grammar",                      level: "B2", topic: "Grammar",    type: "lesson" },
        { id: "phase-2/grammar-uebungen",    title: "↳ Grammar · Übungsteil",    level: "B2", topic: "Übungen", type: "lesson" },
        { id: "phase-2/vocabulary",  title: "Vocabulary",                   level: "B2", topic: "Vocabulary", type: "lesson" },
        { id: "phase-2/vocabulary-uebungen", title: "↳ Vocabulary · Übungsteil", level: "B2", topic: "Übungen", type: "lesson" },
        { id: "phase-2/speaking",    title: "Speaking Practice",            level: "B2", topic: "Speaking",   type: "lesson" },
        { id: "phase-2/speaking-uebungen",   title: "↳ Speaking · Übungsteil",   level: "B2", topic: "Übungen", type: "lesson" },
        { id: "phase-2/listening",   title: "Listening Resources",          level: "B2", topic: "Listening",  type: "lesson" },
        { id: "phase-2/listening-uebungen",  title: "↳ Listening · Übungsteil",  level: "B2", topic: "Übungen", type: "lesson" },
        { id: "phase-2/reading",     title: "Reading Materials",            level: "B2", topic: "Reading",    type: "lesson" },
        { id: "phase-2/reading-uebungen",    title: "↳ Reading · Übungsteil",    level: "B2", topic: "Übungen", type: "lesson" },
        { id: "phase-2/writing",     title: "Writing Exercises",            level: "B2", topic: "Writing",    type: "lesson" },
        { id: "phase-2/writing-uebungen",    title: "↳ Writing · Übungsteil",    level: "B2", topic: "Übungen", type: "lesson" },
        { id: "phase-2/plan",        title: "Weekly Milestones & Daily Plan", level: "B2", topic: "Roadmap",  type: "lesson" },
        { id: "phase-2/assessment",  title: "Prüfung · telc-B2-Modelltest", level: "B2", topic: "Exam",       type: "lesson" }
      ]
    },
    {
      id: "phase-3", title: "Phase 3 — German for Software Engineers", icon: "③", badge: "B2+",
      items: [
        { id: "phase-3/overview",    title: "Objectives & Overview",        level: "B2", topic: "Roadmap",    type: "lesson" },
        { id: "phase-3/grammar",     title: "Grammar (Technical Register)", level: "B2", topic: "Grammar",    type: "lesson" },
        { id: "phase-3/vocabulary",  title: "IT Vocabulary Systems",        level: "B2", topic: "IT",         type: "lesson" },
        { id: "phase-3/speaking",    title: "Speaking Practice",            level: "B2", topic: "Speaking",   type: "lesson" },
        { id: "phase-3/listening",   title: "Listening Resources",          level: "B2", topic: "Listening",  type: "lesson" },
        { id: "phase-3/reading",     title: "Reading Technical Docs",       level: "B2", topic: "Reading",    type: "lesson" },
        { id: "phase-3/writing",     title: "Technical Writing",            level: "B2", topic: "Writing",    type: "lesson" },
        { id: "phase-3/plan",        title: "Weekly Milestones & Daily Plan", level: "B2", topic: "Roadmap",  type: "lesson" },
        { id: "phase-3/assessment",  title: "Monthly Assessment",           level: "B2", topic: "Roadmap",    type: "lesson" }
      ]
    },
    {
      id: "phase-4", title: "Phase 4 — Professional Communication", icon: "④", badge: "B2/C1",
      items: [
        { id: "phase-4/overview",    title: "Objectives & Overview",        level: "C1", topic: "Roadmap",    type: "lesson" },
        { id: "phase-4/grammar",     title: "Grammar (Formal Register)",    level: "C1", topic: "Grammar",    type: "lesson" },
        { id: "phase-4/vocabulary",  title: "Business & Meeting Vocabulary", level: "C1", topic: "Vocabulary", type: "lesson" },
        { id: "phase-4/speaking",    title: "Meetings & Presentations",     level: "C1", topic: "Speaking",   type: "lesson" },
        { id: "phase-4/listening",   title: "Listening Resources",          level: "C1", topic: "Listening",  type: "lesson" },
        { id: "phase-4/reading",     title: "Reading Materials",            level: "C1", topic: "Reading",    type: "lesson" },
        { id: "phase-4/writing",     title: "Emails & Documentation",       level: "C1", topic: "Writing",    type: "lesson" },
        { id: "phase-4/plan",        title: "Weekly Milestones & Daily Plan", level: "C1", topic: "Roadmap",  type: "lesson" },
        { id: "phase-4/assessment",  title: "Monthly Assessment",           level: "C1", topic: "Roadmap",    type: "lesson" }
      ]
    },
    {
      id: "phase-5", title: "Phase 5 — Job Interview Preparation", icon: "⑤", badge: "C1",
      items: [
        { id: "phase-5/overview",    title: "Objectives & Overview",        level: "C1", topic: "Interview",  type: "lesson" },
        { id: "phase-5/grammar",     title: "Grammar for Interviews",       level: "C1", topic: "Grammar",    type: "lesson" },
        { id: "phase-5/vocabulary",  title: "Interview Vocabulary",         level: "C1", topic: "Interview",  type: "lesson" },
        { id: "phase-5/speaking",    title: "Mock Interviews",              level: "C1", topic: "Speaking",   type: "lesson" },
        { id: "phase-5/listening",   title: "Listening Resources",          level: "C1", topic: "Listening",  type: "lesson" },
        { id: "phase-5/reading",     title: "Job Ads & Company Research",   level: "C1", topic: "Reading",    type: "lesson" },
        { id: "phase-5/writing",     title: "CV, Cover Letter & Follow-up", level: "C1", topic: "Writing",    type: "lesson" },
        { id: "phase-5/plan",        title: "Weekly Milestones & Daily Plan", level: "C1", topic: "Roadmap",  type: "lesson" },
        { id: "phase-5/assessment",  title: "Monthly Assessment",           level: "C1", topic: "Roadmap",    type: "lesson" }
      ]
    },
    {
      id: "phase-6", title: "Phase 6 — Working in a German IT Company", icon: "⑥", badge: "C1",
      items: [
        { id: "phase-6/overview",    title: "Objectives & Overview",        level: "C1", topic: "Culture",    type: "lesson" },
        { id: "phase-6/grammar",     title: "Grammar Maintenance",          level: "C1", topic: "Grammar",    type: "lesson" },
        { id: "phase-6/vocabulary",  title: "Workplace Vocabulary",         level: "C1", topic: "Vocabulary", type: "lesson" },
        { id: "phase-6/speaking",    title: "Daily Standups & Reviews",     level: "C1", topic: "Speaking",   type: "lesson" },
        { id: "phase-6/listening",   title: "Listening Resources",          level: "C1", topic: "Listening",  type: "lesson" },
        { id: "phase-6/reading",     title: "Reading Materials",            level: "C1", topic: "Reading",    type: "lesson" },
        { id: "phase-6/writing",     title: "Professional Writing at Work", level: "C1", topic: "Writing",    type: "lesson" },
        { id: "phase-6/plan",        title: "Weekly Milestones & Daily Plan", level: "C1", topic: "Roadmap",  type: "lesson" },
        { id: "phase-6/assessment",  title: "Monthly Assessment & Beyond",  level: "C1", topic: "Culture",    type: "lesson" }
      ]
    },
    {
      id: "vocab-lib", title: "IT Vocabulary (Deep Dives)", icon: "📇",
      items: [
        { id: "vocabulary/software-development",       title: "Software Development",        level: "B2", topic: "IT", type: "lesson" },
        { id: "vocabulary/java",                       title: "Java",                        level: "B2", topic: "IT", type: "lesson" },
        { id: "vocabulary/spring-boot",                title: "Spring Boot",                 level: "B2", topic: "IT", type: "lesson" },
        { id: "vocabulary/microservices-cloud",        title: "Microservices & Cloud",       level: "B2", topic: "IT", type: "lesson" },
        { id: "vocabulary/docker-kubernetes",          title: "Docker & Kubernetes",         level: "B2", topic: "IT", type: "lesson" },
        { id: "vocabulary/cicd-git-devops",            title: "CI/CD, Git & DevOps",         level: "B2", topic: "IT", type: "lesson" },
        { id: "vocabulary/database-sql",               title: "Database & SQL",              level: "B2", topic: "IT", type: "lesson" },
        { id: "vocabulary/networking-linux",           title: "Networking & Linux",          level: "B2", topic: "IT", type: "lesson" },
        { id: "vocabulary/security-auth",              title: "Security, Auth & Authz",      level: "B2", topic: "IT", type: "lesson" },
        { id: "vocabulary/testing-agile",              title: "Testing, Agile & Scrum",      level: "B2", topic: "IT", type: "lesson" },
        { id: "vocabulary/architecture-system-design", title: "Architecture & System Design", level: "C1", topic: "IT", type: "lesson" },
        { id: "vocabulary/ai-ml",                      title: "AI & Machine Learning",       level: "C1", topic: "IT", type: "lesson" }
      ]
    },
    {
      id: "alltag", title: "Alltag — Everyday German", icon: "🏠", badge: "B1/B2",
      items: [
        { id: "alltag/cafe-baeckerei",       title: "Im Café & an der Bäckerei",      level: "B1", topic: "Alltag", type: "lesson" },
        { id: "alltag/mittagspause",         title: "Mittagspause mit Kollegen",      level: "B1", topic: "Alltag", type: "lesson" },
        { id: "alltag/kaffeekueche",         title: "Kaffeeküche & Modalpartikeln",   level: "B1", topic: "Alltag", type: "lesson" },
        { id: "alltag/feierabend",           title: "Feierabend mit dem Team",        level: "B1", topic: "Alltag", type: "lesson" },
        { id: "alltag/wohnungsbesichtigung", title: "Wohnungsbesichtigung & WG",      level: "B2", topic: "Alltag", type: "lesson" },
        { id: "alltag/anmeldung",            title: "Anmeldung & Ausländerbehörde",   level: "B2", topic: "Alltag", type: "lesson" },
        { id: "alltag/beim-arzt",            title: "Beim Arzt",                      level: "B2", topic: "Alltag", type: "lesson" },
        { id: "alltag/supermarkt-pfand",     title: "Supermarkt, Pfand & Umtausch",   level: "B1", topic: "Alltag", type: "lesson" },
        { id: "alltag/bahn-verspaetung",     title: "Bahn, Verspätung & Fahrgastrechte", level: "B2", topic: "Alltag", type: "lesson" },
        { id: "alltag/telefon-bank-vertrag", title: "Telefon: Bank & Handyvertrag",   level: "B2", topic: "Alltag", type: "lesson" }
      ]
    },
    {
      id: "exams", title: "Prüfungen — telc & Goethe", icon: "🎓", badge: "B2/C1",
      items: [
        { id: "exams/overview",                        title: "Überblick — welche Prüfung, wann",   level: "B2", topic: "Exam", type: "lesson" },
        { id: "exams/telc-b2-lesen-sprachbausteine",   title: "telc B2 · Lesen & Sprachbausteine",  level: "B2", topic: "Exam", type: "lesson" },
        { id: "exams/telc-b2-hoeren",                  title: "telc B2 · Hörverstehen",             level: "B2", topic: "Exam", type: "lesson" },
        { id: "exams/telc-b2-schreiben",               title: "telc B2 · Schriftlicher Ausdruck",   level: "B2", topic: "Exam", type: "lesson" },
        { id: "exams/telc-b2-sprechen",                title: "telc B2 · Mündlicher Ausdruck",      level: "B2", topic: "Exam", type: "lesson" },
        { id: "exams/pruefungs-redemittel",            title: "Prüfungs-Redemittel · Baukasten",    level: "B2", topic: "Exam", type: "lesson" }
      ]
    },
    {
      id: "library", title: "Reference Library", icon: "📚",
      items: [
        { id: "dialogues/onboarding",       title: "Dialogue — Onboarding, erster Tag",     level: "B1", topic: "Speaking",  type: "lesson" },
        { id: "dialogues/standup",          title: "Dialogue — Daily Standup",              level: "B2", topic: "Speaking",  type: "lesson" },
        { id: "dialogues/krankmeldung",     title: "Dialogue — Krankmeldung & Urlaub",      level: "B1", topic: "Speaking",  type: "lesson" },
        { id: "dialogues/pair-programming", title: "Dialogue — Pair Programming",           level: "B2", topic: "Speaking",  type: "lesson" },
        { id: "dialogues/team-lead",        title: "Dialogue — Developer ↔ Team Lead",      level: "B2", topic: "Speaking",  type: "lesson" },
        { id: "dialogues/code-review",      title: "Dialogue — Code Review",                level: "B2", topic: "Speaking",  type: "lesson" },
        { id: "dialogues/sprint-planning",  title: "Dialogue — Sprint Planning",            level: "B2", topic: "Speaking",  type: "lesson" },
        { id: "dialogues/incident",         title: "Dialogue — Production Incident",        level: "C1", topic: "Speaking",  type: "lesson" },
        { id: "interviews/backend",         title: "Interview Q&A — Backend / Java",        level: "C1", topic: "Interview", type: "lesson" },
        { id: "interviews/devops",          title: "Interview Q&A — DevOps Engineer",       level: "C1", topic: "Interview", type: "lesson" },
        { id: "interviews/spring-microservices", title: "Interview Q&A — Spring & Microservices", level: "C1", topic: "Interview", type: "lesson" }
      ]
    },
    {
      id: "plans", title: "Plans & Trackers", icon: "🗓️",
      items: [
        { id: "plans/52-week-plan", title: "52-Week Study Plan", level: "All", topic: "Roadmap", type: "lesson" }
      ]
    },
    {
      id: "tools", title: "Study Tools", icon: "🧰", open: true,
      items: [
        { id: "@flashcards", title: "Vocabulary Flashcards", level: "All", topic: "Vocabulary", type: "flashcards" },
        { id: "@quiz",       title: "Quizzes",               level: "All", topic: "Grammar",    type: "quiz" },
        { id: "@checklist",  title: "Weekly Study Checklist", level: "All", topic: "Roadmap",   type: "checklist" },
        { id: "@journal",    title: "Fehlerjournal · Error Log", level: "All", topic: "Roadmap", type: "journal" },
        { id: "@bookmarks",  title: "★ Bookmarks",           level: "All", topic: "Roadmap",    type: "bookmarks" }
      ]
    }
  ]
};
