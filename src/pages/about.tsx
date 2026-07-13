import { createFileRoute } from "@tanstack/react-router";

// Importing sections directly from your route-specific folder
import { Hero } from "@/pages/about/hero";
import { Story } from "@/pages/about/story";
import { Principal } from "@/pages/about/principal";
import { Team } from "@/pages/about/team";
import { Capabilities } from "@/pages/about/capabilities";
import { NumberSection } from "@/pages/about/number";
import { ClientSection } from "@/pages/about/client";
import { Process } from "@/pages/about/process";
import CTASection from "@/pages/about/cta";





export const Route = createFileRoute("/about")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-white text-black transition-colors duration-700 ease-in-out dark:bg-[#050505] dark:text-white">
      {/* Route-specific sections */}
      <Hero />
      <Story />
      <Principal />
      <Team />
      <Capabilities />
      <NumberSection />
      <ClientSection />
      <Process />
      <CTASection />


    </main>
  );
}
export default ContactPage;
