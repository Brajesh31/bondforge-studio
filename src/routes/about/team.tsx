import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Linkedin, Users } from "lucide-react";

const teamMembers = [
  {
    name: "Anand Kumar Mahato",
    role: "Founder",
    desc: "I believe stories have the power to shift perspectives and build lasting impact.",
    img: "anand2.png",
    socials: { linkedin: "https://www.linkedin.com/in/blvrran/" }
  },
  {
    name: "Kumkum Jangra",
    role: "Influencer Marketing Executive",
    desc: "Connecting brands with the right voices to create authentic and impactful campaigns.",
    img: "kumkum.png",
    socials: { linkedin: "https://www.linkedin.com/in/kumkum-jangra-91492a359" }
  },
  {
    name: "Mehar Snotra",
    role: "SEO Expert",
    desc: "Driving organic growth through strategic visibility and data-driven search optimization.",
    img: "mehar.png",
    socials: { linkedin: "https://www.linkedin.com/in/mehar-snotra-67127528b" }
  },
  {
    name: "Ananya Kumari",
    role: "Performance Marketer",
    desc: "Turning data into actionable strategies that maximize ROI and brand reach.",
    img: "anaya.png",
    socials: { linkedin: "https://www.linkedin.com/in/ananya-kumari-8499a633b" }
  },
  {
    name: "Diksha Mehra",
    role: "Frontend Engineer",
    desc: "Building seamless, pixel-perfect user experiences that bring designs to life.",
    img: "diku.png",
    socials: { linkedin: "https://www.linkedin.com/in/diksha-mehra-4084a9290" }
  },
  {
    name: "Shruti Yadav",
    role: "Social Media Manager",
    desc: "We don't just post content, we build communities and drive meaningful conversations.",
    img: "shruti.png",
    socials: { linkedin: "https://www.linkedin.com/in/shruti-yadav-aba404347" }
  }
];

export function Team() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAFAFA] text-black transition-colors duration-700 ease-in-out dark:bg-[#050505] dark:text-white pt-10 pb-4 md:pt-16 md:pb-6">

      {/* Max width 1800px with extreme minimal edge padding */}
      <div className="mx-auto w-full max-w-[1800px] px-2 sm:px-4 lg:px-6">

        {/* --- HEADER --- */}
        <div className="flex flex-col justify-between gap-8 pb-8 lg:flex-row lg:items-start lg:gap-12 lg:pb-10">

          {/* Left: Headlines */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h2 className="font-sans text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[72px]">
              The specialists <br />
              behind <span className="font-serif italic text-[#E04D43] font-normal tracking-normal">Social Bond.</span>
            </h2>
          </motion.div>

          {/* Right: Subtext & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex w-full max-w-lg flex-col gap-6 lg:items-end lg:text-right pt-2"
          >
            <p className="text-sm font-medium leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
              A team of creators, strategists and innovators <br className="hidden md:block" />
              working together to craft content that connects <br className="hidden md:block" />
              and campaigns that convert.
            </p>
            <Link
              to="/contact"
              className="group inline-flex w-fit items-center justify-center gap-2 rounded-full border border-gray-300 bg-transparent px-6 py-2.5 text-sm font-medium text-black transition-all hover:bg-gray-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10 sm:px-7"
            >
              Join Our Team
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2} />
            </Link>
          </motion.div>

        </div>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 lg:gap-5">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-gray-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-[#0A0A0A] dark:hover:border-white/20"
            >
              {/* Image Area */}
              <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden sm:aspect-[4/5] xl:h-[288px]">
                <img
                  src={member.img}
                  alt={member.name}
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 dark:opacity-100" />
              </div>

              {/* Content Area */}
              <div className="flex flex-1 flex-col p-4">

                {/* Role */}
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#E04D43]">
                  {member.role}
                </span>

                {/* Name */}
                <h3 className="mt-1 font-sans text-xl font-bold tracking-tight text-black dark:text-white lg:text-xl">
                  {member.name}
                </h3>

                {/* Bio */}
                <p className="mt-3 text-[13px] leading-relaxed text-gray-600 dark:text-gray-400">
                  {member.desc}
                </p>

                {/* Social Icons (Only LinkedIn Remains) */}
                <div className="mt-auto flex items-center gap-2 pt-6">
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:bg-gray-100 hover:text-[#0077b5] dark:border-white/20 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-[#0a66c2]"
                  >
                    <Linkedin className="h-3.5 w-3.5" strokeWidth={2} />
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* --- BOTTOM BANNER --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-gray-200 pt-6 dark:border-white/10 lg:mt-12 lg:flex-row"
        >
          {/* Left: Stats */}
          <div className="flex w-full items-center justify-center gap-4 lg:w-auto lg:justify-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-transparent dark:border-white/10">
              <Users className="h-5 w-5 text-[#E04D43]" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-widest text-black dark:text-white sm:text-base">
                6+ MEMBERS
              </span>
              <span className="mt-0.5 text-[11px] font-medium text-gray-500 dark:text-gray-400 sm:text-xs">
                United by creativity. Driven by purpose.
              </span>
            </div>
          </div>

          {/* Center: Signature Text */}
          <div className="flex w-full items-center justify-center gap-4 lg:w-auto">
            <span className="font-serif text-2xl italic text-black dark:text-white sm:text-3xl">
              One Team. One Bond.
            </span>
          </div>

          {/* Right: CTA */}
          <div className="flex w-full justify-center lg:w-auto lg:justify-end">
            <Link
              to="/about"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-transparent px-6 py-2.5 text-sm font-medium text-black transition-all hover:bg-gray-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10 sm:px-7"
            >
              See Our Culture
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2} />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}