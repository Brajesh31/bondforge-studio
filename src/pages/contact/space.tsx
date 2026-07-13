// space.tsx
import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  Camera,
  Coffee,
  Wifi,
  ShieldCheck,
  Users,
  Presentation,
  Clapperboard,
  MessageSquare
} from "lucide-react";

export default function Space() {
  return (
    <section className="w-full bg-[#FAFAFA] transition-colors duration-700 ease-in-out dark:bg-[#050505] py-6 lg:py-8">
      {/* Container: Max 1800px, pushed to extreme edges with minimal padding */}
      <div className="mx-auto w-full max-w-[1800px] px-2 sm:px-4 lg:px-4">

        {/* Header Section */}
        <div className="relative mb-6 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-[36px] font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-[42px] md:text-[48px]">
            Where ideas <span className="font-serif italic font-normal text-[#E04D43]">come to life.</span>
          </h2>
          <p className="mt-2 text-[15px] text-gray-600 dark:text-gray-400 font-medium">
            A space built for creativity, collaboration, and producing content that connects.
          </p>

          {/* Navigation Arrows (Absolute on desktop) */}
          <div className="absolute right-2 top-1/2 hidden -translate-y-1/2 gap-3 md:flex lg:right-4">
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-black transition-all hover:bg-gray-50 shadow-sm dark:border-white/10 dark:bg-black/50 dark:text-white dark:hover:bg-white/10">
              <ChevronLeft className="h-5 w-5" strokeWidth={2} />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-all hover:bg-gray-800 shadow-sm dark:bg-white dark:text-black dark:hover:bg-gray-200">
              <ChevronRight className="h-5 w-5" strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* 4-Column Image Grid (Updated with strictly office/workspace images) */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4 lg:gap-4">

          {/* Card 1 */}
          <div className="group relative h-[400px] md:h-[480px] xl:h-[520px] w-full overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop"
              alt="Welcome Lounge - Office Reception"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark Gradient Overlay (Always dark to make white text readable) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent opacity-90" />

            <div className="absolute bottom-0 left-0 flex w-full flex-col px-5 py-6">
              <div className="flex items-start gap-3">
                <Users className="h-6 w-6 text-[#E04D43] shrink-0" strokeWidth={2} />
                <div>
                  <h3 className="text-[16px] font-bold text-white">Welcome Lounge</h3>
                  <p className="mt-1 text-[13px] text-gray-300">Where every great partnership begins.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative h-[400px] md:h-[480px] xl:h-[520px] w-full overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
              alt="Strategy Room - Office Boardroom"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent opacity-90" />

            <div className="absolute bottom-0 left-0 flex w-full flex-col px-5 py-6">
              <div className="flex items-start gap-3">
                <Presentation className="h-6 w-6 text-[#E04D43] shrink-0" strokeWidth={2} />
                <div>
                  <h3 className="text-[16px] font-bold text-white">Strategy Room</h3>
                  <p className="mt-1 text-[13px] text-gray-300">Big ideas. Clear plans. Strong results.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative h-[400px] md:h-[480px] xl:h-[520px] w-full overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
              alt="Editing Studio - Office Workstations"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent opacity-90" />

            <div className="absolute bottom-0 left-0 flex w-full flex-col px-5 py-6">
              <div className="flex items-start gap-3">
                <Clapperboard className="h-6 w-6 text-[#E04D43] shrink-0" strokeWidth={2} />
                <div>
                  <h3 className="text-[16px] font-bold text-white">Editing Studio</h3>
                  <p className="mt-1 text-[13px] text-gray-300">Precision editing. Powerful storytelling.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group relative h-[400px] md:h-[480px] xl:h-[520px] w-full overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=800&auto=format&fit=crop"
              alt="Collaboration Area - Open Office"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent opacity-90" />

            <div className="absolute bottom-0 left-0 flex w-full flex-col px-5 py-6">
              <div className="flex items-start gap-3">
                <MessageSquare className="h-6 w-6 text-[#E04D43] shrink-0" strokeWidth={2} />
                <div>
                  <h3 className="text-[16px] font-bold text-white">Collaboration Area</h3>
                  <p className="mt-1 text-[13px] text-gray-300">Brainstorm, collaborate and create together.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Features Bar */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 rounded-2xl bg-white p-5 lg:px-8 lg:py-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100 dark:border-white/5 dark:bg-[#0C0C0C]">

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 dark:bg-[#E04D43]/10">
              <Camera className="h-6 w-6 text-[#E04D43]" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-[14px] font-bold text-gray-900 dark:text-white">State-of-the-Art Equipment</h4>
              <p className="text-[13px] text-gray-500 dark:text-gray-400 mt-0.5 leading-snug">Industry-leading gear for professional content.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 dark:bg-[#E04D43]/10">
              <Coffee className="h-6 w-6 text-[#E04D43]" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-[14px] font-bold text-gray-900 dark:text-white">Comfort + Creativity</h4>
              <p className="text-[13px] text-gray-500 dark:text-gray-400 mt-0.5 leading-snug">Designed spaces that keep ideas flowing.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 dark:bg-[#E04D43]/10">
              <Wifi className="h-6 w-6 text-[#E04D43]" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-[14px] font-bold text-gray-900 dark:text-white">Fast & Connected</h4>
              <p className="text-[13px] text-gray-500 dark:text-gray-400 mt-0.5 leading-snug">High-speed internet and seamless connectivity always.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 dark:bg-[#E04D43]/10">
              <ShieldCheck className="h-6 w-6 text-[#E04D43]" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-[14px] font-bold text-gray-900 dark:text-white">Secure & Private</h4>
              <p className="text-[13px] text-gray-500 dark:text-gray-400 mt-0.5 leading-snug">Your ideas, data and content are always safe with us.</p>
            </div>
          </div>

        </div>

        {/* Quote Footer Bar */}
        <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl bg-[#FFF6F5] px-6 py-5 dark:bg-[#E04D43]/10">
          <div className="flex items-center gap-3 text-center md:text-left">
            <span className="font-serif text-3xl leading-none text-[#E04D43]">“</span>
            <p className="text-[14px] font-semibold text-gray-800 dark:text-gray-200">
              Our space is more than just an office — it's a creative hub where strategy, storytelling, and collaboration come together.
            </p>
          </div>
          <div className="shrink-0">
            <span
              className="text-[#E04D43] text-xl"
              style={{ fontFamily: "'Dancing Script', 'Caveat', cursive", fontStyle: "italic" }}
            >
              - Team Social Bond
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}