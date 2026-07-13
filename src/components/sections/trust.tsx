import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  Users,
  FolderCheck,
  Globe2,
  ArrowUpRight
} from "lucide-react";

// 3 Stats Matrix Items
const stats = [
  { icon: Users, value: "100+", label: "Happy Clients" },
  { icon: FolderCheck, value: "300+", label: "Projects Delivered" },
  { icon: Globe2, value: "15+", label: "Countries Served" },
];

// Single row of brands: Logs requested + small/indie brands
const brands = [
  "Salesforce",
  "Microsoft Azure",
  "AWS",
  "Reskilll",
  "TYT",
  "FitFuel",
  "Urban Edge",
  "Nexora",
  "Pulse",
  "Vybe"
];

export function Trust() {
  return (
    <section className="relative flex min-h-[90vh] w-full flex-col justify-center bg-white text-black transition-colors duration-700 ease-in-out dark:bg-background dark:text-foreground py-12 md:py-16">

      {/* Inline styles for mathematical marquee loop across all screens */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          width: max-content;
        }
      `}</style>

      <div className="mx-auto w-full max-w-[1800px] px-6 md:px-8">

        {/* --- TOP SECTION: Split Content & Image --- */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">

          {/* Left: Text, CTAs & Stats (7 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:col-span-7"
          >
            {/* Heading */}
            <h2 className="m-0 -mt-1 font-sans text-4xl font-extrabold leading-[1.08] tracking-tight transition-colors duration-700 ease-in-out sm:text-5xl lg:-mt-2 lg:text-[3.25rem] xl:text-[3.75rem]">
              Creative partnerships that deliver <br />
              <span className="italic text-[#E04D43] transition-colors duration-700 ease-in-out">real impact.</span>
            </h2>

            {/* Subheading */}
            <p className="mt-5 text-sm leading-relaxed text-gray-600 transition-colors duration-700 ease-in-out dark:text-gray-400 sm:text-base lg:text-lg">
              We collaborate with forward-thinking brands and creators <br className="hidden md:block" />
              to craft content that connects, converts, and creates lasting growth.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 rounded-md border border-gray-300 bg-transparent px-7 py-3 text-sm font-medium text-black transition-all duration-700 ease-in-out hover:bg-gray-50 dark:border-white/20 dark:text-white dark:hover:bg-white/5"
              >
                View Our Work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-md bg-[#E04D43] px-7 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-700 ease-in-out hover:bg-[#c94137]"
              >
                Book a Free Consultation
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Stats Grid - 3 items in 1 line on tablet/desktop */}
            <div className="mt-10 grid grid-cols-1 gap-y-6 divide-y divide-gray-200 transition-colors duration-700 ease-in-out dark:divide-white/10 sm:grid-cols-3 sm:gap-y-0 sm:divide-y-0 sm:divide-x lg:mt-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 ${index !== 0 ? 'sm:pl-5 lg:pl-6' : 'pr-4'} ${index !== 0 ? 'pt-4 sm:pt-0' : ''}`}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 transition-colors duration-700 ease-in-out dark:bg-[#E04D43]/10 lg:h-12 lg:w-12">
                    <stat.icon className="h-4 w-4 text-[#E04D43] transition-colors duration-700 ease-in-out lg:h-5 lg:w-5" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold tracking-tight transition-colors duration-700 ease-in-out lg:text-xl xl:text-2xl">{stat.value}</h4>
                    <p className="mt-0.5 text-[10px] font-medium text-gray-500 transition-colors duration-700 ease-in-out dark:text-gray-400 sm:text-[11px] lg:text-xs">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Studio Image (Increased width to 5 columns) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full overflow-hidden rounded-[2rem] bg-gray-100 transition-colors duration-700 ease-in-out dark:bg-surface h-[280px] sm:h-[350px] lg:col-span-5 lg:h-[340px] xl:h-[380px]"
          >
            <img
              src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=2071&auto=format&fit=crop"
              alt="Behind the scenes studio shoot"
              className="h-full w-full object-cover object-center transition-opacity duration-700 ease-in-out dark:opacity-80"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* --- BOTTOM SECTION: Brands --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 w-full md:mt-12 lg:mt-16"
        >
          {/* Section Header with Increased Font Size */}
          <div className="text-center px-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-800 transition-colors duration-700 ease-in-out dark:text-gray-200 sm:text-base md:text-lg">
              Brands we've worked with
            </h3>
            <div className="mx-auto mt-3 h-0.5 w-12 rounded-full bg-[#E04D43] transition-colors duration-700 ease-in-out" />
          </div>

          {/* --- MOVING MARQUEE LOGOS (Single Row) --- */}
          <div className="mt-8 flex flex-col gap-6 md:mt-12">
            <div className="relative flex w-full overflow-hidden">
              <div className="animate-marquee flex items-center gap-12 pl-12 md:gap-20 md:pl-20">
                {/* Multiplying the array to ensure seamless infinite looping on ultra-wide screens */}
                {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
                  <span
                    key={i}
                    // Added `select-none` here to prevent text highlighting/selection
                    className="select-none shrink-0 font-display text-xl font-bold tracking-tight text-gray-800 transition-colors duration-700 ease-in-out hover:text-[#E04D43] dark:text-white dark:hover:text-[#E04D43] md:text-2xl lg:text-3xl"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}