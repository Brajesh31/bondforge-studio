import { useState, useLayoutEffect } from "react";
import { Menu, X, ArrowUpRight, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { navPages } from "@/data/site-pages";
import logo from "@/assets/logo.png";
import logoDark from "@/assets/logo2.png";

export function NavBar() {
  const [open, setOpen] = useState(false);

  // Initialize state synchronously
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") return true;
      if (savedTheme === "light") return false;
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  // Handle sync on mount and when returning via the Back button
  useLayoutEffect(() => {
    const root = document.documentElement;
    root.classList.add("transition-colors", "duration-500", "ease-in-out");

    const syncTheme = () => {
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);

      // Keep state and DOM perfectly in sync with localStorage
      setIsDark(shouldBeDark);

      if (shouldBeDark) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    };

    // Run immediately on mount
    syncTheme();

    // Listeners for Back/Forward cache (bfcache) and cross-tab syncing
    window.addEventListener("pageshow", syncTheme);
    window.addEventListener("popstate", syncTheme);
    window.addEventListener("storage", syncTheme);

    return () => {
      window.removeEventListener("pageshow", syncTheme);
      window.removeEventListener("popstate", syncTheme);
      window.removeEventListener("storage", syncTheme);
    };
  }, []); // Empty dependency array so it doesn't overwrite localStorage on render

  // Explicitly handle the toggle action
  const toggleTheme = () => {
    const newThemeDark = !isDark;
    setIsDark(newThemeDark);

    const root = document.documentElement;
    if (newThemeDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const displayPages = [
    { to: "/", label: "Home" },
    ...navPages.filter(
      (page) =>
        !["portfolio", "case studies", "home"].includes(page.label.toLowerCase())
    ),
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-in-out">
      <div className="mx-auto mt-4 w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">

        {/* Main Navbar Pill */}
        <div className="flex items-center justify-between rounded-full border border-gray-200 bg-white/80 px-4 py-2.5 shadow-lg backdrop-blur-xl transition-colors duration-500 ease-in-out dark:border-white/10 dark:bg-[#0F0F11]/80 md:px-5">

          <Link to="/" aria-label="Social Bond home" className="flex items-center gap-3 text-black transition-colors duration-500 dark:text-white">
            <img
              src={isDark ? logoDark : logo}
              alt="Social Bond"
              className="h-8 w-auto transition-all duration-500 ease-in-out"
            />
            <span className="hidden select-none font-sans text-xl font-bold tracking-tight sm:block uppercase">
              THE <span className="text-[#E04D43]">SOCIAL</span> BOND
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-2 md:flex">
            {displayPages.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-full px-4 py-2 text-base font-medium text-gray-600 transition-colors duration-300 ease-in-out hover:bg-gray-100 hover:text-black dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white [&.active]:text-black dark:[&.active]:text-white"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions: Theme Toggle + CTA */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-transparent text-gray-600 transition-colors duration-300 ease-in-out hover:bg-gray-100 hover:text-black dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ scale: 0.5, opacity: 0, rotate: -45 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    exit={{ scale: 0.5, opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="h-4 w-4" strokeWidth={2.5} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ scale: 0.5, opacity: 0, rotate: 45 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    exit={{ scale: 0.5, opacity: 0, rotate: -45 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="h-4 w-4" strokeWidth={2.5} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link
                to="/free-consultation"
                className="group inline-flex items-center gap-2 rounded-full bg-[#E04D43] px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#c93b32]"
              >
                Book a call
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2.5} />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-black transition-colors duration-300 dark:border-white/10 dark:text-white md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mt-3 overflow-hidden rounded-3xl border border-gray-200 bg-white/95 p-4 shadow-2xl backdrop-blur-xl transition-colors duration-500 dark:border-white/10 dark:bg-[#0F0F11]/95 md:hidden"
            >
              <div className="flex flex-col gap-1">
                {displayPages.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3.5 text-lg font-medium text-black transition-colors duration-300 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                  >
                    {l.label}
                  </Link>
                ))}

                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#E04D43] px-4 py-4 text-base font-bold text-white transition-colors duration-300 hover:bg-[#c93b32]"
                >
                  Book a call <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}