"use client";

import Link from "next/link";
import { Instagram, Twitter, Linkedin, MessageCircle } from "lucide-react";

const socials = [
  {
    label: "Instagram",
    href: "#",
    icon: Instagram,
  },
  {
    label: "X / Twitter",
    href: "#",
    icon: Twitter,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: Linkedin,
  },
  {
    label: "WhatsApp",
    href: process.env.NEXT_PUBLIC_WHATSAPP_LINK ?? "#",
    icon: MessageCircle,
  },
];

export default function Footer() {
  return (
    <footer
      className="bg-[#0D0F0D] border-t border-white/5 py-14"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <p
              className="text-white text-xl font-bold tracking-tight mb-1"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ecom Firstlady
            </p>
            <p className="text-white/30 text-xs tracking-[0.15em] uppercase">
              Founder — Stephanie
            </p>
            <p className="text-white/20 text-xs mt-2">
              Shopify Growth Specialist
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {[
              ["Services", "#services"],
              ["About", "#about"],
              ["Results", "#results"],
              ["Process", "#process"],
              ["FAQ", "#faq"],
              ["Apply", "/apply"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-white/40 hover:text-white text-sm tracking-wide transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white/30 hover:text-[#C9A227] transition-colors duration-200"
              >
                <Icon size={18} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Ecom Firstlady. All rights reserved.
          </p>
          <p className="text-white/15 text-xs">
            contact:{" "}
            <a
              href="mailto:hello@ecomfirstlady.com"
              className="hover:text-white/40 transition-colors duration-200"
            >
              hello@ecomfirstlady.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
