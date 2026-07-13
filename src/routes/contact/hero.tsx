import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    // Full-screen section (100dvh) with minimal padding, seamless light/dark transition
    <section className="relative flex h-[100dvh] w-full items-center overflow-hidden bg-white text-black transition-colors duration-700 ease-in-out dark:bg-[#050505] dark:text-white">

      {/* --- BACKGROUND IMAGE & GRADIENT MASKS --- */}
      <div className="absolute inset-0 z-0">
        <img
          src="/contact.png"
          alt="Creative Team Collaboration"
          className="h-full w-full object-cover object-right lg:object-center"
        />

        {/* Horizontal Fade: Ensures text readability on the left while revealing the image on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 via-30% to-transparent to-70% dark:from-[#050505] dark:via-[#050505]/80 dark:to-transparent" />

        {/* Vertical Bottom Fade: Softens the bottom edge for a seamless transition into the next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/0 via-15% to-transparent dark:from-[#050505] dark:via-[#050505]/0" />

        {/* Mobile Darken Overlay: Ensures text pops on smaller screens where the image spans the full width */}
        <div className="absolute inset-0 bg-white/40 dark:bg-black/50 md:hidden" />
      </div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      {/* 1800px Max Width with extreme left/right positioning and minimal edge padding */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1800px] flex-col justify-center px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex w-full max-w-2xl flex-col pt-12 lg:max-w-3xl xl:max-w-[900px]"
        >
          {/* Eyebrow Tag */}
          <div className="mb-4 sm:mb-5">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E04D43] sm:text-xs">
              LET'S CREATE SOMETHING IMPACTFUL
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-sans text-[3.5rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[85px] xl:text-[96px]">
            Let's start <br />
            something <br />
            <span className="font-serif italic text-[#E04D43] font-normal">extraordinary.</span>
          </h1>

          {/* Subtext */}
          <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-800 dark:text-gray-300 sm:max-w-lg sm:text-base md:text-lg lg:max-w-xl">
            Great stories begin with great conversations. <br className="hidden sm:block" />
            Tell us about your project — let's bring your vision to life.
          </p>

          {/* CTA Button */}
          <div className="mt-8 flex sm:mt-10">
            <Link
              to="/contact"
              className="group flex items-center justify-center gap-2 rounded-xl bg-[#E04D43] px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#c93b32] sm:px-8 sm:py-4 sm:text-base shadow-lg shadow-[#E04D43]/20"
            >
              Start a Conversation
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2.5} />
            </Link>
          </div>
        </motion.div>

        {/* --- SCROLL INDICATOR (Bottom Left Alignment) --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-4 flex items-center gap-3 sm:left-6 lg:left-8"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 dark:border-white/20"
          >
            <ArrowDown className="h-4 w-4 text-gray-600 dark:text-gray-300" strokeWidth={1.5} />
          </motion.div>
          <span className="text-[11px] font-medium text-gray-600 dark:text-gray-300 sm:text-xs">
            Scroll to explore
          </span>
        </motion.div>

      </div>
    </section>
  );
}