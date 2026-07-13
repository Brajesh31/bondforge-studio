import { createFileRoute } from "@tanstack/react-router";

// Importing sections directly from your route-specific folder
import { Hero } from "@/pages/services/hero";
import { Our } from "@/pages/services/our";
import { Deliverables } from "@/pages/services/deliver";
import { Industries } from "@/pages/services/industries";
import { Featured } from "@/pages/services/featured";
import { Flow } from "@/pages/services/flow";
import { Brands } from "@/pages/services/brands";
import { Tools } from "@/pages/services/tools";
import { CTA } from "@/pages/services/cta";




export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-white text-black transition-colors duration-700 ease-in-out dark:bg-[#050505] dark:text-white">
      {/* Route-specific sections */}
      <Hero />
      <Our />
      <Deliverables />
      <Industries />
      <Featured />
      <Flow />
      <Brands />
      <Tools />

      <CTA />
    </main>
  );
}
export default ServicesPage;
