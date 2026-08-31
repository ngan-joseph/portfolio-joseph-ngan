export type ImpactLevel = "distinguished" | "principal" | "staff" | "techlead" | "senior";
export type BragCategory = "projects" | "opensource" | "talks" | "mentoring";

export type BragItem = {
  id: string;
  year: number;
  sortKey: number;
  category: BragCategory;
  impact: ImpactLevel;
  title: string;
  description: string;
  tags: string[];
  meta?: string;
  ongoing?: boolean;
};

export const impactLabels: Record<ImpactLevel, string> = {
  distinguished: "Distinguished",
  principal: "Principal",
  staff: "Staff",
  techlead: "Tech Lead",
  senior: "Senior",
};

export const bragItems: BragItem[] = [
  {
    id: "auto-tribu",
    year: 2026,
    sortKey: 20260601,
    category: "projects",
    impact: "principal",
    title: "Industrialisation de l’automatisation à l’échelle d’une tribu",
    description:
      "Stratégie d’automatisation commune, roadmap déclinée auprès de 10 squads, mise en place d’un guichet d’accompagnement et pilotage par la valeur.",
    tags: ["Stratégie", "Automatisation", "Coaching", "ROI"],
    meta: "Tribu Assurance · 10 squads",
    ongoing: true,
  },
  {
    id: "cop-nocode",
    year: 2026,
    sortKey: 20260401,
    category: "mentoring",
    impact: "techlead",
    title: "Animation d’une communauté de pratiques automatisation NoCode",
    description:
      "Cadrage des cas d’usage, gouvernance, patrons de tests, montée en compétence progressive et diffusion des bonnes pratiques.",
    tags: ["NoCode", "Communauté", "Coaching"],
    meta: "CoP transverse",
    ongoing: true,
  },
  {
    id: "resilience-jdd",
    year: 2025,
    sortKey: 20251101,
    category: "projects",
    impact: "staff",
    title: "Fiabilisation d’un parcours critique par les tests de résilience",
    description:
      "Stratégie orientée risques, virtualisation des dépendances externes, bouchons contrôlés et jeux de données maîtrisés pour sécuriser un domaine métier stratégique.",
    tags: ["Résilience", "Virtualisation", "Salesforce", "Kafka"],
    meta: "Domaine KYC",
  },
  {
    id: "coaching-formation",
    year: 2025,
    sortKey: 20250901,
    category: "mentoring",
    impact: "techlead",
    title: "Plan de formation automatisation pour 26 collaborateurs",
    description:
      "Conception d’un parcours progressif, ateliers pratiques, revue de code de tests et suivi individuel jusqu’à l’autonomie.",
    tags: ["Formation", "Coaching", "Enablement"],
    meta: "26 personnes",
  },
  {
    id: "recette-version",
    year: 2024,
    sortKey: 20240501,
    category: "projects",
    impact: "techlead",
    title: "Pilotage de recette version sur un socle CRM stratégique",
    description:
      "Stratégie de test version, identification des risques, priorisation des scénarios et coordination avec les acteurs métier et technique.",
    tags: ["Test Lead", "Stratégie", "Salesforce"],
    meta: "Socle CRM",
  },
  {
    id: "guilde-qa",
    year: 2024,
    sortKey: 20240301,
    category: "mentoring",
    impact: "staff",
    title: "Contribution à la guilde de test (300+ membres)",
    description:
      "Participation à la R&D QA, partage de retours d’expérience et contribution à des standards partagés au sein d’une grande communauté technique.",
    tags: ["Guilde", "R&D", "Communauté"],
    meta: "Guilde QA · 300+",
    ongoing: true,
  },
  {
    id: "acc-nonfonctionnel",
    year: 2023,
    sortKey: 20231001,
    category: "projects",
    impact: "senior",
    title: "Campagne de tests non fonctionnels sur écosystème Salesforce",
    description:
      "Accessibilité, performance et résilience combinées à la non-régression fonctionnelle, avec outillage adapté et reporting exploitable par le métier.",
    tags: ["Accessibilité", "Performance", "Résilience"],
    meta: "Écosystème CRM",
  },
  {
    id: "qualif-sips",
    year: 2022,
    sortKey: 20220701,
    category: "projects",
    impact: "senior",
    title: "Qualification technico-fonctionnelle d’une solution d’acceptance bancaire",
    description:
      "Tests fonctionnels et automatisés sur un domaine Big Data orienté qualité des données, dans un contexte de paiement à forte exigence de fiabilité.",
    tags: ["Big Data", "Paiement", "Automatisation"],
    meta: "Stage de fin d’études",
  },
  {
    id: "istqb-atm",
    year: 2024,
    sortKey: 20240915,
    category: "talks",
    impact: "techlead",
    title: "ISTQB® Advanced Level — Test Manager",
    description:
      "Certification internationale validant la maîtrise de la stratégie, du pilotage et de l’amélioration continue des activités de test.",
    tags: ["Certification", "Test Management"],
    meta: "CFTL · Sept. 2024",
  },
  {
    id: "istqb-agile",
    year: 2022,
    sortKey: 20220501,
    category: "talks",
    impact: "senior",
    title: "ISTQB® Foundation Level — Agile Tester",
    description:
      "Fondamentaux du test en environnement Agile, collaboration produit et cycle de livraison itératif.",
    tags: ["Certification", "Agile"],
    meta: "CFTL · Mai 2022",
  },
];
