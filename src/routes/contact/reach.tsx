import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MessageCircle,
  Instagram,
  Linkedin,
  Twitter,
  Users,
  Calendar,
  Video,
  ArrowRight,
  Globe
} from "lucide-react";

// --- DATA ---
const contactChannels = [
  {
    icon: Mail,
    title: "Email Us",
    desc: "thesocialbond.dev@gmail.com\nanand@thesocialbond.com",
    linkText: "Send an Email",
    href: "mailto:thesocialbond.dev@gmail.com",
    img: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: Phone,
    title: "Call Us",
    desc: "Speak directly with our team\nMon – Fri, 9 AM – 6 PM (IST)",
    linkText: "+91 62076 54589",
    href: "tel:+916207654589",
    img: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Us",
    desc: "Anyone want to ask about the work.\n(We work globally)",
    linkText: "Chat on WhatsApp",
    // Link opens WhatsApp with the specific number and pre-filled message
    href: "https://wa.me/916207654589?text=hello%20i%20want%20to%20connect%20regarding%20the%20work",
    img: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: Instagram,
    title: "Instagram",
    desc: "See our latest work, behind the scenes\nand client stories.",
    linkText: "@thesocial.bond",
    href: "https://www.instagram.com/thesocial.bond",
    img: "https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    desc: "Connect with us for collaborations\nand business opportunities.",
    linkText: "Connect on LinkedIn",
    href: "https://www.linkedin.com/company/thesocialbond",
    img: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: Twitter,
    title: "X (Twitter)",
    desc: "Follow us for the latest updates,\nnews, and quick tips.",
    linkText: "@thesocialbondd",
    href: "https://x.com/thesocialbondd",
    img: "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=600&auto=format&fit=crop",
  },
];

const bannerFeatures = [
  {
    icon: Globe,
    title: "We Work Globally",
    desc: "No matter where you are,\nwe can collaborate.",
  },
  {
    icon: Calendar,
    title: "30-Minute Call",
    desc: "Focused, no-fluff\nconsultation.",
  },
  {
    icon: Video,
    title: "Google Meet / Zoom",
    desc: "Your choice of platform,\nyour convenience.",
  },
];

export function Reach() {
  // State for the Subscription feature
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() !== "") {
      setIsSubscribed(true);
      setEmail(""); // Clears the text
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#FAFAFA] text-black transition-colors duration-700 ease-in-out dark:bg-[#050505] dark:text-white pt-6 pb-2 md:pt-8 md:pb-4">
      <div className="mx-auto w-full max-w-[1800px] px-2 sm:px-4 lg:px-6">

        {/* --- HEADER --- */}
        <div className="flex flex-col items-center justify-center text-center pb-6 md:pb-8">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-sans text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl"
          >
            Let's connect. <span className="font-serif italic text-[#E04D43] font-normal">Choose your way.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-[14px] text-gray-600 dark:text-gray-400 font-medium sm:text-base"
          >
            We're just a message away and we work globally. Reach out through any of these channels.
          </motion.p>
        </div>

        {/* --- 6 CARDS CENTERED GRID (Flex Wrap approach) --- */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 xl:gap-5">
          {contactChannels.map((channel, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] xl:w-[calc(33.333%-14px)] group flex flex-col overflow-hidden rounded-[16px] bg-white shadow-sm border border-gray-200 transition-all hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-[#080808] dark:shadow-none"
            >
              <div className="relative h-24 w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
                <img
                  src={channel.img}
                  alt={channel.title}
                  className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent dark:from-black/50" />
              </div>

              <div className="relative flex flex-col p-5 pt-8">
                <div className="absolute -top-6 left-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm border border-gray-100 dark:bg-[#111] dark:border-white/10 transition-colors">
                  <channel.icon className="h-5 w-5 text-black dark:text-white" strokeWidth={1.5} />
                </div>

                <h3 className="font-sans text-[16px] font-bold tracking-tight text-black dark:text-white">
                  {channel.title}
                </h3>
                <p className="mt-1.5 whitespace-pre-line text-[12px] leading-relaxed text-gray-500 dark:text-gray-400">
                  {channel.desc}
                </p>

                <a
                  href={channel.href}
                  target={channel.icon !== Phone && channel.icon !== Mail ? "_blank" : "_self"}
                  rel="noreferrer"
                  className="mt-5 flex w-fit items-center gap-1.5 text-[13px] font-bold text-[#E04D43] transition-colors hover:text-[#c93b32] dark:text-white dark:hover:text-gray-300"
                >
                  {channel.linkText}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- FLATTENED BOTTOM BANNER WITH NEWSLETTER --- */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex w-full flex-col justify-between gap-8 border-y border-gray-200 py-6 dark:border-white/10 lg:mt-10 lg:flex-row lg:items-start lg:py-8"
        >
          {/* Newsletter Subscribe Area */}
          <div className="flex flex-col lg:w-[40%]">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black dark:bg-white">
                <Users className="h-4 w-4 text-white dark:text-black" strokeWidth={2} />
              </div>
              <h4 className="text-[16px] font-bold text-black dark:text-white">
                Stay in the loop
              </h4>
            </div>

            <p className="mt-3 text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">
              Subscribe to our newsletter for the latest updates and strategies.
            </p>

            <form onSubmit={handleSubscribe} className="mt-4 flex w-full max-w-sm items-center gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubscribed}
                placeholder={isSubscribed ? "Subscribed!" : "Enter your email..."}
                className="flex-1 rounded-md border border-gray-300 px-4 py-2.5 text-sm text-black outline-none transition-colors focus:border-[#E04D43] disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500 dark:border-gray-800 dark:bg-[#111] dark:text-white dark:focus:border-white/50 dark:disabled:bg-[#151515]"
                required
              />
              <button
                type="submit"
                disabled={isSubscribed}
                className="rounded-md bg-[#E04D43] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#c93b32] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubscribed ? "Subscribed" : "Subscribe"}
              </button>
            </form>
          </div>

          {/* Mini Features */}
          <div className="flex w-full flex-col gap-5 sm:flex-row sm:justify-between lg:w-[55%] pt-2">
            {bannerFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-gray-100 dark:bg-white/5">
                  <feature.icon className="h-4 w-4 text-black dark:text-white" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <h5 className="text-[13px] font-bold text-black dark:text-white">
                    {feature.title}
                  </h5>
                  <p className="mt-1 whitespace-pre-line text-[12px] leading-snug text-gray-500 dark:text-gray-400">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}