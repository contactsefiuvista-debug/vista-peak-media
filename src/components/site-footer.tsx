import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, Mountain, Youtube, Music2 } from "lucide-react";

export const CONTACT_EMAIL = "contactsefiuvista@gmail.com";

export function SiteFooter() {
  return (
    <footer className="peak-gradient aurora border-t border-border/30">
      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-xl bg-accent text-accent-foreground">
              <Mountain className="size-5" />
            </span>
            <span className="font-display text-lg font-semibold text-surface-foreground">Vista Peak Media</span>
          </div>
          <p className="mt-4 max-w-sm font-serif text-xl italic text-surface-foreground/80">
            Reach New Heights in Digital Storytelling.
          </p>
          <p className="mt-3 max-w-sm text-sm text-surface-foreground/60">
            Full-Scale Digital Solutions. One Creative Partner.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
          >
            <Mail className="size-4" /> {CONTACT_EMAIL}
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-surface-foreground/70">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-surface-foreground/70">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-surface-foreground/70">Follow</h3>
          <div className="mt-4 flex gap-3">
            {[Linkedin, Instagram, Youtube, Music2].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social profile"
                className="grid size-10 place-items-center rounded-xl border border-surface-foreground/15 text-surface-foreground/70 transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs text-surface-foreground/50">vistapeakmedia.com (coming soon)</p>
        </div>
      </div>
      <div className="relative z-10 border-t border-surface-foreground/10 py-6 text-center text-xs text-surface-foreground/50">
        © 2026 Vista Peak Media. Proudly built with AI.
      </div>
    </footer>
  );
}
