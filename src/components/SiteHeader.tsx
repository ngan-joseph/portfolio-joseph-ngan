"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const items = [
  { href: "/", label: "Accueil" },
  { href: "/manifesto", label: "Philosophie" },
  { href: "/expertise", label: "Expertise" },
  { href: "/brag", label: "Brag" },
  { href: "/projects", label: "Projets" },
  { href: "/services", label: "Services" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" href="/" aria-label="Accueil">
          Joseph <em>Ngan</em>
        </Link>
        <nav className="nav" aria-label="Navigation principale">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <Link className="btn btn--ghost header-contact" href="/contact">
            Contact
          </Link>
          <button
            type="button"
            className="btn btn--icon nav-burger"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="mobile-menu" id="mobile-menu" role="dialog" aria-modal="true">
          <nav aria-label="Navigation mobile">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="mobile-menu__contact">
              Me contacter
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
