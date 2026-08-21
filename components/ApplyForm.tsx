"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, MessageCircle, Send } from "lucide-react";

type FormValues = {
  name: string;
  email: string;
  storeUrl: string;
  monthlyRevenue: string;
  services: string[];
  biggestChallenge: string;
  budgetPreset: string;
  budgetCustom?: string;
  howHeard: string;
};

const revenueOptions = [
  "Pre-launch",
  "$0 – $1k / mo",
  "$1k – $10k / mo",
  "$10k – $50k / mo",
  "$50k+ / mo",
];

const serviceOptions = [
  { value: "store-build", label: "Store Build" },
  { value: "seo", label: "Shopify SEO" },
  { value: "cro", label: "Conversion Optimization" },
  { value: "not-sure", label: "Not sure yet" },
];

const budgetOptions = [
  "$1,500 – $3,500",
  "$3,500 – $7,500",
  "$7,500+",
  "Other (I'll share my budget)",
];

const howHeardOptions = [
  "Discord",
  "Instagram",
  "X / Twitter",
  "Word of mouth",
  "Google search",
  "Other",
];

export default function ApplyForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ defaultValues: { services: [] } });

  const budgetPreset = watch("budgetPreset");
  const showCustomBudget = budgetPreset === "Other (I'll share my budget)";

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setServerError("");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error ?? "Something went wrong. Please try again.");
      }
      setSubmitted(true);
    } catch (err: unknown) {
      setServerError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const inputClass =
    "w-full bg-white border border-[#0D0F0D]/15 focus:border-[#173A2E] focus:outline-none px-4 py-3 text-sm text-[#0D0F0D] placeholder:text-[#0D0F0D]/30 transition-colors duration-200 rounded-none";

  const labelClass = "block text-xs tracking-[0.12em] uppercase text-[#0D0F0D]/50 mb-2 font-medium";

  const errorClass = "text-red-500 text-xs mt-1";

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white border border-[#0D0F0D]/10 p-10 md:p-14 text-center flex flex-col items-center gap-6"
      >
        <CheckCircle size={48} className="text-[#6FA98A]" strokeWidth={1.5} />
        <div>
          <h2
            className="text-[#0D0F0D] text-2xl md:text-3xl mb-3"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            Application received.
          </h2>
          <p className="text-[#0D0F0D]/60 text-base leading-relaxed max-w-md mx-auto">
            Thank you — I&apos;ve got your details. I review every application
            personally and will be in touch within 48 hours if we&apos;re a
            good fit.
          </p>
        </div>

        <div className="w-full h-px bg-[#0D0F0D]/8 my-2" />

        <p className="text-[#0D0F0D]/50 text-sm">Want to reach out directly in the meantime?</p>

        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
          <a
            href={process.env.NEXT_PUBLIC_WHATSAPP_LINK ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white text-sm px-5 py-3 font-medium transition-colors duration-200"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
          <a
            href={process.env.NEXT_PUBLIC_TELEGRAM_LINK ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-[#229ED9] hover:bg-[#0088CC] text-white text-sm px-5 py-3 font-medium transition-colors duration-200"
          >
            <Send size={16} />
            Telegram
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
      {/* Name + Email */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Your name *</label>
          <input
            {...register("name", { required: "Name is required" })}
            placeholder="First name is fine"
            className={inputClass}
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Email address *</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
            })}
            type="email"
            placeholder="you@example.com"
            className={inputClass}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
      </div>

      {/* Store URL */}
      <div>
        <label className={labelClass}>Shopify store URL</label>
        <input
          {...register("storeUrl")}
          placeholder="yourstore.myshopify.com (or your custom domain)"
          className={inputClass}
        />
      </div>

      {/* Revenue */}
      <div>
        <label className={labelClass}>Current monthly revenue *</label>
        <select
          {...register("monthlyRevenue", { required: "Please select a range" })}
          className={inputClass}
        >
          <option value="">Select a range…</option>
          {revenueOptions.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
        {errors.monthlyRevenue && (
          <p className={errorClass}>{errors.monthlyRevenue.message}</p>
        )}
      </div>

      {/* Services */}
      <div>
        <label className={labelClass}>What do you need help with? *</label>
        <div className="grid sm:grid-cols-2 gap-3">
          {serviceOptions.map((opt) => (
            <label
              key={opt.value}
              className="flex items-center gap-3 bg-white border border-[#0D0F0D]/10 px-4 py-3 cursor-pointer hover:border-[#173A2E] transition-colors duration-200 group"
            >
              <input
                type="checkbox"
                value={opt.value}
                {...register("services", { required: "Select at least one" })}
                className="accent-[#173A2E] w-4 h-4 flex-shrink-0"
              />
              <span className="text-sm text-[#0D0F0D]/70 group-hover:text-[#0D0F0D] transition-colors">
                {opt.label}
              </span>
            </label>
          ))}
        </div>
        {errors.services && (
          <p className={errorClass}>{errors.services.message}</p>
        )}
      </div>

      {/* Biggest challenge */}
      <div>
        <label className={labelClass}>Biggest challenge right now *</label>
        <textarea
          {...register("biggestChallenge", {
            required: "Please describe your challenge",
            minLength: { value: 20, message: "Give a little more detail (20+ characters)" },
          })}
          rows={4}
          placeholder="Tell me what's not working — be as specific as you can."
          className={`${inputClass} resize-none`}
        />
        {errors.biggestChallenge && (
          <p className={errorClass}>{errors.biggestChallenge.message}</p>
        )}
      </div>

      {/* Budget */}
      <div>
        <label className={labelClass}>Budget range *</label>
        <select
          {...register("budgetPreset", { required: "Please select a budget range" })}
          className={inputClass}
        >
          <option value="">Select a range…</option>
          {budgetOptions.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
        {errors.budgetPreset && (
          <p className={errorClass}>{errors.budgetPreset.message}</p>
        )}

        <AnimatePresence>
          {showCustomBudget && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <input
                {...register("budgetCustom")}
                placeholder="My budget is approximately…"
                className={`${inputClass} mt-3`}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* How heard */}
      <div>
        <label className={labelClass}>How did you hear about me? *</label>
        <select
          {...register("howHeard", { required: "Please select an option" })}
          className={inputClass}
        >
          <option value="">Select…</option>
          {howHeardOptions.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
        {errors.howHeard && (
          <p className={errorClass}>{errors.howHeard.message}</p>
        )}
      </div>

      {/* Server error */}
      {serverError && (
        <p className="text-red-500 text-sm bg-red-50 border border-red-200 px-4 py-3">
          {serverError}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 bg-[#173A2E] hover:bg-[#0D0F0D] disabled:bg-[#0D0F0D]/40 text-white text-sm px-10 py-4 tracking-widest uppercase font-semibold transition-colors duration-200 flex items-center justify-center gap-3"
      >
        {isSubmitting ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending…
          </>
        ) : (
          "Submit Application"
        )}
      </button>

      <p className="text-[#0D0F0D]/30 text-xs text-center">
        I review every application personally and respond within 48 hours.
      </p>
    </form>
  );
}
