import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Headphones,
  ArrowRight,
  Plus,
  Minus,
  ChevronDown,
  ChevronUp,
  ArrowUpRight
} from "lucide-react";

// --- DATA ---
const faqsLeft = [
  {
    id: "l1",
    question: "What services does Social Bond offer?",
    answer: "We offer video editing, social media management, influencer management, digital marketing, and content strategy — everything you need to grow and scale your brand online."
  },
  {
    id: "l2",
    question: "Who do you work with?",
    answer: "We partner with visionary founders, e-commerce brands, creators, and B2B tech companies who are ready to scale their digital presence aggressively."
  },
  {
    id: "l3",
    question: "How long does it take to see results?",
    answer: "While early traction can be seen in the first 30 days, we typically advise a 90-day horizon for compounding, sustainable growth and robust ROI."
  },
  {
    id: "l4",
    question: "Do you offer custom packages?",
    answer: "Absolutely. Every brand has unique needs. We conduct an initial audit to tailor a strategy and package specifically aligned with your growth targets."
  },
  {
    id: "l5",
    question: "What platforms do you specialize in?",
    answer: "We are platform-native specialists across TikTok, Instagram Reels, YouTube Shorts, Meta Ads, and LinkedIn, focusing on high-retention vertical short-form creative."
  },
  {
    id: "l6",
    question: "Will I have a dedicated account manager?",
    answer: "Yes, you get a dedicated creative producer and account manager who coordinate your content pipelines, feedback cycles, and weekly analytics reviews."
  }
];

const faqsRight = [
  {
    id: "r1",
    question: "How do we get started?",
    answer: "Simply book a free consultation through our website. We'll hop on a quick call to understand your goals and see if we're a good fit."
  },
  {
    id: "r2",
    question: "Can you work with brands in any industry?",
    answer: "Yes, our team consists of versatile creatives and strategists who adapt our proven frameworks to fit beauty, tech, real estate, fitness, and more."
  },
  {
    id: "r3",
    question: "What makes Social Bond different?",
    answer: "We act as an extension of your team, not just an outsourced vendor. We combine data-driven media buying with elite, native-style creative production."
  },
  {
    id: "r4",
    question: "Do you offer revisions?",
    answer: "Yes, all our content and ad creative packages include dedicated revision rounds to ensure the final output perfectly matches your brand voice."
  },
  {
    id: "r5",
    question: "What is your onboarding process?",
    answer: "Onboarding takes less than 7 days. We conduct a kick-off deep dive, gather brand assets, perform a competitive audit, and deploy your content strategy planner."
  },
  {
    id: "r6",
    question: "Are there long-term contracts required?",
    answer: "We work on flexible rolling monthly agreements. We believe in earning your business through compounding, measurable revenue and audience growth month over month."
  }
];

const avatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=64&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=64&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=64&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=64&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=64&auto=format&fit=crop"
];

// --- COMPONENTS ---

function FAQItem({
                   item,
                   isOpen,
                   onClick
                 }: {
  item: { id: string; question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer rounded-[12px] border transition-all duration-300 ${
        isOpen
          ? "border-red-100 bg-[#FFF9F9] dark:border-[#E04D43]/20 dark:bg-[#E04D43]/5"
          : "border-gray-200 bg-white hover:border-gray-300 dark:border-white/10 dark:bg-[#0A0A0A] dark:hover:border-white/20"
      }`}
    >
      <div className="flex items-center justify-between p-4 md:px-5 md:py-4">
        <div className="flex items-center gap-4">
          <div className="flex h-5 w-5 shrink-0 items-center justify-center text-[#E04D43]">
            {isOpen ? <Minus className="h-4 w-4" strokeWidth={2.5} /> : <Plus className="h-4 w-4" strokeWidth={2.5} />}
          </div>
          <span className={`text-[14px] font-bold tracking-tight transition-colors ${isOpen ? "text-black dark:text-white" : "text-gray-800 dark:text-gray-200"}`}>
            {item.question}
          </span>
        </div>
        <div className={`flex shrink-0 items-center justify-center transition-colors ${isOpen ? "text-black dark:text-white" : "text-gray-400 dark:text-gray-500 group-hover:text-black dark:group-hover:text-white"}`}>
          {isOpen ? <ChevronUp className="h-4 w-4" strokeWidth={2.5} /> : <ChevronDown className="h-4 w-4" strokeWidth={2.5} />}
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-5 pl-[46px] pr-5 pt-0">
              <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400 font-medium">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CTASection() {
  const [openLeftId, setOpenLeftId] = useState<string>("l1");
  const [openRightId, setOpenRightId] = useState<string>("r1");

  return (
    // Added pt-12 lg:pt-16 for top padding, kept pb-3 lg:pb-4 for tight bottom
    <section className="relative w-full overflow-hidden bg-[#FAFAFA] text-black transition-colors duration-700 ease-in-out dark:bg-[#050505] dark:text-white pt-12 pb-3 lg:pt-16 lg:pb-4">
      <div className="mx-auto w-full max-w-[1800px] px-2 sm:px-3 lg:px-4 flex flex-col gap-4">

        {/* --- 1. HEADER ROW --- */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between px-1">

          {/* Main Title */}
          <div className="lg:w-[45%]">
            <h2 className="font-sans text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-[64px]">
              Questions? We've <br className="hidden md:block" />
              got <span className="font-serif text-[#E04D43] italic font-normal">answers.</span>
            </h2>
          </div>

          {/* Center Text */}
          <div className="lg:w-[30%] border-l-[3px] border-[#E04D43] pl-5 max-w-sm">
            <p className="font-serif text-[18px] md:text-[20px] italic leading-snug text-gray-700 dark:text-gray-300">
              Here are some common questions. <br className="hidden md:block" />
              Still have questions? We're just a message away.
            </p>
          </div>

          {/* Right Action Button */}
          <div className="shrink-0 lg:w-[25%] flex justify-start lg:justify-end">
            <button className="group flex items-center gap-4 rounded-full border border-gray-200/80 bg-gray-50/50 p-2 pl-3 pr-6 transition-all hover:bg-white hover:border-gray-300 shadow-sm hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm dark:bg-[#111]">
                <Headphones className="h-5 w-5 text-[#E04D43]" />
              </div>
              <div className="flex flex-col items-start pr-2">
                <span className="text-[14px] font-extrabold text-black dark:text-white leading-none mb-1">
                  Still have questions?
                </span>
                <span className="text-[13px] text-gray-500 dark:text-gray-400 flex items-center gap-1 font-semibold leading-none group-hover:text-[#E04D43] transition-colors">
                  Let's talk <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* --- 2. FAQ GRID --- */}
        <div className="grid grid-cols-1 items-start gap-3 lg:grid-cols-2 lg:gap-4 mt-2">
          {/* Left Column */}
          <div className="flex flex-col gap-3">
            {faqsLeft.map((item) => (
              <FAQItem
                key={item.id}
                item={item}
                isOpen={openLeftId === item.id}
                onClick={() => setOpenLeftId(item.id)}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-3">
            {faqsRight.map((item) => (
              <FAQItem
                key={item.id}
                item={item}
                isOpen={openRightId === item.id}
                onClick={() => setOpenRightId(item.id)}
              />
            ))}
          </div>
        </div>

        {/* --- 3. CTA BANNER --- */}
        <div className="mt-1 flex w-full flex-col overflow-hidden rounded-[20px] bg-[#0A0A0A] text-white border border-transparent dark:border-white/10 px-5 py-6 md:px-10 md:py-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">

          {/* Left Block */}
          <div className="flex flex-col lg:w-[45%] lg:pr-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-2 w-2 rounded-full bg-[#E04D43]" />
              <span className="text-[10px] font-black tracking-[0.2em] text-[#E04D43] uppercase">
                Let's Work Together
              </span>
            </div>
            <h3 className="font-sans text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-[40px]">
              Ready to grow your brand? <br />
              <span className="font-serif text-[#E04D43] italic font-normal">Let's make it happen.</span>
            </h3>
          </div>

          {/* Vertical Divider (Desktop) */}
          <div className="hidden h-[60px] w-px bg-white/10 lg:block shrink-0" />

          {/* Center Block */}
          <div className="mt-4 flex flex-col lg:mt-0 lg:w-[25%] lg:px-4">
            <p className="text-[13px] leading-relaxed text-gray-400 font-medium">
              Get a free consultation and see how Social Bond can elevate your brand.
            </p>
          </div>

          {/* Right Block (Buttons & Avatars) */}
          <div className="mt-6 flex flex-col items-start gap-4 lg:mt-0 lg:w-[30%] lg:items-end shrink-0">

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center w-full lg:justify-end">
              <button className="group flex flex-1 items-center justify-center sm:flex-none gap-2 rounded-lg bg-[#E04D43] px-5 py-3 text-[13px] font-bold text-white transition-all hover:bg-[#c94137] shadow-lg shadow-red-500/20">
                Book a Free Consultation
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>

              <button className="group flex flex-1 items-center justify-center sm:flex-none gap-2 rounded-lg border border-white/20 bg-transparent px-5 py-3 text-[13px] font-bold text-white transition-all hover:bg-white/5 hover:border-white/40">
                View Our Work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </div>

            <div className="flex items-center gap-3 mt-1 lg:mt-2">
              <div className="flex items-center">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Trusted brand avatar ${i + 1}`}
                    className={`h-6 w-6 rounded-full border border-[#0A0A0A] object-cover grayscale brightness-75 ${
                      i !== 0 ? "-ml-1.5" : ""
                    }`}
                  />
                ))}
              </div>
              <span className="text-[10px] text-gray-400 leading-tight">
                Trusted by 50+ brands <br/> worldwide
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}