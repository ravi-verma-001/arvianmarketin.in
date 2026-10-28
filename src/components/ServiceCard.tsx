"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
    Target, MonitorSmartphone, Share2, Search, Megaphone, Lightbulb,
    ArrowRight, Check, TrendingUp, Sparkles, MessageCircle, PhoneCall
} from "lucide-react";

interface ServiceCardProps {
    title: string;
    slug: string;
    description: string;
    iconName?: string;
    icon?: React.ElementType;
    className?: string;
    index?: number;
    categoryTag?: string;
    highlights?: string[];
}

export function ServiceCard({
    title,
    slug,
    description,
    className,
    index = 0,
    categoryTag,
}: ServiceCardProps) {
    // Determine friendly human deliverables
    const isMeta = title.toLowerCase().includes("meta") || title.toLowerCase().includes("ads");
    const isWeb = title.toLowerCase().includes("web") || title.toLowerCase().includes("site");
    const isLanding = title.toLowerCase().includes("landing");
    const isSEO = title.toLowerCase().includes("seo") || title.toLowerCase().includes("optimization");
    const isSocial = title.toLowerCase().includes("social");

    const category = categoryTag || (
        isMeta ? "High-ROI Paid Advertising" :
        isWeb ? "Next.js Web Engineering" :
        isLanding ? "Conversion Optimization" :
        isSEO ? "Google Ranking & Maps" :
        isSocial ? "Brand Engagement" : "Strategic Consultation"
    );

    const deliverableBadge = (
        isMeta ? "Ad Creatives + Testing + Retargeting" :
        isWeb ? "Mobile-First + 95+ Speed Score" :
        isLanding ? "Single-Offer + WhatsApp Lead Capture" :
        isSEO ? "Local SEO + Google Business Profile" :
        isSocial ? "Reels + Creatives + Community" : "1-on-1 Roadmap with Founder"
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className={cn(
                "bg-white rounded-2xl border border-[#E5EAF2] p-7 md:p-8 hover:shadow-lg hover:border-[#0051d5]/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden",
                className
            )}
        >
            <div>
                {/* Header Tag + Deliverable */}
                <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0051d5] bg-[#eff4ff] px-2.5 py-1 rounded-md">
                        {category}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                        Done-For-You
                    </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#001539] mb-3 group-hover:text-[#0051d5] transition-colors">
                    {title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm text-[#546a92] leading-relaxed mb-6">
                    {description}
                </p>

                {/* Tangible Human Preview Box */}
                <div className="bg-[#f8f9ff] p-4 rounded-xl border border-[#E5EAF2] mb-6 space-y-2">
                    <div className="text-[11px] font-bold text-[#001539] uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#0051d5]" />
                        <span>What You Actually Get:</span>
                    </div>
                    <div className="text-xs text-[#546a92] font-medium leading-relaxed">
                        {deliverableBadge}
                    </div>
                </div>
            </div>

            {/* Bottom Direct Action */}
            <div className="pt-4 border-t border-[#E5EAF2] flex items-center justify-between">
                <a
                    href="https://wa.me/918920442422"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#001539] hover:text-[#0051d5] group-hover:translate-x-1 transition-all"
                >
                    <span>Discuss {title} on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#0051d5]" />
                </a>
            </div>
        </motion.div>
    );
}
