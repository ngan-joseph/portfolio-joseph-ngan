import type { Metadata } from "next";
import { BragList } from "@/components/BragList";

export const metadata: Metadata = {
  title: "Brag Document · Joseph Ngan Mintamak",
  description:
    "Synthèse filtrable de mes réalisations : projets, coaching, communauté et certifications, par niveau d’impact et par thème.",
};

export default function BragPage() {
  return (
    <main>
      <section className="page section">
        <header className="section-heading">
          <div>
            <p className="eyebrow">Réalisations & Impact</p>
            <h1 className="serif">
              Brag <span className="accent-word">Document.</span>
            </h1>
          </div>
          <p className="section-heading__lead">
            Contexte, action, résultat. Une lecture organisée par année, filtrable par
            niveau d’impact et par thème. Les éléments sensibles sont anonymisés,
            l’intention et le résultat restent lisibles.
          </p>
        </header>

        <BragList />
      </section>
    </main>
  );
}
