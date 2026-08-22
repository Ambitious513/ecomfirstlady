"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] lg:min-h-screen bg-[#0D0F0D] overflow-hidden"
      aria-label="Hero"
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 80px, #C9A227 80px, #C9A227 81px), repeating-linear-gradient(90deg, transparent, transparent 80px, #C9A227 80px, #C9A227 81px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 pt-24 sm:pt-28 pb-12 sm:pb-16 min-h-[90vh] lg:min-h-screen flex items-center">
        <div className="w-full grid lg:grid-cols-[1fr_1.05fr] gap-8 sm:gap-10 lg:gap-14 items-center">

          {/* ── LEFT (Mobile: Centered / Desktop: Left-aligned) ── */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left justify-center">

            {/* Eyebrow */}
            <motion.div
              custom={0} initial="hidden" animate="show" variants={fadeUp}
              className="flex items-center justify-center lg:justify-start gap-2.5 mb-5 sm:mb-6"
            >
              <span className="block w-5 sm:w-6 h-px bg-[#C9A227]" />
              <span className="text-[#C9A227] text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] uppercase font-semibold">
                Shopify Growth Specialist
              </span>
              <span className="block w-5 sm:w-6 h-px bg-[#C9A227] lg:hidden" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1} initial="hidden" animate="show" variants={fadeUp}
              className="text-white mb-4 sm:mb-5"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 5.5vw, 4.2rem)",
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: "-0.025em",
              }}
            >
              Your Shopify
              <br />
              store,{" "}
              <em className="not-italic" style={{ color: "#C9A227" }}>built</em>
              <br />
              to actually sell.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              custom={2} initial="hidden" animate="show" variants={fadeUp}
              className="text-white/55 max-w-md lg:max-w-xs leading-[1.65] sm:leading-[1.75] mb-7 sm:mb-9 mx-auto lg:mx-0"
              style={{ fontSize: "clamp(0.875rem, 1.2vw, 1rem)" }}
            >
              A decade of real Shopify operator experience — helping store owners
              turn traffic into revenue, not just impressions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3} initial="hidden" animate="show" variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 w-full sm:w-auto"
            >
              <Link
                href="/apply"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#173A2E] hover:bg-[#C9A227] text-white hover:text-[#0D0F0D] px-7 py-3.5 sm:py-4 transition-all duration-300 text-xs tracking-[0.18em] uppercase font-bold"
              >
                Apply to Work With Me
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-xs tracking-[0.18em] uppercase transition-colors duration-200 py-2"
              >
                See what I do <span className="text-[#C9A227]">↓</span>
              </a>
            </motion.div>

            {/* Founder credit */}
            <motion.div
              custom={4} initial="hidden" animate="show" variants={fadeUp}
              className="mt-8 sm:mt-10 flex items-center justify-center lg:justify-start gap-3"
            >
              <span className="block w-4 h-px bg-[#C9A227]/50" />
              <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase">
                Founder — Stephanie
              </p>
              <span className="block w-4 h-px bg-[#C9A227]/50 lg:hidden" />
            </motion.div>
          </div>

          {/* ── RIGHT — portrait card (Scaled for mobile + desktop) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[420px] lg:max-w-none mx-auto"
          >
            {/* Rounded portrait card */}
            <div
              className="relative w-full overflow-hidden"
              style={{
                borderRadius: "20px",
                maxHeight: "560px",
              }}
            >
              <Image
                src="/hero-portrait.png"
                alt="Stephanie — Ecom Firstlady, Shopify Growth Specialist"
                width={680}
                height={800}
                priority
                className="w-full h-auto object-cover object-top block"
                style={{
                  maxHeight: "560px",
                  objectPosition: "center 10%",
                }}
              />

              {/* Inner shadow for depth */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 50px rgba(13,15,13,0.2)",
                  borderRadius: "20px",
                }}
              />
            </div>

            {/* Outer glow / shadow */}
            <div
              className="absolute inset-0 pointer-events-none -z-10"
              style={{
                borderRadius: "24px",
                boxShadow: "0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,162,39,0.12)",
                transform: "scale(1.02)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
