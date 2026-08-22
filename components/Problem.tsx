"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const pains = [
  {
    label: "Traffic without sales",
    body: "You're running ads, posting content, doing everything right — but the sales aren't following. Your store is getting visitors. They're just not buying.",
  },
  {
    label: "An unfinished-looking store",
    body: "Customers decide in seconds. If your store doesn't look credible the moment they land, they leave. No second chances, no explanation.",
  },
  {
    label: "A stuck conversion rate",
    body: "You know the problem exists. You've even tweaked things. But without knowing exactly what's broken, nothing actually moves the needle.",
  },
];

function PainCard({ label, body, i }: { label: string; body: string; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="border-l-2 border-[#C9A227] pl-4 sm:pl-5 py-1"
    >
      <p
        className="text-[#0D0F0D] font-semibold mb-1"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
          letterSpacing: "-0.01em",
        }}
      >
        {label}
      </p>
      <p className="text-[#0D0F0D]/55 leading-[1.65] sm:leading-[1.7]" style={{ fontSize: "0.875rem" }}>
        {body}
      </p>
    </motion.div>
  );
}

export default function Problem() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });

  return (
    <section
      id="problem"
      className="bg-[#F7F3EC] py-14 sm:py-20 lg:py-28"
      aria-label="The problem"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          {/* Left — hook */}
          <motion.div
            ref={headRef}
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block text-[#C9A227] text-[10px] tracking-[0.25em] sm:tracking-[0.3em] uppercase font-semibold mb-3 sm:mb-4">
              Sound familiar?
            </span>
            <h2
              className="text-[#0D0F0D] leading-[1.1] mb-4 sm:mb-5"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.85rem, 3.8vw, 3.2rem)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
              }}
            >
              You have a store.
              <br />
              You don&apos;t have{" "}
              <span className="relative inline-block">
                sales.
                <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-[#C9A227]" />
              </span>
            </h2>
            <p className="text-[#0D0F0D]/55 leading-[1.7] max-w-sm" style={{ fontSize: "0.9rem" }}>
              Most Shopify store owners aren&apos;t failing because they&apos;re
              not working hard enough. They&apos;re failing because the store
              itself isn&apos;t set up to convert. That&apos;s a fixable problem.
            </p>
          </motion.div>

          {/* Right — pain cards */}
          <div className="flex flex-col gap-6 sm:gap-7 pt-1 lg:pt-2">
            {pains.map((p, i) => (
              <PainCard key={p.label} {...p} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
