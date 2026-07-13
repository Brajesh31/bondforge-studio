import { createFileRoute } from "@tanstack/react-router";

// Importing sections directly from your route-specific folder
import { Hero } from "@/pages/contact/hero";
import Conversation from "@/pages/contact/conversation";
import { Reach } from "@/pages/contact/reach";
import { Meeting } from "@/pages/contact/meeting";
import Space from "@/pages/contact/space";
import { Faq } from "@/pages/contact/faq";
import { CTASection } from "@/pages/contact/cta";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-white text-black transition-colors duration-700 ease-in-out dark:bg-[#050505] dark:text-white">
      {/* Route-specific sections */}
      <Hero />
      <Conversation />
      <Reach />

      <Space />
      <Faq />
      <CTASection />

    </main>
  );
}
export default ContactPage;
