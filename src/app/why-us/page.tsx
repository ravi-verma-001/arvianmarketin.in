import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Background } from "@/components/ui/Background";
import { FadeIn } from "@/components/ui/MotionPrimitives";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ShieldCheck, Zap, HeartHandshake, CheckCircle2, MessageCircle, ArrowRight, Target, Clock, Trophy } from "lucide-react";

export const metadata: Metadata = {
    title: "Why Choose Arvian Marketing | Performance Growth Partner",
    description: "Discover why businesses across Noida and Delhi NCR trust Arvian Marketing for high-ROAS Meta Ads, 1-second landing pages, and transparent lead generation.",
    alternates: {
        canonical: "/why-us",
    },
    openGraph: {
        title: "Why Choose Arvian Marketing | Honest Growth Partner",
        description: "Zero lock-in contracts, sub-second landing pages, and direct founder communication. See why Arvian Marketing outperforms typical agencies.",
        url: "https://arvianmarketing.in/why-us",
    },
};

const pillars = [
    {
        icon: Zap,
        title: "Sub-Second Speed Guarantee",
        desc: "Over 80% of ad clicks bounce if a site takes more than 3 seconds to load. We handcraft landing pages on Next.js that load in under 1 second, capturing the highest volume of ready-to-buy visitors.",
    },
    {
        icon: Target,
        title: "Zero Vanity Metrics",
        desc: "We don't send you fluffy reports boasting about 'impressions' or 'reach'. We optimize strictly for low CPL (Cost Per Lead), verified customer inquiries, and positive commercial return on ad spend.",
    },
    {
        icon: HeartHandshake,
        title: "Direct Founder Access",
        desc: "You won't be passed around between junior account managers or interns. You communicate directly with Ravi, ensuring strategy adjustments and ad creative tweaks happen in hours, not weeks.",
    },
    {
        icon: Clock,
        title: "48-Hour Rapid Deployment",
        desc: "Speed to market is everything. While traditional agencies take 4 to 6 weeks just to produce wireframes, our agile setup gets your funnel engineered and Meta ads live within 48 to 72 hours.",
    },
    {
        icon: ShieldCheck,
        title: "No Long-Term Lock-in Contracts",
        desc: "We earn your trust every 30 days based on performance. We don't trap clients in rigid 6-month or 12-month retainer contracts. You stay because your business is making money.",
    },
    {
        icon: Trophy,
        title: "Full-Funnel Conversion Tracking",
        desc: "We implement advanced Meta Pixel and Conversion API (CAPI) server-side tracking, ensuring your ad spend trains Meta's algorithm to hunt for actual paying buyers, not casual browsers.",
    },
];

export default function WhyUsPage() {
    return (
        <main className="min-h-screen bg-[#F6F8FC] text-[#0f131a] selection:bg-[#dbe1ff] selection:text-[#001539] relative font-sans">
            <Background />
            <Navbar />

            {/* Header */}
            <div className="pt-36 pb-12 md:pt-44 md:pb-16 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <FadeIn>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbe1ff] text-[#001539] text-xs font-bold uppercase tracking-wider mb-6">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#0051d5]" />
                        THE ARVIAN ADVANTAGE
                    </div>
                    <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0f131a] mb-6">
                        Built For Results. <span className="text-[#0051d5]">Engineered For Speed.</span>
                    </h1>
                    <p className="font-sans text-base sm:text-xl text-[#546a92] max-w-2xl mx-auto leading-relaxed">
                        Why do business owners choose us over traditional marketing agencies? Because we eliminate the fluff and focus purely on what puts money into your bank account.
                    </p>
                </FadeIn>
            </div>

            {/* Comparison Component */}
            <WhyChooseUs />

            {/* 6 Core Pillars Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
                <FadeIn>
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbe1ff] text-[#001539] text-xs uppercase tracking-wider mb-4 font-bold">
                            CORE GUARANTEES
                        </div>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#001539] mb-4">
                            The 6 Pillars Behind Every Campaign
                        </h2>
                        <p className="font-sans text-base text-[#546a92]">
                            Our disciplined framework guarantees quality control, speed, and real commercial impact.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pillars.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl border border-[#E5EAF2] p-8 hover:border-[#0051d5] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#0051d5] mb-6">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-heading text-xl font-bold text-[#001539] mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="font-sans text-sm text-[#546a92] leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </section>

            {/* Bottom CTA */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#102a56] text-white">
                <div className="max-w-[900px] mx-auto text-center">
                    <FadeIn direction="up">
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-4">
                            Experience the Difference First-Hand
                        </h2>
                        <p className="font-sans text-base text-[#b0c6fc] mb-8 max-w-xl mx-auto leading-relaxed">
                            Book a 15-minute growth review with Ravi. We will audit your current ads or website bottleneck and show you exactly where to fix it.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="https://wa.me/919711190678?text=Hi%20Ravi%2C%20I%20want%20to%20know%20how%20Arvian%20Marketing%20can%20help%20my%20business."
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
                                <span>Request Growth Plan</span>
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
