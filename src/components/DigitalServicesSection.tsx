"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/MotionPrimitives";
import { Search } from "lucide-react";

const services = [
    {
        id: "sem",
        title: "Search Engine Marketing",
        shortTitle: "Search Engine Marketing",
        description: "Don't stay hidden in the vast ocean of search results. Start your search journey with our award-winning agency known for delivering 4X growth on average.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop",
        gradient: "from-blue-900/80 to-slate-900/90"
    },
    {
        id: "content",
        title: "Content Marketing",
        shortTitle: "Content Marketing",
        description: "Engage your audience with compelling narratives and data-driven content strategies that turn readers into loyal customers.",
        image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2940&auto=format&fit=crop",
        gradient: "from-amber-900/80 to-stone-900/90"
    },
    {
        id: "web",
        title: "Web Development",
        shortTitle: "Web Development",
        description: "Build scalable, lightning-fast web applications with modern technologies to give your users the best digital experience.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2944&auto=format&fit=crop",
        gradient: "from-emerald-900/80 to-zinc-900/90"
    },
    {
        id: "social",
        title: "Social Media Marketing",
        shortTitle: "Social Media Marketing",
        description: "Dominate the social feeds with targeted campaigns, influencer collaborations, and viral content creation.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2874&auto=format&fit=crop",
        gradient: "from-purple-900/80 to-neutral-900/90"
    },
    {
        id: "mpo",
        title: "Market Place Optimization",
        shortTitle: "Market Place Optimization",
        description: "Maximize your visibility and sales on platforms like Amazon and Flipkart with our advanced optimization techniques.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2940&auto=format&fit=crop",
        gradient: "from-indigo-900/80 to-gray-900/90"
    },
    {
        id: "pr",
        title: "Public Relations",
        shortTitle: "Public Relations",
        description: "Shape public perception and handle crisis communication effectively with our elite PR specialists.",
        image: "https://images.unsplash.com/photo-1557425955-df376b5903c8?q=80&w=2940&auto=format&fit=crop",
        gradient: "from-rose-900/80 to-stone-900/90"
    },
    {
        id: "branding",
        title: "Branding",
        shortTitle: "Branding",
        description: "Create memorable brand identities that resonate with your target audience and stand the test of time.",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940&auto=format&fit=crop",
        gradient: "from-orange-900/80 to-zinc-900/90"
    },
    {
        id: "influencer",
        title: "Influencer Marketing",
        shortTitle: "Influencer Marketing",
        description: "Leverage top-tier influencers to boost your product credibility and reach millions instantly.",
        image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2940&auto=format&fit=crop",
        gradient: "from-teal-900/80 to-slate-900/90"
    }
];

export function DigitalServicesSection() {
    const [activeItem, setActiveItem] = useState("sem");

    return (
        <section className="py-24 relative overflow-hidden bg-black/40 backdrop-blur-sm border-y border-white/5">
            {/* Background Animation Glows */}
            <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
            <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }} />

            <div className="container mx-auto px-4 relative z-10">
                <FadeIn>
                    <div className="mb-16 w-full max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow-md text-left">
                            Industry's Top Leading
                        </h2>
                        <div className="inline-block relative">
                            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-lg" />
                            <div className="relative bg-blue-400/10 border border-blue-400/30 px-6 py-2 rounded-xl backdrop-blur-md">
                                <span className="text-4xl md:text-5xl font-bold text-blue-400 tracking-tight drop-shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                                    Digital Services
                                </span>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                <div
                    className="flex flex-col lg:flex-row gap-4 lg:h-[400px] w-full max-w-5xl mx-auto"
                    onMouseLeave={() => setActiveItem("sem")}
                >
                    {services.map((service) => {
                        const isActive = activeItem === service.id;

                        return (
                            <motion.div
                                key={service.id}
                                layout
                                onMouseEnter={() => setActiveItem(service.id)}
                                onClick={() => setActiveItem(service.id)}
                                className={`relative rounded-3xl overflow-hidden cursor-pointer flex-shrink-0 border border-white/10 ${isActive ? "lg:flex-[3] lg:w-auto h-[350px] lg:h-full w-full" : "lg:flex-[0.5] lg:w-[80px] h-[64px] lg:h-full w-full opacity-60 hover:opacity-100 hover:bg-white/5"
                                    }`}
                                initial={false}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            >
                                {/* Background Image & Gradient - ALWAYS VISIBLE ALONG WITH GRADIENT */}
                                <motion.div
                                    className="absolute inset-0 bg-cover bg-center mix-blend-luminosity"
                                    style={{ backgroundImage: `url(${service.image})` }}
                                    animate={{
                                        opacity: isActive ? 0.7 : 0.4,
                                        filter: isActive ? 'grayscale(0%) blur(0px)' : 'grayscale(100%) blur(1px)'
                                    }}
                                    transition={{ duration: 0.6 }}
                                />
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-t ${isActive ? service.gradient : 'from-zinc-900/95 to-zinc-900/90'}`}
                                    animate={{ opacity: isActive ? 0.9 : 1 }}
                                    transition={{ duration: 0.6 }}
                                />

                                {/* Content Container */}
                                <div className="relative h-full w-full">
                                    <AnimatePresence mode="wait">
                                        {!isActive ? (
                                            // Collapsed State Content
                                            <motion.div
                                                key="collapsed"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute inset-0 flex lg:flex-col items-center justify-center px-4 lg:px-0"
                                            >
                                                <span className="text-white/80 font-semibold tracking-wider whitespace-nowrap lg:-rotate-90 origin-center text-[14px] drop-shadow-md">
                                                    {service.shortTitle}
                                                </span>
                                            </motion.div>
                                        ) : (
                                            // Expanded State Content
                                            <motion.div
                                                key="expanded"
                                                initial={{ opacity: 0, scale: 0.98 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.98 }}
                                                transition={{ duration: 0.4, ease: "easeOut" }}
                                                className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between"
                                            >
                                                <div>
                                                    <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-3 max-w-sm drop-shadow-md leading-tight">
                                                        {service.title}
                                                    </h3>
                                                    <div className="w-10 h-1 bg-blue-400 mb-4 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]" />

                                                    <p className="text-gray-200 text-base max-w-md leading-relaxed drop-shadow-sm font-medium">
                                                        {service.description}
                                                    </p>
                                                </div>

                                                <div className="mt-auto pt-6 flex items-center gap-3 text-white/60">
                                                    <Search className="w-4 h-4 text-blue-400" />
                                                    <span className="text-xs font-semibold uppercase tracking-widest border-l border-white/20 pl-3">
                                                        Explore Service
                                                    </span>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
