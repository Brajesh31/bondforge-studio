import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import {
  MessageSquare,
  Lightbulb,
  Edit3,
  Send,
  LineChart,
  Trophy,
  Calendar,
  ArrowUpRight
} from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "We understand your brand, goals and target audience.",
    icon: MessageSquare,
    img: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800&auto=format&fit=crop",
  },
  {
    num: "02",
    title: "Strategize",
    desc: "We plan the right content strategy tailored to your brand and goals.",
    icon: Lightbulb,
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
  },
  {
    num: "03",
    title: "Create",
    desc: "Our team creates high-quality content that captures attention.",
    icon: Edit3,
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
  },
  {
    num: "04",
    title: "Deliver",
    desc: "We deliver on time, optimized for every platform that matters.",
    icon: Send,
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
  },
  {
    num: "05",
    title: "Analyze",
    desc: "We track performance and gather insights that drive growth.",
    icon: LineChart,
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    num: "06",
    title: "Scale",
    desc: "We optimize and scale what works to maximize your results.",
    icon: Trophy,
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  },
];

const avatars = [
  "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
];

export function Process() {
  return (
    <section
      id="process"
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
            <h2 className="font-sans text-4xl font-extrabold leading-[1.08] tracking-tight transition-colors duration-700 ease-in-out sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:whitespace-nowrap">
              Simple process. <br />
              <span className="italic">Powerful</span> <span className="italic text-[#E04D43] transition-colors duration-700 ease-in-out">results.</span>
            </h2>
            <p className="mt-6 max-w-[580px] text-sm leading-relaxed text-gray-600 transition-colors duration-700 ease-in-out dark:text-gray-400 sm:text-base lg:text-lg">
              We keep it transparent, collaborative and <br className="hidden sm:block" />
              focused on what truly matters — your growth.
            </p>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex w-full shrink-0 flex-col justify-between gap-8 lg:w-[450px] xl:w-[540px] lg:py-2"
          >
            {/* Top Line */}
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

            {/* CTA Buttons - Side by Side */}
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

        {/* --- 6-STEP TIMELINE BLOCK --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 w-full rounded-[1.5rem] border border-gray-200 bg-white shadow-sm p-4 transition-colors duration-700 ease-in-out dark:border-white/10 dark:bg-[#0F0F11] dark:shadow-none sm:p-5 lg:mt-10 xl:p-6"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-4">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col group">

                {/* 1. Image Block - Fixed Opacity and Fade */}
                <div className="relative h-[120px] w-full overflow-hidden rounded-xl sm:h-[140px] xl:h-[130px] 2xl:h-[150px]">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle dark overlay for perfect blending without washing out the image */}
                  <div className="absolute inset-0 z-10 bg-black/5 transition-colors duration-700 ease-in-out dark:bg-black/40" />
                </div>

                {/* 2. Timeline Connector Row */}
                <div className="relative flex items-center justify-center py-6 sm:py-8">
                  {/* The continuous red line */}
                  <div className="absolute left-0 right-0 top-1/2 h-[1px] -translate-y-1/2 bg-[#E04D43]/30" />

                  {/* The Circular Icon Node */}
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md transition-colors duration-500 group-hover:border-[#E04D43] group-hover:bg-red-50 dark:border-[#E04D43]/40 dark:bg-[#0F0F11] dark:shadow-[0_0_15px_rgba(224,77,67,0.15)] dark:group-hover:bg-[#E04D43]/10">
                    <step.icon className="h-5 w-5 text-[#E04D43]" strokeWidth={1.5} />
                  </div>
                </div>

                {/* 3. Text Content */}
                <div className="flex flex-col px-2 text-left">
                  <span className="font-mono text-[10px] font-medium tracking-widest text-[#E04D43] sm:text-xs">
                    {step.num}
                  </span>
                  <h3 className="mt-1 font-sans text-sm font-bold text-black transition-colors duration-700 ease-in-out dark:text-white sm:text-base">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-gray-500 transition-colors duration-700 ease-in-out dark:text-gray-400">
                    {step.desc}
                  </p>

                  {/* Small red dash */}
                  <div className="mt-4 h-[2px] w-5 rounded-full bg-[#E04D43]/70 transition-all duration-300 group-hover:w-8" />
                </div>

              </div>
            ))}
          </div>
        </motion.div>

        {/* --- BOTTOM CTA RIBBON --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex w-full flex-col justify-between gap-6 rounded-3xl border border-gray-200 bg-gray-50 p-6 transition-colors duration-700 ease-in-out dark:border-[#E04D43]/20 dark:bg-gradient-to-r dark:from-[#0F0F11] dark:via-[#160808] dark:to-[#3A0A0A] lg:mt-10 lg:flex-row lg:items-center lg:px-10 lg:py-8"
        >
          {/* Left Side: Text */}
          <div className="flex w-full flex-col text-left lg:max-w-[500px]">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#E04D43]" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#E04D43] sm:text-xs">
                Ready to grow together?
              </span>
            </div>

            <h3 className="mt-2 text-2xl font-bold tracking-tight text-black transition-colors duration-700 ease-in-out dark:text-white md:text-3xl lg:text-3xl lg:leading-[1.1]">
              Let's create content that <br className="hidden lg:block" />
              <span className="italic text-[#E04D43]">connects</span> and <span className="italic text-[#E04D43]">converts.</span>
            </h3>

            <p className="mt-2 text-xs font-medium text-gray-600 transition-colors duration-700 ease-in-out dark:text-gray-300 sm:text-sm">
              Book a free consultation call and let's talk about your goals.
            </p>
          </div>

          {/* Right Side: Buttons & Avatars */}
          <div className="flex w-full flex-col items-start gap-4 lg:w-auto lg:items-end">

            {/* CTA Buttons - Side by Side */}
            <div className="flex w-full flex-wrap items-center gap-3 lg:w-auto lg:flex-nowrap">
              <Link
                to="/contact"
                className="group flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#E04D43] px-5 py-3.5 text-xs font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#c93b32] sm:text-sm lg:flex-none"
              >
                <Calendar className="h-4 w-4" strokeWidth={2.5} />
                <span className="whitespace-nowrap">Book Free Consultation</span>
                <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <Link
                to="/case-studies"
                className="group flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-300 bg-transparent px-5 py-3.5 text-xs font-bold text-black transition-all duration-300 hover:bg-gray-100 dark:border-white/20 dark:text-white dark:hover:bg-white/5 sm:text-sm lg:flex-none"
              >
                <span className="whitespace-nowrap">View Our Work</span>
                <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Social Proof (Avatars) */}
            <div className="flex flex-row items-center gap-3 pt-1">
              <div className="flex -space-x-3">
                {avatars.map((url, idx) => (
                  <img
                    key={idx}
                    src={url}
                    alt="Brand Avatar"
                    className="h-7 w-7 rounded-full border-2 border-white object-cover transition-colors duration-700 ease-in-out dark:border-[#3A0A0A] sm:h-8 sm:w-8"
                  />
                ))}
              </div>
              <p className="text-[10px] font-medium text-gray-600 transition-colors duration-700 ease-in-out dark:text-gray-300 sm:text-xs">
                50+ brands already growing <br className="hidden sm:block" />
                with Social Bond
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}