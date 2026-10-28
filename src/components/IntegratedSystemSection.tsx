"use client";

import { motion } from "framer-motion";
import { Smartphone, Layout, CheckCircle, ArrowRight, MessageCircle, PhoneCall, Zap } from "lucide-react";

export function IntegratedSystemSection() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F6F8FC] border-b border-[#E5EAF2]">
            <div className="max-w-[1200px] mx-auto">
                <div className="bg-[#102a56] text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
                    {/* Subtle warm glow in corner */}
                    <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#0051d5]/25 rounded-full blur-[100px] pointer-events-none" />

                    <div className="max-w-2xl mb-12 relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#316bf3] text-white text-xs uppercase tracking-wider mb-4 font-bold">
                            THE 3-STEP ACQUISITION SYSTEM
                        </div>
                        <h2 className="font-heading text-white text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight mb-4 leading-tight">
                            How Ads &amp; Websites Actually Work Together to Bring You Sales.
                        </h2>
                        <p className="font-sans text-base sm:text-lg text-[#b0c6fc] leading-relaxed">
                            Most businesses waste ad budget by sending paid clicks to a cluttered homepage. Here is the proven 3-step formula we use to convert attention into phone calls and WhatsApp inquiries.
                        </p>
                    </div>

                    {/* 3 Human Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                        {/* Step 1 */}
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 flex flex-col justify-between hover:bg-white/[0.15] transition-all">
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-bold uppercase tracking-wider text-[#dbe1ff]">
                                        Step 01
                                    </span>
                                    <Smartphone className="w-5 h-5 text-emerald-300" />
                                </div>
                                <h3 className="font-heading text-white font-bold text-lg mb-2">
                                    Targeted Ad Hook
                                </h3>
                                <p className="text-sm text-[#b0c6fc] mb-5 leading-relaxed">
                                    Stop boosting posts blindly. We design visual ads that speak directly to local buyers in Delhi NCR looking for your exact solution.
                                </p>
                            </div>
                            <div className="bg-[#001539]/60 p-3 rounded-xl border border-white/10 text-xs text-[#dbe1ff] space-y-1">
                                <div>✓ Hyper-targeted to Delhi NCR buyers</div>
                                <div>✓ Tested hooks that stop the scroll</div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 flex flex-col justify-between hover:bg-white/[0.15] transition-all">
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-bold uppercase tracking-wider text-[#dbe1ff]">
                                        Step 02
                                    </span>
                                    <Layout className="w-5 h-5 text-emerald-300" />
                                </div>
                                <h3 className="font-heading text-white font-bold text-lg mb-2">
                                    Focused Landing Page
                                </h3>
                                <p className="text-sm text-[#b0c6fc] mb-5 leading-relaxed">
                                    When they click, they see a fast page with zero distractions. Just your best offer, customer reviews, and clear answers to their questions.
                                </p>
                            </div>
                            <div className="bg-[#001539]/60 p-3 rounded-xl border border-white/10 text-xs text-[#dbe1ff] space-y-1">
                                <div>✓ Under 1-second mobile load time</div>
                                <div>✓ Exact message match with ad</div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 flex flex-col justify-between hover:bg-white/[0.15] transition-all">
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-bold uppercase tracking-wider text-[#dbe1ff]">
                                        Step 03
                                    </span>
                                    <MessageCircle className="w-5 h-5 text-emerald-300" />
                                </div>
                                <h3 className="font-heading text-white font-bold text-lg mb-2">
                                    Instant WhatsApp / Call
                                </h3>
                                <p className="text-sm text-[#b0c6fc] mb-5 leading-relaxed">
                                    Interested prospects tap a single button to start a WhatsApp conversation or call you directly, ready to discuss pricing and buy.
                                </p>
                            </div>
                            <div className="bg-[#001539]/60 p-3 rounded-xl border border-white/10 text-xs text-[#dbe1ff] space-y-1">
                                <div>✓ High-intent, verified inquiries</div>
                                <div>✓ Direct connection to your phone</div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-8 gap-4 relative z-10">
                        <p className="text-sm text-[#b0c6fc] font-medium text-center sm:text-left">
                            Want an honest second opinion on your current website or ads?
                        </p>
                        <a
                            href="https://wa.me/919711190678?text=Hi%20Ravi%2C%20can%20you%20review%20my%20current%20website%20and%20ads%3F"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#001539] font-bold rounded-xl text-sm hover:bg-[#dbe1ff] shadow-md transition-all"
                        >
                            <MessageCircle className="w-4 h-4 text-emerald-600" />
                            <span>Ask for a Free Website Audit on WhatsApp</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
