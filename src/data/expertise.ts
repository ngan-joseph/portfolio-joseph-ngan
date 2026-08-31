export type SkillLevel = "core" | "working" | "learning";

export type SkillGroup = {
  title: string;
  eyebrow: string;
  skills: { name: string; level: SkillLevel }[];
};

export const skillGroups: SkillGroup[] = [
  {
    eyebrow: "Test Engineering",
    title: "Stratégie & conception",
    skills: [
      { name: "Test strategy", level: "core" },
      { name: "Risk-based testing", level: "core" },
      { name: "Test design", level: "core" },
      { name: "Regression strategy", level: "core" },
      { name: "Test planning", level: "core" },
      { name: "Test management", level: "core" },
    ],
  },
  {
    eyebrow: "Automatisation",
    title: "Frameworks & industrialisation",
    skills: [
      { name: "Playwright", level: "core" },
      { name: "Selenium", level: "core" },
      { name: "Robot Framework", level: "working" },
      { name: "API testing", level: "core" },
      { name: "NoCode automation", level: "core" },
      { name: "CI/CD pipelines", level: "working" },
    ],
  },
  {
    eyebrow: "Ingénierie qualité",
    title: "Mesure & pilotage",
    skills: [
      { name: "Quality metrics", level: "core" },
      { name: "Automation ROI", level: "core" },
      { name: "Flakiness score", level: "working" },
      { name: "Coverage tracking", level: "core" },
      { name: "Quality dashboards", level: "working" },
      { name: "Non-functional testing", level: "core" },
    ],
  },
  {
    eyebrow: "Leadership",
    title: "Transmission & impact",
    skills: [
      { name: "Technical leadership", level: "core" },
      { name: "Mentoring & coaching", level: "core" },
      { name: "Community of practices", level: "core" },
      { name: "Team enablement", level: "core" },
      { name: "Knowledge sharing", level: "core" },
      { name: "AI applied to testing", level: "learning" },
    ],
  },
];

export type PillarKey = "structurer" | "industrialiser" | "fiabiliser" | "transmettre";

export type Pillar = {
  key: PillarKey;
  index: string;
  title: string;
  text: string;
};

export const pillars: Pillar[] = [
  {
    key: "structurer",
    index: "01",
    title: "Structurer",
    text: "Stratégies de test orientées risques, gouvernance QA et trajectoires qualité adaptées au produit.",
  },
  {
    key: "industrialiser",
    index: "02",
    title: "Industrialiser",
    text: "Frameworks maintenables, automatisation UI et API, données de test et intégration continue.",
  },
  {
    key: "fiabiliser",
    index: "03",
    title: "Fiabiliser",
    text: "Tests de résilience, performance et accessibilité pour sécuriser les parcours critiques.",
  },
  {
    key: "transmettre",
    index: "04",
    title: "Transmettre",
    text: "Coaching, plans de formation et communautés de pratiques pour rendre les équipes autonomes.",
  },
];

export const frameworks = [
  {
    code: "PW",
    name: "Playwright",
    text: "Tests web et API modernes, multi-navigateurs, parallélisation et intégration CI/CD.",
  },
  {
    code: "SE",
    name: "Selenium",
    text: "Automatisation UI robuste, architecture de suites, non-régression et exécution distribuée.",
  },
  {
    code: "RF",
    name: "Robot Framework",
    text: "Approche keyword-driven, bibliothèques réutilisables et collaboration entre profils.",
  },
];
