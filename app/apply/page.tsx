import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ApplyForm from "@/components/ApplyForm";

export const metadata: Metadata = {
  title: "Apply to Work With Me — Ecom Firstlady",
  description:
    "Ready to take your Shopify store seriously? Apply to work with Stephanie — Shopify Growth Specialist with a decade of experience.",
};

export default function ApplyPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#F7F3EC] min-h-screen pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-14 lg:gap-20 items-start">

            {/* Left — context */}
            <div className="lg:sticky lg:top-32">
              <span className="block text-[#C9A227] text-xs tracking-[0.25em] uppercase font-medium mb-5">
                Apply
              </span>
              <h1
                className="text-[#0D0F0D] leading-tight mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.4rem, 4vw, 3.8rem)",
                  fontWeight: 700,
                }}
              >
                Let&apos;s see if
                <br />
                we&apos;re a fit.
              </h1>
              <p className="text-[#0D0F0D]/60 text-base leading-relaxed mb-8 max-w-sm">
                This isn&apos;t a contact form — it&apos;s an application. I
                work with a small number of store owners at a time and I&apos;m
                deliberate about who that is.
              </p>
              <p className="text-[#0D0F0D]/60 text-base leading-relaxed mb-10 max-w-sm">
                Fill this out honestly. Takes about 5 minutes. If we&apos;re a
                fit, I&apos;ll be in touch within 48 hours to schedule a
                discovery call.
              </p>

              {/* Trust markers */}
              <div className="flex flex-col gap-4">
                {[
                  "I review every application personally",
                  "No sales pitch — just a real conversation",
                  "You'll know within 48 hours",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-[#C9A227] flex-shrink-0" />
                    <span className="text-[#0D0F0D]/50 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Testimonial snippet */}
              <div className="mt-12 border-l-2 border-[#C9A227] pl-5 py-1">
                <p className="text-[#0D0F0D]/65 text-sm italic leading-relaxed">
                  &ldquo;She looked at our store for 20 minutes and found three
                  things we&apos;d been blind to for months.&rdquo;
                </p>
                <p className="text-[#0D0F0D]/35 text-xs mt-2 tracking-wide">
                  — Store owner, Fashion & Apparel
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-[#F7F3EC]">
              <ApplyForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
