// industries.tsx
import { motion } from "framer-motion";
import {
  Rocket,
  CodeXml,
  ShoppingCart,
  SquarePlus,
  GraduationCap,
  Building2,
  UserCircle,
  ConciergeBell,
  ShoppingBag,
  Dumbbell
} from "lucide-react";

// --- DATA ---
const industriesData = [
  { name: "Startups", icon: Rocket },
  { name: "SaaS", icon: CodeXml },
  { name: "E-commerce", icon: ShoppingCart },
  { name: "Healthcare", icon: SquarePlus },
  { name: "Education", icon: GraduationCap },
  { name: "Real Estate", icon: Building2 },
  { name: "Personal Brands", icon: UserCircle },
  { name: "Restaurants", icon: ConciergeBell },
  { name: "Fashion", icon: ShoppingBag },
  { name: "Fitness", icon: Dumbbell },
];

export function Industries() {
  return (
    // Added min-h-[85vh] and flex-col centering to make the section fill the screen height
    <section className="relative flex min-h-[85vh] w-full flex-col justify-center overflow-hidden bg-[#FAFAFA] text-black transition-colors duration-700 ease-in-out dark:bg-[#050505] dark:text-white py-10 lg:py-16">

      {/* 1800px Max Width pushing to the extreme left/right edges */}
      <div className="mx-auto w-full max-w-[1800px] px-2 sm:px-4 lg:px-4 flex flex-col gap-8 lg:gap-10">

        {/* --- HEADER --- */}
        <div className="flex flex-col items-center justify-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-sans text-[32px] font-extrabold tracking-tight sm:text-4xl md:text-[48px] leading-tight"
          >
            Different industries. <span className="font-serif italic text-[#E04D43] font-normal">Same commitment.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-[14px] font-medium text-gray-600 dark:text-gray-400 sm:text-[16px]"
          >
            We partner with brands across industries to create content that connects and converts.
          </motion.p>
        </div>

        {/* --- 5x2 CARDS GRID --- */}
        {/* Restored to 5 columns so it wraps perfectly into 2 rows */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-3 xl:gap-4">
          {industriesData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              // Added min-h-[240px] and xl:min-h-[300px] to physically increase card height
              className="group flex flex-col items-center justify-center rounded-[16px] bg-white border border-gray-100 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-white/5 dark:bg-[#0A0A0A] dark:shadow-none p-4 min-h-[200px] sm:min-h-[240px] xl:min-h-[300px]"
            >
              {/* Circular Icon Background (Scaled up slightly to match the taller cards) */}
              <div className="flex h-[80px] w-[80px] xl:h-[96px] xl:w-[96px] items-center justify-center rounded-full bg-[#FFF6F5] transition-colors duration-500 group-hover:bg-[#FCE8E6] dark:bg-[#E04D43]/10 dark:group-hover:bg-[#E04D43]/20">
                <item.icon
                  className="h-9 w-9 xl:h-10 xl:w-10 text-black dark:text-white transition-transform duration-500 group-hover:scale-110"
                  strokeWidth={1.5}
                />
              </div>

              {/* Card Title */}
              <h3 className="mt-6 font-sans text-[16px] font-bold tracking-tight text-black dark:text-white sm:text-[17px] xl:text-[18px]">
                {item.name}
              </h3>

              {/* Signature Red Dash */}
              <div className="mt-3.5 h-[2px] w-6 rounded-full bg-[#E04D43] opacity-80" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}