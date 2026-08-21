"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How much does it cost to work with you?",
    a: "It depends on what you need. Store builds and CRO projects typically start at $1,500. SEO engagements vary based on scope. When you apply, you'll share your budget range and I'll let you know if it's a fit — no pressure either way.",
  },
  {
    q: "How long does a project take?",
    a: "A focused CRO audit and implementation can be completed in 1–2 weeks. A full store build is typically 2–4 weeks depending on complexity. SEO is an ongoing process — I'll set realistic expectations on our discovery call.",
  },
  {
    q: "Who is this for?",
    a: "Shopify store owners who are serious about their business. Whether you're pre-launch and need a proper foundation, or you're doing consistent revenue and want to push conversion higher — if you're committed to doing this right, we'll likely be a good fit.",
  },
  {
    q: "Who is this NOT for?",
    a: "If you're looking for the cheapest option, want guaranteed results with no work on your end, or aren't willing to invest in your store — this probably isn't the right fit. I work with people who are ready to treat their store like a real business.",
  },
  {
    q: "Do you offer ongoing support after the project?",
    a: "Yes. Depending on the engagement, I offer follow-up support and ongoing work. We'll discuss what makes sense for your situation during the discovery call.",
  },
  {
    q: "I found you through Discord — do I still need to apply?",
    a: "Yes — the application helps me understand your store and situation before we talk. It also helps me prioritize who to take on. It takes 5 minutes and makes our first call much more useful.",
  },
];

function FAQItem({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="border-b border-[#0D0F0D]/10 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-6 py-5 text-left group"
        aria-expanded={open}
      >
        <span
          className="text-[#0D0F0D] font-medium group-hover:text-[#173A2E] transition-colors duration-200"
          style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.5 }}
        >
          {q}
        </span>
        <span className="flex-shrink-0 text-[#C9A227] transition-transform duration-200">
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p
              className="text-[#0D0F0D]/55 leading-[1.75] pb-5 pr-8"
              style={{ fontSize: "0.875rem" }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      className="bg-[#F7F3EC] py-24 lg:py-32"
      aria-label="Frequently asked questions"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-14 lg:gap-20">
          {/* Left */}
          <div>
            <span className="block text-[#C9A227] text-[10px] tracking-[0.3em] uppercase font-medium mb-4">
              FAQ
            </span>
            <h2
              className="text-[#0D0F0D] leading-[1.08]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
              }}
            >
              Questions
              <br />
              answered.
            </h2>
          </div>

          {/* Right — accordion */}
          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={faq.q} {...faq} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
