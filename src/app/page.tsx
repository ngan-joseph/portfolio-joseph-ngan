import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { frameworks, pillars } from "@/data/expertise";
import { PhotoPortrait } from "@/components/PhotoPortrait";

export default function HomePage() {
  return (
    <main>
      <section className="page hero">
        <div className="hero__copy">
          <p className="eyebrow">
            {profile.headline.prefix} <span className="serif">{profile.headline.accent}</span>{" "}
            {profile.headline.suffix}
          </p>
          <h1>
            {profile.short}
            <br />
            <span className="accent-word">Mintamak.</span>
          </h1>
          <div className="hero__intro">
            <p className="lead">{profile.positioning}</p>
            <p className="muted" style={{ maxWidth: "58ch" }}>
              {profile.tagline}
            </p>
            <div className="hero__actions">
              <Link href="/brag" className="btn btn--primary">
                Voir mes réalisations <ArrowDownRight size={16} aria-hidden="true" />
              </Link>
              <a href={profile.cvHref} className="btn btn--ghost" download>
                <Download size={16} aria-hidden="true" /> Télécharger le CV
              </a>
            </div>
          </div>
        </div>

        <aside className="hero__aside" aria-label="Chiffres clés">
          <PhotoPortrait />
          {profile.stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <span className="stat__value">{stat.value}</span>
              <span className="stat__label">{stat.label}</span>
            </div>
          ))}
        </aside>
      </section>

      <section className="page section">
        <header className="section-heading">
          <div>
            <p className="eyebrow">01 · Expertise</p>
            <h2>
              Faire de la qualité
              <br />
              <span className="accent-word">un accélérateur.</span>
            </h2>
          </div>
          <p className="section-heading__lead">
            Une approche de bout en bout, de la stratégie jusqu’à l’adoption par les
            équipes, avec le bon niveau d’automatisation au bon endroit.
          </p>
        </header>

        <div className="grid-4">
          {pillars.map((pillar) => (
            <article className="pillar" key={pillar.key}>
              <span className="pillar__index">{pillar.index}</span>
              <h3 className="pillar__title">{pillar.title}</h3>
              <p className="muted">{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page section">
        <header className="section-heading">
          <div>
            <p className="eyebrow">02 · Frameworks</p>
            <h2>
              Concevoir pour durer,
              <br />
              automatiser <span className="accent-word">avec intention.</span>
            </h2>
          </div>
          <p className="section-heading__lead">
            Sélection des technologies, architecture, conventions, données de test,
            reporting et maîtrise du flaky : mêmes exigences quel que soit l’outil.
          </p>
        </header>

        <div className="frameworks">
          {frameworks.map((framework) => (
            <article className="framework" key={framework.name}>
              <span className="framework__mono" aria-hidden="true">
                {framework.code}
              </span>
              <div>
                <div className="framework__title">{framework.name}</div>
                <p className="framework__text">{framework.text}</p>
              </div>
              <Link className="chip chip--outline" href="/expertise">
                En savoir plus <ArrowUpRight size={12} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="page section">
        <header className="section-heading">
          <div>
            <p className="eyebrow">03 · Explorer</p>
            <h2>
              Une seule voix,
              <br />
              plusieurs <span className="accent-word">entrées.</span>
            </h2>
          </div>
          <p className="section-heading__lead">
            Le portfolio se lit de différentes manières selon votre besoin : vision,
            preuves d’impact, savoir-faire technique ou accompagnement.
          </p>
        </header>

        <div className="grid-3">
          <Link href="/manifesto" className="card card--hover">
            <p className="project-card__eyebrow">Comment je pense</p>
            <h3 className="serif">Ma philosophie QA</h3>
            <p className="muted">
              Les principes qui guident chacune de mes décisions autour du test et de
              la qualité logicielle.
            </p>
          </Link>
          <Link href="/brag" className="card card--hover">
            <p className="project-card__eyebrow">Ce que j’ai réalisé</p>
            <h3 className="serif">Brag Document</h3>
            <p className="muted">
              Les preuves concrètes de mon impact : projets, coaching, communauté,
              certifications, filtrables par niveau et par thème.
            </p>
          </Link>
          <Link href="/projects" className="card card--hover">
            <p className="project-card__eyebrow">Ce que je sais faire</p>
            <h3 className="serif">QA Playground</h3>
            <p className="muted">
              Une série de projets de démonstration : Playwright, Selenium, Cypress,
              Robot Framework, API, IA et Green QA.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
