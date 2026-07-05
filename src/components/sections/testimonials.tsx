import { motion } from "motion/react";
import { Play, Star, Heart, ArrowUpRight, MessageCircle, Users, Globe } from "lucide-react";
import podcast from "@/assets/showreel-podcast.jpg";
import creator from "@/assets/showreel-creator.jpg";
import editor from "@/assets/work-editor.jpg";
import analytics from "@/assets/showreel-analytics.jpg";

const videoTestimonials = [
  { src: podcast, name: "Aman Jaiswal", role: "Content Creator", length: "0:45", initials: "AJ" },
  { src: creator, name: "Riya Bansal", role: "Fitness Coach", length: "0:52", initials: "RB" },
  { src: analytics, name: "SaaSify", role: "Co-Founder", length: "0:48", initials: "S" },
  { src: editor, name: "House of Threads", role: "E-Commerce Brand", length: "0:46", initials: "H" },
];

const written = [
  {
    stars: 5,
    body: "Social Bond completely transformed our content game. The quality, consistency and creativity — everything is next level.",
    name: "boAt Lifestyle",
    role: "Brand Team",
  },
  {
    stars: 5,
    body: "Their edits don't just look good, they perform. Our engagement increased massively after working with their team.",
    name: "HubSpot",
    role: "Marketing Lead",
  },
  {
    stars: 4.9,
    body: "Super professional, fast delivery and great communication. They truly understand what creators need.",
    name: "Rishabh J.",
    role: "YouTuber",
  },
  {
    stars: 5,
    body: "From strategy to content to execution — everything was handled like pros. Highly recommend!",
    name: "GrowthPlug",
    role: "Growth Marketer",
  },
  {
    stars: 5,
    body: "We saw a 3x increase in reach within a month. Their digital marketing approach really works.",
    name: "SkinQ",
    role: "E-Commerce Brand",
  },
];

const kpis = [
  { icon: Star, value: "4.9/5", label: "Average Rating" },
  { icon: Users, value: "150+", label: "Happy Clients" },
  { icon: MessageCircle, value: "300+", label: "Reviews" },
  { icon: Globe, value: "27+", label: "Countries Served" },
];

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-5xl leading-[1.02] tracking-tight text-foreground md:text-6xl">
              Don't just take
              <br />
              our <span className="text-gradient italic">word</span> for it.
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Real stories. Real results. Real people.
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-hairline bg-surface/40 px-4 py-3">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-brand-soft ring-1 ring-hairline">
              <Heart className="h-4 w-4 text-magenta" />
            </div>
            <div className="text-sm text-muted-foreground">
              Loved by creators and brands
              <br />
              across the globe.
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/40 px-3.5 py-1.5 text-xs text-foreground">
            <Play className="h-3 w-3 fill-current text-violet" />
            Client Video Testimonials
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-surface/40 px-3.5 py-1.5 text-xs text-foreground hover:bg-surface-elevated"
          >
            View all testimonials <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>

        {/* video row */}
        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {videoTestimonials.map((v, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative aspect-[16/11] overflow-hidden rounded-2xl"
            >
              <img src={v.src} alt={v.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <button aria-label="Play" className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/95 shadow-glow">
                <Play className="ml-0.5 h-4 w-4 fill-violet text-violet" />
              </button>
              <figcaption className="absolute inset-x-3 bottom-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="grid h-7 w-7 place-items-center rounded-full bg-gradient-brand text-[10px] font-bold text-white ring-1 ring-white/30">
                    {v.initials}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">{v.name}</div>
                    <div className="text-[10px] text-white/70">{v.role}</div>
                  </div>
                </div>
                <span className="rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-medium text-white ring-1 ring-white/20">
                  {v.length}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Written */}
        <div className="mt-10 flex items-center gap-2 rounded-full border border-hairline bg-surface/40 px-3.5 py-1.5 text-xs text-foreground w-fit">
          <MessageCircle className="h-3 w-3 text-violet" />
          What our clients say
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-5">
          {written.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="surface-card flex flex-col rounded-3xl p-5"
            >
              <div className="flex items-center gap-1 text-coral">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-3.5 w-3.5 fill-current" />
                ))}
                <span className="ml-1 text-xs font-semibold text-foreground">{t.stars}</span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/85">
                "{t.body}"
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-hairline pt-4">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-brand text-[10px] font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-semibold text-foreground">{t.name}</div>
                  <div className="text-[10px] text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* kpi bar */}
        <div className="surface-card mt-8 grid grid-cols-2 gap-4 rounded-3xl p-6 md:grid-cols-4">
          {kpis.map((k) => {
            const Icon = k.icon;
            return (
              <div key={k.label} className="flex items-center gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-brand-soft ring-1 ring-hairline">
                  <Icon className="h-5 w-5 text-violet" />
                </div>
                <div>
                  <div className="font-display text-2xl text-foreground">{k.value}</div>
                  <div className="text-xs text-muted-foreground">{k.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
