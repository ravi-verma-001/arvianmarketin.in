"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import slugify from "slugify";
import { BlogPost } from "@/types/blog";
import { Send, Image as ImageIcon, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogFormProps {
    onSubmit: (blog: BlogPost) => void;
}

export function BlogForm({ onSubmit }: BlogFormProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess(false);

        if (!title.trim() || !description.trim()) {
            setError("Title and description are required.");
            return;
        }

        setIsSubmitting(true);

        try {
            // Simulate network delay for better UX
            await new Promise((resolve) => setTimeout(resolve, 600));

            // Calculate rough read time (assuming 200 words per minute)
            const words = description.trim().split(/\s+/).length;
            const minutes = Math.ceil(words / 200);
            const readTimeStr = `${minutes} min read`;

            const newPost = {
                title: title.trim(),
                content: description.trim(),
                author: "Arvian Marketing", // Default author
                coverImage: imageUrl.trim() || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
                category: "Technology", // Default category
                readTime: readTimeStr,
            };

            onSubmit(newPost as any);

            // Reset form
            setTitle("");
            setDescription("");
            setImageUrl("");
            setSuccess(true);

            // Hide success message after 3 seconds
            setTimeout(() => setSuccess(false), 3000);
        } catch (err) {
            setError("Failed to publish blog post. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-[#161618] border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl relative overflow-hidden">
            {/* Ambient glows behind the form */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[80px] pointer-events-none" />

            <h2 className="text-2xl font-bold mb-6 text-white relative z-10 text-center md:text-left">Write a New Blog Post</h2>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                {error && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-md text-sm">
                        {error}
                    </div>
                )}

                {success && (
                    <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-3 rounded-md text-sm flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        Blog post published successfully!
                    </div>
                )}

                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-400 mb-2">
                        Blog Title <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter an engaging title..."
                        className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-400 mb-2">
                        Blog Content <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Write your blog content here..."
                        rows={6}
                        className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors resize-y min-h-[150px]"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="image" className="block text-sm font-medium text-gray-400 mb-2">
                        Cover Image URL <span className="text-gray-600 text-xs ml-2">(Optional)</span>
                    </label>
                    <div className="relative">
                        <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                            id="image"
                            type="url"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            placeholder="https://example.com/image.jpg"
                            className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                        />
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Leave blank to use the default Arvian Marketing cover image.</p>
                </div>

                <div className="pt-2 flex justify-end">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={cn(
                            "inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-bold transition-all w-full md:w-auto",
                            isSubmitting
                                ? "bg-gray-800 text-gray-400 cursor-not-allowed"
                                : "bg-[#2563EB] text-white hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
                        )}
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Publishing...
                            </>
                        ) : (
                            <>
                                <Send className="w-5 h-5" />
                                Publish Blog Post
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
