import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowDown } from "lucide-react";

const avatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
];

export function Hero() {
  return (
    <section className="relative flex h-[100dvh] min-h-[700px] w-full items-center overflow-hidden bg-white text-black transition-colors duration-700 ease-in-out dark:bg-[#050505] dark:text-white">

      {/* --- BACKGROUND IMAGE & GRADIENT MASKS --- */}
      <div className="absolute inset-0 z-0 flex justify-end">
        <div className="relative h-full w-full lg:w-[65%] xl:w-[70%]">
          <img
            src="/about.png"
            alt="Social Bond Studio"
            className="h-full w-full object-cover object-right"
          />

          {/* Horizontal Fade: Keeps text readable on the left, clear image on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 via-20% to-transparent to-50% dark:from-[#050505] dark:via-[#050505]/80 dark:to-transparent" />

          {/* UPDATED Vertical Fade: Restricted to the absolute bottom 10%.
              This stops the white from creeping up and washing out the bottom-right of the image. */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/0 via-10% to-transparent dark:from-[#050505] dark:via-[#050505]/0" />

          {/* UPDATED Mobile Overlay: Reduced from 50% to 30% to let more of the image shine through on phones */}
          <div className="absolute inset-0 bg-white/30 dark:bg-black/40 lg:hidden" />
        </div>
      </div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="relative z-10 mx-auto w-full max-w-[1800px] px-3 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex w-full max-w-2xl flex-col lg:max-w-3xl xl:max-w-[1000px]"
        >
          {/* Eyebrow */}
          <div className="mb-4 sm:mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E04D43] sm:text-xs md:text-sm">
              WE ARE SOCIAL BOND
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-sans text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[85px] xl:text-[96px]">
            We turn ideas <br className="hidden sm:block" />
            into content <br className="hidden sm:block" />
            that <span className="italic text-[#E04D43]">connects.</span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 max-w-md text-sm leading-relaxed text-gray-800 dark:text-gray-300 sm:max-w-lg sm:text-base md:text-lg lg:max-w-xl xl:text-xl">
            A creative studio powering brands and <br className="hidden sm:block" />
            influencers with content that drives impact.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6 lg:mt-10">
            <Link
              to="/contact"
              className="group flex items-center justify-center gap-2 rounded-xl bg-[#E04D43] px-6 py-4 text-sm font-bold text-white transition-all hover:bg-[#c93b32] sm:px-8 sm:text-base"
            >
              Book a Free Consultation
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2.5} />
            </Link>

            <Link
              to="/services"
              className="group flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white/50 px-6 py-4 text-sm font-bold text-black backdrop-blur-sm transition-all hover:border-gray-400 hover:bg-white dark:border-white/20 dark:bg-transparent dark:text-white dark:hover:border-white/40 dark:hover:bg-white/5 sm:px-8 sm:text-base"
            >
              View Our Work
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2.5} />
            </Link>
          </div>

          {/* Trust Badge */}
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6 lg:mt-12">
            <div className="flex -space-x-4">
              {avatars.map((url, idx) => (
                <img
                  key={idx}
                  src={url}
                  alt="Avatar"
                  className="h-10 w-10 rounded-full border-2 border-white object-cover dark:border-[#050505] sm:h-12 sm:w-12"
                />
              ))}
            </div>

            <div className="flex flex-col">
              <span className="text-xs font-medium text-gray-800 dark:text-gray-300 sm:text-sm">
                Trusted by 50+ brands
              </span>
              <div className="mt-1 flex items-center gap-2">
                <div className="flex gap-1 text-[#E04D43]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-3.5 w-3.5 fill-current sm:h-4 sm:w-4" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs font-bold text-black dark:text-white sm:text-sm">
                  4.9/5 rating
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* --- SCROLL INDICATOR --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[10px] text-gray-500 dark:text-gray-400 sm:text-xs">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 dark:border-gray-700"
        >
          <ArrowDown className="h-3 w-3 text-gray-500 dark:text-gray-400" />
        </motion.div>
      </motion.div>

    </section>
  );
}