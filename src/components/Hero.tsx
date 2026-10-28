"use client";

import Link from "next/link";
import { Compass, Palette, TrendingUp, MessageSquare, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-[#F6F8FC] border-b border-[#E5EAF2] relative overflow-hidden">
            {/* Ambient Radial Accent */}
            <div className="absolute top-10 right-1/2 translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#dbe1ff]/50 via-[#eff4ff]/30 to-transparent blur-3xl pointer-events-none -z-10" />

            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Top Grid: Headline + Video/Studio Mockup */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
                    {/* Left: Text & CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 flex flex-col justify-center"
                    >
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dbe1ff] text-[#001539] text-xs font-bold uppercase tracking-wider mb-6 w-fit">
                            <span className="w-2 h-2 rounded-full bg-[#0051d5] animate-pulse" />
                            <span>DELHI NCR &amp; NOIDA'S PREMIER AGENCY</span>
                        </div>

                        <h1 className="font-heading text-4xl sm:text-5xl lg:text-[54px] font-black leading-[1.12] tracking-tight text-[#0f131a] mb-6">
                            Turn Your Digital Presence Into a Growth Opportunity.
                        </h1>

                        <p className="font-sans text-base sm:text-lg text-[#546a92] leading-relaxed mb-8 max-w-xl">
                            We help businesses grow online through strategic Meta Ads, professional websites, conversion-focused landing pages, and SEO solutions.
                        </p>

                        <div className="flex flex-wrap gap-4 items-center">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#102a56] hover:bg-[#001539] text-white text-base font-bold tracking-tight shadow-md transition-all hover:translate-y-[-1px]"
                            >
                                <span>Let's Discuss Your Project</span>
                                <ArrowRight className="w-4 h-4" />
                            </a>

                            <a
                                href="#services"
                                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#e8ecf2] hover:bg-[#dbe1ff] text-[#0f131a] text-base font-bold tracking-tight transition-all"
                            >
                                Explore Our Services
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: Studio Video Frame with Sleek Drop Shadow */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
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

                            {/* Floating Micro Badge */}
                            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 border border-[#E5EAF2] shadow-md flex items-center justify-between">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-8 h-8 rounded-lg bg-[#eff4ff] flex items-center justify-center text-[#0051d5]">
                                        <Sparkles className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-[#0f131a]">Conversion-Driven Craft</div>
                                        <div className="text-[11px] text-[#546a92]">Engineered for high-intent client acquisition</div>
                                    </div>
                                </div>
                                <span className="text-[10px] font-bold text-[#0051d5] bg-[#dbe1ff] px-2 py-0.5 rounded-full">
                                    LIVE
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Sub-bar Tagline */}
                <div className="pt-4 pb-4 border-t border-[#E5EAF2] flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <p className="text-xs font-bold tracking-wider uppercase text-[#546a92]">
                        DIGITAL GROWTH • PERFORMANCE MARKETING • WEB EXPERIENCES
                    </p>
                    <p className="text-xs text-[#546a92] font-medium">
                        Trusted by high-growth founders &amp; SMBs across Delhi NCR
                    </p>
                </div>

                {/* Section Introduction */}
                <div className="mt-8 mb-8">
                    <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0f131a] mb-2 tracking-tight">
                        Built Around Your Business Goals.
                    </h2>
                    <p className="text-sm sm:text-base text-[#546a92] max-w-2xl">
                        We prioritize fundamental digital craft and measurable commercial clarity over gimmicks.
                    </p>
                </div>

                {/* 4 Value Pillars Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* 01. Strategy First */}
                    <div className="flex flex-col justify-between rounded-xl border border-[#d2d9e5] bg-white p-5 hover:border-[#0051d5] hover:shadow-md transition-all group">
                        <div>
                            <div className="w-10 h-10 rounded-lg bg-[#eff4ff] flex items-center justify-center text-[#0f131a] group-hover:bg-[#102a56] group-hover:text-white transition-colors mb-4">
                                <Compass className="w-5 h-5" />
                            </div>
                            <h3 className="font-heading text-base font-bold text-[#0f131a] mb-1.5">
                                01. Strategy First
                            </h3>
                            <p className="text-xs sm:text-sm text-[#546a92] leading-relaxed">
                                Understand the business, positioning, and target market before recommending any solution.
                            </p>
                        </div>
                    </div>

                    {/* 02. Thoughtful Design */}
                    <div className="flex flex-col justify-between rounded-xl border border-[#d2d9e5] bg-white p-5 hover:border-[#0051d5] hover:shadow-md transition-all group">
                        <div>
                            <div className="w-10 h-10 rounded-lg bg-[#eff4ff] flex items-center justify-center text-[#0f131a] group-hover:bg-[#102a56] group-hover:text-white transition-colors mb-4">
                                <Palette className="w-5 h-5" />
                            </div>
                            <h3 className="font-heading text-base font-bold text-[#0f131a] mb-1.5">
                                02. Thoughtful Design
                            </h3>
                            <p className="text-xs sm:text-sm text-[#546a92] leading-relaxed">
                                Create clear, modern, intuitive digital experiences that convert attention into engagement.
                            </p>
                        </div>
                    </div>

                    {/* 03. Performance Mindset */}
                    <div className="flex flex-col justify-between rounded-xl border border-[#d2d9e5] bg-white p-5 hover:border-[#0051d5] hover:shadow-md transition-all group">
                        <div>
                            <div className="w-10 h-10 rounded-lg bg-[#eff4ff] flex items-center justify-center text-[#0f131a] group-hover:bg-[#102a56] group-hover:text-white transition-colors mb-4">
                                <TrendingUp className="w-5 h-5" />
                            </div>
                            <h3 className="font-heading text-base font-bold text-[#0f131a] mb-1.5">
                                03. Performance Mindset
                            </h3>
                            <p className="text-xs sm:text-sm text-[#546a92] leading-relaxed">
                                Make informed marketing decisions grounded in campaign objectives, creative testing, and verifiable data.
                            </p>
                        </div>
                    </div>

                    {/* 04. Clear Communication */}
                    <div className="flex flex-col justify-between rounded-xl border border-[#d2d9e5] bg-white p-5 hover:border-[#0051d5] hover:shadow-md transition-all group">
                        <div>
                            <div className="w-10 h-10 rounded-lg bg-[#eff4ff] flex items-center justify-center text-[#0f131a] group-hover:bg-[#102a56] group-hover:text-white transition-colors mb-4">
                                <MessageSquare className="w-5 h-5" />
                            </div>
                            <h3 className="font-heading text-base font-bold text-[#0f131a] mb-1.5">
                                04. Clear Communication
                            </h3>
                            <p className="text-xs sm:text-sm text-[#546a92] leading-relaxed">
                                Transparent project scopes, straightforward deliverables, milestone timelines, and proactive next steps.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
