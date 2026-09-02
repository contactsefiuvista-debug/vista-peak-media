import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CalendarCheck, Clock, Mail } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Reveal } from "../components/reveal";
import { PageHero, FinalCTA } from "../components/sections";
import { CONTACT_EMAIL } from "../components/site-footer";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): { service?: string } =>
    typeof search["service"] === "string" ? { service: search["service"] } : {},
  head: () => ({
    meta: [
      { title: "Contact — Let's Reach the Summit Together | Vista Peak Media" },
      {
        name: "description",
        content:
          "Tell Vista Peak Media about your brand and goals. We respond within 12 hours — email contactsefiuvista@gmail.com or book a strategy call.",
      },
      { property: "og:title", content: "Contact Vista Peak Media" },
      { property: "og:description", content: "Start your free strategy session with Sefiu, Founder & Creative Director." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const SERVICES = [
  "Social Media Management",
  "Website Design",
  "Email Marketing",
  "Video Editing",
  "Video Ads / AI",
  "Full-Scale Package",
  "Other",
];
const BUDGETS = ["Under $1k", "$1k–$3k", "$3k–$5k", "$5k+"];

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  company: z.string().trim().max(120).optional(),
  service: z.string().trim().min(1, "Choose a service"),
  budget: z.string().trim().min(1, "Choose a budget range"),
  message: z.string().trim().min(10, "Tell us a little more about the project").max(1500),
});

const fieldClass =
  "mt-2 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-accent";

function Contact() {
  const { service } = Route.useSearch();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      toast.error("Please check the highlighted fields.");
      return;
    }
    setErrors({});
    const d = parsed.data;
    const body = `Name: ${d.name}\nEmail: ${d.email}\nCompany: ${d.company ?? "-"}\nService: ${d.service}\nBudget: ${d.budget}\n\n${d.message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `New project enquiry — ${d.service}`,
    )}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your email client — we reply within 12 hours.");
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Reach the Summit Together."
        subtitle="Tell us where your brand is today and where you want it to stand. We'll map the climb."
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[1.35fr_0.65fr]">
        <Reveal>
          <form onSubmit={onSubmit} className="glass rounded-[1.75rem] p-8 sm:p-10">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                <input id="name" name="name" maxLength={100} className={fieldClass} placeholder="Jane Doe" />
                {errors["name"] ? <p className="mt-1 text-xs text-destructive">{errors["name"]}</p> : null}
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                <input id="email" name="email" type="email" maxLength={255} className={fieldClass} placeholder="jane@brand.com" />
                {errors["email"] ? <p className="mt-1 text-xs text-destructive">{errors["email"]}</p> : null}
              </div>
              <div>
                <label htmlFor="company" className="text-sm font-medium">Company / Brand Name</label>
                <input id="company" name="company" maxLength={120} className={fieldClass} placeholder="Brand Co." />
              </div>
              <div>
                <label htmlFor="service" className="text-sm font-medium">Service Interested In</label>
                <select id="service" name="service" defaultValue={service ?? ""} className={fieldClass}>
                  <option value="">Select a service</option>
                  {service && !SERVICES.includes(service) ? <option value={service}>{service}</option> : null}
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors["service"] ? <p className="mt-1 text-xs text-destructive">{errors["service"]}</p> : null}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="budget" className="text-sm font-medium">Budget Range</label>
                <select id="budget" name="budget" defaultValue="" className={fieldClass}>
                  <option value="">Select a range</option>
                  {BUDGETS.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
                {errors["budget"] ? <p className="mt-1 text-xs text-destructive">{errors["budget"]}</p> : null}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-sm font-medium">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  maxLength={1500}
                  className={fieldClass}
                  placeholder="Where is your brand today, and what does the peak look like?"
                />
                {errors["message"] ? <p className="mt-1 text-xs text-destructive">{errors["message"]}</p> : null}
              </div>
            </div>
            <button
              type="submit"
              className="mt-8 w-full rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.01]"
            >
              Send My Project Brief
            </button>
          </form>
        </Reveal>

        <Reveal delay={120}>
          <aside className="sticky top-28 space-y-4">
            <div className="rounded-2xl border border-border bg-card p-7">
              <Mail className="size-5 text-accent" />
              <h2 className="mt-4 font-display text-lg font-semibold">Email us directly</h2>
              <a href={`mailto:${CONTACT_EMAIL}`} className="mt-2 block break-all text-sm text-accent hover:underline">
                {CONTACT_EMAIL}
              </a>
            </div>
            <div className="rounded-2xl border border-border bg-card p-7">
              <Clock className="size-5 text-gold" />
              <h2 className="mt-4 font-display text-lg font-semibold">Response time</h2>
              <p className="mt-2 text-sm text-muted-foreground">We respond within 12 hours, every business day.</p>
            </div>
            <div className="aurora peak-gradient rounded-2xl p-7">
              <div className="relative z-10">
                <CalendarCheck className="size-5 text-accent" />
                <h2 className="mt-4 font-display text-lg font-semibold text-surface-foreground">Prefer to talk?</h2>
                <a
                  href="#"
                  className="mt-4 inline-flex rounded-full bg-accent px-5 py-2.5 text-xs font-semibold text-accent-foreground"
                >
                  Book a Calendly Call
                </a>
              </div>
            </div>
          </aside>
        </Reveal>
      </section>

      <FinalCTA />
    </>
  );
}
