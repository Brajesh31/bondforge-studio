import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowRight,
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
  TrendingUp
} from "lucide-react";

const services = [
  {
    title: "Reels & Shorts",
    desc: "Scroll-stopping short form content that gets views and engagement.",
    icon: Film,
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "YouTube Edits",
    desc: "Cinematic edits that keep audiences watching and coming back for more.",
    icon: Youtube,
    img: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Website Projects",
    desc: "Fast, modern and conversion focused websites that represent your brand.",
    icon: Globe,
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Campaign Videos",
    desc: "Powerful campaign videos that communicate your message and drive action.",
    icon: Video,
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Course Edits",
    desc: "Professional edits for coaches and educators to inspire and educate.",
    icon: GraduationCap,
    img: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Digital Marketing",
    desc: "Data-driven strategies and content that grow your brand and ROI.",
    icon: Megaphone,
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
];

const stats = [
  { icon: Eye, value: "250M+", label: "Views Generated" },
  { icon: Heart, value: "15M+", label: "Engagements" },
  { icon: Rocket, value: "500+", label: "Projects Delivered" },
  { icon: Globe2, value: "30+", label: "Countries Served" },
  { icon: TrendingUp, value: "4.9/5", label: "Client Rating" },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative flex w-full flex-col justify-center bg-white text-black transition-colors duration-700 ease-in-out dark:bg-background dark:text-foreground pt-8 pb-6 md:pt-10 md:pb-8"
    >
      {/* Maximum width 1800px, extreme left/right edges */}
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">

        {/* --- TOP HEADER ROW --- */}
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-stretch lg:gap-16">

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
              Solutions that create <br />
              content people <span className="italic text-[#E04D43] transition-colors duration-700 ease-in-out">can't skip.</span>
            </h2>
            <p className="mt-6 max-w-[580px] text-sm leading-relaxed text-gray-600 transition-colors duration-700 ease-in-out dark:text-gray-400 sm:text-base lg:text-lg">
              From eye-catching edits to full-scale campaigns, we handle everything so you can focus on growing your brand.
            </p>
          </motion.div>

          {/* Right Side: Info Box & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            // Center line removed, width preserved
            className="flex w-full shrink-0 flex-col justify-between gap-8 lg:w-[450px] xl:w-[540px] lg:py-2"
          >
            {/* 1 Line Added to the Top of the Right Side */}
            <div className="h-px w-full bg-gray-200 transition-colors duration-700 ease-in-out dark:bg-white/10" />

            {/* Strategy Info Block */}
            <div className="flex flex-col items-start gap-2 text-left">
              <div>
                <h4 className="text-base font-bold tracking-tight transition-colors duration-700 ease-in-out md:text-lg">
                  Strategy. Creativity. Performance.
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-gray-500 transition-colors duration-700 ease-in-out dark:text-gray-400 md:text-base">
                  We blend creative storytelling with data-driven strategies to deliver real results.
                </p>
              </div>
            </div>

            {/* CTA Buttons - Side by Side and perfectly pinned to bottom */}
            <div className="flex w-full flex-row items-center gap-3">
              <Link
                to="/services"
                className="group flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-transparent px-4 py-3.5 text-xs font-semibold text-black transition-all duration-700 ease-in-out hover:bg-gray-50 dark:border-white/20 dark:text-white dark:hover:bg-white/5 sm:px-6 sm:text-sm"
              >
                <span className="whitespace-nowrap">Explore All Services</span>
                <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/contact"
                className="group flex flex-1 items-center justify-center gap-2 rounded-lg bg-black px-4 py-3.5 text-xs font-semibold text-white shadow-lg transition-all duration-700 ease-in-out hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 sm:px-6 sm:text-sm"
              >
                <span className="whitespace-nowrap">Start a Project</span>
                <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>

        </div>

        {/* --- CARDS GRID (6 Columns) --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          // Top margin significantly reduced
          className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 lg:mt-10"
        >
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-[#0F0F11]"
            >
              {/* Image Area - Fixed minimal height */}
              <div className="relative h-[180px] w-full shrink-0 overflow-hidden sm:h-[200px]">
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 z-10 bg-black/10 transition-colors duration-700 ease-in-out dark:bg-black/40" />

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white pl-0.5 shadow-md transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-4 w-4 fill-[#E04D43] text-[#E04D43]" />
                  </div>
                </div>
              </div>

              {/* Content Area - Minimized Inner Padding */}
              <div className="flex flex-1 flex-col px-4 py-3 sm:px-5 sm:py-3.5">
                {/* Icon Box */}
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 transition-colors duration-700 ease-in-out dark:bg-[#E04D43]/10">
                  <service.icon className="h-4 w-4 text-[#E04D43] transition-colors duration-700 ease-in-out" strokeWidth={2} />
                </div>

                <h3 className="font-sans text-base font-bold tracking-tight text-black transition-colors duration-700 ease-in-out dark:text-white">
                  {service.title}
                </h3>

                <p className="mt-1.5 text-xs leading-relaxed text-gray-500 transition-colors duration-700 ease-in-out dark:text-gray-400">
                  {service.desc}
                </p>

                {/* Bottom Right Arrow */}
                <div className="mt-auto flex w-full justify-end pt-2">
                  <ArrowRight className="h-4 w-4 text-gray-400 transition-colors duration-300 group-hover:text-[#E04D43] dark:text-gray-500" />
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
          // Top margin reduced and top border removed completely
          className="mt-8 w-full transition-colors duration-700 ease-in-out lg:mt-10"
        >
          <div className="grid grid-cols-2 gap-y-8 divide-gray-200 transition-colors duration-700 ease-in-out dark:divide-white/10 md:grid-cols-3 lg:grid-cols-5 lg:divide-x">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-3 lg:justify-center ${idx !== 0 ? 'lg:pl-6' : ''}`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 transition-colors duration-700 ease-in-out dark:bg-[#E04D43]/10 md:h-12 md:w-12">
                  <stat.icon className="h-4 w-4 text-[#E04D43] transition-colors duration-700 ease-in-out md:h-5 md:w-5" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-lg font-bold tracking-tight transition-colors duration-700 ease-in-out md:text-xl lg:text-2xl">
                    {stat.value}
                  </h4>
                  <p className="mt-0.5 text-[10px] font-medium text-gray-500 transition-colors duration-700 ease-in-out dark:text-gray-400 sm:text-xs">
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