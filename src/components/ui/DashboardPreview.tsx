"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Eye, BarChart2 } from "lucide-react";

export function DashboardPreview() {
    return (
        <div className="relative w-full max-w-lg mx-auto perspective-1000">
            {/* Glow effects */}
            <div className="absolute -inset-4 bg-primary/20 rounded-xl blur-xl opacity-50 animate-pulse" />

            {/* Main Container */}
            <motion.div
                initial={{ rotateY: -10, rotateX: 5 }}
                animate={{ rotateY: [-10, -5, -10], rotateX: [5, 0, 5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative bg-[#333333]/90 border border-white/10 rounded-xl overflow-hidden shadow-2xl backdrop-blur-md"
            >
                {/* Header */}
                <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-white/5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>

                {/* Body */}
                <div className="p-6 grid gap-6">
                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-4">
                        {[
                            { label: "Total Reach", value: "2.4M", icon: Eye, color: "text-blue-400" },
                            { label: "Engagement", value: "+124%", icon: TrendingUp, color: "text-green-400" },
                            { label: "Followers", value: "85.2k", icon: Users, color: "text-purple-400" },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white/5 p-3 rounded-lg border border-white/5">
                                <div className="flex items-center gap-2 mb-2">
                                    <stat.icon size={14} className={stat.color} />
                                    <span className="text-[10px] text-muted-foreground uppercase">{stat.label}</span>
                                </div>
                                <div className="text-xl font-bold font-mono">{stat.value}</div>
                            </div>
                        ))}
                    </div>

                    {/* Chart Area */}
                    <div className="h-40 bg-white/5 rounded-lg border border-white/5 p-4 flex items-end justify-between gap-2 relative overflow-hidden">
                        {/* Grid lines */}
                        <div className="absolute inset-0 grid grid-rows-4 gap-4 p-4 opacity-10 pointer-events-none">
                            <div className="border-b border-white"></div>
                            <div className="border-b border-white"></div>
                            <div className="border-b border-white"></div>
                        </div>

                        {/* Bars */}
                        {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                                className="w-full bg-gradient-to-t from-primary/20 to-primary rounded-t-sm relative group"
                            >
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity bg-black px-1 rounded">
                                    {h}%
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom Row */}
                    <div className="flex gap-4">
                        <div className="flex-1 bg-white/5 h-20 rounded-lg p-3 flex gap-3 items-center border border-white/5">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
                            <div className="space-y-1">
                                <div className="w-20 h-2 bg-white/20 rounded" />
                                <div className="w-12 h-2 bg-white/10 rounded" />
                            </div>
                        </div>
                        <div className="flex-1 bg-white/5 h-20 rounded-lg p-3 flex gap-3 items-center border border-white/5">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500" />
                            <div className="space-y-1">
                                <div className="w-20 h-2 bg-white/20 rounded" />
                                <div className="w-12 h-2 bg-white/10 rounded" />
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>
        </div>
    );
}
