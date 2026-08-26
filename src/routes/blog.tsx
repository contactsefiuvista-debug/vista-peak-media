import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../components/reveal";
import { PageHero, SectionHeading, GlassCard, FinalCTA } from "../components/sections";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights & Resources — Vista Peak Media" },
      {
        name: "description",
        content:
          "Strategy notes from Vista Peak Media on video ad trends, email ROI, conversion-focused web design and balancing AI with human editing.",
      },
      { property: "og:title", content: "Insights & Resources — Vista Peak Media" },
      { property: "og:description", content: "Practical thinking on social, web, email and video from a full-scale digital agency." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const POSTS = [
  { t: "Top 5 Video Ad Trends in 2026", k: "Video Ads", d: "The hooks, formats and edit rhythms winning attention on Reels and TikTok this year." },
  { t: "Why Email Marketing is Still King for ROI", k: "Email", d: "Owned audience beats rented reach — here's the flow stack that pays for itself." },
  { t: "How to Design a Website that Converts", k: "Web Design", d: "Message match, friction audits and the layout decisions that move conversion rate." },
  { t: "AI vs. Human Editing: Finding the Balance", k: "AI Production", d: "Where generative tools genuinely accelerate production — and where craft still wins." },
];

function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Notes From the Climb."
        subtitle="Field-tested thinking on social, web, email and video — written between campaigns."
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading eyebrow="Latest" title="Resources for ambitious brands." />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {POSTS.map((p, i) => (
            <Reveal key={p.t} delay={i * 80}>
              <GlassCard className="h-full">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">{p.k}</p>
                <h2 className="mt-4 font-display text-2xl font-semibold">{p.t}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-gold">
                  Coming soon <ArrowUpRight className="size-4" />
                </span>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
