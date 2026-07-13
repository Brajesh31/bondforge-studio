import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import {
  User,
  ShoppingBag,
  TrendingUp,
  Home,
  Dumbbell,
  GraduationCap,
  Star,
  RefreshCw,
  MessageSquare,
  Globe2,
  ArrowRight,
  ArrowUpRight
} from "lucide-react";

const brands = [
  {
    title: "Creators & Influencers",
    desc: "Helping creators stand out and monetize their content.",
    icon: User,
    img: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "E-commerce Brands",
    desc: "High-converting content that drives clicks and sales.",
    icon: ShoppingBag,
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Startups & SaaS",
    desc: "Explainer videos and branding that simplify and scale.",
    icon: TrendingUp,
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Real Estate & Construction",
    desc: "Showcasing properties and projects that build trust.",
    icon: Home,
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Health & Fitness",
    desc: "Motivating content that inspires action.",
    icon: Dumbbell,
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Education & Courses",
    desc: "Professional edits that educate and engage.",
    icon: GraduationCap,
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
  },
];

const bottomStats = [
  {
    icon: Star,
    value: "4.9/5",
    label: "Average Client Rating",
    subtext: "Stars"
  },
  {
    icon: RefreshCw,
    value: "91%",
    label: "Client Retention Rate",
    subtext: "Long-term partnerships"
  },
  {
    icon: MessageSquare,
    value: "100+",
    label: "Testimonials",
    subtext: "From happy clients"
  },
  {
    icon: Globe2,
    value: "30+",
    label: "Countries Reached",
    subtext: "Global impact"
  },
];

export function Who() {
  return (
    <section
      id="who"
      // Responsive Light/Dark background with minimal padding
      className="relative flex w-full flex-col justify-center bg-white text-black transition-colors duration-700 ease-in-out dark:bg-[#050505] dark:text-white py-10 md:py-14"
    >
      {/* Maximum width 1800px, extreme left/right edges */}
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">

        {/* --- TOP HEADER ROW --- */}
        {/* items-stretch forces both columns to perfectly share height */}
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-stretch lg:gap-16">

          {/* Left Side: Headlines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-1 flex-col justify-center max-w-[1100px]"
          >
            {/* Heading forced to 2 lines with whitespace-nowrap on large screens */}
            <h2 className="font-sans text-4xl font-extrabold leading-[1.08] tracking-tight transition-colors duration-700 ease-in-out sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:whitespace-nowrap">
              Different brands. <br />
              One <span className="italic text-[#E04D43] transition-colors duration-700 ease-in-out">common goal.</span>
            </h2>
            <p className="mt-6 max-w-[580px] text-sm leading-relaxed text-gray-600 transition-colors duration-700 ease-in-out dark:text-gray-400 sm:text-base lg:text-lg">
              We collaborate with creators, startups, and established brands across industries to tell their story and achieve real growth.
            </p>
          </motion.div>

          {/* Right Side: Info Box & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex w-full shrink-0 flex-col justify-between gap-8 lg:w-[450px] xl:w-[500px] lg:py-2"
          >
            {/* Top Border Line */}
            <div className="flex flex-col gap-6">
              <div className="h-px w-full bg-gray-200 transition-colors duration-700 ease-in-out dark:bg-white/10" />

              {/* Strategy Info Block */}
              <div className="flex items-start gap-4 text-left">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 transition-colors duration-700 ease-in-out dark:bg-[#E04D43]/10">
                  <TrendingUp className="h-4 w-4 text-[#E04D43]" strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-tight text-black transition-colors duration-700 ease-in-out dark:text-white md:text-base">
                    Strategy. Creativity. Performance.
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-gray-500 transition-colors duration-700 ease-in-out dark:text-gray-400 md:text-sm">
                    Data-driven content and campaigns that deliver measurable growth.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Side by Side and perfectly pinned to bottom */}
            <div className="mt-auto flex w-full flex-row items-center gap-3">
              <Link
                to="/case-studies"
                className="group flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-gray-300 bg-transparent px-3 py-3.5 text-xs font-semibold text-black transition-all duration-700 ease-in-out hover:bg-gray-50 dark:border-white/20 dark:text-white dark:hover:bg-white/5 sm:text-sm"
              >
                <span className="whitespace-nowrap">View All Case Studies</span>
                <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/contact"
                className="group flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-black px-3 py-3.5 text-xs font-semibold text-white shadow-lg transition-all duration-700 ease-in-out hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 sm:text-sm"
              >
                <span className="whitespace-nowrap">Start a Project</span>
                <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>

        </div>

        {/* --- 6-COLUMN CARDS GRID --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 md:mt-12"
        >
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-700 ease-in-out hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-[#0F0F11] dark:shadow-none dark:hover:border-white/20"
            >
              {/* Image Area - Opacity restored to full, using subtle dark overlay */}
              <div className="relative h-[160px] w-full shrink-0 overflow-hidden sm:h-[180px]">
                <img
                  src={brand.img}
                  alt={brand.title}
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Clean dark overlay adapting to Light/Dark modes, avoiding washed-out white gradients */}
                <div className="absolute inset-0 z-10 bg-black/5 transition-colors duration-700 ease-in-out dark:bg-black/40" />

                {/* Circular Icon Over Image */}
                <div className="absolute bottom-3 left-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/90 backdrop-blur-md transition-colors duration-700 ease-in-out dark:border-white/20 dark:bg-black/50">
                  <brand.icon className="h-4 w-4 text-gray-700 transition-colors duration-700 ease-in-out dark:text-white" strokeWidth={2} />
                </div>
              </div>

              {/* Content Area - Minimized Inner Padding */}
              <div className="flex flex-1 flex-col px-4 pb-4 pt-1">
                <h3 className="font-sans text-sm font-bold tracking-tight text-black transition-colors duration-700 ease-in-out dark:text-white md:text-base">
                  {brand.title}
                </h3>

                <p className="mt-1.5 text-xs leading-relaxed text-gray-500 transition-colors duration-700 ease-in-out dark:text-gray-400">
                  {brand.desc}
                </p>

                {/* Bottom Red Arrow */}
                <div className="mt-auto flex w-full justify-start pt-4">
                  <ArrowRight className="h-4 w-4 text-[#E04D43] transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* --- BOTTOM STATS BAR --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          // Soft gray background in light mode to pop against white, solid white in dark mode
          className="mt-10 flex w-full flex-col gap-8 rounded-[2rem] border border-gray-200 bg-gray-50 p-8 text-black transition-colors duration-700 ease-in-out dark:border-transparent dark:bg-white lg:mt-12 lg:flex-row lg:items-center lg:p-10 xl:px-12"
        >
          {/* Left Text Block */}
          <div className="flex w-full shrink-0 flex-col text-left lg:w-1/4 xl:w-1/5">
            <div className="mb-4 h-1 w-8 rounded-full bg-[#E04D43]" />
            <h3 className="text-xl font-bold tracking-tight text-black md:text-2xl">
              Trusted by brands <br className="hidden xl:block" />
              that value <span className="italic text-[#E04D43]">results.</span>
            </h3>
            <p className="mt-2 text-xs font-medium text-gray-500 sm:text-sm">
              Our clients stay with us because we deliver what matters.
            </p>
          </div>

          {/* Vertical Divider (Desktop) */}
          <div className="hidden h-24 w-px bg-gray-200 transition-colors duration-700 ease-in-out lg:block" />

          {/* Horizontal Divider (Mobile) */}
          <div className="h-px w-full bg-gray-200 transition-colors duration-700 ease-in-out lg:hidden" />

          {/* Stats Grid */}
          <div className="grid w-full grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 lg:flex-1 lg:justify-between lg:pl-6">
            {bottomStats.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-red-50 md:h-12 md:w-12">
                  <stat.icon className="h-5 w-5 text-[#E04D43]" strokeWidth={2} />
                </div>

                <h4 className="text-2xl font-bold tracking-tight text-black md:text-3xl">
                  {stat.value}
                </h4>
                <p className="mt-0.5 text-[10px] font-semibold text-gray-800 sm:text-xs">
                  {stat.label}
                </p>

                {/* Special rendering for Stars vs Text */}
                {idx === 0 ? (
                  <div className="mt-1.5 flex items-center justify-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-[#E04D43] text-[#E04D43]" />
                    ))}
                  </div>
                ) : (
                  <p className="mt-1 text-[9px] text-gray-500 sm:text-[10px]">
                    {stat.subtext}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}