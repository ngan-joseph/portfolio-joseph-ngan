import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services · Joseph Ngan Mintamak",
  description:
    "Comment je peux vous aider : assessment, stratégie d’automatisation, indicateurs QA, stratégie de test, coaching et IA appliquée au testing.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="page section">
        <header className="section-heading">
          <div>
            <p className="eyebrow">Ce que je peux apporter</p>
            <h1 className="serif">
              Comment je peux
              <br />
              vous <span className="accent-word">aider.</span>
            </h1>
          </div>
          <p className="section-heading__lead">
            Des prestations ciblées, courtes et à forte valeur, orientées vers des
            résultats mesurables : plus de couverture utile, moins d’instabilité,
            davantage d’autonomie pour les équipes.
          </p>
        </header>

        <div className="card">
          {services.map((service) => (
            <div className="service" key={service.key}>
              <div className="service__icon" aria-hidden="true">
                <Sparkles size={18} />
              </div>
              <div>
                <h3 className="serif" style={{ marginBottom: 6 }}>
                  {service.title}
                </h3>
                <p className="muted" style={{ maxWidth: "70ch" }}>
                  {service.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48, display: "flex", flexWrap: "wrap", gap: 12 }}>
          <Link href="/contact" className="btn btn--primary">
            Parlons de votre défi QA <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <Link href="/brag" className="btn btn--ghost">
            Voir des preuves d’impact
          </Link>
        </div>
      </section>
    </main>
  );
}
