import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/hero";
import { Trust } from "@/components/sections/trust";
import { Services } from "@/components/sections/services";
import { Portfolio } from "@/components/sections/portfolio";
import { Results } from "@/components/sections/results";
import { Industries } from "@/components/sections/industries";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { Team } from "@/components/sections/team";
import { CTA } from "@/components/sections/cta";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-background text-foreground">
      <Hero />
      <Trust />
      <Services />
      <Portfolio />
      <Results />
      <Industries />
      <Process />
      <Testimonials />
      <Team />
      <CTA />
    </main>
  );
}
