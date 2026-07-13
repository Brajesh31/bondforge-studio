import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Play,
  Star
} from "lucide-react";

// 15 High-Quality Testimonials
const testimonials = [
  {
    quote: (
      <>
        Social Bond completely transformed our social media presence. The content, strategy, and consistency they delivered brought us <span className="text-[#E04D43] font-bold">3x more engagement</span> in just 2 months.
      </>
    ),
    name: "Rohit Malhotra",
    role: "Marketing Head",
    company: "FitFuel India",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    videoTitle: "STRONGER EVERYDAY.",
    videoSubtitle: "FITFUEL",
    videoBg: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=400&auto=format&fit=crop"
  },
  {
    quote: (
      <>
        From editing our long-form videos to managing our entire YouTube channel, Social Bond handles everything flawlessly. They get our vision and make it <span className="text-[#E04D43] font-bold">ten times better</span>.
      </>
    ),
    name: "Ananya Sharma",
    role: "Founder",
    company: "The Wellness Way",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    videoTitle: "NEW VIDEO LIVE",
    videoSubtitle: "LINK IN BIO",
    videoBg: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=400&auto=format&fit=crop"
  },
  {
    quote: (
      <>
        We saw a <span className="text-[#E04D43] font-bold">40% increase in leads</span> within the first month of their digital marketing campaign. Their data-driven approach and creative execution are top-notch.
      </>
    ),
    name: "Karan Mehta",
    role: "CEO",
    company: "BuildNext",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    videoTitle: "40% More Leads",
    videoSubtitle: "in 30 Days",
    videoBg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop",
    isChart: true
  },
  {
    quote: (
      <>
        Professional, responsive, and incredibly talented team. They managed our influencers, content, and ads — all under one roof. <span className="text-[#E04D43] font-bold">Highly recommend</span> Social Bond!
      </>
    ),
    name: "Neha Verma",
    role: "Brand Manager",
    company: "Glow & Co.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    videoTitle: "GLOW NATURALLY",
    videoSubtitle: "EVERYDAY",
    videoBg: "https://images.unsplash.com/photo-1608248597481-496100c8c836?q=80&w=400&auto=format&fit=crop"
  },
  {
    quote: (
      <>
        Our brand scaling targets were met weeks ahead of schedule. The dynamic ad creative and native scripting helped us achieve a <span className="text-[#E04D43] font-bold">4.5x ROAS</span> effortlessly.
      </>
    ),
    name: "Kabir Singh",
    role: "Growth Director",
    company: "Apex Gear",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop",
    videoTitle: "SCALING TO 7-FIGURES",
    videoSubtitle: "CASE STUDY",
    videoBg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop"
  },
  {
    quote: (
      <>
        The storytelling elements they added to our brand films captured exactly who we are. Conversion rates on our landing pages grew by <span className="text-[#E04D43] font-bold">28% overnight</span>.
      </>
    ),
    name: "Riya Sen",
    role: "Co-Founder",
    company: "Veda Organics",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
    videoTitle: "NATIVE STORYTELLING",
    videoSubtitle: "LAUNCH FILM",
    videoBg: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=400&auto=format&fit=crop"
  },
  {
    quote: (
      <>
        They took our scattered content and turned it into a seamless visual identity. Our followers jumped by <span className="text-[#E04D43] font-bold">150k across platforms</span> in under six months.
      </>
    ),
    name: "Siddharth Rao",
    role: "CMO",
    company: "Urban Threads",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
    videoTitle: "APPAREL DROP",
    videoSubtitle: "SUMMER COLLECTION",
    videoBg: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=400&auto=format&fit=crop"
  },
  {
    quote: (
      <>
        Working with them has been a breath of fresh air. They just *get* the brief without endless back-and-forth, saving our team <span className="text-[#E04D43] font-bold">20 hours a week</span>.
      </>
    ),
    name: "Priya Desai",
    role: "Managing Director",
    company: "Luxe Home",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop",
    videoTitle: "INTERIOR SPACES",
    videoSubtitle: "MINIMAL LIVING",
    videoBg: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=400&auto=format&fit=crop"
  },
  {
    quote: (
      <>
        From the initial audit to the final ad deployment, the communication was stellar. Our cost per acquisition dropped by a massive <span className="text-[#E04D43] font-bold">35% overall</span>.
      </>
    ),
    name: "Arjun Nair",
    role: "Head of Digital",
    company: "TechNova",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
    videoTitle: "SAAS LAUNCH",
    videoSubtitle: "PRODUCT TOUR",
    videoBg: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&auto=format&fit=crop"
  },
  {
    quote: (
      <>
        We handed over full creative control and it was the best decision we made. The community sentiment around our brand is now <span className="text-[#E04D43] font-bold">overwhelmingly positive</span>.
      </>
    ),
    name: "Meera Krishnan",
    role: "Founder",
    company: "Sip & Savor",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
    videoTitle: "CAFE CULTURE",
    videoSubtitle: "BEHIND THE SCENES",
    videoBg: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=400&auto=format&fit=crop"
  },
  {
    quote: (
      <>
        In an oversaturated market, Social Bond managed to make our brand voice cut through the noise. We secured <span className="text-[#E04D43] font-bold">record-breaking bookings</span> this quarter.
      </>
    ),
    name: "Dev Patel",
    role: "CEO",
    company: "Wanderlust Stays",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=150&auto=format&fit=crop",
    videoTitle: "BOUTIQUE STAYS",
    videoSubtitle: "PROPERTY TOUR",
    videoBg: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=400&auto=format&fit=crop"
  },
  {
    quote: (
      <>
        I couldn’t believe the level of polish they brought to our short-form content. Our TikTok channel went from zero to <span className="text-[#E04D43] font-bold">5M monthly views</span> rapidly.
      </>
    ),
    name: "Aisha Khan",
    role: "Content Lead",
    company: "Bloom Florals",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=150&auto=format&fit=crop",
    videoTitle: "SPRING EDIT",
    videoSubtitle: "TIKTOK SERIES",
    videoBg: "https://images.unsplash.com/photo-1490750967868-88cb4ecb0713?q=80&w=400&auto=format&fit=crop"
  },
  {
    quote: (
      <>
        Their media buying strategy is razor-sharp. We completely bypassed our old agency's metrics and hit our annual revenue goals <span className="text-[#E04D43] font-bold">in just 7 months</span>.
      </>
    ),
    name: "Rohan Gupta",
    role: "VP Marketing",
    company: "DriveX",
    avatar: "https://images.unsplash.com/photo-1507081323647-4d250478b8ae?q=80&w=150&auto=format&fit=crop",
    videoTitle: "DRIVE SMART",
    videoSubtitle: "AD CAMPAIGN",
    videoBg: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=400&auto=format&fit=crop"
  },
  {
    quote: (
      <>
        They aren't just an agency, they genuinely feel like an extension of our in-house team. We completely trust their instincts and <span className="text-[#E04D43] font-bold">flawless execution</span>.
      </>
    ),
    name: "Tara Singh",
    role: "Brand Director",
    company: "Zenith Fitness",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=150&auto=format&fit=crop",
    videoTitle: "PUSH LIMITS",
    videoSubtitle: "MEMBER STORIES",
    videoBg: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop"
  },
  {
    quote: (
      <>
        The analytics dashboards they built for us changed how we view our customers. We are finally making decisions based on <span className="text-[#E04D43] font-bold">real, actionable data</span>.
      </>
    ),
    name: "Vikram Bose",
    role: "Operations Head",
    company: "NextGen Tech",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=150&auto=format&fit=crop",
    videoTitle: "DATA DRIVEN",
    videoSubtitle: "Q3 INSIGHTS",
    videoBg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop",
    isChart: true
  }
];

export function ClientSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 3; // Strictly 1 row of 3 on large screens
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentTestimonials = testimonials.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );

  return (
    // Replaced bottom padding with pb-0 for maximum screen real estate
    <section className="relative w-full overflow-hidden bg-[#FAFAFA] text-black transition-colors duration-700 ease-in-out dark:bg-[#050505] dark:text-white pt-2 pb-0 md:pt-3">
      {/* Tightened flex gaps (gap-3) throughout the container */}
      <div className="mx-auto w-full max-w-[1800px] px-2 sm:px-4 lg:px-6 flex flex-col gap-3">

        {/* --- ENHANCED HEADER --- */}
        <div className="flex flex-col gap-4 pb-1 lg:flex-row lg:items-center lg:justify-between">

          <div className="lg:w-1/2">
            <h2 className="font-sans text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[60px]">
              Real stories. <br className="hidden lg:block" />
              Real results. <br className="hidden lg:block" />
              <span className="font-serif text-[#E04D43] italic font-normal">Real impact.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-5 lg:w-1/2 lg:flex-row lg:items-center lg:justify-end">

            <div className="border-l-[3px] border-[#E04D43] pl-4 max-w-sm">
              <p className="font-serif text-[18px] md:text-[20px] italic leading-snug text-gray-700 dark:text-gray-300">
                "We don't just deliver content — we build enduring partnerships that grow brands and drive real, measurable results."
              </p>
            </div>

            <div className="flex items-center gap-4 lg:ml-6 shrink-0 bg-white dark:bg-white/5 py-2.5 px-5 rounded-2xl shadow-sm border border-gray-100 dark:border-white/10">
              <div className="text-5xl lg:text-[56px] font-black tracking-tighter text-black dark:text-white leading-none">
                4.9
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center text-[#E04D43] mb-1 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 lg:h-5 lg:w-5 fill-current" strokeWidth={0} />
                  ))}
                </div>
                <span className="text-[13px] font-extrabold uppercase tracking-wide text-black dark:text-white leading-none">
                  Average Rating
                </span>
                <span className="text-[11px] font-medium text-gray-500 mt-1 leading-none">
                  Based on 45+ reviews
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* --- CAROUSEL GRID (Strictly 1 Row of 3 Cards, Reduced Height) --- */}
        {/* Lowered min height significantly to allow cards to shrink naturally */}
        <div className="relative min-h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4"
            >
              {currentTestimonials.map((item, idx) => (
                <div
                  key={idx}
                  // Reduced padding to p-4 from p-5
                  className="flex flex-col justify-between rounded-[16px] bg-white p-4 shadow-sm border border-gray-100 dark:border-white/5 dark:bg-[#0A0A0A]"
                >
                  <div>
                    <span className="font-serif text-4xl font-bold leading-none text-[#E04D43] block h-4">
                      “
                    </span>
                    {/* Tightened top margin and lowered min-height on quote */}
                    <p className="text-[13px] leading-relaxed text-gray-700 dark:text-gray-300 mt-2 font-medium min-h-[50px]">
                      {item.quote}
                    </p>
                  </div>

                  {/* Reduced margin top to mt-4 and flex gap to gap-3 */}
                  <div className="mt-4 flex flex-col gap-3">
                    <div className="w-full h-[1px] bg-gray-100 dark:bg-white/5" />

                    <div className="flex items-center gap-2.5">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="h-9 w-9 rounded-full object-cover grayscale"
                      />
                      <div className="flex flex-col min-w-0">
                        <span className="text-[13px] font-bold text-black dark:text-white truncate">
                          {item.name}
                        </span>
                        <span className="text-[11px] text-gray-500 truncate mt-0.5">
                          {item.role} <span className="text-gray-300 dark:text-white/20 mx-1">|</span> {item.company}
                        </span>
                      </div>
                    </div>

                    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-[12px] bg-black group cursor-pointer">
                      <img
                        src={item.videoBg}
                        alt="Video thumbnail"
                        className="h-full w-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/40 transition-transform duration-300 group-hover:scale-110">
                          <Play className="h-3.5 w-3.5 text-white fill-current translate-x-[1.5px]" />
                        </div>
                      </div>

                      <div className="absolute bottom-2.5 left-2.5 text-white flex flex-col">
                        <span className="text-[11px] font-extrabold uppercase tracking-tight leading-none">
                          {item.videoTitle}
                        </span>
                        <span className="text-[9px] text-gray-300 font-medium tracking-wider mt-1 uppercase leading-none">
                          {item.videoSubtitle}
                        </span>
                      </div>

                      {item.isChart && (
                        <div className="absolute inset-x-4 bottom-4 top-8 flex items-end justify-between pointer-events-none opacity-40">
                          <svg className="w-full h-full" viewBox="0 0 100 50">
                            <path d="M0 45 Q 25 35, 50 25 T 100 5" fill="none" stroke="#E04D43" strokeWidth="3" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* --- CAROUSEL PAGINATION SYSTEM CONTROLS --- */}
        {/* Reduced top margin to mt-2 */}
        <div className="flex items-center justify-center gap-3 mt-2">
          <button
            onClick={handlePrev}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-black transition-all hover:bg-gray-50 hover:scale-105 dark:border-white/10 dark:bg-[#111] dark:text-white shadow-sm"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentPage === i
                    ? "w-6 bg-[#E04D43]"
                    : "w-2 bg-gray-300 dark:bg-white/20 hover:bg-gray-400"
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-black transition-all hover:bg-gray-50 hover:scale-105 dark:border-white/10 dark:bg-[#111] dark:text-white shadow-sm"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* --- TRUSTED BRANDS ACCENT LOGO RIBBON --- */}
        <div className="mt-1 flex flex-col items-start gap-3 rounded-[16px] border border-gray-200/60 bg-white px-5 py-2.5 dark:border-white/5 dark:bg-[#0A0A0A] lg:flex-row lg:items-center lg:justify-between shadow-sm">

          <div className="flex items-start gap-3 lg:border-r lg:border-gray-100 lg:dark:border-white/5 lg:pr-8 max-w-sm">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-50 dark:bg-white/5">
              <ShieldCheck className="h-4 w-4 text-[#E04D43]" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[11px] font-bold tracking-wider uppercase text-black dark:text-white leading-tight">
                Trusted by Brands
              </span>
              <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">
                We're proud to partner with forward-thinking brands across industries.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap w-full items-center justify-between gap-4 lg:w-auto lg:flex-1 lg:pl-8">
            <span className="text-[14px] font-extrabold tracking-tighter text-black dark:text-white uppercase font-sans">
              // FitFuel
            </span>
            <span className="text-[14px] font-bold tracking-tight text-black dark:text-white font-sans">
              BuildNext
            </span>
            <span className="text-[13px] font-medium tracking-[0.15em] text-black dark:text-white uppercase font-serif">
              Glow & Co.
            </span>
            <span className="text-[12px] font-semibold text-black dark:text-white font-sans text-center leading-none">
              The Wellness <br/><span className="text-[10px] font-normal tracking-wide lowercase">Way</span>
            </span>
            <span className="text-[13px] font-light tracking-[0.2em] text-black dark:text-white uppercase font-sans">
              Urban Threads
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}