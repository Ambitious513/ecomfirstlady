"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Layers } from "lucide-react";

const strengths = [
  "A decade working inside Shopify stores — not just reading about them",
  "CRO strategy built on real data, not best-guess tweaks",
  "SEO that's Shopify-specific, not copy-pasted from a generic playbook",
  "Plain, direct communication — no agency speak, no fluff reports",
  "Built a reputation inside tight-knit communities where results do the talking",
];

const techStack = [
  "Shopify & Shopify Plus",
  "Liquid Architecture",
  "Klaviyo",
  "Google Analytics 4",
  "Clarity & Hotjar UX",
  "Replo & PageFly",
  "Meta CAPI",
];

export default function Expertise() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className="bg-[#F7F3EC] py-14 sm:py-20 lg:py-28 border-b border-[#0D0F0D]/5"
      aria-label="About Stephanie"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center mb-10 sm:mb-14"
        >
          {/* ── LEFT — portrait card ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-[420px] lg:max-w-none mx-auto w-full"
          >
            {/* Offset outer frame — scales down on mobile */}
            <div
              className="absolute pointer-events-none z-0"
              style={{
                top: "-6px",
                left: "-6px",
                right: "10px",
                bottom: "10px",
                borderRadius: "22px",
                border: "1px solid rgba(201,162,39,0.3)",
              }}
            />

            {/* Portrait card */}
            <div
              className="relative z-10 overflow-hidden"
              style={{
                borderRadius: "20px",
                boxShadow: "0 16px 48px rgba(13,15,13,0.12), 0 0 0 1px rgba(13,15,13,0.06)",
              }}
            >
              <Image
                src="/stephanie-blue.png"
                alt="Stephanie — Founder of Ecom Firstlady"
                width={560}
                height={640}
                className="w-full h-auto object-cover object-top block"
                style={{
                  maxHeight: "520px",
                  objectPosition: "center 15%",
                }}
              />

              {/* "A DECADE OF SHOPIFY" inset badge */}
              <div
                className="absolute bottom-0 left-0 right-0 flex justify-center pb-4 sm:pb-5 z-20"
              >
                <div
                  className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3"
                  style={{
                    background: "#173A2E",
                    borderRadius: "8px",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "#C9A227" }}
                  />
                  <span className="text-white text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.22em] uppercase font-bold">
                    A Decade of Shopify
                  </span>
                </div>
              </div>

              {/* Subtle inner vignette at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none z-10"
                style={{
                  background: "linear-gradient(to top, rgba(13,15,13,0.45) 0%, transparent 100%)",
                }}
              />
            </div>
          </motion.div>

          {/* ── RIGHT — copy ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4 sm:gap-5"
          >
            {/* Decade stat */}
            <div className="flex items-end gap-3 sm:gap-4 mb-0.5">
              <span
                className="text-[#0D0F0D] leading-none"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(3.8rem, 8vw, 6.5rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                }}
              >
                10
              </span>
              <div className="pb-3 flex flex-col gap-1">
                <span className="block w-7 h-px bg-[#C9A227]" />
                <span
                  className="text-[#0D0F0D]/50 tracking-[0.2em] uppercase"
                  style={{ fontSize: "0.65rem" }}
                >
                  Years in Shopify
                </span>
              </div>
            </div>

            {/* Headline */}
            <h2
              className="text-[#0D0F0D] leading-[1.1]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.65rem, 3vw, 2.4rem)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
              }}
            >
              I&apos;m not an agency.
              <br />
              I&apos;m the expert agencies{" "}
              <em className="not-italic text-[#173A2E]">wish they had.</em>
            </h2>

            {/* Bio */}
            <p className="text-[#0D0F0D]/60 leading-[1.65] sm:leading-[1.75]" style={{ fontSize: "0.9rem" }}>
              I&apos;m Stephanie. I&apos;ve spent a decade inside Shopify stores — building
              them, diagnosing them, and scaling them. My reputation didn&apos;t come
              from ads or a fancy website. It came from store owners inside Discord
              communities who kept recommending me because the work actually moved
              the needle.
            </p>

            <p className="text-[#0D0F0D]/60 leading-[1.65] sm:leading-[1.75]" style={{ fontSize: "0.9rem" }}>
              Now I&apos;m bringing that work to a wider audience — and being very
              deliberate about who I work with. If you&apos;re serious about your
              store, I&apos;m serious about your results.
            </p>

            {/* Checklist */}
            <ul className="flex flex-col gap-2 pt-1">
              {strengths.map((s) => (
                <li key={s} className="flex items-start gap-2.5">
                  <CheckCircle
                    size={14}
                    className="text-[#6FA98A] flex-shrink-0 mt-1"
                    strokeWidth={2.5}
                  />
                  <span
                    className="text-[#0D0F0D]/70 leading-relaxed"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ── Ecosystem Mastery Ribbon ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="pt-7 sm:pt-9 border-t border-[#0D0F0D]/8"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <Layers size={13} className="text-[#C9A227]" />
              <span className="text-[#0D0F0D]/40 text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-bold">
                Ecosystem Mastery
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-1.5 sm:gap-y-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-[#0D0F0D]/65 hover:text-[#173A2E] text-xs tracking-wide font-medium transition-colors cursor-default flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-[#C9A227]/70" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
