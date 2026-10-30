import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Background } from "@/components/ui/Background";
import { FadeIn } from "@/components/ui/MotionPrimitives";
import { PricingSection } from "@/components/PricingSection";
import { FaqSection } from "@/components/FaqSection";
import { Sparkles, Check, X, MessageCircle, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export const metadata: Metadata = {
    title: "Transparent Pricing Plans | Meta Ads & Web Design | Arvian Marketing",
    description: "Honest, transparent pricing for Meta Ads management and custom high-speed landing pages in Noida & Delhi NCR. Plans start at ₹1,999. Zero hidden fees.",
    alternates: {
        canonical: "/pricing",
    },
    openGraph: {
        title: "Transparent Pricing Plans | Arvian Marketing",
        description: "Select the growth package that fits your business. Transparent Meta Ads and landing page packages starting at ₹1,999.",
        url: "https://arvianmarketing.in/pricing",
    },
};

const comparisonFeatures = [
    { name: "Custom 1-Second Landing Page", adsOnly: false, bundle: true, pageOnly: true },
    { name: "Full Meta Ads Campaign Setup", adsOnly: true, bundle: true, pageOnly: false },
    { name: "Ongoing Ad Monitoring & Scaling", adsOnly: true, bundle: true, pageOnly: false },
    { name: "High-Intent Audience Research", adsOnly: true, bundle: true, pageOnly: false },
    { name: "Ad Creative & Copywriting", adsOnly: true, bundle: true, pageOnly: false },
    { name: "Direct WhatsApp Lead Funnels", adsOnly: true, bundle: true, pageOnly: true },
    { name: "Lead Qualification Intake Form", adsOnly: false, bundle: true, pageOnly: true },
    { name: "Meta Pixel & Conversion API (CAPI)", adsOnly: true, bundle: true, pageOnly: true },
    { name: "Weekly Performance Reporting", adsOnly: true, bundle: true, pageOnly: false },
    { name: "Dedicated 1-on-1 Access with Ravi", adsOnly: true, bundle: true, pageOnly: true },
    { name: "Zero Long-Term Lock-in Contract", adsOnly: true, bundle: true, pageOnly: true },
];

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-[#F6F8FC] text-[#0f131a] selection:bg-[#dbe1ff] selection:text-[#001539] relative font-sans">
            <Background />
            <Navbar />

            {/* Page Header */}
            <div className="pt-36 pb-6 md:pt-44 md:pb-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <FadeIn>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbe1ff] text-[#001539] text-xs font-bold uppercase tracking-wider mb-6">
                        <Sparkles className="w-3.5 h-3.5 text-[#0051d5]" />
                        TRANSPARENT VALUE
                    </div>
                    <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0f131a] mb-6">
                        Predictable Pricing. <span className="text-[#0051d5]">Unmatched Execution.</span>
                    </h1>
                    <p className="font-sans text-base sm:text-xl text-[#546a92] max-w-2xl mx-auto leading-relaxed">
                        No ₹40,000 agency retainers. No deceptive hidden charges. Honest performance packages tailored to launch fast and turn clicks into paying customers.
                    </p>
                </FadeIn>
            </div>

            {/* Main Pricing Cards Component */}
            <PricingSection />

            {/* Feature Comparison Table */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1100px] mx-auto">
                <FadeIn>
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#001539] mb-3">
                            Compare Features Across Packages
                        </h2>
                        <p className="text-sm sm:text-base text-[#546a92]">
                            Everything you need to know about what is included in our execution roadmap.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl border border-[#E5EAF2] overflow-hidden shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-[#E5EAF2] bg-[#f8f9ff]">
                                        <th className="py-4 px-6 text-sm font-bold text-[#001539]">Plan Features</th>
                                        <th className="py-4 px-6 text-sm font-bold text-center text-[#0f131a]">Meta Ads (₹1,999/mo)</th>
                                        <th className="py-4 px-6 text-sm font-bold text-center text-[#0051d5] bg-[#eff4ff]">
                                            Growth Bundle (₹2,999)
                                        </th>
                                        <th className="py-4 px-6 text-sm font-bold text-center text-[#0f131a]">Landing Page (₹1,999)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#E5EAF2] text-sm">
                                    {comparisonFeatures.map((feat, idx) => (
                                        <tr key={idx} className="hover:bg-[#fbfcfe] transition-colors">
                                            <td className="py-4 px-6 font-semibold text-[#0f131a]">{feat.name}</td>
                                            <td className="py-4 px-6 text-center">
                                                {feat.adsOnly ? (
                                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700">
                                                        <Check className="w-4 h-4 stroke-[3]" />
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-400">
                                                        <X className="w-4 h-4" />
                                                    </span>
                                                )}
                                            </td>
                                            <td className="py-4 px-6 text-center bg-[#eff4ff]/50">
                                                {feat.bundle ? (
                                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700">
                                                        <Check className="w-4 h-4 stroke-[3]" />
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-400">
                                                        <X className="w-4 h-4" />
                                                    </span>
                                                )}
                                            </td>
                                            <td className="py-4 px-6 text-center">
                                                {feat.pageOnly ? (
                                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700">
                                                        <Check className="w-4 h-4 stroke-[3]" />
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-400">
                                                        <X className="w-4 h-4" />
                                                    </span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </FadeIn>
            </section>

            {/* Quick FAQ Component */}
            <FaqSection />

            {/* Direct Consultation Footer CTA */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#102a56] text-white">
                <div className="max-w-[900px] mx-auto text-center">
                    <FadeIn direction="up">
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-4">
                            Need a Custom Scope or Have Questions?
                        </h2>
                        <p className="font-sans text-base text-[#b0c6fc] mb-8 max-w-xl mx-auto leading-relaxed">
                            Every business is unique. Chat directly with Ravi to discuss your monthly ad budget, sales goals, and timeline.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="https://wa.me/919711190678?text=Hi%20Ravi%2C%20I%20have%20questions%20about%20your%20pricing%20plans."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#25D366] text-white font-bold hover:bg-[#20ba59] transition-all shadow-md"
                            >
                                <MessageCircle className="w-4 h-4 fill-white" />
                                <span>Chat with Ravi on WhatsApp</span>
                            </a>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-white text-[#001539] font-bold hover:bg-[#dbe1ff] transition-all shadow-md"
                            >
                                <span>Submit Project Brief</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <Footer />
        </main>
    );
}
