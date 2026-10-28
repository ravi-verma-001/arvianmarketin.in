"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
    {
        q: "What is the exact pricing for Meta Ads and landing pages?",
        a: "Our ongoing Meta Ads campaign management starts at ₹1,999/month. If your business also requires a dedicated landing page, our bundled Growth Package is ₹2,999 (setup + 1st month ads). Standalone landing pages are ₹1,999. Zero hidden fees or long-term contracts.",
    },
    {
        q: "How much should I spend on Meta Ads starting out?",
        a: "Your ideal ad budget depends on your industry, target audience, and campaign objective. We recommend a practical starting budget — typically between ₹300 to ₹500/day for initial testing before scaling what proves profitable.",
    },
    {
        q: "How soon can I expect to see real inquiries or sales from Meta Ads?",
        a: "Unlike SEO which takes months, Meta ads start driving targeted traffic immediately. In the first 3 to 5 days, our testing phase identifies which ad hooks and audiences perform best. In most campaigns, qualified inquiries start coming into your WhatsApp or CRM within the very first week.",
    },
    {
        q: "Do I need a custom landing page or can I send ads to WhatsApp?",
        a: "Depending on your campaign objective, we can run direct-to-WhatsApp ads, lead forms, or a dedicated 1-second landing page. We'll recommend the ideal funnel based on your specific business and target ticket size.",
    },
    {
        q: "Do you design the ad graphics, videos, and write the copy?",
        a: "We handle everything end-to-end. We write high-converting copy, design eye-catching visuals, edit short-form reels, and craft strong calls-to-action. If you already have product images or raw smartphone video clips, we polish and optimize them into scroll-stopping ads.",
    },
    {
        q: "Why should I get a custom Next.js landing page instead of a generic WordPress site?",
        a: "Over 85% of paid ad traffic browses on mobile phones. Most WordPress sites take 4 to 8 seconds to load, causing more than half your visitors to bounce before seeing your offer. Our custom websites load in under 1 second, look razor-sharp on all screen sizes, and convert visitors into real leads.",
    },
    {
        q: "Do I have to sign a long-term lock-in contract?",
        a: "Never. We work with clear milestone deliverables for website development, and month-to-month flexibility for ads and marketing. You stay with us because your campaigns are profitable and your pipeline is growing, not because of fine print.",
    },
    {
        q: "How fast will my Meta Ads and funnel be live?",
        a: "Your campaign strategy and creative angles are mapped out within 48 hours of onboarding. Once you approve the target audience and messaging, campaigns can go live within 24 to 48 hours with full conversion tracking configured.",
    },
];

export function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E5EAF2]" id="faq">
            <div className="max-w-[800px] mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbe1ff] text-[#001539] text-xs uppercase tracking-wider mb-4 font-bold">
                        CLEAR ANSWERS
                    </div>
                    <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f131a] mb-4">
                        Honest Answers to Common Questions.
                    </h2>
                    <p className="font-sans text-base text-[#546a92]">
                        Everything you need to know about our Meta Ads services, pricing, and campaign strategy.
                    </p>
                </div>

                <div className="space-y-4 mb-12">
                    {faqs.map((faq, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div
                                key={idx}
                                className="bg-[#f8f9ff] border border-[#E5EAF2] rounded-2xl p-6 transition-all duration-200 hover:border-[#0051d5]/40"
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                                    className="w-full flex items-center justify-between text-left gap-4 font-heading font-bold text-base sm:text-lg text-[#001539] focus:outline-none"
                                >
                                    <span>{faq.q}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-[#747780] transition-transform duration-200 shrink-0 ${
                                            isOpen ? "rotate-180 text-[#0051d5]" : ""
                                        }`}
                                    />
                                </button>
                                {isOpen && (
                                    <div className="mt-4 pt-4 border-t border-[#E5EAF2] font-sans text-sm sm:text-base text-[#546a92] leading-relaxed">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Have another question CTA */}
                <div className="p-6 bg-[#eff4ff] rounded-2xl border border-[#dbe1ff] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-left">
                        <div className="font-heading font-bold text-sm text-[#001539]">Have questions before getting started?</div>
                        <div className="text-xs text-[#546a92]">Chat directly with Ravi on WhatsApp (+91 97111 90678).</div>
                    </div>
                    <a
                        href="https://wa.me/919711190678?text=Hi%20Ravi%2C%20I%20have%20a%20few%20questions%20before%20getting%20started%20with%20Meta%20Ads."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-all shadow-sm shrink-0"
                    >
                        <MessageCircle className="w-4 h-4 fill-white" />
                        <span>Chat on WhatsApp</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
