import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Film } from "lucide-react";
import { Reveal } from "../components/reveal";
import { PageHero, SectionHeading, GlassCard, FinalCTA } from "../components/sections";
import lumenImage from "../assets/work-lumen.jpg";
import northlineImage from "../assets/work-northline.jpg";
import reyesImage from "../assets/work-reyes.jpg";
import peakFitnessImage from "../assets/work-peak-fitness.jpg";
import haloCoffeeImage from "../assets/work-halo-coffee.jpg";
import vertexImage from "../assets/work-vertex.jpg";
import auroraImage from "../assets/work-aurora.jpg";
import summitImage from "../assets/work-summit.jpg";

const VIDEO_PORTFOLIO_URL = "https://sites.google.com/view/vistapeakmedia/ai-video/video-ads";

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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

const WORK = [
  {
    title: "Lumen Skincare — Product Ad Reel",
    category: "Video Ads",
    description: "A polished product reel built to turn scrolls into high-intent clicks.",
    image: lumenImage,
  },
  {
    title: "Northline Agency — Brand Site",
    category: "Website Design",
    description: "A sharp digital flagship designed around authority, clarity and conversion.",
    image: northlineImage,
  },
  {
    title: "Reyes Author Launch — Book Trailer",
    category: "Video Editing",
    description: "A cinematic launch asset that brought the story's atmosphere to life.",
    image: reyesImage,
  },
  {
    title: "Peak Fitness — TikTok Growth",
    category: "Social Media",
    description: "Fast-paced fitness content engineered for attention and repeat viewing.",
    image: peakFitnessImage,
  },
  {
    title: "Halo Coffee — Shopify Refresh",
    category: "E-commerce",
    description: "A premium storefront refresh that made every product feel irresistible.",
    image: haloCoffeeImage,
  },
  {
    title: "Vertex SaaS — Email Flow Suite",
    category: "Email Marketing",
    description: "An automated lifecycle system that nurtured every lead at the right moment.",
    image: vertexImage,
  },
  {
    title: "Aurora Studio — AI Visual Campaign",
    category: "AI Visuals",
    description: "A vivid visual world built to make a future-facing campaign unmistakable.",
    image: auroraImage,
  },
  {
    title: "Summit Realty — Explainer Animation",
    category: "Motion Graphics",
    description: "A clear, contemporary animation that simplified a complex property offer.",
    image: summitImage,
  },
];

const CASES = [
  {
    t: "3x ROAS for an E-commerce Brand",
    d: "How we grew Lumen Skincare's ROAS by 3x using video ads and full-funnel web optimization — new PDPs, a 9-variant creative test cycle and a rebuilt checkout.",
    m: ["3x ROAS", "41% AOV", "8 weeks"],
  },
  {
    t: "A Full Digital Ecosystem for an Author",
    d: "Building Daniel Reyes' website, email flows and book trailers into one launch machine that sold out the first print run.",
    m: ["12k list", "4 rows", "11+ launch"],
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
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {WORK.map((w, i) => (
            <Reveal key={w.title} delay={i * 60} className="h-full">
              <article className="glass lift group h-full overflow-hidden rounded-lg">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={w.image}
                    alt={`${w.title} campaign mockup`}
                    loading="lazy"
                    width={1536}
                    height={864}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-accent">
                    {w.category}
                  </p>
                  <h3 className="mt-2 font-display text-base font-semibold leading-snug">{w.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.description}</p>
                </div>
              </article>
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

      <section className="bg-surface py-24 text-surface-foreground">
        <Reveal className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-6 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <div className="mb-5 grid size-12 place-items-center rounded-lg border border-surface-foreground/15 bg-surface-foreground/5 text-accent">
              <Film className="size-6" />
            </div>
            <h2 className="font-display text-3xl font-semibold sm:text-5xl">Full Video Portfolio</h2>
            <p className="mt-5 text-base text-surface-foreground/70 sm:text-lg">
              Explore our complete collection of video ads, edits, and AI-generated visuals.
            </p>
          </div>
          <a
            href={VIDEO_PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
          >
            View All Videos
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </Reveal>
      </section>

      <FinalCTA />
    </>
  );
}
