import type { Metadata } from "next";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "QA Playground · Joseph Ngan Mintamak",
  description:
    "Projets de démonstration : Playwright, Selenium, Cypress, Robot Framework, API testing, Trust Score, Green QA et IA appliquée au testing.",
};

const statusLabels = {
  planned: "À venir",
  "in-progress": "En cours",
  shipped: "Livré",
} as const;

export default function ProjectsPage() {
  return (
    <main>
      <section className="page section">
        <header className="section-heading">
          <div>
            <p className="eyebrow">QA Playground</p>
            <h1 className="serif">
              Preuves de faire,
              <br />
              en <span className="accent-word">public.</span>
            </h1>
          </div>
          <p className="section-heading__lead">
            Une série de projets de démonstration conçus pour illustrer une compétence
            précise : automatisation UI, API, mesure de la confiance, sélection
            intelligente des tests, ou encore IA appliquée au testing.
          </p>
        </header>

        <div className="grid-3">
          {projects.map((project) => (
            <article className="card project-card" key={project.id}>
              <div>
                <p className="project-card__eyebrow">
                  Projet {project.number} · {project.focus}
                </p>
                <h3 className="serif" style={{ marginTop: 8 }}>
                  {project.title}
                </h3>
              </div>
              <p className="muted">{project.description}</p>
              <p className="chip chip--accent" style={{ alignSelf: "flex-start" }}>
                {statusLabels[project.status]}
              </p>
              <div className="project-card__stack">
                {project.stack.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
