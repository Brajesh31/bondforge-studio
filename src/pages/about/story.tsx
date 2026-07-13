import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Lightbulb, Target, Rocket } from "lucide-react";

const timelineData = [
  {
    num: "01",
    title: "Why We Started",
    desc: "We saw brands and creators struggling to stand out in a noisy world. Great stories were there, but they weren't being told the right way.",
    icon: Lightbulb,
  },
  {
    num: "02",
    title: "The Problem We Solve",
    desc: "Most content looks good but doesn't connect. We combine creativity, strategy, and data to create content that actually performs.",
    icon: Target,
  },
  {
    num: "03",
    title: "Our Mission Today",
    desc: "To build meaningful connections between brands and people through content that inspires, engages, and delivers real results.",
    icon: Rocket,
  },
];

export function Story() {
  return (
    <section className="relative w-full overflow-hidden bg-white text-black transition-colors duration-700 ease-in-out dark:bg-[#050505] dark:text-white pt-6 md:pt-8">
      {/* Maximum width 1800px, extreme left/right edges, minimal padding */}
      <div className="mx-auto w-full max-w-[1800px] px-2 sm:px-4 lg:px-6">

        {/* --- TOP HALF: SPLIT LAYOUT --- */}
        <div className="flex flex-col items-center justify-between gap-6 pb-6 lg:flex-row lg:items-center lg:gap-4 lg:pb-8 xl:pb-10">

          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex w-full max-w-2xl flex-col lg:w-[45%]"
          >
            {/* Headline */}
            <h2 className="font-sans text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[72px] xl:text-[84px]">
              Built on passion. <br />
              Driven by <span className="italic text-[#E04D43]">purpose.</span>
            </h2>

            <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:mt-6 sm:text-lg lg:max-w-md xl:max-w-lg xl:text-xl">
              Social Bond was founded with a simple belief — great content has the power to connect, influence, and change the game.
            </p>

            <div className="mt-8 flex sm:mt-10">
              <Link
                to="/about"
                className="group flex items-center justify-center gap-2 rounded-xl bg-black px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 sm:px-8 sm:text-base"
              >
                Our Journey So Far
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2.5} />
              </Link>
            </div>
          </motion.div>

          {/* Right: Image Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex w-full justify-center lg:w-[55%] lg:justify-end"
          >
            {/* Decorative Dot Pattern Background */}
            <div className="absolute -right-4 top-1/2 -z-10 h-48 w-48 -translate-y-1/2 opacity-30 dark:opacity-10"
                 style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '16px 16px' }}
            />
            <div className="absolute -right-4 top-1/2 -z-10 h-48 w-48 -translate-y-1/2 opacity-0 dark:opacity-20"
                 style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '16px 16px' }}
            />

            {/* Adjusted max-width and aspect ratio (16/9) to reduce overall height by ~15% */}
            <div className="relative w-full max-w-[650px] aspect-[16/9]">
              {/* Main Background Image (Studio) */}
              <div className="absolute bottom-0 left-0 h-[85%] w-[75%] overflow-hidden rounded-2xl border border-gray-200 shadow-xl dark:border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=1200&auto=format&fit=crop"
                  alt="Studio Production"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>

              {/* Top Right Overlapping Image (Monitor/Editing) */}
              <div className="absolute right-0 top-0 h-[55%] w-[45%] overflow-hidden rounded-2xl border-[6px] border-white bg-black shadow-2xl dark:border-[#050505]">
                <img
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format&fit=crop"
                  alt="Editing Setup"
                  className="h-full w-full object-cover opacity-90"
                />
              </div>

              {/* Bottom Right Overlapping Image (Camera/Lens) */}
              <div className="absolute bottom-0 right-[10%] h-[40%] w-[35%] overflow-hidden rounded-2xl border-[6px] border-white bg-black shadow-2xl dark:border-[#050505]">
                <img
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop"
                  alt="Camera Gear"
                  className="h-full w-full object-cover opacity-90"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* --- BOTTOM HALF: DARK BLOCK --- */}
      <div className="w-full bg-[#0a0a0a] px-2 py-8 sm:px-4 lg:px-6 lg:py-12">
        <div className="mx-auto w-full max-w-[1800px]">

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">

            {/* Left Column: Timeline (Spans 8 columns) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative lg:col-span-8 lg:pr-8 xl:pr-12"
            >
              {/* Horizontal Line connecting nodes (Desktop) */}
              <div className="absolute left-[10%] right-[10%] top-[24px] hidden h-px bg-gray-800 md:block" />

              {/* Vertical Line connecting nodes (Mobile) */}
              <div className="absolute bottom-12 left-[24px] top-[24px] block w-px bg-gray-800 md:hidden" />

              <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
                {timelineData.map((item, idx) => (
                  <div key={idx} className="relative z-10 flex flex-col md:items-center md:text-center">

                    {/* Node Icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-800 bg-[#0a0a0a] md:mx-auto">
                      <item.icon className="h-5 w-5 text-[#E04D43]" strokeWidth={2} />
                    </div>

                    {/* Node Content */}
                    <div className="mt-4 flex flex-col pl-16 md:mt-6 md:pl-0">
                      <span className="font-sans text-[11px] font-bold text-[#E04D43] md:text-xs">
                        {item.num}
                      </span>
                      <h4 className="mt-1 text-lg font-bold tracking-tight text-white md:text-xl">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-gray-400 md:text-sm md:leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Quote (Spans 4 columns) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col border-t border-gray-800 pt-8 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 xl:pl-14"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500">
                OUR BELIEF
              </span>

              {/* Red Quote Marks */}
              <span className="mt-2 font-serif text-5xl leading-none text-[#E04D43] sm:mt-4">
                “
              </span>

              <p className="mt-1 font-sans text-xl font-medium leading-snug text-white sm:text-2xl md:text-3xl">
                Content is not just what we create, it's how we build lasting connections.
              </p>

              {/* Signature Font */}
              <span className="mt-4 font-serif text-3xl italic text-gray-300 sm:text-4xl">
                Social Bond Team
              </span>
            </motion.div>

          </div>
        </div>
      </div>

    </section>
  );
}