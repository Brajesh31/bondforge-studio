import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Video,
  PlaySquare,
  BarChart2,
  Megaphone,
  Mic,
  Layers,
  PenTool,
  Globe
} from "lucide-react";

const capabilities = [
  {
    title: "Video Editing",
    desc: "Cinematic cuts. Clean edits. Stories that stick.",
    icon: Video,
    img: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Short Form Content",
    desc: "Scroll-stopping reels that engage and convert.",
    icon: PlaySquare,
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Social Media Management",
    desc: "Strategy, content, engagement, growth.",
    icon: BarChart2,
    img: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Digital Marketing",
    desc: "Paid ads, funnels, SEO & growth strategies.",
    icon: Megaphone,
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Influencer Management",
    desc: "Right creators. Real connections. Better results.",
    icon: Mic,
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Motion Graphics",
    desc: "Animations that bring your brand to life.",
    icon: Layers,
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Branding",
    desc: "Identity that speaks. Design that stays.",
    icon: PenTool,
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Web Design & Development",
    desc: "Modern, fast and built to convert.",
    icon: Globe,
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
  },
];

export function Capabilities() {
  return (
    // Section Padding adjusted: very little on top (pt-3/4), almost none on bottom (pb-1/2)
    <section className="relative w-full overflow-hidden bg-[#FAFAFA] text-black transition-colors duration-700 ease-in-out dark:bg-[#050505] dark:text-white pt-3 pb-1 md:pt-4 md:pb-2">

      {/* Maximum width 1800px with extreme left-to-right edges */}
      <div className="mx-auto w-full max-w-[1800px] px-2 sm:px-4 lg:px-6">

        {/* --- HEADER --- */}
        <div className="flex flex-col gap-3 pb-4 lg:flex-row lg:items-end lg:justify-between lg:pb-5">

          {/* Left: Headline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <h2 className="font-sans text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[64px]">
              Everything we do, <br />
              built to <span className="font-serif text-[#E04D43] italic font-normal">deliver impact.</span>
            </h2>
          </motion.div>

          {/* Middle: Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-md lg:mb-1.5 lg:max-w-sm xl:max-w-md"
          >
            <p className="text-[13px] leading-relaxed text-gray-600 dark:text-gray-400 sm:text-sm">
              From powerful content to performance-driven campaigns, we offer end-to-end solutions designed to grow brands and connect with audiences.
            </p>
          </motion.div>

          {/* Right: CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:mb-1.5"
          >
            <Link
              to="/services"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-transparent px-5 py-2 text-sm font-medium text-black transition-all hover:bg-gray-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
            >
              Explore All Services
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2} />
            </Link>
          </motion.div>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {capabilities.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group flex flex-col overflow-hidden rounded-[16px] bg-white p-2 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:bg-[#0A0A0A] dark:border dark:border-white/5 dark:shadow-none"
            >
              {/* Image Area - Aspect ratio changed to 3/1 to further reduce image height */}
              <div className="relative w-full aspect-[3/1]">
                <div className="relative h-full w-full overflow-hidden rounded-[12px]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-colors duration-700 dark:bg-black/30" />
                </div>

                {/* Overlapping Icon Badge */}
                <div className="absolute -bottom-3.5 left-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-gray-100 bg-white shadow-sm dark:border-white/10 dark:bg-[#0A0A0A]">
                  <item.icon className="h-[14px] w-[14px] text-[#E04D43]" strokeWidth={2.5} />
                </div>
              </div>

              {/* Text Content Area - Reduced top padding (pt-3) to compress card height */}
              <div className="flex flex-col px-3 pb-1 pt-3">
                <h3 className="font-sans text-[14px] font-bold tracking-tight text-black dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-0.5 text-[12px] leading-snug text-gray-500 dark:text-gray-400 line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}