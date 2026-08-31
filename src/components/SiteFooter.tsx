import Link from "next/link";
import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <span>
          © {new Date().getFullYear()} · {profile.name}
        </span>
        <span>Référent technique de test · Quality Engineering</span>
        <span>
          <Link href="/contact">Écrivons-nous</Link>
        </span>
      </div>
    </footer>
  );
}
