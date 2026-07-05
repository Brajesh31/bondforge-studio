import { useState } from "react";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./logo";
import { navPages } from "@/data/site-pages";

const servicesMenu = [
  { label: "All services", to: "/services" },
  { label: "Video Editing", to: "/services/video-editing" },
  { label: "Social Media Management", to: "/services/social-media-management" },
  { label: "Influencer Management", to: "/services/influencer-management" },
  { label: "Digital Marketing", to: "/services/digital-marketing" },
];

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <div className="flex items-center justify-between rounded-full border border-hairline bg-background/70 px-4 py-2.5 shadow-elevated backdrop-blur-xl md:px-5">
          <Link to="/" aria-label="Social Bond home">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navPages.map((l) =>
              l.to === "/services" ? (
                <div
                  key={l.to}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    to={l.to}
                    className="inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-surface-elevated hover:text-foreground [&.active]:text-foreground"
                    activeProps={{ className: "text-foreground" }}
                  >
                    {l.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </Link>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full pt-2"
                      >
                        <div className="w-56 rounded-2xl border border-hairline bg-background/95 p-1.5 shadow-elevated backdrop-blur-xl">
                          {servicesMenu.map((s) => (
                            <Link
                              key={s.to}
                              to={s.to}
                              className="block rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-surface-elevated hover:text-foreground"
                            >
                              {s.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={l.to}
                  to={l.to}
                  className="rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-surface-elevated hover:text-foreground"
                  activeProps={{ className: "text-foreground" }}
                >
                  {l.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden md:block">
            <Link
              to="/free-consultation"
              className="group inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-4 py-2 text-sm font-medium text-white shadow-glow transition-transform hover:scale-[1.02]"
            >
              Book a call
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <button
            className="grid h-9 w-9 place-items-center rounded-full border border-hairline text-foreground md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mt-2 overflow-hidden rounded-3xl border border-hairline bg-background/95 p-3 shadow-elevated backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col">
                {navPages.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm text-foreground hover:bg-surface-elevated"
                  >
                    {l.label}
                  </Link>
                ))}
                <div className="mt-1 border-t border-hairline pt-1">
                  {servicesMenu.slice(1).map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-4 py-2.5 text-xs text-muted-foreground hover:bg-surface-elevated"
                    >
                      → {s.label}
                    </Link>
                  ))}
                </div>
                <Link
                  to="/free-consultation"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-2xl bg-gradient-brand px-4 py-3 text-sm font-medium text-white"
                >
                  Book a call <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
