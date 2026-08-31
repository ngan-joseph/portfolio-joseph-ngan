import type { Metadata } from "next";
import { principles } from "@/data/principles";

export const metadata: Metadata = {
  title: "Ma philosophie QA · Joseph Ngan Mintamak",
  description:
    "Les principes qui guident mes décisions de Test Lead et Référent technique : automatisation, mesure, transmission et sobriété.",
};

export default function ManifestoPage() {
  return (
    <main>
      <section className="page section">
        <header className="section-heading">
          <div>
            <p className="eyebrow">Manifeste</p>
            <h1 className="serif">
              Comment je pense
              <br />
              <span className="accent-word">la qualité.</span>
            </h1>
          </div>
          <p className="section-heading__lead">
            Une bonne stratégie QA ne s’improvise pas. Elle repose sur des choix
            explicites, adaptés au contexte, à l’équipe et au produit. Voici les
            principes qui guident mon travail.
          </p>
        </header>

        <div className="grid-2">
          {principles.map((principle) => (
            <article className="card" key={principle.index}>
              <p className="project-card__eyebrow">Principe {principle.index}</p>
              <h3 className="serif">{principle.title}</h3>
              <p className="muted">{principle.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
