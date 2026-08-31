export type Project = {
  id: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  stack: string[];
  focus: string;
  status: "planned" | "in-progress" | "shipped";
};

export const projects: Project[] = [
  {
    id: "ecom-lab",
    number: "01",
    title: "E-commerce Testing Lab",
    headline: "Playwright · TypeScript · CI/CD",
    description:
      "Suite E2E complète sur un site e-commerce public : login, recherche, panier, checkout. Page Object Model, fixtures, parallélisation, traces et reporting.",
    stack: ["Playwright", "TypeScript", "POM", "GitHub Actions"],
    focus: "Automatisation UI moderne",
    status: "in-progress",
  },
  {
    id: "selenium-framework",
    number: "02",
    title: "Enterprise Selenium Framework",
    headline: "Java · TestNG · Maven",
    description:
      "Framework prêt pour l’échelle : Page Object, drivers, configuration multi-environnements, reporting, parallélisation et Architecture Decision Records.",
    stack: ["Selenium", "Java", "TestNG", "Maven", "Allure"],
    focus: "Framework d’entreprise",
    status: "planned",
  },
  {
    id: "cypress-banking",
    number: "03",
    title: "Banking Web App QA Lab",
    headline: "Cypress · API mocking",
    description:
      "Scénarios critiques d’application bancaire avec cy.intercept, network stubbing, tests d’erreur API, custom commands et fixtures.",
    stack: ["Cypress", "JavaScript", "Mocha", "GitHub Actions"],
    focus: "Résilience front / API",
    status: "planned",
  },
  {
    id: "robot-hotel",
    number: "04",
    title: "Keyword-Driven Hotel Booking",
    headline: "Robot Framework · BDD",
    description:
      "Suite keyword-driven pour montrer comment rendre l’automatisation accessible à des profils moins techniques, avec une comparaison Robot vs Playwright vs Selenium.",
    stack: ["Robot Framework", "Python", "BDD", "Docker"],
    focus: "Accessibilité de l’automatisation",
    status: "planned",
  },
  {
    id: "api-books",
    number: "05",
    title: "Book Management API",
    headline: "Python · pytest · JSON Schema",
    description:
      "Tests API CRUD complets : happy path, validation, auth, contrat via JSON Schema, exécution CI et rapports Allure.",
    stack: ["Python", "pytest", "requests", "JSON Schema"],
    focus: "Testing API contract-first",
    status: "planned",
  },
  {
    id: "flakiness-score",
    number: "06",
    title: "Trust Score & Flakiness Model",
    headline: "Analytics · Dashboard",
    description:
      "Modèle de mesure de la confiance dans une suite de tests automatisés : taux de flakiness, faux positifs, MTTR et score de confiance visualisés.",
    stack: ["Python", "SQL", "Dashboard", "Analytics"],
    focus: "Quality Engineering",
    status: "planned",
  },
  {
    id: "green-qa",
    number: "07",
    title: "Green QA — Sélection intelligente",
    headline: "Test impact analysis",
    description:
      "Prototype de sélection des tests à exécuter en fonction du risque, de la criticité et de l’impact, pour réduire l’empreinte des campagnes de test.",
    stack: ["Python", "Analytics", "Risk-based"],
    focus: "Sustainable testing",
    status: "planned",
  },
  {
    id: "ai-test-gen",
    number: "08",
    title: "AI Test Generator",
    headline: "LLM · Génération assistée",
    description:
      "Assistant de génération de scénarios de test à partir de user stories, avec boucle de validation humaine et mesure de la qualité produite.",
    stack: ["LLM", "Prompt engineering", "Python"],
    focus: "IA appliquée au testing",
    status: "planned",
  },
];
