import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  PlaySquare,
  Users,
  TrendingUp,
  Target
} from "lucide-react";

export function Hero() {
  // Removed local theme state and useEffect.
  // The Hero now listens to the global HTML class controlled by the NavBar.

  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-white text-black transition-colors duration-700 ease-in-out dark:bg-background dark:text-foreground"
    >
      {/* Removed the conflicting Theme Toggle Button block from here */}

      {/* --- Z-10: SEAMLESS BACKGROUND IMAGE (DESKTOP) --- */}
      <div className="absolute inset-y-0 right-0 z-0 hidden w-full md:block md:w-[85%] lg:w-[75%] xl:w-[70%]">

        {/* MASK IMAGE */}
        <div
          className="absolute inset-0 h-full w-full"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 100%)",
          }}
        >
          <img
            src="/home_hero.png"
            alt="Content Creation Workspace"
            className="h-full w-full object-cover object-right"
            loading="eager"
          />
          {/* Overlay transitioning smoothly */}
          <div className="absolute inset-0 bg-transparent transition-colors duration-700 ease-in-out dark:bg-background/20" />
        </div>

        {/* ADDITIONAL GRADIENTS: Blended much softer with global transition durations */}
        <div className="absolute inset-0 z-10 w-full bg-gradient-to-r from-white via-white/20 to-transparent transition-colors duration-700 ease-in-out dark:from-background dark:via-background/40" />
        <div className="absolute bottom-0 left-0 right-0 z-10 h-1/4 bg-gradient-to-t from-white via-white/80 to-transparent transition-colors duration-700 ease-in-out dark:from-background dark:via-background/80" />
      </div>

      {/* --- Z-30: MAIN HERO CONTENT (PULLED EXTREME LEFT) --- */}
      <div className="relative z-30 mx-auto flex min-h-screen w-full max-w-[1800px] flex-col justify-between px-6 pt-32 pb-4 sm:px-6 md:px-8 lg:px-12 md:pt-40 md:pb-6">

        {/* Top Text Block */}
        <div className="max-w-2xl text-left lg:max-w-[48rem]">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-sans text-[3.5rem] font-extrabold leading-[1.05] tracking-tight transition-colors duration-700 ease-in-out sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            We turn ideas <br />
            into content <br />
            that <span className="text-[#E04D43] transition-colors duration-700 ease-in-out">connects.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 max-w-[500px] text-base leading-relaxed text-gray-600 transition-colors duration-700 ease-in-out dark:text-gray-400 sm:text-lg lg:text-xl"
          >
            Video editing. Social media management. <br className="hidden sm:block" />
            Influencer collaborations. Performance marketing. <br className="hidden sm:block" />
            All working together to grow your brand.
          </motion.p>

          {/* Buttons & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-md border border-gray-300 bg-transparent px-8 py-4 text-sm font-medium text-black transition-all duration-700 ease-in-out hover:bg-gray-50 dark:border-white/20 dark:text-white dark:hover:bg-white/5"
            >
              View Our Work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-md bg-[#E04D43] px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-700 ease-in-out hover:bg-[#c94137]"
            >
              Book a Free Consultation
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          {/* Trusted By Block (Desktop Only) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 hidden items-center gap-4 md:flex"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-gray-200 transition-colors duration-700 ease-in-out dark:border-background dark:bg-surface-elevated"
                >
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt={`Client ${i}`}
                    className="h-full w-full object-cover grayscale transition-opacity duration-700"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-gray-500 transition-colors duration-700 ease-in-out dark:text-gray-400">
              Trusted by 100+ brands & businesses
            </p>
          </motion.div>

          {/* Mobile Image (Replaces Trusted By block on Mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative mt-10 block h-[35vh] w-full overflow-hidden rounded-xl md:hidden"
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-white via-transparent to-transparent transition-colors duration-700 ease-in-out dark:from-background" />
            <img
              src="/home_hero.png"
              alt="Content Creation Workspace"
              className="h-full w-full object-cover object-center"
              loading="eager"
            />
          </motion.div>
        </div>

        {/* --- Z-40: BOTTOM MATRIX --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 w-full pb-2 md:mt-16 md:pb-4"
        >
          {/* Dividers with synced theme transitions */}
          <div className="grid grid-cols-2 gap-8 divide-gray-200 transition-colors duration-700 ease-in-out dark:divide-white/10 md:grid-cols-4 md:gap-0 md:divide-x">

            {/* Stat 1 */}
            <div className="flex items-center gap-4 md:pr-8">
              <PlaySquare className="h-8 w-8 shrink-0 text-gray-400 transition-colors duration-700 ease-in-out dark:text-gray-500" strokeWidth={1.5} />
              <div>
                <h4 className="text-xl font-bold tracking-tight transition-colors duration-700 ease-in-out md:text-2xl">300+</h4>
                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-gray-500 transition-colors duration-700 ease-in-out dark:text-gray-400 sm:text-xs">Projects Delivered</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-4 md:px-8">
              <Users className="h-8 w-8 shrink-0 text-gray-400 transition-colors duration-700 ease-in-out dark:text-gray-500" strokeWidth={1.5} />
              <div>
                <h4 className="text-xl font-bold tracking-tight transition-colors duration-700 ease-in-out md:text-2xl">50M+</h4>
                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-gray-500 transition-colors duration-700 ease-in-out dark:text-gray-400 sm:text-xs">Views Generated</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-4 md:px-8">
              <TrendingUp className="h-8 w-8 shrink-0 text-gray-400 transition-colors duration-700 ease-in-out dark:text-gray-500" strokeWidth={1.5} />
              <div>
                <h4 className="text-xl font-bold tracking-tight transition-colors duration-700 ease-in-out md:text-2xl">100+</h4>
                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-gray-500 transition-colors duration-700 ease-in-out dark:text-gray-400 sm:text-xs">Happy Clients</p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-4 md:pl-8">
              <Target className="h-8 w-8 shrink-0 text-gray-400 transition-colors duration-700 ease-in-out dark:text-gray-500" strokeWidth={1.5} />
              <div>
                <h4 className="text-xl font-bold tracking-tight transition-colors duration-700 ease-in-out md:text-2xl">4x</h4>
                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-gray-500 transition-colors duration-700 ease-in-out dark:text-gray-400 sm:text-xs">Avg. Growth</p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}