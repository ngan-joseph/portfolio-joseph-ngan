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
  "Frameworks": "Frameworks", "Automatisation": "Automation", "Ingénierie qualité": "Quality Engineering", "Transmission & impact": "Transmission & impact", "Chiffres clés": "Key figures", "Réalisations détaillées": "Detailed achievements",
  "Comment je pense": "How I think", "Ce que j’ai réalisé": "What I have achieved", "Explorer": "Explore",
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
    const translated = locale === "en" ? translations[value] : (translations[value] === value ? value : Object.entries(translations).find(([fr, en]) => en === value && fr !== "Brag")?.[0]);
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
