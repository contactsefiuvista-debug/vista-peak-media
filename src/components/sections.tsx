import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  invert = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  invert?: boolean;
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">{eyebrow}</p>
      ) : null}
      <h2
        className={`mt-3 font-display text-3xl font-semibold sm:text-4xl ${
          invert ? "text-surface-foreground" : ""
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-4 text-base ${invert ? "text-surface-foreground/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="aurora peak-gradient pb-20 pt-36">
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">{eyebrow}</p>
        <h1 className="mt-5 font-display text-4xl font-bold text-surface-foreground sm:text-6xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-surface-foreground/70">{subtitle}</p>
      </div>
    </section>
  );
}

export function GlassCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`glass lift rounded-2xl p-7 ${className}`}>{children}</div>;
}

export function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <Reveal className="aurora peak-gradient relative overflow-hidden rounded-[2rem] px-8 py-20 text-center">
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-surface-foreground sm:text-5xl">
            Ready to Take Your Brand to the Peak?
          </h2>
          <p className="mt-5 text-surface-foreground/70">
            Stop juggling multiple vendors. Let's handle your entire digital ecosystem. Book your free strategy session
            today.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.04]"
          >
            Get a Free Quote
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
