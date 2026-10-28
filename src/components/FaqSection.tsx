"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
    {
        q: "How soon can I expect to see real inquiries or sales from Meta Ads?",
        a: "Unlike SEO which takes months, Meta ads start driving targeted traffic immediately. In the first 3 to 5 days, our testing phase identifies which ad hooks and audiences perform best. In most campaigns, qualified inquiries start coming into your WhatsApp or CRM within the very first week.",
    },
    {
        q: "Do you design the ad graphics, videos, and write the copy, or do I have to provide them?",
        a: "We handle everything end-to-end. We write high-converting copy, design eye-catching visuals, edit short-form reels, and craft strong calls-to-action. If you already have product images or raw smartphone video clips, we polish and optimize them into scroll-stopping ads.",
    },
    {
        q: "Why should I get a custom Next.js website instead of a cheap WordPress site?",
        a: "Over 80% of your customers browse on mobile phones. Most WordPress sites take 4 to 8 seconds to load, causing more than half your visitors to bounce before seeing your offer. Our custom websites load in under 1 second, look razor-sharp on all screen sizes, and turn visitors into real leads.",
    },
    {
        q: "Do I have to sign a long-term lock-in contract?",
        a: "Never. We work with clear milestone deliverables for website development, and month-to-month flexibility for ads and marketing. You stay with us because your campaigns are profitable and your pipeline is growing, not because of fine print.",
    },
    {
        q: "How do I know my ad spend isn't being wasted?",
        a: "100% transparency. You retain full ownership and direct access to your Meta Ad account. You receive weekly plain-English updates on WhatsApp showing exactly what was spent, how many leads were generated, and your exact cost per customer.",
    },
    {
        q: "Can we meet in person in Noida or Delhi NCR before starting?",
        a: "Yes, definitely! We are based right here in Noida and frequently meet founders and business teams across Delhi, Noida, and Gurgaon. You can also start with a quick 15-minute WhatsApp call to discuss your goals.",
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
                        No hidden surprises. Here is how we manage expectations, budgets, and deliverables.
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
                <div className="text-center p-6 bg-[#f8f9ff] rounded-2xl border border-[#E5EAF2] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-left">
                        <div className="font-heading font-bold text-sm text-[#001539]">Have a specific question not answered here?</div>
                        <div className="text-xs text-[#546a92]">We're available to answer anything directly on WhatsApp.</div>
                    </div>
                    <a
                        href="https://wa.me/918920442422"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#102a56] hover:bg-[#001539] text-white text-xs font-bold transition-all shadow-sm shrink-0"
                    >
                        <MessageCircle className="w-4 h-4 text-emerald-400" />
                        <span>Ask on WhatsApp</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
