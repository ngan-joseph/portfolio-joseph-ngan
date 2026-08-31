export type Service = {
  key: string;
  title: string;
  text: string;
};

export const services: Service[] = [
  {
    key: "assessment",
    title: "Évaluation de l’automatisation des tests",
    text: "Analyse de la stratégie d’automatisation existante : maturité, couverture, stabilité, ROI et identification des axes d’amélioration prioritaires.",
  },
  {
    key: "strategy",
    title: "Stratégie d’automatisation",
    text: "Définition d’une stratégie d’automatisation adaptée au contexte produit et organisationnel, avec critères de sélection, patrons et gouvernance.",
  },
  {
    key: "kpi",
    title: "Indicateurs QA et automatisation",
    text: "Mise en place d’indicateurs mesurant couverture, stabilité, efficacité, flakiness et ROI, pour piloter la qualité par la donnée.",
  },
  {
    key: "test-strategy",
    title: "Stratégie de test",
    text: "Construction ou refonte d’une stratégie de test orientée risques, cohérente entre équipes, méthodes et outillage.",
  },
  {
    key: "coaching",
    title: "Accompagnement QA",
    text: "Accompagnement des équipes QA, Test Leads et automaticiens sur les pratiques, l’industrialisation et la posture technique.",
  },
  {
    key: "ai",
    title: "IA appliquée au testing",
    text: "Cadrage et prototypage d’usages IA au service du test : génération de cas, priorisation, analyse et acceleration de la couverture.",
  },
];
