import { motion } from "motion/react";
import {
  Search,
  Target,
  Clapperboard,
  MessageSquare,
  LineChart,
  ArrowRight,
  Clock,
  Sparkles,
  Rocket,
  Users,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    desc: "We learn about your goals, audience and challenges to understand what matters most.",
    time: "1–2 Days",
    tone: "text-violet",
  },
  {
    icon: Target,
    title: "Strategy",
    desc: "We build a custom strategy and content roadmap designed to create impact and drive growth.",
    time: "2–3 Days",
    tone: "text-magenta",
  },
  {
    icon: Clapperboard,
    title: "Creation",
    desc: "Our team creates high-quality content that captures attention and delivers your message powerfully.",
    time: "3–7 Days",
    tone: "text-coral",
  },
  {
    icon: MessageSquare,
    title: "Review",
    desc: "We review, refine and align with your feedback to ensure the content is exactly what you envisioned.",
    time: "1–2 Days",
    tone: "text-gold",
  },
  {
    icon: LineChart,
    title: "Delivery & Growth",
    desc: "We deliver the final content and help you optimize, publish and scale for maximum results.",
    time: "Ongoing",
    tone: "text-violet",
  },
];

const perks = [
  { icon: Users, title: "Dedicated team", desc: "Experts who care about your success." },
  { icon: ShieldCheck, title: "Transparent process", desc: "Clear communication every step of the way." },
  { icon: TrendingUp, title: "Results that grow", desc: "Content that drives real impact and growth." },
];

export function Process() {
  return (
    <section id="process" className="relative bg-cream/[0.02] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-violet">
              <Sparkles className="h-3.5 w-3.5" /> Our process
            </div>
            <h2 className="mt-4 font-display text-5xl leading-[1.02] tracking-tight text-foreground md:text-6xl">
              Simple process.
              <br />
              Powerful <span className="text-gradient italic">results.</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              A seamless journey from idea to impact.
            </p>
          </div>
          <div className="flex items-start gap-3 md:max-w-xs">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-brand-soft ring-1 ring-hairline">
              <Sparkles className="h-4 w-4 text-violet" />
            </div>
            <p className="text-sm text-muted-foreground">
              We keep it simple, transparent and focused on growth.
            </p>
          </div>
        </div>

        {/* Steps timeline */}
        <div className="relative mt-14">
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-hairline to-transparent md:block" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-3">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative"
                >
                  <div className="mb-4 flex items-center gap-2 md:justify-center">
                    <span className="relative z-10 rounded-full border border-hairline bg-background px-2.5 py-0.5 text-[11px] font-semibold text-violet">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="surface-card h-full rounded-3xl p-5">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand-soft ring-1 ring-hairline">
                      <Icon className={`h-5 w-5 ${s.tone}`} />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-foreground">
                      {s.title}
                    </h3>
                    <div className={`mt-1 h-px w-8 bg-gradient-brand`} />
                    <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
                    <div className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-hairline bg-surface/40 px-2.5 py-1 text-[11px] text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {s.time}
                    </div>
                  </div>
                  {i < steps.length - 1 && (
                    <ArrowRight className="absolute -right-2 top-16 hidden h-4 w-4 text-muted-foreground/60 md:block" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* perks bar */}
        <div className="surface-card mt-10 grid grid-cols-1 items-center gap-6 rounded-3xl p-6 md:grid-cols-[minmax(0,1fr)_auto_auto] md:gap-8">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-brand-soft ring-1 ring-hairline">
              <Rocket className="h-5 w-5 text-violet" />
            </div>
            <div>
              <div className="font-semibold text-foreground">
                From start to growth,
              </div>
              <div className="text-sm text-muted-foreground">
                we've got you covered.
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            {perks.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="flex items-start gap-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-surface-elevated ring-1 ring-hairline">
                    <Icon className="h-4 w-4 text-magenta" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      {p.title}
                    </div>
                    <div className="text-xs text-muted-foreground">{p.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background"
          >
            Let's Work Together <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
