import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BarChart3,
  ChevronRight,
  Code2,
  Mail,
  Megaphone,
  Film,
  Sparkles,
  Star,
  Quote,
} from "lucide-react";
import { Reveal } from "../components/reveal";
import { SectionHeading, GlassCard, FinalCTA } from "../components/sections";
import { StatsBand } from "../components/stats";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vista Peak Media — Reach New Heights in Digital Storytelling" },
      {
        name: "description",
        content:
          "One creative partner for social media management, website design, email marketing, video editing and AI-driven ad creative. Vista Peak Media builds brands that dominate.",
      },
      { property: "og:title", content: "Vista Peak Media — Full-Scale Digital Partner" },
      {
        property: "og:description",
        content: "Social, web, email, video and AI creative under one roof. Reach new heights in digital storytelling.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const SERVICES = [
  {
    icon: Megaphone,
    title: "Social Media Marketing & Management",
    body: "Full-funnel strategy, community engagement, and paid social ads (Meta/TikTok) to grow your audience and convert followers into customers.",
  },
  {
    icon: Code2,
    title: "Website Design & Development",
    body: "Custom, high-converting landing pages and full websites built with UX in mind—optimized for speed, mobile, and lead generation.",
  },
  {
    icon: Mail,
    title: "Email Marketing & Automation",
    body: "Strategic newsletter campaigns, automated flows, and lead nurturing sequences that turn subscribers into loyal brand advocates.",
  },
  {
    icon: Film,
    title: "Professional Video Editing",
    body: "Polished, storytelling-driven edits for commercials, testimonials, vlogs, and UGC content that resonate with your audience.",
  },
  {
    icon: Sparkles,
    title: "Video Ads & AI-Generated Visuals",
    body: "High-impact ad creatives and cutting-edge AI visuals that stop the scroll and drive massive ROAS.",
  },
  {
    icon: BarChart3,
    title: "Audience Growth & Analytics",
    body: "Data-driven refinement to track engagement, optimize campaigns, and ensure your ROI is always climbing.",
  },
];

const PLATFORMS = [
  "Meta",
  "TikTok",
  "YouTube",
  "Shopify",
  "WordPress",
  "Klaviyo",
  "Mailchimp",
  "Premiere Pro",
  "CapCut",
];

const STEPS = [
  { n: "01", t: "Discovery & Audit", d: "We dive deep into your current brand presence, website performance, and ad metrics." },
  { n: "02", t: "Strategy Blueprint", d: "We craft a custom roadmap spanning social, web, email, and video." },
  { n: "03", t: "Creation & Execution", d: "Our team designs, films, edits, codes, and writes—managing everything cross-platform." },
  { n: "04", t: "Optimize & Scale", d: "We analyze performance data to continuously refine and amplify your reach." },
];

const TESTIMONIALS = [
  {
    name: "Amara Okoye",
    title: "Founder, Lumen Skincare",
    quote:
      "Vista Peak rebuilt our store, our email flows and our ad creative in six weeks. Revenue climbed 3x and we finally have one team who sees the whole picture.",
  },
  {
    name: "Daniel Reyes",
    title: "Author & Speaker",
    quote:
      "Sefiu turned my book launch into a full digital ecosystem — website, trailer, funnel. It felt like having a creative director on retainer.",
  },
  {
    name: "Priya Nair",
    title: "MD, Northline Agency",
    quote:
      "Their white-label video production is the most reliable partnership we've had. Fast turnarounds, cinematic quality, zero hand-holding.",
  },
];

const NICHES = [
  {
    t: "Authors & Thought Leaders",
    d: "Amplify your voice with web design, book promo videos, and email funnels that build your authority.",
  },
  {
    t: "E-commerce & Retail",
    d: "Drive conversions with shoppable websites, product video ads, and automated email flows designed to increase AOV.",
  },
  {
    t: "Advertising Agencies",
    d: "White-label website builds, video production, and social management solutions to elevate your agency's offerings.",
  },
];

function Home() {
  return (
    <>
      <section className="aurora peak-gradient relative flex min-h-screen items-center">
        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-14 px-6 pt-32 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <span className="inline-flex border border-surface-foreground/15 bg-surface/50 backdrop-blur-md items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              <Star className="size-3.5" /> Full-Scale Digital Solutions
            </span>
            <h1 className="mt-7 font-display text-5xl font-bold leading-[1.03] text-surface-foreground sm:text-6xl lg:text-7xl">
              Reach New Heights in <span className="text-gradient">Digital Storytelling.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg text-surface-foreground/70">
              We are your full-scale digital partner—offering Social Media Management, Website Design, Email Marketing,
              Video Editing, and AI-driven Ad Creatives to build a brand that dominates.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.04]"
              >
                Launch Your Campaign
              </Link>
              <a
                href="#services"
                className="rounded-full border border-surface-foreground/20 bg-surface/40 px-8 py-4 text-sm font-semibold text-surface-foreground backdrop-blur-md transition-transform hover:scale-[1.04]"
              >
                Explore Our Services
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="rounded-[2rem] border border-surface-foreground/12 bg-surface/45 p-8 backdrop-blur-xl">
              <p className="font-serif text-2xl italic text-surface-foreground/85">
                "Full-Scale Digital Solutions. One Creative Partner."
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {["Social", "Web", "Email", "Video"].map((k, i) => (
                  <div
                    key={k}
                    className="rounded-xl border border-surface-foreground/10 bg-surface/40 p-5"
                    style={{ transform: `translateY(${i % 2 ? 14 : 0}px)` }}
                  >
                    <p className="font-display text-lg font-semibold text-surface-foreground">{k}</p>
                    <p className="mt-1 text-xs text-surface-foreground/60">Managed end-to-end</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-border bg-background py-14">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
          Trusted by Innovators &amp; Creators
        </p>
        <div className="mt-8 flex w-max marquee-track gap-14 opacity-60">
          {[...PLATFORMS, ...PLATFORMS].map((p, i) => (
            <span key={i} className="font-display text-xl font-medium tracking-tight whitespace-nowrap">
              {p}
            </span>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24">
        <SectionHeading
          eyebrow="Services"
          title="Your 360° Digital Ecosystem."
          subtitle="Six disciplines, one accountable partner — engineered to compound each other."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <GlassCard className="h-full">
                <span className="grid size-11 place-items-center rounded-xl peak-gradient text-accent">
                  <s.icon className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <Link
                  to="/services"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent"
                >
                  Learn More <ChevronRight className="size-4" />
                </Link>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="How it works" title="Four steps to the summit." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <div className="h-full rounded-2xl border border-border bg-card p-7">
                  <span className="font-display text-4xl font-bold text-gradient">{s.n}</span>
                  <h3 className="mt-4 font-display text-lg font-semibold">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading eyebrow="Social proof" title="Brands that climbed with us." />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <GlassCard className="h-full">
                <Quote className="size-6 text-accent" />
                <div className="mt-4 flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 font-serif text-lg italic leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-full peak-gradient font-display text-sm font-semibold text-surface-foreground">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.title}</p>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <StatsBand />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading eyebrow="Niche expertise" title="Creative Solutions for Every Niche." />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {NICHES.map((n, i) => (
            <Reveal key={n.t} delay={i * 80}>
              <div className="lift h-full rounded-2xl border border-border bg-card p-8">
                <h3 className="font-display text-xl font-semibold">{n.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{n.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
