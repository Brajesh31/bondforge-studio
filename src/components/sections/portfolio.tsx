import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Play,
  Heart,
  Instagram,
  Youtube,
  Code2,
  Video,
  GraduationCap,
  Flame,
  Eye
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const filters = [
  { name: "All Projects", icon: null },
  { name: "Reels", icon: Instagram },
  { name: "Shorts", icon: Flame },
  { name: "YouTube Edits", icon: Youtube },
  { name: "Website Projects", icon: Code2 },
  { name: "Campaign Videos", icon: Video },
  { name: "Course Edits", icon: GraduationCap },
];

// Expanded data array with different content for each category
const allProjectsData = [
  // Reels
  {
    type: "Reels",
    title: "Reel for Skinn",
    desc: "Beauty & Skincare",
    views: "1.2M",
    likes: "78K",
    icon: Instagram,
    iconColor: "text-pink-500",
    img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop",
  },
  {
    type: "Reels",
    title: "Fitness Apparel Promo",
    desc: "Activewear Brand",
    views: "3.4M",
    likes: "210K",
    icon: Instagram,
    iconColor: "text-pink-500",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
  },
  // Shorts
  {
    type: "Shorts",
    title: "AI Tools You Need",
    desc: "Tech Content",
    views: "890K",
    likes: "52K",
    icon: Flame,
    iconColor: "text-red-500",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
  },
  {
    type: "Shorts",
    title: "Coding Secrets",
    desc: "Developer Tips",
    views: "500K",
    likes: "41K",
    icon: Flame,
    iconColor: "text-red-500",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
  },
  // YouTube Edits
  {
    type: "YouTube Edits",
    title: "Discipline.",
    desc: "Motivation Edit",
    views: "2.1M",
    likes: "112K",
    icon: Youtube,
    iconColor: "text-red-600",
    img: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop",
  },
  {
    type: "YouTube Edits",
    title: "My 2024 Desk Setup",
    desc: "Tech Vlog",
    views: "1.5M",
    likes: "89K",
    icon: Youtube,
    iconColor: "text-red-600",
    img: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=800&auto=format&fit=crop",
  },
  // Website Projects
  {
    type: "Website Projects",
    title: "Fintech Landing Page",
    desc: "Web Design",
    views: "Live Project",
    likes: null,
    icon: Code2,
    iconColor: "text-gray-800 dark:text-gray-200",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    type: "Website Projects",
    title: "E-Commerce Platform",
    desc: "Full-Stack Development",
    views: "Live Project",
    likes: null,
    icon: Code2,
    iconColor: "text-gray-800 dark:text-gray-200",
    img: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=800&auto=format&fit=crop",
  },
  // Campaign Videos
  {
    type: "Campaign Videos",
    title: "Drive Beyond Limits",
    desc: "Automotive Campaign",
    views: "1.8M",
    likes: "94K",
    icon: Video,
    iconColor: "text-gray-800 dark:text-gray-200",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=800&auto=format&fit=crop",
  },
  {
    type: "Campaign Videos",
    title: "Summer Collection",
    desc: "Fashion Brand",
    views: "2.8M",
    likes: "156K",
    icon: Video,
    iconColor: "text-gray-800 dark:text-gray-200",
    img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop",
  },
  // Course Edits
  {
    type: "Course Edits",
    title: "UI/UX Design Course",
    desc: "Educational Content",
    views: "650K",
    likes: "33K",
    icon: GraduationCap,
    iconColor: "text-gray-800 dark:text-gray-200",
    img: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=800&auto=format&fit=crop",
  },
  {
    type: "Course Edits",
    title: "React Native Mastery",
    desc: "Programming Course",
    views: "420K",
    likes: "28K",
    icon: GraduationCap,
    iconColor: "text-gray-800 dark:text-gray-200",
    img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
  },
];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredProjects = activeFilter === "All Projects"
    ? allProjectsData
    : allProjectsData.filter(project => project.type === activeFilter);

  return (
    <section
      id="work"
      // Top and bottom padding reduced to minimum
      className="relative flex w-full flex-col justify-center bg-white text-black transition-colors duration-700 ease-in-out dark:bg-background dark:text-foreground pt-8 pb-8 md:pt-12 md:pb-12"
    >
      {/* Maximum width 1800px, pulled to the extreme left/right edges */}
      <div className="mx-auto w-full max-w-[1800px] px-6 md:px-8">

        {/* --- TOP HEADER SECTION --- */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">

          {/* Left Text Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:col-span-7 xl:col-span-8"
          >
            {/* Heading */}
            <h2 className="font-sans text-[2.75rem] font-extrabold leading-[1.08] tracking-tight transition-colors duration-700 ease-in-out sm:text-5xl md:text-6xl lg:text-[4rem]">
              Content that grabs <br className="hidden sm:block" />
              attention. Results that <span className="italic text-[#E04D43] transition-colors duration-700 ease-in-out">speak.</span>
            </h2>

            {/* Left Subheading */}
            <p className="mt-5 max-w-[540px] text-sm leading-relaxed text-gray-600 transition-colors duration-700 ease-in-out dark:text-gray-400 sm:text-base">
              A peek into our recent projects where creativity meets strategy. <br className="hidden sm:block" />
              Different formats, one goal—real impact.
            </p>
          </motion.div>

          {/* Right Text Block & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-start gap-6 lg:col-span-5 xl:col-span-4 lg:items-end lg:text-right"
          >
            <p className="max-w-[480px] text-sm leading-relaxed text-gray-600 transition-colors duration-700 ease-in-out dark:text-gray-400 sm:text-base">
              From short-form content to full-scale campaigns, we create high-performing content that connects with audiences and drives measurable growth.
            </p>

            {/* Buttons Side-by-Side */}
            <div className="flex flex-wrap items-center gap-4 lg:justify-end">
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 rounded-md bg-black px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-700 ease-in-out hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                View All Projects
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-md bg-[#E04D43] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-700 ease-in-out hover:bg-[#c94137]"
              >
                Start a Project
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* --- FILTERS & CAROUSEL --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 w-full md:mt-16"
        >
          {/* Utilizing Shadcn Carousel for structural extreme-left/right dragging */}
          <Carousel opts={{ align: "start", dragFree: true }} className="w-full">

            {/* Filter Row & Custom Navigation */}
            <div className="mb-8 flex items-center justify-between gap-4">

              {/* Scrollable Filters */}
              <div className="flex w-full overflow-x-auto pb-4 hide-scrollbar sm:pb-0">
                <div className="flex items-center gap-3">
                  {filters.map((filter, idx) => {
                    const isActive = activeFilter === filter.name;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveFilter(filter.name)}
                        className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ease-in-out
                          ${isActive
                          ? 'border-transparent bg-black text-white dark:bg-white dark:text-black'
                          : 'border-gray-200 bg-transparent text-gray-600 hover:bg-gray-50 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5'
                        }`}
                      >
                        {filter.icon && <filter.icon className={`h-4 w-4 ${isActive ? '' : 'text-gray-500 dark:text-gray-400'}`} />}
                        {filter.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Carousel Arrows (Hidden on mobile, visible on desktop) */}
              <div className="hidden shrink-0 items-center gap-2 md:flex">
                <CarouselPrevious className="static h-11 w-11 translate-y-0 rounded-full border border-gray-200 bg-transparent text-black transition-colors duration-700 hover:bg-gray-50 dark:border-white/10 dark:text-white dark:hover:bg-white/5" />
                <CarouselNext className="static h-11 w-11 translate-y-0 rounded-full border border-transparent bg-black text-white transition-colors duration-700 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200" />
              </div>
            </div>

            {/* Project Cards Grid / Track with AnimatePresence for smooth filtering */}
            <CarouselContent className="-ml-4 md:-ml-6">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, idx) => (
                  <CarouselItem
                    key={`${project.title}-${idx}`}
                    className="pl-4 basis-[85%] sm:basis-1/2 md:pl-6 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="group relative flex h-[420px] w-full flex-col overflow-hidden rounded-2xl bg-[#0F0F11] text-white transition-transform duration-500 hover:-translate-y-1"
                    >
                      {/* Top Icon Badge */}
                      <div className="absolute left-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 backdrop-blur-md">
                        <project.icon className={`h-4 w-4 ${project.iconColor}`} />
                      </div>

                      {/* Image Area */}
                      <div className="relative h-[70%] w-full overflow-hidden">
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0F0F11] via-transparent to-transparent" />
                        <img
                          src={project.img}
                          alt={project.title}
                          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-90 transition-opacity duration-300 group-hover:opacity-100">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 pl-1 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                            <Play className="h-5 w-5 fill-white text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="relative z-20 flex h-[30%] flex-col justify-end p-5 pt-0">
                        <h3 className="font-sans text-lg font-bold tracking-tight text-white line-clamp-1">{project.title}</h3>
                        <p className="mt-0.5 text-xs text-gray-400 line-clamp-1">{project.desc}</p>

                        {/* Meta Stats */}
                        <div className="mt-3 flex items-center gap-4 text-[11px] font-medium text-gray-300">
                          {project.views !== "Live Project" ? (
                            <>
                              <span className="flex items-center gap-1.5"><Play className="h-3 w-3" /> {project.views}</span>
                              <span className="flex items-center gap-1.5"><Heart className="h-3 w-3" /> {project.likes}</span>
                            </>
                          ) : (
                            <span className="flex items-center gap-1.5"><Eye className="h-3 w-3" /> Live Project</span>
                          )}
                        </div>
                      </div>

                    </motion.div>
                  </CarouselItem>
                ))}
              </AnimatePresence>
            </CarouselContent>
          </Carousel>
        </motion.div>

      </div>
    </section>
  );
}