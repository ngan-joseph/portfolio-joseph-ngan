import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joseph Ngan Mintamak | Référent technique de test",
  description:
    "Portfolio de Joseph Ngan Mintamak, référent technique spécialisé en stratégie QA, automatisation et accompagnement des équipes.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
