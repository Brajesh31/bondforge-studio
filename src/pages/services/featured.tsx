// featured.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Dumbbell,
  Leaf,
  LayoutGrid,
  ShoppingCart,
  Building2,
  Shirt,
  Video,
  Users,
  Monitor,
  Megaphone,
  Lightbulb,
  Mic
} from "lucide-react";

// --- DATA STRUCTURE ---

// 1. Video Editing
const videoEditing = [
  {
    categoryLabel: "FITNESS",
    title: "PowerFit India",
    desc: "Complete content & social media management.",
    icon: Dumbbell,
    iconColor: "text-red-500",
    iconBg: "bg-red-50 dark:bg-red-500/10",
    metric: "+187%",
    metricLabel: "Engagement",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    showTopPlay: true,
  },
  {
    categoryLabel: "FITNESS",
    title: "Apex Athletics",
    desc: "YouTube documentary series & short-form cutdowns.",
    icon: Video,
    iconColor: "text-red-500",
    iconBg: "bg-red-50 dark:bg-red-500/10",
    metric: "2.1M",
    metricLabel: "Views",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
    showTopPlay: false,
  },
  {
    categoryLabel: "SPORTS",
    title: "Zenith Training",
    desc: "Cinematic gym tours and trainer highlights.",
    icon: Video,
    iconColor: "text-red-500",
    iconBg: "bg-red-50 dark:bg-red-500/10",
    metric: "+140%",
    metricLabel: "Watch Time",
    img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop",
    showTopPlay: false,
  },
  {
    categoryLabel: "FITNESS",
    title: "Iron Core Gym",
    desc: "Member transformation stories and social reels.",
    icon: Video,
    iconColor: "text-red-500",
    iconBg: "bg-red-50 dark:bg-red-500/10",
    metric: "+95%",
    metricLabel: "Lead Gen",
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",
    showTopPlay: false,
  },
  {
    categoryLabel: "ATHLETICS",
    title: "Velocity Motion",
    desc: "High-energy apparel drop teasers.",
    icon: Video,
    iconColor: "text-red-500",
    iconBg: "bg-red-50 dark:bg-red-500/10",
    metric: "4.5x",
    metricLabel: "Conversion",
    img: "https://images.unsplash.com/photo-1554244933-d876deb6b2ff?q=80&w=800&auto=format&fit=crop",
    showTopPlay: false,
  },
  {
    categoryLabel: "WELLNESS",
    title: "Pulse Active",
    desc: "Daily workout clips and educational shorts.",
    icon: Video,
    iconColor: "text-red-500",
    iconBg: "bg-red-50 dark:bg-red-500/10",
    metric: "+320k",
    metricLabel: "Followers",
    img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800&auto=format&fit=crop",
    showTopPlay: false,
  }
];

// 2. Social Media Management
const socialMedia = [
  {
    categoryLabel: "BEAUTY",
    title: "Luxe Organics",
    desc: "Product videography & ad campaigns.",
    icon: Leaf,
    iconColor: "text-green-600 dark:text-green-400",
    iconBg: "bg-green-50 dark:bg-green-500/10",
    metric: "+243%",
    metricLabel: "ROAS",
    img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop",
    showTopPlay: false,
  },
  {
    categoryLabel: "SKINCARE",
    title: "Glow & Co.",
    desc: "Organic feed growth & community management.",
    icon: Users,
    iconColor: "text-green-600 dark:text-green-400",
    iconBg: "bg-green-50 dark:bg-green-500/10",
    metric: "+150k",
    metricLabel: "Followers",
    img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop",
    showTopPlay: false,
  },
  {
    categoryLabel: "AESTHETICS",
    title: "Derma Aesthetics",
    desc: "Clinical procedure reels and before/afters.",
    icon: Users,
    iconColor: "text-green-600 dark:text-green-400",
    iconBg: "bg-green-50 dark:bg-green-500/10",
    metric: "+210%",
    metricLabel: "Inquiries",
    // FIXED IMAGE
    img: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=800&auto=format&fit=crop",
    showTopPlay: false,
  },
  {
    categoryLabel: "ORGANIC",
    title: "Purely Natural",
    desc: "Ingredient spotlight series and brand education.",
    icon: Users,
    iconColor: "text-green-600 dark:text-green-400",
    iconBg: "bg-green-50 dark:bg-green-500/10",
    metric: "3.2x",
    metricLabel: "Engagement",
    // FIXED IMAGE
    img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=800&auto=format&fit=crop",
    showTopPlay: false,
  },
  {
    categoryLabel: "BEAUTY",
    title: "Silk Skincare",
    desc: "Aesthetic lifestyle imagery and product drops.",
    icon: Users,
    iconColor: "text-green-600 dark:text-green-400",
    iconBg: "bg-green-50 dark:bg-green-500/10",
    metric: "+185%",
    metricLabel: "Profile Visits",
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
    showTopPlay: false,
  },
  {
    categoryLabel: "WELLNESS",
    title: "Botanica",
    desc: "Holistic wellness routines and influencer partnerships.",
    icon: Users,
    iconColor: "text-green-600 dark:text-green-400",
    iconBg: "bg-green-50 dark:bg-green-500/10",
    metric: "+400%",
    metricLabel: "Reach",
    // FIXED IMAGE
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop",
    showTopPlay: false,
  }
];

// 3. Website Design
const websiteDesign = [
  {
    categoryLabel: "SAAS",
    title: "SyncFlow",
    desc: "Explainer video & content strategy.",
    icon: LayoutGrid,
    iconColor: "text-indigo-500 dark:text-indigo-400",
    iconBg: "bg-indigo-50 dark:bg-indigo-500/10",
    metric: "+156%",
    metricLabel: "Demo Signups",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    showTopPlay: false,
  },
  {
    categoryLabel: "ANALYTICS",
    title: "DataDash",
    desc: "Complete landing page overhaul and 3D assets.",
    icon: Monitor,
    iconColor: "text-indigo-500 dark:text-indigo-400",
    iconBg: "bg-indigo-50 dark:bg-indigo-500/10",
    metric: "+40%",
    metricLabel: "Conversion",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    showTopPlay: false,
  },
  {
    categoryLabel: "CLOUD",
    title: "CloudScale",
    desc: "Interactive web experience & feature tours.",
    icon: Monitor,
    iconColor: "text-indigo-500 dark:text-indigo-400",
    iconBg: "bg-indigo-50 dark:bg-indigo-500/10",
    metric: "-25%",
    metricLabel: "Bounce Rate",
    img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop",
    showTopPlay: false,
  },
  {
    categoryLabel: "CRM",
    title: "Nexus CRM",
    desc: "High-converting funnel design and copy.",
    icon: Monitor,
    iconColor: "text-indigo-500 dark:text-indigo-400",
    iconBg: "bg-indigo-50 dark:bg-indigo-500/10",
    metric: "+210%",
    metricLabel: "Free Trials",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
    showTopPlay: false,
  },
  {
    categoryLabel: "HR TECH",
    title: "TeamAlign",
    desc: "Enterprise website architecture and animations.",
    icon: Monitor,
    iconColor: "text-indigo-500 dark:text-indigo-400",
    iconBg: "bg-indigo-50 dark:bg-indigo-500/10",
    metric: "+85%",
    metricLabel: "Sales Calls",
    img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
    showTopPlay: false,
  },
  {
    categoryLabel: "FINTECH",
    title: "MetricBase",
    desc: "Trust-focused design & streamlined onboarding.",
    icon: Monitor,
    iconColor: "text-indigo-500 dark:text-indigo-400",
    iconBg: "bg-indigo-50 dark:bg-indigo-500/10",
    metric: "3x",
    metricLabel: "User Retention",
    img: "https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=800&auto=format&fit=crop",
    showTopPlay: false,
  }
];

// 4. Digital Marketing
const digitalMarketing = [
  {
    categoryLabel: "E-COMMERCE",
    title: "Hydra Energy",
    desc: "Ad creatives, reels & performance marketing.",
    icon: ShoppingCart,
    iconColor: "text-orange-500",
    iconBg: "bg-orange-50 dark:bg-orange-500/10",
    metric: "+312%",
    metricLabel: "Sales Increase",
    img: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?q=80&w=800&auto=format&fit=crop",
    showTopPlay: false,
  },
  {
    categoryLabel: "RETAIL",
    title: "Urban Crafters",
    desc: "Meta & TikTok ad scaling for new collections.",
    icon: Megaphone,
    iconColor: "text-orange-500",
    iconBg: "bg-orange-50 dark:bg-orange-500/10",
    metric: "3.8x",
    metricLabel: "ROAS",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
    showTopPlay: false,
  },
  {
    categoryLabel: "F&B",
    title: "Bean & Brew",
    desc: "Local targeting and subscription box launch.",
    icon: Megaphone,
    iconColor: "text-orange-500",
    iconBg: "bg-orange-50 dark:bg-orange-500/10",
    metric: "+420%",
    metricLabel: "Subscriptions",
    img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop",
    showTopPlay: false,
  },
  {
    categoryLabel: "APPAREL",
    title: "Swift Kicks",
    desc: "Dynamic retargeting and UGC video ads.",
    icon: Megaphone,
    iconColor: "text-orange-500",
    iconBg: "bg-orange-50 dark:bg-orange-500/10",
    metric: "-45%",
    metricLabel: "CPA",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
    showTopPlay: false,
  },
  {
    categoryLabel: "LUXURY",
    title: "Lumina Watches",
    desc: "High-ticket purchase funnels and search ads.",
    icon: Megaphone,
    iconColor: "text-orange-500",
    iconBg: "bg-orange-50 dark:bg-orange-500/10",
    metric: "+150%",
    metricLabel: "Revenue",
    img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=800&auto=format&fit=crop",
    showTopPlay: false,
  },
  {
    categoryLabel: "HOME",
    title: "Crafted Goods",
    desc: "Pinterest and Google Shopping integrations.",
    icon: Megaphone,
    iconColor: "text-orange-500",
    iconBg: "bg-orange-50 dark:bg-orange-500/10",
    metric: "4.1x",
    metricLabel: "ROAS",
    img: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?q=80&w=800&auto=format&fit=crop",
    showTopPlay: false,
  }
];

// 5. Content Strategy (ENTIRELY REWRITTEN TO FOCUS ON SOCIAL/YOUTUBE MANAGEMENT STRATEGY)
const contentStrategy = [
  {
    categoryLabel: "YOUTUBE",
    title: "Creator Growth Hub",
    desc: "YouTube channel strategy and video pillar planning.",
    icon: Lightbulb,
    iconColor: "text-amber-600 dark:text-amber-500",
    iconBg: "bg-amber-50 dark:bg-amber-500/10",
    metric: "+450k",
    metricLabel: "Subscribers",
    img: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=800&auto=format&fit=crop", // Creator desk/setup
    showTopPlay: false,
  },
  {
    categoryLabel: "INSTAGRAM",
    title: "Grid Mastery",
    desc: "Visual aesthetic overhaul and daily feed strategy.",
    icon: Lightbulb,
    iconColor: "text-amber-600 dark:text-amber-500",
    iconBg: "bg-amber-50 dark:bg-amber-500/10",
    metric: "+120%",
    metricLabel: "Engagement",
    img: "https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=800&auto=format&fit=crop", // Instagram context
    showTopPlay: false,
  },
  {
    categoryLabel: "BRAND ARCHITECTURE",
    title: "Content Blueprint",
    desc: "360° content architecture across 5 social platforms.",
    icon: Lightbulb,
    iconColor: "text-amber-600 dark:text-amber-500",
    iconBg: "bg-amber-50 dark:bg-amber-500/10",
    metric: "10M",
    metricLabel: "Monthly Reach",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop", // Team strategizing
    showTopPlay: false,
  },
  {
    categoryLabel: "TIKTOK",
    title: "Viral Hooks",
    desc: "Short-form script writing and trend forecasting.",
    icon: Lightbulb,
    iconColor: "text-amber-600 dark:text-amber-500",
    iconBg: "bg-amber-50 dark:bg-amber-500/10",
    metric: "3.2x",
    metricLabel: "Watch Time",
    img: "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=800&auto=format&fit=crop", // TikTok on phone
    showTopPlay: false,
  },
  {
    categoryLabel: "B2B SOCIAL",
    title: "LinkedIn Authority",
    desc: "Founder personal branding and thought leadership.",
    icon: Lightbulb,
    iconColor: "text-amber-600 dark:text-amber-500",
    iconBg: "bg-amber-50 dark:bg-amber-500/10",
    metric: "+400%",
    metricLabel: "Profile Views",
    img: "https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=800&auto=format&fit=crop", // Professional social
    showTopPlay: false,
  },
  {
    categoryLabel: "PODCAST",
    title: "Audio to Social",
    desc: "Long-form podcast distribution into viral micro-clips.",
    icon: Lightbulb,
    iconColor: "text-amber-600 dark:text-amber-500",
    iconBg: "bg-amber-50 dark:bg-amber-500/10",
    metric: "8.5M",
    metricLabel: "Clip Views",
    img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop", // Podcast mic
    showTopPlay: false,
  }
];

// 6. Influencer Management
const influencerManagement = [
  {
    categoryLabel: "FASHION",
    title: "Thread Theory",
    desc: "Social media management & creative production.",
    icon: Shirt,
    iconColor: "text-gray-600 dark:text-gray-300",
    iconBg: "bg-gray-100 dark:bg-gray-700/30",
    metric: "+174%",
    metricLabel: "Profile Growth",
    img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&auto=format&fit=crop",
    showTopPlay: false,
  },
  {
    categoryLabel: "APPAREL",
    title: "Velvet & Vogue",
    desc: "Micro-influencer seeding and UGC sourcing.",
    icon: Mic,
    iconColor: "text-gray-600 dark:text-gray-300",
    iconBg: "bg-gray-100 dark:bg-gray-700/30",
    metric: "12M+",
    metricLabel: "Impressions",
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop",
    showTopPlay: false,
  },
  {
    categoryLabel: "STREETWEAR",
    title: "Nomad Apparel",
    desc: "Festival activations and creator collaborations.",
    icon: Mic,
    iconColor: "text-gray-600 dark:text-gray-300",
    iconBg: "bg-gray-100 dark:bg-gray-700/30",
    metric: "+220%",
    metricLabel: "Engagement",
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    showTopPlay: false,
  },
  {
    categoryLabel: "ACCESSORIES",
    title: "Chroma Style",
    desc: "Viral TikTok challenges and brand ambassadors.",
    icon: Mic,
    iconColor: "text-gray-600 dark:text-gray-300",
    iconBg: "bg-gray-100 dark:bg-gray-700/30",
    metric: "5.4x",
    metricLabel: "ROI",
    img: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=800&auto=format&fit=crop",
    showTopPlay: false,
  },
  {
    categoryLabel: "ACTIVEWEAR",
    title: "Elevate Wear",
    desc: "Athlete sponsorships and product launch events.",
    icon: Mic,
    iconColor: "text-gray-600 dark:text-gray-300",
    iconBg: "bg-gray-100 dark:bg-gray-700/30",
    metric: "+350k",
    metricLabel: "New Users",
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop",
    showTopPlay: false,
  },
  {
    categoryLabel: "FASHION",
    title: "Core Basics",
    desc: "Long-term creator partnerships and whitelisting.",
    icon: Mic,
    iconColor: "text-gray-600 dark:text-gray-300",
    iconBg: "bg-gray-100 dark:bg-gray-700/30",
    metric: "-30%",
    metricLabel: "CAC",
    // FIXED IMAGE
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
    showTopPlay: false,
  }
];

// Mapping object for easy tab switching
const serviceDataMap: Record<string, any[]> = {
  "Video Editing": videoEditing,
  "Social Media": socialMedia,
  "Web Design": websiteDesign,
  "Digital Marketing": digitalMarketing,
  "Strategy": contentStrategy,
  "Influencers": influencerManagement,
};

// "All Work" takes exactly the first item from each of the 6 categories
const allFeatured = [
  videoEditing[0],
  socialMedia[0],
  websiteDesign[0],
  digitalMarketing[0],
  contentStrategy[0],
  influencerManagement[0],
];

const tabs = ["All Work", "Video Editing", "Social Media", "Web Design", "Digital Marketing", "Strategy", "Influencers"];

export function Featured() {
  const [activeTab, setActiveTab] = useState("All Work");

  // Determine which data array to map over
  const displayData = activeTab === "All Work" ? allFeatured : serviceDataMap[activeTab];

  return (
    // Minimized section padding (pt-6 pb-6 md:pt-8 md:pb-8)
    <section className="relative w-full overflow-hidden bg-[#FAFAFA] text-black transition-colors duration-700 ease-in-out dark:bg-[#050505] dark:text-white pt-6 pb-6 md:pt-8 md:pb-8">

      {/* 1800px Max Width pushing to the extreme left/right edges */}
      <div className="mx-auto w-full max-w-[1800px] px-2 sm:px-4 lg:px-4 flex flex-col gap-5">

        {/* --- HEADER --- */}
        <div className="flex flex-col items-center justify-center text-center pb-2">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-sans text-[32px] font-extrabold tracking-tight sm:text-4xl md:text-[48px] leading-tight"
          >
            Work that speaks. <span className="font-serif italic text-[#E04D43] font-normal">Results that matter.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-[14px] font-medium text-gray-600 dark:text-gray-400 sm:text-[15px]"
          >
            Real projects. Real impact. See how we help brands grow through powerful content and strategy.
          </motion.p>
        </div>

        {/* --- FILTER TABS --- */}
        <div className="flex w-full justify-center overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white p-1.5 shadow-sm dark:border-white/5 dark:bg-[#0F0F0F]">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative rounded-full px-4 py-2 text-[13px] font-bold transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? "text-white"
                    : "text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 rounded-full bg-[#E04D43]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* --- 3x2 CARDS GRID --- */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {displayData.map((item, idx) => (
              <motion.div
                layout
                key={`${activeTab}-${idx}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col overflow-hidden rounded-[16px] bg-white border border-gray-200 shadow-sm transition-all hover:shadow-md dark:border-white/10 dark:bg-[#111111]"
              >
                {/* Image Area - Height slightly reduced to compress the cards */}
                <div className="relative h-[160px] w-full overflow-hidden bg-black sm:h-[180px] xl:h-[220px] cursor-pointer">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

                  {/* Top Left "Play" pill */}
                  {item.showTopPlay && (
                    <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-md bg-black/60 backdrop-blur-md px-2.5 py-1.5 border border-white/10">
                      <Play className="h-3 w-3 text-white fill-current" />
                      <span className="text-[11px] font-bold text-white">Play</span>
                    </div>
                  )}

                  {/* Center Circle Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <Play className="h-5 w-5 text-black fill-current translate-x-[2px]" />
                    </div>
                  </div>
                </div>

                {/* Text Content Area - Highly minimized padding */}
                <div className="flex items-center justify-between p-3 sm:p-4">

                  {/* Left Side: Icon + Details */}
                  <div className="flex items-center gap-3">
                    {/* Icon Box */}
                    <div className={`flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-xl ${item.iconBg}`}>
                      <item.icon className={`h-5 w-5 ${item.iconColor}`} strokeWidth={2} />
                    </div>

                    {/* Title & Desc */}
                    <div className="flex flex-col">
                      <span className={`text-[9px] font-bold uppercase tracking-wider ${item.iconColor}`}>
                        {item.categoryLabel}
                      </span>
                      <h3 className="font-sans text-[15px] font-bold tracking-tight text-black dark:text-white leading-tight mt-0.5">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-[11px] font-medium leading-snug text-gray-500 dark:text-gray-400 line-clamp-1 max-w-[180px] xl:max-w-[220px]">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Right Side: Metrics */}
                  <div className="flex flex-col items-end shrink-0 pl-2">
                    <span className="font-sans text-[18px] xl:text-[20px] font-extrabold tracking-tight text-black dark:text-white leading-none">
                      {item.metric}
                    </span>
                    <span className="mt-1 text-[10px] font-medium text-gray-500 dark:text-gray-400">
                      {item.metricLabel}
                    </span>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}