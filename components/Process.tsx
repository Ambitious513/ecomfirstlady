"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Apply",
    body: "Fill out the application so I can understand your store, your goals, and whether we're a good fit. Takes about 5 minutes.",
  },
  {
    number: "02",
    title: "Discovery Call",
    body: "We get on a call, go deeper on your situation, and agree on exactly what we're working on and what success looks like.",
  },
  {
    number: "03",
    title: "Build & Optimize",
    body: "I get to work — whether that's building your store from scratch, a full SEO implementation, or a CRO deep-dive.",
  },
  {
    number: "04",
    title: "Results",
    body: "You get a store that performs. Clear deliverables, clear outcomes — not an endless retainer with nothing to show for it.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="process"
      className="bg-[#0D0F0D] py-14 sm:py-20 lg:py-28"
      aria-label="How it works"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 sm:mb-14"
        >
          <span className="block text-[#C9A227] text-[10px] tracking-[0.25em] sm:tracking-[0.3em] uppercase font-semibold mb-3 sm:mb-4">
            How it works
          </span>
          <h2
            className="text-white leading-[1.1]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.85rem, 3.8vw, 3.2rem)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
            }}
          >
            Simple process.
            <br />
            Real outcomes.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-2.5 md:gap-px bg-transparent md:bg-white/5">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.08 + i * 0.1,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-[#0D0F0D] border border-white/5 md:border-none p-5 sm:p-7 lg:p-8 flex flex-col gap-3 sm:gap-4 relative group rounded-sm md:rounded-none"
            >
              {/* Gold top border on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-[#C9A227] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Step number */}
              <span
                className="text-white/15 leading-none select-none"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                }}
              >
                {step.number}
              </span>

              <h3
                className="text-white"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.05rem, 1.4vw, 1.25rem)",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                }}
              >
                {step.title}
              </h3>
              <p className="text-white/50 leading-[1.65]" style={{ fontSize: "0.875rem" }}>
                {step.body}
              </p>

              {/* Connector dot — visible between steps on desktop */}
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-10 translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#C9A227]/25 hidden md:block z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
