import { motion } from "framer-motion";
import {
  MessageSquare,
  Search,
  Lightbulb,
  Clapperboard,
  Rocket,
  BarChart3,
  LineChart
} from "lucide-react";

// --- DATA ---
const processData = [
  {
    num: "01",
    title: "Discovery",
    desc: "We learn about your brand, goals, and audience.",
    icon: MessageSquare,
    // FIXED: Updated broken image link to a reliable, contextually relevant brainstorming/planning image
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop"
  },
  {
    num: "02",
    title: "Research",
    desc: "We dive deep into insights and competitive analysis.",
    icon: Search,
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
  },
  {
    num: "03",
    title: "Strategy",
    desc: "We craft a data-driven strategy tailored to you.",
    icon: Lightbulb,
    img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=600&auto=format&fit=crop"
  },
  {
    num: "04",
    title: "Production",
    desc: "We create content that captures attention.",
    icon: Clapperboard,
    img: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=600&auto=format&fit=crop"
  },
  {
    num: "05",
    title: "Launch",
    desc: "We publish and promote across the right channels.",
    icon: Rocket,
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
  },
  {
    num: "06",
    title: "Optimize",
    desc: "We analyze, learn, and optimize for better results.",
    icon: BarChart3,
    img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=600&auto=format&fit=crop"
  }
];

export function Flow() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAFAFA] text-black transition-colors duration-700 ease-in-out dark:bg-[#050505] dark:text-white pt-8 pb-12 lg:pt-12 lg:pb-[100px]">

      {/* 1800px Max Width pushed to extreme left/right edges */}
      <div className="mx-auto w-full max-w-[1800px] px-2 sm:px-4 lg:px-4 flex flex-col gap-8">

        {/* --- HEADER --- */}
        <div className="flex flex-col items-center justify-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-sans text-[32px] font-extrabold tracking-tight sm:text-4xl md:text-[48px] leading-tight"
          >
            A proven process. <span className="font-serif italic text-[#E04D43] font-normal">Powerful results.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-[14px] font-medium text-gray-600 dark:text-gray-400 sm:text-[15px]"
          >
            From strategy to scale, we handle everything so you can focus on growth.
          </motion.p>
        </div>

        {/* --- PROCESS GRID --- */}
        <div className="relative mt-4 grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-6 lg:gap-0">

          {processData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`relative flex flex-col items-center text-center px-4 ${
                idx < 5 ? "lg:border-r border-gray-200 dark:border-white/10" : ""
              }`}
            >

              {/* --- TOP CONNECTING LINE (Desktop Only) --- */}
              {idx < 5 && (
                <div className="hidden lg:block absolute top-[15px] left-[50%] w-[100%] h-[1.5px] bg-[#E04D43] z-0">
                  <div className="absolute right-0 top-[-3.5px] w-2 h-2 border-t-[1.5px] border-r-[1.5px] border-[#E04D43] rotate-45" />
                </div>
              )}

              {/* Number Node */}
              <div className="relative z-10 flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#E04D43] text-white shadow-sm">
                <span className="text-[13px] font-bold">{item.num}</span>
              </div>

              {/* Icon Box */}
              <div className="mt-6 flex h-[48px] w-[48px] items-center justify-center rounded-[12px] border border-[#E04D43] bg-transparent">
                <item.icon className="h-5 w-5 text-black dark:text-white" strokeWidth={1.5} />
              </div>

              {/* Text Content */}
              <h3 className="mt-4 font-sans text-[16px] font-bold tracking-tight text-black dark:text-white leading-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-[13px] font-medium leading-relaxed text-gray-500 dark:text-gray-400 max-w-[220px]">
                {item.desc}
              </p>

              {/* Image Area */}
              <div className="mt-6 w-full">
                <div className="relative aspect-square md:aspect-[4/3] lg:aspect-[3/4] w-full overflow-hidden rounded-[8px] bg-black shadow-sm">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover opacity-80 transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

            </motion.div>
          ))}

          {/* --- BOTTOM FEEDBACK LOOP (Desktop Only) --- */}
          <div className="hidden lg:block absolute bottom-[-50px] left-[8.333%] right-[8.333%] h-[50px]">
            <div className="absolute left-0 top-0 h-full w-[1.5px] bg-[#E04D43]" />
            <div className="absolute left-0 right-0 bottom-0 h-[1.5px] bg-[#E04D43]" />
            <div className="absolute right-0 top-0 h-full w-[1.5px] bg-[#E04D43]">
              <div className="absolute top-0 left-[-3px] w-2 h-2 border-t-[1.5px] border-l-[1.5px] border-[#E04D43] rotate-45" />
            </div>

            <div className="absolute bottom-[-22px] left-1/2 -translate-x-1/2 bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 rounded-full px-5 py-2.5 flex items-center gap-3 shadow-md whitespace-nowrap">
              <div className="flex items-center justify-center w-7 h-7 rounded-full border border-[#E04D43] bg-red-50 dark:bg-red-500/10 shrink-0">
                <LineChart className="h-[14px] w-[14px] text-[#E04D43]" strokeWidth={2} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[12px] font-bold text-black dark:text-white leading-tight">
                  Continuous improvement is in our DNA.
                </span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400 leading-tight mt-0.5">
                  We test, measure, and refine — so your brand always stays ahead.
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}