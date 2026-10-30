import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Background } from "@/components/ui/Background";
import { FadeIn } from "@/components/ui/MotionPrimitives";
import { FaqSection } from "@/components/FaqSection";
import { HelpCircle, MessageCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Frequently Asked Questions (FAQ) | Arvian Marketing",
    description: "Get answers to common questions regarding Meta Ads pricing, budgets, landing page speed, campaign launch timelines, and client onboarding at Arvian Marketing.",
    alternates: {
        canonical: "/faq",
    },
    openGraph: {
        title: "Frequently Asked Questions | Arvian Marketing",
        description: "Clear answers to your questions about Meta Ads, Next.js landing pages, pricing, and guaranteed delivery times.",
        url: "https://arvianmarketing.in/faq",
    },
};

export default function FaqPage() {
    return (
        <main className="min-h-screen bg-[#F6F8FC] text-[#0f131a] selection:bg-[#dbe1ff] selection:text-[#001539] relative font-sans">
            <Background />
            <Navbar />

            {/* Header */}
            <div className="pt-36 pb-12 md:pt-44 md:pb-16 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <FadeIn>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbe1ff] text-[#001539] text-xs font-bold uppercase tracking-wider mb-6">
                        <HelpCircle className="w-3.5 h-3.5 text-[#0051d5]" />
                        HELP &amp; CLARITY
                    </div>
                    <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0f131a] mb-6">
                        Frequently Asked Questions
                    </h1>
                    <p className="font-sans text-base sm:text-xl text-[#546a92] max-w-2xl mx-auto leading-relaxed">
                        Got questions before getting started? Find clear, straightforward answers about our Meta Ads execution, pricing plans, and 48-hour delivery timeline.
                    </p>
                </FadeIn>
            </div>

            {/* Interactive FAQ Component */}
            <FaqSection />

            {/* Direct Consultation Banner */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#102a56] text-white">
                <div className="max-w-[900px] mx-auto text-center">
                    <FadeIn direction="up">
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-4">
                            Still Have an Unanswered Question?
                        </h2>
                        <p className="font-sans text-base text-[#b0c6fc] mb-8 max-w-xl mx-auto leading-relaxed">
                            No chatbots or generic call centers. Send a direct WhatsApp message to Ravi and get an honest answer within minutes.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="https://wa.me/919711190678?text=Hi%20Ravi%2C%20I%20have%20a%20few%20questions%20before%20getting%20started%20with%20Meta%20Ads."
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
                                <span>Go to Contact Form</span>
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
