import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ShieldCheck } from "lucide-react";

// Importing global sections
import { CTA } from "@/components/sections/cta";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
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
            // Added mx-auto, items-center, and text-center to perfectly center the hero content
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
                <ShieldCheck className="h-5 w-5 text-[#E04D43]" strokeWidth={2} />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E04D43]">
                LEGAL AGREEMENTS
              </span>
            </div>

            <h1 className="font-sans text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              Privacy <span className="font-serif italic text-[#E04D43] font-normal">Policy.</span>
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
            // Added mx-auto to center the entire text block on large screens
            className="prose prose-gray mx-auto max-w-4xl dark:prose-invert prose-headings:font-sans prose-headings:font-bold prose-headings:tracking-tight prose-a:text-[#E04D43] hover:prose-a:text-[#c93b32] prose-p:text-[15px] prose-p:leading-relaxed prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-li:text-[15px] prose-li:text-gray-600 dark:prose-li:text-gray-300"
          >
            <p className="text-lg font-medium text-black dark:text-white">
              This Privacy Policy describes how Social Bond ("we," "our," or "us") collects, uses, and shares information about you when you use our website, services, and applications.
            </p>

            <h2 className="mt-10 text-2xl text-black dark:text-white">1. Information We Collect</h2>
            <p>
              We collect information about you in a range of forms, including information you provide directly to us, information we collect automatically, and information we obtain from third-party sources.
            </p>
            <ul>
              <li><strong>Information you provide:</strong> This includes your name, email address, phone number, company details, and any other information you choose to provide when filling out forms on our website or communicating with us.</li>
              <li><strong>Automatically collected data:</strong> We log information about your interactions with our site, such as your IP address, browser type, operating system, and pages viewed.</li>
              <li><strong>Cookies & tracking:</strong> We use cookies and similar tracking technologies to track activity on our services and hold certain information to improve your user experience.</li>
            </ul>

            <h2 className="mt-10 text-2xl text-black dark:text-white">2. How We Use Information</h2>
            <p>
              We use the information we collect for various business and commercial purposes, including:
            </p>
            <ul>
              <li><strong>Providing services:</strong> To deliver the content, marketing strategies, and video editing services you request.</li>
              <li><strong>Communications:</strong> To respond to your comments, questions, and requests, and provide customer support.</li>
              <li><strong>Analytics & improvement:</strong> To monitor and analyze trends, usage, and activities in connection with our website and services to improve functionality.</li>
            </ul>

            <h2 className="mt-10 text-2xl text-black dark:text-white">3. Sharing & Disclosure</h2>
            <p>
              We do not sell your personal information. We may share your information in the following circumstances:
            </p>
            <ul>
              <li><strong>Service providers:</strong> With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.</li>
              <li><strong>Legal requirements:</strong> In response to a request for information if we believe disclosure is in accordance with, or required by, any applicable law, regulation, or legal process.</li>
              <li><strong>Business transfers:</strong> In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company.</li>
            </ul>

            <h2 className="mt-10 text-2xl text-black dark:text-white">4. Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul>
              <li><strong>Access:</strong> The right to request access to the personal information we hold about you.</li>
              <li><strong>Correction:</strong> The right to request that we correct any inaccurate or incomplete personal information.</li>
              <li><strong>Deletion:</strong> The right to request that we delete your personal information, subject to certain exceptions.</li>
              <li><strong>Objection:</strong> The right to object to our processing of your personal information for direct marketing purposes.</li>
            </ul>

            <h2 className="mt-10 text-2xl text-black dark:text-white">5. Data Retention</h2>
            <p>
              We retain personal information we collect from you where we have an ongoing legitimate business need to do so (for example, to provide you with a service you have requested or to comply with applicable legal, tax, or accounting requirements). When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it.
            </p>

            <h2 className="mt-10 text-2xl text-black dark:text-white">6. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at:
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
export default PrivacyPolicyPage;
