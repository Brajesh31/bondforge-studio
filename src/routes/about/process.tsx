import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  MessageSquare,
  Lightbulb,
  PenTool,
  Video,
  Send,
  BarChart2,
  Users,
  Clock,
  Target,
  TrendingUp,
  Award,
  FileText,
  Rocket,
  ArrowRight
} from "lucide-react";

// --- DATA ---
const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "We learn about your brand, goals, audience, and challenges.",
    icon: MessageSquare,
  },
  {
    num: "02",
    title: "Strategy",
    desc: "We craft a custom strategy tailored to your objectives and market.",
    icon: Lightbulb,
  },
  {
    num: "03",
    title: "Plan & Create",
    desc: "Our team brings ideas to life with creativity, precision, and purpose.",
    icon: PenTool,
  },
  {
    num: "04",
    title: "Produce",
    desc: "We produce high-quality content and campaign assets that stand out.",
    icon: Video,
  },
  {
    num: "05",
    title: "Launch",
    desc: "We launch, promote, and position your content for impact.",
    icon: Send,
  },
  {
    num: "06",
    title: "Analyze & Optimize",
    desc: "We track performance, measure results, and continuously optimize.",
    icon: BarChart2,
  },
];

const stats = [
  { value: "48h", label: "Avg. First Response", icon: Clock },
  { value: "95%", label: "Client Retention", icon: Target },
  { value: "2.5x", label: "Avg. Growth Impact", icon: TrendingUp },
  { value: "100%", label: "Commitment", icon: Award },
];

const ctaFeatures = [
  {
    title: "Free Consultation",
    desc: "Let's discuss your goals and explore possibilities.",
    icon: MessageSquare,
  },
  {
    title: "Custom Proposal",
    desc: "We'll create a tailored plan that fits your needs.",
    icon: FileText,
  },
  {
    title: "Start Your Project",
    desc: "Kick off with confidence. We'll handle the rest.",
    icon: Rocket,
  },
];

export function Process() {
  return (
    // Section padding remains untouched as requested
    <section className="relative w-full overflow-hidden bg-[#FAFAFA] text-black transition-colors duration-700 ease-in-out dark:bg-[#050505] dark:text-white pt-4 pb-4 md:pt-6 md:pb-6">

      {/* 1800px Max Width with extreme left/right positioning.
          Gaps increased from 4/6 to 6/8 to expand vertical space */}
      <div className="mx-auto w-full max-w-[1800px] px-2 sm:px-4 lg:px-6 flex flex-col gap-6 lg:gap-8">

        {/* --- TOP ROW: PROCESS & HERO IMAGE SPLIT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Left Column (Spans 8 cols): Headers, Timeline, Stats */}
          {/* Gap increased to 8 to add more breathing room and height */}
          <div className="flex flex-col justify-between gap-8 lg:col-span-8">

            {/* Header Area */}
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between pt-2">
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="font-sans text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[64px]"
              >
                A simple process. <br />
                Powerful <span className="font-serif italic text-[#E04D43] font-normal">results.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="max-w-xs text-[13px] leading-relaxed text-gray-600 dark:text-gray-400 font-medium sm:text-sm lg:max-w-sm xl:max-w-md lg:pr-8"
              >
                We keep things clear, collaborative, and focused on results at every step.
              </motion.p>
            </div>

            {/* Timeline Cards Row */}
            <div className="relative mt-3">
              {/* Dotted connecting line */}
              <div className="absolute top-[32px] left-[8%] right-[8%] hidden h-px border-t-[2px] border-dashed border-[#E04D43]/30 md:block z-0" />

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-3">
                {steps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    // Inner padding increased to stretch the height
                    className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left bg-white dark:bg-[#0A0A0A] rounded-[16px] px-4 py-5 lg:py-6 shadow-sm border border-gray-100 dark:border-white/5"
                  >
                    {/* Icon Node */}
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black mb-5 mx-auto lg:mx-0 shadow-md">
                      <step.icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                    {/* Number */}
                    <span className="font-sans text-[13px] font-bold text-[#E04D43]">
                      {step.num}
                    </span>
                    {/* Title */}
                    <h3 className="mt-1 font-sans text-[15px] font-bold tracking-tight text-black dark:text-white">
                      {step.title}
                    </h3>
                    {/* Description */}
                    <p className="mt-2 text-[11px] leading-relaxed text-gray-500 dark:text-gray-400">
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Stats & Trust Banner Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-5 mt-2 lg:flex-row lg:items-stretch lg:justify-between"
            >
              {/* Left Info Box */}
              {/* Padding increased to p-5 lg:p-6 */}
              <div className="flex w-full items-center gap-4 rounded-[16px] border border-gray-200 bg-white p-5 shadow-sm dark:border-white/5 dark:bg-[#0A0A0A] lg:w-[45%] lg:p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
                  <Users className="h-5 w-5" strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-[13px] font-bold text-black dark:text-white leading-tight">
                    Collaborative. Transparent. Results-Driven.
                  </h4>
                  <p className="mt-1 text-[11px] text-gray-500 dark:text-gray-400 leading-snug">
                    You're involved at every step. We communicate, adapt and deliver with clarity.
                  </p>
                </div>
              </div>

              {/* Right Stats Block */}
              {/* Padding increased to p-5 lg:px-8 lg:py-6 */}
              <div className="flex w-full flex-wrap items-center justify-between gap-4 rounded-[16px] border border-gray-200 bg-white p-5 shadow-sm dark:border-white/5 dark:bg-[#0A0A0A] lg:w-[53%] lg:px-8 lg:py-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col items-center lg:items-start">
                    <stat.icon className="mb-2 h-5 w-5 text-[#E04D43]" strokeWidth={2} />
                    <span className="font-sans text-2xl font-bold tracking-tight text-black dark:text-white sm:text-3xl">
                      {stat.value}
                    </span>
                    <span className="mt-0.5 text-[10px] font-medium text-gray-500 dark:text-gray-400">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Column (Spans 4 cols): Large Studio Image */}
          {/* Because the left column is now physically taller, this h-full image container will naturally stretch to match it */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block lg:col-span-4 h-full"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-black shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=1200&auto=format&fit=crop"
                alt="Studio Editor"
                className="h-full w-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-12 right-12 text-right">
                <span className="font-sans text-xl font-bold text-white uppercase tracking-widest drop-shadow-lg opacity-80">
                  Social <br/> Bond
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- BOTTOM CTA BLOCK (Hardcoded Dark for high contrast) --- */}
        {/* Padding increased from p-6 to p-8 lg:px-10 lg:py-10 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-2 flex w-full flex-col justify-between gap-8 rounded-[20px] bg-[#0A0A0A] p-8 text-white shadow-xl lg:flex-row lg:items-center lg:px-10 lg:py-10"
        >
          {/* CTA Left: Headline */}
          <div className="flex flex-col lg:max-w-md">
            <div className="mb-2 flex items-center gap-2">
              <div className="h-1.5 w-1.5 rotate-45 bg-[#E04D43]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#E04D43]">
                READY TO GET STARTED?
              </span>
            </div>
            <h3 className="font-sans text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Let's create something <br />
              <span className="font-serif italic text-[#E04D43] font-normal">amazing together.</span>
            </h3>
          </div>

          {/* CTA Middle: Features */}
          <div className="flex flex-col gap-6 sm:flex-row lg:gap-8 border-t border-white/10 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            {ctaFeatures.map((item, idx) => (
              <div key={idx} className="flex flex-col max-w-[160px]">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10">
                  <item.icon className="h-4 w-4 text-white" strokeWidth={1.5} />
                </div>
                <h4 className="text-[13px] font-bold text-white">{item.title}</h4>
                <p className="mt-1.5 text-[11px] leading-relaxed text-gray-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Right: Button */}
          <div className="flex flex-col items-start lg:items-end justify-center lg:pl-8 border-t border-white/10 pt-6 lg:border-t-0 lg:pt-0">
            <Link
              to="/contact"
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#E04D43] px-7 py-4 text-[14px] font-bold text-white transition-all hover:bg-[#c93b32] shadow-lg shadow-[#E04D43]/20"
            >
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
            </Link>
            <span className="mt-3 text-[10px] text-gray-400 w-full text-center lg:text-right">
              No commitments. Just possibilities.
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}