"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
    Instagram, Youtube, Twitter, TrendingUp, Users, Target,
    BarChart, Globe, Video, LucideIcon, Share2, MonitorSmartphone, Search, MousePointerClick, Lightbulb, Megaphone, ArrowRight, CheckCircle2
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, LucideIcon> = {
    Instagram, Youtube, Twitter, TrendingUp, Users, Target,
    BarChart, Globe, Video, Share2, MonitorSmartphone, Search, MousePointerClick, Lightbulb, Megaphone
};

interface ServiceCardProps {
    title: string;
    slug: string;
    description: string;
    iconName?: string;
    icon?: React.ElementType;
    className?: string;
    index?: number;
    categoryTag?: string;
}

export function ServiceCard({
    title,
    slug,
    description,
    iconName,
    icon: PassedIcon,
    className,
    index = 0,
    categoryTag,
}: ServiceCardProps) {
    const Icon = PassedIcon || (iconName ? iconMap[iconName] : TrendingUp) || TrendingUp;

    // Derived category tag
    const defaultTag = categoryTag || (
        title.toLowerCase().includes("ads") || title.toLowerCase().includes("meta")
            ? "01 / PAID MEDIA"
            : title.toLowerCase().includes("web") || title.toLowerCase().includes("site")
            ? "02 / PLATFORM ARCHITECTURE"
            : title.toLowerCase().includes("landing")
            ? "03 / CONVERSION DESIGN"
            : title.toLowerCase().includes("seo")
            ? "04 / ORGANIC VISIBILITY"
            : title.toLowerCase().includes("social")
            ? "05 / COMMUNITY & REACH"
            : "06 / STRATEGIC ADVISORY"
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className={cn(
                "bg-white rounded-xl border border-[#E5EAF2] p-7 md:p-8 hover:shadow-lg hover:border-[#0051d5]/40 transition-all duration-300 flex flex-col justify-between group",
                className
            )}
        >
            <div>
                {/* Header: Tag + Icon */}
                <div className="flex items-center justify-between mb-6">
                    <span className="font-heading text-xs font-bold uppercase tracking-wider text-[#0051d5]">
                        {defaultTag}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#eff4ff] flex items-center justify-center text-[#001539] group-hover:bg-[#102a56] group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                    </div>
                </div>

                {/* Title & Description */}
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#001539] mb-3 group-hover:text-[#0051d5] transition-colors">
                    {title}
                </h3>
                <p className="font-sans text-sm text-[#546a92] leading-relaxed mb-6">
                    {description}
                </p>

                {/* Contextual Micro Mockup based on service type */}
                {title.toLowerCase().includes("meta") || title.toLowerCase().includes("ads") ? (
                    <div className="bg-[#f8f9ff] p-3.5 rounded-lg border border-[#E5EAF2] mb-6 space-y-2.5">
                        <div className="flex items-center justify-between text-[11px] text-[#747780] font-medium">
                            <span>Audience Split: Lookalikes &amp; Retargeting</span>
                            <span className="text-[#0051d5] font-semibold">Active Testing</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="p-2 rounded bg-white border border-[#E5EAF2] flex flex-col gap-0.5">
                                <span className="text-[#747780] text-[10px]">Variant A (Static Angle)</span>
                                <span className="font-semibold text-[#001539] text-xs">High-Intent SMBs</span>
                            </div>
                            <div className="p-2 rounded bg-white border border-[#E5EAF2] flex flex-col gap-0.5">
                                <span className="text-[#747780] text-[10px]">Variant B (Direct Offer)</span>
                                <span className="font-semibold text-[#001539] text-xs">Founder Retargeting</span>
                            </div>
                        </div>
                    </div>
                ) : title.toLowerCase().includes("web") ? (
                    <div className="bg-[#f8f9ff] p-3.5 rounded-lg border border-[#E5EAF2] mb-6 space-y-2">
                        <div className="flex items-center gap-1.5 pb-2 border-b border-[#E5EAF2]">
                            <div className="w-2 h-2 rounded-full bg-[#c4c6d0]"></div>
                            <div className="w-2 h-2 rounded-full bg-[#c4c6d0]"></div>
                            <div className="w-2 h-2 rounded-full bg-[#c4c6d0]"></div>
                            <div className="ml-2 text-[10px] text-[#747780] px-2 py-0.5 bg-white rounded border border-[#E5EAF2] flex-1 truncate">
                                arvianmarketing.in/custom-system
                            </div>
                        </div>
                        <div className="h-8 bg-white rounded border border-[#E5EAF2] flex items-center px-3 justify-between">
                            <div className="w-20 h-2 bg-[#dae3f4] rounded"></div>
                            <div className="w-10 h-2 bg-[#0051d5] rounded"></div>
                        </div>
                    </div>
                ) : title.toLowerCase().includes("seo") ? (
                    <div className="bg-[#f8f9ff] p-3.5 rounded-lg border border-[#E5EAF2] mb-6 grid grid-cols-3 gap-1.5 text-center text-xs">
                        <div className="bg-white p-2 rounded border border-[#E5EAF2]">
                            <div className="font-bold text-[#001539] text-xs">On-Page</div>
                            <div className="text-[10px] text-[#747780]">Semantic Code</div>
                        </div>
                        <div className="bg-white p-2 rounded border border-[#E5EAF2]">
                            <div className="font-bold text-[#001539] text-xs">Technical</div>
                            <div className="text-[10px] text-[#747780]">Core Vitals</div>
                        </div>
                        <div className="bg-white p-2 rounded border border-[#E5EAF2]">
                            <div className="font-bold text-[#001539] text-xs">Intent</div>
                            <div className="text-[10px] text-[#747780]">Search Rank</div>
                        </div>
                    </div>
                ) : (
                    <div className="bg-[#f8f9ff] p-3.5 rounded-lg border border-[#E5EAF2] mb-6 flex items-center justify-between gap-3 text-xs">
                        <div className="flex-1 bg-white p-2 rounded border border-[#E5EAF2] text-center">
                            <div className="text-[10px] text-[#747780] uppercase font-semibold">Discovery</div>
                            <div className="text-[#001539] font-bold text-xs mt-0.5">Audience Map</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#0051d5] shrink-0" />
                        <div className="flex-1 bg-white p-2 rounded border border-[#E5EAF2] text-center">
                            <div className="text-[10px] text-[#747780] uppercase font-semibold">Outcome</div>
                            <div className="text-[#001539] font-bold text-xs mt-0.5">Verified Inquiries</div>
                        </div>
                    </div>
                )}
            </div>

            {/* Bottom Explore Link */}
            <a
                href="#contact"
                className="inline-flex items-center gap-2 font-heading text-sm font-bold text-[#001539] hover:text-[#0051d5] group-hover:translate-x-1 transition-all pt-2"
            >
                <span>Explore {title}</span>
                <ArrowRight className="w-4 h-4" />
            </a>
        </motion.div>
    );
}
