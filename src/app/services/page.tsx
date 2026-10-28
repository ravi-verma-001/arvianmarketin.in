import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Digital Marketing Services | Arvian Marketing",
    description: "Explore our premium Web Design, SEO, Meta Ads, and Social Media Marketing services in Noida and Delhi NCR. Scale your brand today!",
    alternates: {
        canonical: "/services/",
    },
    openGraph: {
        title: "Our Digital Marketing Services | Arvian Marketing",
        description: "Explore our premium Web Design, SEO, Meta Ads, and Social Media Marketing services in Noida and Delhi NCR. Scale your brand today!",
        url: "https://arvianmarketing.in/services",
    }
};

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { FadeIn } from "@/components/ui/MotionPrimitives";
import { Background } from "@/components/ui/Background";
import { allServicesData } from "@/data/servicesData";
import { ArrowRight } from "lucide-react";

export default function Services() {
    return (
        <main className="min-h-screen bg-[#F6F8FC] text-[#0f131a] selection:bg-[#dbe1ff] selection:text-[#001539] relative font-sans">
            <Background />
            <Navbar />

            <div className="pt-36 pb-20 md:pt-44 md:pb-24 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <FadeIn>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbe1ff] text-[#001539] text-xs font-bold uppercase tracking-wider mb-6">
                        SERVICE PORTFOLIO
                    </div>
                    <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0f131a] mb-6">
                        Strategic Web &amp; <span className="text-[#0051d5]">Performance Marketing</span> Solutions
                    </h1>
                    <p className="font-sans text-base sm:text-xl text-[#546a92] max-w-3xl mx-auto mb-16 leading-relaxed">
                        We offer a full suite of website development, SEO, and social media advertising services engineered to scale your commercial pipeline across Delhi NCR and India.
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    {allServicesData.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            slug={service.slug}
                            description={service.seoDescription}
                            iconName={service.iconName}
                            index={index}
                            className="h-full"
                        />
                    ))}
                </div>
            </div>

            {/* Bottom Custom Package CTA */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#102a56] text-white">
                <div className="max-w-[900px] mx-auto text-center">
                    <FadeIn direction="up">
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-4">
                            Need a Tailored Growth Engagement?
                        </h2>
                        <p className="font-sans text-base text-[#b0c6fc] mb-8 max-w-xl mx-auto leading-relaxed">
                            Every brand's customer journey is distinct. Schedule a consultation for a customized roadmap that fits your specific business goals and timeline.
                        </p>
                        <a
                            href="/contact/"
                            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-white text-[#001539] font-bold hover:bg-[#dbe1ff] transition-all shadow-md"
                        >
                            <span>Request Custom Scope</span>
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </FadeIn>
                </div>
            </section>

            <Footer />
        </main>
    );
}
