import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  BarChart3,
  Bot,
  CalendarClock,
  Code2,
  Filter,
  Gauge,
  LayoutTemplate,
  Mail,
  MousePointerClick,
  PlayCircle,
  Repeat,
  Rocket,
  ShoppingCart,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Video,
  Wand2,
  X,
} from "lucide-react";
import { Reveal } from "../components/reveal";
import { PageHero, SectionHeading, GlassCard, FinalCTA } from "../components/sections";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Social, Web, Email, Video & AI | Vista Peak Media" },
      {
        name: "description",
        content:
          "Explore Vista Peak Media's full service suite: social media management, website design, email automation, professional video editing and AI-generated visuals.",
      },
      { property: "og:title", content: "Vista Peak Media Services" },
      { property: "og:description", content: "Sixteen specialist services across social, web, email and video production." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

type Service = { icon: any; title: string; body: string; detail: string };

const CATEGORIES: { name: string; blurb: string; services: Service[] }[] = [
  {
    name: "Social Media Marketing & Management",
    blurb: "Own the feed with content, community and paid social that compounds.",
    services: [
      {
        icon: CalendarClock,
        title: "Full-Service Social Management",
        body: "Content creation, scheduling and community replies across every platform. We run your channels like an in-house team, only faster.",
        detail:
          "Includes monthly content calendars, 12–20 native assets per platform, caption copywriting, hashtag and SEO research, daily community management, and DM triage with a documented brand voice guide.",
      },
      {
        icon: Target,
        title: "Meta & TikTok Ads",
        body: "Campaign setup, creative A/B testing and retargeting built around profitable ROAS. Every dollar is tracked to a business outcome.",
        detail:
          "Pixel/CAPI setup, audience architecture, 3–5 creative variants per cycle, structured A/B tests, retargeting ladders, and a weekly performance readout with next-step recommendations.",
      },
      {
        icon: TrendingUp,
        title: "Organic Growth & Strategy",
        body: "Viral content planning and trend jacking that turn attention into audience. We ship the content that platforms want to push.",
        detail:
          "Trend monitoring, hook libraries, short-form scripting, posting cadence modelling, collaboration and UGC sourcing, plus quarterly positioning refreshes.",
      },
      {
        icon: BarChart3,
        title: "Social Analytics & Reporting",
        body: "Monthly deep-dives that translate reach, saves and conversions into decisions — not vanity dashboards.",
        detail:
          "Cross-platform dashboard, cohort and content-type analysis, competitor benchmarking, and a prioritised action list for the coming month.",
      },
    ],
  },
  {
    name: "Website Design & Development",
    blurb: "Fast, beautiful, conversion-obsessed builds.",
    services: [
      {
        icon: LayoutTemplate,
        title: "Custom Landing Pages",
        body: "High-converting sales pages engineered around one action. Message-matched to your ads for maximum quality score.",
        detail: "Conversion copy, wireframe, bespoke design, responsive build, analytics events, and a 2-week post-launch optimisation window.",
      },
      {
        icon: Code2,
        title: "Full Brand Websites",
        body: "SEO-optimized, responsive websites in WordPress, Webflow or modern React stacks. Built for speed and storytelling.",
        detail: "Sitemap and IA, design system, 5–15 pages, technical SEO, CMS training, and Core Web Vitals tuning at handover.",
      },
      {
        icon: ShoppingCart,
        title: "E-commerce Store Design",
        body: "Shopify and WooCommerce storefronts designed to lift AOV and reduce cart friction at every step.",
        detail: "Theme customisation, PDP/PLP optimisation, checkout tuning, app stack setup, and merchandising templates your team can reuse.",
      },
      {
        icon: MousePointerClick,
        title: "UX/UI Redesign",
        body: "Optimizing user flows for higher conversions using heatmaps, session data and rigorous test cycles.",
        detail: "UX audit, heatmap and recording analysis, redesign of priority flows, and an A/B test roadmap with projected impact.",
      },
    ],
  },
  {
    name: "Email Marketing & Automation",
    blurb: "The highest-ROI channel, run properly.",
    services: [
      {
        icon: Mail,
        title: "Newsletter Management",
        body: "Design, copywriting and sending — a consistent broadcast rhythm your list actually looks forward to.",
        detail: "Editorial calendar, branded template system, 2–4 campaigns monthly, deliverability monitoring and per-send reporting.",
      },
      {
        icon: Repeat,
        title: "Automated Flows",
        body: "Welcome sequences, abandoned cart, browse abandon and post-purchase flows that earn while you sleep.",
        detail: "Flow mapping, copy and design, conditional splits, revenue attribution setup, and quarterly flow refreshes.",
      },
      {
        icon: Filter,
        title: "Lead Magnet Creation & Funnels",
        body: "Building email capture systems — magnets, opt-ins and nurture paths that turn traffic into pipeline.",
        detail: "Offer strategy, asset design, opt-in placements, nurture sequence, and CRM/ESP integration.",
      },
      {
        icon: Users,
        title: "List Growth & Segmentation",
        body: "Cleaning lists and optimizing open rates through smart segmentation, sunset flows and warm-up plans.",
        detail: "Hygiene audit, suppression rules, engagement segments, domain authentication (SPF/DKIM/DMARC) and inbox placement testing.",
      },
    ],
  },
  {
    name: "Video Editing & AI Production",
    blurb: "Cinematic craft plus generative speed.",
    services: [
      {
        icon: Video,
        title: "Professional Video Editing",
        body: "Testimonials, tutorials, vlogs and commercials edited with pace, sound design and colour that feel premium.",
        detail: "Story structure, multicam edit, colour grade, licensed sound design and mix, captions, and two revision rounds.",
      },
      {
        icon: PlayCircle,
        title: "Video Ads for Social",
        body: "Short-form Reels and TikToks optimized for the first 1.5 seconds and engineered for engagement and ROAS.",
        detail: "Hook matrix, 5–10 variants per concept, platform-native formats, dynamic captions, and creative performance feedback loop.",
      },
      {
        icon: Bot,
        title: "AI-Generated Visuals & Avatars",
        body: "Cutting-edge AI avatars, generative fill and synthetic scenes — produced ethically and on-brand.",
        detail: "Concept prompts, model/avatar selection, generative b-roll, brand-safe review pass, and delivery in ad-ready aspect ratios.",
      },
      {
        icon: Wand2,
        title: "Motion Graphics & Animation",
        body: "Animated logos, kinetic type and explainer videos that make complex offers instantly understandable.",
        detail: "Storyboard, style frames, 2D animation, voiceover direction, and source project files on request.",
      },
    ],
  },
];

const ICON_EXTRA = [Gauge, Rocket, Sparkles];
void ICON_EXTRA;

function Services() {
  const [modal, setModal] = useState<Service | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Every Discipline. One Partner."
        subtitle="Sixteen specialist services across four categories — pick a lane, or let us run the whole ecosystem."
      />

      {CATEGORIES.map((cat, ci) => (
        <section key={cat.name} className={ci % 2 ? "bg-muted/40 py-24" : "py-24"}>
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow={`Category 0${ci + 1}`}
              title={cat.name}
              subtitle={cat.blurb}
              align="left"
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {cat.services.map((s, i) => (
                <Reveal key={s.title} delay={i * 70}>
                  <GlassCard className="flex h-full flex-col">
                    <span className="grid size-11 place-items-center rounded-xl peak-gradient text-accent">
                      <s.icon className="size-5" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <button
                        onClick={() => setModal(s)}
                        className="rounded-full border border-border px-4 py-2 text-xs font-semibold transition-colors hover:border-accent hover:text-accent"
                      >
                        Learn More
                      </button>
                      <Link
                        to="/contact"
                        search={{ service: s.title }}
                        className="rounded-full bg-accent px-4 py-2 text-xs font-semibold text-accent-foreground"
                      >
                        Request a Quote
                      </Link>
                    </div>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {modal ? (
        <div
          className="fixed inset-0 z-60 grid place-items-center bg-foreground/50 p-6 backdrop-blur-sm"
          onClick={() => setModal(null)}
        >
          <div className="glass relative w-full max-w-lg rounded-3xl p-9" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setModal(null)}
              aria-label="Close"
              className="absolute right-5 top-5 text-muted-foreground hover:text-foreground"
            >
              <X className="size-5" />
            </button>
            <h3 className="font-display text-2xl font-semibold">{modal.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{modal.body}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{modal.detail}</p>
            <Link
              to="/contact"
              search={{ service: modal.title }}
              className="mt-7 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      ) : null}

      <FinalCTA />
    </>
  );
}
