"use client";

import { motion } from "framer-motion";

export function RotatingSphere() {
    return (
        <div className="fixed left-[-100px] md:left-[-50px] top-1/2 -translate-y-1/2 w-[450px] h-[450px] pointer-events-none -z-20 opacity-100">
            <div className="relative w-full h-full flex items-center justify-center perspective-1000">

                {/* Core Glow */}
                {/* Core Glow - Darker */}
                {/* Core Glow - Darker */}
                <div className="absolute w-[200px] h-[200px] bg-primary/30 rounded-full blur-[60px]" />

                {/* Outer Ring 1 - Thicker & Darker */}
                <motion.div
                    animate={{ rotate: 360, rotateX: 45, rotateY: 45 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[300px] h-[300px] rounded-full border-2 border-primary/60 border-dashed"
                />

                {/* Outer Ring 2 (Counter rotation) - Thicker & Darker */}
                <motion.div
                    animate={{ rotate: -360, rotateX: -45, rotateY: 15 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[340px] h-[340px] rounded-full border-2 border-primary/50"
                />

                {/* Inner Ring 1 - Solid & Dark */}
                <motion.div
                    animate={{ rotateX: 360, rotateY: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[220px] h-[220px] rounded-full border-[3px] border-primary/80"
                    style={{ borderStyle: "solid" }}
                />

                {/* Inner Ring 2 - Dotted & Dark */}
                <motion.div
                    animate={{ rotateX: 360, rotateY: 180 }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[180px] h-[180px] rounded-full border-2 border-primary/70 border-dotted"
                />

                {/* Central Geometric Core - Sharp & Dark */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[70px] h-[70px] border-2 border-primary relative"
                >
                    <div className="absolute inset-0 border-2 border-primary/60 rotate-45" />
                </motion.div>

            </div>
        </div>
    );
}
