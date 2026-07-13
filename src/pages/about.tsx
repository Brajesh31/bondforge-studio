import { createFileRoute } from "@tanstack/react-router";

// Importing sections directly from your route-specific folder
import { Hero } from "@/routes/about/hero";
import { Story } from "@/routes/about/story";
import { Principal } from "@/routes/about/principal";
import { Team } from "@/routes/about/team";
import { Capabilities } from "@/routes/about/capabilities";
import { NumberSection } from "@/routes/about/number";
import { ClientSection } from "@/routes/about/client";
import { Process } from "@/routes/about/process";
import CTASection from "@/routes/about/cta";





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