"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote, TrendingUp, Clock, Award, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "+42%",
    label: "Avg. Conversion Rate Lift",
    detail: "From targeted CRO audits & UX refinements",
  },
  {
    icon: Clock,
    value: "2–4 Wks",
    label: "Fast Turnaround",
    detail: "From kick-off to a fully operational build",
  },
  {
    icon: Award,
    value: "10+ Yrs",
    label: "Shopify Operator Expertise",
    detail: "Real store scaling, zero agency fluff",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Shopify-Native SEO",
    detail: "Built for long-term organic compounding",
  },
];

const testimonials = [
  {
    quote:
      "She looked at our store for 20 minutes and found three things we'd been blind to for months. Conversion rate went up within the first week of changes.",
    name: "Amara K.",
    detail: "Shopify — Fashion & Apparel",
  },
  {
    quote:
      "I came in with a half-built store and no idea what I was doing. Stephanie built it out properly and explained every decision. Launched on time, looking professional.",
    name: "Jordan T.",
    detail: "Shopify — Home & Lifestyle",
  },
  {
    quote:
      "The SEO work she did is still paying off six months later. Organic traffic is up and I've barely touched anything since she finished.",
    name: "Chloe R.",
    detail: "Shopify — Beauty & Wellness",
  },
];

function TestimonialCard({
  quote,
  name,
  detail,
  i,
  inView,
}: {
  quote: string;
  name: string;
  detail: string;
  i: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.08 + i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white border border-[#0D0F0D]/8 p-5 sm:p-7 flex flex-col gap-3.5 sm:gap-4 group hover:border-[#C9A227]/50 hover:shadow-md transition-all duration-300 relative overflow-hidden rounded-sm"
    >
      {/* Subtle gold corner accent */}
      <div className="absolute top-0 left-0 w-7 h-7 border-t-2 border-l-2 border-[#C9A227]/40 pointer-events-none" />

      <Quote size={17} className="text-[#C9A227] flex-shrink-0" strokeWidth={1.5} />

      <p className="text-[#0D0F0D]/75 leading-[1.65] sm:leading-[1.75] flex-1 italic" style={{ fontSize: "0.875rem" }}>
        &ldquo;{quote}&rdquo;
      </p>

      <div className="pt-3.5 border-t border-[#0D0F0D]/8">
        <p className="text-[#0D0F0D] font-semibold" style={{ fontSize: "0.85rem" }}>{name}</p>
        <p className="text-[#0D0F0D]/40 mt-0.5" style={{ fontSize: "0.75rem" }}>{detail}</p>
      </div>
    </motion.div>
  );
}

export default function Proof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="results" className="bg-[#F7F3EC] py-14 sm:py-20 lg:py-28" aria-label="Results and testimonials">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 sm:mb-14"
        >
          <span className="block text-[#C9A227] text-[10px] tracking-[0.25em] sm:tracking-[0.3em] uppercase font-semibold mb-3 sm:mb-4">
            Results
          </span>
          <h2
            className="text-[#0D0F0D] leading-[1.1]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.85rem, 3.8vw, 3.2rem)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
            }}
          >
            Store owners who saw
            <br />
            the difference.
          </h2>
        </motion.div>

        {/* ── Key Metrics Strip ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mb-10 sm:mb-12">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.05 + i * 0.08, duration: 0.5 }}
                className="bg-white/90 border border-[#0D0F0D]/6 p-4 sm:p-5 rounded-sm flex flex-col justify-between hover:border-[#C9A227]/40 transition-colors duration-200"
              >
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span
                    className="text-[#0D0F0D] font-bold leading-none"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {stat.value}
                  </span>
                  <Icon size={15} className="text-[#C9A227]" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-[#0D0F0D] font-semibold text-[11px] sm:text-xs tracking-tight mb-0.5 sm:mb-1">
                    {stat.label}
                  </p>
                  <p className="text-[#0D0F0D]/45 text-[10px] sm:text-[11px] leading-snug">
                    {stat.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Testimonials Grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 auto-rows-fr">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} i={i} inView={inView} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-7 sm:mt-8 text-[#0D0F0D]/35 text-center tracking-wide"
          style={{ fontSize: "0.7rem" }}
        >
          Names withheld for client privacy. Quotes used with permission.
        </motion.p>
      </div>
    </section>
  );
}
