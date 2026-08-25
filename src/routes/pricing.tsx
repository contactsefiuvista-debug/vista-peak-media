import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Star } from "lucide-react";
import { Reveal } from "../components/reveal";
import { PageHero, SectionHeading, FinalCTA } from "../components/sections";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Invest in Your Brand's Ecosystem | Vista Peak Media" },
      {
        name: "description",
        content:
          "Vista Peak Media packages: Essential Grow from $999/mo, Pro Amplify from $2,499/mo, and the Enterprise Peak with custom pricing.",
      },
      { property: "og:title", content: "Pricing — Vista Peak Media" },
      { property: "og:description", content: "Three retainers covering social, web, email, video and AI production." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: Pricing,
});

const PLANS = [
  {
    name: "The 'Essential' Grow",
    price: "$999",
    unit: "/mo",
    blurb: "For brands establishing a consistent, professional presence.",
    features: ["Social media management (2 platforms)", "Basic branded graphics", "Monthly newsletter", "Monthly performance report"],
    featured: false,
  },
  {
    name: "The 'Pro' Amplify",
    price: "$2,499",
    unit: "/mo",
    blurb: "For brands ready to scale content, ads and automation together.",
    features: [
      "Full social management (4 platforms)",
      "Professional video editing",
      "Email automation & flows",
      "Landing page updates",
      "Bi-weekly strategy calls",
    ],
    featured: true,
  },
  {
    name: "The 'Enterprise' Peak",
    price: "Custom",
    unit: "",
    blurb: "A dedicated team running your entire digital ecosystem.",
    features: [
      "Dedicated cross-discipline team",
      "Full website builds",
      "Heavy video ad production",
      "AI visual production",
      "Unlimited revisions",
    ],
    featured: false,
  },
];

function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Investment"
        title="Invest in Your Brand's Ecosystem."
        subtitle="Transparent retainers that replace three or four separate vendors — and the overhead that comes with them."
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <div
                className={`lift flex h-full flex-col rounded-[1.75rem] p-9 ${
                  p.featured
                    ? "aurora peak-gradient text-surface-foreground shadow-[var(--shadow-glow)]"
                    : "border border-border bg-card"
                }`}
              >
                <div className="relative z-10 flex flex-1 flex-col">
                  {p.featured ? (
                    <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-gold-foreground">
                      <Star className="size-3 fill-current" /> Most popular
                    </span>
                  ) : null}
                  <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                  <p className={`mt-2 text-sm ${p.featured ? "text-surface-foreground/70" : "text-muted-foreground"}`}>
                    {p.blurb}
                  </p>
                  <p className="mt-7 font-display text-4xl font-bold">
                    {p.price}
                    <span className="text-base font-medium opacity-70">{p.unit}</span>
                  </p>
                  <ul className="mt-7 flex-1 space-y-3 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2.5">
                        <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                        <span className={p.featured ? "text-surface-foreground/85" : "text-muted-foreground"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`mt-9 rounded-full px-6 py-3 text-center text-sm font-semibold ${
                      p.featured
                        ? "bg-accent text-accent-foreground"
                        : "border border-border hover:border-accent hover:text-accent"
                    }`}
                  >
                    {p.price === "Custom" ? "Talk to Sefiu" : "Start This Plan"}
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <SectionHeading
          title="Not sure which package fits?"
          subtitle="Book a free consultation and we'll map the right altitude for your budget."
        />
        <Reveal className="mt-8 text-center">
          <Link
            to="/contact"
            className="inline-flex rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground"
          >
            Book a Free Consultation
          </Link>
        </Reveal>
      </section>

      <FinalCTA />
    </>
  );
}
