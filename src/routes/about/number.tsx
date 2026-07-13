import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Folder,
  Building2,
  Play,
  Globe,
  Users,
  Calendar,
  TrendingUp
} from "lucide-react";

const stats = [
  {
    icon: Folder,
    value: "250+",
    title: "Projects Delivered",
    desc: "Across industries and platforms",
  },
  {
    icon: Building2,
    value: "120+",
    title: "Brands Worked With",
    desc: "From startups to established names",
  },
  {
    icon: Play,
    value: "150M+",
    title: "Views Generated",
    desc: "Content that connects and performs",
  },
  {
    icon: Globe,
    value: "15+",
    title: "Countries Served",
    desc: "Global reach. Local understanding.",
  },
  {
    icon: Users,
    value: "05+",
    title: "Team Members",
    desc: "Specialists. Creators. Problem solvers.",
  },
  {
    icon: Calendar,
    value: "4+",
    title: "Years of Experience",
    desc: "Growing brands. Building trust.",
  },
];

const spotlights = [
  {
    title: "Ideas",
    subtitle: "that inspire",
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop",
    mobileOnly: false,
  },
  {
    title: "Editing",
    subtitle: "that connects",
    img: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format&fit=crop",
    mobileOnly: false,
  },
  {
    title: "Production",
    subtitle: "that stands out",
    img: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=800&auto=format&fit=crop",
    mobileOnly: false,
  },
  {
    title: "Strategy",
    subtitle: "that performs",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    mobileOnly: false,
  },
  {
    title: "Partnerships",
    subtitle: "that last",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop",
    mobileOnly: false,
  },
  {
    title: "Growth",
    subtitle: "that scales",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
    mobileOnly: true, // This option appears strictly on mobile
  },
];

export function NumberSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#FAFAFA] text-black transition-colors duration-700 ease-in-out dark:bg-[#050505] dark:text-white pt-10 pb-4 md:pt-14 md:pb-5">
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8 flex flex-col justify-between h-full min-h-[85vh] gap-8">

        {/* --- HEADER --- */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-sans text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[64px]">
              The work speaks. <br />
              The numbers <span className="font-serif text-[#E04D43] italic font-normal">prove it.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-md lg:mb-2 lg:max-w-xs xl:max-w-sm"
          >
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 font-medium">
              Every project, every edit, every campaign adds up to real impact for the brands we partner with.
            </p>
          </motion.div>
        </div>

        {/* --- STATS GRID --- */}
        <div className="grid grid-cols-2 gap-4 border-b border-gray-200/80 pb-6 dark:border-white/10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex flex-col items-start"
            >
              <item.icon className="h-6 w-6 text-[#E04D43]" strokeWidth={1.5} />
              <span className="font-sans text-4xl font-extrabold tracking-tight text-black dark:text-white md:text-[54px] lg:text-[58px] leading-none mt-2">
                {item.value}
              </span>
              <h4 className="mt-2 font-sans text-[14px] font-bold tracking-tight text-black dark:text-white">
                {item.title}
              </h4>
              <p className="mt-0.5 text-[12px] leading-tight text-gray-500 dark:text-gray-400">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* --- SPOTLIGHT IMAGES --- */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 lg:gap-4">
          {spotlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`group relative overflow-hidden rounded-[20px] aspect-[4/4.2] bg-black shadow-sm ${
                item.mobileOnly ? "block sm:hidden" : "block"
              }`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 dark:opacity-80"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-sans text-[15px] font-bold tracking-tight leading-none">
                  {item.title}
                </p>
                <p className="text-[12px] font-normal text-gray-300 mt-1 leading-none">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- BOTTOM RIBBON --- */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-start justify-between gap-4 rounded-[20px] border border-gray-200/60 bg-[#F4F4F4] p-4 dark:border-white/5 dark:bg-[#0D0D0D] sm:flex-row sm:items-center lg:px-6 lg:py-4 shadow-sm"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black dark:bg-white shadow-inner">
              <TrendingUp className="h-5 w-5 text-[#E04D43]" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <h4 className="text-[15px] font-bold leading-tight text-black dark:text-white sm:text-base">
                Real people. Real process. <br />
                <span className="text-[#E04D43]">Real results.</span>
              </h4>
            </div>
          </div>

          <div className="hidden text-[13px] font-medium leading-relaxed text-gray-500 dark:text-gray-400 sm:block max-w-xs">
            We don't chase numbers. <br />
            We create them.
          </div>

          <div className="flex w-full shrink-0 justify-start sm:w-auto lg:justify-end">
            <Link
              to="/contact"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-black px-5 py-3 text-[13px] font-bold text-white transition-all hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 sm:w-auto"
            >
              Let's Create Your Numbers
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2.5} />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}