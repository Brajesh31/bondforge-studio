import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, FileText } from "lucide-react";

// Importing global sections
import { CTA } from "@/components/sections/cta";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
});

function TermsPage() {
  const lastUpdated = "July 13, 2026";

  return (
    <main className="relative min-h-dvh w-full overflow-hidden bg-[#FAFAFA] text-black transition-colors duration-700 ease-in-out dark:bg-[#050505] dark:text-white">

      {/* --- HERO SECTION --- */}
      <section className="relative w-full pt-28 pb-6 md:pt-36 md:pb-10 border-b border-gray-200 dark:border-white/10">
        <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto flex w-full max-w-4xl flex-col items-center text-center"
          >
            <Link
              to="/faqs"
              className="mb-6 flex w-fit items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Support
            </Link>

            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 dark:bg-[#E04D43]/10">
                <FileText className="h-5 w-5 text-[#E04D43]" strokeWidth={2} />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E04D43]">
                LEGAL AGREEMENTS
              </span>
            </div>

            <h1 className="font-sans text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              Terms & <span className="font-serif italic text-[#E04D43] font-normal">Conditions.</span>
            </h1>

            <p className="mt-4 text-[14px] font-medium text-gray-500 dark:text-gray-400 sm:text-base">
              Last updated: {lastUpdated}
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- DOCUMENT CONTENT --- */}
      <section className="relative w-full py-10 md:py-16">
        <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-gray mx-auto max-w-4xl dark:prose-invert prose-headings:font-sans prose-headings:font-bold prose-headings:tracking-tight prose-a:text-[#E04D43] hover:prose-a:text-[#c93b32] prose-p:text-[15px] prose-p:leading-relaxed prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-li:text-[15px] prose-li:text-gray-600 dark:prose-li:text-gray-300"
          >
            <p className="text-lg font-medium text-black dark:text-white">
              These Terms & Conditions govern your use of the Social Bond website and services. By accessing or using our services, you agree to be bound by these terms.
            </p>

            <h2 className="mt-10 text-2xl text-black dark:text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing our website and using our services, you accept and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these terms, you must not access or use our services.
            </p>

            <h2 className="mt-10 text-2xl text-black dark:text-white">2. User Responsibilities</h2>
            <p>
              As a user of our services, you agree to:
            </p>
            <ul>
              <li>Provide accurate and complete information when creating an account or requesting services.</li>
              <li>Use the services only for lawful purposes and in accordance with these Terms.</li>
              <li>Not engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website, or which may harm Social Bond or our users.</li>
            </ul>

            <h2 className="mt-10 text-2xl text-black dark:text-white">3. Intellectual Property</h2>
            <p>
              The website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Social Bond, its licensors, or other providers of such material and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>

            <h2 className="mt-10 text-2xl text-black dark:text-white">4. Limitation of Liability</h2>
            <p>
              In no event will Social Bond, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, our website, any websites linked to it, any content on the website or such other websites, including any direct, indirect, special, incidental, consequential, or punitive damages.
            </p>

            <h2 className="mt-10 text-2xl text-black dark:text-white">5. Changes to the Terms</h2>
            <p>
              We may revise and update these Terms from time to time in our sole discretion. All changes are effective immediately when we post them. Your continued use of the website following the posting of revised Terms means that you accept and agree to the changes.
            </p>

            <h2 className="mt-10 text-2xl text-black dark:text-white">6. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="font-medium text-black dark:text-white">
              Email: teams@thesocialbond.com<br />

            </p>

          </motion.div>
        </div>
      </section>

      {/* --- GLOBAL CTA --- */}
      <CTA />

    </main>
  );
}