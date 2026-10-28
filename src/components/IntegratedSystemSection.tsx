"use client";

import { motion } from "framer-motion";
import { Smartphone, Layout, CheckCircle, ArrowRight } from "lucide-react";

export function IntegratedSystemSection() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F6F8FC] border-b border-[#E5EAF2]">
            <div className="max-w-[1200px] mx-auto">
                <div className="bg-[#102a56] text-white rounded-2xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl">
                    {/* Background Subtle Gradient Mesh */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0051d5]/20 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#316bf3]/15 rounded-full blur-[100px] pointer-events-none" />

                    <div className="max-w-2xl mb-12 relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#316bf3] text-white text-xs uppercase tracking-wider mb-4 font-bold">
                            THE INTEGRATED SYSTEM
                        </div>
                        <h2 className="font-heading text-white text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight mb-4 leading-tight">
                            Better Campaigns Start With the Right Digital Experience.
                        </h2>
                        <p className="font-sans text-base sm:text-lg text-[#b0c6fc] leading-relaxed">
                            Advertising attracts attention. A clear, relevant landing page helps visitors understand your offer and take the next step.
                        </p>
                    </div>

                    {/* The Conversion Bridge Architecture */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                        {/* Step 1: Creative */}
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/15 flex flex-col justify-between hover:bg-white/[0.14] transition-all">
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs uppercase font-bold tracking-wider text-[#dbe1ff]">
                                        Step 01
                                    </span>
                                    <Smartphone className="w-5 h-5 text-[#dbe1ff]" />
                                </div>
                                <h3 className="font-heading text-white font-bold text-lg mb-2">
                                    Meta Ad Creative
                                </h3>
                                <p className="text-sm text-[#b0c6fc] mb-5 leading-relaxed">
                                    Engages qualified prospects with clear messaging, focused framing, and direct problem solving.
                                </p>
                            </div>
                            <div className="bg-[#001539]/60 p-3 rounded-lg border border-white/10 text-xs text-[#dbe1ff] space-y-1">
                                <div>• High relevance score</div>
                                <div>• Clear intent targeting</div>
                            </div>
                        </div>

                        {/* Step 2: Destination */}
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/15 flex flex-col justify-between hover:bg-white/[0.14] transition-all">
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs uppercase font-bold tracking-wider text-[#dbe1ff]">
                                        Step 02
                                    </span>
                                    <Layout className="w-5 h-5 text-[#dbe1ff]" />
                                </div>
                                <h3 className="font-heading text-white font-bold text-lg mb-2">
                                    Focused Landing Page
                                </h3>
                                <p className="text-sm text-[#b0c6fc] mb-5 leading-relaxed">
                                    Aligns seamlessly with ad context, eliminating friction with speed, clarity, and structural proof.
                                </p>
                            </div>
                            <div className="bg-[#001539]/60 p-3 rounded-lg border border-white/10 text-xs text-[#dbe1ff] space-y-1">
                                <div>• Sub-second load speed</div>
                                <div>• Message-match continuity</div>
                            </div>
                        </div>

                        {/* Step 3: Action */}
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/15 flex flex-col justify-between hover:bg-white/[0.14] transition-all">
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs uppercase font-bold tracking-wider text-[#dbe1ff]">
                                        Step 03
                                    </span>
                                    <CheckCircle className="w-5 h-5 text-[#dbe1ff]" />
                                </div>
                                <h3 className="font-heading text-white font-bold text-lg mb-2">
                                    Qualified Lead Enquiry
                                </h3>
                                <p className="text-sm text-[#b0c6fc] mb-5 leading-relaxed">
                                    Prospective clients submit precise project requirements directly to your pipeline.
                                </p>
                            </div>
                            <div className="bg-[#001539]/60 p-3 rounded-lg border border-white/10 text-xs text-[#dbe1ff] space-y-1">
                                <div>• Pre-qualified buyers</div>
                                <div>• Commercial readiness</div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-8 gap-4 relative z-10">
                        <p className="text-sm text-[#b0c6fc] font-medium text-center sm:text-left">
                            Ready to harmonize your traffic and conversion destinations?
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#001539] font-bold rounded-lg text-sm hover:bg-[#dbe1ff] shadow-sm transition-all"
                        >
                            <span>Audit Your Conversion Path</span>
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
