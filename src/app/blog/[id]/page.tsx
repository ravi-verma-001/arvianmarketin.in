import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { format } from "date-fns";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Background } from "@/components/ui/Background";
import { FadeIn } from "@/components/ui/MotionPrimitives";
import { BlogPost } from "@/types/blog";
import {
    Calendar, User, ArrowLeft, Clock, MessageCircle,
    CheckCircle2, Share2, Sparkles, ArrowRight, BookOpen
} from "lucide-react";
import fs from "fs/promises";
import path from "path";

const defaultImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop";

async function getAllBlogs(): Promise<BlogPost[]> {
    try {
        const filePath = path.join(process.cwd(), "src", "data", "blogs.json");
        const fileContents = await fs.readFile(filePath, "utf8");
        return JSON.parse(fileContents);
    } catch (error) {
        return [];
    }
}

async function getBlog(id: string): Promise<BlogPost | null> {
    const blogs = await getAllBlogs();
    return blogs.find((b) => b.id === id) || null;
}

export async function generateStaticParams() {
    const blogs = await getAllBlogs();
    if (blogs.length === 0) {
        return [{ id: "placeholder" }];
    }
    return blogs.map((blog) => ({
        id: blog.id,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const blog = await getBlog(id);

    if (!blog) {
        return {
            title: "Blog Not Found | Arvian Marketing",
        };
    }

    const cleanDescription = blog.content.substring(0, 160).replace(/###.*?\n/g, "");

    return {
        title: `${blog.title} | Arvian Marketing Blog`,
        description: cleanDescription,
        alternates: {
            canonical: `/blog/${id}`,
        },
        openGraph: {
            title: `${blog.title} | Arvian Marketing`,
            description: cleanDescription,
            images: [
                {
                    url: blog.coverImage || defaultImage,
                },
            ],
            type: "article",
        },
    };
}

export default async function BlogDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const blog = await getBlog(id);

    if (!blog) {
        notFound();
    }

    const allBlogs = await getAllBlogs();
    const relatedBlogs = allBlogs.filter((b) => b.id !== blog.id).slice(0, 3);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": blog.title,
        "image": [blog.coverImage || defaultImage],
        "datePublished": blog.createdAt,
        "dateModified": blog.updatedAt || blog.createdAt,
        "author": {
            "@type": "Person",
            "name": blog.author || "Ravi Verma",
            "url": "https://arvianmarketing.in/about",
        },
        "publisher": {
            "@type": "Organization",
            "name": "Arvian Marketing",
            "logo": {
                "@type": "ImageObject",
                "url": "https://arvianmarketing.in/arvianlogo.webp",
            },
        },
        "description": blog.content.substring(0, 160).replace(/###.*?\n/g, ""),
    };

    let formattedDate = "Recent";
    try {
        if (blog.createdAt) {
            formattedDate = format(new Date(blog.createdAt), "MMMM dd, yyyy");
        }
    } catch (_) {
        formattedDate = "Recent";
    }

    return (
        <main className="min-h-screen bg-[#F6F8FC] text-[#0f131a] selection:bg-[#dbe1ff] selection:text-[#001539] relative font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Background />
            <Navbar />

            <article className="pt-36 pb-20 md:pt-44 max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Back Link */}
                <FadeIn>
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-xs font-bold text-[#0051d5] hover:text-[#001539] mb-8 transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span>Back to All Articles</span>
                    </Link>

                    {/* Article Header */}
                    <header className="mb-10">
                        <div className="flex flex-wrap items-center gap-3 text-xs text-[#747780] mb-5">
                            <span className="font-bold text-[#0051d5] bg-[#eff4ff] px-3 py-1 rounded-full text-xs">
                                {blog.category || "Growth Playbook"}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5 text-[#546a92]" />
                                {formattedDate}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-md border border-[#E5EAF2] font-semibold text-[11px] text-[#001539]">
                                <Clock className="w-3 h-3 text-[#0051d5]" />
                                {blog.readTime || "5 min read"}
                            </span>
                        </div>

                        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#001539] mb-6 leading-[1.2] tracking-tight">
                            {blog.title}
                        </h1>

                        <div className="flex items-center gap-3 pt-4 border-t border-[#E5EAF2]">
                            <div className="w-10 h-10 rounded-full bg-[#001539] text-white flex items-center justify-center font-bold text-sm">
                                {(blog.author || "R").charAt(0)}
                            </div>
                            <div>
                                <div className="text-xs font-bold text-[#001539]">
                                    {blog.author || "Ravi Verma"}
                                </div>
                                <div className="text-[11px] text-[#747780]">
                                    Performance Marketing Lead at Arvian Marketing
                                </div>
                            </div>
                        </div>
                    </header>
                </FadeIn>

                {/* Hero Cover Image */}
                <FadeIn delay={0.1}>
                    <div className="w-full h-[320px] sm:h-[450px] rounded-3xl overflow-hidden mb-12 shadow-md border border-[#E5EAF2] relative bg-[#eef1f6]">
                        <img
                            src={blog.coverImage || defaultImage}
                            alt={blog.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </FadeIn>

                {/* Main Article Body */}
                <FadeIn delay={0.15}>
                    <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-14 border border-[#E5EAF2] shadow-sm mb-12">
                        <div className="prose prose-slate max-w-none text-[#0f131a] leading-relaxed font-sans space-y-6">
                            {blog.content.split("\n\n").map((block, idx) => {
                                if (block.startsWith("### ")) {
                                    return (
                                        <h3
                                            key={idx}
                                            className="font-heading text-2xl font-bold text-[#001539] pt-6 pb-2 border-b border-[#E5EAF2] mt-8"
                                        >
                                            {block.replace("### ", "")}
                                        </h3>
                                    );
                                }
                                if (block.startsWith("## ")) {
                                    return (
                                        <h2
                                            key={idx}
                                            className="font-heading text-2xl sm:text-3xl font-extrabold text-[#001539] pt-8 pb-3 border-b border-[#E5EAF2] mt-10"
                                        >
                                            {block.replace("## ", "")}
                                        </h2>
                                    );
                                }
                                return (
                                    <p key={idx} className="text-base sm:text-lg text-[#334155] leading-relaxed">
                                        {block}
                                    </p>
                                );
                            })}
                        </div>

                        {/* Practical Key Takeaways Callout */}
                        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#eff4ff] border border-[#dbe1ff]">
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0051d5] mb-3">
                                <Sparkles className="w-4 h-4" />
                                <span>Core Takeaway for Founders</span>
                            </div>
                            <h4 className="font-heading text-lg font-bold text-[#001539] mb-2">
                                Stop Guessing, Start Measuring
                            </h4>
                            <p className="font-sans text-xs sm:text-sm text-[#546a92] leading-relaxed mb-4">
                                Whether in Meta Ads or website engineering, your highest leverage comes from eliminating friction: loading under 1 second, pre-qualifying leads with structured questions, and routing verified inquiries directly into WhatsApp.
                            </p>
                            <a
                                href="https://wa.me/919711190678?text=Hi%20Ravi%2C%20I%20read%20your%20article%20and%20want%20to%20apply%20these%20insights%20to%20my%20business."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-xs font-bold text-[#0051d5] hover:text-[#001539] transition-colors"
                            >
                                <span>Discuss This Strategy with Ravi on WhatsApp &rarr;</span>
                            </a>
                        </div>
                    </div>
                </FadeIn>

                {/* Author Bio Card */}
                <FadeIn delay={0.2}>
                    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5EAF2] shadow-sm mb-16 flex flex-col sm:flex-row items-center gap-6">
                        <div className="w-16 h-16 rounded-2xl bg-[#001539] text-white flex items-center justify-center font-bold text-2xl shrink-0 shadow-md">
                            R
                        </div>
                        <div className="text-center sm:text-left">
                            <div className="font-heading font-extrabold text-base text-[#001539]">
                                Ravi Verma • Arvian Marketing
                            </div>
                            <div className="text-xs text-[#0051d5] font-semibold mb-2">
                                Performance Meta Ads Strategist &amp; Next.js Specialist
                            </div>
                            <p className="text-xs text-[#546a92] leading-relaxed">
                                Helping local businesses, clinics, and startups in Delhi NCR &amp; Noida scale their client inquiries through high-ROAS Meta ad campaigns, 1-second landing pages, and automated WhatsApp qualification loops.
                            </p>
                        </div>
                    </div>
                </FadeIn>

                {/* Related Articles */}
                {relatedBlogs.length > 0 && (
                    <FadeIn delay={0.25}>
                        <div className="pt-8 border-t border-[#E5EAF2]">
                            <h3 className="font-heading text-2xl font-extrabold text-[#001539] mb-6">
                                Recommended Reading
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {relatedBlogs.map((rel) => (
                                    <Link
                                        key={rel.id}
                                        href={`/blog/${rel.id}`}
                                        className="bg-white rounded-2xl border border-[#E5EAF2] p-5 hover:border-[#0051d5]/40 hover:shadow-lg transition-all group flex flex-col justify-between"
                                    >
                                        <div>
                                            <span className="text-[10px] font-bold text-[#0051d5] bg-[#eff4ff] px-2 py-0.5 rounded">
                                                {rel.category}
                                            </span>
                                            <h4 className="font-heading text-sm font-bold text-[#001539] mt-2 group-hover:text-[#0051d5] transition-colors line-clamp-2">
                                                {rel.title}
                                            </h4>
                                        </div>
                                        <div className="mt-4 pt-3 border-t border-[#E5EAF2] text-[11px] font-semibold text-[#546a92] flex items-center justify-between">
                                            <span>{rel.readTime || "4 min read"}</span>
                                            <ArrowRight className="w-3.5 h-3.5 text-[#0051d5] group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                )}
            </article>

            {/* Bottom Consultation CTA */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#102a56] text-white">
                <div className="max-w-[900px] mx-auto text-center">
                    <FadeIn direction="up">
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-4">
                            Ready to Turn These Ideas Into Real Revenue?
                        </h2>
                        <p className="font-sans text-base text-[#b0c6fc] mb-8 max-w-xl mx-auto leading-relaxed">
                            Stop burning money on trial-and-error marketing. Let our dedicated team engineer your landing pages and scale your Meta ads today.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="https://wa.me/919711190678?text=Hi%20Ravi%2C%20I%20read%20your%20article%20and%20want%20to%20discuss%20growing%20my%20business."
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
                                <span>Get Free Growth Audit</span>
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
