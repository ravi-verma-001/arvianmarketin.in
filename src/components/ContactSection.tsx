"use client";

import { useState } from "react";
import { MessageCircle, Mail, Phone, ArrowRight, CheckCircle2, Clock } from "lucide-react";

export function ContactSection() {
    const [selectedService, setSelectedService] = useState("Meta Ads (Paid Growth)");
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        business: "",
        email: "",
        phone: "",
        message: "",
    });

    const services = [
        "Meta Ads (Paid Growth)",
        "Custom Website Design",
        "Conversion Landing Page",
        "Google SEO & Ranking",
        "All-In-One Growth Package",
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F6F8FC]" id="contact">
            <div className="max-w-[1100px] mx-auto">
                <div className="bg-white rounded-3xl border border-[#E5EAF2] p-8 sm:p-12 lg:p-16 shadow-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Left Context */}
                        <div className="lg:col-span-5 flex flex-col justify-between">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbe1ff] text-[#001539] text-xs uppercase tracking-wider mb-4 font-bold">
                                    START A CONVERSATION
                                </div>
                                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f131a] mb-4 leading-tight">
                                    Let's Talk About Growing Your Business.
                                </h2>
                                <p className="font-sans text-sm sm:text-base text-[#546a92] mb-6 leading-relaxed">
                                    Whether you need a high-converting website, profitable Meta ads, or an honest audit of why your current traffic isn't converting — let's have a real conversation.
                                </p>

                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-8">
                                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                                    <span>Average response time: under 15 minutes on WhatsApp</span>
                                </div>
                            </div>

                            {/* Direct Contact Channels */}
                            <div className="space-y-3 pt-6 border-t border-[#E5EAF2]">
                                <div className="text-xs font-bold uppercase tracking-wider text-[#747780] mb-2">
                                    Prefer Instant Communication?
                                </div>

                                <a
                                    href="https://wa.me/918920442422"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3.5 p-4 rounded-xl bg-[#eff4ff] border border-[#dbe1ff] hover:border-[#0051d5] hover:shadow-sm transition-all group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-[#0051d5] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                                        <MessageCircle className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-[#001539]">Chat Directly on WhatsApp</div>
                                        <div className="text-xs text-[#546a92]">+91 89204 42422 • Quick answers</div>
                                    </div>
                                </a>

                                <a
                                    href="mailto:contact@arvianmarketing.com"
                                    className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#f8f9ff] border border-[#E5EAF2] hover:border-[#0051d5] transition-colors group"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-white border border-[#E5EAF2] flex items-center justify-center text-[#0051d5] shrink-0">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-[#001539]">contact@arvianmarketing.com</div>
                                        <div className="text-xs text-[#546a92]">Detailed briefs &amp; proposals</div>
                                    </div>
                                </a>

                                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#f8f9ff] border border-[#E5EAF2]">
                                    <div className="w-9 h-9 rounded-lg bg-white border border-[#E5EAF2] flex items-center justify-center text-[#0051d5] shrink-0">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-[#001539]">+91 89204 42422</div>
                                        <div className="text-xs text-[#546a92]">Noida Sector 62 &amp; Delhi NCR</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Interactive Form */}
                        <div className="lg:col-span-7">
                            {submitted ? (
                                <div className="h-full min-h-[380px] flex flex-col items-center justify-center text-center p-8 bg-[#f8f9ff] rounded-2xl border border-emerald-200">
                                    <CheckCircle2 className="w-16 h-16 text-emerald-600 mb-4" />
                                    <h3 className="font-heading text-2xl font-bold text-[#001539] mb-2">
                                        Thank You! We've Received Your Details.
                                    </h3>
                                    <p className="font-sans text-sm text-[#546a92] max-w-md mb-6 leading-relaxed">
                                        A senior strategist from Arvian Marketing will review your project and message you directly on WhatsApp/email within a few hours.
                                    </p>
                                    <a
                                        href="https://wa.me/918920442422"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#102a56] text-white rounded-xl text-xs font-bold shadow-sm"
                                    >
                                        <MessageCircle className="w-4 h-4 text-emerald-400" />
                                        <span>Ping Us on WhatsApp for Immediate Priority</span>
                                    </a>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-semibold text-[#001539] mb-1.5">
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="e.g. Rahul Sharma"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5EAF2] bg-[#f8f9ff] text-sm text-[#0f131a] placeholder:text-[#c4c6d0] focus:outline-none focus:border-[#0051d5] transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-[#001539] mb-1.5">
                                                Business / Brand Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="e.g. Sharma Jewels"
                                                value={formData.business}
                                                onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                                                className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5EAF2] bg-[#f8f9ff] text-sm text-[#0f131a] placeholder:text-[#c4c6d0] focus:outline-none focus:border-[#0051d5] transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-semibold text-[#001539] mb-1.5">
                                                WhatsApp Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                required
                                                placeholder="+91 89204 42422"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5EAF2] bg-[#f8f9ff] text-sm text-[#0f131a] placeholder:text-[#c4c6d0] focus:outline-none focus:border-[#0051d5] transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-[#001539] mb-1.5">
                                                Email Address (Optional)
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="rahul@company.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5EAF2] bg-[#f8f9ff] text-sm text-[#0f131a] placeholder:text-[#c4c6d0] focus:outline-none focus:border-[#0051d5] transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-[#001539] mb-2">
                                            What do you need help with? *
                                        </label>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                            {services.map((service) => {
                                                const isSelected = selectedService === service;
                                                const isWide = service.includes("All-In-One");
                                                return (
                                                    <button
                                                        type="button"
                                                        key={service}
                                                        onClick={() => setSelectedService(service)}
                                                        className={`p-2.5 text-xs text-center font-medium rounded-xl border transition-all ${
                                                            isWide ? "col-span-2 sm:col-span-2" : ""
                                                        } ${
                                                            isSelected
                                                                ? "bg-[#102a56] text-white border-[#102a56] font-bold shadow-sm"
                                                                : "bg-[#f8f9ff] text-[#0f131a] border-[#E5EAF2] hover:border-[#0051d5]"
                                                        }`}
                                                    >
                                                        {service}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-[#001539] mb-1.5">
                                            Tell us a little about your goals or current challenge
                                        </label>
                                        <textarea
                                            rows={3}
                                            placeholder="What product/service do you sell? Are you currently running ads or starting fresh?"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5EAF2] bg-[#f8f9ff] text-sm text-[#0f131a] placeholder:text-[#c4c6d0] focus:outline-none focus:border-[#0051d5] transition-colors resize-none"
                                        />
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full h-12 bg-[#102a56] hover:bg-[#001539] text-white font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-md hover:translate-y-[-1px]"
                                        >
                                            <span>Send Project Details &rarr;</span>
                                        </button>
                                        <p className="text-center text-[11px] text-[#747780] mt-2.5">
                                            Zero pushy sales calls. Just honest advice and clear pricing options.
                                        </p>
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
