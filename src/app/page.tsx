import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { IntegratedSystemSection } from "@/components/IntegratedSystemSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ProcessSection } from "@/components/ProcessSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { Testimonials } from "@/components/Testimonials";
import { AboutSection } from "@/components/AboutSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Background } from "@/components/ui/Background";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const services = [
  {
    title: "Meta Ads Management",
    slug: "meta-ads-and-google-ads",
    description: "Reach relevant audiences through strategic Facebook and Instagram advertising, creative testing, campaign optimization, and performance-focused planning.",
    iconName: "Target",
    categoryTag: "01 / PAID MEDIA",
  },
  {
    title: "Website Design & Development",
    slug: "website-designing",
    description: "Build a professional online presence with modern, responsive websites designed around your business, your customers, and your commercial goals.",
    iconName: "MonitorSmartphone",
    categoryTag: "02 / PLATFORM ARCHITECTURE",
  },
  {
    title: "Landing Page Design",
    slug: "website-designing",
    description: "Present your offer clearly through focused landing pages designed to encourage enquiries, registrations, or sales without cognitive clutter.",
    iconName: "Share2",
    categoryTag: "03 / CONVERSION DESIGN",
  },
  {
    title: "SEO Services",
    slug: "website-optimization",
    description: "Improve your website's search visibility through structured content, on-page optimization, technical foundations, and practical SEO improvements.",
    iconName: "Search",
    categoryTag: "04 / ORGANIC VISIBILITY",
  },
  {
    title: "Social Media Management",
    slug: "social-media-management",
    description: "Build a strong community, increase followers, and drive engagement across all your social platform channels.",
    iconName: "Megaphone",
    categoryTag: "05 / COMMUNITY & REACH",
  },
  {
    title: "Strategy & Consultation",
    slug: "content-strategy-and-creation",
    description: "Get personalized digital roadmaps and expert guidance to navigate and conquer your overall market landscape.",
    iconName: "Lightbulb",
    categoryTag: "06 / STRATEGIC ADVISORY",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F6F8FC] text-[#0f131a] selection:bg-[#dbe1ff] selection:text-[#001539] relative overflow-x-hidden font-sans">
      <Background />
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F6F8FC] border-b border-[#E5EAF2]" id="services">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbe1ff] text-[#001539] text-xs uppercase tracking-wider mb-4 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0051d5]"></span>
                WHAT WE DO
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-[#0f131a] leading-tight">
                Digital Solutions for Your Next Stage of Growth.
              </h2>
            </div>
            <p className="font-sans text-base text-[#546a92] max-w-md">
              From building your digital foundation to reaching the right audience, we help bring your business goals into focus across Delhi NCR.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} className="h-full" />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Service Spotlight: The Integrated System */}
      <IntegratedSystemSection />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Process Section */}
      <ProcessSection />

      {/* Portfolio / Selected Work */}
      <PortfolioSection />

      {/* Industries We Lead */}
      <IndustriesSection />

      {/* Testimonials & Partnership Standard */}
      <Testimonials />

      {/* About Us */}
      <AboutSection />

      {/* FAQ Accordion */}
      <FaqSection />

      {/* Final Conversion & Contact Form */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
