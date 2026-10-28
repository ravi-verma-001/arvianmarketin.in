import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Background } from "@/components/ui/Background";
import { FadeIn } from "@/components/ui/MotionPrimitives";
import { Target, Eye, CheckCircle2, Users, Briefcase, HeartHandshake, ShieldCheck, TrendingUp, MonitorSmartphone, Trophy, Search, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About Us | Top Web Design & SEO Agency in Delhi NCR",
    description: "Learn about Arvian Marketing, the premier Web Design & Digital Marketing Agency in Noida. We specialize in scaling local business. Contact our team!",
    alternates: {
        canonical: "/about",
    },
    openGraph: {
        title: "About Arvian Marketing | Top Web Design & SEO Agency",
        description: "Grow your online presence with Arvian Marketing. We provide premier Web Design, Ads, and SEO services in Delhi NCR and Noida.",
        url: "https://arvianmarketing.in/about",
    }
};

export default function About() {
    return (
        <main className="min-h-screen bg-[#F6F8FC] text-[#0f131a] selection:bg-[#dbe1ff] selection:text-[#001539] relative font-sans">
            <Background />
            <Navbar />

            {/* Hero Section */}
            <section className="pt-36 pb-20 md:pt-44 md:pb-24 relative overflow-hidden border-b border-[#E5EAF2]">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <FadeIn>
                        <div className="text-center max-w-4xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbe1ff] text-[#001539] text-xs font-bold uppercase tracking-wider mb-6">
                                ABOUT ARVIAN MARKETING
                            </div>
                            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0f131a] mb-6 leading-tight">
                                Performance Marketing &amp; Strategic <br className="hidden sm:inline" />
                                <span className="text-[#0051d5]">Web Development in Noida</span>
                            </h1>
                            <p className="font-sans text-base sm:text-xl text-[#546a92] leading-relaxed max-w-3xl mx-auto">
                                We turn ambitious businesses into digital leaders through conversion-engineered websites, disciplined Meta advertising, and transparent commercial clarity.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Who We Are & Mission/Vision */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E5EAF2]">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <FadeIn direction="up" className="lg:col-span-7">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eff4ff] text-[#0051d5] text-xs font-bold uppercase tracking-wider mb-4">
                                    WHO WE ARE
                                </div>
                                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#001539] mb-6 leading-tight">
                                    A Dedicated Growth Partner for Modern Businesses
                                </h2>
                                <div className="font-sans text-sm sm:text-base text-[#546a92] leading-relaxed space-y-4">
                                    <p>
                                        Welcome to <strong>Arvian Marketing</strong>, a premier website design agency and professional performance marketing partner dedicated to helping startups, established SMEs, and local entrepreneurs thrive in today's competitive landscape. Based in Noida, we deliver scalable, results-driven solutions that turn traffic into verified commercial revenue.
                                    </p>
                                    <p>
                                        In today's marketplace, a basic template website is not enough. You need high page speed, clear value propositions, intuitive UX, and targeted campaigns that engage real buyers. We bring seasoned designers, technical developers, and campaign strategists who understand how to elevate your brand above the noise.
                                    </p>
                                    <p>
                                        Our working commitment is simple: your business metrics are our priority. We treat your digital channels as core business infrastructure, ensuring every rupee of ad spend and every line of code delivers lasting value.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        <div className="lg:col-span-5 grid grid-cols-1 gap-6">
                            {/* Mission */}
                            <FadeIn delay={0.1} direction="up">
                                <div className="bg-[#f8f9ff] rounded-xl border border-[#E5EAF2] p-6 sm:p-8 hover:border-[#0051d5] transition-all">
                                    <div className="w-10 h-10 rounded-lg bg-white border border-[#E5EAF2] flex items-center justify-center text-[#0051d5] mb-4 shadow-sm">
                                        <Target className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-heading text-xl font-bold text-[#001539] mb-2">Our Mission</h3>
                                    <p className="font-sans text-xs sm:text-sm text-[#546a92] leading-relaxed mb-4">
                                        To empower businesses with high-velocity digital craft, bespoke web development, and disciplined performance ads that bridge the gap between attention and revenue.
                                    </p>
                                    <ul className="space-y-2 text-xs font-semibold text-[#001539]">
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0051d5]" /> Deliver sub-second website speed</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0051d5]" /> Strategic paid advertising with measurable ROAS</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0051d5]" /> Transparent, jargon-free communication</li>
                                    </ul>
                                </div>
                            </FadeIn>

                            {/* Vision */}
                            <FadeIn delay={0.2} direction="up">
                                <div className="bg-[#f8f9ff] rounded-xl border border-[#E5EAF2] p-6 sm:p-8 hover:border-[#0051d5] transition-all">
                                    <div className="w-10 h-10 rounded-lg bg-white border border-[#E5EAF2] flex items-center justify-center text-[#0051d5] mb-4 shadow-sm">
                                        <Eye className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-heading text-xl font-bold text-[#001539] mb-2">Our Vision</h3>
                                    <p className="font-sans text-xs sm:text-sm text-[#546a92] leading-relaxed">
                                        To be recognized as the most reliable, commercially grounded digital growth firm in Delhi NCR, celebrated for engineering clarity, design elegance, and measurable business success.
                                    </p>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Services Overview */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F6F8FC] border-b border-[#E5EAF2]">
                <div className="max-w-[1200px] mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbe1ff] text-[#001539] text-xs font-bold uppercase tracking-wider mb-4">
                            CAPABILITIES
                        </div>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0f131a] mb-4">
                            Comprehensive Digital Solutions
                        </h2>
                        <p className="font-sans text-base text-[#546a92]">
                            Integrated services engineered to work together or stand alone as specialized growth engines.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Website Design & Development", desc: "Creating stunning, user-friendly websites optimized for lead generation, accessibility, and high conversion rates.", icon: MonitorSmartphone },
                            { title: "Search Engine Optimization (SEO)", desc: "Ranking your website higher on Google using data-backed, high-intent local SEO services in Noida.", icon: Search },
                            { title: "Social Media Marketing", desc: "Crafting narratives and targeted campaigns across platforms to actively contribute to your bottom line.", icon: Users },
                            { title: "Google Business Optimization", desc: "Ensuring local entrepreneurs appear in the coveted 'Local Pack' to dominate the Noida business ecosystem.", icon: Trophy },
                            { title: "Paid Advertising & Meta Ads", desc: "Targeted campaigns maximizing ROI while lowering acquisition costs for immediate visibility scaling.", icon: Target },
                            { title: "Digital Branding Strategy", desc: "Transforming startups into digital powerhouses backed by expert brand positioning and performance marketing.", icon: Briefcase },
                        ].map((item, i) => (
                            <div key={i} className="bg-white border border-[#E5EAF2] rounded-xl p-7 hover:border-[#0051d5] hover:shadow-md transition-all flex flex-col justify-between">
                                <div>
                                    <div className="w-12 h-12 rounded-lg bg-[#eff4ff] flex items-center justify-center text-[#0051d5] mb-5">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-heading text-lg font-bold text-[#001539] mb-2">{item.title}</h3>
                                    <p className="font-sans text-xs sm:text-sm text-[#546a92] leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Businesses Trust Us */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E5EAF2]">
                <div className="max-w-[1200px] mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbe1ff] text-[#001539] text-xs font-bold uppercase tracking-wider mb-4">
                            WHY US
                        </div>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0f131a] mb-4">
                            Why Businesses Trust Arvian Marketing
                        </h2>
                        <p className="font-sans text-base text-[#546a92]">
                            Choosing the right digital partner determines your online trajectory. Here is why we are the preferred choice.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: "Proven Local Expertise", desc: "As an established agency in Noida, we deeply understand local market dynamics and your immediate competitive landscape.", icon: TrendingUp },
                            { title: "Our Client-Centered Approach", desc: "We reject the one-size-fits-all model. Every strategy is carefully customized to align with your specific objectives and revenue parameters.", icon: HeartHandshake },
                            { title: "Absolute Transparency", desc: "Real trust is built on clarity. We provide clear, jargon-free analytics and regular performance reports.", icon: ShieldCheck },
                            { title: "End-to-End Solutions", desc: "From strategic wireframing to advanced local SEO implementation, we handle your entire digital presence under one roof.", icon: Rocket },
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 p-6 rounded-xl bg-[#f8f9ff] border border-[#E5EAF2]">
                                <div className="w-12 h-12 rounded-lg bg-white border border-[#E5EAF2] flex items-center justify-center text-[#0051d5] shrink-0 shadow-sm">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-heading text-lg font-bold text-[#001539] mb-1">{item.title}</h3>
                                    <p className="font-sans text-xs sm:text-sm text-[#546a92] leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA Banner */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#102a56] text-white">
                <div className="max-w-[900px] mx-auto text-center">
                    <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-4">
                        Ready to Build Your Growth Pipeline?
                    </h2>
                    <p className="font-sans text-base text-[#b0c6fc] mb-8 max-w-xl mx-auto">
                        Speak directly with our digital strategists in Noida. We will analyze your current presence and outline actionable steps.
                    </p>
                    <a
                        href="/contact/"
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#001539] font-bold rounded-lg hover:bg-[#dbe1ff] transition-all shadow-md"
                    >
                        <span>Schedule a Free Consultation</span>
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
