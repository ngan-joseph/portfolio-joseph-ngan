import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { frameworks, pillars } from "@/data/expertise";
import { skillStatement } from "@/data/skillDimensions";
import { PhotoPortrait } from "@/components/PhotoPortrait";
import { SkillsDiamond } from "@/components/SkillsDiamond";

export default function HomePage() {
  return (
    <main>
      <section className="page hero">
        <div className="hero__copy">
          <p className="eyebrow">
            {profile.roleTitle} · {profile.employer} · {profile.employmentSince}
          </p>
          <h1 className="hero__name">{profile.name}</h1>
          <div className="hero__keywords" aria-label="Domaines clés">
            {profile.keywords.map((keyword) => (
              <span className="keyword-chip" key={keyword.fr}>
                {keyword.fr}
              </span>
            ))}
          </div>
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

      <section className="page section" aria-labelledby="skills-diamond-title">
        <header className="section-heading">
          <div>
            <p className="eyebrow">QA Expertise Diamond</p>
            <h2 id="skills-diamond-title">
              Quatre dimensions,
              <br />
              <span className="accent-word">un même modèle.</span>
            </h2>
          </div>
          <p className="section-heading__lead">
            Un modèle de compétence sophistiqué pensé pour un profil Test Lead & QA senior. Chaque axe représente une posture, cinq paliers de maturité et des preuves concrètes plutôt qu&apos;un pourcentage.
          </p>
        </header>

        <SkillsDiamond />

        <p className="diamond__quote">{skillStatement}</p>
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
            Une approche de bout en bout, de la stratégie jusqu&apos;à l&apos;adoption par les équipes, avec le bon niveau d&apos;automatisation au bon endroit.
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
            Sélection des technologies, architecture, conventions, données de test, reporting et maîtrise du flaky : mêmes exigences quel que soit l&apos;outil.
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
            Le portfolio se lit de différentes manières selon votre besoin : vision, preuves d&apos;impact, savoir-faire technique ou accompagnement.
          </p>
        </header>

        <div className="grid-3">
          <Link href="/manifesto" className="card card--hover">
            <p className="project-card__eyebrow">Comment je pense</p>
            <h3 className="serif">Ma philosophie QA</h3>
            <p className="muted">
              Les principes qui guident chacune de mes décisions autour du test et de la qualité logicielle.
            </p>
          </Link>
          <Link href="/brag" className="card card--hover">
            <p className="project-card__eyebrow">Ce que j&apos;ai réalisé</p>
            <h3 className="serif">Brag Document</h3>
            <p className="muted">
              Les preuves concrètes de mon impact : projets, coaching, communauté, certifications, filtrables par niveau et par thème.
            </p>
          </Link>
          <Link href="/projects" className="card card--hover">
            <p className="project-card__eyebrow">Ce que je sais faire</p>
            <h3 className="serif">QA Playground</h3>
            <p className="muted">
              Une série de projets de démonstration : Playwright, Selenium, Cypress, Robot Framework, API, IA et Green QA.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
