import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import {
  TrendingUp,
  ArrowUpRight,
  Play,
  Film,
  Youtube,
  Globe,
  Video,
  GraduationCap,
  Megaphone,
  Eye,
  Heart,
  Rocket,
  Globe2,
  Star
} from "lucide-react";

const caseStudies = [
  {
    pill: "REELS & SHORTS",
    icon: Film,
    client: "Lifestyle Brand",
    title: "Viral Reels Campaign",
    // Changed image: Represents mobile content creation/reels
    img: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=800&auto=format&fit=crop",
    metrics: [
      { value: "3.2M+", label: "Views" },
      { value: "185K+", label: "Engagements" },
      { value: "310%", label: "Increase in Sales" },
    ]
  },
  {
    pill: "YOUTUBE EDITS",
    icon: Youtube,
    client: "Tech Creator",
    title: "YouTube Growth Boost",
    img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop",
    metrics: [
      { value: "12.4K", label: "Subscribers Before" },
      { value: "284K", label: "Subscribers After" },
      { value: "22X", label: "Growth" },
    ]
  },
  {
    pill: "WEBSITE PROJECT",
    icon: Globe,
    client: "SaaS Startup",
    title: "Website Redesign",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    metrics: [
      { value: "32%", label: "More Leads" },
      { value: "2.8X", label: "Lead Increase" },
      { value: "40%", label: "Lower Bounce Rate" },
    ]
  },
  {
    pill: "CAMPAIGN VIDEO",
    icon: Megaphone,
    client: "D2C Brand",
    title: "Product Launch Campaign",
    // Changed image: Represents a sleek product/D2C campaign launch
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
    metrics: [
      { value: "1.8M+", label: "Views" },
      { value: "4.6X", label: "Engagement" },
      { value: "270%", label: "ROI Increase" },
    ]
  },
  {
    pill: "COURSE EDITS",
    icon: GraduationCap,
    client: "EdTech Brand",
    title: "Course Promo Edits",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    metrics: [
      { value: "91%", label: "Completion Rate" },
      { value: "3.7X", label: "More Enrollments" },
      { value: "65%", label: "Higher Retention" },
    ]
  },
];

const bottomStats = [
  { icon: Eye, value: "250M+", label: "Views Generated" },
  { icon: Heart, value: "15M+", label: "Engagements" },
  { icon: Rocket, value: "500+", label: "Projects Delivered" },
  { icon: Globe2, value: "30+", label: "Countries Served" },
  { icon: Star, value: "4.9/5", label: "Client Rating" },
];

export function Industries() {
  return (
    <section
      id="industries"
      className="relative flex w-full flex-col justify-center bg-white text-black transition-colors duration-700 ease-in-out dark:bg-background dark:text-foreground py-12 md:py-16 lg:py-20"
    >
      {/* Maximum width 1800px, extreme left/right edges */}
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">

        {/* --- TOP HEADER ROW --- */}
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
              We create content that <br />
              drives <span className="italic text-[#E04D43] transition-colors duration-700 ease-in-out">real results.</span>
            </h2>
            <p className="mt-5 max-w-[580px] text-sm leading-relaxed text-gray-600 transition-colors duration-700 ease-in-out dark:text-gray-400 sm:text-base lg:text-lg">
              From boosting views to building brands, our work speaks for itself. <br className="hidden sm:block" />
              Here's a glimpse of the impact we've created.
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
                  <h4 className="text-sm font-bold tracking-tight transition-colors duration-700 ease-in-out md:text-base">
                    Strategy. Creativity. Performance.
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-gray-500 transition-colors duration-700 ease-in-out dark:text-gray-400 md:text-sm">
                    Data-driven content and campaigns that deliver measurable growth.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Side by Side */}
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

        {/* --- 5-COLUMN CARDS GRID --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:mt-12"
        >
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-[#0F0F11]"
            >
              {/* Image Area */}
              <div className="relative h-[180px] w-full shrink-0 overflow-hidden sm:h-[200px] xl:h-[220px]">
                <img
                  src={study.img}
                  alt={study.title}
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 z-10 bg-black/30 transition-colors duration-700 ease-in-out" />

                {/* Top Left Pill */}
                <div className="absolute left-3 top-3 z-20 rounded-md bg-black/60 px-2.5 py-1 backdrop-blur-md">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-white">
                    {study.pill}
                  </span>
                </div>

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white pl-0.5 shadow-md transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-4 w-4 fill-[#E04D43] text-[#E04D43]" />
                  </div>
                </div>
              </div>

              {/* Content Area - Minimized Inner Padding */}
              <div className="flex flex-1 flex-col p-4">

                {/* Header (Icon + Client + Title) */}
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 transition-colors duration-700 ease-in-out dark:bg-[#E04D43]/10">
                    <study.icon className="h-4 w-4 text-[#E04D43] transition-colors duration-700 ease-in-out" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-gray-500 transition-colors duration-700 ease-in-out dark:text-gray-400">
                      {study.client}
                    </p>
                    <h3 className="mt-0.5 font-sans text-sm font-bold tracking-tight text-black transition-colors duration-700 ease-in-out dark:text-white line-clamp-1">
                      {study.title}
                    </h3>
                  </div>
                </div>

                {/* Metrics 3-Column Grid */}
                <div className="mt-auto pt-4">
                  <div className="grid grid-cols-3 gap-2 border-t border-gray-100 pt-3 transition-colors duration-700 ease-in-out dark:border-white/10">
                    {study.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="flex flex-col">
                        <span className="text-xs font-bold text-black transition-colors duration-700 ease-in-out dark:text-white sm:text-sm">
                          {metric.value}
                        </span>
                        <span className="mt-0.5 text-[9px] leading-tight text-gray-500 transition-colors duration-700 ease-in-out dark:text-gray-400">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </motion.div>

        {/* --- BOTTOM STATS BAR ENHANCED --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex w-full flex-col gap-8 rounded-3xl bg-gray-50/80 p-6 transition-colors duration-700 ease-in-out dark:bg-white/5 lg:mt-12 lg:flex-row lg:items-center lg:p-8 xl:px-12"
        >
          {/* Left Text Block */}
          <div className="flex w-full shrink-0 flex-col text-left lg:w-1/4 xl:w-1/5">
            <div className="mb-3 h-1 w-8 rounded-full bg-[#E04D43]" />
            <h3 className="text-lg font-bold tracking-tight text-black transition-colors duration-700 ease-in-out dark:text-white md:text-xl">
              Numbers that <br className="hidden xl:block" /> reflect our impact
            </h3>
            <p className="mt-1 text-xs font-medium text-gray-500 transition-colors duration-700 ease-in-out dark:text-gray-400">
              Real results. Real growth.
            </p>
          </div>

          {/* Divider line for mobile */}
          <div className="h-px w-full bg-gray-200 dark:bg-white/10 lg:hidden" />

          {/* Stats Grid */}
          <div className="grid w-full grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:flex lg:w-3/4 lg:items-center lg:justify-between xl:w-4/5">
            {bottomStats.map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 transition-colors duration-700 ease-in-out dark:bg-[#E04D43]/10 md:h-12 md:w-12">
                  <stat.icon className="h-4 w-4 text-[#E04D43] transition-colors duration-700 ease-in-out md:h-5 md:w-5" strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-base font-bold tracking-tight text-black transition-colors duration-700 ease-in-out dark:text-white md:text-xl">
                    {stat.value}
                  </h4>
                  <p className="text-[10px] font-medium leading-tight text-gray-500 transition-colors duration-700 ease-in-out dark:text-gray-400 sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}