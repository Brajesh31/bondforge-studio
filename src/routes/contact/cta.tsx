import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Calendar, ArrowRight, PlayCircle, Zap, Users, ShieldCheck } from "lucide-react";

// --- DATA ---
const features = [
  {
    icon: Zap,
    title: "Fast Response",
    desc: "Within 24 hours",
  },
  {
    icon: Users,
    title: "Tailored Solutions",
    desc: "Built for your brand",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Partner",
    desc: "Your success matters",
  },
];

const brands = [
  { name: "Salesforce", style: "font-sans font-bold tracking-tight lowercase" },
  { name: "Microsoft Azure", style: "font-sans font-semibold tracking-wide" },
  { name: "AWS", style: "font-sans font-black italic tracking-widest uppercase" },
  { name: "Reskilll", style: "font-serif font-bold tracking-widest uppercase" },
  { name: "TYT", style: "font-sans font-extrabold tracking-wide" },
  { name: "FitFuel", style: "font-sans font-black italic tracking-wider uppercase" },
  { name: "Urban Edge", style: "font-sans font-bold tracking-tight uppercase" },
  { name: "Nexora", style: "font-sans font-semibold tracking-widest uppercase" },
];

export function CTASection() {
  return (
    // Minimal section padding, handles light/dark background seamlessly
    <section className="relative flex min-h-[85dvh] w-full flex-col justify-center overflow-hidden bg-white text-black transition-colors duration-700 ease-in-out dark:bg-[#050505] dark:text-white pt-4 pb-4 md:pt-6 md:pb-6">

      {/* --- BACKGROUND IMAGE & GRADIENT MASKS --- */}
      <div className="absolute inset-0 z-0">
        <img
          src="/cta.png"
          alt="Creative Team"
          className="h-full w-full object-cover object-right lg:object-center"
        />

        {/* Horizontal Fade: Ensures text readability on the left while revealing the image on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 via-30% to-transparent to-80% dark:from-[#050505] dark:via-[#050505]/90 dark:to-transparent" />

        {/* Vertical Bottom Fade: Smooth blending at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/0 via-20% to-transparent dark:from-[#050505] dark:via-[#050505]/0" />

        {/* Mobile Overlay: Darkens the image on small screens for text contrast */}
        <div className="absolute inset-0 bg-white/60 dark:bg-black/70 md:hidden" />
      </div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      {/* 1800px Max Width with extreme left/right positioning and minimal padding */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1800px] flex-col justify-between px-2 sm:px-4 lg:px-6">

        {/* Top Content (Headings & Buttons) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex w-full max-w-2xl flex-col pt-8 lg:max-w-3xl xl:max-w-[900px] lg:pt-16"
        >
          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-4">
            <div className="h-[2px] w-10 bg-[#E04D43]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E04D43] sm:text-xs">
              READY TO GET STARTED?
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-sans text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[80px]">
            Let's build content <br className="hidden sm:block" />
            people <span className="font-serif italic text-[#E04D43] font-normal">remember.</span>
          </h2>

          {/* Subtext */}
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-gray-800 dark:text-gray-300 sm:max-w-lg sm:text-base md:text-lg">
            Have a project in mind? Let's turn your ideas into powerful content that connects and converts.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10">
            <Link
              to="/contact"
              className="group flex items-center justify-center gap-2 rounded-lg bg-[#E04D43] px-6 py-4 text-[15px] font-bold text-white transition-all hover:bg-[#c93b32] shadow-lg shadow-[#E04D43]/20"
            >
              <Calendar className="h-5 w-5" strokeWidth={2} />
              Book Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
            </Link>

            <Link
              to="/services"
              className="group flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white/50 backdrop-blur-md px-6 py-4 text-[15px] font-bold text-black transition-all hover:bg-white dark:border-white/20 dark:bg-[#050505]/50 dark:text-white dark:hover:bg-[#050505]"
            >
              <PlayCircle className="h-5 w-5 transition-transform group-hover:scale-110" strokeWidth={2} />
              View Our Work
            </Link>
          </div>

          {/* Features / Trust Badges */}
          <div className="mt-12 flex flex-wrap items-center gap-6 sm:gap-10 lg:mt-16">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                  <feature.icon className="h-5 w-5 text-[#E04D43]" strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] font-bold text-black dark:text-white">
                    {feature.title}
                  </span>
                  <span className="text-[11px] text-gray-600 dark:text-gray-400">
                    {feature.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Banner (Logos) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex w-full flex-col items-center justify-center rounded-[20px] bg-[#FAFAFA] border border-gray-200 py-8 px-4 dark:bg-[#0A0A0A] dark:border-white/5 lg:mt-16 lg:py-10"
        >
          <span className="select-none text-[13px] font-medium text-gray-500 dark:text-gray-400">
            Trusted by brands and creators worldwide
          </span>

          {/* Logo Stream */}
          <div className="mt-6 flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-4 md:gap-x-8 lg:justify-between lg:px-8">
            {brands.map((brand, idx) => (
              <div key={idx} className="flex items-center gap-6 md:gap-8">
                <span className={`select-none text-sm text-gray-400 dark:text-gray-500 md:text-base lg:text-lg opacity-80 ${brand.style}`}>
                  {brand.name}
                </span>
                {/* Vertical Divider (Except for last item) */}
                {idx !== brands.length - 1 && (
                  <div className="hidden h-5 w-px bg-gray-300 dark:bg-white/10 lg:block" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}