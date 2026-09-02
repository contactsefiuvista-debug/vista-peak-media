import { useEffect, useRef, useState } from "react";
import { useCountUp } from "./reveal";

const STATS = [
  { value: 50, suffix: "+", label: "Brands Amplified" },
  { value: 200, suffix: "+", label: "Campaigns Launched" },
  { value: 15, suffix: "+", label: "Industries Served" },
  { value: 98, suffix: "%", label: "Client Retention Rate" },
];

function Stat({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const n = useCountUp(value, active);
  return (
    <div className="text-center">
      <div className="font-display text-4xl font-bold tracking-tight text-gradient sm:text-5xl">
        {n}
        {suffix}
      </div>
      <p className="mt-2 text-sm uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
    </div>
  );
}

export function StatsBand({ heading }: { heading?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="aurora peak-gradient border-y border-border/40 py-20">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {heading ? (
          <h2 className="mb-12 text-center font-display text-3xl font-semibold text-surface-foreground">{heading}</h2>
        ) : null}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {STATS.map((s) => (
            <Stat key={s.label} {...s} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
