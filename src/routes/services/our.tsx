import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  Scissors,
  Users,
  Monitor,
  Megaphone,
  Lightbulb,
  ArrowRight
} from "lucide-react";

// --- DATA ---
const servicesData = [
  {
    title: "Video Editing",
    desc: "Cinematic edits that tell stories and drive engagement.",
    icon: Scissors,
    img: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=800&auto=format&fit=crop",
    href: "/services/video-editing"
  },
  {
    title: "Social Media Management",
    desc: "We manage your presence so you can focus on growth.",
    icon: Users, // Represents network/community
    img: "https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=800&auto=format&fit=crop",
    href: "/services/social-media-management"
  },
  {
    title: "Influencer Management",
    desc: "The right creators. The right collaborations. Real results.",
    icon: Users,
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    href: "/services/influencer-management"
  },
  {
    title: "Website Design",
    desc: "Modern websites that look stunning and convert better.",
    icon: Monitor,
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    href: "/services"
  },
  {
    title: "Digital Marketing",
    desc: "Data-driven campaigns that bring leads and sales.",
    icon: Megaphone,
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    href: "/services/digital-marketing"
  },
  {
    title: "Content Strategy",
    desc: "Smart content strategies that build brands and loyalty.",
    icon: Lightbulb,
    img: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=800&auto=format&fit=crop",
    href: "/services"
  }
];

export function Our() {
  return (
    // Minimal section padding, handles light/dark background seamlessly
    <section className="relative w-full overflow-hidden bg-[#FAFAFA] text-black transition-colors duration-700 ease-in-out dark:bg-[#050505] dark:text-white pt-6 pb-6 md:pt-10 md:pb-10">

      {/* 1800px Max Width with extreme left/right edge positioning */}
      <div className="mx-auto w-full max-w-[1800px] px-2 sm:px-4 lg:px-6">

        {/* --- HEADER --- */}
        <div className="flex flex-col items-center justify-center text-center pb-6 md:pb-10">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-sans text-[36px] font-extrabold leading-tight tracking-tight sm:text-5xl md:text-[56px]"
          >
            Everything we do. <span className="font-serif italic text-[#E04D43] font-normal">Built to perform.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-2xl text-[14px] leading-relaxed text-gray-600 dark:text-gray-400 sm:text-[16px]"
          >
            End-to-end content and digital solutions that help brands grow, connect, and convert.
          </motion.p>
        </div>

        {/* --- 3x2 CARDS GRID --- */}
        {/* Tight grid gaps (gap-3 lg:gap-5) to maximize card width from edge to edge */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {servicesData.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group flex flex-col overflow-hidden rounded-[20px] bg-white shadow-sm border border-gray-200 transition-all hover:-translate-y-1 hover:shadow-md dark:border-white/5 dark:bg-[#111111] dark:shadow-none"
            >
              {/* Image Cover (Height Reduced) */}
              <div className="relative h-[160px] w-full overflow-hidden bg-gray-100 dark:bg-gray-900 sm:h-[180px] xl:h-[220px]">
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Card Inner Content */}
              {/* Minimal inner padding (p-4 sm:p-5) to keep it tight */}
              <div className="flex flex-col p-4 sm:p-5 lg:p-5">
                <div className="flex items-start gap-4">

                  {/* Icon Box */}
                  <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-red-50 dark:bg-[#1A1A1A] transition-colors border border-transparent dark:border-white/5">
                    <service.icon className="h-5 w-5 text-[#E04D43]" strokeWidth={1.5} />
                  </div>

                  {/* Text Container */}
                  <div className="flex flex-col">
                    <h3 className="font-sans text-[17px] font-bold tracking-tight text-black dark:text-white">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">
                      {service.desc}
                    </p>

                    {/* Minimalist Explore Link */}
                    <Link
                      to={service.href}
                      className="mt-4 flex w-fit items-center gap-2 text-[13px] font-semibold text-black transition-colors hover:text-[#E04D43] dark:text-white dark:hover:text-[#E04D43]"
                    >
                      Explore
                      <div className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 transition-colors group-hover:border-[#E04D43] dark:border-gray-600 dark:group-hover:border-[#E04D43]">
                        <ArrowRight className="h-3 w-3 text-gray-500 transition-colors group-hover:text-[#E04D43] dark:text-gray-400" strokeWidth={1.5} />
                      </div>
                    </Link>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}