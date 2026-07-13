import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { Zap, ArrowRight, Calendar, Shield, LineChart } from "lucide-react";

export function CTA() {
  return (
    <section
      id="cta"
      className="relative flex w-full flex-col justify-center bg-white text-black transition-colors duration-700 ease-in-out dark:bg-[#050505] dark:text-white pt-6 pb-6 md:pt-8 md:pb-8"
    >
      {/* Maximum width 1800px, extreme left/right edges */}
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">

        {/* Main CTA Card Container */}
        <div className="relative flex w-full flex-col overflow-hidden rounded-[1.5rem] border border-gray-200 bg-gray-50 shadow-sm transition-colors duration-700 ease-in-out dark:border-white/10 dark:bg-[#0F0F11] dark:shadow-none sm:rounded-[2rem]">

          {/* Background Image Layer */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="/ctaa.png"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1542744094-24638ea0b3b5?q=80&w=1200&auto=format&fit=crop";
              }}
              alt="Social Bond Workspace"
              // INCREASED SIZE (lg:w-[85%]) and SHIFTED BACK to the right edge (lg:right-0)
              className="absolute -right-4 top-0 h-full w-[120%] object-cover object-left opacity-100 transition-transform duration-1000 hover:scale-105 dark:opacity-70 lg:right-0 lg:w-[85%] lg:object-center"
              loading="lazy"
            />
            {/*
              Responsive Fade Gradient:
              Ensures the text remains readable even with the larger image occupying more background space.
            */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-50/90 to-transparent transition-colors duration-700 ease-in-out dark:from-[#0F0F11] dark:via-[#0F0F11]/95 lg:bg-gradient-to-r lg:via-gray-50/70 dark:lg:via-[#0F0F11]/90" />
          </div>

          {/* Content Area - Z-index elevated above the image & fade, minimized inner padding */}
          <div className="relative z-10 flex w-full flex-col justify-center p-6 sm:p-10 lg:w-[65%] lg:p-12 xl:p-16">

            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#E04D43]/40 bg-[#E04D43]/5 px-3.5 py-1.5 transition-colors duration-700 ease-in-out dark:border-[#E04D43] dark:bg-transparent"
            >
              <Zap className="h-3 w-3 fill-[#E04D43] text-[#E04D43]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#E04D43] sm:text-xs">
                READY TO GROW?
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-sans text-4xl font-extrabold leading-[1.08] tracking-tight text-black transition-colors duration-700 ease-in-out dark:text-white sm:text-5xl lg:text-6xl"
            >
              Let's Create Content <br />
              That <span className="italic text-[#E04D43]">Drives Results.</span>
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 max-w-xl text-sm leading-relaxed text-gray-600 transition-colors duration-700 ease-in-out dark:text-gray-300 sm:text-base"
            >
              Whether you need scroll-stopping edits, a powerful brand presence, or a full-scale marketing strategy — we're ready to bring your vision to life.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
            >
              <Link
                to="/contact"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#E04D43] px-6 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#c93b32] sm:w-auto"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
              </Link>

              <Link
                to="/schedule"
                className="group flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-transparent px-6 py-4 text-sm font-bold text-black transition-all duration-300 hover:bg-gray-100 dark:border-white/20 dark:text-white dark:hover:bg-white/5 sm:w-auto"
              >
                <span>Schedule a Call</span>
                <Calendar className="h-4 w-4 text-gray-500 transition-colors duration-700 group-hover:text-black dark:text-gray-400 dark:group-hover:text-white" strokeWidth={2} />
              </Link>
            </motion.div>

            {/* Bottom Features Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-0 sm:divide-x sm:divide-gray-200 sm:dark:divide-white/10 lg:mt-16"
            >

              {/* Feature 1 */}
              <div className="flex flex-col items-start sm:pr-6 lg:pr-8">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#E04D43]/40 bg-[#E04D43]/10">
                  <Zap className="h-4 w-4 text-[#E04D43]" strokeWidth={2} />
                </div>
                <h4 className="text-sm font-bold text-black transition-colors duration-700 ease-in-out dark:text-white">
                  Fast Response
                </h4>
                <p className="mt-1 text-xs text-gray-500 transition-colors duration-700 ease-in-out dark:text-gray-400">
                  We reply within <br className="hidden sm:block" /> 24 hours.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-start sm:px-6 lg:px-8">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#E04D43]/40 bg-[#E04D43]/10">
                  <Shield className="h-4 w-4 text-[#E04D43]" strokeWidth={2} />
                </div>
                <h4 className="text-sm font-bold text-black transition-colors duration-700 ease-in-out dark:text-white">
                  No Commitment
                </h4>
                <p className="mt-1 text-xs text-gray-500 transition-colors duration-700 ease-in-out dark:text-gray-400">
                  Free consultation. <br className="hidden sm:block" /> No strings attached.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-start sm:pl-6 lg:pl-8">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#E04D43]/40 bg-[#E04D43]/10">
                  <LineChart className="h-4 w-4 text-[#E04D43]" strokeWidth={2} />
                </div>
                <h4 className="text-sm font-bold text-black transition-colors duration-700 ease-in-out dark:text-white">
                  Results Driven
                </h4>
                <p className="mt-1 text-xs text-gray-500 transition-colors duration-700 ease-in-out dark:text-gray-400">
                  Focused on growth <br className="hidden sm:block" /> that matters.
                </p>
              </div>

            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}