import { motion } from "motion/react";
import {
  Users,
  Zap,
  Lightbulb,
  RefreshCw,
  Infinity,
  LineChart
} from "lucide-react";

const features = [
  {
    title: "Dedicated Team",
    desc: "A handpicked team that works like an extension of your own.",
    icon: Users,
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Fast Delivery",
    desc: "We respect your time. Quick turnarounds, without compromising on quality.",
    icon: Zap,
    // FIXED: Updated broken image link to a high-quality, relevant tech/workspace image
    img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Creative Strategy",
    desc: "It's not just about content. We craft strategies that drive real impact.",
    icon: Lightbulb,
    img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Transparent Workflow",
    desc: "Clear communication at every step. You're always in the loop.",
    icon: RefreshCw,
    img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Unlimited Collaboration",
    desc: "Your vision, our execution. We collaborate until it's perfect.",
    icon: Infinity,
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Performance Focused",
    desc: "We don't just create content, we deliver measurable results.",
    icon: LineChart,
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  }
];

export function Brands() {
  return (
    <section
      id="brands"
      // Added min-h-[100dvh] (full screen) and flex-centered to make it take up the whole screen beautifully
      className="relative flex min-h-[100dvh] w-full flex-col justify-center bg-white text-black transition-colors duration-700 ease-in-out dark:bg-[#050505] dark:text-white pt-12 pb-10 md:pt-16 md:pb-14"
    >
      {/* Maximum width 1800px, extreme left/right edges */}
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">

        {/* --- HEADER --- */}
        <div className="flex flex-col items-center justify-center text-center pb-10 lg:pb-14">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-sans text-3xl font-extrabold tracking-tight transition-colors duration-700 ease-in-out sm:text-4xl md:text-[3rem] lg:text-[3.5rem] leading-tight"
          >
            More than a service. <span className="italic text-[#E04D43] transition-colors duration-700 ease-in-out">A true partnership.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-sm font-medium text-gray-600 transition-colors duration-700 ease-in-out dark:text-gray-400 sm:text-base lg:text-lg"
          >
            We go beyond deliverables to become a growth partner you can rely on.
          </motion.p>
        </div>

        {/* --- 3x2 GRID --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          // Gap remains tight to keep layout clean, scaling up proportionally
          className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 lg:gap-6"
        >
          {features.map((feature, idx) => (
            <div
              key={idx}
              // INCREASED CARD HEIGHT (sm:h-[300px], xl:h-[340px]) for a bolder, more spacious look
              className="group flex flex-col sm:flex-row h-auto sm:h-[300px] xl:h-[340px] overflow-hidden rounded-[1.25rem] border border-gray-200 bg-gray-50 shadow-sm transition-all duration-700 ease-in-out hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-[#0F0F11] dark:shadow-none dark:hover:border-white/20"
            >

              {/* Left Side: Content Box (50%) */}
              <div className="flex w-full sm:w-1/2 flex-col justify-center p-6 lg:p-8 xl:p-10">
                {/* Circular Icon with distinct red stroke */}
                <div className="mb-6 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#E04D43]/40 bg-[#E04D43]/5 transition-colors duration-700 ease-in-out dark:border-[#E04D43]/60 dark:bg-transparent lg:h-14 lg:w-14">
                  <feature.icon className="h-6 w-6 text-[#E04D43]" strokeWidth={1.5} />
                </div>

                <h3 className="font-sans text-base font-bold tracking-tight text-black transition-colors duration-700 ease-in-out dark:text-white md:text-lg">
                  {feature.title}
                </h3>

                <p className="mt-2.5 text-xs leading-relaxed text-gray-500 transition-colors duration-700 ease-in-out dark:text-gray-400 md:text-sm">
                  {feature.desc}
                </p>
              </div>

              {/* Right Side: Image Box (50%) - Mobile height increased as well */}
              <div className="relative h-[240px] w-full shrink-0 overflow-hidden sm:h-full sm:w-1/2">
                <img
                  src={feature.img}
                  alt={feature.title}
                  // Image reacts to hover and adapts opacity based on theme
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105 dark:opacity-80 dark:group-hover:opacity-100"
                  loading="lazy"
                />
                {/* Subtle overlay to seamlessly blend the image with the card aesthetic */}
                <div className="absolute inset-0 z-10 bg-black/5 transition-colors duration-700 ease-in-out dark:bg-black/40" />
              </div>

            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}