"use client";

import { motion } from "framer-motion";
import { GraduationCap, Stethoscope, Sparkles, ShoppingBag, Plane, Building2, CheckCircle2 } from "lucide-react";

const industries = [
    {
        name: "Education & EdTech",
        icon: GraduationCap,
        description: "Student acquisition funnels, course landing pages, and hyper-targeted lead generation for institutes.",
    },
    {
        name: "Healthcare & Clinics",
        icon: Stethoscope,
        description: "High-trust patient appointment booking, local SEO dominance, and HIPAA-compliant digital authority.",
    },
    {
        name: "Makeup & Salons",
        icon: Sparkles,
        description: "Visual Instagram campaign architecture, bridal booking funnels, and local brand engagement.",
    },
    {
        name: "E-commerce & Clothing",
        icon: ShoppingBag,
        description: "High-ROAS Meta Catalog Ads, product landing speed optimization, and retargeting systems.",
    },
    {
        name: "Travel & Hotels",
        icon: Plane,
        description: "Seasonal promotional funnels, itinerary lead generation, and dynamic booking experiences.",
    },
    {
        name: "Real Estate & Housing",
        icon: Building2,
        description: "High-intent buyer qualification forms, luxury property landing pages, and geo-targeted ads.",
    },
];

export function IndustriesSection() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E5EAF2]" id="industries">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbe1ff] text-[#001539] text-xs uppercase tracking-wider mb-4 font-bold">
                        TARGET VERTICALS
                    </div>
                    <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f131a] mb-4">
                        Industries We Lead
                    </h2>
                    <p className="font-sans text-base text-[#546a92]">
                        Deep sector experience across high-growth verticals requiring distinct customer acquisition and positioning models.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((ind, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.06 }}
                            className="p-6 bg-[#f8f9ff] rounded-xl border border-[#E5EAF2] hover:border-[#0051d5] hover:shadow-md transition-all group flex flex-col justify-between"
                        >
                            <div>
                                <div className="w-12 h-12 rounded-lg bg-white border border-[#E5EAF2] flex items-center justify-center text-[#0051d5] group-hover:bg-[#102a56] group-hover:text-white transition-colors mb-4 shadow-sm">
                                    <ind.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-heading text-lg font-bold text-[#001539] mb-2">
                                    {ind.name}
                                </h3>
                                <p className="font-sans text-xs sm:text-sm text-[#546a92] leading-relaxed">
                                    {ind.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
