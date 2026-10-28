"use client";

import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2, MessageCircle } from "lucide-react";

const testimonials = [
    {
        name: "Anushka Sharma",
        role: "Founder",
        company: "Anushka Skincare & Aesthetics",
        location: "Delhi NCR",
        content: "Before working with Ravi, we were losing money on Meta ads with almost zero bookings. Ravi designed a fast, mobile-friendly landing page and completely restructured our campaign. Within 30 days, we received over 2,700 direct WhatsApp inquiries at ₹23.52 per lead. Best investment we made!",
        rating: 5,
        highlight: "2,767 Leads @ ₹23.52 per lead",
        verified: true,
    },
    {
        name: "Devki Nandan",
        role: "Director",
        company: "Devki Interiors & Modular Homes",
        location: "Noida",
        content: "Most marketing agencies take weeks just to send an invoice. Ravi had our custom landing page ready in 48 hours and the Meta ads running by day 3. We reached over 149k local customers and our WhatsApp has been buzzing with direct interior inquiries daily.",
        rating: 5,
        highlight: "149,000+ Reach • 4.2x ROAS",
        verified: true,
    },
    {
        name: "Aman Parjapati",
        role: "Founder",
        company: "Sky Gold Jewellers",
        location: "Delhi",
        content: "We were skeptical about digital ads for fine jewellery, but Ravi and his team understood the exact audience to target in Delhi NCR. During the festive season, our footfalls and WhatsApp inquiries jumped by over 200%. Highly recommended!",
        rating: 5,
        highlight: "+200% Festive Inquiries",
        verified: true,
    },
    {
        name: "Ajay Yadav",
        role: "Brand Director",
        company: "Yadav Properties & Infra",
        location: "Greater Noida",
        content: "Most marketing agencies just burn your ad budget and give you excuses about 'brand awareness'. Arvian Marketing delivered real, qualified buyers who visited our properties in person. The cost per lead dropped by 40% in month two.",
        rating: 5,
        highlight: "40% Lower Cost Per Lead",
        verified: true,
    },
];

export function Testimonials() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E5EAF2]" id="reviews">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbe1ff] text-[#001539] text-xs uppercase tracking-wider mb-4 font-bold">
                        REAL CLIENT FEEDBACK
                    </div>
                    <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f131a] mb-4">
                        What Business Owners Say About Working With Ravi.
                    </h2>
                    <p className="font-sans text-base text-[#546a92]">
                        Real verified results from business owners who partnered with us for landing pages and Meta Ads.
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
                                    {item.verified && (
                                        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full flex items-center gap-1">
                                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                            Verified Client
                                        </span>
                                    )}
                                </div>

                                <div className="inline-block px-2.5 py-1 rounded-md bg-[#dbe1ff] text-[#001539] text-xs font-bold mb-4">
                                    ⚡ {item.highlight}
                                </div>

                                <p className="font-sans text-sm text-[#001539] leading-relaxed mb-6 italic">
                                    &ldquo;{item.content}&rdquo;
                                </p>
                            </div>

                            <div className="pt-4 border-t border-[#E5EAF2] flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#001539] text-white flex items-center justify-center font-bold text-sm shrink-0">
                                    {item.name.split(" ").map(n => n[0]).join("")}
                                </div>
                                <div>
                                    <div className="font-heading font-bold text-sm text-[#0f131a]">
                                        {item.name}
                                    </div>
                                    <div className="text-xs text-[#546a92]">
                                        {item.role}, {item.company}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom WhatsApp reassurance banner */}
                <div className="p-6 rounded-2xl bg-[#eff4ff] border border-[#dbe1ff] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-sm">
                            <MessageCircle className="w-5 h-5 fill-white" />
                        </div>
                        <div>
                            <div className="text-sm font-bold text-[#001539]">
                                Want to speak with Ravi before deciding?
                            </div>
                            <div className="text-xs text-[#546a92]">
                                Have questions about ad spend, strategy, or your niche? Chat directly on WhatsApp (+91 97111 90678).
                            </div>
                        </div>
                    </div>
                    <a
                        href="https://wa.me/919711190678?text=Hi%20Ravi%2C%20I%20saw%20your%20client%20reviews%20and%20want%20to%20discuss%20my%20business%20growth."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl bg-[#001539] hover:bg-[#002868] text-white text-xs font-bold shrink-0 transition-colors"
                    >
                        Chat on WhatsApp &rarr;
                    </a>
                </div>
            </div>
        </section>
    );
}
