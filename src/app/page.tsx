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
    title: "Meta Ads (Facebook & Instagram)",
    slug: "meta-ads-and-google-ads",
    description: "Stop wasting money boosting random posts. We craft scroll-stopping ad creatives, test audience hooks, and deliver profitable customer inquiries directly to your WhatsApp or phone.",
    iconName: "Target",
    categoryTag: "High-ROAS Paid Growth",
  },
  {
    title: "Custom Website Design",
    slug: "website-designing",
    description: "Bespoke websites built on Next.js that load in under 1 second. Engineered for modern aesthetics, smooth mobile responsiveness, and turning casual visitors into eager buyers.",
    iconName: "MonitorSmartphone",
    categoryTag: "High-Speed Web Craft",
  },
  {
    title: "High-Converting Landing Pages",
    slug: "website-designing",
    description: "Sending paid traffic to your homepage loses 80% of sales. We build dedicated single-offer landing pages designed specifically around getting calls, appointments, and form leads.",
    iconName: "Share2",
    categoryTag: "Direct Response Funnels",
  },
  {
    title: "Local SEO & Google Business",
    slug: "website-optimization",
    description: "Rank in Google's Top 3 map pack and local search results when customers in Noida and Delhi NCR search for your services. Real, sustainable organic buyer inquiries.",
    iconName: "Search",
    categoryTag: "Organic Inquiries",
  },
  {
    title: "Social Media & Content Systems",
    slug: "social-media-management",
    description: "Build genuine brand authority without cheesy Canva templates. We create consistent, high-retention reels, carousel posts, and engaging content that makes your brand stand out.",
    iconName: "Megaphone",
    categoryTag: "Brand Authority & Reach",
  },
  {
    title: "1-on-1 Growth Consultation",
    slug: "content-strategy-and-creation",
    description: "Not sure where your funnel is leaking? Sit down with our strategists to review your current website, pricing, ads, and conversion bottleneck. Actionable roadmap, zero fluff.",
    iconName: "Lightbulb",
    categoryTag: "Founder Strategy Session",
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
                CORE SERVICES
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-[#0f131a] leading-tight">
                Everything You Need to Get Customers Online.
              </h2>
            </div>
            <p className="font-sans text-base text-[#546a92] max-w-md">
              From building high-speed website infrastructure to running targeted Meta ad campaigns that put cash in your bank.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} className="h-full" />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Service Spotlight: The 3-Step Acquisition Formula */}
      <IntegratedSystemSection />

      {/* Why Choose Us: Honest Comparison */}
      <WhyChooseUs />

      {/* Process Section */}
      <ProcessSection />

      {/* Portfolio / Selected Work */}
      <PortfolioSection />

      {/* Industries We Serve */}
      <IndustriesSection />

      {/* Client Reviews */}
      <Testimonials />

      {/* About Us Story */}
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
