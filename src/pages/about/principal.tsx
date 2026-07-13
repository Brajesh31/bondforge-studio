import { motion } from "framer-motion";
import { Diamond, Target, BarChart2, Users, Zap } from "lucide-react";

const principles = [
  {
    icon: Diamond,
    title: "Quality over quantity.",
    desc: "We focus on creating fewer things, but making them exceptional.",
    img: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: Target,
    title: "Strategy before creativity.",
    desc: "Every piece of content starts with a plan, not just a creative idea.",
    img: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: BarChart2,
    title: "Data drives decisions.",
    desc: "We let insights shape our content, not assumptions or trends.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: Users,
    title: "Long-term partnerships.",
    desc: "We grow when our clients grow. Your success is our success.",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: Zap,
    title: "Fast execution. No excuses.",
    desc: "We move fast, stay agile and deliver with consistency.",
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600&auto=format&fit=crop",
  },
];

export function Principal() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAFAFA] text-black transition-colors duration-700 ease-in-out dark:bg-[#050505] dark:text-white pt-10 pb-6 md:pt-16 md:pb-10 lg:pt-20 lg:pb-12">

      {/* Max width 1800px with extreme minimal edge padding */}
      <div className="mx-auto w-full max-w-[1800px] px-2 sm:px-4 lg:px-6">

        {/* --- HEADER --- */}
        <div className="flex flex-col justify-between gap-10 pb-8 lg:flex-row lg:items-end lg:gap-16 lg:pb-12">

          {/* Left: Headlines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-1 flex-col"
          >
            <h2 className="font-sans text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[72px]">
              How we think. <br />
              How we work. <br />
              <span className="italic text-[#E04D43]">Why</span> it works.
            </h2>
          </motion.div>

          {/* Right: Subtext (Updated to match other sections) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex w-full shrink-0 flex-col justify-end gap-6 lg:w-[450px] xl:w-[500px] lg:pb-2"
          >
            {/* Top Border Line */}
            <div className="h-px w-full bg-gray-200 transition-colors duration-700 ease-in-out dark:bg-white/10" />

            {/* Strategy Info Block */}
            <div className="flex flex-col items-start gap-2 text-left">
              <h4 className="text-base font-bold tracking-tight text-black transition-colors duration-700 ease-in-out dark:text-white md:text-lg">
                More than just words.
              </h4>
              <p className="mt-1 text-sm leading-relaxed text-gray-500 transition-colors duration-700 ease-in-out dark:text-gray-400 md:text-base">
                These aren't just values on a wall. They guide every decision, every edit, and every strategy we deliver.
              </p>
            </div>
          </motion.div>

        </div>

        {/* --- CARDS GRID --- */}
        {/* 5 columns on large screens, snapping to the edges */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {principles.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex h-full flex-col overflow-hidden rounded-[24px] bg-white p-3 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-md dark:bg-[#0F0F11] dark:shadow-none sm:p-4"
            >
              {/* Top Content Area */}
              <div className="flex flex-1 flex-col px-2 pb-6 pt-4 sm:px-3">

                {/* Circular Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-transparent transition-colors dark:border-white/10">
                  <item.icon className="h-6 w-6 text-black dark:text-white" strokeWidth={1.5} />
                </div>

                {/* Red Dash */}
                <div className="mt-6 h-[2px] w-6 bg-[#E04D43]" />

                {/* Title */}
                <h3 className="mt-4 font-sans text-xl font-bold leading-snug tracking-tight text-black dark:text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-[13px] leading-relaxed text-gray-500 dark:text-gray-400 sm:text-sm">
                  {item.desc}
                </p>

              </div>

              {/* Bottom Image Area (Inset framing) */}
              <div className="relative mt-auto aspect-[4/5] w-full overflow-hidden rounded-[16px] sm:aspect-[4/5] xl:h-[300px]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 transition-colors duration-700 dark:bg-black/30" />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}