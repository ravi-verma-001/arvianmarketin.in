"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function AgencyGrowthSection() {
    return (
        <section className="relative py-24 px-4 overflow-hidden bg-[#0A0A0A]">
            {/* Background - Dark Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#111111] to-[#1a1a1a] -z-10" />

            {/* Subtle Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] -z-10" />


            <div className="container mx-auto text-center max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                        Grow Your Business with a Premium{" "}
                        <span className="text-primary">Website Design & Digital Marketing Agency</span> in Delhi NCR
                    </h2>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">

                        {/* Primary Button */}
                        <motion.a
                            href="/contact/"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-[#2563EB] text-white font-bold text-sm md:text-base rounded-full shadow-[0_0_20px_rgba(37,99,235,0.15)] hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all flex items-center"
                        >
                            Schedule an Appointment with Industry Experts
                        </motion.a>

                        {/* Secondary Button */}
                        <motion.a
                            href="/about/"
                            whileHover={{ x: 5 }}
                            className="px-8 py-3 bg-transparent border border-white/20 text-white font-semibold text-sm md:text-base rounded-full hover:border-[#2563EB] hover:text-[#2563EB] transition-colors flex items-center gap-2"
                        >
                            Know More <ArrowRight className="w-5 h-5" />
                        </motion.a>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
