export type Principle = {
  index: string;
  title: string;
  text: string;
};

export const principles: Principle[] = [
  {
    index: "01",
    title: "Automatiser n’est pas un objectif",
    text: "L’automatisation est un moyen de réduire le risque et d’améliorer l’efficacité. Elle ne remplace ni la stratégie ni le jugement.",
  },
  {
    index: "02",
    title: "Tous les tests ne méritent pas d’être automatisés",
    text: "La valeur métier, le risque, la fréquence d’exécution et la stabilité doivent guider la décision.",
  },
  {
    index: "03",
    title: "Un test automatisé doit inspirer confiance",
    text: "Un test auquel l’équipe ne fait plus confiance ne produit plus de valeur. Fiabilité et lisibilité passent avant volume.",
  },
  {
    index: "04",
    title: "La qualité est collective",
    text: "Le QA n’est pas seul garant de la qualité. Il outille, cadre et accompagne les équipes qui produisent le logiciel.",
  },
  {
    index: "05",
    title: "Mesurer avant d’optimiser",
    text: "Couverture, stabilité, ROI et confiance : les décisions QA se prennent avec des données, pas des intuitions.",
  },
  {
    index: "06",
    title: "Tester moins, tester mieux",
    text: "Green QA, sélection par criticité, réduction des exécutions inutiles : la qualité doit devenir soutenable.",
  },
];
