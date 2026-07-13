import React, { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Video,
  Monitor,
  Megaphone,
  Lightbulb,
  Mic,
  Camera,
  ArrowRight,
  RotateCcw,
  Sparkles
} from "lucide-react";

// Keep your site-pages import just for the meta tags (SEO)
import { pages } from "@/data/site-pages";

const page = pages["case-studies"];

// --- MINI GAME DATA & LOGIC ---
const GAME_ICONS = [Video, Monitor, Megaphone, Lightbulb, Mic, Camera];

const shuffleCards = () => {
  return [...GAME_ICONS, ...GAME_ICONS]
    .sort(() => Math.random() - 0.5)
    .map((Icon, index) => ({
      id: index,
      Icon,
      isFlipped: false,
      isMatched: false,
    }));
};

// --- COMPONENT TO RENDER ---
function ComingSoonPage() {
  const [cards, setCards] = useState<any[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [isWon, setIsWon] = useState(false);

  useEffect(() => {
    setCards(shuffleCards());
  }, []);

  const handleCardClick = (index: number) => {
    if (flippedCards.length === 2 || cards[index].isFlipped || cards[index].isMatched) return;

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves((m) => m + 1);
      const [firstIndex, secondIndex] = newFlippedCards;

      if (newCards[firstIndex].Icon === newCards[secondIndex].Icon) {
        setTimeout(() => {
          const matchedCards = [...newCards];
          matchedCards[firstIndex].isMatched = true;
          matchedCards[secondIndex].isMatched = true;
          setCards(matchedCards);
          setFlippedCards([]);
          setMatches((m) => {
            if (m + 1 === GAME_ICONS.length) setIsWon(true);
            return m + 1;
          });
        }, 500);
      } else {
        setTimeout(() => {
          const resetCards = [...newCards];
          resetCards[firstIndex].isFlipped = false;
          resetCards[secondIndex].isFlipped = false;
          setCards(resetCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const resetGame = () => {
    setCards(shuffleCards());
    setFlippedCards([]);
    setMoves(0);
    setMatches(0);
    setIsWon(false);
  };

  return (
    <section className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-[#FAFAFA] text-black transition-colors duration-700 ease-in-out dark:bg-[#050505] dark:text-white py-10 lg:py-12">

      {/* 1800px Max Width pushing to the extreme left/right edges */}
      <div className="mx-auto flex w-full max-w-[1800px] flex-col items-center justify-center px-2 sm:px-4 lg:px-4 gap-8 lg:gap-10">

        {/* --- HEADER --- */}
        <div className="flex w-full flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 flex items-center gap-2 rounded-full border border-red-200 bg-[#FFF6F5] px-4 py-1.5 shadow-sm dark:border-red-900/30 dark:bg-[#E04D43]/10"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#E04D43]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E04D43]">
              UNDER CONSTRUCTION
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sans text-[42px] font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-[72px]"
          >
            We are building something <br className="hidden sm:block" />
            <span className="font-serif italic text-[#E04D43] font-normal">extraordinary.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-lg text-[14px] font-medium leading-relaxed text-gray-600 dark:text-gray-400 sm:text-[16px]"
          >
            Our new digital experience is dropping soon. While you wait, test your memory and match our services below.
          </motion.p>
        </div>

        {/* --- MINI GAME WRAPPER --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex w-full max-w-2xl flex-col items-center justify-center rounded-[24px] border border-gray-200 bg-white p-4 shadow-xl dark:border-white/5 dark:bg-[#0A0A0A] sm:p-6 lg:p-8"
        >
          {/* Game Header */}
          <div className="mb-6 flex w-full items-center justify-between">
            <div className="flex flex-col text-left">
              <span className="text-[16px] font-bold text-black dark:text-white leading-tight">
                Match the Services
              </span>
              <span className="text-[12px] text-gray-500 dark:text-gray-400 mt-0.5">
                Moves: <span className="font-bold text-[#E04D43] dark:text-[#E04D43]">{moves}</span>
              </span>
            </div>
            <button
              onClick={resetGame}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-[#E04D43] transition-colors hover:bg-[#E04D43] hover:text-white dark:bg-[#E04D43]/10 dark:text-[#E04D43] dark:hover:bg-[#E04D43] dark:hover:text-white shadow-sm"
              title="Reset Game"
            >
              <RotateCcw className="h-4 w-4" strokeWidth={2.5} />
            </button>
          </div>

          {/* Game Grid */}
          <div className="relative grid w-full grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
            {cards.map((card, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(index)}
                className="group relative aspect-square w-full cursor-pointer perspective-1000"
              >
                <motion.div
                  className="relative h-full w-full transform-style-preserve-3d"
                  animate={{ rotateY: card.isFlipped || card.isMatched ? 180 : 0 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 260, damping: 20 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front of Card (Face Down) - White with subtle red hover */}
                  <div className="absolute inset-0 flex h-full w-full items-center justify-center rounded-[12px] border border-gray-200 bg-white backface-hidden transition-colors group-hover:border-[#E04D43]/30 dark:border-white/10 dark:bg-[#0A0A0A] dark:group-hover:border-[#E04D43]/50 shadow-sm">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-50 border border-[#E04D43]/20 dark:bg-[#E04D43]/10 dark:border-[#E04D43]/30">
                      <div className="h-2 w-2 rounded-full bg-[#E04D43] opacity-60" />
                    </div>
                  </div>

                  {/* Back of Card (Face Up / Icon Revealed) */}
                  <div
                    className={`absolute inset-0 flex h-full w-full items-center justify-center rounded-[12px] border backface-hidden rotate-y-180 transition-colors duration-300 ${
                      card.isMatched
                        ? "border-[#E04D43] bg-[#E04D43] shadow-md shadow-[#E04D43]/20" // Solid Red when Matched
                        : "border-[#FADCD9] bg-[#FFF6F5] dark:border-red-900/30 dark:bg-[#E04D43]/10" // Light Red when flipped
                    }`}
                    style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
                  >
                    <card.Icon
                      className={`h-6 w-6 sm:h-8 sm:w-8 transition-colors duration-300 ${
                        card.isMatched ? "text-white" : "text-[#E04D43]"
                      }`}
                      strokeWidth={card.isMatched ? 2 : 1.5}
                    />
                  </div>
                </motion.div>
              </div>
            ))}

            {/* Win Overlay */}
            <AnimatePresence>
              {isWon && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-[16px] bg-white/90 backdrop-blur-md dark:bg-[#0A0A0A]/90 border border-gray-200 dark:border-white/10"
                >
                  <h3 className="font-serif text-4xl italic text-[#E04D43]">You won!</h3>
                  <p className="mt-2 text-[14px] font-bold text-black dark:text-white">
                    Completed in {moves} moves.
                  </p>
                  <button
                    onClick={resetGame}
                    className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#E04D43] px-6 py-3 text-[13px] font-bold text-white transition-all hover:bg-[#c93b32] shadow-lg shadow-[#E04D43]/20"
                  >
                    Play Again
                    <RotateCcw className="h-4 w-4" strokeWidth={2.5} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* --- SUBSCRIBE / NOTIFY ME --- */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex w-full max-w-md flex-col items-center justify-center gap-4"
        >
          <span className="text-[13px] font-bold text-black dark:text-white">
            Want to know when we launch?
          </span>
          <div className="relative flex w-full items-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-full border border-gray-300/80 bg-white py-3.5 pl-5 pr-32 text-[14px] text-gray-900 shadow-sm outline-none placeholder:text-gray-400 focus:border-[#E04D43] dark:border-white/10 dark:bg-[#0A0A0A] dark:text-white dark:focus:border-[#E04D43] transition-all"
            />
            {/* Red Theme Applied to Button */}
            <button className="absolute right-1.5 top-1.5 bottom-1.5 flex items-center justify-center gap-1.5 rounded-full bg-[#E04D43] px-4 text-[12px] font-bold text-white transition-colors hover:bg-[#c93b32] shadow-sm shadow-[#E04D43]/20">
              Notify Me
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

// --- ROUTE REGISTRATION ---
export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: `Coming Soon | ${page.title}` },
      { name: "description", content: page.metaDescription },
      { property: "og:title", content: page.title },
      { property: "og:description", content: page.metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: page.title },
      { name: "twitter:description", content: page.metaDescription },
    ],
  }),
  component: ComingSoonPage,
});
export default ComingSoonPage;
