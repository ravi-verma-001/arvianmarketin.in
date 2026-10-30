import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Background } from "@/components/ui/Background";
import { FadeIn } from "@/components/ui/MotionPrimitives";
import { PortfolioSection } from "@/components/PortfolioSection";
import { TrendingUp, ArrowRight, CheckCircle2, MessageCircle, BarChart3, Users, Zap } from "lucide-react";

export const metadata: Metadata = {
    title: "Client Results & Proven Case Studies | Arvian Marketing",
    description: "Explore real Meta Ads and web design case studies from Arvian Marketing in Noida & Delhi NCR. See verified ROAS, lead generation numbers, and CPL results.",
    alternates: {
        canonical: "/results",
    },
    openGraph: {
        title: "Client Results & Case Studies | Arvian Marketing",
        description: "Explore real performance results, low CPL lead campaigns, and high-converting funnels delivered by Arvian Marketing.",
        url: "https://arvianmarketing.in/results",
    },
};

const caseStudies = [
    {
        title: "Anushka Skincare & Aesthetics",
        category: "Skincare, Aesthetics & Wellness",
        metric: "2,767 Verified Leads",
        highlight: "₹23.52 Cost Per Lead (CPL)",
        roas: "5.8x Campaign ROI",
        timeframe: "30-Day Campaign",
        tags: ["Meta Ads", "Landing Page", "WhatsApp Lead Flow"],
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
        challenge: "Client was burning ad budget boosting posts without conversion tracking, paying over ₹120+ per casual inquiry that rarely booked clinic appointments.",
        strategy: "Built a 1-second Next.js landing page with before-and-after aesthetics, paired with targeted Instagram reels and a frictionless WhatsApp booking funnel.",
        results: [
            "2,767 direct messaging leads generated",
            "CPL reduced from ₹120 to ₹23.52",
            "Clinic appointment calendar fully booked for 6 consecutive weeks",
        ],
        whatsappMsg: "Hi Ravi, I saw the Anushka Skincare case study and want similar lead generation results for my business.",
    },
    {
        title: "Devki Interiors & Modular Homes",
        category: "Architecture & Luxury Interiors",
        metric: "149,000+ Targeted Reach",
        highlight: "4.2x ROAS Generated",
        roas: "₹200/day Initial Budget",
        timeframe: "Ongoing Retainer",
        tags: ["Meta Ads", "Audience Scaling", "High-Ticket Funnel"],
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
        challenge: "Struggling to find high-income homeowners in Noida & Delhi NCR who were ready for premium ₹15L+ modular interior renovations.",
        strategy: "Constructed targeted lookalike audiences based on luxury lifestyle signals and deployed carousel video tours driving users to an intake qualification form.",
        results: [
            "149k+ local homeowners reached in target posh sectors",
            "Generated consistent high-ticket consultations every week",
            "Achieved 4.2x return on ad spend within 45 days",
        ],
        whatsappMsg: "Hi Ravi, I saw the Devki Interiors case study and want high-ticket client leads for my interior/architecture brand.",
    },
    {
        title: "Vanguard Properties Group",
        category: "Commercial & Residential Real Estate",
        metric: "180+ Verified Site Visits",
        highlight: "40% Lower Cost Per Visit",
        roas: "₹4.5Cr+ Closed Property Sales",
        timeframe: "60-Day Scaling Phase",
        tags: ["Lead Qualification", "WhatsApp CRM", "Meta Ads"],
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
        challenge: "Overwhelmed with junk leads from generic Facebook lead generation forms where numbers were unreachable or buyers lacked budget.",
        strategy: "Replaced native lead forms with a multi-step qualification intake page that filtered by budget range, location preference, and immediate buying timeline.",
        results: [
            "180+ verified site visits completed in-person",
            "Zero wasted calls for the internal sales team",
            "Over ₹4.5 Crore in closed unit transactions attributed to the funnel",
        ],
        whatsappMsg: "Hi Ravi, I saw the Vanguard Properties case study and want qualified real estate buyer leads.",
    },
    {
        title: "Sky Gold Jewellers",
        category: "Fine Jewellery & Retail",
        metric: "+200% Inquiries Growth",
        highlight: "3.4x Store Footfall Surge",
        roas: "Festive Season Scaling",
        timeframe: "Festive 4-Week Push",
        tags: ["Local Geo-Targeting", "Instagram Reels", "Store Footfall"],
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop",
        challenge: "Relied solely on traditional print flyers and walk-ins, missing high-spend festive jewellery shoppers researching online on Instagram.",
        strategy: "Localized video ad campaigns showcasing trending gold & diamond collections targeted within an 8km radius of the showroom with direct WhatsApp inquiry perks.",
        results: [
            "200% surge in customer inquiries during festive week",
            "Substantial rise in verified in-store footfall and bridal collection trials",
            "Strong customer database built for future seasonal promotions",
        ],
        whatsappMsg: "Hi Ravi, I saw the Sky Gold Jewellers case study and want to grow retail footfall and inquiries.",
    },
];

export default function ResultsPage() {
    return (
        <main className="min-h-screen bg-[#F6F8FC] text-[#0f131a] selection:bg-[#dbe1ff] selection:text-[#001539] relative font-sans">
            <Background />
            <Navbar />

            {/* Page Header */}
            <div className="pt-36 pb-16 md:pt-44 md:pb-20 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <FadeIn>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbe1ff] text-[#001539] text-xs font-bold uppercase tracking-wider mb-6">
                        <TrendingUp className="w-3.5 h-3.5 text-[#0051d5]" />
                        PROVEN TRACK RECORD
                    </div>
                    <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0f131a] mb-6">
                        Real Campaigns. <span className="text-[#0051d5]">Measurable Revenue.</span>
                    </h1>
                    <p className="font-sans text-base sm:text-xl text-[#546a92] max-w-2xl mx-auto leading-relaxed">
                        We don&apos;t celebrate vanity impressions or empty clicks. Explore how our custom funnels, landing pages, and Meta Ads drive real buyer inquiries and verified business growth.
                    </p>
                </FadeIn>

                {/* Aggregate Stat Bar */}
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto p-6 rounded-2xl bg-[#001539] text-white shadow-xl">
                    <div className="p-3 text-center border-r border-white/10 last:border-none">
                        <div className="font-heading text-3xl sm:text-4xl font-extrabold text-[#dbe1ff]">100K+</div>
                        <div className="text-xs text-[#b0c6fc] mt-1 font-medium">Buyer Inquiries Generated</div>
                    </div>
                    <div className="p-3 text-center border-r border-white/10 last:border-none">
                        <div className="font-heading text-3xl sm:text-4xl font-extrabold text-emerald-400">₹23.52</div>
                        <div className="text-xs text-[#b0c6fc] mt-1 font-medium">Lowest Lead Cost Achieved</div>
                    </div>
                    <div className="p-3 text-center border-r border-white/10 last:border-none">
                        <div className="font-heading text-3xl sm:text-4xl font-extrabold text-[#dbe1ff]">4.2x</div>
                        <div className="text-xs text-[#b0c6fc] mt-1 font-medium">Average Client ROAS</div>
                    </div>
                    <div className="p-3 text-center">
                        <div className="font-heading text-3xl sm:text-4xl font-extrabold text-amber-400">&lt; 1s</div>
                        <div className="text-xs text-[#b0c6fc] mt-1 font-medium">Landing Page Speed</div>
                    </div>
                </div>
            </div>

            {/* Case Studies Detailed List */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto space-y-12">
                {caseStudies.map((item, idx) => (
                    <FadeIn key={idx} delay={idx * 0.1}>
                        <div className="bg-white rounded-3xl border border-[#E5EAF2] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#0051d5]/40 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12">
                            {/* Image side */}
                            <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover object-center"
                                />
                                <div className="absolute top-4 left-4 bg-[#001539]/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-xs font-bold text-white shadow-md flex items-center gap-1.5">
                                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                                    <span>{item.highlight}</span>
                                </div>
                            </div>

                            {/* Content side */}
                            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                                <div>
                                    <div className="flex flex-wrap items-center gap-2 mb-3">
                                        <span className="text-xs font-bold text-[#0051d5] bg-[#eff4ff] px-2.5 py-1 rounded-md">
                                            {item.category}
                                        </span>
                                        <span className="text-xs font-semibold text-[#747780]">
                                            • {item.timeframe}
                                        </span>
                                    </div>

                                    <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#001539] mb-4">
                                        {item.title}
                                    </h2>

                                    {/* Stat badges */}
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-[#f8f9ff] border border-[#E5EAF2]">
                                        <div>
                                            <div className="text-[11px] text-[#747780] font-semibold uppercase">Key Metric</div>
                                            <div className="text-sm font-extrabold text-[#001539]">{item.metric}</div>
                                        </div>
                                        <div>
                                            <div className="text-[11px] text-[#747780] font-semibold uppercase">Cost Metric</div>
                                            <div className="text-sm font-extrabold text-emerald-600">{item.highlight}</div>
                                        </div>
                                        <div>
                                            <div className="text-[11px] text-[#747780] font-semibold uppercase">Return / Scale</div>
                                            <div className="text-sm font-extrabold text-[#0051d5]">{item.roas}</div>
                                        </div>
                                    </div>

                                    {/* Details */}
                                    <div className="space-y-3 mb-6 text-sm">
                                        <div>
                                            <span className="font-bold text-[#001539]">The Challenge: </span>
                                            <span className="text-[#546a92]">{item.challenge}</span>
                                        </div>
                                        <div>
                                            <span className="font-bold text-[#001539]">Our Strategy: </span>
                                            <span className="text-[#546a92]">{item.strategy}</span>
                                        </div>
                                    </div>

                                    {/* Results bullets */}
                                    <div className="mb-6">
                                        <div className="text-xs font-bold uppercase tracking-wider text-[#001539] mb-2.5">
                                            Key Deliverables &amp; Outcomes:
                                        </div>
                                        <ul className="space-y-1.5">
                                            {item.results.map((res, rIdx) => (
                                                <li key={rIdx} className="flex items-center gap-2 text-xs sm:text-sm text-[#001539] font-medium">
                                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                                    <span>{res}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Action button */}
                                <div className="pt-4 border-t border-[#E5EAF2] flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <div className="flex flex-wrap gap-1.5">
                                        {item.tags.map((tag, tIdx) => (
                                            <span key={tIdx} className="text-[11px] font-semibold text-[#546a92] bg-[#f0f2f7] px-2 py-0.5 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <a
                                        href={`https://wa.me/919711190678?text=${encodeURIComponent(item.whatsappMsg)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-all shadow-sm w-full sm:w-auto justify-center"
                                    >
                                        <MessageCircle className="w-4 h-4 fill-white" />
                                        <span>Discuss Similar Results</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </section>

            {/* Bottom Consultation CTA */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#102a56] text-white mt-16">
                <div className="max-w-[900px] mx-auto text-center">
                    <FadeIn direction="up">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#dbe1ff] text-xs font-bold uppercase tracking-wider mb-6">
                            YOUR TURN TO SCALE
                        </div>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-4">
                            Ready to Turn Your Marketing Budget into Measurable Clients?
                        </h2>
                        <p className="font-sans text-base text-[#b0c6fc] mb-8 max-w-xl mx-auto leading-relaxed">
                            Stop wasting funds on low-intent boosting. Get a bespoke performance growth strategy tailored for your target market.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-white text-[#001539] font-bold hover:bg-[#dbe1ff] transition-all shadow-md"
                            >
                                <span>Get Free Growth Plan</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <a
                                href="https://wa.me/919711190678?text=Hi%20Ravi%2C%20I%20want%20to%20discuss%20case%20studies%20and%20grow%20my%20business%20leads."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#25D366] text-white font-bold hover:bg-[#20ba59] transition-all shadow-md"
                            >
                                <MessageCircle className="w-4 h-4 fill-white" />
                                <span>Chat with Ravi on WhatsApp</span>
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <Footer />
        </main>
    );
}
