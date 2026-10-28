import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Background } from "@/components/ui/Background";
import { FadeIn } from "@/components/ui/MotionPrimitives";
import { BlogPost } from "@/types/blog";
import { format } from "date-fns";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";

import fs from "fs/promises";
import path from "path";

// Dummy image fallback
const defaultImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop";

// Utility to read a specific blog from the local file
async function getBlog(id: string): Promise<BlogPost | null> {
    try {
        const filePath = path.join(process.cwd(), "src", "data", "blogs.json");
        const fileContents = await fs.readFile(filePath, "utf8");
        const blogs: BlogPost[] = JSON.parse(fileContents);
        const post = blogs.find(b => b.id === id);
        
        if (!post) return null;
        
        return post;
    } catch (error) {
        console.error("Error fetching blog from local file:", error);
        return null;
    }
}


// Generate static params for static export
export async function generateStaticParams() {
    try {
        const filePath = path.join(process.cwd(), "src", "data", "blogs.json");
        const fileContents = await fs.readFile(filePath, "utf8");
        const blogs: BlogPost[] = JSON.parse(fileContents);
        if (blogs.length === 0) {
            // Return a placeholder fallback to satisfy Next.js static export check
            return [{ id: "placeholder" }];
        }
        return blogs.map((blog) => ({
            id: blog.id,
        }));
    } catch (error) {
        console.error("Error generating static params for blogs:", error);
        return [{ id: "placeholder" }];
    }
}

// Dynamically generate Server-side Metadata
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const blog = await getBlog(id);

    if (!blog) {
        return {
            title: "Blog Not Found | Arvian Marketing",
        };
    }

    const cleanDescription = blog.content.substring(0, 160);

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
                }
            ],
            type: "article",
        }
    };
}

// Ensure the page is entirely server-rendered
export default async function BlogDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const blog = await getBlog(id);

    if (!blog) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": blog.title,
        "image": [
            blog.coverImage || defaultImage
        ],
        "datePublished": blog.createdAt,
        "dateModified": blog.updatedAt,
        "author": {
            "@type": "Organization",
            "name": blog.author || "Arvian Marketing",
            "url": "https://arvianmarketing.in"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Arvian Marketing",
            "logo": {
                "@type": "ImageObject",
                "url": "https://arvianmarketing.in/arvianlogo.webp"
            }
        },
        "description": blog.content.substring(0, 160)
    };

    return (
        <main className="min-h-screen text-foreground selection:bg-primary/30 relative bg-[#0A0A0A]">
            {/* Server-Side JSON-LD Injection */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Background />
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-4 relative z-10 max-w-4xl">
                <FadeIn>
                    <Link
                        href="/blog/"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to all posts
                    </Link>

                    <header className="mb-10">
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                            <span className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                                <Calendar className="w-4 h-4 text-blue-500" />
                                {format(new Date(blog.createdAt), 'MMMM dd, yyyy')}
                            </span>
                            <span className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                                <User className="w-4 h-4 text-blue-500" />
                                {blog.author || "Arvian Marketing Team"}
                            </span>
                            <span className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                                <Clock className="w-4 h-4 text-blue-500" />
                                {blog.readTime || "3 min read"}
                            </span>
                             <span className="flex items-center bg-blue-500/10 text-blue-500 px-3 py-1.5 rounded-full border border-blue-500/20 font-medium">
                                {blog.category || "General"}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            {blog.title}
                        </h1>
                    </header>
                </FadeIn>

                <FadeIn delay={0.1} direction="up">
                    <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-12 shadow-2xl border border-white/10 relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                        <img
                            src={blog.coverImage || defaultImage}
                            alt={blog.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </FadeIn>

                <FadeIn delay={0.2} direction="up">
                    <div className="bg-[#161618] rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

                        <div className="prose prose-invert prose-lg max-w-none relative z-10 text-gray-300">
                            {blog.content.split('\n').map((paragraph, idx) => (
                                <p key={idx} className="mb-6 leading-relaxed text-lg">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay={0.3}>
                    <div className="mt-16 text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">Ready to elevate your own brand?</h3>
                        <Link
                            href="/contact/"
                            className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-[#2563EB] text-white font-bold text-lg transition-transform hover:scale-105 shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)]"
                        >
                            Work with Arvian Marketing
                        </Link>
                    </div>
                </FadeIn>
            </div>

            <Footer />
        </main>
    );
}
