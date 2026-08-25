import { createFileRoute } from "@tanstack/react-router";
import { PlayCircle } from "lucide-react";
import { Reveal } from "../components/reveal";
import { PageHero, SectionHeading, GlassCard, FinalCTA } from "../components/sections";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio & Showreel — Vista Peak Media" },
      {
        name: "description",
        content:
          "See how Vista Peak Media builds ecosystems: social ad creative, website designs, video edits and three featured case studies.",
      },
      { property: "og:title", content: "Our Work Speaks Volumes — Vista Peak Media" },
      { property: "og:description", content: "Showreel and case studies across e-commerce, authors and agencies." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

const WORK = [
  { t: "Lumen Skincare — Product Ad Reel", k: "Video Ads" },
  { t: "Northline Agency — Brand Site", k: "Website Design" },
  { t: "Reyes Author Launch — Book Trailer", k: "Video Editing" },
  { t: "Peak Fitness — TikTok Growth", k: "Social Media" },
  { t: "Halo Coffee — Shopify Refresh", k: "E-commerce" },
  { t: "Vertex SaaS — Email Flow Suite", k: "Email Marketing" },
  { t: "Aurora Studio — AI Visual Campaign", k: "AI Visuals" },
  { t: "Summit Realty — Explainer Animation", k: "Motion Graphics" },
];

const CASES = [
  {
    t: "3x ROAS for an E-commerce Brand",
    d: "How we grew Lumen Skincare's ROAS by 3x using video ads and full-funnel web optimization — new PDPs, a 9-variant creative test cycle and a rebuilt checkout.",
    m: ["3x ROAS", "+41% AOV", "6 weeks"],
  },
  {
    t: "A Full Digital Ecosystem for an Author",
    d: "Building Daniel Reyes' website, email flows and book trailers into one launch machine that sold out the first print run.",
    m: ["12k list", "4 flows", "1 launch"],
  },
  {
    t: "White-Label Video at Agency Scale",
    d: "Scaling Northline's white-label video production to 50+ client deliverables a month with a repeatable editing pipeline.",
    m: ["50+/mo", "48h turnaround", "0 churn"],
  },
];

function Portfolio() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Our Work Speaks Volumes."
        subtitle="Selected campaigns, builds and edits from brands climbing with Vista Peak Media."
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading eyebrow="Showreel" title="Selected work." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WORK.map((w, i) => (
            <Reveal key={w.t} delay={i * 60}>
              <div className="lift group relative aspect-[4/5] overflow-hidden rounded-2xl peak-gradient">
                <div className="absolute inset-0 grid place-items-center text-surface-foreground/40 transition-transform duration-500 group-hover:scale-110">
                  <PlayCircle className="size-12" />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-surface/70 p-5 backdrop-blur-md">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-accent">{w.k}</p>
                  <p className="mt-1 font-display text-sm font-semibold text-surface-foreground">{w.t}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Case studies" title="Three deep-dives." />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {CASES.map((c, i) => (
              <Reveal key={c.t} delay={i * 80}>
                <GlassCard className="h-full">
                  <h3 className="font-display text-xl font-semibold">{c.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {c.m.map((m) => (
                      <span key={m} className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-gold">
                        {m}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
