export type TimelineItem = {
  date: string;
  role: string;
  company: string;
  text: string;
};

export const timeline: TimelineItem[] = [
  {
    date: "2025 — aujourd’hui",
    role: "Référent technique de test",
    company: "Groupe d’assurance · Métropole lilloise",
    text: "Rôle transverse d’architecte qualité : stratégie d’automatisation, roadmap tribu, coaching, communauté de pratiques et pilotage par la valeur.",
  },
  {
    date: "2024 — 2025",
    role: "Test Lead",
    company: "Écosystème CRM & KYC",
    text: "Leadership QA sur un domaine stratégique : supervision d’équipe, stratégie de version, pilotage de recette métier et gestion des risques.",
  },
  {
    date: "2022 — 2023",
    role: "Test Engineer",
    company: "Salesforce & architecture événementielle",
    text: "Validation fonctionnelle et technique, tests API, accessibilité, performance, virtualisation et recherche de données de test.",
  },
  {
    date: "2022",
    role: "Ingénieur QA · stage de fin d’études",
    company: "Paiement · acceptance bancaire",
    text: "Qualification technico-fonctionnelle d’une solution d’acceptance bancaire et tests automatisés sur un domaine Big Data orienté qualité des données.",
  },
  {
    date: "2021 — 2022",
    role: "Consultant IT Risk",
    company: "Cybersécurité & référentiels",
    text: "Étude d’un référentiel d’exigences applicatives aux prestataires PDIS et construction d’un plan d’action de mise en conformité.",
  },
];
