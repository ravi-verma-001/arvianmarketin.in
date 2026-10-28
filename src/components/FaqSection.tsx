"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "What services does Arvian Marketing provide?",
        a: "We focus on core performance pillars: strategic Meta Ads (Facebook & Instagram campaigns), custom website design and development, dedicated conversion-focused landing pages, and foundational technical & on-page SEO services. We can deliver these individually or as an integrated system.",
    },
    {
        q: "Can you build a website for my business?",
        a: "Yes. We design and build professional, responsive, and easy-to-manage websites tailored to your brand identity, products, and services. Our sites are engineered with semantic clean code, fast load speeds, and intuitive layouts that support user trust.",
    },
    {
        q: "Do you create landing pages for advertising campaigns?",
        a: "Absolutely. In fact, we strongly recommend dedicated landing pages for paid traffic. Sending paid ads to a cluttered homepage often results in wasted ad spend. Our landing pages are designed specifically around single offers to maximize your conversion rate.",
    },
    {
        q: "How does your Meta Ads management service work?",
        a: "We handle strategic campaign planning, creative framing, copywriting, audience targeting, tracking setup, and ongoing performance testing. We continually review ad variations and performance data to optimize cost per acquisition and budget efficiency.",
    },
    {
        q: "How much do your services cost?",
        a: "Our pricing is project-dependent and based on your specific requirements, timeline, and scope. After an introductory discussion to review what you need, we provide a transparent, itemized proposal with clear deliverables and no surprise costs.",
    },
    {
        q: "What information do you need before starting a project?",
        a: "We start with your business goals, target customer profiles, existing branding assets, and any past marketing data. If you don't have everything formalized, our initial Discovery stage is designed to help structure these points together.",
    },
    {
        q: "How can I discuss my requirements with your team?",
        a: "You can fill out the project consultation form below, or reach us directly via WhatsApp. We will review your notes and set up a focused consultation to discuss your objectives.",
    },
];

export function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E5EAF2]" id="faq">
            <div className="max-w-[800px] mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbe1ff] text-[#001539] text-xs uppercase tracking-wider mb-4 font-bold">
                        FREQUENTLY ASKED
                    </div>
                    <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f131a] mb-4">
                        Questions Before Getting Started?
                    </h2>
                    <p className="font-sans text-base text-[#546a92]">
                        Straightforward answers to the common questions we receive from founders and marketing teams.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div
                                key={idx}
                                className="bg-[#f8f9ff] border border-[#E5EAF2] rounded-xl p-6 transition-all duration-200"
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
            </div>
        </section>
    );
}
