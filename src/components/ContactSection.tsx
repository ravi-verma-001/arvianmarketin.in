"use client";

import { useState } from "react";
import { MessageCircle, Mail, Phone, ArrowRight, CheckCircle2, Clock, ShieldCheck, Sparkles, Building2, Wallet, Target } from "lucide-react";

export function ContactSection() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        business: "",
        businessType: "Local Service Business (Clinic, Salon, Repair, etc.)",
        budget: "₹10k–₹25k",
        lookingFor: "WhatsApp Leads",
    });

    const businessTypes = [
        "Local Service Business (Clinic, Salon, etc.)",
        "Real Estate & Interior Design",
        "E-Commerce / D2C Brand",
        "Healthcare / Dental / Wellness",
        "Coaching & Education",
        "Other Business",
    ];

    const budgetOptions = [
        "₹5k–₹10k",
        "₹10k–₹25k",
        "₹25k–₹50k",
        "₹50k+",
    ];

    const lookingForOptions = [
        "More Qualified Leads",
        "Direct WhatsApp Leads",
        "Online Sales",
        "High-Speed Landing Page",
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);

        // Pre-fill WhatsApp message and trigger
        const message = `*🎯 New Growth Plan Request from Website*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*WhatsApp:* ${encodeURIComponent(formData.phone)}%0A*Business Name:* ${encodeURIComponent(formData.business)}%0A*Business Type:* ${encodeURIComponent(formData.businessType)}%0A*Monthly Budget:* ${encodeURIComponent(formData.budget)}%0A*Looking For:* ${encodeURIComponent(formData.lookingFor)}`;

        const waUrl = `https://wa.me/919711190678?text=${message}`;
        window.open(waUrl, "_blank");
    };

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F6F8FC]" id="contact">
            <div className="max-w-[1150px] mx-auto">
                <div className="bg-white rounded-3xl border border-[#E5EAF2] p-6 sm:p-10 lg:p-14 shadow-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
                        {/* Left Context: Proof & Direct Contact */}
                        <div className="lg:col-span-5 flex flex-col justify-between">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbe1ff] text-[#001539] text-xs uppercase tracking-wider mb-4 font-bold">
                                    <Sparkles className="w-3.5 h-3.5 text-[#0051d5]" />
                                    GROWTH QUALIFICATION
                                </div>
                                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f131a] mb-4 leading-tight">
                                    Let&apos;s Grow Your Business With Meta Ads &amp; Fast Funnels.
                                </h2>
                                <p className="font-sans text-sm sm:text-base text-[#546a92] mb-6 leading-relaxed">
                                    Submit your business details and advertising goals. We&apos;ll analyze your target audience, identify the ideal conversion funnel, and deliver your free growth roadmap.
                                </p>

                                <div className="space-y-3.5 mb-8">
                                    <div className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                                            ✓
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-[#001539]">Custom Campaign Blueprint</div>
                                            <div className="text-[11px] text-[#546a92]">Funnel recommendation tailored to your specific service or product.</div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                                            ✓
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-[#001539]">Practical Budget Sizing</div>
                                            <div className="text-[11px] text-[#546a92]">Realistic ad spend calculation based on your local market &amp; target cost-per-lead.</div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                                            ✓
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-[#001539]">No High-Pressure Sales Tactics</div>
                                            <div className="text-[11px] text-[#546a92]">Transparent advice directly from Ravi, an active Meta Ads practitioner.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Direct WhatsApp Callout */}
                            <div className="space-y-3 pt-6 border-t border-[#E5EAF2]">
                                <div className="text-xs font-bold uppercase tracking-wider text-[#747780] mb-2">
                                    Have questions before submitting?
                                </div>

                                <a
                                    href="https://wa.me/919711190678?text=Hi%20Ravi%2C%20I%20have%20a%20few%20questions%20before%20getting%20started%20with%20Meta%20Ads."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3.5 p-4 rounded-xl bg-[#eff4ff] border border-[#dbe1ff] hover:border-[#0051d5] hover:shadow-sm transition-all group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                                        <MessageCircle className="w-5 h-5 fill-white" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-[#001539]">Chat Directly with Ravi on WhatsApp</div>
                                        <div className="text-xs text-[#546a92]">+91 97111 90678 • Instant response</div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Right: Interactive Funnel Form */}
                        <div className="lg:col-span-7 bg-[#F6F8FC] rounded-2xl p-6 sm:p-8 border border-[#E5EAF2]">
                            {submitted ? (
                                <div className="py-12 px-4 text-center">
                                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle2 className="w-8 h-8" />
                                    </div>
                                    <h3 className="font-heading text-2xl font-bold text-[#001539] mb-2">
                                        Growth Blueprint Initiated!
                                    </h3>
                                    <p className="text-sm text-[#546a92] max-w-md mx-auto mb-6">
                                        Thank you, {formData.name || "friend"}. Your business requirements have been prepared. We are connecting with you on WhatsApp right now.
                                    </p>
                                    <a
                                        href="https://wa.me/919711190678"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white text-sm font-bold shadow-md hover:bg-[#20ba59] transition-all"
                                    >
                                        <MessageCircle className="w-4 h-4 fill-white" />
                                        <span>Open WhatsApp Directly</span>
                                    </a>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label className="block text-xs font-bold text-[#001539] uppercase tracking-wider mb-2">
                                            1. Business Type *
                                        </label>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {businessTypes.map((type) => (
                                                <button
                                                    key={type}
                                                    type="button"
                                                    onClick={() => setFormData({ ...formData, businessType: type })}
                                                    className={`p-2.5 rounded-lg text-left text-xs font-semibold border transition-all ${
                                                        formData.businessType === type
                                                            ? "bg-[#001539] text-white border-[#001539] shadow-sm"
                                                            : "bg-white text-[#44474f] border-[#E5EAF2] hover:border-[#0051d5]"
                                                    }`}
                                                >
                                                    {type}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-[#001539] uppercase tracking-wider mb-2">
                                            2. Monthly Ad Budget *
                                        </label>
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                            {budgetOptions.map((budget) => (
                                                <button
                                                    key={budget}
                                                    type="button"
                                                    onClick={() => setFormData({ ...formData, budget })}
                                                    className={`py-2 px-3 rounded-lg text-center text-xs font-bold border transition-all ${
                                                        formData.budget === budget
                                                            ? "bg-[#0051d5] text-white border-[#0051d5] shadow-sm"
                                                            : "bg-white text-[#44474f] border-[#E5EAF2] hover:border-[#0051d5]"
                                                    }`}
                                                >
                                                    {budget}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-[#001539] uppercase tracking-wider mb-2">
                                            3. What are you looking for? *
                                        </label>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {lookingForOptions.map((opt) => (
                                                <button
                                                    key={opt}
                                                    type="button"
                                                    onClick={() => setFormData({ ...formData, lookingFor: opt })}
                                                    className={`py-2 px-3 rounded-lg text-left text-xs font-semibold border transition-all ${
                                                        formData.lookingFor === opt
                                                            ? "bg-[#dbe1ff] text-[#001539] border-[#0051d5] font-bold"
                                                            : "bg-white text-[#44474f] border-[#E5EAF2] hover:border-[#0051d5]"
                                                    }`}
                                                >
                                                    {opt}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                                        <div>
                                            <label className="block text-xs font-bold text-[#001539] mb-1">
                                                Your Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="e.g. Rahul Sharma"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5EAF2] bg-white text-sm text-[#0f131a] focus:outline-none focus:border-[#0051d5] transition-colors"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-[#001539] mb-1">
                                                WhatsApp Number *
                                            </label>
                                            <input
                                                type="tel"
                                                required
                                                placeholder="e.g. +91 98765 43210"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5EAF2] bg-white text-sm text-[#0f131a] focus:outline-none focus:border-[#0051d5] transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-[#001539] mb-1">
                                            Business / Brand Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="e.g. Apex Health Clinic / Modern Interiors"
                                            value={formData.business}
                                            onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                                            className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5EAF2] bg-white text-sm text-[#0f131a] focus:outline-none focus:border-[#0051d5] transition-colors"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-4 rounded-xl bg-[#001539] hover:bg-[#002868] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all cursor-pointer group"
                                    >
                                        <span>Get My Free Growth Plan →</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>

                                    <div className="flex items-center justify-center gap-2 text-[11px] text-[#546a92]">
                                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                                        <span>100% Privacy Guaranteed • We send plan directly to your WhatsApp</span>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
