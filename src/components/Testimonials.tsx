"use client";

import { motion } from "framer-motion";
import { CheckSquare, MessageSquareOff, Palette, Target, Star, Quote } from "lucide-react";

const partnershipStandards = [
    {
        icon: CheckSquare,
        title: "Clear Scope & Transparent Estimates",
        description: "No hidden fees or surprise billable hours. We lay out concrete scopes, milestones, and exact deliverables upfront.",
    },
    {
        icon: MessageSquareOff,
        title: "Direct Communication With Zero Jargon",
        description: "We talk like business partners. You'll receive straightforward answers, clear rationales, and honest performance contexts.",
    },
    {
        icon: Palette,
        title: "Design Decisions Tailored to Your Market",
        description: "Every font choice, layout structure, and CTA is selected to resonate with your real buyers, not to impress design awards.",
    },
    {
        icon: Target,
        title: "Practical Outcomes & Commercial Focus",
        description: "We measure our contribution through increased inquiries, lower acquisition friction, and professional brand authority.",
    },
];

const testimonials = [
    {
        name: "Dev Aggarwal",
        role: "CEO",
        content: "Arvian Marketing completely transformed our social media presence. We went from 500 to 50k followers in just 3 months!",
        rating: 5,
    },
    {
        name: "Sameer Ansari",
        role: "CEO - ISGO",
        content: "The ROI on our paid campaigns has never been higher. Their data-driven approach is a game changer.",
        rating: 5,
    },
    {
        name: "Aman Parjapati",
        role: "Founder, SKY GOLD JEWELLERS",
        content: "Professional, creative, and results-oriented. The content they produce is top-tier and truly engages our audience.",
        rating: 5,
    },
    {
        name: "Ajay Yadav",
        role: "Brand Manager, YADAV PROPERTIES",
        content: "Their strategies are innovative and effective. Our engagement rates have doubled since we started working with them.",
        rating: 5,
    },
    {
        name: "Deepak Gupta",
        role: "Owner, SHREERAM TRAVELL",
        content: "We've seen a significant increase in website traffic and sales directly attributing to their digital marketing campaigns.",
        rating: 5,
    },
];

export function Testimonials() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E5EAF2]" id="testimonials">
            <div className="max-w-[1200px] mx-auto">
                {/* Part 1: Partnership Standards */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbe1ff] text-[#001539] text-xs uppercase tracking-wider mb-4 font-bold">
                        PARTNERSHIP STANDARD
                    </div>
                    <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f131a] mb-4">
                        What You Can Expect From Working With Us.
                    </h2>
                    <p className="font-sans text-base text-[#546a92]">
                        We treat digital marketing and web execution as core business infrastructure, governed by reliable operational ethics.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {partnershipStandards.map((item, idx) => (
                        <div
                            key={idx}
                            className="p-6 rounded-xl bg-[#f8f9ff] border border-[#E5EAF2] hover:border-[#0051d5] hover:shadow-md transition-all flex flex-col justify-between"
                        >
                            <div>
                                <div className="w-12 h-12 rounded-lg bg-white border border-[#E5EAF2] flex items-center justify-center text-[#0051d5] mb-4 shadow-sm">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-heading text-base font-bold text-[#001539] mb-2">
                                    {item.title}
                                </h3>
                                <p className="font-sans text-xs sm:text-sm text-[#546a92] leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Part 2: Client Reviews Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eff4ff] text-[#0051d5] text-xs uppercase tracking-wider mb-3 font-bold">
                        CLIENT VOICES
                    </div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0f131a]">
                        Proven Results for Real Businesses
                    </h3>
                </div>

                {/* Client Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.slice(0, 3).map((item, idx) => (
                        <div
                            key={idx}
                            className="p-7 rounded-xl bg-[#f8f9ff] border border-[#E5EAF2] flex flex-col justify-between hover:shadow-md transition-all"
                        >
                            <div>
                                <div className="flex items-center gap-1 mb-4 text-amber-500">
                                    {[...Array(item.rating)].map((_, rIdx) => (
                                        <Star key={rIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                                <p className="font-sans text-sm text-[#0f131a] italic leading-relaxed mb-6">
                                    "{item.content}"
                                </p>
                            </div>
                            <div className="pt-4 border-t border-[#E5EAF2]">
                                <div className="font-heading font-bold text-sm text-[#001539]">
                                    {item.name}
                                </div>
                                <div className="text-xs text-[#546a92]">
                                    {item.role}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
