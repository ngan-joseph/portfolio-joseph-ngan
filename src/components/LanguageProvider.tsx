"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

type Locale = "fr" | "en";
type LanguageContextValue = { locale: Locale; toggleLocale: () => void; setLocale: (locale: Locale) => void };

const LanguageContext = createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "jnm-locale";

const translations: Record<string, string> = {
  "Accueil": "Home", "Philosophie": "Philosophy", "Expertise": "Expertise", "Brag": "Brag Document", "Brag Document": "Brag Document",
  "Projets": "Projects", "Services": "Services", "Contact": "Contact", "Me contacter": "Contact me",
  "Écrivons-nous": "Let’s talk", "Test Lead": "Test Lead", "Coaching QA": "QA Coaching",
  "Réalisations & Impact": "Achievements & Impact", "Ce que je peux apporter": "How I can help",
  "Évaluation de l’automatisation des tests": "Test Automation Assessment", "Stratégie d’automatisation": "Automation Strategy", "Indicateurs QA et automatisation": "QA & Automation Metrics", "Accompagnement QA": "QA Coaching", "IA appliquée au testing": "AI applied to testing",
  "Ce que je sais faire": "What I can do", "Manifeste": "Manifesto", "Parcours": "Journey",
  "Frameworks": "Frameworks", "Automatisation": "Automation", "Transmission & impact": "Transmission & impact", "Chiffres clés": "Key figures", "Réalisations détaillées": "Detailed achievements",
  "Comment je pense": "How I think about quality", "Ce que j’ai réalisé": "What I have achieved", "Explorer": "Explore",
  "Une seule voix,": "One voice,", "plusieurs": "multiple", "entrées.": "ways in.",
  "Faire de la qualité": "Making quality", "un accélérateur.": "an accelerator.",
  "Concevoir pour durer,": "Built to last,", "automatiser": "automate", "avec intention.": "with intention.",
  "Voir mes réalisations": "View my achievements", "Télécharger le CV": "Download CV",
  "En savoir plus": "Learn more", "Ma philosophie QA": "My QA philosophy",
  "QA Playground": "QA Playground", "Référent technique de test": "Technical Test Referent",
  "Quality Engineering": "Quality Engineering", "Lille, France": "Lille, France",
  "Je transforme la stratégie de test en solutions concrètes, automatisables et mesurables.": "I turn test strategy into concrete, automatable and measurable solutions.",
  "J’aide les équipes produit et IT à structurer leur stratégie de test, industrialiser l’automatisation et rendre la qualité mesurable.": "I help product and IT teams structure their test strategy, industrialise automation and make quality measurable.",
  "Une approche de bout en bout, de la stratégie jusqu’à l’adoption par les équipes, avec le bon niveau d’automatisation au bon endroit.": "An end-to-end approach, from strategy to team adoption, with the right level of automation in the right place.",
  "Stratégies de test orientées risques, gouvernance QA et trajectoires qualité adaptées au produit.": "Risk-based test strategies, QA governance and quality roadmaps adapted to the product.",
  "Frameworks maintenables, automatisation UI et API, données de test et intégration continue.": "Maintainable frameworks, UI and API automation, test data and continuous integration.",
  "Tests de résilience, performance et accessibilité pour sécuriser les parcours critiques.": "Resilience, performance and accessibility testing to secure critical journeys.",
  "Coaching, plans de formation et communautés de pratiques pour rendre les équipes autonomes.": "Coaching, training plans and communities of practice to make teams autonomous.",
  "Sélection des technologies, architecture, conventions, données de test, reporting et maîtrise du flaky : mêmes exigences quel que soit l’outil.": "Technology selection, architecture, conventions, test data, reporting and flaky test control: the same standards whatever the tool.",
  "Le portfolio se lit de différentes manières selon votre besoin : vision, preuves d’impact, savoir-faire technique ou accompagnement.": "The portfolio can be read in different ways: vision, evidence of impact, technical expertise or support.",
  "Les principes qui guident chacune de mes décisions autour du test et de la qualité logicielle.": "The principles guiding my decisions around testing and software quality.",
  "Les preuves concrètes de mon impact : projets, coaching, communauté, certifications, filtrables par niveau et par thème.": "Concrete evidence of my impact: projects, coaching, community and certifications, filterable by level and theme.",
  "Une série de projets de démonstration : Playwright, Selenium, Cypress, Robot Framework, API, IA et Green QA.": "A series of demonstration projects: Playwright, Selenium, Cypress, Robot Framework, API, AI and Green QA.",
  "Tous": "All", "Impact": "Impact", "Tags": "Tags",
  "Aucune réalisation ne correspond à ces filtres.": "No achievement matches these filters.", "En cours": "In progress", "À venir": "Coming soon", "Livré": "Shipped",
  "Des enjeux complexes,": "Complex challenges,", "des résultats lisibles.": "clear outcomes.",
  "Preuves de faire,": "Proof of practice,", "en": "in", "public.": "public.",
  "Comment je peux": "How I can", "vous": "help", "aider.": "you.",
  "Parlons de votre": "Let’s discuss your", "prochain défi": "next QA", "QA.": "challenge.",
  "Construisons une qualité durable": "Let’s build lasting quality",
  "Du test terrain": "From hands-on testing", "à l’architecture": "to quality", "qualité.": "architecture.",
  "Une matrice pensée": "A skills matrix", "par usages.": "organised by use.",
  "Les éléments sensibles sont anonymisés,": "Sensitive details are anonymised,",
  "l’intention et le résultat restent lisibles.": "while intent and outcomes remain clear.",
  "Une approche de bout en bout,": "An end-to-end approach,",
  "Parlons de votre problématique qualité, automatisation, stratégie de test, indicateurs QA, ou encore IA appliquée au testing : présentez-moi votre contexte, je vous propose une lecture et des pistes concrètes.": "Tell me about your quality, automation, test strategy, QA metrics or AI testing challenge. I will bring a clear perspective and practical next steps.",

  "Référent Technique Test & Sr. Test Lead": "Technical Test Referent & Sr. Test Lead",
  "AXA France": "AXA France", "Depuis octobre 2022": "Since October 2022",
  "Ingénierie Qualité": "Quality Engineering", "Stratégie de test": "Test strategy",
  "Domaines clés": "Key domains",

  "Radar des dimensions": "Skills radar",
  "Quatre dimensions,": "Four dimensions,", "un même équilibre.": "one balance.",
  "Une lecture rapide de mon niveau sur chaque axe : Expertise technique, Quality, People & Leadership et Engineering. Cinq paliers pour chacun, du premier apprentissage jusqu'à la définition d'un standard.":
    "A quick view of my level on each axis: technical Expertise, Quality, People & Leadership and Engineering. Five stages each, from first learning to defining a standard.",
  "Nord": "North", "Sud": "South", "Est": "East", "Ouest": "West",
  "Expertise technique": "Technical expertise",
  "People & Leadership": "People & Leadership", "Quality": "Quality", "Engineering": "Engineering",
  "What I master · technologie & pratiques": "What I master · technology & practices",
  "How I think · posture qualité": "How I think · quality posture",
  "How I enable others · accompagnement": "How I enable others · guidance",
  "How I build · architecture, industrialisation, maintenabilité, observabilité, performance, scalabilité":
    "How I build · architecture, industrialisation, maintainability, observability, performance, scalability",
  "Sélectionner, comprendre et faire évoluer les technologies de test.": "Select, understand and evolve testing technologies.",
  "De la pratique du test à la définition d’une culture qualité.": "From testing practice to defining a quality culture.",
  "Faire grandir les équipes, les Test Leads et les communautés.": "Grow teams, Test Leads and communities.",
  "Concevoir des solutions de test durables et industrialisables.": "Design durable and industrialisable test solutions.",
  "Mon expertise ne réside pas uniquement dans les outils, mais dans ma capacité à utiliser la technologie pour concevoir et industrialiser la qualité.":
    "My expertise does not lie only in tools, but in my ability to use technology to design and industrialise quality.",
  "Au-delà des outils, je mets la technologie au service de la qualité.": "Beyond the tools, I use technology to engineer quality.",

  "QA Expertise Diamond": "QA Expertise Diamond", "un même modèle.": "one model.",
  "Un modèle de compétence sophistiqué pensé pour un profil Test Lead & QA senior. Chaque axe représente une posture, cinq paliers de maturité et des preuves concrètes plutôt qu'un pourcentage.":
    "A sophisticated competency model designed for a Test Lead / senior QA profile. Each axis represents a posture, five maturity stages and concrete evidence rather than a percentage.",
  "Technology": "Technology", "What I master": "What I master",
  "How I think": "How I think", "How I build": "How I build", "How I enable others": "How I enable others",
  "Frameworks d’automatisation, langages, tests d’API, CI/CD et outillage : ce que je choisis, maîtrise et fais évoluer au quotidien.":
    "Automation frameworks, languages, API testing, CI/CD and tooling: what I choose, master and evolve every day.",
  "Stratégie, analyse des risques, couverture, régression, exploration, fiabilité, flakiness : la posture QA avant l’outillage.":
    "Strategy, risk analysis, coverage, regression, exploration, reliability and flakiness: the QA posture before the tooling.",
  "Architecture, framework design, scalabilité, maintenabilité, réutilisabilité, CI/CD, données de test, reporting, observabilité, industrialisation, performance.":
    "Architecture, framework design, scalability, maintainability, reusability, CI/CD, test data, reporting, observability, industrialisation and performance.",
  "Partage de connaissances, coaching, mentoring, guidance technique, ateliers, documentation, activation des équipes et contribution à la communauté.":
    "Knowledge sharing, coaching, mentoring, technical guidance, workshops, documentation, team enablement and community contribution.",
  "Modèle de compétence": "Competency model",
  "Sélectionnez une dimension pour révéler ses compétences, son niveau de maturité et les preuves associées.":
    "Select a dimension to reveal its competencies, its maturity level and the supporting evidence.",
  "Compétences": "Competencies", "Preuves du portfolio": "Portfolio evidence",
  "Fermer le panneau": "Close panel", "Level :": "Level :",

  "Structurer": "Structure", "Industrialiser": "Industrialise", "Fiabiliser": "Strengthen", "Transmettre": "Share",

  "squads accompagnées": "squads supported",
  "collaborateurs formés": "people trained",
  "membres de la guilde QA": "QA guild members",
  "années d’expérience QA": "years of QA experience",

  "Stratégie & conception": "Strategy & design",
  "Frameworks & industrialisation": "Frameworks & industrialisation",
  "Mesure & pilotage": "Metrics & steering",
  "Leadership": "Leadership", "Test Engineering": "Test Engineering",

  "Test strategy": "Test strategy", "Risk-based testing": "Risk-based testing", "Test design": "Test design",
  "Regression strategy": "Regression strategy", "Test planning": "Test planning", "Test management": "Test management",
  "API testing": "API testing", "NoCode automation": "NoCode automation", "CI/CD pipelines": "CI/CD pipelines",
  "Quality metrics": "Quality metrics", "Automation ROI": "Automation ROI", "Flakiness score": "Flakiness score",
  "Coverage tracking": "Coverage tracking", "Quality dashboards": "Quality dashboards", "Non-functional testing": "Non-functional testing",
  "Technical leadership": "Technical leadership", "Mentoring & coaching": "Mentoring & coaching",
  "Community of practices": "Community of practices", "Team enablement": "Team enablement",
  "Knowledge sharing": "Knowledge sharing", "AI applied to testing": "AI applied to testing",

  "Core": "Core", "Working": "Working", "Learning": "Learning",

  "Principe": "Principle",
  "Automatiser n’est pas un objectif": "Automating is not the goal",
  "L’automatisation est un moyen de réduire le risque et d’améliorer l’efficacité. Elle ne remplace ni la stratégie ni le jugement.":
    "Automation is a way to reduce risk and improve efficiency. It replaces neither strategy nor judgement.",
  "Tous les tests ne méritent pas d’être automatisés": "Not every test deserves automation",
  "La valeur métier, le risque, la fréquence d’exécution et la stabilité doivent guider la décision.":
    "Business value, risk, execution frequency and stability must drive the decision.",
  "Un test automatisé doit inspirer confiance": "An automated test must inspire trust",
  "Un test auquel l’équipe ne fait plus confiance ne produit plus de valeur. Fiabilité et lisibilité passent avant volume.":
    "A test the team no longer trusts stops producing value. Reliability and readability come before volume.",
  "La qualité est collective": "Quality is collective",
  "Le QA n’est pas seul garant de la qualité. Il outille, cadre et accompagne les équipes qui produisent le logiciel.":
    "QA is not the sole owner of quality. It equips, frames and supports the teams that build the software.",
  "Mesurer avant d’optimiser": "Measure before optimising",
  "Couverture, stabilité, ROI et confiance : les décisions QA se prennent avec des données, pas des intuitions.":
    "Coverage, stability, ROI and trust: QA decisions rely on data, not intuition.",
  "Tester moins, tester mieux": "Test less, test better",
  "Green QA, sélection par criticité, réduction des exécutions inutiles : la qualité doit devenir soutenable.":
    "Green QA, selection by criticality, reduction of useless executions: quality must become sustainable.",
};

function applyTranslations(locale: Locale) {
  if (typeof document === "undefined") return;
  document.documentElement.lang = locale;
  const nodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const changed: Text[] = [];
  let node: Node | null;
  while ((node = nodes.nextNode())) {
    const value = node.nodeValue?.trim();
    if (!value) continue;
    const translated = locale === "en"
      ? translations[value]
      : Object.entries(translations).find(([fr, en]) => en === value && fr !== en && fr !== "Brag")?.[0];
    if (translated && translated !== value) {
      const textNode = node as Text;
      const leading = textNode.nodeValue?.match(/^\s*/)?.[0] ?? "";
      const trailing = textNode.nodeValue?.match(/\s*$/)?.[0] ?? "";
      textNode.nodeValue = `${leading}${translated}${trailing}`;
      changed.push(textNode);
    }
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "fr") setLocaleState(saved);
    } catch {
      // Language remains French when browser storage is unavailable.
    }
  }, []);

  useEffect(() => {
    applyTranslations(locale);
    const observer = new MutationObserver(() => applyTranslations(locale));
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    document.documentElement.lang = next;
    try { localStorage.setItem(STORAGE_KEY, next); } catch { /* ignore */ }
  }, []);
  const toggleLocale = useCallback(() => setLocale(locale === "fr" ? "en" : "fr"), [locale, setLocale]);
  const value = useMemo(() => ({ locale, toggleLocale, setLocale }), [locale, toggleLocale, setLocale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) return { locale: "fr" as Locale, toggleLocale: () => {}, setLocale: () => {} };
  return context;
}
