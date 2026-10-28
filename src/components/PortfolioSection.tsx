"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, CheckCircle2, MessageCircle } from "lucide-react";

const projects = [
    {
        title: "Anushka Skincare & Aesthetics",
        category: "Skincare & Clinic Leads",
        tags: ["Meta Ads", "Landing Page", "WhatsApp Funnel"],
        result: "2,767 Leads @ ₹23.52 CPL",
        description: "Delivered 2,767 messaging conversion results at ₹23.52 per lead with budget optimization. Replaced low-converting ad traffic with targeted Instagram reels and a 1-second landing page.",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Devki Interiors & Modular Homes",
        category: "Interior Design & Architecture",
        tags: ["Conversions Campaign", "Audience Scaling", "Meta Ads"],
        result: "149,000+ Reach • 4.2x ROAS",
        description: "149k reach results delivered for active custom audience segments in Delhi NCR starting at ₹200/day budget. Generated consistent high-ticket interior consultation bookings directly on WhatsApp.",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Vanguard Properties Group",
        category: "High-Ticket Real Estate",
        tags: ["Meta Ads Funnel", "WhatsApp CRM", "Lead Qualification"],
        result: "180+ Verified Site Visits Generated",
        description: "Built high-intent lead qualification forms with instant WhatsApp routing, filtering out casual window-shoppers from serious commercial and residential property buyers.",
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
                            RECENT WORK &amp; PROVEN RESULTS
                        </div>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f131a]">
                            Real Campaigns. Measurable Business Growth.
                        </h2>
                    </div>
                    <p className="font-sans text-base text-[#546a92] max-w-md">
                        Every project we deliver is engineered around one metric: making sure our client gets a tangible return on their ad spend and web investment.
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
                                    <h3 className="font-heading text-xl font-bold text-[#0f131a] mb-2 group-hover:text-[#0051d5] transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="font-sans text-sm text-[#546a92] leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="pt-6 mt-6 border-t border-[#E5EAF2] flex items-center justify-between">
                                    <span className="text-xs font-semibold text-[#001539]">
                                        {project.category}
                                    </span>
                                    <a
                                        href="https://wa.me/919711190678?text=Hi%20Ravi%2C%20I%20saw%20your%20case%20studies%20and%20want%20to%20achieve%20similar%20growth%20for%20my%20business."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs font-bold text-[#0051d5] hover:text-[#001539] inline-flex items-center gap-1 transition-colors"
                                    >
                                        <span>Discuss Similar Campaign</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
