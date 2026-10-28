"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, CheckCircle2, Zap, ShieldCheck, HeartHandshake, MapPin, TrendingUp, Users, Target } from "lucide-react";

export function Hero() {
    return (
        <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-[#F6F8FC] border-b border-[#E5EAF2] relative overflow-hidden">
            {/* Soft Ambient Warmth & Mesh */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-gradient-to-b from-[#dbe1ff]/60 via-[#eff4ff]/40 to-transparent blur-3xl pointer-events-none -z-10" />

            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Top Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-14">
                    {/* Left: Punchy, Honest, Human Headline & Copy */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-7 flex flex-col justify-center"
                    >
                        {/* Friendly Location Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5EAF2] text-[#001539] text-xs font-semibold shadow-sm mb-6 w-fit">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[#546a92]">Based in Noida</span>
                            <span className="text-[#c4c6d0]">•</span>
                            <span className="font-bold text-[#001539]">Direct Lead Generation for Delhi NCR &amp; Beyond</span>
                        </div>

                        <h1 className="font-heading text-4xl sm:text-5xl lg:text-[54px] font-black leading-[1.12] tracking-tight text-[#0f131a] mb-6">
                            We build modern websites &amp; run Meta ads that <span className="text-[#0051d5] underline decoration-[#dbe1ff] decoration-wavy decoration-2">actually bring customers</span>.
                        </h1>

                        <p className="font-sans text-base sm:text-lg text-[#546a92] leading-relaxed mb-8 max-w-xl">
                            No agency fluff or confusing tech jargon. We build lightning-fast 1-second landing pages and manage targeted Meta ad campaigns designed to turn clicks into calls, WhatsApp inquiries, and paying clients.
                        </p>

                        {/* Direct Human Actions */}
                        <div className="flex flex-wrap gap-4 items-center mb-8">
                            <a
                                href="https://wa.me/919711190678?text=Hi%20Ravi%2C%20I%20saw%20your%20website%20and%20want%20to%20get%20more%20qualified%20leads%20for%20my%20business."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-base font-bold shadow-md hover:shadow-lg transition-all hover:translate-y-[-1px]"
                            >
                                <MessageCircle className="w-5 h-5 fill-white" />
                                <span>Message Ravi on WhatsApp</span>
                            </a>

                            <a
                                href="#pricing"
                                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white hover:bg-[#eff4ff] border border-[#E5EAF2] text-[#0f131a] text-base font-bold transition-all shadow-sm"
                            >
                                View Plans (From ₹1,999) &rarr;
                            </a>
                        </div>

                        {/* Quick Trust Badges */}
                        <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#E5EAF2] text-xs font-medium text-[#546a92]">
                            <div className="flex items-center gap-1.5">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                <span>Direct 1-on-1 access with Ravi</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                <span>Fast 48-hour delivery</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                <span>No lock-in retainers</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Studio Video Frame with Real Human Touch Details */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden border border-[#d2d9e5] bg-white shadow-xl aspect-video md:aspect-[4/3] group">
                            {/* Video */}
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover object-center"
                            >
                                <source src="/hero-video.mp4" type="video/mp4" />
                            </video>

                            {/* Human Touch Card Overlay */}
                            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 border border-[#E5EAF2] shadow-lg flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-bold text-sm">
                                        4.9★
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-[#0f131a]">Verified Client Rating</div>
                                        <div className="text-[11px] text-[#546a92]">Consistent ROI &amp; weekly WhatsApp updates</div>
                                    </div>
                                </div>
                                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/70 px-2.5 py-1 rounded-full">
                                    Active Support
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Real Verified Numbers (From arvianmarketing.shop) */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-white border border-[#E5EAF2] shadow-sm mb-12">
                    <div className="border-r border-[#E5EAF2] last:border-none pr-4">
                        <div className="font-heading text-2xl sm:text-3xl font-black text-[#001539]">
                            2,767+
                        </div>
                        <div className="text-xs font-semibold text-[#546a92] mt-0.5">
                            Leads Generated for Clients
                        </div>
                    </div>
                    <div className="border-r border-[#E5EAF2] last:border-none pr-4">
                        <div className="font-heading text-2xl sm:text-3xl font-black text-emerald-600">
                            ₹23.52
                        </div>
                        <div className="text-xs font-semibold text-[#546a92] mt-0.5">
                            Avg. Cost Per Lead (CPL)
                        </div>
                    </div>
                    <div className="border-r border-[#E5EAF2] last:border-none pr-4">
                        <div className="font-heading text-2xl sm:text-3xl font-black text-[#0051d5]">
                            149k+
                        </div>
                        <div className="text-xs font-semibold text-[#546a92] mt-0.5">
                            Meta Audience Reach
                        </div>
                    </div>
                    <div>
                        <div className="font-heading text-2xl sm:text-3xl font-black text-[#001539]">
                            4.2x
                        </div>
                        <div className="text-xs font-semibold text-[#546a92] mt-0.5">
                            Client ROAS Recorded
                        </div>
                    </div>
                </div>

                {/* 4 Down-to-Earth Principles */}
                <div className="pt-6 border-t border-[#E5EAF2]">
                    <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#0051d5]">
                                OUR WORKING PHILOSOPHY
                            </span>
                            <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#0f131a] mt-1">
                                How We Do Things Differently
                            </h2>
                        </div>
                        <p className="text-xs sm:text-sm text-[#546a92]">
                            Honest digital craft tailored to commercial reality, not agency vanity.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="p-5 rounded-xl bg-white border border-[#E5EAF2] hover:border-[#0051d5] hover:shadow-sm transition-all">
                            <div className="w-8 h-8 rounded-lg bg-[#eff4ff] text-[#0051d5] flex items-center justify-center font-black text-sm mb-3">
                                01
                            </div>
                            <h3 className="font-heading font-bold text-sm text-[#001539] mb-1.5">
                                Listen Before Recommending
                            </h3>
                            <p className="font-sans text-xs text-[#546a92] leading-relaxed">
                                We study your current offer, target buyers, and margins before writing a single ad or design mock.
                            </p>
                        </div>

                        <div className="p-5 rounded-xl bg-white border border-[#E5EAF2] hover:border-[#0051d5] hover:shadow-sm transition-all">
                            <div className="w-8 h-8 rounded-lg bg-[#eff4ff] text-[#0051d5] flex items-center justify-center font-black text-sm mb-3">
                                02
                            </div>
                            <h3 className="font-heading font-bold text-sm text-[#001539] mb-1.5">
                                Clean, Human Design
                            </h3>
                            <p className="font-sans text-xs text-[#546a92] leading-relaxed">
                                Intuitive layouts that real people enjoy using on their phones, with easy WhatsApp &amp; call buttons.
                            </p>
                        </div>

                        <div className="p-5 rounded-xl bg-white border border-[#E5EAF2] hover:border-[#0051d5] hover:shadow-sm transition-all">
                            <div className="w-8 h-8 rounded-lg bg-[#eff4ff] text-[#0051d5] flex items-center justify-center font-black text-sm mb-3">
                                03
                            </div>
                            <h3 className="font-heading font-bold text-sm text-[#001539] mb-1.5">
                                Performance Over Vanity
                            </h3>
                            <p className="font-sans text-xs text-[#546a92] leading-relaxed">
                                Likes and impressions don&apos;t pay bills. We track cost per lead, verified inquiries, and actual customer sales.
                            </p>
                        </div>

                        <div className="p-5 rounded-xl bg-white border border-[#E5EAF2] hover:border-[#0051d5] hover:shadow-sm transition-all">
                            <div className="w-8 h-8 rounded-lg bg-[#eff4ff] text-[#0051d5] flex items-center justify-center font-black text-sm mb-3">
                                04
                            </div>
                            <h3 className="font-heading font-bold text-sm text-[#001539] mb-1.5">
                                Real Person on WhatsApp
                            </h3>
                            <p className="font-sans text-xs text-[#546a92] leading-relaxed">
                                No ticket queues or automated bots. You get direct access to Ravi for all campaign updates.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
