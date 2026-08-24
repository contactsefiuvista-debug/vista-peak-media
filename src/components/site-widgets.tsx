import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, X } from "lucide-react";
import { CONTACT_EMAIL } from "./site-footer";

export function SiteWidgets() {
  const [showTop, setShowTop] = useState(false);
  const [cookies, setCookies] = useState(false);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    setCookies(!localStorage.getItem("vpm-cookies"));
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("vpm-exit")) return;
    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setExit(true);
        localStorage.setItem("vpm-exit", "1");
        document.removeEventListener("mouseout", onLeave);
      }
    };
    document.addEventListener("mouseout", onLeave);
    return () => document.removeEventListener("mouseout", onLeave);
  }, []);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {showTop ? (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="glass grid size-11 place-items-center rounded-full text-foreground transition-transform hover:scale-105"
          >
            <ArrowUp className="size-4" />
          </button>
        ) : null}
        <a
          href="https://wa.me/0000000000"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="grid size-13 place-items-center rounded-full bg-accent p-3.5 text-accent-foreground shadow-[0_18px_40px_-16px_rgba(0,180,216,0.8)] transition-transform hover:scale-105"
        >
          <MessageCircle className="size-5" />
        </a>
      </div>

      {cookies ? (
        <div className="glass fixed bottom-6 left-6 z-50 max-w-sm rounded-2xl p-5 text-sm">
          <p className="text-muted-foreground">
            We use cookies to analyse traffic and elevate your experience. See our approach to data in our privacy
            notice.
          </p>
          <div className="mt-4 flex gap-2">
            <button
              onClick={() => {
                localStorage.setItem("vpm-cookies", "1");
                setCookies(false);
              }}
              className="rounded-full bg-accent px-4 py-2 text-xs font-semibold text-accent-foreground"
            >
              Accept
            </button>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Privacy%20question`}
              className="rounded-full border border-border px-4 py-2 text-xs font-semibold"
            >
              Learn More
            </a>
          </div>
        </div>
      ) : null}

      {exit ? (
        <div className="fixed inset-0 z-60 grid place-items-center bg-foreground/50 p-6 backdrop-blur-sm">
          <div className="glass relative w-full max-w-lg rounded-3xl p-10 text-center">
            <button
              onClick={() => setExit(false)}
              aria-label="Close"
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
            >
              <X className="size-5" />
            </button>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Free for founders</p>
            <h2 className="mt-3 font-display text-3xl font-semibold">Get a Free Digital Ecosystem Audit</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              We'll review your website, social, email and ad creative — then map the fastest route to your peak.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Free%20Digital%20Ecosystem%20Audit`}
              className="mt-6 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground"
            >
              Claim My Audit
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
