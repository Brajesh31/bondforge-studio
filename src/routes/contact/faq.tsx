import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  MessageSquareText,
  ArrowRight
} from "lucide-react";

// --- DATA ---
const faqData = [
  {
    question: "How quickly do you respond?",
    answer: "We typically respond to all inquiries within 24 hours on business days. For urgent requests, you can reach us directly on WhatsApp or call."
  },
  {
    question: "Do you work with clients internationally?",
    answer: "Yes, we work with clients globally. Our team is equipped to handle brands and creators from across the world seamlessly."
  },
  {
    question: "What is the minimum project size?",
    answer: "We take on projects of various sizes. However, our typical engagements start at around $1,500 to ensure we can deliver the high quality and strategic depth our clients expect."
  },
  {
    question: "Can we hire you on a monthly basis?",
    answer: "Absolutely. We offer monthly retainers for continuous social media management, content creation, and strategy execution."
  },
  {
    question: "Do you sign NDAs?",
    answer: "Yes, we prioritize your privacy and confidentiality. We are fully open to signing Non-Disclosure Agreements before discussing any proprietary project details."
  },
  {
    question: "How does your onboarding process work?",
    answer: "Once we agree on the scope, we hold a kickoff call to align on brand voice, goals, and logistics. You'll then get access to a dedicated client portal where we manage all assets and communications."
  },
  {
    question: "What if I'm not happy with the final result?",
    answer: "We include structured revision rounds in all our projects. We work closely with you during the drafting phases to ensure the final deliverable completely aligns with your expectations."
  }
];

export function Faq() {
  // State holds exactly one index at a time. Defaults to 0 (the first question).
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFaq = (index: number) => {
    // If the clicked index is different from the currently open one, open it.
    // If it's the same, we do nothing (this prevents closing the only open question).
    if (openIndex !== index) {
      setOpenIndex(index);
    }
  };

  return (
    // Increased bottom padding (pb-10 md:pb-12)
    <section className="relative w-full overflow-hidden bg-[#FAFAFA] transition-colors duration-700 ease-in-out dark:bg-[#050505] pt-6 pb-10 md:pt-8 md:pb-12">
      {/* Container: Max 1800px, pushed to extreme edges with minimal padding */}
      <div className="mx-auto w-full max-w-[1800px] px-2 sm:px-4 lg:px-6">

        {/* Header Section */}
        <div className="mb-6 flex flex-col items-center justify-center text-center px-4 md:mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[36px] font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-[42px] md:text-[48px]"
          >
            Frequently asked <span className="font-serif italic font-normal text-[#E04D43]">questions.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-[15px] text-gray-500 dark:text-gray-400 font-medium"
          >
            Everything you need to know about working with Social Bond.
          </motion.p>
        </div>

        {/* Two-Column Grid: items-stretch ensures both columns are exactly the same height */}
        <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-2 lg:gap-6 xl:gap-8">

          {/* --- LEFT COLUMN --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            // h-full allows the image container to stretch to match the right column's height
            className="relative h-full min-h-[400px] w-full overflow-hidden rounded-[20px]"
          >
            <img
              src="/faq.png"
              alt="Social Bond Office FAQ"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Dark gradient overlay at the bottom for the card to sit on */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Overlay Contact Card */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 rounded-2xl bg-[#131313] p-5 sm:p-6 shadow-2xl border border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

                <div className="flex items-start sm:items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#8E2822] text-white">
                    <MessageSquareText className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[16px] font-bold text-white">Still have a question?</h4>
                    <p className="mt-1 text-[13px] text-gray-400 max-w-[250px] leading-snug">
                      We're here to help. Reach out to our team and we'll get back to you.
                    </p>
                  </div>
                </div>

                <a href="/contact" className="group flex items-center gap-1.5 text-[14px] font-medium text-[#E04D43] transition-colors hover:text-white self-start sm:self-end mt-2 sm:mt-0 pr-2">
                  Contact Us <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN (FAQ Accordion) --- */}
          <div className="flex h-full w-full flex-col gap-3">
            {faqData.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`flex flex-col rounded-2xl border transition-colors duration-300 ${
                    isOpen
                      ? "border-[#FADCD9] bg-[#FFF6F5] dark:border-red-900/30 dark:bg-[#E04D43]/10"
                      : "border-gray-100 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:bg-gray-50 dark:border-white/5 dark:bg-[#0C0C0C] dark:hover:bg-[#111]"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="flex w-full items-start gap-4 p-5 text-left focus:outline-none"
                  >
                    <div
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full mt-0.5 transition-colors duration-300 ${
                        isOpen
                          ? "bg-[#FCE8E6] text-[#E04D43] dark:bg-[#E04D43]/20"
                          : "bg-red-50 text-[#E04D43] dark:bg-[#E04D43]/10"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="h-4 w-4" strokeWidth={3} />
                      ) : (
                        <Plus className="h-4 w-4" strokeWidth={3} />
                      )}
                    </div>

                    <div className="flex flex-col w-full">
                      <h4 className="text-[15px] font-bold text-gray-900 dark:text-white pt-1">
                        {faq.question}
                      </h4>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            {/* min-h-[80px] ensures every opened row shares the same minimum height */}
                            <div className="flex min-h-[80px] items-start pt-2 pb-1 pr-2">
                              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-400">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}