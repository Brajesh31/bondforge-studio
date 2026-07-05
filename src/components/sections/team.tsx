import { motion } from "motion/react";
import { Video, Megaphone, TrendingUp, PenSquare, Code2, Users, Sparkles, Briefcase, Smile, Star } from "lucide-react";

const team = [
  { name: "Arjun Sharma", role: "Creative Director", icon: Video, bio: "7+ years in video production and storytelling. Worked with 100+ creators & brands.", tags: ["Video Strategy", "Content Direction"] },
  { name: "Meera Iyer", role: "Social Media Lead", icon: Megaphone, bio: "5+ years of managing and growing social media accounts across industries.", tags: ["Social Strategy", "Growth"] },
  { name: "Rohit Verma", role: "Performance Marketer", icon: TrendingUp, bio: "6+ years driving growth through paid ads, funnels and data-driven campaigns.", tags: ["Paid Ads", "Analytics"] },
  { name: "Ananya Seth", role: "Content Strategist", icon: PenSquare, bio: "Turns ideas into content that connects. 4+ years in content strategy & brand messaging.", tags: ["Content Strategy", "Copywriting"] },
  { name: "Karan Malhotra", role: "Web & Tech Lead", icon: Code2, bio: "5+ years building premium websites and digital experiences that convert.", tags: ["Web Development", "UX/UI"] },
  { name: "Vivek Nair", role: "Account Manager", icon: Users, bio: "Ensures smooth communication and project success from start to finish.", tags: ["Client Success", "Project Mgmt"] },
];

const kpis = [
  { icon: Users, value: "12+", label: "Team Members" },
  { icon: Briefcase, value: "50+", label: "Projects Delivered" },
  { icon: Smile, value: "20+", label: "Industries Served" },
  { icon: Star, value: "5+", label: "Years Average Experience" },
];

export function Team() {
  return (
    <section id="team" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-5xl leading-[1.02] tracking-tight text-foreground md:text-6xl">
              Real people.
              <br />
              Real expertise. Real{" "}
              <span className="text-gradient italic">results.</span>
            </h2>
            <p className="mt-4 max-w-xl text-base text-muted-foreground">
              A passionate team of creators, strategists and marketers who live
              and breathe growth.
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-hairline bg-surface/40 px-4 py-3">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-brand-soft ring-1 ring-hairline">
              <Sparkles className="h-4 w-4 text-violet" />
            </div>
            <div className="text-sm text-muted-foreground">
              Different skills.
              <br />
              One shared mission — your growth.
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {team.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.article
                key={m.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                className="surface-card overflow-hidden rounded-3xl p-4"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(160deg, oklch(0.25 0.08 285) 0%, oklch(0.16 0.05 320) 50%, oklch(0.14 0.03 40) 100%)",
                    }}
                  />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="font-display text-6xl italic text-white/25">
                      {m.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                  </div>
                  <div className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-gradient-brand-soft ring-1 ring-white/20 backdrop-blur">
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="p-2 pt-4">
                  <h3 className="text-base font-semibold text-foreground">
                    {m.name}
                  </h3>
                  <div className="text-xs font-medium text-gradient">
                    {m.role}
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {m.bio}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {m.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-hairline bg-surface/60 px-2 py-0.5 text-[10px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* kpi bar */}
        <div className="surface-card mt-8 grid grid-cols-1 items-center gap-6 rounded-3xl p-6 md:grid-cols-[minmax(0,1fr)_auto] md:gap-8">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-brand-soft ring-1 ring-hairline">
              <Sparkles className="h-5 w-5 text-violet" />
            </div>
            <div>
              <div className="text-sm text-foreground">
                Creative minds. Strategic thinkers.
              </div>
              <div className="text-sm font-semibold text-gradient">
                Growth obsessed.
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {kpis.map((k) => {
              const Icon = k.icon;
              return (
                <div key={k.label} className="flex items-center gap-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-surface-elevated ring-1 ring-hairline">
                    <Icon className="h-4 w-4 text-magenta" />
                  </div>
                  <div>
                    <div className="font-display text-xl text-foreground">
                      {k.value}
                    </div>
                    <div className="text-[10px] text-muted-foreground">
                      {k.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
