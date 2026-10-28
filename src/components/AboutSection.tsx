"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, MapPin, HeartHandshake, ShieldCheck } from "lucide-react";

export function AboutSection() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F6F8FC] border-b border-[#E5EAF2]" id="about-us">
            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left: Real Human Story & Values */}
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbe1ff] text-[#001539] text-xs uppercase tracking-wider mb-4 font-bold">
                            WHO WE ARE &amp; WHY WE STARTED
                        </div>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f131a] mb-6 leading-tight">
                            Built in Noida to Help Honest Businesses Win Online.
                        </h2>
                        <div className="font-sans text-sm sm:text-base text-[#546a92] leading-relaxed space-y-4 mb-8">
                            <p className="text-[#0f131a] font-medium text-base sm:text-lg">
                                We started Arvian Marketing after watching dozens of founders in Delhi NCR get burned by traditional marketing agencies.
                            </p>
                            <p>
                                The story was always the same: expensive contracts, smooth-talking sales pitches, and then weeks of radio silence followed by PDF reports praising "impressions and reach" while the business didn't get a single customer.
                            </p>
                            <p>
                                We decided to build a different kind of partner. One where you speak directly with the people doing the work. One that treats your advertising budget with the same respect as if it were our own money. And one that measures victory by one simple number: <strong>how much revenue your website and ads bring through your door.</strong>
                            </p>
                        </div>

                        {/* Tangible Human Pillars */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E5EAF2] mb-8">
                            <div className="p-4 bg-white rounded-xl border border-[#E5EAF2]">
                                <div className="font-heading text-2xl font-black text-[#001539]">1-on-1</div>
                                <div className="text-xs font-bold text-[#0f131a] mt-1">Direct Access</div>
                                <div className="text-[11px] text-[#546a92] mt-0.5">Chat directly with the strategist</div>
                            </div>
                            <div className="p-4 bg-white rounded-xl border border-[#E5EAF2]">
                                <div className="font-heading text-2xl font-black text-emerald-600">7–10 Days</div>
                                <div className="text-xs font-bold text-[#0f131a] mt-1">Average Turnaround</div>
                                <div className="text-[11px] text-[#546a92] mt-0.5">Quick launch without cutting corners</div>
                            </div>
                            <div className="p-4 bg-white rounded-xl border border-[#E5EAF2]">
                                <div className="font-heading text-2xl font-black text-[#0051d5]">Noida Hub</div>
                                <div className="text-xs font-bold text-[#0f131a] mt-1">Delhi NCR Roots</div>
                                <div className="text-[11px] text-[#546a92] mt-0.5">In-person &amp; remote consultations</div>
                            </div>
                        </div>

                        <a
                            href="https://wa.me/918920442422"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#102a56] hover:bg-[#001539] text-white font-bold text-sm rounded-xl transition-all shadow-md"
                        >
                            <MessageCircle className="w-4 h-4 text-emerald-400" />
                            <span>Say Hello on WhatsApp &amp; Discuss Your Vision</span>
                        </a>
                    </div>

                    {/* Right: Studio / Strategy Image Frame */}
                    <div className="lg:col-span-5">
                        <div className="bg-white p-4 rounded-3xl border border-[#E5EAF2] shadow-xl relative">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                                    alt="Arvian Marketing Team Collaboration"
                                    className="w-full h-full object-cover object-center"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#001539]/60 via-transparent to-transparent opacity-70" />
                                
                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                    <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider mb-1">
                                        The Arvian Promise
                                    </div>
                                    <div className="font-heading font-extrabold text-sm sm:text-base leading-snug">
                                        "No vanity metrics. Just honest craft and real client growth."
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
