import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Arvian Marketing | Digital Marketing Agency in Noida",
    description: "Get in touch with Arvian Marketing, the top Website Development and SEO Company in Delhi NCR. We are ready to scale your local business.",
    alternates: {
        canonical: "/contact",
    },
    openGraph: {
        title: "Contact Arvian Marketing | Web Design & SEO in Delhi NCR",
        description: "Get in touch with Arvian Marketing, the top Website Development and SEO Company in Delhi NCR.",
        url: "https://arvianmarketing.in/contact",
    }
};

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Background } from "@/components/ui/Background";
import { FadeIn } from "@/components/ui/MotionPrimitives";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { ContactSection } from "@/components/ContactSection";

export default function Contact() {
    return (
        <main className="min-h-screen bg-[#F6F8FC] text-[#0f131a] selection:bg-[#dbe1ff] selection:text-[#001539] relative font-sans">
            <Background />
            <Navbar />

            {/* Page Header */}
            <div className="pt-36 pb-12 md:pt-44 md:pb-16 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <FadeIn>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbe1ff] text-[#001539] text-xs font-bold uppercase tracking-wider mb-6">
                        GET IN TOUCH
                    </div>
                    <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0f131a] mb-6">
                        Contact Our Digital Experts
                    </h1>
                    <p className="font-sans text-base sm:text-xl text-[#546a92] max-w-2xl mx-auto leading-relaxed">
                        Ready to scale your brand in Delhi NCR? Fill out the brief below or contact us directly via WhatsApp. Our strategists will respond within 24 hours.
                    </p>
                </FadeIn>
            </div>

            {/* Interactive Contact & Consultation Component */}
            <ContactSection />

            {/* Office & Direct Presence Cards */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E5EAF2]">
                <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-[#f8f9ff] rounded-xl border border-[#E5EAF2] flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white border border-[#E5EAF2] flex items-center justify-center text-[#0051d5] shrink-0 shadow-sm">
                            <Mail className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="font-heading font-bold text-base text-[#001539] mb-1">Email Inquiries</div>
                            <div className="text-xs sm:text-sm text-[#546a92]">contact@arvianmarketing.com</div>
                            <div className="text-xs text-[#747780] mt-1">24h turnaround time</div>
                        </div>
                    </div>

                    <div className="p-6 bg-[#f8f9ff] rounded-xl border border-[#E5EAF2] flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white border border-[#E5EAF2] flex items-center justify-center text-[#0051d5] shrink-0 shadow-sm">
                            <Phone className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="font-heading font-bold text-base text-[#001539] mb-1">Direct Calling</div>
                            <div className="text-xs sm:text-sm text-[#546a92]">+91 89204 42422</div>
                            <div className="text-xs text-[#747780] mt-1">Mon-Sat, 9am - 7pm IST</div>
                        </div>
                    </div>

                    <div className="p-6 bg-[#f8f9ff] rounded-xl border border-[#E5EAF2] flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white border border-[#E5EAF2] flex items-center justify-center text-[#0051d5] shrink-0 shadow-sm">
                            <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="font-heading font-bold text-base text-[#001539] mb-1">Agency Hub</div>
                            <div className="text-xs sm:text-sm text-[#546a92]">Noida, Uttar Pradesh</div>
                            <div className="text-xs text-[#747780] mt-1">Delhi NCR, India 201301</div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
