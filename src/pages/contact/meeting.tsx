import { motion } from "framer-motion";
import {
  Clock,
  Video,
  Users,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Calendar as CalendarIcon,
  ShieldCheck,
  Headset,
  Handshake,
  Star,
  ArrowRight
} from "lucide-react";

// --- DATA ---
const dates = [
  { day: "Mon", date: "12", active: false },
  { day: "Tue", date: "13", active: false },
  { day: "Wed", date: "14", active: true },
  { day: "Thu", date: "15", active: false },
  { day: "Fri", date: "16", active: false },
];

const times = [
  "10:00 AM", "11:00 AM", "12:00 PM",
  "01:00 PM", "02:00 PM", "03:00 PM",
  "04:00 PM", "05:00 PM", "06:00 PM"
];

const avatars = [
  "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
];

const bottomFeatures = [
  {
    icon: CalendarIcon,
    title: "Easy Scheduling",
    desc: "Pick a time that fits your schedule.\nIt's quick and easy.",
  },
  {
    icon: ShieldCheck,
    title: "100% Confidential",
    desc: "Your information and project\ndetails are always secure.",
  },
  {
    icon: Headset,
    title: "Expert Guidance",
    desc: "Get actionable insights from our\ncontent and strategy experts.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    desc: "We're here to grow with you,\nnot just for a project.",
  },
];

export function Meeting() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAFAFA] text-black transition-colors duration-700 ease-in-out dark:bg-[#050505] dark:text-white pt-6 pb-4 md:pt-8 md:pb-6">

      {/* 1800px Max Width with extreme left/right positioning */}
      <div className="mx-auto w-full max-w-[1800px] px-2 sm:px-4 lg:px-6">

        {/* --- MAIN SPLIT LAYOUT --- */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 xl:gap-10">

          {/* LEFT COLUMN: Text & Image (Spans 7 cols, increased internal width) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col pt-2 lg:col-span-7 xl:col-span-7"
          >
            {/* Headline */}
            <h2 className="font-sans text-[2.5rem] font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-[3.5rem] lg:text-[4rem]">
              Let's talk about <br />
              <span className="font-serif italic text-[#E04D43] font-normal">your vision.</span>
            </h2>

            {/* Subtext (Width increased from max-w-lg to max-w-2xl) */}
            <p className="mt-4 w-full max-w-2xl text-[14px] leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
              Book a free 30-minute discovery call with our team and let's explore how Social Bond can help you create content that drives real results.
            </p>

            {/* Three Info Pills (Allowed to stretch wider) */}
            <div className="mt-6 flex w-full max-w-2xl flex-wrap items-center gap-5 sm:gap-8">
              {/* Pill 1 */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 dark:bg-[#E04D43]/10">
                  <Clock className="h-4 w-4 text-[#E04D43]" strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-bold leading-tight text-black dark:text-white">30-Minute</span>
                  <span className="text-[10px] text-gray-500 dark:text-gray-400">One-on-one session</span>
                </div>
              </div>
              {/* Pill 2 */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 dark:bg-[#E04D43]/10">
                  <Video className="h-4 w-4 text-[#E04D43]" strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-bold leading-tight text-black dark:text-white">Google Meet / Zoom</span>
                  <span className="text-[10px] text-gray-500 dark:text-gray-400">Your choice of platform</span>
                </div>
              </div>
              {/* Pill 3 */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 dark:bg-[#E04D43]/10">
                  <Users className="h-4 w-4 text-[#E04D43]" strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-bold leading-tight text-black dark:text-white">No Obligation</span>
                  <span className="text-[10px] text-gray-500 dark:text-gray-400">Just a friendly chat</span>
                </div>
              </div>
            </div>

            {/* Large Meeting Image (Height reduced) */}
            <div className="relative mt-8 h-[220px] w-full overflow-hidden rounded-[20px] bg-black shadow-sm sm:h-[260px] lg:h-[320px]">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                alt="Social Bond Team Meeting"
                className="h-full w-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 dark:bg-black/30" />
            </div>
          </motion.div>


          {/* RIGHT COLUMN: Calendar Interface & Trust Bar (Spans 5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col lg:col-span-5 xl:col-span-5"
          >
            {/* Main Calendar Card */}
            <div className="flex w-full flex-col rounded-[24px] border border-gray-200 bg-white p-5 shadow-lg shadow-gray-200/50 dark:border-white/10 dark:bg-[#0A0A0A] dark:shadow-none sm:p-6 lg:p-7">

              {/* Header */}
              <div className="flex flex-col">
                <h3 className="text-[18px] font-bold text-black dark:text-white sm:text-[20px]">
                  Choose a time that works for you
                </h3>
                <p className="mt-1 text-[12px] text-gray-500 dark:text-gray-400">
                  All times are shown in IST (GMT +5:30)
                </p>
              </div>

              {/* Date Selector Row */}
              <div className="mt-6 flex items-center justify-between gap-2">
                <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-colors hover:bg-gray-50 dark:border-white/10 dark:bg-[#111] dark:text-gray-300 dark:hover:bg-white/5">
                  <ChevronLeft className="h-4 w-4" />
                </button>

                <div className="flex flex-1 items-center justify-between gap-2 overflow-hidden">
                  {dates.map((d, idx) => (
                    <button
                      key={idx}
                      className={`flex flex-col items-center justify-center rounded-[10px] border px-2 py-2.5 transition-all w-full min-w-[50px]
                        ${d.active
                        ? 'border-[#E04D43] bg-transparent text-[#E04D43] dark:border-[#E04D43] dark:bg-[#E04D43]/10'
                        : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 dark:border-white/10 dark:bg-[#0A0A0A] dark:text-gray-400 dark:hover:border-white/20'}`}
                    >
                      <span className="text-[10px] font-medium">{d.day}</span>
                      <span className={`text-[16px] font-bold ${d.active ? 'text-[#E04D43]' : 'text-black dark:text-white'}`}>{d.date}</span>
                      <span className="text-[10px] font-medium">May</span>
                    </button>
                  ))}
                </div>

                <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-colors hover:bg-gray-50 dark:border-white/10 dark:bg-[#111] dark:text-gray-300 dark:hover:bg-white/5">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              {/* Time Slots */}
              <div className="mt-6 flex flex-col">
                <span className="text-[12px] font-bold text-black dark:text-white">
                  Available time slots for Wednesday, May 14
                </span>
                <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
                  {times.map((time, idx) => (
                    <button
                      key={idx}
                      className={`rounded-[8px] border py-2.5 text-center text-[12px] font-semibold transition-all
                        ${time === "02:00 PM"
                        ? 'border-[#E04D43] bg-[#E04D43] text-white shadow-md shadow-[#E04D43]/20'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 dark:border-white/10 dark:bg-[#0A0A0A] dark:text-gray-300 dark:hover:border-white/20'}`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* What to Expect Box */}
              <div className="mt-6 flex items-start gap-3 rounded-[12px] bg-red-50 p-4 dark:bg-[#E04D43]/10">
                <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-[#E04D43]" strokeWidth={2} />
                <div className="flex flex-col">
                  <span className="text-[13px] font-bold text-black dark:text-white">What to expect?</span>
                  <span className="mt-0.5 text-[11px] leading-relaxed text-gray-600 dark:text-gray-400">
                    We'll understand your goals, discuss ideas, and explore how we can create the right strategy for your brand.
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <button className="group mt-6 flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#E04D43] py-4 text-[14px] font-bold text-white shadow-lg transition-all hover:bg-[#c93b32] shadow-[#E04D43]/20">
                <CalendarIcon className="h-4 w-4" strokeWidth={2} />
                Book Your Call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
              </button>

            </div>

            {/* Trust Bar below the card */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 px-2">
              {/* Avatars */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {avatars.map((url, idx) => (
                    <img
                      key={idx}
                      src={url}
                      alt="Brand Avatar"
                      className="h-6 w-6 rounded-full border border-white object-cover dark:border-[#0A0A0A] sm:h-7 sm:w-7"
                    />
                  ))}
                </div>
                <span className="text-[11px] font-medium text-gray-500 dark:text-gray-400">
                  Trusted by 50+ brands worldwide
                </span>
              </div>

              {/* Vertical Divider (Desktop) */}
              <div className="hidden h-5 w-px bg-gray-200 dark:bg-white/10 sm:block" />

              {/* Reviews */}
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
                <span className="text-[11px] font-medium text-gray-500 dark:text-gray-400">
                  4.9/5 from 120+ reviews
                </span>
              </div>
            </div>

          </motion.div>
        </div>

        {/* --- BOTTOM BLACK BANNER --- */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          // Hardcoded dark banner for high contrast in both light and dark modes
          className="mt-10 flex w-full flex-col justify-between gap-6 rounded-[20px] bg-[#0A0A0A] px-6 py-8 text-white shadow-xl dark:border dark:border-white/10 sm:px-8 lg:mt-12 lg:flex-row lg:items-start lg:gap-0"
        >
          {bottomFeatures.map((feature, idx) => (
            <div
              key={idx}
              className={`flex flex-1 items-start gap-4 lg:px-6 
                ${idx !== 0 ? 'border-t border-white/10 pt-6 lg:border-t-0 lg:border-l lg:pt-0' : 'lg:pl-0'}
                ${idx === bottomFeatures.length - 1 ? 'lg:pr-0' : ''}
              `}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E04D43]/10 border border-[#E04D43]/20">
                <feature.icon className="h-4 w-4 text-[#E04D43]" strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <h4 className="text-[13px] font-bold text-white">
                  {feature.title}
                </h4>
                <p className="mt-1.5 whitespace-pre-line text-[11px] leading-relaxed text-gray-400">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}