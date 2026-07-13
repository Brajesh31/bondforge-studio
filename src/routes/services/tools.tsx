import { motion } from "motion/react";
import { Monitor } from "lucide-react";

const toolsData = [
  {
    name: "Adobe Premiere Pro",
    desc: "Professional video editing for every story.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg",
  },
  {
    name: "After Effects",
    desc: "Motion graphics & visual effects.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-original.svg",
  },
  {
    name: "Adobe Photoshop",
    desc: "Image editing & visual compositing.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
  },
  {
    name: "Adobe Illustrator",
    desc: "Vector graphics & brand illustrations.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg",
  },
  {
    name: "DaVinci Resolve",
    desc: "Color grading & professional finishing.",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4b/DaVinci_Resolve_Studio.png",
  },
  {
    name: "Figma",
    desc: "UI/UX design & prototyping.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },
  {
    name: "Webflow",
    desc: "Modern websites, built visually.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webflow/webflow-original.svg",
  },
  {
    name: "Framer",
    desc: "High-performance web experiences.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framer/framer-original.svg",
  },
  {
    name: "VS Code",
    desc: "Clean code. Better performance.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  },
  {
    name: "Blender",
    desc: "3D modeling & visualization.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg",
  }
];

export function Tools() {
  return (
    <section
      id="tools"
      // Reduced bottom padding (pb-6) to tighten up the bottom of the section
      className="relative flex w-full flex-col justify-center bg-white text-black transition-colors duration-700 ease-in-out dark:bg-[#050505] dark:text-white pt-10 pb-6 md:pt-14 md:pb-6"
    >
      {/* Maximum width 1800px, extreme left/right edges */}
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">

        {/* --- HEADER --- */}
        <div className="flex flex-col items-center justify-center text-center pb-8 lg:pb-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-sans text-3xl font-extrabold tracking-tight transition-colors duration-700 ease-in-out sm:text-4xl md:text-[3rem] lg:text-[3.5rem] leading-tight"
          >
            Powerful tools. <span className="italic text-[#E04D43] transition-colors duration-700 ease-in-out">Creative excellence.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-xs font-medium text-gray-600 transition-colors duration-700 ease-in-out dark:text-gray-400 sm:text-sm md:text-base"
          >
            We use industry-leading tools and technologies to deliver outstanding results, every time.
          </motion.p>
        </div>

        {/* --- 5x2 GRID --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4 xl:gap-5"
        >
          {toolsData.map((tool, idx) => (
            <div
              key={idx}
              // INCREASED CARD HEIGHT: Added min-h classes and slightly increased inner padding (p-5 lg:p-7)
              className="group flex flex-col items-center justify-center overflow-hidden rounded-[1.25rem] border border-gray-200 bg-gray-50 p-5 text-center shadow-sm transition-all duration-700 ease-in-out hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-[#0F0F11] dark:shadow-none dark:hover:border-white/20 min-h-[170px] sm:min-h-[190px] lg:min-h-[220px] lg:p-7"
            >

              {/* App Icon Wrapper */}
              <div className="mb-4 flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-md transition-colors duration-700 ease-in-out dark:bg-[#1A1A1C] lg:h-16 lg:w-16">
                <img
                  src={tool.img}
                  alt={tool.name}
                  className="h-9 w-9 object-contain transition-transform duration-500 group-hover:scale-110 lg:h-10 lg:w-10"
                  loading="lazy"
                />
              </div>

              {/* Tool Info */}
              <h3 className="font-sans text-xs font-bold tracking-tight text-black transition-colors duration-700 ease-in-out dark:text-white sm:text-sm lg:text-base">
                {tool.name}
              </h3>

              <p className="mt-2 text-[10px] leading-relaxed text-gray-500 transition-colors duration-700 ease-in-out dark:text-gray-400 sm:text-xs">
                {tool.desc}
              </p>

              {/* Red Dash / Accent - Margins adjusted slightly to match taller cards */}
              <div className="mt-5 h-[2px] w-4 rounded-full bg-[#E04D43]/60 transition-all duration-300 group-hover:w-8 group-hover:bg-[#E04D43]" />
            </div>
          ))}
        </motion.div>

        {/* --- BOTTOM RIBBON --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          // Reduced top margin (mt-8 lg:mt-10) to tighten the space below the grid
          className="mt-8 flex flex-col items-center justify-center gap-3 lg:mt-10"
        >
          {/* Circular Monitor Icon */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E04D43]/40 bg-[#E04D43]/5 transition-colors duration-700 ease-in-out dark:border-[#E04D43]/60 dark:bg-transparent">
            <Monitor className="h-4 w-4 text-[#E04D43]" strokeWidth={1.5} />
          </div>

          {/* Footer Text */}
          <p className="text-xs font-bold text-black transition-colors duration-700 ease-in-out dark:text-white sm:text-sm">
            Right tools. Right talent. <span className="italic text-[#E04D43]">Exceptional results.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}