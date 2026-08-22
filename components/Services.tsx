"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Store, Search, TrendingUp } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Store,
    title: "Shopify Store Build",
    tagline: "Built to convert from day one.",
    body: "A professionally built Shopify store that looks credible, loads fast, and is structured to sell — not just sit there looking pretty.",
    outcome: "Launch with a store that's ready to take money.",
  },
  {
    icon: Search,
    title: "Shopify SEO",
    tagline: "Show up where your buyers are searching.",
    body: "SEO built specifically for Shopify — product pages, collections, structured data, internal linking. The kind that actually moves rankings.",
    outcome: "Organic traffic that compounds month over month.",
  },
  {
    icon: TrendingUp,
    title: "Conversion Optimization",
    tagline: "More sales from the traffic you already have.",
    body: "Your store gets visitors. Let's figure out why they're not buying — and fix it. From page structure to checkout flow, surgical and specific.",
    outcome: "Higher conversion without spending more on ads.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      className="bg-[#173A2E] py-14 sm:py-20 lg:py-28"
      aria-label="Services"
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
            What I do
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
            Three ways I help your
            <br />
            store perform.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-3 md:gap-px bg-transparent md:bg-white/8">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.08 + i * 0.1,
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-[#173A2E] border border-white/10 md:border-none p-6 sm:p-8 lg:p-10 flex flex-col gap-4 sm:gap-5 group hover:bg-[#0D0F0D] transition-colors duration-300 relative rounded-sm md:rounded-none"
              >
                {/* Top hover bar */}
                <div className="absolute top-0 left-0 right-0 h-px bg-[#C9A227] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <Icon size={22} className="text-[#C9A227] flex-shrink-0" strokeWidth={1.5} />

                <div>
                  <p className="text-white/40 tracking-[0.15em] uppercase mb-1.5" style={{ fontSize: "0.68rem" }}>
                    {s.tagline}
                  </p>
                  <h3
                    className="text-white mb-2.5"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.1rem, 1.5vw, 1.3rem)",
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-white/60 leading-[1.65]" style={{ fontSize: "0.875rem" }}>
                    {s.body}
                  </p>
                </div>

                <div className="mt-auto pt-4 border-t border-white/10">
                  <p className="text-[#6FA98A] font-semibold" style={{ fontSize: "0.8rem" }}>
                    {s.outcome}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 sm:mt-10 text-center"
        >
          <Link
            href="/apply"
            className="inline-block w-full sm:w-auto bg-[#C9A227] hover:bg-[#F7F3EC] text-[#0D0F0D] text-xs px-8 py-3.5 sm:py-4 tracking-[0.2em] uppercase font-bold transition-colors duration-200"
          >
            Apply to Work With Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
