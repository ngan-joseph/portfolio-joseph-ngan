import type { Metadata } from "next";
import { frameworks, skillGroups } from "@/data/expertise";
import { timeline } from "@/data/timeline";

export const metadata: Metadata = {
  title: "Expertise · Joseph Ngan Mintamak",
  description:
    "Domaines d’expertise et parcours professionnel : test engineering, automatisation, quality engineering et leadership technique.",
};

const levelLabels: Record<"core" | "working" | "learning", string> = {
  core: "Core",
  working: "Working",
  learning: "Learning",
};

export default function ExpertisePage() {
  return (
    <main>
      <section className="page section">
        <header className="section-heading">
          <div>
            <p className="eyebrow">Ce que je sais faire</p>
            <h1 className="serif">
              Une matrice pensée
              <br />
              <span className="accent-word">par usages.</span>
            </h1>
          </div>
          <p className="section-heading__lead">
            Plutôt qu’une longue liste d’outils, une lecture par domaines et par
            niveaux d’utilisation réels — core, working, learning.
          </p>
        </header>

        <div className="grid-2">
          {skillGroups.map((group) => (
            <article className="card" key={group.title}>
              <p className="project-card__eyebrow">{group.eyebrow}</p>
              <h3 className="serif" style={{ marginBottom: 12 }}>
                {group.title}
              </h3>
              <div>
                {group.skills.map((skill) => (
                  <div className="skill" key={skill.name}>
                    <span className="skill__name">{skill.name}</span>
                    <span className="skill__level" data-level={skill.level}>
                      {levelLabels[skill.level]}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page section">
        <header className="section-heading">
          <div>
            <p className="eyebrow">Frameworks</p>
            <h2 className="serif">
              Trois familles,
              <br />
              une même <span className="accent-word">exigence.</span>
            </h2>
          </div>
          <p className="section-heading__lead">
            Choisir le bon outil pour le bon usage, avec la même rigueur d’architecture
            et la même attention à la maintenance.
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
              <span className="chip chip--accent">Core</span>
            </article>
          ))}
        </div>
      </section>

      <section className="page section">
        <header className="section-heading">
          <div>
            <p className="eyebrow">Parcours</p>
            <h2 className="serif">
              Du test terrain
              <br />
              à l’architecture <span className="accent-word">qualité.</span>
            </h2>
          </div>
          <p className="section-heading__lead">
            Un parcours construit au croisement de l’ingénierie, du produit et de la
            transmission.
          </p>
        </header>

        <div className="timeline">
          {timeline.map((item) => (
            <article className="timeline-item" key={item.role}>
              <p className="timeline-item__date">{item.date}</p>
              <div>
                <h3 className="timeline-item__role">{item.role}</h3>
                <p className="timeline-item__company">{item.company}</p>
                <p className="timeline-item__text">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
