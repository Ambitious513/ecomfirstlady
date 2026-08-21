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
      className="bg-[#173A2E] py-24 lg:py-32"
      aria-label="Apply to work with Stephanie"
    >
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="block text-[#C9A227] text-[10px] tracking-[0.3em] uppercase font-medium mb-6"
          >
            Ready?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-white leading-[1.06] mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
            }}
          >
            Your store should be
            <br />
            <em className="not-italic text-[#C9A227]">working harder.</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/55 leading-[1.75] mb-10 max-w-md"
            style={{ fontSize: "0.95rem" }}
          >
            Apply takes five minutes. If we&apos;re a fit, I&apos;ll reach out
            to schedule a discovery call. No pitch, no pressure — just a real
            conversation about your store.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Link
              href="/apply"
              className="group inline-flex items-center gap-3 bg-[#C9A227] hover:bg-white text-[#0D0F0D] text-xs px-10 py-5 tracking-[0.2em] uppercase font-bold transition-all duration-300"
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
