import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/hero";
import { Trust } from "@/components/sections/trust";
import { Services } from "@/components/sections/services";
import { Portfolio } from "@/components/sections/portfolio";
import { Results } from "@/components/sections/results";
import { Industries } from "@/components/sections/industries";
import { Testimonials } from "@/components/sections/testimonials";
import { Team } from "@/components/sections/team";
import { Faqs } from "@/components/sections/faqs";
import { CTA } from "@/components/sections/cta";

export const Route = createFileRoute("/")({
  component: Home,
});

const Spacer = () => <div aria-hidden className="w-full bg-white h-3 md:h-4" />;

function Home() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-white text-foreground">
      <Hero />
      <Spacer />
      <Trust />
      <Spacer />
      <Services />
      <Spacer />
      <Portfolio />
      <Spacer />
      <Results />
      <Spacer />
      <Industries />
      <Spacer />
      <Testimonials />
      <Spacer />
      <Team />
      <Spacer />
      <Faqs />
      <Spacer />
      <CTA />
    </main>
  );
}
