// deliver.tsx
import { motion } from "framer-motion";
import {
  Clapperboard,
  Youtube,
  Zap,
  Mic,
  Megaphone,
  Video,
  Layers,
  MonitorSmartphone,
  PenTool,
  LayoutGrid
} from "lucide-react";

// --- DATA ---
const deliverablesData = [
  {
    title: "Instagram Reels",
    desc: "Short-form. Big impact.",
    icon: Clapperboard,
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "YouTube Videos",
    desc: "Long-form storytelling.",
    icon: Youtube,
    img: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "YouTube Shorts",
    desc: "Quick content. More reach.",
    icon: Zap,
    img: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Podcasts",
    desc: "Conversations that build trust.",
    icon: Mic,
    img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Ads",
    desc: "Scroll-stopping campaigns.",
    icon: Megaphone,
    img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Product Videos",
    desc: "Showcase. Inspire. Convert.",
    icon: Video,
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Motion Graphics",
    desc: "Dynamic visuals that engage.",
    icon: Layers,
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Landing Pages",
    desc: "Designed to convert.",
    icon: MonitorSmartphone,
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Brand Kits",
    desc: "Consistent. Professional. Memorable.",
    icon: PenTool,
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Social Media Content",
    desc: "Planned. Designed. Delivered.",
    icon: LayoutGrid,
    img: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=600&auto=format&fit=crop"
  }
];

export function Deliverables() {
  return (
    // Reduced bottom padding (pb-2 md:pb-2) to bring the section tighter to whatever is below it
    <section className="relative w-full overflow-hidden bg-[#FAFAFA] text-black transition-colors duration-700 ease-in-out dark:bg-[#050505] dark:text-white pt-6 pb-2 md:pt-8 md:pb-2">

      {/* 1800px Max Width with extreme edge positioning */}
      <div className="mx-auto w-full max-w-[1800px] px-2 sm:px-4 lg:px-4 flex flex-col gap-5">

        {/* --- HEADER --- */}
        <div className="flex flex-col items-center justify-center text-center pb-2 md:pb-4">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-sans text-[32px] font-extrabold tracking-tight sm:text-4xl md:text-[48px] leading-tight"
          >
            Content that connects. <span className="font-serif italic text-[#E04D43] font-normal">Results that last.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-[14px] font-medium text-gray-600 dark:text-gray-400 sm:text-[15px]"
          >
            From scroll-stopping videos to complete brand ecosystems.
          </motion.p>
        </div>

        {/* --- 5x2 CARDS GRID --- */}
        {/* Forces 5 columns on desktop, tight 12px (gap-3) spacing */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-3 xl:gap-4">
          {deliverablesData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group flex flex-col overflow-hidden rounded-[16px] bg-white border border-gray-200 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-white/5 dark:bg-[#0A0A0A] dark:shadow-none"
            >
              {/* Image Area - Height increased significantly to eliminate blank space and create taller cards */}
              <div className="relative h-[220px] sm:h-[250px] xl:h-[280px] w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/5 dark:bg-black/20" />
              </div>

              {/* Text Content Area - Highly minimized padding to keep the bottom tight */}
              <div className="flex flex-1 items-start gap-2.5 p-3 sm:p-3.5">
                {/* Icon */}
                <item.icon
                  className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#E04D43]"
                  strokeWidth={2}
                />

                {/* Text Block */}
                <div className="flex flex-col">
                  <h3 className="font-sans text-[14px] font-bold tracking-tight text-black dark:text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[11px] font-medium leading-snug text-gray-500 dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}