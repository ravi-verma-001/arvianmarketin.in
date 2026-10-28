"use client";

import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2, MessageCircle } from "lucide-react";

const testimonials = [
    {
        name: "Dev Aggarwal",
        role: "Founder & CEO",
        company: "E-Commerce Lifestyle Brand",
        location: "Noida, Delhi NCR",
        content: "Arvian Marketing completely transformed how we get customers online. They rebuilt our landing page and set up Meta ads that took our daily orders from 10 to over 70. Their team replies on WhatsApp within minutes whenever we need anything.",
        rating: 5,
        highlight: "7x Daily Orders Increase",
    },
    {
        name: "Aman Parjapati",
        role: "Founder",
        company: "Sky Gold Jewellers",
        location: "Delhi",
        content: "We were skeptical about digital ads for fine jewellery, but Ravi and his team understood the exact audience to target in Delhi NCR. During the festive season, our footfalls and WhatsApp inquiries jumped by over 200%. Highly recommended!",
        rating: 5,
        highlight: "+200% Festive Inquiries",
    },
    {
        name: "Ajay Yadav",
        role: "Brand Director",
        company: "Yadav Properties & Infra",
        location: "Greater Noida",
        content: "Most marketing agencies just burn your ad budget and give you excuses about 'brand awareness'. Arvian Marketing delivered real, qualified buyers who visited our properties in person. The cost per lead dropped by 40% in month two.",
        rating: 5,
        highlight: "40% Lower Cost Per Lead",
    },
    {
        name: "Sameer Ansari",
        role: "Managing Director",
        company: "ISGO Logistics & Advisory",
        location: "Noida Sector 62",
        content: "Our corporate website looks world-class and loads in under a second on mobile phones. They handled everything from copywriting to design and SEO without disturbing our daily schedule. Very professional work ethics.",
        rating: 5,
        highlight: "Sub-Second Load Time",
    },
    {
        name: "Deepak Gupta",
        role: "Owner",
        company: "Shreeram Travel & Tours",
        location: "Delhi NCR",
        content: "Their local Google SEO work brought us to the top 3 on Google Maps for tour packages. Calls start coming in directly from Google every morning. You can tell they actually care about your business.",
        rating: 5,
        highlight: "Top 3 Google Maps Ranking",
    },
];

export function Testimonials() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E5EAF2]" id="reviews">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbe1ff] text-[#001539] text-xs uppercase tracking-wider mb-4 font-bold">
                        REAL CLIENT EXPERIENCES
                    </div>
                    <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f131a] mb-4">
                        What Founders &amp; Business Owners Say About Working With Us.
                    </h2>
                    <p className="font-sans text-base text-[#546a92]">
                        We judge our success by one standard: whether our clients' phones ring and their sales increase. Here's what they share.
                    </p>
                </div>

                {/* 3 Featured Real Reviews */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {testimonials.slice(0, 3).map((item, idx) => (
                        <div
                            key={idx}
                            className="p-7 rounded-2xl bg-[#f8f9ff] border border-[#E5EAF2] flex flex-col justify-between hover:shadow-lg hover:border-[#0051d5]/40 transition-all duration-300 relative group"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-1 text-amber-500">
                                        {[...Array(item.rating)].map((_, rIdx) => (
                                            <Star key={rIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>
                                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/70 px-2.5 py-0.5 rounded-full">
                                        {item.highlight}
                                    </span>
                                </div>

                                <p className="font-sans text-sm text-[#0f131a] leading-relaxed mb-6">
                                    "{item.content}"
                                </p>
                            </div>

                            <div className="pt-4 border-t border-[#E5EAF2] flex items-center justify-between">
                                <div>
                                    <div className="font-heading font-bold text-sm text-[#001539]">
                                        {item.name}
                                    </div>
                                    <div className="text-xs text-[#546a92]">
                                        {item.role}, <span className="font-medium text-[#0f131a]">{item.company}</span>
                                    </div>
                                    <div className="text-[11px] text-[#747780]">
                                        📍 {item.location}
                                    </div>
                                </div>
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Client Badges Bar */}
                <div className="p-6 rounded-2xl bg-[#eff4ff] border border-[#dbe1ff] flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                        <div className="flex -space-x-2">
                            <div className="w-10 h-10 rounded-full bg-[#102a56] text-white flex items-center justify-center font-bold text-xs border-2 border-white">DA</div>
                            <div className="w-10 h-10 rounded-full bg-[#0051d5] text-white flex items-center justify-center font-bold text-xs border-2 border-white">AP</div>
                            <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs border-2 border-white">AY</div>
                            <div className="w-10 h-10 rounded-full bg-[#316bf3] text-white flex items-center justify-center font-bold text-xs border-2 border-white">SA</div>
                        </div>
                        <div>
                            <div className="font-heading font-bold text-sm text-[#001539]">
                                Join 100+ Businesses Growing Across Delhi NCR &amp; Noida
                            </div>
                            <div className="text-xs text-[#546a92]">
                                Transparent reporting, dedicated attention, and verified customer results.
                            </div>
                        </div>
                    </div>

                    <a
                        href="https://wa.me/918920442422"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#102a56] hover:bg-[#001539] text-white font-bold text-xs sm:text-sm rounded-xl shrink-0 transition-all shadow-sm"
                    >
                        <MessageCircle className="w-4 h-4 text-emerald-400" />
                        <span>Share Your Growth Goals on WhatsApp</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
