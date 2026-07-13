import { motion } from "motion/react";
import {
  Users,
  Code2,
  BarChart,
  MessageSquare,
  Linkedin,
  Star,
  Clock,
  Globe2
} from "lucide-react";

const teamMembers = [
  {
    name: "Anand Kumar Mahato",
    role: "Founder",
    desc: "I believe stories have the power to shift perspectives and build lasting impact.",
    icon: Users,
    img: "anand2.png",
    linkedin: "https://www.linkedin.com/in/blvrran/",
  },
  {
    name: "Kumkum Jangra",
    role: "Influencer Marketing Executive",
    desc: "Connecting brands with the right voices to create authentic and impactful campaigns.",
    icon: Star,
    img: "kumkum.png",
    linkedin: "https://www.linkedin.com/in/kumkum-jangra-91492a359",
  },
  {
    name: "Mehar Snotra",
    role: "SEO Expert",
    desc: "Driving organic growth through strategic visibility and data-driven search optimization.",
    icon: Globe2,
    img: "mehar.png",
    linkedin: "https://www.linkedin.com/in/mehar-snotra-67127528b",
  },
  {
    name: "Ananya Kumari",
    role: "Performance Marketer",
    desc: "Turning data into actionable strategies that maximize ROI and brand reach.",
    icon: BarChart,
    img: "anaya.png",
    linkedin: "https://www.linkedin.com/in/ananya-kumari-8499a633b",
  },
  {
    name: "Diksha Mehra",
    role: "Frontend Engineer",
    desc: "Building seamless, pixel-perfect user experiences that bring designs to life.",
    icon: Code2,
    img: "diku.png",
    linkedin: "https://www.linkedin.com/in/diksha-mehra-4084a9290",
  },
  {
    name: "Shruti Yadav",
    role: "Social Media Manager",
    desc: "We don't just post content, we build communities and drive meaningful conversations.",
    icon: MessageSquare,
    img: "shruti.png",
    linkedin: "https://www.linkedin.com/in/shruti-yadav-aba404347",
  }
];

const bottomStats = [
  { icon: Users, value: "15+", label: "Team Members" },
  { icon: Star, value: "100+", label: "Projects Delivered" },
  { icon: Clock, value: "5+", label: "Years of Experience" },
  { icon: Globe2, value: "30+", label: "Countries Served" },
];

export function Team() {
  return (
    <section
      id="team"
      // Responsive Light/Dark theme with slightly reduced top padding
      className="relative flex w-full flex-col justify-center bg-white text-black transition-colors duration-700 ease-in-out dark:bg-background dark:text-foreground pt-6 pb-4 md:pt-8 md:pb-6"
    >
      {/* Maximum width 1800px, extreme left/right edges */}
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">

        {/* --- TOP HEADER ROW --- */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

          {/* Left Side: Headlines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-1 flex-col justify-center max-w-[1100px]"
          >
            <h2 className="font-sans text-4xl font-extrabold leading-[1.08] tracking-tight transition-colors duration-700 ease-in-out sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:whitespace-nowrap">
              A team of specialists. <br />
              <span className="italic text-[#E04D43] transition-colors duration-700 ease-in-out">One mission.</span>
            </h2>
            <p className="mt-4 max-w-[580px] text-sm leading-relaxed text-gray-600 transition-colors duration-700 ease-in-out dark:text-gray-400 sm:text-base lg:text-lg">
              Editors, strategists, creators and operators — <br className="hidden sm:block" />
              working together to make your brand unforgettable.
            </p>
          </motion.div>

          {/* Right Side: Cleared completely as requested */}

        </div>

        {/* --- 6-COLUMN TEAM GRID --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 lg:mt-10"
        >
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-700 ease-in-out hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-[#0F0F11] dark:shadow-none dark:hover:border-white/20"
            >
              {/* Image Area */}
              <div className="relative h-[240px] w-full shrink-0 overflow-hidden xl:h-[260px]">
                <img
                  src={member.img}
                  alt={member.name}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 z-10 bg-black/5 transition-colors duration-700 ease-in-out dark:bg-black/30" />

                {/* Dark Circular Overlapping Icon */}
                <div className="absolute -bottom-5 left-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md transition-colors duration-700 ease-in-out dark:border-white/10 dark:bg-[#0F0F11]">
                  <member.icon className="h-4 w-4 text-[#E04D43]" strokeWidth={2} />
                </div>
              </div>

              {/* Content Area - Minimized Inner Padding */}
              <div className="flex flex-1 flex-col px-4 pb-4 pt-8">
                <h3 className="font-sans text-base font-bold tracking-tight text-black transition-colors duration-700 ease-in-out dark:text-white">
                  {member.name}
                </h3>
                <p className="mt-0.5 text-[11px] font-bold uppercase tracking-wider text-[#E04D43]">
                  {member.role}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-gray-500 transition-colors duration-700 ease-in-out dark:text-gray-400">
                  {member.desc}
                </p>

                {/* Footer LinkedIn Icon */}
                <div className="mt-auto pt-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gray-100 text-gray-500 transition-colors duration-300 hover:bg-[#0077b5] hover:text-white dark:bg-white/5 dark:text-gray-400 dark:hover:bg-[#0077b5] dark:hover:text-white"
                  >
                    <Linkedin className="h-4 w-4" strokeWidth={2} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* --- BOTTOM STATS RIBBON --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex w-full flex-col justify-between gap-8 rounded-2xl border border-gray-200 bg-gray-50 px-6 py-6 transition-colors duration-700 ease-in-out dark:border-transparent dark:bg-[#0F0F11] dark:text-white shadow-sm lg:mt-10 lg:flex-row lg:items-center lg:px-10 lg:py-8"
        >
          <div className="grid w-full grid-cols-2 gap-y-8 divide-gray-200 transition-colors duration-700 ease-in-out dark:divide-white/10 lg:grid-cols-4 lg:divide-x">
            {bottomStats.map((stat, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-4 lg:justify-center ${idx !== 0 ? 'lg:pl-8' : ''}`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 transition-colors duration-700 ease-in-out dark:border dark:border-white/5 dark:bg-white/5">
                  <stat.icon className="h-5 w-5 text-[#E04D43]" strokeWidth={2} />
                </div>

                <div className="flex flex-col">
                  <h4 className="text-xl font-bold tracking-tight text-black transition-colors duration-700 ease-in-out dark:text-white md:text-2xl">
                    {stat.value}
                  </h4>
                  <p className="mt-0.5 text-[10px] font-medium text-gray-500 transition-colors duration-700 ease-in-out dark:text-gray-400 sm:text-xs">
                    {stat.label}
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