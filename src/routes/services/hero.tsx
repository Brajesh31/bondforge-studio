import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    // Full-screen section (100dvh) with minimal padding, seamless light/dark transition
    <section className="relative flex h-[100dvh] min-h-[650px] w-full items-center overflow-hidden bg-white text-black transition-colors duration-700 ease-in-out dark:bg-[#050505] dark:text-white">

      {/* --- BACKGROUND IMAGE & GRADIENT MASKS --- */}
      <div className="absolute inset-0 z-0">
        <img
          src="/services.png"
          alt="Our Services"
          className="h-full w-full object-cover object-right lg:object-center"
        />

        {/* Horizontal Fade: Reduced white opacity and made it fade out faster in light mode */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 via-25% to-transparent to-60% dark:from-[#050505] dark:via-[#050505]/85 dark:to-transparent" />

        {/* Vertical Bottom Fade: Reduced the solid white to just 30% opacity so the bottom image stays clear */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent dark:from-[#050505] dark:via-[#050505]/0" />

        {/* Mobile Darken Overlay: Lessened the white washout effect on smaller screens */}
        <div className="absolute inset-0 bg-white/20 dark:bg-black/60 md:hidden" />
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
          <div className="mb-5 flex items-center gap-4 sm:mb-6">
            <div className="h-[2px] w-10 bg-[#E04D43]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E04D43] sm:text-xs">
              OUR SERVICES
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-sans text-[3.5rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[85px] xl:text-[96px]">
            Content <br className="hidden sm:block" />
            that connects. <br />
            <span className="font-serif italic text-[#E04D43] font-normal">Results that last.</span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-gray-800 dark:text-gray-300 sm:max-w-lg sm:text-base md:text-lg lg:max-w-xl">
            From stunning edits to powerful campaigns, we create content that engages, converts, and builds lasting impact.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10">
            <button
              onClick={() => {
                window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
              }}
              className="group flex items-center justify-center gap-2 rounded-lg bg-[#E04D43] px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#c93b32] sm:px-8 sm:py-4 sm:text-[15px] shadow-lg shadow-[#E04D43]/20"
            >
              Explore Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
            </button>
            <Link
              to="/free-consultation"
              className="group flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white/50 backdrop-blur-md px-7 py-3.5 text-sm font-bold text-black transition-all hover:bg-white dark:border-white/20 dark:bg-[#050505]/50 dark:text-white dark:hover:bg-[#050505] sm:px-8 sm:py-4 sm:text-[15px]"
            >
              Book Free Consultation
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}