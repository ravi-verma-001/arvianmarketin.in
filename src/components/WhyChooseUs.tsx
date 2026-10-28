"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, MessageCircle, Clock, ShieldCheck, HeartHandshake, Zap, Trophy } from "lucide-react";

export function WhyChooseUs() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E5EAF2]" id="why-us">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbe1ff] text-[#001539] text-xs uppercase tracking-wider mb-4 font-bold">
                        AN HONEST COMPARISON
                    </div>
                    <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f131a] mb-4">
                        Why Clients Choose Us Over Bloated Agencies.
                    </h2>
                    <p className="font-sans text-base text-[#546a92]">
                        Most agencies sell you an expensive dream, hand off your project to an intern, and send reports full of confusing metrics. We work completely differently.
                    </p>
                </div>

                {/* Side-by-side Real Comparison */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {/* The Typical Big Agency Trap */}
                    <div className="p-8 rounded-2xl bg-[#fafafa] border border-red-200/60 flex flex-col justify-between">
                        <div>
                            <div className="inline-flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider mb-4 bg-red-50 px-3 py-1 rounded-md w-fit">
                                The Typical Bloated Agency
                            </div>
                            <h3 className="font-heading text-xl font-bold text-[#0f131a] mb-6">
                                Frustrating delays, junior staff, &amp; vanity reports
                            </h3>
                            <ul className="space-y-4 text-sm text-[#546a92]">
                                <li className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                    <span>Senior team pitches you, but interns with 3 months experience manage your ad spend.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                    <span>Takes 2 weeks to change a single headline or update an ad creative.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                    <span>Celebrates "50,000 Impressions" even when your phone didn't ring once.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                    <span>Demands 6-month contracts with hidden setup fees and rigid scopes.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* The Arvian Marketing Experience */}
                    <div className="p-8 rounded-2xl bg-[#f8f9ff] border-2 border-[#0051d5] shadow-md flex flex-col justify-between relative">
                        <div className="absolute top-4 right-4 bg-[#0051d5] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            Our Standard
                        </div>
                        <div>
                            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0051d5] uppercase tracking-wider mb-4 bg-[#dbe1ff] px-3 py-1 rounded-md w-fit">
                                Working With Arvian Marketing
                            </div>
                            <h3 className="font-heading text-xl font-bold text-[#001539] mb-6">
                                Direct communication, fast execution, &amp; real customer sales
                            </h3>
                            <ul className="space-y-4 text-sm text-[#001539] font-medium">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                    <span>Direct WhatsApp group with the specialists actually building your site and running your ads.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                    <span>Fast 48-hour turnarounds on ad creative variations and landing page improvements.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                    <span>Clear weekly reports: exactly how much was spent, how many calls/leads came in, and customer cost.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                    <span>No forced lock-in contracts. You stay because your business is making money, not because of paperwork.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Founder Working Promise Note */}
                <div className="bg-[#eff4ff] border border-[#dbe1ff] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white border border-[#E5EAF2] flex items-center justify-center text-[#0051d5] font-black text-xl shrink-0 shadow-sm">
                            🤝
                        </div>
                        <div>
                            <h4 className="font-heading font-bold text-base text-[#001539]">
                                Our "No-Fluff" Working Promise
                            </h4>
                            <p className="font-sans text-xs sm:text-sm text-[#546a92]">
                                We will never recommend a service or website redesign you don't actually need. If a ₹15,000 fix will solve your bottleneck, that's all we'll propose.
                            </p>
                        </div>
                    </div>

                    <a
                        href="https://wa.me/918920442422"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#102a56] hover:bg-[#001539] text-white rounded-xl text-xs sm:text-sm font-bold shrink-0 transition-all shadow-sm"
                    >
                        <MessageCircle className="w-4 h-4 text-emerald-400" />
                        <span>Chat Directly on WhatsApp</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
