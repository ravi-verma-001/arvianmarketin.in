import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Background } from "@/components/ui/Background";
import { FadeIn } from "@/components/ui/MotionPrimitives";
import { Star, CheckCircle2, MessageCircle, ArrowRight, Quote, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
    title: "Client Reviews & Testimonials | Arvian Marketing",
    description: "Read verified client reviews and feedback from business owners in Noida & Delhi NCR who scaled their revenue with Arvian Marketing's Meta Ads and landing pages.",
    alternates: {
        canonical: "/reviews",
    },
    openGraph: {
        title: "Client Reviews & Testimonials | Arvian Marketing",
        description: "Verified reviews from business founders who partnered with Arvian Marketing for performance Meta Ads and conversion funnels.",
        url: "https://arvianmarketing.in/reviews",
    },
};

const allReviews = [
    {
        name: "Anushka Sharma",
        role: "Founder & Chief Cosmetologist",
        company: "Anushka Skincare & Aesthetics",
        location: "Delhi NCR",
        rating: 5,
        highlight: "2,767 Leads @ ₹23.52 per lead",
        verified: true,
        content: "Before working with Ravi, we were losing money on Meta ads with almost zero bookings. Ravi designed a fast, mobile-friendly landing page and completely restructured our campaign. Within 30 days, we received over 2,700 direct WhatsApp inquiries at ₹23.52 per lead. Best investment we made!",
        date: "October 2024",
    },
    {
        name: "Devki Nandan",
        role: "Director",
        company: "Devki Interiors & Modular Homes",
        location: "Noida",
        rating: 5,
        highlight: "149,000+ Reach • 4.2x ROAS",
        verified: true,
        content: "Most marketing agencies take weeks just to send an invoice. Ravi had our custom landing page ready in 48 hours and the Meta ads running by day 3. We reached over 149k local customers and our WhatsApp has been buzzing with direct interior inquiries daily.",
        date: "September 2024",
    },
    {
        name: "Aman Parjapati",
        role: "Managing Director",
        company: "Sky Gold Jewellers",
        location: "Delhi",
        rating: 5,
        highlight: "+200% Festive Inquiries",
        verified: true,
        content: "We were skeptical about digital ads for fine jewellery, but Ravi and his team understood the exact audience to target in Delhi NCR. During the festive season, our footfalls and WhatsApp inquiries jumped by over 200%. Highly recommended!",
        date: "August 2024",
    },
    {
        name: "Ajay Yadav",
        role: "Brand Director",
        company: "Yadav Properties & Infra",
        location: "Greater Noida",
        rating: 5,
        highlight: "40% Lower Cost Per Lead",
        verified: true,
        content: "Most marketing agencies just burn your ad budget and give you excuses about 'brand awareness'. Arvian Marketing delivered real, qualified buyers who visited our properties in person. The cost per lead dropped by 40% in month two.",
        date: "November 2024",
    },
    {
        name: "Rohit Malhotra",
        role: "Co-Founder",
        company: "FitLife Wellness Studio",
        location: "Noida Sector 62",
        rating: 5,
        highlight: "95+ Monthly Memberships Sold",
        verified: true,
        content: "Our fitness studio struggled with low walk-in rates during monsoon. Ravi launched localized Instagram campaigns targeting high-density societies around our studio with an irresistible trial pass. Within 3 weeks we hit full capacity for evening sessions.",
        date: "July 2024",
    },
    {
        name: "Pooja Verma",
        role: "Creative Head",
        company: "Vivid Drapes & Furnishings",
        location: "Faridabad & Delhi",
        rating: 5,
        highlight: "3.8x High-Ticket Sales ROAS",
        verified: true,
        content: "Working directly with Ravi on WhatsApp makes everything so effortless. He responds quickly, tests new creatives regularly, and cares about our actual sales figures rather than vanity metrics. Our home furnishing orders doubled in two months.",
        date: "December 2024",
    },
];

export default function ReviewsPage() {
    return (
        <main className="min-h-screen bg-[#F6F8FC] text-[#0f131a] selection:bg-[#dbe1ff] selection:text-[#001539] relative font-sans">
            <Background />
            <Navbar />

            {/* Header */}
            <div className="pt-36 pb-12 md:pt-44 md:pb-16 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <FadeIn>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbe1ff] text-[#001539] text-xs font-bold uppercase tracking-wider mb-6">
                        <Star className="w-3.5 h-3.5 fill-[#0051d5] text-[#0051d5]" />
                        AUTHENTIC CLIENT EXPERIENCES
                    </div>
                    <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0f131a] mb-6">
                        What Business Founders Say <br className="hidden sm:inline" />
                        <span className="text-[#0051d5]">About Partnering With Us.</span>
                    </h1>
                    <p className="font-sans text-base sm:text-xl text-[#546a92] max-w-2xl mx-auto leading-relaxed">
                        Don&apos;t take our word for it. Hear directly from real business owners across Delhi NCR who trust Arvian Marketing to scale their customer acquisition.
                    </p>
                </FadeIn>

                {/* Aggregate Rating Banner */}
                <div className="mt-12 max-w-2xl mx-auto p-6 rounded-2xl bg-white border border-[#E5EAF2] shadow-sm flex flex-col sm:flex-row items-center justify-around gap-6">
                    <div className="text-center sm:text-left">
                        <div className="font-heading text-4xl font-black text-[#001539]">4.9 / 5.0</div>
                        <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-500 my-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                            ))}
                        </div>
                        <div className="text-xs text-[#546a92] font-semibold">Overall Client Satisfaction Score</div>
                    </div>
                    <div className="hidden sm:block w-px h-16 bg-[#E5EAF2]" />
                    <div className="text-center sm:text-left">
                        <div className="font-heading text-4xl font-black text-[#0051d5]">100%</div>
                        <div className="text-xs text-[#001539] font-bold mt-1">Verified Client Campaigns</div>
                        <div className="text-xs text-[#747780]">Delhi NCR, Noida, &amp; Pan-India</div>
                    </div>
                </div>
            </div>

            {/* Reviews Grid */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allReviews.map((item, idx) => (
                        <FadeIn key={idx} delay={idx * 0.08}>
                            <div className="p-8 rounded-3xl bg-white border border-[#E5EAF2] hover:border-[#0051d5] hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group">
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
                                                Verified
                                            </span>
                                        )}
                                    </div>

                                    <div className="inline-block px-3 py-1 rounded-md bg-[#dbe1ff] text-[#001539] text-xs font-bold mb-4">
                                        ⚡ {item.highlight}
                                    </div>

                                    <p className="font-sans text-sm text-[#001539] leading-relaxed mb-6 italic">
                                        &ldquo;{item.content}&rdquo;
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-[#E5EAF2] flex items-center gap-3">
                                    <div className="w-11 h-11 rounded-full bg-[#001539] text-white flex items-center justify-center font-bold text-sm shrink-0">
                                        {item.name.split(" ").map(n => n[0]).join("")}
                                    </div>
                                    <div>
                                        <div className="font-heading font-bold text-sm text-[#0f131a]">
                                            {item.name}
                                        </div>
                                        <div className="text-xs text-[#546a92]">
                                            {item.role}, {item.company}
                                        </div>
                                        <div className="text-[11px] text-[#747780]">
                                            {item.location} • {item.date}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* Bottom Reassurance Banner */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#102a56] text-white mt-12">
                <div className="max-w-[900px] mx-auto text-center">
                    <FadeIn direction="up">
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-4">
                            Ready to Write Your Own Success Story?
                        </h2>
                        <p className="font-sans text-base text-[#b0c6fc] mb-8 max-w-xl mx-auto leading-relaxed">
                            Join dozens of successful business owners in Noida and Delhi NCR who partner with us for predictable customer inquiries.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="https://wa.me/919711190678?text=Hi%20Ravi%2C%20I%20saw%20your%20client%20reviews%20and%20want%20to%20discuss%20growing%20my%20business."
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
                                <span>Get Free Growth Plan</span>
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
