"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down 450px on mobile
      if (window.scrollY > 450) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-5 left-4 right-4 z-40 md:hidden"
        >
          <div className="bg-[#0D0F0D]/95 backdrop-blur-md border border-[#C9A227]/40 shadow-2xl p-2.5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 pl-2">
              <Sparkles size={14} className="text-[#C9A227]" />
              <div className="flex flex-col">
                <span className="text-white text-[11px] font-bold tracking-tight">
                  Ecom Firstlady
                </span>
                <span className="text-[#C9A227] text-[9px] uppercase tracking-widest">
                  Shopify Specialist
                </span>
              </div>
            </div>

            <Link
              href="/apply"
              className="bg-[#173A2E] hover:bg-[#C9A227] text-white hover:text-[#0D0F0D] text-xs px-4 py-2.5 tracking-wider uppercase font-semibold flex items-center gap-1.5 transition-colors duration-200"
            >
              <span>Apply Now</span>
              <ArrowRight size={12} />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
