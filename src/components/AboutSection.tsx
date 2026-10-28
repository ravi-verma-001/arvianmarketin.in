"use client";

import { motion } from "framer-motion";

export function AboutSection() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F6F8FC] border-b border-[#E5EAF2]" id="about-us">
            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left Copy */}
                    <div className="lg:col-span-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbe1ff] text-[#001539] text-xs uppercase tracking-wider mb-4 font-bold">
                            ABOUT US
                        </div>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f131a] mb-6 leading-tight">
                            Digital Growth Starts With Understanding Your Business.
                        </h2>
                        <p className="font-sans text-base sm:text-lg text-[#0f131a] mb-5 leading-relaxed">
                            At Arvian Marketing, we bring together digital marketing and website solutions to help businesses present themselves professionally and connect with their audiences online.
                        </p>
                        <p className="font-sans text-sm sm:text-base text-[#546a92] mb-5 leading-relaxed">
                            We started with a simple observation: many businesses are caught between complex agency retainers loaded with buzzwords and superficial quick-fixes that fail to deliver commercial results.
                        </p>
                        <p className="font-sans text-sm sm:text-base text-[#546a92] mb-8 leading-relaxed">
                            Our philosophy is human-centered and grounded. We believe a well-constructed website paired with strategic, disciplined Meta advertising is the most durable growth engine a modern business can build.
                        </p>

                        <div className="flex items-center gap-8 pt-4 border-t border-[#E5EAF2]">
                            <div>
                                <div className="font-heading text-3xl font-extrabold text-[#001539]">100%</div>
                                <div className="text-xs text-[#546a92] font-semibold mt-0.5">Bespoke Architectural Build</div>
                            </div>
                            <div className="w-px h-10 bg-[#E5EAF2]"></div>
                            <div>
                                <div className="font-heading text-3xl font-extrabold text-[#001539]">Direct</div>
                                <div className="text-xs text-[#546a92] font-semibold mt-0.5">Strategist Access</div>
                            </div>
                            <div className="w-px h-10 bg-[#E5EAF2]"></div>
                            <div>
                                <div className="font-heading text-3xl font-extrabold text-[#001539]">Delhi NCR</div>
                                <div className="text-xs text-[#546a92] font-semibold mt-0.5">Local Agency Roots</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual Image */}
                    <div className="lg:col-span-6">
                        <div className="bg-white p-3 sm:p-4 rounded-2xl border border-[#E5EAF2] shadow-lg">
                            <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                                    alt="Arvian Marketing Team Consultation"
                                    className="w-full h-full object-cover object-center"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#001539]/40 via-transparent to-transparent opacity-60" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
