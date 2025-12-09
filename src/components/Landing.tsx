"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const NAME = "ayaan munshi";

export default function Landing() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const fadeOut = useTransform(scrollYProgress, [0, 0.2], [1, 0]);   // fade away as you start scrolling
  const moveUp  = useTransform(scrollYProgress, [0, 0.2], [0, -40]); // tiny parallax up

  return (
    <section ref={ref} className="relative h-[100svh] overflow-hidden bg-white dark:bg-zinc-950">
      {/* drifting name rows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-10">
        {[0,1,2,3,4,5].map((i) => (
          <div
            key={i}
            className={`marquee ${i % 2 ? "marquee-reverse" : ""}`}
            style={{ top: `${10 + i * 14}%` }}
          >
            <span className="marquee-text">{NAME} · {NAME} · {NAME} · {NAME} · {NAME} · </span>
          </div>
        ))}
      </div>

      {/* main hero */}
      <motion.div style={{ opacity: fadeOut, y: moveUp }} className="relative z-10 h-full">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 h-full flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="font-serif leading-none text-[clamp(3rem,12vw,11rem)] font-light text-zinc-900 dark:text-zinc-100"
          >
            <span className="block">{NAME.split(" ")[0]}</span>
            <span className="block">{NAME.split(" ")[1]}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 text-sm sm:text-base text-zinc-600 dark:text-zinc-400"
          >
            software engineering student from toronto, canada.
          </motion.p>
        </div>

        {/* footer row: links + scroll cue */}
        <div className="absolute bottom-6 left-0 right-0">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 flex items-center justify-between text-xs">
            <div className="flex gap-5 text-zinc-500">
              <a href="mailto:ayaanmunshi456@gmail.com" className="hover:underline">mail</a>
              <a href="https://github.com/ayaancodes" className="hover:underline">github</a>
              <a href="https://www.linkedin.com/in/ayaan-munshi" className="hover:underline">linkedin</a>
            </div>
            <div className="flex items-center gap-3 text-zinc-500">
              <span>scroll</span>
              <span className="scroll-line" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
