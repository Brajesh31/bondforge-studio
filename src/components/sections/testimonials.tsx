import { useRef } from "react";
import { motion } from "motion/react";
import { Heart, Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Social Bond completely transformed our content strategy. The results speak for themselves. We've seen a 3x increase in engagement.",
    name: "Ananya Kapoor",
    role: "Founder",
    brand: "minimal.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    bgImg: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop"
  },
  {
    quote: "Their team feels like an extension of ours. Creative, responsive and highly performance-driven across all campaigns.",
    name: "Rohit Malhotra",
    role: "Marketing Head",
    brand: "NEXORA",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
    bgImg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    quote: "From editing to growth, Social Bond does it all. Highly recommend them to any brand looking to scale rapidly.",
    name: "Karan Bhatia",
    role: "Co-founder",
    brand: "RunFit",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    bgImg: "https://images.unsplash.com/photo-1574717024453-354056afd311?q=80&w=800&auto=format&fit=crop"
  },
  {
    quote: "The quality of visual storytelling is unmatched. They perfectly captured our brand's voice and aesthetic.",
    name: "Sneha Rao",
    role: "Brand Director",
    brand: "Clovia",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    bgImg: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    quote: "Working with them was the best marketing decision we made this year. ROI went through the roof within months.",
    name: "Vikram Singh",
    role: "CEO",
    brand: "URBANIC",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    bgImg: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=800&auto=format&fit=crop"
  },
  {
    quote: "They understand the algorithm better than anyone else. Our organic reach skyrocketed almost instantly.",
    name: "Priya Desai",
    role: "CMO",
    brand: "the moms co.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
    bgImg: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop"
  },
  {
    quote: "A rare mix of creative brilliance and data-driven execution. They hit every KPI we set out for them.",
    name: "Aman Gupta",
    role: "Growth Lead",
    brand: "boAt",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
    bgImg: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop"
  },
  {
    quote: "Their team is incredibly proactive. We never have to ask for updates, they are always one step ahead.",
    name: "Maya Sharma",
    role: "Operations Head",
    brand: "Lumina",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop",
    bgImg: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop"
  },
  {
    quote: "Our video content has never looked better. They elevated our entire digital presence in record time.",
    name: "Arjun Patel",
    role: "Creative Director",
    brand: "Elevate",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    bgImg: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop"
  },
  {
    quote: "Consistent, reliable, and wildly creative. Social Bond is the secret weapon behind our social success.",
    name: "Kiran Reddy",
    role: "Marketing Manager",
    brand: "FreshBites",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1baf8a?q=80&w=150&auto=format&fit=crop",
    bgImg: "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=800&auto=format&fit=crop"
  },
  {
    quote: "They don't just create content; they build communities. The engagement rates are phenomenal.",
    name: "Aisha Khan",
    role: "Founder",
    brand: "Glow",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop",
    bgImg: "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=800&auto=format&fit=crop"
  },
  {
    quote: "Exceptional turnaround times without compromising on quality. A phenomenal partner for scale.",
    name: "Rohan Desai",
    role: "VP of Growth",
    brand: "Sprint",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop",
    bgImg: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop"
  },
  {
    quote: "The strategic insights they bring to the table are just as valuable as the stunning content they produce.",
    name: "Siddharth Jain",
    role: "Director",
    brand: "Vertex",
    avatar: "https://images.unsplash.com/photo-1488161628813-044c107cbcd0?q=80&w=150&auto=format&fit=crop",
    bgImg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
  },
  {
    quote: "We've worked with many agencies, but none have delivered the sheer volume of high-quality work like them.",
    name: "Kavita Nair",
    role: "Head of Digital",
    brand: "Zenith",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
    bgImg: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop"
  },
  {
    quote: "Flawless execution from start to finish. They took our vision and elevated it beyond our expectations.",
    name: "Manish Gupta",
    role: "Co-founder",
    brand: "Apex",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    bgImg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
  }
];

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      // Scroll by approximately the width of one card + gap (around 400px)
      // The CSS snap-x will automatically snap it perfectly to the next card
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="testimonials"
      className="relative flex w-full flex-col justify-center bg-white text-black transition-colors duration-700 ease-in-out dark:bg-[#050505] dark:text-white pt-6 pb-4 md:pt-8 md:pb-6"
    >
      {/* Maximum width 1800px, extreme left/right edges */}
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">

        {/* --- TOP HEADER ROW --- */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

          {/* Left Side: Headlines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-1 flex-col justify-center max-w-[1100px]"
          >
            {/* Client Love Tag */}
            <div className="mb-3 flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#E04D43]" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#E04D43] sm:text-xs">
                CLIENT LOVE
              </span>
            </div>

            <h2 className="font-sans text-4xl font-extrabold leading-[1.08] tracking-tight transition-colors duration-700 ease-in-out sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:whitespace-nowrap">
              Loved by brands. <br />
              Built on <span className="italic text-[#E04D43] transition-colors duration-700 ease-in-out">trust.</span>
            </h2>
            <p className="mt-3 max-w-[480px] text-xs leading-relaxed text-gray-600 transition-colors duration-700 ease-in-out dark:text-gray-400 sm:text-sm">
              We don't do empty promises. We deliver results <br className="hidden sm:block" />
              that our clients are proud to talk about.
            </p>
          </motion.div>

          {/* Right Side: Rating Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex w-full shrink-0 flex-col justify-end lg:w-auto"
          >
            {/* Rating Container */}
            <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4 transition-colors duration-700 ease-in-out dark:border-white/10 dark:bg-[#0F0F11] sm:p-5 lg:pl-6 lg:pr-10">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E04D43] shadow-[0_0_15px_rgba(224,77,67,0.3)]">
                <Heart className="h-5 w-5 fill-white text-white" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-black transition-colors duration-700 ease-in-out dark:text-white md:text-2xl">4.9</span>
                  <span className="text-sm font-semibold text-gray-400">/ 5</span>
                </div>
                <span className="mt-0.5 text-[10px] font-medium text-gray-500 transition-colors duration-700 ease-in-out dark:text-gray-400">
                  Average Client Rating
                </span>
                <div className="mt-1 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-[#E04D43] text-[#E04D43]" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* --- HORIZONTAL CAROUSEL GRID --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="group/carousel relative mt-8 w-full"
        >
          {/* Navigation Arrows (Wired to onClick scroll functions) */}
          <div className="pointer-events-none absolute inset-y-0 -left-6 z-20 hidden w-16 items-center justify-start xl:flex">
            <button
              onClick={() => scroll("left")}
              className="pointer-events-auto flex items-center justify-center rounded-full border border-gray-200 bg-white p-2.5 text-gray-600 shadow-md transition-all duration-300 hover:scale-110 hover:bg-gray-100 dark:border-white/10 dark:bg-[#0F0F11] dark:text-gray-300 dark:hover:bg-white/10"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>

          <div className="pointer-events-none absolute inset-y-0 -right-6 z-20 hidden w-16 items-center justify-end xl:flex">
            <button
              onClick={() => scroll("right")}
              className="pointer-events-auto flex items-center justify-center rounded-full border border-gray-200 bg-white p-2.5 text-gray-600 shadow-md transition-all duration-300 hover:scale-110 hover:bg-gray-100 dark:border-white/10 dark:bg-[#0F0F11] dark:text-gray-300 dark:hover:bg-white/10"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Scrolling Container: Ref attached for JS scrolling, Native CSS for swipe/snap */}
          <div
            ref={scrollRef}
            className="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-4 pt-2 lg:gap-5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {testimonials.map((testi, idx) => (
              <div
                key={idx}
                className="group relative flex w-full shrink-0 snap-center flex-col overflow-hidden rounded-[1.25rem] border border-gray-200 bg-white shadow-sm transition-all duration-700 ease-in-out hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-[#0F0F11] dark:shadow-none dark:hover:border-white/20 sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-14px)] min-h-[320px] md:min-h-[340px] lg:min-h-[360px]"
              >
                {/* Visual Enhancement: Giant faint quote watermark */}
                <Quote className="absolute -left-2 -top-2 z-0 h-32 w-32 rotate-180 text-gray-900/5 transition-colors duration-700 ease-in-out dark:text-white/5" strokeWidth={1} />

                {/* Background Image Layer (Right-aligned, seamlessly fading into the left color) */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={testi.bgImg}
                    alt="Background Context"
                    className="absolute right-0 top-0 h-full w-[70%] object-cover opacity-20 transition-transform duration-1000 group-hover:scale-110 dark:opacity-30"
                    loading="lazy"
                  />
                  {/* Deepened Fade Gradient for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent transition-colors duration-700 ease-in-out dark:from-[#0F0F11] dark:via-[#0F0F11]/95" />
                </div>

                {/* Content Area */}
                <div className="relative z-10 flex flex-1 flex-col p-5 lg:p-6 xl:p-8">

                  {/* Quote Icon Box */}
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-50 transition-colors duration-700 ease-in-out dark:border-white/5 dark:bg-white/5">
                    <span className="font-serif text-2xl leading-none text-[#E04D43]">“</span>
                  </div>

                  {/* Testimonial Text */}
                  <p className="font-sans text-base font-medium leading-relaxed text-black transition-colors duration-700 ease-in-out dark:text-gray-200 md:text-lg">
                    {testi.quote}
                  </p>

                  {/* Bottom User Info & Logo */}
                  <div className="mt-auto flex items-center justify-between pt-8">
                    {/* User Avatar + Name */}
                    <div className="flex items-center gap-3">
                      <img
                        src={testi.avatar}
                        alt={testi.name}
                        className="h-10 w-10 rounded-full border border-gray-200 object-cover transition-colors duration-700 ease-in-out dark:border-white/20 sm:h-12 sm:w-12"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-black transition-colors duration-700 ease-in-out dark:text-white md:text-base">
                          {testi.name}
                        </span>
                        <span className="text-xs font-medium text-gray-500 transition-colors duration-700 ease-in-out dark:text-gray-400">
                          {testi.role}
                        </span>
                      </div>
                    </div>

                    {/* Generic Brand Names styled beautifully */}
                    <div className="text-right transition-colors duration-700 ease-in-out">
                      <span className="font-sans text-sm font-black italic tracking-tight text-gray-300 dark:text-white/20">
                        {testi.brand}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Pagination Indicators */}
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="h-1.5 w-8 rounded-full bg-[#E04D43]" />
            <div className="h-1.5 w-2 rounded-full bg-gray-300 transition-colors duration-700 ease-in-out dark:bg-white/20" />
            <div className="h-1.5 w-2 rounded-full bg-gray-300 transition-colors duration-700 ease-in-out dark:bg-white/20" />
            <div className="h-1.5 w-2 rounded-full bg-gray-300 transition-colors duration-700 ease-in-out dark:bg-white/20" />
            <div className="h-1.5 w-2 rounded-full bg-gray-300 transition-colors duration-700 ease-in-out dark:bg-white/20" />
          </div>
        </motion.div>

        {/* --- BOTTOM TRUST RIBBON --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex w-full flex-col justify-between gap-8 rounded-[1.25rem] border border-gray-200 bg-gray-50 px-6 py-6 transition-colors duration-700 ease-in-out dark:border-transparent dark:bg-white lg:mt-10 lg:flex-row lg:items-center lg:px-8 lg:py-6"
        >
          {/* Left Text */}
          <div className="flex w-full shrink-0 flex-col text-left lg:w-1/4">
            <span className="text-[9px] font-bold uppercase tracking-widest text-[#E04D43] sm:text-[10px]">
              TRUSTED BY 50+ BRANDS
            </span>
            <h3 className="mt-1 text-sm font-extrabold leading-snug text-black sm:text-base md:text-lg">
              Big or small, <br className="hidden xl:block" />
              we treat every brand <br className="hidden xl:block" />
              like our own.
            </h3>
          </div>

          {/* Vertical Divider (Desktop) */}
          <div className="hidden h-12 w-px bg-gray-200 lg:block" />

          {/* Horizontal Divider (Mobile) */}
          <div className="h-px w-full bg-gray-200 lg:hidden" />

          {/* Brands Row */}
          <div className="flex w-full flex-wrap items-center justify-between gap-6 opacity-80 grayscale transition-all duration-300 hover:grayscale-0 lg:flex-1 lg:flex-nowrap lg:justify-around">
            <span className="font-sans text-base font-bold tracking-tight text-black">minimal.</span>
            <span className="font-sans text-sm font-bold uppercase tracking-widest text-black">NEXORA</span>
            <span className="font-sans text-base font-black italic tracking-tight text-black">RunFit</span>
            <span className="font-serif text-lg italic text-black">Clovia</span>
            <span className="font-serif text-sm lowercase tracking-tight text-black">the moms co.</span>
            <span className="font-sans text-xs font-light uppercase tracking-widest text-black">URBANIC</span>
            <span className="font-sans text-base font-black tracking-tighter text-black">bo<span className="text-[#E04D43]">A</span>t</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}