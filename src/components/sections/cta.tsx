import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Mail,
  Lock,
  Play,
  Instagram,
  Linkedin,
  Twitter,
  Phone,
  Globe,
  ChevronDown
} from "lucide-react";
import logo from "@/assets/logo.png";
import logoDark from "@/assets/logo2.png"; // Added dark theme logo

const avatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
];

export function CTA() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-white pt-6 pb-6 text-black transition-colors duration-700 ease-in-out dark:bg-[#050505] dark:text-white md:pt-10 md:pb-10"
    >
      <div className="pointer-events-none absolute inset-0 z-0 hidden md:block">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent opacity-50 dark:from-red-600/10" />
      </div>

      {/* Max width 1800px with minimal edge padding */}
      <div className="relative z-10 mx-auto w-full max-w-[1800px] px-2 sm:px-4 lg:px-6">

        {/* --- TOP SPLIT: TEXT & MOCKUPS --- */}
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:items-start lg:gap-4">

          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex w-full max-w-2xl flex-col pt-4 lg:w-[45%] lg:pt-12"
          >
            <h2 className="font-sans text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[80px]">
              Let's create something <br className="hidden sm:block" />
              incredible <span className="italic text-[#E04D43]">together.</span>
            </h2>

            <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:mt-6 sm:text-lg lg:text-xl">
              Your brand deserves more than ordinary content. <br className="hidden sm:block" />
              Let's build something that gets results.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6 lg:mt-10">
              <Link
                to="/contact"
                className="group flex items-center justify-center gap-2 rounded-xl bg-[#E04D43] px-6 py-4 text-sm font-bold text-white transition-all hover:bg-[#c93b32] sm:px-8 sm:text-base"
              >
                Book a Free Consultation
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2.5} />
              </Link>
              <Link
                to="/portfolio"
                className="group flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-transparent px-6 py-4 text-sm font-bold text-black transition-all hover:border-gray-400 hover:bg-gray-50 dark:border-white/20 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/5 sm:px-8 sm:text-base"
              >
                View Our Work
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2.5} />
              </Link>
            </div>
          </motion.div>

          {/* Right: Device Mockups */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex w-full justify-end lg:w-[55%]"
          >
            <div className="relative aspect-[16/10] w-full max-w-[800px]">
              {/* Tablet/Monitor Mockup */}
              <div className="absolute right-0 top-0 h-[90%] w-[85%] overflow-hidden rounded-2xl bg-black shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1200&auto=format&fit=crop"
                  alt="Video Production"
                  className="h-full w-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                    <div className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-white"></div>
                  </div>
                </div>
              </div>

              {/* Phone Mockup */}
              <div className="absolute bottom-0 left-[5%] h-[95%] w-[35%] min-w-[200px] overflow-hidden rounded-[2rem] border-[6px] border-gray-900 bg-black shadow-2xl dark:border-gray-800">
                <img
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop"
                  alt="Social Media Profile"
                  className="h-full w-full object-cover opacity-90"
                />
              </div>
            </div>
          </motion.div>

        </div>

        {/* --- BOTTOM ROW: TRUST BANNER --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl bg-gray-50 p-6 dark:bg-[#0a0a0a] md:mt-14 md:flex-row md:p-8"
        >
          {/* Left Side: Avatars & Rating */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <div className="flex -space-x-4">
              {avatars.map((url, idx) => (
                <img
                  key={idx}
                  src={url}
                  alt="Avatar"
                  className="h-10 w-10 rounded-full border-2 border-gray-50 object-cover dark:border-[#0a0a0a] sm:h-12 sm:w-12"
                />
              ))}
            </div>

            <div className="flex flex-col text-center sm:text-left">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Trusted by 50+ brands worldwide
              </span>
              <div className="mt-1 flex items-center justify-center gap-2 sm:justify-start">
                <div className="flex gap-1 text-[#E04D43]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-bold text-black dark:text-white">
                  4.9/5 average rating
                </span>
              </div>
            </div>
          </div>

          <p className="max-w-xs text-center text-sm leading-relaxed text-gray-600 dark:text-gray-400 md:text-left">
            Join the brands that chose Social Bond to tell their story and grow.
          </p>

          {/* Right Side: Signature */}
          <div className="relative flex flex-col items-center pt-2">
            <span className="font-serif text-3xl italic text-black dark:text-white sm:text-4xl">
              Let's make magic
            </span>
            <svg className="absolute -bottom-2 w-full text-[#E04D43]" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 15C50 5 150 -5 198 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

// Reusable Mobile Dropdown component for Footer Columns (Lines removed)
function FooterAccordionColumn({ title, children }: { title: string, children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col py-4 md:py-0">
      {/* Mobile Toggle Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left md:hidden"
      >
        <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-black dark:text-white">{title}</h4>
        <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Desktop Header */}
      <h4 className="hidden text-[11px] font-bold uppercase tracking-[0.15em] text-black dark:text-white md:block">
        {title}
      </h4>

      {/* Content */}
      <div className={`${isOpen ? 'mt-4 flex' : 'hidden'} flex-col md:mt-5 md:flex`}>
        {children}
      </div>
    </div>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() !== "") {
      setIsSubscribed(true);
      setEmail(""); // Clear the text input
    }
  };

  const recentWork = [
    { title: "ELEVATE EVERY EXPERIENCE.", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=400&auto=format&fit=crop" },
    { title: "LIVE BOLD. LIVE YOU.", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop" },
    { title: "MADE TO CRAVE.", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400&auto=format&fit=crop" },
    { title: "BUILT FOR MORE.", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop" },
    { title: "DATA THAT DRIVES GROWTH.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop" },
  ];

  return (
    <footer className="w-full bg-[#FAFAFA] pt-10 pb-8 transition-colors duration-700 ease-in-out dark:bg-[#050505] sm:pt-14">
      {/* Max width 1800px, extreme edge-to-edge */}
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">

        {/* --- TOP PANEL: NEWSLETTER & RECENT WORK --- */}
        <div className="flex flex-col pb-6 sm:pb-10 lg:flex-row">

          {/* Newsletter Section */}
          <div className="flex w-full flex-col justify-center rounded-2xl bg-white p-6 dark:bg-[#0F0F11] sm:p-8 lg:w-[40%] lg:rounded-none lg:bg-transparent lg:p-0 lg:pr-10 lg:dark:bg-transparent xl:pr-14">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#E04D43]">
              <Mail className="h-4 w-4" strokeWidth={2.5} />
              Stay Inspired
            </div>

            <h3 className="mt-4 text-2xl font-bold tracking-tight text-black dark:text-white sm:text-3xl lg:text-4xl">
              Get insights, tips & strategies <br className="hidden xl:block" />
              delivered to your inbox.
            </h3>

            <form
              onSubmit={handleSubscribe}
              className="mt-6 flex w-full max-w-md items-center rounded-lg border border-gray-200 bg-white p-1 dark:border-white/10 dark:bg-[#1A1A1C]"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubscribed}
                placeholder={isSubscribed ? "Subscribed" : "Enter your email address"}
                className="w-full bg-transparent px-4 py-2 text-sm text-black placeholder-gray-400 focus:outline-none disabled:opacity-60 dark:text-white"
              />
              <button
                type="submit"
                disabled={isSubscribed}
                className="shrink-0 rounded-md bg-black px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed dark:bg-white dark:text-black dark:hover:bg-gray-200 dark:disabled:bg-gray-600 dark:disabled:text-gray-300"
              >
                {isSubscribed ? "Subscribed" : "Subscribe"}
              </button>
            </form>

            <div className="mt-3 flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
              <Lock className="h-3 w-3" />
              No spam. Unsubscribe anytime.
            </div>
          </div>

          {/* Recent Work Preview */}
          <div className="mt-6 flex w-full flex-col justify-center rounded-2xl bg-white p-6 dark:bg-[#0F0F11] sm:p-8 lg:mt-0 lg:w-[60%] lg:rounded-none lg:bg-transparent lg:p-0 lg:pl-10 lg:dark:bg-transparent xl:pl-14">
            <h4 className="mb-5 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400">
              Recent Work Preview
            </h4>

            <div className="flex w-full gap-3 overflow-x-auto pb-2 hide-scrollbar sm:gap-4 lg:pb-0">
              {recentWork.map((work, idx) => (
                <div
                  key={idx}
                  className="group relative aspect-square w-28 shrink-0 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-900 sm:w-32 xl:w-36"
                >
                  <img
                    src={work.img}
                    alt={work.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/50" />

                  {/* Title overlay */}
                  <div className="absolute left-2 top-2 z-10 w-3/4">
                    <span className="font-sans text-[9px] font-black uppercase leading-tight text-white sm:text-[10px]">
                      {work.title}
                    </span>
                  </div>

                  {/* Play Button */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-[1.5px] border-white bg-transparent backdrop-blur-sm transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                      <Play className="h-3 w-3 fill-white text-white sm:h-4 sm:w-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* --- BOTTOM PANEL: LINKS & INFO --- */}
        <div className="mt-8 sm:mt-12">
          {/* Main layout is 4-column grid on desktop since "Resources" was removed */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-x-8 gap-y-4 md:gap-y-10">

            {/* Column 1: Brand & Socials */}
            <div className="flex flex-col pb-6 md:pb-0 lg:pr-8">
              <Link to="/" aria-label="Social Bond home" className="flex items-center gap-3 text-black dark:text-white w-fit">
                {/* Dual logos handling light and dark mode automatically via Tailwind classes */}
                <img src={logo} alt="Social Bond" className="h-8 w-auto dark:hidden transition-all duration-700" />
                <img src={logoDark} alt="Social Bond" className="h-8 w-auto hidden dark:block transition-all duration-700" />
                <span className="hidden select-none font-sans text-xl font-bold tracking-tight sm:block uppercase">
                  THE <span className="text-[#E04D43]">SOCIAL</span> BOND
                </span>
              </Link>

              <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:mt-5">
                We create content, campaigns, and experiences that connect brands with people and drive real results.
              </p>

              <div className="mt-6 flex items-center gap-4 text-black dark:text-white">
                <a href="https://www.instagram.com/thesocial.bond" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#E04D43]">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/company/thesocialbond" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#E04D43]">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://x.com/thesocialbondd" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#E04D43]">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Column 2: Services */}
            <FooterAccordionColumn title="Services">
              <ul className="flex flex-col gap-3">
                <li><Link to="/services" className="text-sm text-gray-600 transition-colors hover:text-[#E04D43] dark:text-gray-400">All Services</Link></li>
                <li><Link to="/services/video-editing" className="text-sm text-gray-600 transition-colors hover:text-[#E04D43] dark:text-gray-400">Video Editing</Link></li>
                <li><Link to="/services/social-media-management" className="text-sm text-gray-600 transition-colors hover:text-[#E04D43] dark:text-gray-400">Social Media Management</Link></li>
                <li><Link to="/services/influencer-management" className="text-sm text-gray-600 transition-colors hover:text-[#E04D43] dark:text-gray-400">Influencer Management</Link></li>
                <li><Link to="/services/digital-marketing" className="text-sm text-gray-600 transition-colors hover:text-[#E04D43] dark:text-gray-400">Digital Marketing</Link></li>
              </ul>
            </FooterAccordionColumn>

            {/* Column 3: Company */}
            <FooterAccordionColumn title="Company">
              <ul className="flex flex-col gap-3">
                <li><Link to="/about" className="text-sm text-gray-600 transition-colors hover:text-[#E04D43] dark:text-gray-400">About Us</Link></li>
                <li><Link to="/about#process" className="text-sm text-gray-600 transition-colors hover:text-[#E04D43] dark:text-gray-400">Our Process</Link></li>
                <li><Link to="/faqs" className="text-sm text-gray-600 transition-colors hover:text-[#E04D43] dark:text-gray-400">FAQs</Link></li>
                <li><Link to="/terms" className="text-sm text-gray-600 transition-colors hover:text-[#E04D43] dark:text-gray-400">Terms & Conditions</Link></li>
                <li><Link to="/contact" className="text-sm text-gray-600 transition-colors hover:text-[#E04D43] dark:text-gray-400">Contact Us</Link></li>
              </ul>
            </FooterAccordionColumn>

            {/* Column 4: Contact Us */}
            <div className="flex flex-col pt-6 md:pt-0">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-black dark:text-white">Contact Us</h4>
              <ul className="mt-5 flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-black dark:text-white" />
                  <div className="flex flex-col gap-1.5">
                    <a href="mailto:thesocialbond.dev@gmail.com" className="text-sm text-gray-600 transition-colors hover:text-[#E04D43] dark:text-gray-400">thesocialbond.dev@gmail.com</a>
                    <a href="mailto:anand@thesocialbond.com" className="text-sm text-gray-600 transition-colors hover:text-[#E04D43] dark:text-gray-400">anand@thesocialbond.com</a>
                  </div>
                </li>

                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-black dark:text-white" />
                  <a href="tel:+916207654589" className="text-sm text-gray-600 transition-colors hover:text-[#E04D43] dark:text-gray-400">+91 62076 54589</a>
                </li>

                <li className="flex items-start gap-3">
                  {/* Custom WhatsApp Icon SVG */}
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-black dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  <a
                    href="https://wa.me/916207654589?text=hello%20i%20want%20to%20connect%20regarding%20the%20work"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-gray-600 transition-colors hover:text-[#E04D43] dark:text-gray-400"
                  >
                    anyone what to ask about the work
                  </a>
                </li>

                <li className="flex items-center gap-3 pt-1 text-[#E04D43]">
                  <Globe className="h-4 w-4 shrink-0" />
                  <span className="text-sm font-semibold">We work globally</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}