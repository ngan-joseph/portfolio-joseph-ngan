import type { Metadata } from "next";
import { ArrowUpRight, Download, Link as LinkIcon, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact · Joseph Ngan Mintamak",
  description:
    "Discutons de votre problématique qualité, automatisation, stratégie de test ou IA appliquée au testing.",
};

const links = [
  { href: `mailto:${profile.email}`, label: "Email", icon: Mail, external: false },
  { href: profile.linkedin, label: "LinkedIn", icon: LinkIcon, external: true },
  { href: profile.github, label: "GitHub", icon: LinkIcon, external: true },
];

export default function ContactPage() {
  return (
    <main>
      <section className="page section">
        <header className="section-heading">
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="serif">
              Parlons de votre
              <br />
              prochain défi <span className="accent-word">QA.</span>
            </h1>
          </div>
          <p className="section-heading__lead">
            Automatisation, stratégie de test, indicateurs QA, ou encore IA appliquée
            au testing : présentez-moi votre contexte, je vous propose une lecture et
            des pistes concrètes.
          </p>
        </header>

        <div className="card">
          {links.map(({ href, label, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              className="service"
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              style={{ textDecoration: "none" }}
            >
              <div className="service__icon" aria-hidden="true">
                <Icon size={18} />
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <h3 className="serif" style={{ marginBottom: 4 }}>
                    {label}
                  </h3>
                  <p className="muted" style={{ fontSize: 13 }}>
                    {label === "Email" ? profile.email : href.replace(/^https?:\/\//, "")}
                  </p>
                </div>
                <ArrowUpRight size={18} aria-hidden="true" />
              </div>
            </a>
          ))}
        </div>

        <div style={{ marginTop: 48 }}>
          <a href={profile.cvHref} className="btn btn--ghost" download>
            <Download size={16} aria-hidden="true" /> Télécharger le CV (PDF)
          </a>
        </div>
      </section>
    </main>
  );
}
