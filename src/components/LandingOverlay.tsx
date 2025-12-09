"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const NAME = "ayaan munshi";

export default function LandingOverlay() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section ref={ref} className="relative h-full">
      <motion.div
        style={{ opacity, y }}
        className="sticky top-0 h-screen overflow-hidden bg-[#0A0A0A] text-white"
      >
        {/* drifting background names */}
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-10">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`marquee ${i % 2 ? "marquee-reverse" : ""}`}
              style={{ top: `${10 + i * 14}%` }}
            >
              <span className="marquee-text text-white/50">
                {NAME} · {NAME} · {NAME} · {NAME} · {NAME} ·
              </span>
            </div>
          ))}
        </div>

        {/* centered name */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="font-serif leading-none text-[clamp(3rem,12vw,11rem)] font-light text-white"
            >
              <span className="block">{NAME.split(" ")[0]}</span>
              <span className="block">{NAME.split(" ")[1]}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 text-sm sm:text-base text-zinc-400"
            >
              software engineering student from toronto, canada.
            </motion.p>
          </div>
        </div>

        {/* subtle scroll cue */}
        <div className="pointer-events-auto absolute bottom-6 left-0 right-0 flex justify-center">
          <button
            onClick={() =>
              document
                .querySelector("#content")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group inline-flex items-center gap-3 text-xs text-zinc-400/80 hover:text-zinc-200 transition"
            aria-label="Scroll to content"
          >
            <span className="scroll-mouse">
              <span className="scroll-wheel" />
            </span>
            <span className="tracking-widest uppercase">scroll</span>
            <svg
              viewBox="0 0 24 24"
              className="h-3 w-3 animate-bounce-slow"
              aria-hidden="true"
            >
              <path
                d="M6 9l6 6 6-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </motion.div>
    </section>
  );
}

