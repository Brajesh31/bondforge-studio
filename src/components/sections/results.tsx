import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  TrendingUp,
  Heart,
  Users,
  CircleDollarSign,
  Play,
  Eye,
  Instagram,
  Youtube,
  Code2,
  Video,
  GraduationCap
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const leftStats = [
  {
    icon: TrendingUp,
    value: "250M+",
    label: "Views Generated",
    growth: "320%",
    growthLabel: "vs previous period"
  },
  {
    icon: Heart,
    value: "15M+",
    label: "Engagements",
    growth: "280%",
    growthLabel: "vs previous period"
  },
  {
    icon: Users,
    value: "500+",
    label: "Brands & Creators Served",
    growth: "200%",
    growthLabel: "vs previous period"
  },
  {
    icon: CircleDollarSign,
    value: "3.8X",
    label: "Average ROI Delivered",
    growth: "180%",
    growthLabel: "vs previous period"
  },
];

const successStories = [
  {
    category: "REELS",
    categoryColor: "text-pink-500 bg-pink-50 dark:bg-pink-500/10",
    title: "Glow Naturally Skincare Campaign",
    client: "Bella Vita Organic",
    desc: "Developed a comprehensive Instagram Reels strategy focusing on organic ingredients and real customer testimonials, driving massive viral reach and product sales.",
    metric1Icon: Eye,
    metric1Value: "3.2M",
    metric2Icon: Heart,
    metric2Value: "245K",
    growth: "312%",
    growthLabel: "Engagement",
    icon: Instagram,
    iconBg: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500",
    img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop",
  },
  {
    category: "YOUTUBE EDITS",
    categoryColor: "text-red-500 bg-red-50 dark:bg-red-500/10",
    title: "Discipline Drives Success",
    client: "BeerBiceps",
    desc: "Restructured long-form podcast content into high-retention, cinematic YouTube edits utilizing custom motion graphics, aggressive pacing, and premium sound design.",
    metric1Icon: Eye,
    metric1Value: "1.8M",
    metric2Icon: Heart,
    metric2Value: "112K",
    growth: "278%",
    growthLabel: "Watch Time",
    icon: Youtube,
    iconBg: "bg-red-600",
    img: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop",
  },
  {
    category: "WEBSITE PROJECT",
    categoryColor: "text-purple-500 bg-purple-50 dark:bg-purple-500/10",
    title: "Fintech Landing Page Redesign",
    client: "Finovate",
    desc: "Completely overhauled the user experience and interface design to minimize friction, resulting in a dramatic increase in conversion rates and user retention.",
    metric1Icon: TrendingUp,
    metric1Value: "85%",
    metric2Icon: Eye,
    metric2Value: "1.6s",
    growth: "65%",
    growthLabel: "User Retention",
    icon: Code2,
    iconBg: "bg-gray-900 dark:bg-white dark:text-black",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    category: "CAMPAIGN VIDEO",
    categoryColor: "text-blue-500 bg-blue-50 dark:bg-blue-500/10",
    title: "Built To Explore Brand Film",
    client: "Wildcraft",
    desc: "Produced a high-octane cinematic brand film across multiple rugged locations, capturing the essence of adventure and drastically boosting brand affinity.",
    metric1Icon: Eye,
    metric1Value: "2.7M",
    metric2Icon: Heart,
    metric2Value: "201K",
    growth: "290%",
    growthLabel: "Engagement",
    icon: Video,
    iconBg: "bg-blue-600",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=800&auto=format&fit=crop",
  },
  {
    category: "COURSE EDITS",
    categoryColor: "text-orange-500 bg-orange-50 dark:bg-orange-500/10",
    title: "Digital Marketing Course Trailer",
    client: "WsCube Tech",
    desc: "Created an engaging, fast-paced course trailer designed to capture student attention immediately, leveraging high-converting hooks and dynamic visuals.",
    metric1Icon: Eye,
    metric1Value: "950K",
    metric2Icon: Heart,
    metric2Value: "68K",
    growth: "240%",
    growthLabel: "Engagement",
    icon: GraduationCap,
    iconBg: "bg-gray-800",
    img: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=800&auto=format&fit=crop",
  },
];

export function Results() {
  return (
    <section
      id="results"
      className="relative flex w-full flex-col justify-center bg-white text-black transition-colors duration-700 ease-in-out dark:bg-background dark:text-foreground pt-10 pb-4 md:pt-14 md:pb-6"
    >
      <div className="mx-auto w-full max-w-[1800px] px-6 md:px-8">

        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-16">

          {/* --- LEFT COLUMN: Header & Overall Stats (4 columns) --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex h-full flex-col lg:col-span-4 xl:col-span-3"
          >
            {/* Header */}
            <h2 className="font-sans text-[2.75rem] font-extrabold leading-[1.05] tracking-tight transition-colors duration-700 ease-in-out sm:text-5xl lg:text-6xl">
              Real results. <br />
              Real impact.
            </h2>

            <div className="mt-3 inline-block">
              <span className="font-sans text-2xl font-medium italic text-[#E04D43] transition-colors duration-700 ease-in-out sm:text-3xl lg:text-[2rem]">
                That's the Social Bond promise.
              </span>
              <svg className="mt-1 w-full max-w-[280px] text-[#E04D43] transition-colors duration-700 ease-in-out" viewBox="0 0 280 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 9.5C65.5 3.5 152.5 1.5 278 7.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                <path d="M260 10.5C265 9.5 272 8.5 276 7.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>

            <p className="mt-6 max-w-[400px] text-sm leading-relaxed text-gray-600 transition-colors duration-700 ease-in-out dark:text-gray-400 sm:text-base">
              We don't just create content—we create measurable growth for brands and creators.
            </p>

            {/* Vertical Stats List */}
            <div className="mt-10 flex flex-col gap-8">
              {leftStats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 transition-colors duration-700 ease-in-out dark:bg-[#E04D43]/10">
                    <stat.icon className="h-6 w-6 text-[#E04D43] transition-colors duration-700 ease-in-out" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold tracking-tight transition-colors duration-700 ease-in-out">{stat.value}</h4>
                    <p className="mt-0.5 text-xs font-medium text-gray-500 transition-colors duration-700 ease-in-out dark:text-gray-400">{stat.label}</p>
                  </div>
                  <div className="flex flex-col items-end text-right">
                    <span className="flex items-center gap-1 text-sm font-bold text-green-500 transition-colors duration-700 ease-in-out dark:text-green-400">
                      <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                      {stat.growth}
                    </span>
                    <p className="mt-0.5 text-[10px] text-gray-400 transition-colors duration-700 ease-in-out dark:text-gray-500">
                      {stat.growthLabel}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Forced Side-by-Side */}
            <div className="mt-10 flex w-full flex-row items-center gap-3 mb-6 md:mb-0">

              {/* Button 1: See All Case Studies (Outline) */}
              <Link
                to="/case-studies"
                className="group flex w-full flex-1 items-center justify-center gap-1.5 rounded-lg border border-gray-300 bg-transparent px-3 py-3.5 text-[11px] font-semibold text-black transition-all duration-700 ease-in-out hover:bg-gray-50 dark:border-white/20 dark:text-white dark:hover:bg-white/5 sm:text-xs xl:text-sm"
              >
                <span className="whitespace-nowrap">See All Case Studies</span>
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              {/* Button 2: Start a Project (Solid) */}
              <Link
                to="/contact"
                className="group flex w-full flex-1 items-center justify-center gap-1.5 rounded-lg bg-black px-3 py-3.5 text-[11px] font-semibold text-white shadow-lg transition-all duration-700 ease-in-out hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 sm:text-xs xl:text-sm"
              >
                <span className="whitespace-nowrap">Start a Project</span>
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

            </div>
          </motion.div>


          {/* --- RIGHT COLUMN: Carousel (8 columns) --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex h-full flex-col lg:col-span-8 xl:col-span-9"
          >
            <div className="mb-6 flex justify-end text-right">
              <h3 className="text-base font-medium text-gray-800 transition-colors duration-700 ease-in-out dark:text-gray-200 sm:text-lg lg:text-xl">
                Impact across <span className="italic text-[#E04D43]">formats</span>. Growth across <span className="italic text-[#E04D43]">platforms</span>.
              </h3>
            </div>

            <Carousel opts={{ align: "start", dragFree: true }} className="flex w-full flex-1 flex-col">

              <CarouselContent className="-ml-4 h-full items-stretch md:-ml-6">
                {successStories.map((story, idx) => (
                  <CarouselItem
                    key={idx}
                    className="h-full pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5 md:pl-6"
                  >
                    <div className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_4px_24px_-8px_rgba(0,0,0,0.08)] transition-colors duration-700 ease-in-out dark:border-white/10 dark:bg-[#0F0F11] dark:shadow-none">

                      <div className="relative h-[280px] shrink-0 w-full overflow-hidden sm:h-[320px] xl:h-[380px]">
                        <img
                          src={story.img}
                          alt={story.title}
                          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 z-10 bg-black/20 transition-colors duration-700 ease-in-out dark:bg-black/40" />

                        <div className={`absolute left-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-xl ${story.iconBg} shadow-md`}>
                          <story.icon className="h-5 w-5 text-white" />
                        </div>

                        <div className="absolute inset-0 z-20 flex items-center justify-center">
                          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white pl-1 shadow-lg transition-transform duration-300 group-hover:scale-110">
                            <Play className="h-6 w-6 fill-black text-black" />
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col p-5 lg:p-6">

                        <span className={`w-fit rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest transition-colors duration-700 ease-in-out ${story.categoryColor}`}>
                          {story.category}
                        </span>

                        <h4 className="mt-4 font-sans text-lg font-bold tracking-tight text-black transition-colors duration-700 ease-in-out dark:text-white line-clamp-2">
                          {story.title}
                        </h4>
                        <p className="mt-1 text-xs font-semibold text-gray-500 transition-colors duration-700 ease-in-out dark:text-gray-400">
                          Client: <span className="text-gray-800 dark:text-gray-200">{story.client}</span>
                        </p>

                        <p className="mt-3 text-sm leading-relaxed text-gray-600 transition-colors duration-700 ease-in-out dark:text-gray-400 line-clamp-3">
                          {story.desc}
                        </p>

                        <div className="mt-auto pt-6">
                          <div className="flex items-center gap-4 text-xs font-semibold text-gray-700 transition-colors duration-700 ease-in-out dark:text-gray-300 xl:text-sm">
                            <span className="flex items-center gap-1.5">
                              <story.metric1Icon className="h-4 w-4 text-[#E04D43]" />
                              {story.metric1Value}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <story.metric2Icon className="h-4 w-4 text-[#E04D43]" />
                              {story.metric2Value}
                            </span>
                          </div>

                          <div className="mt-3 flex items-center gap-1.5">
                            <ArrowUpRight className="h-4 w-4 text-green-500 dark:text-green-400 xl:h-5 xl:w-5" strokeWidth={2.5} />
                            <span className="text-sm font-bold text-green-500 transition-colors duration-700 ease-in-out dark:text-green-400 xl:text-base">
                              {story.growth}
                            </span>
                            <span className="ml-1 text-[10px] font-semibold uppercase tracking-wide text-gray-500 transition-colors duration-700 ease-in-out dark:text-gray-400 xl:text-xs">
                              {story.growthLabel}
                            </span>
                          </div>
                        </div>

                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="mt-8 flex items-center justify-end gap-3 pr-4 md:mt-8 pb-2">
                <CarouselPrevious className="static h-10 w-10 translate-y-0 rounded-full border border-gray-200 bg-transparent text-black transition-colors duration-700 hover:bg-gray-50 dark:border-white/10 dark:text-white dark:hover:bg-white/5" />
                <CarouselNext className="static h-10 w-10 translate-y-0 rounded-full border border-gray-200 bg-transparent text-black transition-colors duration-700 hover:bg-gray-50 dark:border-white/10 dark:text-white dark:hover:bg-white/5" />
              </div>
            </Carousel>
          </motion.div>

        </div>
      </div>
    </section>
  );
}