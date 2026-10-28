"use client";

import { motion } from "framer-motion";
import { ThumbsUp, Megaphone, TrendingUp, Search } from "lucide-react";

export function HeroVisual() {
    return (
        <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
            {/* Abstract Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/30 rounded-full blur-[100px]" />

            {/* Main Glass Card (Services Preview) */}
            <motion.div
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-64 md:w-80 bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 shadow-2xl transform hover:scale-105 transition-transform duration-500"
            >
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <ThumbsUp className="text-black fill-black/20" size={20} />
                    </div>
                    <div>
                        <h3 className="font-bold text-white text-lg">Our Services</h3>
                        <p className="text-xs text-primary">Join Online</p>
                    </div>
                </div>

                <div className="space-y-3">
                    {[
                        { label: "Digital Marketing", icon: Megaphone },
                        { label: "Brand Strategies", icon: Search },
                        { label: "Market Research", icon: TrendingUp },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            className="flex items-center gap-3 bg-white/5 p-2 rounded-xl"
                        >
                            <item.icon className="text-accent" size={16} />
                            <span className="text-sm text-gray-300">{item.label}</span>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-6">
                    <button className="w-full py-2 bg-gradient-to-r from-primary to-accent rounded-lg font-bold text-black text-sm hover:opacity-90 transition-opacity">
                        Register Now
                    </button>
                </div>
            </motion.div>

            {/* Floating 3D Like Bubbles */}
            {[
                { top: "10%", right: "10%", delay: 0 },
                { bottom: "20%", left: "5%", delay: 1.5 },
                { top: "40%", right: "-5%", delay: 2.5 }
            ].map((pos, i) => (
                <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, y: [0, -20, 0] }}
                    transition={{
                        scale: { duration: 0.5, delay: 1 + pos.delay },
                        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: pos.delay }
                    }}
                    className="absolute w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] rounded-full shadow-[0_0_30px_rgba(37,99,235,0.5)] border-2 border-white/20 flex items-center justify-center z-20"
                    style={pos}
                >
                    <ThumbsUp className="text-white fill-white/20 w-8 h-8" />
                </motion.div>
            ))}

        </div>
    );
}
