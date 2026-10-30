"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Background } from "@/components/ui/Background";
import { FadeIn } from "@/components/ui/MotionPrimitives";
import { BlogForm } from "@/components/blog/BlogForm";
import { BlogCard } from "@/components/blog/BlogCard";
import { AdminLogin } from "@/components/blog/AdminLogin";
import { BlogPost } from "@/types/blog";
import {
    Sparkles, Search, ArrowRight, Calendar, Clock,
    TrendingUp, MessageCircle, BookOpen, Layers
} from "lucide-react";
import { format } from "date-fns";

const ADMIN_SECRET = "arvianmarketing2025";

const categories = [
    "All Topics",
    "Meta Ads",
    "Web Design",
    "Local SEO",
    "Lead Funnels",
];

export default function Blog() {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All Topics");
    const [searchQuery, setSearchQuery] = useState("");
    const [tripleClickCount, setTripleClickCount] = useState(0);

    // Check admin status on mount
    useEffect(() => {
        const stored = localStorage.getItem("adminKey");
        if (stored === ADMIN_SECRET) setIsAdmin(true);
    }, []);

    // Fetch blogs
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch("/api/blogs");
                if (response.ok) {
                    const data = await response.json();
                    if (Array.isArray(data)) {
                        setBlogs(data);
                    }
                }
            } catch (error) {
                console.error("Failed to fetch blogs", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    const handleNewBlog = async (newBlog: Omit<BlogPost, "id" | "createdAt" | "updatedAt">) => {
        try {
            const response = await fetch("/api/blogs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
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

    const handleBadgeClick = () => {
        const next = tripleClickCount + 1;
        setTripleClickCount(next);
        if (next >= 3) {
            window.dispatchEvent(new CustomEvent("adminTripleClick"));
            setTripleClickCount(0);
        }
    };

    // Filter logic
    const filteredBlogs = useMemo(() => {
        return blogs.filter((blog) => {
            const matchesCat =
                selectedCategory === "All Topics" ||
                (blog.category && blog.category.toLowerCase() === selectedCategory.toLowerCase());
            const query = searchQuery.toLowerCase().trim();
            const matchesSearch =
                !query ||
                blog.title.toLowerCase().includes(query) ||
                blog.content.toLowerCase().includes(query);
            return matchesCat && matchesSearch;
        });
    }, [blogs, selectedCategory, searchQuery]);

    const featuredPost = filteredBlogs.length > 0 ? filteredBlogs[0] : null;
    const remainingPosts = filteredBlogs.slice(1);

    return (
        <main className="min-h-screen bg-[#F6F8FC] text-[#0f131a] selection:bg-[#dbe1ff] selection:text-[#001539] relative font-sans">
            <Background />
            <Navbar />

            {/* Admin Login Modal */}
            <AdminLogin onUnlock={() => setIsAdmin(true)} />

            {/* Header Section */}
            <div className="pt-36 pb-12 md:pt-44 md:pb-16 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <FadeIn>
                    <button
                        onClick={handleBadgeClick}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dbe1ff] text-[#001539] text-xs font-bold uppercase tracking-wider mb-6 hover:bg-[#c9d4ff] transition-colors"
                        title="Triple-click for admin login"
                    >
                        <BookOpen className="w-3.5 h-3.5 text-[#0051d5]" />
                        <span>GROWTH PLAYBOOKS &amp; STRATEGY</span>
                    </button>

                    <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0f131a] mb-6">
                        Actionable Insights For <br className="hidden sm:inline" />
                        <span className="text-[#0051d5]">Modern Indian Businesses</span>
                    </h1>

                    <p className="font-sans text-base sm:text-xl text-[#546a92] max-w-2xl mx-auto leading-relaxed">
                        Data-backed guides on cutting Meta Ads CPL, engineering 1-second landing pages, dominating Google Local Search, and generating paying inquiries.
                    </p>
                </FadeIn>

                {/* Filter & Search Bar */}
                <div className="mt-12 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 p-2.5 rounded-2xl bg-white border border-[#E5EAF2] shadow-sm">
                    {/* Category Tabs */}
                    <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto justify-center md:justify-start">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                                    selectedCategory === cat
                                        ? "bg-[#001539] text-white shadow-sm"
                                        : "text-[#546a92] hover:text-[#001539] hover:bg-[#f0f2f7]"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search Input */}
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#747780]" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search articles..."
                            className="w-full pl-9 pr-4 py-2 bg-[#F6F8FC] border border-[#E5EAF2] rounded-xl text-xs text-[#0f131a] placeholder:text-[#9aa0a6] focus:outline-none focus:border-[#0051d5] focus:bg-white transition-all"
                        />
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                {/* Admin Form Column (if logged in) */}
                {isAdmin && (
                    <div className="mb-12">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                                ✓ Admin Mode Active
                            </span>
                            <button
                                onClick={() => {
                                    localStorage.removeItem("adminKey");
                                    setIsAdmin(false);
                                }}
                                className="text-xs font-semibold text-red-600 hover:underline"
                            >
                                Logout of Admin
                            </button>
                        </div>
                        <BlogForm onSubmit={handleNewBlog} />
                    </div>
                )}

                {isLoading ? (
                    <div className="text-center py-24">
                        <div className="w-10 h-10 border-4 border-[#dbe1ff] border-t-[#0051d5] rounded-full animate-spin mx-auto mb-4" />
                        <p className="text-sm font-semibold text-[#546a92]">Loading articles...</p>
                    </div>
                ) : filteredBlogs.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-3xl border border-[#E5EAF2] p-8 max-w-xl mx-auto shadow-sm">
                        <div className="w-12 h-12 rounded-full bg-[#eff4ff] flex items-center justify-center text-[#0051d5] mx-auto mb-4">
                            <Search className="w-6 h-6" />
                        </div>
                        <h3 className="font-heading text-xl font-bold text-[#001539] mb-2">No Articles Found</h3>
                        <p className="text-sm text-[#546a92] mb-6">
                            We couldn&apos;t find any articles matching &ldquo;{searchQuery || selectedCategory}&rdquo;.
                        </p>
                        <button
                            onClick={() => {
                                setSelectedCategory("All Topics");
                                setSearchQuery("");
                            }}
                            className="px-5 py-2.5 rounded-xl bg-[#001539] text-white text-xs font-bold hover:bg-[#002868] transition-colors"
                        >
                            Reset Filters
                        </button>
                    </div>
                ) : (
                    <>
                        {/* Featured Hero Article (only on first page when not deep searching) */}
                        {featuredPost && (
                            <FadeIn>
                                <div className="mb-12 bg-white rounded-3xl border border-[#E5EAF2] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#0051d5]/40 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 group">
                                    <div className="lg:col-span-7 relative min-h-[280px] lg:min-h-[380px] overflow-hidden bg-[#F6F8FC]">
                                        <img
                                            src={featuredPost.coverImage}
                                            alt={featuredPost.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4 bg-[#001539]/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-xs font-bold text-white shadow-md flex items-center gap-1.5">
                                            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                                            <span>FEATURED PLAYBOOK</span>
                                        </div>
                                    </div>

                                    <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center gap-3 text-xs text-[#747780] mb-3">
                                                <span className="font-bold text-[#0051d5] bg-[#eff4ff] px-2.5 py-1 rounded-md">
                                                    {featuredPost.category}
                                                </span>
                                                <span>•</span>
                                                <span className="flex items-center gap-1 text-[#546a92]">
                                                    <Clock className="w-3.5 h-3.5" />
                                                    {featuredPost.readTime || "5 min read"}
                                                </span>
                                            </div>

                                            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#001539] mb-4 group-hover:text-[#0051d5] transition-colors leading-tight">
                                                <Link href={`/blog/${featuredPost.id}`}>
                                                    {featuredPost.title}
                                                </Link>
                                            </h2>

                                            <p className="font-sans text-sm text-[#546a92] leading-relaxed mb-6 line-clamp-3">
                                                {featuredPost.content.substring(0, 180).replace(/###.*?\n/g, "").trim()}...
                                            </p>
                                        </div>

                                        <div className="pt-6 border-t border-[#E5EAF2] flex items-center justify-between">
                                            <div className="flex items-center gap-2.5">
                                                <div className="w-9 h-9 rounded-full bg-[#001539] text-white flex items-center justify-center text-xs font-bold">
                                                    {(featuredPost.author || "R").charAt(0)}
                                                </div>
                                                <div>
                                                    <div className="text-xs font-bold text-[#001539]">
                                                        {featuredPost.author || "Ravi Verma"}
                                                    </div>
                                                    <div className="text-[11px] text-[#747780]">
                                                        {format(new Date(featuredPost.createdAt), "MMMM dd, yyyy")}
                                                    </div>
                                                </div>
                                            </div>

                                            <Link
                                                href={`/blog/${featuredPost.id}`}
                                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0051d5] hover:bg-[#003ea8] text-white text-xs font-bold shadow-sm transition-all"
                                            >
                                                <span>Read Article</span>
                                                <ArrowRight className="w-3.5 h-3.5" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        )}

                        {/* Remaining Posts Grid */}
                        {remainingPosts.length > 0 && (
                            <div>
                                <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E5EAF2]">
                                    <h2 className="font-heading text-2xl font-extrabold text-[#001539]">
                                        More Strategy Articles
                                    </h2>
                                    <span className="text-xs font-semibold text-[#546a92]">
                                        Showing {filteredBlogs.length} articles
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {remainingPosts.map((blog, index) => (
                                        <FadeIn key={blog.id} delay={index * 0.08}>
                                            <BlogCard blog={blog} index={index} />
                                        </FadeIn>
                                    ))}
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* Bottom Editorial Trust & Newsletter Banner */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#102a56] text-white">
                <div className="max-w-[900px] mx-auto text-center">
                    <FadeIn direction="up">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#dbe1ff] text-xs font-bold uppercase tracking-wider mb-6">
                            DIRECT IMPLEMENTATION
                        </div>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-4">
                            Want Us to Implement These Strategies for You?
                        </h2>
                        <p className="font-sans text-base text-[#b0c6fc] mb-8 max-w-xl mx-auto leading-relaxed">
                            Reading guides is good; having an expert execute your high-speed landing page and profitable Meta ads is even better. Chat directly with Ravi today.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="https://wa.me/919711190678?text=Hi%20Ravi%2C%20I%20read%20your%20blog%20and%20want%20to%20discuss%20growing%20my%20business%20leads."
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
