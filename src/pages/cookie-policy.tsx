import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Cookie } from "lucide-react";

// Importing global sections
import { CTA } from "@/components/sections/cta";

export const Route = createFileRoute("/cookie-policy")({
  component: CookiePolicyPage,
});

function CookiePolicyPage() {
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
                <Cookie className="h-5 w-5 text-[#E04D43]" strokeWidth={2} />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E04D43]">
                LEGAL AGREEMENTS
              </span>
            </div>

            <h1 className="font-sans text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              Cookie <span className="font-serif italic text-[#E04D43] font-normal">Policy.</span>
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
              This Cookie Policy explains how Social Bond ("we," "our," or "us") uses cookies and similar tracking technologies when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>

            <h2 className="mt-10 text-2xl text-black dark:text-white">1. What are cookies?</h2>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>
            <p>
              Cookies set by the website owner (in this case, Social Bond) are called "first-party cookies." Cookies set by parties other than the website owner are called "third-party cookies." Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).
            </p>

            <h2 className="mt-10 text-2xl text-black dark:text-white">2. How we use cookies</h2>
            <p>
              We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our website.
            </p>
            <ul>
              <li><strong>Essential Cookies:</strong> These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas.</li>
              <li><strong>Analytics Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are.</li>
              <li><strong>Marketing Cookies:</strong> These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.</li>
            </ul>

            <h2 className="mt-10 text-2xl text-black dark:text-white">3. Managing cookies</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in your browser.
            </p>
            <ul>
              <li><strong>Browser Controls:</strong> You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. As the means by which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser's help menu for more information.</li>
              <li><strong>Opt-Out Tools:</strong> In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit authoritative resources like the Digital Advertising Alliance or the Network Advertising Initiative.</li>
            </ul>

            <h2 className="mt-10 text-2xl text-black dark:text-white">4. Changes to this policy</h2>
            <p>
              We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
            </p>
            <p>
              The date at the top of this Cookie Policy indicates when it was last updated.
            </p>

            <h2 className="mt-10 text-2xl text-black dark:text-white">5. Contact us</h2>
            <p>
              If you have any questions about our use of cookies or other technologies, please contact us at:
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
export default CookiePolicyPage;
