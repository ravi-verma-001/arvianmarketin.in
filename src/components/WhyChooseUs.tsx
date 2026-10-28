"use client";

import { motion } from "framer-motion";
import { TrendingUp, Smartphone, MessageSquare, MousePointer, GitBranch, CheckCircle2, Award, Clock } from "lucide-react";

const features = [
    {
        icon: TrendingUp,
        title: "Business-Focused Recommendations",
        description: "We align tactics to actual commercial pipeline requirements, not vanity digital metrics.",
    },
    {
        icon: Smartphone,
        title: "Modern Responsive Web Experiences",
        description: "Engineered for clean typography, sub-second mobile responsiveness, and intuitive navigation.",
    },
    {
        icon: MessageSquare,
        title: "Clear Communication",
        description: "Direct interactions, milestone roadmaps, and straightforward status updates without jargon.",
    },
    {
        icon: MousePointer,
        title: "Attention to User Experience",
        description: "Frictionless reading rhythms, intuitive CTA hierarchies, and intentional information architecture.",
    },
    {
        icon: GitBranch,
        title: "Structured Campaign Planning",
        description: "Disciplined audience segmentation, hypothesis-driven creative matrices, and ongoing testing.",
    },
    {
        icon: CheckCircle2,
        title: "Aligned With Goals",
        description: "Solutions engineered strictly to solve customer acquisition and brand positioning objectives.",
    },
];

export function WhyChooseUs() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F6F8FC] border-b border-[#E5EAF2]" id="about">
            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left Manifesto */}
                    <div className="lg:col-span-5">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbe1ff] text-[#001539] text-xs uppercase tracking-wider mb-4 font-bold">
                            WHY ARVIAN MARKETING
                        </div>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f131a] mb-6 leading-tight">
                            Practical Solutions. Thoughtful Execution.
                        </h2>
                        <p className="font-sans text-base sm:text-lg text-[#546a92] mb-8 leading-relaxed">
                            We operate without agency pretension. Our commitments are grounded in direct commercial logic, user-first interface engineering, and reliable digital consistency.
                        </p>

                        <div className="p-6 bg-white border border-[#E5EAF2] rounded-xl shadow-sm space-y-3">
                            <div className="text-xs font-bold text-[#001539] uppercase tracking-wider">
                                Our Working Commitment
                            </div>
                            <p className="text-sm text-[#546a92] leading-relaxed">
                                We never recommend tools, campaigns, or redesigns you don't actually need. Every recommendation must pass the test of clear commercial intent.
                            </p>
                        </div>

                        {/* Quick Trust Badges */}
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <div className="p-4 bg-white border border-[#E5EAF2] rounded-xl flex items-center gap-3">
                                <Award className="w-6 h-6 text-[#0051d5]" />
                                <div>
                                    <div className="text-xs font-bold text-[#0f131a]">Proven Track Record</div>
                                    <div className="text-[11px] text-[#546a92]">100+ Brands Scaled</div>
                                </div>
                            </div>
                            <div className="p-4 bg-white border border-[#E5EAF2] rounded-xl flex items-center gap-3">
                                <Clock className="w-6 h-6 text-[#0051d5]" />
                                <div>
                                    <div className="text-xs font-bold text-[#0f131a]">Dedicated Support</div>
                                    <div className="text-[11px] text-[#546a92]">Direct Strategist Access</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right 6 Feature Cards */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                className="p-6 bg-white rounded-xl border border-[#E5EAF2] hover:border-[#0051d5] hover:shadow-md transition-all group flex flex-col justify-between"
                            >
                                <div>
                                    <feature.icon className="w-6 h-6 text-[#0051d5] mb-4 group-hover:scale-110 transition-transform" />
                                    <h3 className="font-heading text-base font-bold text-[#001539] mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="font-sans text-xs sm:text-sm text-[#546a92] leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
