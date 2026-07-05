import { motion } from "motion/react";
import { User, GraduationCap, Rocket, Layers, ShoppingBag, Users, ArrowUpRight } from "lucide-react";

const industries = [
  { icon: User, title: "Creators", desc: "You create. We make you unforgettable." },
  { icon: GraduationCap, title: "Coaches", desc: "Educate more people with powerful content." },
  { icon: Rocket, title: "Startups", desc: "Build your brand. Attract. Convert. Scale." },
  { icon: Layers, title: "SaaS Brands", desc: "Simplify complex. Show value. Drive signups." },
  { icon: ShoppingBag, title: "E-Commerce", desc: "Turn viewers into buyers. Consistently." },
  { icon: Users, title: "Agencies", desc: "Your creative partner behind the scenes." },
];

export function Industries() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="mx-auto max-w-3xl font-display text-5xl leading-[1.02] tracking-tight text-foreground md:text-6xl">
          Different goals.
          <br />
          <span className="text-gradient italic">Same results.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground">
          We partner with ambitious creators and brands across industries to
          create content that drives real growth.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {industries.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="group surface-card relative overflow-hidden rounded-3xl p-5 text-left"
              >
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-magenta/25 via-violet/10 to-transparent opacity-60 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <Icon className="h-6 w-6 text-violet" strokeWidth={1.5} />
                  <div className="mt-8 font-display text-xl text-foreground">
                    {it.title}
                  </div>
                  <div className="mt-2 h-px w-8 bg-gradient-brand" />
                  <p className="mt-3 text-xs text-muted-foreground">{it.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* footer bar */}
        <div className="surface-card mt-10 flex flex-col items-center gap-4 rounded-3xl p-5 text-left md:flex-row md:justify-between md:p-6">
          <div>
            <div className="text-sm text-foreground">
              Different industries. Same mindset.
            </div>
            <div className="text-sm font-semibold text-gradient">
              Growth through great content.
            </div>
          </div>
          <div className="hidden text-sm text-muted-foreground md:block">
            Where do you fit in?
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-white shadow-glow"
          >
            Let's Work Together
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
