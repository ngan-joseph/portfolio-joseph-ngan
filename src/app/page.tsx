import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  Braces,
  CheckCircle2,
  Download,
  GitBranch,
  Link,
  Mail,
  Network,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const pillars = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Structurer",
    text: "Stratégies de test orientées risques, gouvernance QA et trajectoires qualité adaptées au produit.",
    color: "coral",
  },
  {
    number: "02",
    icon: Braces,
    title: "Industrialiser",
    text: "Frameworks maintenables, automatisation UI et API, données de test et intégration continue.",
    color: "blue",
  },
  {
    number: "03",
    icon: Network,
    title: "Fiabiliser",
    text: "Tests de résilience, performance et accessibilité pour sécuriser les parcours critiques.",
    color: "green",
  },
  {
    number: "04",
    icon: Users,
    title: "Transmettre",
    text: "Coaching, plans de formation et communautés de pratiques pour rendre les équipes autonomes.",
    color: "yellow",
  },
];

const frameworks = [
  {
    name: "Playwright",
    code: "PW",
    accent: "blue",
    text: "Tests web et API modernes, multi-navigateurs, parallélisation et intégration CI/CD.",
  },
  {
    name: "Selenium",
    code: "SE",
    accent: "green",
    text: "Automatisation UI robuste, architecture de suites et scénarios de non-régression.",
  },
  {
    name: "Robot Framework",
    code: "RF",
    accent: "coral",
    text: "Approche keyword-driven, bibliothèques réutilisables et collaboration entre profils.",
  },
];

const timeline = [
  {
    date: "2025 — aujourd’hui",
    role: "Référent technique de test",
    company: "Groupe d’assurance · Métropole lilloise",
    text: "Rôle transverse d’architecte qualité : stratégie d’automatisation, roadmap, coaching et pilotage par la valeur.",
  },
  {
    date: "2024 — 2025",
    role: "Test Lead",
    company: "Écosystème CRM & KYC",
    text: "Leadership QA sur un domaine stratégique, supervision d’équipe, stratégie de version et pilotage de recette métier.",
  },
  {
    date: "2022 — 2023",
    role: "Test Engineer",
    company: "Salesforce & architecture événementielle",
    text: "Validation fonctionnelle et technique, API, accessibilité, performance, virtualisation et recherche de données de test.",
  },
  {
    date: "2021 — 2022",
    role: "Premières expériences QA & IT Risk",
    company: "Paiement, Big Data & cybersécurité",
    text: "Qualification technico-fonctionnelle, qualité des données et analyse de référentiels de sécurité.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Retour en haut">
          JNM<span>.</span>
        </a>
        <nav aria-label="Navigation principale">
          <a href="#expertise">Expertise</a>
          <a href="#realisations">Réalisations</a>
          <a href="#parcours">Parcours</a>
        </nav>
        <a className="header-contact" href="#contact">
          Me contacter <ArrowDownRight size={16} />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span /> Quality engineering · Lille, France</p>
          <h1>
            Joseph Ngan
            <br />
            <em>Mintamak</em>
          </h1>
          <div className="hero-intro">
            <p>
              Référent technique de test. Je conçois des stratégies QA qui
              rendent les équipes plus autonomes et les livraisons plus fiables.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#realisations">
                Voir mes réalisations <ArrowDownRight size={18} />
              </a>
              <a className="button secondary" href="/cv-joseph-ngan-mintamak.pdf" download>
                <Download size={17} /> Télécharger le CV
              </a>
            </div>
          </div>
        </div>

        <div className="hero-visual reveal delay-1" aria-label="Synthèse de mon impact">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="visual-center">
            <Sparkles size={27} />
            <strong>Qualité</strong>
            <span>à l’échelle</span>
          </div>
          <div className="impact impact-squads"><strong>10</strong><span>squads accompagnées</span></div>
          <div className="impact impact-people"><strong>26</strong><span>collaborateurs formés</span></div>
          <div className="impact impact-community"><strong>300+</strong><span>membres de la guilde</span></div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div>
          <span>Stratégie QA</span><i>✦</i><span>Automatisation</span><i>✦</i>
          <span>Résilience</span><i>✦</i><span>Coaching</span><i>✦</i>
          <span>Stratégie QA</span><i>✦</i><span>Automatisation</span><i>✦</i>
        </div>
      </div>

      <section className="section expertise" id="expertise">
        <div className="section-heading">
          <p className="section-index">01 / Expertise</p>
          <h2>Faire de la qualité<br /><em>un accélérateur.</em></h2>
          <p className="section-lead">
            Une approche de bout en bout, de la stratégie jusqu’à l’adoption par
            les équipes, avec le bon niveau d’automatisation au bon endroit.
          </p>
        </div>

        <div className="pillar-grid">
          {pillars.map(({ icon: Icon, ...pillar }) => (
            <article className={`pillar pillar-${pillar.color}`} key={pillar.title}>
              <div className="pillar-top">
                <span>{pillar.number}</span>
                <Icon size={24} strokeWidth={1.7} />
              </div>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="frameworks">
        <div className="framework-title">
          <p className="section-index">Frameworks de test</p>
          <h2>Concevoir pour durer,<br />automatiser <em>avec intention.</em></h2>
        </div>
        <div className="framework-list">
          {frameworks.map((framework) => (
            <article className="framework-row" key={framework.name}>
              <span className={`framework-code code-${framework.accent}`}>{framework.code}</span>
              <h3>{framework.name}</h3>
              <p>{framework.text}</p>
              <CheckCircle2 size={22} />
            </article>
          ))}
        </div>
        <p className="framework-note">
          Architecture · conventions · données de test · reporting · CI/CD · maîtrise du flaky
        </p>
      </section>

      <section className="section work" id="realisations">
        <div className="work-heading">
          <div>
            <p className="section-index">02 / Réalisations</p>
            <h2>Des enjeux complexes,<br /><em>des résultats lisibles.</em></h2>
          </div>
          <p>
            Études de cas anonymisées. Le contexte reste confidentiel, la méthode
            et les enseignements restent partageables.
          </p>
        </div>

        <div className="case-grid">
          <article className="case case-main">
            <div className="case-meta"><span>Transformation QA</span><span>2025</span></div>
            <div className="case-diagram" aria-hidden="true">
              <span className="node node-center">Roadmap</span>
              <span className="node node-a">Squads</span>
              <span className="node node-b">Guichet</span>
              <span className="node node-c">Coaching</span>
              <span className="node node-d">ROI</span>
            </div>
            <h3>Industrialiser l’automatisation à l’échelle d’une tribu</h3>
            <p>
              Définition d’une stratégie commune, déclinaison de la roadmap auprès
              de 10 squads et création d’un guichet d’accompagnement.
            </p>
            <ul>
              <li><strong>10</strong> squads</li>
              <li><strong>26</strong> personnes formées</li>
              <li><strong>1</strong> pilotage par le ROI</li>
            </ul>
          </article>

          <article className="case case-side">
            <div className="case-meta"><span>Architecture distribuée</span><span>2023—24</span></div>
            <div className="pulse-visual" aria-hidden="true">
              <span /><span /><span /><span /><span /><span />
            </div>
            <h3>Fiabiliser un parcours métier critique</h3>
            <p>
              Stratégie orientée risques, validation API et événementielle,
              virtualisation des dépendances et pilotage de recette.
            </p>
            <div className="tags"><span>Salesforce</span><span>Kafka</span><span>SoapUI</span><span>Résilience</span></div>
          </article>
        </div>
      </section>

      <section className="section journey" id="parcours">
        <div className="journey-intro">
          <p className="section-index">03 / Parcours</p>
          <h2>Du test terrain<br />à l’architecture <em>qualité.</em></h2>
          <p>
            Un parcours construit au croisement de l’ingénierie, du produit et de
            la transmission.
          </p>
          <div className="certification">
            <BookOpen size={22} />
            <div><strong>ISTQB Advanced</strong><span>Test Manager · 2024</span></div>
          </div>
        </div>

        <div className="timeline">
          {timeline.map((item, index) => (
            <article className="timeline-item" key={item.role}>
              <div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
              <div>
                <p className="timeline-date">{item.date}</p>
                <h3>{item.role}</h3>
                <p className="timeline-company">{item.company}</p>
                <p className="timeline-text">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="section-index">Construisons une qualité durable</p>
          <h2>Parlons de votre<br /><em>prochain défi QA.</em></h2>
        </div>
        <div className="contact-links">
          <a href="mailto:b.mintamak@gmail.com"><Mail size={20} /> Email <ArrowUpRight size={18} /></a>
          <a href="https://www.linkedin.com/in/joseph-ngan" target="_blank" rel="noreferrer"><Link size={20} /> LinkedIn <ArrowUpRight size={18} /></a>
          <a href="https://github.com/ngan-joseph" target="_blank" rel="noreferrer"><GitBranch size={20} /> GitHub <ArrowUpRight size={18} /></a>
        </div>
      </section>

      <footer>
        <a className="brand" href="#top">JNM<span>.</span></a>
        <p>Référent technique de test · Quality Engineering</p>
        <p>© {new Date().getFullYear()} Joseph Ngan Mintamak</p>
      </footer>
    </main>
  );
}
