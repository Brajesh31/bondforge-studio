import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "@tanstack/react-router";
import { Plus, Minus, Headset, ArrowRight } from "lucide-react";

const faqData = [
  {
    question: "What services does Social Bond offer?",
    answer: "We offer video editing, influencer management, social media management, digital marketing and content strategy tailored to your brand's goals."
  },
  {
    question: "How long does it take to see results?",
    answer: "While initial engagement can increase within the first month, compounding growth and substantial ROI typically take 3 to 6 months of consistent execution."
  },
  {
    question: "Do you work with clients from outside India?",
    answer: "Yes, we work with clients globally. Our team is equipped to handle brands and creators from across the world seamlessly."
  },
  {
    question: "What platforms do you manage?",
    answer: "We manage all major social media platforms, including Instagram, YouTube, LinkedIn, TikTok, and X (Twitter), optimizing content for each specific algorithm."
  },
  {
    question: "Can I request a custom package?",
    answer: "Absolutely. We understand that every brand is unique. We can tailor a custom package that perfectly aligns with your specific goals and budget."
  },
  {
    question: "How do we get started?",
    answer: "Simply book a free consultation call with us. We'll discuss your goals, audit your current presence, and propose a strategic roadmap."
  }
];

const avatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop",
];

export function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      // ADDED: min-h-[100dvh] and adjusted vertical padding (py-12 md:py-20)
      // to make it look like one full screen while remaining centered.
      className="relative flex w-full min-h-[100dvh] flex-col justify-center bg-white text-black transition-colors duration-700 ease-in-out dark:bg-[#050505] dark:text-white py-12 md:py-20 lg:py-24"
    >
      {/* Maximum width 1800px, extreme left/right edges */}
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">

        {/* Reduced the gap so the columns feel closely matched and cohesive */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12 xl:gap-16">

          {/* --- LEFT COLUMN: HEADERS & CONTACT CARD --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            // Adjusted width slightly to balance the layout perfectly
            className="flex w-full shrink-0 flex-col lg:w-[40%] xl:w-[420px]"
          >
            {/* FAQS Tag */}
            <div className="mb-4 flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#E04D43]" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#E04D43] sm:text-xs">
                FAQS
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-sans text-4xl font-extrabold leading-[1.08] tracking-tight transition-colors duration-700 ease-in-out sm:text-5xl md:text-6xl">
              Questions? <br />
              We've got <span className="italic text-[#E04D43] transition-colors duration-700 ease-in-out">answers.</span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-gray-600 transition-colors duration-700 ease-in-out dark:text-gray-400 sm:text-base">
              Everything you need to know about <br className="hidden sm:block" />
              working with Social Bond.
            </p>

            {/* Social Proof (Avatars) - Removed the top divider line and used margin instead */}
            <div className="mt-8 flex flex-col items-start gap-4 lg:mt-10">
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  {avatars.map((url, idx) => (
                    <img
                      key={idx}
                      src={url}
                      alt="Brand Avatar"
                      className="h-9 w-9 rounded-full border-2 border-white object-cover transition-colors duration-700 ease-in-out dark:border-[#050505] sm:h-10 sm:w-10"
                    />
                  ))}
                  {/* 50+ Badge */}
                  <div className="z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-gray-100 text-[10px] font-bold text-gray-600 transition-colors duration-700 ease-in-out dark:border-[#050505] dark:bg-white/10 dark:text-gray-300 sm:h-10 sm:w-10 sm:text-xs">
                    50+
                  </div>
                </div>
              </div>
              <p className="text-xs font-medium leading-relaxed text-gray-600 transition-colors duration-700 ease-in-out dark:text-gray-400 sm:text-sm">
                50+ brands already growing <br />
                with Social Bond
              </p>
            </div>

            {/* "Still have questions?" Card - Styled identically to the FAQ items to match perfectly */}
            <div className="mt-8 flex flex-col rounded-2xl border border-gray-200 bg-white p-5 transition-colors duration-700 ease-in-out dark:border-white/10 dark:bg-[#0F0F11] sm:p-6 lg:mt-10">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 transition-colors duration-700 ease-in-out dark:bg-[#E04D43]/10">
                  <Headset className="h-6 w-6 text-[#E04D43]" strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-sm font-bold tracking-tight text-black transition-colors duration-700 ease-in-out dark:text-white sm:text-base">
                    Still have questions?
                  </h4>
                  <p className="mt-0.5 text-xs text-gray-500 transition-colors duration-700 ease-in-out dark:text-gray-400 sm:text-sm">
                    We're here to help you.
                  </p>
                </div>
              </div>

              {/* Removed the inner divider line, using margin-top to separate the link cleanly */}
              <Link
                to="/contact"
                className="group mt-6 flex items-center gap-2 text-sm font-bold text-[#E04D43] transition-colors hover:text-[#c93b32]"
              >
                Let's talk
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
              </Link>
            </div>

          </motion.div>

          {/* --- RIGHT COLUMN: ACCORDION LIST --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex w-full flex-1 flex-col gap-3 lg:gap-4"
          >
            {faqData.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-colors duration-700 ease-in-out dark:border-white/10 dark:bg-[#0F0F11]"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="flex w-full items-center justify-between gap-4 p-4 text-left transition-colors hover:bg-gray-50 dark:hover:bg-white/5 sm:p-5 lg:p-6"
                  >
                    <span className="font-sans text-sm font-bold text-black transition-colors duration-700 ease-in-out dark:text-white sm:text-base md:text-lg">
                      {faq.question}
                    </span>

                    {/* Interactive Icon Box */}
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-500 sm:h-9 sm:w-9 ${
                        isOpen
                          ? "bg-red-50 text-[#E04D43] dark:bg-[#E04D43]/10"
                          : "bg-gray-100 text-gray-500 dark:bg-white/5 dark:text-gray-300"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="h-4 w-4" strokeWidth={2.5} />
                      ) : (
                        <Plus className="h-4 w-4" strokeWidth={2.5} />
                      )}
                    </div>
                  </button>

                  {/* Accordion Body with Framer Motion */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-4 pb-5 pt-0 sm:px-5 sm:pb-6 lg:px-6 lg:pb-7">
                          <p className="max-w-[90%] text-xs leading-relaxed text-gray-600 transition-colors duration-700 ease-in-out dark:text-gray-400 sm:text-sm md:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}