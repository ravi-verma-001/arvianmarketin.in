"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
    {
        title: "Aura Health & Wellness",
        category: "Direct-to-Consumer Growth",
        tags: ["Web Design", "Performance Ads"],
        description: "Direct-to-Consumer Growth & Landing Page System with end-to-end checkout flow optimization and audience campaign architecture.",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Strata Consultancy",
        category: "Corporate Brand Identity",
        tags: ["B2B Web Development", "SEO"],
        description: "Corporate Brand Identity & Responsive Web Experience built to communicate advisory expertise, leadership credibility, and search presence.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Vanguard Realty Group",
        category: "High-Velocity Lead Funnel",
        tags: ["Meta Ads", "Landing Page Architecture"],
        description: "High-Velocity Lead Generation Funnel pairing precise demographic hyper-targeting with instant inquiry qualification landing flows.",
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
                            SELECTED WORK
                        </div>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f131a]">
                            Thoughtful Work. Built With Purpose.
                        </h2>
                    </div>
                    <p className="font-sans text-base text-[#546a92] max-w-md">
                        A selection of recent systems built for ambitious businesses requiring high credibility and direct customer engagement.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white rounded-xl border border-[#E5EAF2] overflow-hidden flex flex-col group hover:shadow-xl hover:border-[#0051d5]/40 transition-all duration-300"
                        >
                            <div className="h-60 w-full overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                            </div>

                            <div className="p-6 flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {project.tags.map((tag, tIdx) => (
                                            <span
                                                key={tIdx}
                                                className="px-2.5 py-1 rounded-md bg-[#eff4ff] text-[#0051d5] text-[11px] font-bold"
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
                                    href="#contact"
                                    className="pt-4 border-t border-[#E5EAF2] flex items-center justify-between text-xs font-bold text-[#001539] hover:text-[#0051d5] transition-colors"
                                >
                                    <span>Discuss Similar Project</span>
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
