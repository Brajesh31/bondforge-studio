import { ArrowUpRight, Mail, Instagram, Youtube, Linkedin, Twitter } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./logo";
import { footerGroups } from "@/data/site-pages";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-70" />
      <div className="relative mx-auto max-w-5xl px-4 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
          Let's build together
        </span>
        <h2 className="mx-auto mt-6 max-w-3xl font-display text-5xl leading-[1.02] tracking-tight text-foreground md:text-7xl">
          Ready to turn content into{" "}
          <span className="text-gradient italic">real growth?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground">
          Book a free 30-minute consultation. We'll audit your content, identify
          growth opportunities and outline a plan — no strings attached.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/free-consultation"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02]"
          >
            Book a Free Consultation
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <a
            href="mailto:hello@thesocialbond.co"
            className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur hover:bg-surface-elevated"
          >
            <Mail className="h-4 w-4" />
            hello@thesocialbond.co
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-hairline bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm text-muted-foreground">
              A creative growth partner for creators, startups and brands.
              Content that captures. Strategies that grow.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[Instagram, Youtube, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full border border-hairline bg-surface/60 text-muted-foreground transition-colors hover:bg-surface-elevated hover:text-foreground"
                  aria-label="Social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {footerGroups.map((g) => (
            <div key={g.title}>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                {g.title}
              </div>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-hairline pt-6 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} The Social Bond. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-foreground">Privacy</Link>
            <Link to="/terms" className="hover:text-foreground">Terms</Link>
            <Link to="/cookie-policy" className="hover:text-foreground">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
