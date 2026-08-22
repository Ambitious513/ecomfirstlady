"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="bg-[#173A2E] py-14 sm:py-20 lg:py-28"
      aria-label="Apply to work with Stephanie"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6" ref={ref}>
        <div className="max-w-3xl flex flex-col items-center lg:items-start text-center lg:text-left mx-auto lg:mx-0">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="block text-[#C9A227] text-[10px] tracking-[0.25em] sm:tracking-[0.3em] uppercase font-semibold mb-4 sm:mb-5"
          >
            Ready?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-white leading-[1.08] mb-4 sm:mb-5"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4.5vw, 4.2rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
            }}
          >
            Your store should be
            <br />
            <em className="not-italic text-[#C9A227]">working harder.</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/60 leading-[1.65] sm:leading-[1.75] mb-8 sm:mb-9 max-w-md"
            style={{ fontSize: "0.95rem" }}
          >
            Apply takes five minutes. If we&apos;re a fit, I&apos;ll reach out
            to schedule a discovery call. No pitch, no pressure — just a real
            conversation about your store.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/apply"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#C9A227] hover:bg-white text-[#0D0F0D] text-xs px-9 py-4 sm:py-5 tracking-[0.2em] uppercase font-bold transition-all duration-300"
            >
              Apply to Work With Me
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
