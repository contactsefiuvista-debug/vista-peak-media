import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../components/reveal";
import { PageHero, SectionHeading, FinalCTA } from "../components/sections";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — Your Roadmap to Digital Dominance | Vista Peak Media" },
      {
        name: "description",
        content:
          "The Vista Peak Media process: discovery audit, integrated blueprint, the creation engine, and continuous optimization across social, web, email and video.",
      },
      { property: "og:title", content: "Our Process — Vista Peak Media" },
      { property: "og:description", content: "Four stages from audit to scale, with clear timelines at every step." },
      { property: "og:url", content: "/process" },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: Process,
});

const STEPS = [
  { n: "01", t: "The Discovery Peak", d: "We audit your current website, social metrics, and ad performance.", time: "1 Day" },
  { n: "02", t: "The Integrated Blueprint", d: "We build a strategy that ties your social, web, email, and video together.", time: "3–5 Days" },
  { n: "03", t: "The Creation Engine", d: "Our teams design, code, film, and edit simultaneously.", time: "Ongoing" },
  { n: "04", t: "Optimization & Climbing", d: "We A/B test your ads, iterate on web UX, and refine email sequences.", time: "Monthly Review" },
];

function Process() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="Your Roadmap to Digital Dominance."
        subtitle="A transparent climb — you always know what's shipping, when, and why."
      />

      <section className="mx-auto max-w-4xl px-6 py-24">
        <SectionHeading eyebrow="The ascent" title="Four stages, one continuous climb." align="left" />
        <ol className="mt-14 space-y-4 border-l border-border pl-8">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 90} className="relative">
              <span className="absolute -left-[2.6rem] top-6 size-3 rounded-full bg-accent ring-4 ring-background" />
              <div className="lift rounded-2xl border border-border bg-card p-8">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-display text-3xl font-bold text-gradient">{s.n}</span>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-gold">{s.time}</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <FinalCTA />
    </>
  );
}
