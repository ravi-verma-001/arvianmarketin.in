"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Discover",
        description: "Understand the business, target audience, offer, core objectives, and current operational challenges.",
        deliverable: "Deliverable: Scope Clarity",
    },
    {
        number: "02",
        title: "Plan",
        description: "Define the scope, recommended approach, priorities, milestones, and explicit deliverables.",
        deliverable: "Deliverable: Action Blueprint",
    },
    {
        number: "03",
        title: "Create & Launch",
        description: "Design, develop, or deploy the agreed solution with thorough quality assurance, speed audits, and tracking checks.",
        deliverable: "Deliverable: Live Deployment",
    },
    {
        number: "04",
        title: "Review & Improve",
        description: "Review real feedback and available performance data to identify pragmatic refinements and next growth steps.",
        deliverable: "Deliverable: Continuous Iteration",
    },
];

export function ProcessSection() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E5EAF2]" id="process">
            <div className="max-w-[1200px] mx-auto">
                <div className="max-w-2xl mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbe1ff] text-[#001539] text-xs uppercase tracking-wider mb-4 font-bold">
                        HOW WE WORK
                    </div>
                    <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f131a] mb-4">
                        A Clear, Structured Process.
                    </h2>
                    <p className="font-sans text-base sm:text-lg text-[#546a92] leading-relaxed">
                        Predictable milestones with zero ambiguity. Every engagement moves through four intentional stages designed to maintain velocity and craft.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-[#f8f9ff] p-7 rounded-xl border border-[#E5EAF2] hover:border-[#0051d5] hover:shadow-md transition-all flex flex-col justify-between group"
                        >
                            <div>
                                <div className="text-[#0051d5] font-black text-3xl mb-4 font-heading group-hover:scale-105 transition-transform origin-left">
                                    {step.number}
                                </div>
                                <h3 className="font-heading text-xl font-bold text-[#001539] mb-2.5">
                                    {step.title}
                                </h3>
                                <p className="font-sans text-xs sm:text-sm text-[#546a92] leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                            <div className="mt-8 pt-4 border-t border-[#E5EAF2] text-xs text-[#747780] font-semibold">
                                {step.deliverable}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
