import { createFileRoute } from "@tanstack/react-router";
import { Cpu, Handshake, Layers, HeartHandshake, Users } from "lucide-react";
import sefiu from "../assets/sefiu.png.asset.json";
import { Reveal } from "../components/reveal";
import { PageHero, SectionHeading, GlassCard, FinalCTA } from "../components/sections";
import { StatsBand } from "../components/stats";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Vista Peak Media — Full-Scale Digital. Deeply Personal." },
      {
        name: "description",
        content:
          "Meet Sefiu, Founder & Creative Director of Vista Peak Media — a unified agency mastering social, web, email and video for ambitious brands.",
      },
      { property: "og:title", content: "About Vista Peak Media" },
      { property: "og:description", content: "Founded by Sefiu — one creative partner for your entire digital ecosystem." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const VALUES = [
  { icon: Cpu, t: "Innovation", d: "Embracing AI and cutting-edge tech — AI video, generative visuals, and automation." },
  { icon: Layers, t: "Versatility", d: "Mastery across design, code, video, and copy so nothing gets outsourced or lost." },
  { icon: HeartHandshake, t: "Authenticity", d: "Crafting content that feels genuine, never manufactured." },
  { icon: Handshake, t: "Partnership", d: "We succeed only when our clients succeed." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Full-Scale Digital. Deeply Personal."
        subtitle="One team, every vertical — built for brands who are tired of stitching agencies together."
      />

      <section className="mx-auto max-w-4xl px-6 py-24">
        <SectionHeading eyebrow="Our story" title="Born from a simple observation." align="left" />
        <Reveal delay={80}>
          <p className="mt-8 font-serif text-2xl leading-relaxed italic text-muted-foreground">
            Founded by Sefiu, Vista Peak Media was born from a simple observation: brands were struggling to juggle
            social media, websites, emails, and video content separately.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            We built a unified agency that masters all these verticals. We believe every brand has a unique peak to
            reach, and our mission is to provide the creative altitude needed to get there.
          </p>
        </Reveal>
      </section>

      <section className="bg-muted/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Core values" title="What we climb by." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.t} delay={i * 80}>
                <GlassCard className="h-full">
                  <span className="grid size-11 place-items-center rounded-xl peak-gradient text-accent">
                    <v.icon className="size-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold">{v.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] peak-gradient opacity-30 blur-2xl" />
              <img
                src={sefiu.url}
                alt="Sefiu, Founder and Creative Director of Vista Peak Media"
                loading="lazy"
                className="relative w-full rounded-[2rem] object-cover shadow-[var(--shadow-lift)]"
              />
              <div className="glass absolute -bottom-6 left-6 rounded-2xl px-5 py-3">
                <p className="font-display text-sm font-semibold">Sefiu</p>
                <p className="text-xs text-muted-foreground">Founder &amp; Creative Director</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Meet the founder</p>
            <h2 className="mt-3 font-display text-4xl font-semibold">Hi, I'm Sefiu.</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              I've always been captivated by the intersection of technology and human emotion. With a background in
              digital marketing and creative production, I built Vista Peak Media to serve as a one-stop launchpad for
              brands lost in the noise. I personally oversee every strategy—from your website's UX to your video ad's
              script—ensuring every touchpoint resonates and drives real growth. This isn't just a business; it's my
              craft.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <SectionHeading eyebrow="The team" title="Specialists joining the climb." subtitle="We're expanding our roster of makers across every discipline." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {["Web Developers", "Video Editors", "Social Strategists"].map((r, i) => (
            <Reveal key={r} delay={i * 80}>
              <div className="rounded-2xl border border-dashed border-border bg-card/60 p-10 text-center">
                <span className="mx-auto grid size-12 place-items-center rounded-full bg-muted text-muted-foreground">
                  <Users className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">{r}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">Now onboarding</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <StatsBand heading="The numbers behind the climb" />
      <FinalCTA />
    </>
  );
}
