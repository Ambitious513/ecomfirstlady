"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-[#0D0F0D] overflow-hidden"
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 min-h-screen flex items-center">
        <div className="w-full grid lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-14 items-center">

          {/* ── LEFT — copy ── */}
          <div className="flex flex-col justify-center">

            {/* Eyebrow */}
            <motion.div
              custom={0} initial="hidden" animate="show" variants={fadeUp}
              className="flex items-center gap-3 mb-7"
            >
              <span className="block w-6 h-px bg-[#C9A227]" />
              <span className="text-[#C9A227] text-[10px] tracking-[0.3em] uppercase font-medium">
                Shopify Growth Specialist
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1} initial="hidden" animate="show" variants={fadeUp}
              className="text-white mb-5"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 4vw, 4rem)",
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
              className="text-white/50 max-w-xs leading-[1.75] mb-9"
              style={{ fontSize: "clamp(0.875rem, 1.3vw, 1rem)" }}
            >
              A decade of real Shopify operator experience — helping store owners
              turn traffic into revenue, not just impressions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3} initial="hidden" animate="show" variants={fadeUp}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/apply"
                className="group inline-flex items-center gap-3 bg-[#173A2E] hover:bg-[#C9A227] text-white hover:text-[#0D0F0D] px-7 py-4 transition-all duration-300 text-xs tracking-[0.18em] uppercase font-bold"
              >
                Apply to Work With Me
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-white/35 hover:text-white/65 text-xs tracking-[0.18em] uppercase transition-colors duration-200"
              >
                See what I do <span className="text-[#C9A227]">↓</span>
              </a>
            </motion.div>

            {/* Founder credit */}
            <motion.div
              custom={4} initial="hidden" animate="show" variants={fadeUp}
              className="mt-10 flex items-center gap-3"
            >
              <span className="block w-4 h-px bg-[#C9A227]/50" />
              <p className="text-white/25 text-[10px] tracking-[0.2em] uppercase">
                Founder — Stephanie
              </p>
            </motion.div>
          </div>

          {/* ── RIGHT — portrait card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full"
          >
            {/* Rounded portrait card */}
            <div
              className="relative w-full overflow-hidden"
              style={{
                borderRadius: "20px",
                maxHeight: "580px",
              }}
            >
              <Image
                src="/hero-portrait.png"
                alt="Stephanie — Ecom Firstlady, Shopify Growth Specialist"
                width={680}
                height={800}
                priority
                className="w-full h-full object-cover object-center block"
                style={{
                  maxHeight: "580px",
                  objectPosition: "center top",
                }}
              />

              {/* Very subtle inner shadow for depth */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 60px rgba(13,15,13,0.18)",
                  borderRadius: "20px",
                }}
              />
            </div>

            {/* Outer glow / shadow */}
            <div
              className="absolute inset-0 pointer-events-none -z-10"
              style={{
                borderRadius: "24px",
                boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,162,39,0.12)",
                transform: "scale(1.02)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
