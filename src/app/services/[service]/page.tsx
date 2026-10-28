import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/ui/MotionPrimitives";
import { Background } from "@/components/ui/Background";
import { ArrowLeft, CheckCircle2, AlertTriangle, Lightbulb, ChevronDown, LucideIcon } from "lucide-react";
import {
    Instagram, Youtube, Twitter, TrendingUp, Users, Target,
    BarChart, Globe, Video, Share2, MonitorSmartphone, Search, MousePointerClick, Megaphone
} from "lucide-react";
import Link from "next/link";
import { allServicesData } from "@/data/servicesData";

const iconMap: Record<string, LucideIcon> = {
    Instagram, Youtube, Twitter, TrendingUp, Users, Target,
    BarChart, Globe, Video, Share2, MonitorSmartphone, Search, MousePointerClick, Megaphone
};

export function generateStaticParams() {
    return allServicesData.map((service) => ({
        service: service.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
    const { service } = await params;
    const serviceData = allServicesData.find(s => s.slug === service);

    if (!serviceData) {
        return {
            title: "Service Not Found",
        };
    }

    return {
        title: serviceData.seoTitle,
        description: serviceData.seoDescription,
        alternates: {
            canonical: `/services/${serviceData.slug}`,
        },
    };
}

export default async function ServiceDetail({ params }: { params: Promise<{ service: string }> }) {
    const { service } = await params;
    const serviceData = allServicesData.find(s => s.slug === service);

    if (!serviceData) {
        notFound();
    }

    const Icon = iconMap[serviceData.iconName] || TrendingUp;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "serviceType": serviceData.title,
                "provider": {
                    "@type": "LocalBusiness",
                    "name": "Arvian Marketing",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Noida",
                        "addressRegion": "Uttar Pradesh",
                        "addressCountry": "IN"
                    }
                },
                "areaServed": {
                    "@type": "City",
                    "name": "Delhi NCR"
                },
                "description": serviceData.seoDescription
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://arvianmarketing.in/" },
                    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://arvianmarketing.in/services" },
                    { "@type": "ListItem", "position": 3, "name": serviceData.title, "item": `https://arvianmarketing.in/services/${serviceData.slug}` }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": serviceData.faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                    }
                }))
            }
        ]
    };

    return (
        <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-primary/30 relative">
            {/* Extended JSON-LD Schema (Services, Breadcrumbs, FAQ) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Background />
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-4 relative z-10 max-w-6xl">
                <FadeIn>
                    <Link
                        href="/services/"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 mb-12 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Services
                    </Link>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Main Content Area */}
                    <article className="lg:col-span-8">
                        <FadeIn direction="up">
                            <div className="flex items-center gap-4 mb-8 relative">
                                <div className="p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20 shadow-[0_0_30px_rgba(37,99,235,0.1)]">
                                    <Icon className="w-10 h-10 text-blue-500" strokeWidth={2} />
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading">{serviceData.title}</h1>
                            </div>

                            {/* Hero Paragraph with Bold Keywords */}
                            <div className="prose prose-invert prose-lg max-w-none mb-12">
                                <p className="text-gray-300 leading-relaxed text-xl" dangerouslySetInnerHTML={{ __html: serviceData.heroDescription.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
                            </div>
                        </FadeIn>

                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                            {/* Pain Points Section */}
                            <FadeIn direction="up" delay={0.1}>
                                <div className="bg-red-500/5 border border-red-500/10 rounded-3xl p-8 h-full">
                                    <div className="flex items-center gap-3 mb-6">
                                        <AlertTriangle className="w-6 h-6 text-red-500" />
                                        <h2 className="text-2xl font-bold text-white">The Challenge</h2>
                                    </div>
                                    <ul className="space-y-4">
                                        {serviceData.painPoints.map((point, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-400">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500/50 shrink-0" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </FadeIn>

                            {/* Benefits Section */}
                            <FadeIn direction="up" delay={0.2}>
                                <div className="bg-green-500/5 border border-green-500/10 rounded-3xl p-8 h-full">
                                    <div className="flex items-center gap-3 mb-6">
                                        <Lightbulb className="w-6 h-6 text-green-500" />
                                        <h2 className="text-2xl font-bold text-white">The Solution</h2>
                                    </div>
                                    <ul className="space-y-4">
                                        {serviceData.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-300">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                <span>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Detailed H2/H3 Content Sections */}
                        {serviceData.detailedContent.map((section, idx) => (
                            <FadeIn key={idx} direction="up" delay={0.1}>
                                <div className="mb-12">
                                    <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">{section.heading}</h2>
                                    <div className="space-y-5">
                                        {section.paragraphs.map((p, i) => (
                                            <p key={i} className="text-gray-400 text-lg leading-relaxed">
                                                {p}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>
                        ))}

                        {/* FAQ Section */}
                        <FadeIn direction="up">
                            <div className="mt-16 mb-8">
                                <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {serviceData.faqs.map((faq, idx) => (
                                        <details key={idx} className="group bg-[#161618] border border-white/5 rounded-2xl open:bg-white/5 transition-colors cursor-pointer">
                                            <summary className="flex items-center justify-between p-6 font-semibold text-lg text-white">
                                                {faq.question}
                                                <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                                            </summary>
                                            <div className="px-6 pb-6 text-gray-400 text-base leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    </article>

                    {/* Sidebar / Deliverables / CTA Area */}
                    <aside className="lg:col-span-4 relative">
                        <div className="sticky top-32 space-y-8">
                            {/* Deliverables Box */}
                            <FadeIn direction="up" delay={0.3}>
                                <div className="bg-[#161618] rounded-3xl p-8 border border-white/5 relative overflow-hidden shadow-2xl">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-[50px] pointer-events-none" />
                                    <h3 className="text-2xl font-bold mb-6 text-white relative z-10">Deliverables</h3>
                                    <ul className="space-y-4 relative z-10">
                                        {serviceData.deliverables.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className="mt-1 bg-blue-500/10 p-1 rounded-full">
                                                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" strokeWidth={2.5} />
                                                </div>
                                                <span className="text-gray-300 text-base">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </FadeIn>

                            {/* CTA Box */}
                            <FadeIn direction="up" delay={0.4}>
                                <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-3xl p-[2px] shadow-2xl">
                                    <div className="bg-[#111] rounded-[22px] p-8 flex flex-col justify-center text-center relative overflow-hidden">
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 rounded-full blur-[60px] pointer-events-none" />
                                        <h3 className="text-2xl font-bold mb-4 relative z-10 text-white">Ready to Scale?</h3>
                                        <p className="text-gray-400 mb-8 relative z-10 text-sm">
                                            Partner with Arvian Marketing and dominate your local market.
                                        </p>
                                        <Link
                                            href="/contact/"
                                            className="relative z-10 w-full inline-flex items-center justify-center h-12 rounded-xl bg-[#2563EB] text-white font-bold text-base hover:scale-105 transition-transform shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                                        >
                                            Get a Free Audit
                                        </Link>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </aside>
                </div>
            </div>

            <Footer />
        </main>
    );
}
