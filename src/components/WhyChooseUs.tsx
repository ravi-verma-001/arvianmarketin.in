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
                        Why Most Meta Ads &amp; Websites Waste Money — And How We Fix It.
                    </h2>
                    <p className="font-sans text-base text-[#546a92]">
                        Most business owners waste budget on boost buttons and broken funnels. Here is how our approach turns ad spend into profitable client acquisition.
                    </p>
                </div>

                {/* Side-by-side Real Comparison */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {/* The Typical Big Agency Trap */}
                    <div className="p-8 rounded-2xl bg-[#fafafa] border border-red-200/60 flex flex-col justify-between">
                        <div>
                            <div className="inline-flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider mb-4 bg-red-50 px-3 py-1 rounded-md w-fit">
                                ✕ The Common Agency Trap
                            </div>
                            <h3 className="font-heading text-xl font-bold text-[#0f131a] mb-6">
                                Boosting posts, slow pages &amp; unqualified leads
                            </h3>
                            <ul className="space-y-4 text-sm text-[#546a92]">
                                <li className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                    <span><strong>Boosting Random Posts:</strong> Running generic lead forms or boost buttons with zero Meta Pixel or CAPI conversion tracking.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                    <span><strong>Slow, Confusing Websites:</strong> Sending expensive paid traffic to slow websites that take 5+ seconds to load and bounce 80% of visitors.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                    <span><strong>Flooded with Junk Leads:</strong> Getting tire-kickers and fake numbers who never pick up the call or have zero budget.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                    <span><strong>Bloated Retainers &amp; Silence:</strong> Traditional agencies charging ₹30k+ retainers, delegating to interns, and disappearing without daily optimization.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* The Arvian Marketing Experience */}
                    <div className="p-8 rounded-2xl bg-[#f8f9ff] border-2 border-[#0051d5] shadow-md flex flex-col justify-between relative">
                        <div className="absolute top-4 right-4 bg-[#0051d5] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            ✓ Our Approach
                        </div>
                        <div>
                            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0051d5] uppercase tracking-wider mb-4 bg-[#dbe1ff] px-3 py-1 rounded-md w-fit">
                                The Arvian Marketing System
                            </div>
                            <h3 className="font-heading text-xl font-bold text-[#001539] mb-6">
                                Full-funnel tracking, 1-second funnels &amp; pre-qualified buyers
                            </h3>
                            <ul className="space-y-4 text-sm text-[#001539] font-medium">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                    <span><strong>Full-Funnel Campaign Architecture:</strong> Meta Pixel, Conversion API (CAPI), and verified events configured to track real revenue.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                    <span><strong>Lightning-Fast 1-Second Landing Pages:</strong> Direct response conversion funnels or direct WhatsApp routes aligned with ad hooks.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                    <span><strong>Pre-Qualifying Intake Funnels:</strong> Strict ad copy filtering, high-intent audience segmentation, and structured questions to weed out time-wasters.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                    <span><strong>Weekly Optimization &amp; Direct WhatsApp:</strong> Active A/B creative testing, daily budget monitoring, and direct transparent updates from Ravi.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Stats Banner */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#001539] text-white">
                    <div className="text-center p-3 border-r border-white/10 last:border-none">
                        <div className="font-heading text-2xl sm:text-3xl font-extrabold text-[#dbe1ff]">
                            1-Second
                        </div>
                        <div className="text-xs text-[#b0c6fc] mt-1">Average Page Load Speed</div>
                    </div>
                    <div className="text-center p-3 border-r border-white/10 last:border-none">
                        <div className="font-heading text-2xl sm:text-3xl font-extrabold text-emerald-400">
                            48 Hours
                        </div>
                        <div className="text-xs text-[#b0c6fc] mt-1">Campaign Strategy to Launch</div>
                    </div>
                    <div className="text-center p-3 border-r border-white/10 last:border-none">
                        <div className="font-heading text-2xl sm:text-3xl font-extrabold text-[#dbe1ff]">
                            0 Lock-in
                        </div>
                        <div className="text-xs text-[#b0c6fc] mt-1">Contracts or Hidden Fees</div>
                    </div>
                    <div className="text-center p-3">
                        <div className="font-heading text-2xl sm:text-3xl font-extrabold text-amber-400">
                            1-on-1
                        </div>
                        <div className="text-xs text-[#b0c6fc] mt-1">Direct Access with Ravi</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
