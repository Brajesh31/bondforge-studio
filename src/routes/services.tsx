import { createFileRoute } from "@tanstack/react-router";

// Importing sections directly from your route-specific folder
import { Hero } from "@/routes/services/hero";
import { Our } from "@/routes/services/our";
import { Deliverables } from "@/routes/services/deliver";
import { Industries } from "@/routes/services/industries";
import { Featured } from "@/routes/services/featured";
import { Flow } from "@/routes/services/flow";
import { Brands } from "@/routes/services/brands";
import { Tools } from "@/routes/services/tools";
import { CTA } from "@/routes/services/cta";




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