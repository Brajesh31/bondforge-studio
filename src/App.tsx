import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { NavBar } from "@/components/sections/nav";
import { Footer } from "@/components/sections/cta";

import Home from "@/pages/index";
import About from "@/pages/about";
import CaseStudies from "@/pages/case-studies";
import Contact from "@/pages/contact";
import CookiePolicy from "@/pages/cookie-policy";
import Faqs from "@/pages/faqs";
import FreeConsultation from "@/pages/free-consultation";
import Portfolio from "@/pages/portfolio";
import PrivacyPolicy from "@/pages/privacy-policy";
import RequestAQuote from "@/pages/request-a-quote";
import Services from "@/pages/services";
import ServicesDigitalMarketing from "@/pages/services.digital-marketing";
import ServicesInfluencerManagement from "@/pages/services.influencer-management";
import ServicesSocialMediaManagement from "@/pages/services.social-media-management";
import ServicesVideoEditing from "@/pages/services.video-editing";
import Terms from "@/pages/terms";
import Testimonials from "@/pages/testimonials";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-normal">404</h1>
        <p className="mt-4 text-muted-foreground">This page drifted off-brief.</p>
        <a href="/" className="mt-6 inline-block rounded-full bg-[#E04D43] px-5 py-2.5 text-sm font-bold text-white">
          Back to home
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/free-consultation" element={<FreeConsultation />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/request-a-quote" element={<RequestAQuote />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/digital-marketing" element={<ServicesDigitalMarketing />} />
        <Route path="/services/influencer-management" element={<ServicesInfluencerManagement />} />
        <Route path="/services/social-media-management" element={<ServicesSocialMediaManagement />} />
        <Route path="/services/video-editing" element={<ServicesVideoEditing />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
