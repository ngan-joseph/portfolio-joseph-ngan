export type SkillPosition = "top" | "right" | "bottom" | "left";
export type SkillMaturity = "adopt" | "master" | "expert" | "influence" | "define";

export type SkillEvidence = {
  label: string;
  href?: string;
};

export type SkillDimension = {
  key: "technology" | "quality" | "engineering" | "people";
  position: SkillPosition;
  title: string;
  intent: string;
  description: string;
  currentLevel: SkillMaturity;
  competencies: string[];
  evidence: SkillEvidence[];
};

export const skillLevels: { key: SkillMaturity; label: string }[] = [
  { key: "adopt", label: "Adopt" },
  { key: "master", label: "Master" },
  { key: "expert", label: "Expert" },
  { key: "influence", label: "Influence" },
  { key: "define", label: "Define" },
];

export const skillCenter = {
  title: "QA / Test Engineering",
  subtitle: "Test Lead · Sr. Test Referent",
};

export const skillStatement = "Au-delà des outils, je mets la technologie au service de la qualité.";
export const skillStatementEnglish = "Beyond the tools, I use technology to engineer quality.";

export const skillDimensions: SkillDimension[] = [
  {
    key: "technology",
    position: "top",
    title: "Technology",
    intent: "What I master",
    description:
      "Frameworks d’automatisation, langages, tests d’API, CI/CD et outillage : ce que je choisis, maîtrise et fais évoluer au quotidien.",
    currentLevel: "influence",
    competencies: [
      "Selenium",
      "Playwright",
      "Cypress",
      "Robot Framework",
      "Java",
      "TypeScript",
      "Python",
      "REST API",
      "CI/CD",
      "Git",
      "Docker",
    ],
    evidence: [
      { label: "E-commerce Playwright Lab", href: "/projects" },
      { label: "Enterprise Selenium Framework", href: "/projects" },
      { label: "Banking Cypress QA Lab", href: "/projects" },
    ],
  },
  {
    key: "quality",
    position: "right",
    title: "Quality",
    intent: "How I think",
    description:
      "Stratégie, analyse des risques, couverture, régression, exploration, fiabilité, flakiness : la posture QA avant l’outillage.",
    currentLevel: "influence",
    competencies: [
      "Test strategy",
      "Risk-based testing",
      "Test design",
      "Test coverage",
      "Regression strategy",
      "Exploratory testing",
      "Quality metrics",
      "Test reliability",
      "Flakiness management",
      "Quality Engineering",
    ],
    evidence: [
      { label: "Test Strategy Case Study", href: "/brag" },
      { label: "Automation ROI Model", href: "/projects" },
      { label: "Flakiness & Test Reliability Model", href: "/projects" },
    ],
  },
  {
    key: "engineering",
    position: "bottom",
    title: "Engineering",
    intent: "How I build",
    description:
      "Architecture, framework design, scalabilité, maintenabilité, réutilisabilité, CI/CD, données de test, reporting, observabilité, industrialisation, performance.",
    currentLevel: "influence",
    competencies: [
      "Automation architecture",
      "Framework design",
      "Scalability",
      "Maintainability",
      "Reusability",
      "CI/CD integration",
      "Test data management",
      "Reporting",
      "Observability",
      "Industrialization",
      "Performance optimization",
    ],
    evidence: [
      { label: "QA Automation Hub", href: "/projects" },
      { label: "CI/CD Test Pipeline", href: "/projects" },
      { label: "Test Architecture Case Study", href: "/brag" },
    ],
  },
  {
    key: "people",
    position: "left",
    title: "People & Leadership",
    intent: "How I enable others",
    description:
      "Partage de connaissances, coaching, mentoring, guidance technique, ateliers, documentation, activation des équipes et contribution à la communauté.",
    currentLevel: "influence",
    competencies: [
      "Knowledge sharing",
      "Coaching",
      "Mentoring",
      "Technical guidance",
      "Workshops",
      "Documentation",
      "Team enablement",
      "Community contribution",
      "Technical leadership",
    ],
    evidence: [
      { label: "QA Coaching Program", href: "/brag" },
      { label: "Technical Documentation & Guides", href: "/services" },
      { label: "Workshops & Talks", href: "/brag" },
    ],
  },
];
