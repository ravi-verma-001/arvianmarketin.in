"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Background } from "@/components/ui/Background";
import { FadeIn } from "@/components/ui/MotionPrimitives";
import { RotatingSphere } from "@/components/ui/RotatingSphere";
import { BlogForm } from "@/components/blog/BlogForm";
import { BlogCard } from "@/components/blog/BlogCard";
import { AdminLogin } from "@/components/blog/AdminLogin";
import { BlogPost } from "@/types/blog";

const ADMIN_SECRET = "arvianmarketing2025";

export default function Blog() {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);

    // Check admin status on mount
    useEffect(() => {
        const stored = localStorage.getItem("adminKey");
        if (stored === ADMIN_SECRET) setIsAdmin(true);
    }, []);

    // Fetch blogs from database on mount
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch("/api/blogs");
                if (response.ok) {
                    const data = await response.json();
                    setBlogs(data);
                }
            } catch (error) {
                console.error("Failed to fetch blogs", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    // Handle new blog submission
    const handleNewBlog = async (newBlog: Omit<BlogPost, 'id' | 'createdAt'>) => {
        try {
            const response = await fetch("/api/blogs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newBlog),
            });

            if (response.ok) {
                const savedBlog = await response.json();
                setBlogs([savedBlog, ...blogs]);
            }
        } catch (error) {
            console.error("Failed to save blog", error);
        }
    };

    return (
        <main className="min-h-screen text-foreground selection:bg-primary/30 relative">
            <Background />
            <RotatingSphere />
            <Navbar />

            {/* Admin login modal — triggered by triple-clicking the heading */}
            <AdminLogin onUnlock={() => setIsAdmin(true)} />

            <div className="pt-32 pb-20 container mx-auto px-4 relative z-10">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h1
                            className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight cursor-default select-none"
                            onClick={() => {
                                // Triple-click detection is handled inside AdminLogin via its own counter;
                                // here we just call the same handler via a global event
                                const ev = new CustomEvent("adminTripleClick");
                                window.dispatchEvent(ev);
                            }}
                        >
                            Arvian Marketing – <span className="text-[#2563EB]">Blog</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Explore our latest articles, insights, and expert advice on digital growth, social media strategy, and web development.
                        </p>
                    </div>
                </FadeIn>

                {/* Expanded SEO Content to resolve Thin Content issues */}
                <FadeIn>
                    <div className="max-w-4xl mx-auto bg-[#161618] border border-white/5 p-8 rounded-3xl mb-16 text-left">
                        <h2 className="text-2xl font-bold text-white mb-4">Inside the Arvian Marketing Insights Center</h2>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
                            Welcome to the Arvian Marketing Blog, Noida's premium resource center for business owners, startup founders, and digital managers looking to scale their online footprint. Our agency believes that knowledge is the foundation of digital growth. In this insights panel, we share actionable frameworks, detailed industry guides, and real-time updates regarding Google algorithms, Facebook ads strategy, and conversion rate optimizations (CRO).
                        </p>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
                            Whether you want to understand how to write high-converting hooks for your next User Generated Content (UGC) ad campaign, optimize your local Google Business Profile to capture map traffic in Noida/Delhi, or learn the benefits of React and Next.js for lightning-fast web design in India—our expert marketing team breaks down complex topics into clear, step-by-step guides.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 pt-6 border-t border-white/5">
                            <div>
                                <h3 className="font-semibold text-blue-400 mb-2">Web Design & CRO</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">Discover how modern static sites, speed optimizations, and clean UI/UX code can double your sales conversions natively.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-blue-400 mb-2">Performance Marketing</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">Learn target bidding strategies, negative keyword setups, and audience targeting hacks to increase your ROAS on Meta and Google Ads.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-blue-400 mb-2">Local SEO Strategies</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">Step-by-step guides to outrank competitors in local Google Map Pack results, build citations, and attract local Delhi NCR clients.</p>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                <div className={`max-w-7xl mx-auto flex flex-col ${isAdmin ? "lg:flex-row" : ""} gap-12`}>
                    {/* Left Column: Blog Form — only visible to admin */}
                    {isAdmin && (
                        <div className="w-full lg:w-1/3">
                            <FadeIn delay={0.1} direction="up" className="sticky top-32">
                                <BlogForm onSubmit={handleNewBlog} />
                            </FadeIn>
                        </div>
                    )}

                    {/* Right Column: Blog Feed */}
                    <div className={`w-full ${isAdmin ? "lg:w-2/3" : ""}`}>
                        <FadeIn delay={0.2}>
                            <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">Latest Posts</h2>

                            {isLoading ? (
                                <div className="text-center py-20">
                                    <div className="w-10 h-10 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-4" />
                                    <p className="text-gray-400">Loading latest posts...</p>
                                </div>
                            ) : blogs.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {blogs.map((blog, index) => (
                                        <div key={blog.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both" style={{ animationDelay: `${index * 100}ms` }}>
                                            <BlogCard blog={blog} index={index} />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-20 bg-[#161618] rounded-2xl border border-white/5">
                                    <h3 className="text-xl text-white font-semibold mb-2">No blogs yet</h3>
                                    <p className="text-gray-400">Be the first to share your thoughts using the form!</p>
                                </div>
                            )}
                        </FadeIn>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}

