import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import type { PageBlueprint } from "@/data/site-pages";

export function PageScaffold({ page }: { page: PageBlueprint }) {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-radial-glow opacity-80" />
        <div className="pointer-events-none absolute inset-0 grain" />
        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-violet" />
            {page.eyebrow}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-6 max-w-4xl font-display text-[3rem] leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-[4.5rem]"
          >
            {page.heading}{" "}
            {page.headingAccent && (
              <span className="text-gradient italic">{page.headingAccent}</span>
            )}
          </motion.h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            {page.intro}
          </p>

          {(page.primaryCta || page.secondaryCta) && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {page.primaryCta && (
                <Link
                  to={page.primaryCta.to}
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02]"
                >
                  {page.primaryCta.label}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              )}
              {page.secondaryCta && (
                <Link
                  to={page.secondaryCta.to}
                  className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-5 py-3 text-sm font-medium text-foreground backdrop-blur hover:bg-surface-elevated"
                >
                  {page.secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Section blueprints */}
      <div className="mx-auto max-w-6xl px-4 pb-24">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {page.sections.map((s, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className="surface-card group relative overflow-hidden rounded-3xl p-6"
            >
              <div
                className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-2xl opacity-60 ${
                  s.theme === "Dark"
                    ? "bg-gradient-to-br from-violet/30 to-magenta/10"
                    : "bg-gradient-to-br from-coral/25 to-magenta/5"
                }`}
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                      s.theme === "Dark"
                        ? "bg-foreground text-background"
                        : "border border-hairline text-muted-foreground"
                    }`}
                  >
                    {s.theme}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl leading-tight text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.purpose}</p>
                {s.contains.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {s.contains.map((c) => (
                      <li
                        key={c}
                        className="rounded-full border border-hairline bg-surface-elevated/60 px-2.5 py-1 text-[11px] text-foreground/80"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="surface-card mt-14 flex flex-col items-center gap-4 rounded-3xl p-6 md:flex-row md:justify-between md:p-8">
          <div>
            <div className="font-display text-2xl leading-tight text-foreground md:text-3xl">
              Ready to build something{" "}
              <span className="text-gradient italic">unforgettable?</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              Book a free 30-minute strategy session — no pressure, no pitch.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Link
              to="/free-consultation"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02]"
            >
              Book a Free Consultation
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/request-a-quote"
              className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-5 py-3 text-sm font-medium text-foreground hover:bg-surface-elevated"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
