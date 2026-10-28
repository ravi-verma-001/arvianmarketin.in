"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, CheckCircle2, MessageCircle } from "lucide-react";

const projects = [
    {
        title: "Aura Health & Wellness",
        category: "D2C Brand Scale",
        tags: ["Landing Page", "Meta Ads"],
        result: "+310% Online Inquiries in 60 Days",
        description: "Replaced an outdated, slow WordPress store with a lightning-fast custom landing page and targeted Instagram reels ads.",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Strata Advisory & Legal",
        category: "B2B Client Generation",
        tags: ["Website Design", "Local SEO"],
        result: "Top 3 Google Ranking for Noida Queries",
        description: "Engineered an authoritative corporate identity and technical SEO framework that consistently attracts corporate consultation briefs.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Vanguard Properties Group",
        category: "High-Ticket Real Estate",
        tags: ["Meta Ads Funnel", "WhatsApp CRM"],
        result: "180+ Verified Site Visits Generated",
        description: "Built high-intent lead forms with instant WhatsApp qualification, filtering out casual window-shoppers from serious property buyers.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    },
];

export function PortfolioSection() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F6F8FC] border-b border-[#E5EAF2]" id="work">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbe1ff] text-[#001539] text-xs uppercase tracking-wider mb-4 font-bold">
                            RECENT WORK &amp; CASE STUDIES
                        </div>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f131a]">
                            Real Campaigns. Measurable Business Growth.
                        </h2>
                    </div>
                    <p className="font-sans text-base text-[#546a92] max-w-md">
                        Every project we deliver is engineered around one metric: making sure our client gets a tangible return on their investment.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.08 }}
                            className="bg-white rounded-2xl border border-[#E5EAF2] overflow-hidden flex flex-col group hover:shadow-xl hover:border-[#0051d5]/40 transition-all duration-300"
                        >
                            <div className="h-56 w-full overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-bold text-[#001539] shadow-sm flex items-center gap-1.5">
                                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                                    <span>{project.result}</span>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {project.tags.map((tag, tIdx) => (
                                            <span
                                                key={tIdx}
                                                className="px-2.5 py-0.5 rounded-md bg-[#eff4ff] text-[#0051d5] text-[11px] font-bold"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="font-heading text-xl font-bold text-[#001539] mb-2 group-hover:text-[#0051d5] transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="font-sans text-xs sm:text-sm text-[#546a92] leading-relaxed mb-6">
                                        {project.description}
                                    </p>
                                </div>

                                <a
                                    href="https://wa.me/918920442422"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="pt-4 border-t border-[#E5EAF2] flex items-center justify-between text-xs font-bold text-[#001539] hover:text-[#0051d5] transition-colors"
                                >
                                    <span>Discuss a similar project for your brand</span>
                                    <ArrowRight className="w-4 h-4 text-[#0051d5] group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
