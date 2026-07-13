import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  FileText,
  MessageSquare
} from "lucide-react";
import { CTA } from "@/components/sections/cta";

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

export const Route = createFileRoute("/faqs")({
  component: FaqsPage,
});

function FaqsPage() {
  // State holds exactly one index at a time. Defaults to 0 (the first question).
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFaq = (index: number) => {
    if (openIndex !== index) {
      setOpenIndex(index);
    }
  };

  return (
    <main className="relative min-h-dvh w-full overflow-hidden bg-[#FAFAFA] text-black transition-colors duration-700 ease-in-out dark:bg-[#050505] dark:text-white">

      {/* --- HERO & FAQ SECTION --- */}
      <section className="relative w-full pt-28 pb-10 md:pt-36 md:pb-16">
        {/* 1800px Max Width with extreme left/right edge positioning */}
        <div className="mx-auto w-full max-w-[1800px] px-2 sm:px-4 lg:px-6">

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-12">

            {/* LEFT COLUMN: Hero Text */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:col-span-5 xl:col-span-5"
            >
              <div className="mb-4 flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#E04D43]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#E04D43]">
                  SUPPORT & FAQS
                </span>
              </div>

              <h1 className="font-sans text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
                Questions? <br />
                We have <span className="font-serif italic text-[#E04D43] font-normal">answers.</span>
              </h1>

              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
                Everything you need to know about our process, pricing, and how we collaborate with brands worldwide. Can't find what you're looking for? Reach out directly.
              </p>

              <div className="mt-8 flex">
                <Link
                  to="/contact"
                  className="group flex items-center justify-center gap-2 rounded-xl bg-black px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                >
                  <MessageSquare className="h-4 w-4" strokeWidth={2.5} />
                  Contact Support
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                </Link>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Accordion */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-3 lg:col-span-7 xl:col-span-7"
            >
              {faqData.map((faq, idx) => {
                const isOpen = openIndex === idx;

                return (
                  <div
                    key={idx}
                    className={`flex flex-col overflow-hidden rounded-[16px] border transition-colors duration-300 ${
                      isOpen
                        ? "border-[#FADCD9] bg-[#FFF6F5] dark:border-red-900/30 dark:bg-[#E04D43]/10"
                        : "border-gray-200 bg-white shadow-sm hover:bg-gray-50 dark:border-white/5 dark:bg-[#0A0A0A] dark:hover:bg-[#111]"
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="flex w-full items-start gap-4 p-5 text-left focus:outline-none sm:p-6"
                    >
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full mt-0.5 transition-colors duration-300 ${
                          isOpen
                            ? "bg-[#FCE8E6] text-[#E04D43] dark:bg-[#E04D43]/20"
                            : "bg-red-50 text-[#E04D43] dark:bg-[#E04D43]/10"
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="h-4 w-4" strokeWidth={2.5} />
                        ) : (
                          <Plus className="h-4 w-4" strokeWidth={2.5} />
                        )}
                      </div>

                      <div className="flex flex-col w-full">
                        <h4 className="text-[15px] font-bold text-black dark:text-white pt-1 sm:text-[16px]">
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
                              <div className="flex items-start pt-3 pb-1 pr-2">
                                <p className="text-[13px] leading-relaxed text-gray-600 dark:text-gray-400 sm:text-[14px]">
                                  {faq.answer}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </button>
                  </div>
                );
              })}
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- LEGAL LINKS SECTION --- */}
      <section className="relative w-full pb-16 md:pb-24">
        <div className="mx-auto w-full max-w-[1800px] px-2 sm:px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex w-full flex-col gap-4 sm:flex-row lg:gap-6"
          >
            {/* Privacy Policy Card */}
            <div className="group flex flex-1 flex-col items-start justify-between rounded-[20px] bg-gray-100 p-6 transition-colors hover:bg-gray-200 dark:bg-[#0A0A0A] dark:hover:bg-[#111] sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm dark:bg-white/5 dark:shadow-none">
                <ShieldCheck className="h-5 w-5 text-black dark:text-white" strokeWidth={2} />
              </div>
              <div className="mt-8 flex flex-col">
                <h3 className="text-xl font-bold text-black dark:text-white">Privacy Policy</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Learn how we collect, use, and protect your data.
                </p>
              </div>
              <Link
                to="/privacy-policy"
                className="mt-6 flex items-center gap-2 text-sm font-bold text-[#E04D43] transition-colors hover:text-[#c93b32]"
              >
                Read Privacy Policy
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
              </Link>
            </div>

            {/* Terms of Service Card */}
            <div className="group flex flex-1 flex-col items-start justify-between rounded-[20px] bg-gray-100 p-6 transition-colors hover:bg-gray-200 dark:bg-[#0A0A0A] dark:hover:bg-[#111] sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm dark:bg-white/5 dark:shadow-none">
                <FileText className="h-5 w-5 text-black dark:text-white" strokeWidth={2} />
              </div>
              <div className="mt-8 flex flex-col">
                <h3 className="text-xl font-bold text-black dark:text-white">Terms & Conditions</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Review the terms that govern your use of our services.
                </p>
              </div>
              <Link
                to="/terms"
                className="mt-6 flex items-center gap-2 text-sm font-bold text-[#E04D43] transition-colors hover:text-[#c93b32]"
              >
                Read Terms
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- GLOBAL CTA --- */}
      <CTA />

    </main>
  );
}
export default FaqsPage;
