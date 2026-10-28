"use client";

import { motion } from "framer-motion";
import { Check, MessageCircle, Zap, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";

const plans = [
    {
        name: "Meta Ads Management",
        subtitle: "Primary Service",
        price: "₹1,999",
        period: "/month",
        badge: "PAID GROWTH",
        description: "End-to-end Meta Ads campaigns actively managed and scaled on Instagram & Facebook to bring paying clients.",
        features: [
            "High-intent audience research & targeting setup",
            "Conversion ad copy, creative direction & A/B testing",
            "WhatsApp lead campaigns & instant lead forms",
            "Daily performance monitoring & budget tuning",
            "Meta Pixel & CAPI conversion verification",
            "Weekly transparent reporting directly on WhatsApp",
            "Works with starting budgets from ₹300–₹500/day",
        ],
        ctaText: "Start Meta Ads Campaign",
        popular: false,
        whatsappMsg: "Hi Ravi, I want to get started with the Meta Ads Management package (₹1,999/month).",
    },
    {
        name: "Landing Page + Meta Ads",
        subtitle: "Growth Funnel Bundle",
        price: "₹2,999",
        period: "setup + 1st mo.",
        badge: "MOST POPULAR • COMPLETE LOOP",
        description: "The complete conversion loop: We build your dedicated 1-second landing page and run targeted Meta Ads driving traffic to it.",
        features: [
            "Custom High-Converting Landing Page (1-second speed)",
            "Full Meta Ads Setup & Monthly Campaign Management",
            "End-to-end conversion tracking (Pixel + GA4 + CAPI)",
            "Harmonized ad copy and landing page value proposition",
            "A/B tested headlines and conversion elements",
            "Frictionless lead qualification form & WhatsApp buttons",
            "Priority 1-on-1 strategy communication with Ravi",
            "48-hour delivery with unlimited revisions",
        ],
        ctaText: "Claim Complete Funnel",
        popular: true,
        whatsappMsg: "Hi Ravi, I want to get the Complete Growth Package (Landing Page + Meta Ads for ₹2,999).",
    },
    {
        name: "Landing Page Design",
        subtitle: "Standalone Conversion Page",
        price: "₹1,999",
        period: "one-time",
        badge: "HIGH-SPEED ASSET",
        description: "For businesses already running ads who need a lightning-fast, mobile-first conversion page to turn traffic into clients.",
        features: [
            "Built for 1-second load times on mobile devices",
            "Direct WhatsApp lead buttons & intake form integration",
            "48-hour delivery with unlimited revisions",
            "Meta Pixel & Google Analytics tracking integrated",
            "Clean, persuasive copywriting focused on conversions",
            "Mobile-responsive, modern Next.js craft",
            "No monthly maintenance or hidden hosting lock-in",
        ],
        ctaText: "Get Landing Page Funnel",
        popular: false,
        whatsappMsg: "Hi Ravi, I need a high-converting landing page (₹1,999 one-time) for my business.",
    },
];

export function PricingSection() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E5EAF2]" id="pricing">
            <div className="max-w-[1200px] mx-auto">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbe1ff] text-[#001539] text-xs uppercase tracking-wider mb-4 font-bold">
                        <Sparkles className="w-3.5 h-3.5 text-[#0051d5]" />
                        CLEAR PRICING • NO HIDDEN FEES
                    </div>
                    <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f131a] mb-4">
                        Select The Partnership That Fits Your Goals.
                    </h2>
                    <p className="font-sans text-base text-[#546a92]">
                        Transparent pricing, dedicated execution, and direct communication without bloated agency retainers or long lock-ins.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {plans.map((plan, idx) => {
                        const whatsappUrl = `https://wa.me/919711190678?text=${encodeURIComponent(plan.whatsappMsg)}`;

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                                    plan.popular
                                        ? "bg-[#001539] text-white ring-2 ring-[#0051d5] shadow-2xl scale-[1.02] lg:-translate-y-2"
                                        : "bg-[#F6F8FC] text-[#0f131a] border border-[#E5EAF2] hover:border-[#0051d5]/50 hover:shadow-lg"
                                }`}
                            >
                                {/* Top Badge */}
                                {plan.popular && (
                                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0051d5] to-[#2563eb] text-white text-[11px] font-black uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
                                        ⭐ RECOMMENDED CHOICE
                                    </div>
                                )}

                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span
                                            className={`text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                                                plan.popular
                                                    ? "bg-white/10 text-[#dbe1ff]"
                                                    : "bg-[#dbe1ff] text-[#001539]"
                                            }`}
                                        >
                                            {plan.badge}
                                        </span>
                                        <span
                                            className={`text-xs font-semibold ${
                                                plan.popular ? "text-[#b0c6fc]" : "text-[#546a92]"
                                            }`}
                                        >
                                            {plan.subtitle}
                                        </span>
                                    </div>

                                    <h3
                                        className={`font-heading text-2xl font-bold mb-2 ${
                                            plan.popular ? "text-white" : "text-[#0f131a]"
                                        }`}
                                    >
                                        {plan.name}
                                    </h3>

                                    <p
                                        className={`text-xs leading-relaxed mb-6 ${
                                            plan.popular ? "text-[#b0c6fc]" : "text-[#546a92]"
                                        }`}
                                    >
                                        {plan.description}
                                    </p>

                                    {/* Pricing block */}
                                    <div className="flex items-baseline gap-2 pb-6 mb-6 border-b border-current/10">
                                        <span className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight">
                                            {plan.price}
                                        </span>
                                        <span
                                            className={`text-xs font-semibold ${
                                                plan.popular ? "text-[#b0c6fc]" : "text-[#546a92]"
                                            }`}
                                        >
                                            {plan.period}
                                        </span>
                                    </div>

                                    {/* Feature checklist */}
                                    <div className="space-y-3 mb-8">
                                        <div
                                            className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                                                plan.popular ? "text-[#dbe1ff]" : "text-[#001539]"
                                            }`}
                                        >
                                            What&apos;s Included:
                                        </div>
                                        {plan.features.map((feat, fIdx) => (
                                            <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                                                <div
                                                    className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                                                        plan.popular
                                                            ? "bg-emerald-500/20 text-emerald-400"
                                                            : "bg-emerald-100 text-emerald-700"
                                                    }`}
                                                >
                                                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                                                </div>
                                                <span
                                                    className={
                                                        plan.popular ? "text-[#f0f4ff]" : "text-[#44474f]"
                                                    }
                                                >
                                                    {feat}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <div>
                                    <a
                                        href={whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-full py-3.5 px-5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all duration-200 group ${
                                            plan.popular
                                                ? "bg-[#25D366] hover:bg-[#20ba59] text-white hover:shadow-lg"
                                                : "bg-[#0051d5] hover:bg-[#003ea8] text-white"
                                        }`}
                                    >
                                        <MessageCircle className="w-4 h-4" />
                                        <span>{plan.ctaText}</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                    <div
                                        className={`text-center text-[11px] mt-2.5 font-medium ${
                                            plan.popular ? "text-[#b0c6fc]" : "text-[#747780]"
                                        }`}
                                    >
                                        Direct WhatsApp onboard • Fast 48h launch
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom Assurance Note */}
                <div className="mt-12 text-center">
                    <p className="text-xs text-[#546a92]">
                        Have unique ad spend requirements or need multi-brand management?{" "}
                        <a
                            href="https://wa.me/919711190678?text=Hi%20Ravi%2C%20I%20have%20custom%20marketing%20requirements%20for%20my%20business."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-[#0051d5] underline hover:text-[#001539]"
                        >
                            Chat directly with Ravi on WhatsApp
                        </a>{" "}
                        for a tailored quote.
                    </p>
                </div>
            </div>
        </section>
    );
}
