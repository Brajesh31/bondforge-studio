import { createFileRoute } from "@tanstack/react-router";

// Importing sections directly from your route-specific folder
import { Hero } from "@/routes/contact/hero";
import Conversation from "@/routes/contact/conversation";
import { Reach } from "@/routes/contact/reach";
import { Meeting } from "@/routes/contact/meeting";
import Space from "@/routes/contact/space";
import { Faq } from "@/routes/contact/faq";
import { CTASection } from "@/routes/contact/cta";

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