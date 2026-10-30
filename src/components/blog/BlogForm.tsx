"use client";

import { useState } from "react";
import { BlogPost } from "@/types/blog";
import { Send, Image as ImageIcon, Loader2, Sparkles, Tag, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogFormProps {
    onSubmit: (blog: Omit<BlogPost, "id" | "createdAt" | "updatedAt">) => void;
}

export function BlogForm({ onSubmit }: BlogFormProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [category, setCategory] = useState("Meta Ads");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess(false);

        if (!title.trim() || !description.trim()) {
            setError("Title and content are required.");
            return;
        }

        setIsSubmitting(true);

        try {
            await new Promise((resolve) => setTimeout(resolve, 400));

            const words = description.trim().split(/\s+/).length;
            const minutes = Math.max(1, Math.ceil(words / 180));
            const readTimeStr = `${minutes} min read`;

            const newPost = {
                title: title.trim(),
                content: description.trim(),
                author: "Ravi Verma",
                coverImage: imageUrl.trim() || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
                category: category || "Meta Ads",
                readTime: readTimeStr,
            };

            onSubmit(newPost as any);

            setTitle("");
            setDescription("");
            setImageUrl("");
            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000);
        } catch (err) {
            setError("Failed to publish blog post. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white border-2 border-[#0051d5]/30 p-6 sm:p-8 rounded-3xl shadow-lg relative overflow-hidden">
            <div className="flex items-center gap-2 mb-2 text-[#0051d5] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Admin Editorial Desk</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-[#001539]">
                Publish a New Article
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-xs font-semibold">
                        {error}
                    </div>
                )}

                {success && (
                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-xl text-xs font-semibold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Article published successfully to the blog feed!
                    </div>
                )}

                <div>
                    <label htmlFor="title" className="block text-xs font-bold text-[#001539] mb-1.5 uppercase tracking-wider">
                        Article Headline <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="e.g. 5 Ad Hook Templates That Convert in Delhi NCR"
                        className="w-full bg-[#F6F8FC] border border-[#E5EAF2] rounded-xl px-4 py-3 text-sm text-[#0f131a] placeholder:text-[#9aa0a6] focus:outline-none focus:border-[#0051d5] focus:bg-white transition-all"
                        required
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="category" className="block text-xs font-bold text-[#001539] mb-1.5 uppercase tracking-wider">
                            Category
                        </label>
                        <select
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full bg-[#F6F8FC] border border-[#E5EAF2] rounded-xl px-4 py-3 text-sm text-[#0f131a] focus:outline-none focus:border-[#0051d5] focus:bg-white transition-all font-medium"
                        >
                            <option value="Meta Ads">Meta Ads</option>
                            <option value="Web Design">Web Design</option>
                            <option value="Local SEO">Local SEO</option>
                            <option value="Lead Funnels">Lead Funnels</option>
                            <option value="Growth Strategy">Growth Strategy</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="image" className="block text-xs font-bold text-[#001539] mb-1.5 uppercase tracking-wider">
                            Cover Image URL
                        </label>
                        <input
                            id="image"
                            type="url"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            placeholder="https://images.unsplash.com/..."
                            className="w-full bg-[#F6F8FC] border border-[#E5EAF2] rounded-xl px-4 py-3 text-sm text-[#0f131a] placeholder:text-[#9aa0a6] focus:outline-none focus:border-[#0051d5] focus:bg-white transition-all"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="description" className="block text-xs font-bold text-[#001539] mb-1.5 uppercase tracking-wider">
                        Article Content (Markdown supported) <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Write article paragraphs here. Use ### for subheadings."
                        rows={7}
                        className="w-full bg-[#F6F8FC] border border-[#E5EAF2] rounded-xl px-4 py-3 text-sm text-[#0f131a] placeholder:text-[#9aa0a6] focus:outline-none focus:border-[#0051d5] focus:bg-white transition-all resize-y min-h-[160px] leading-relaxed"
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                        "w-full py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md",
                        isSubmitting
                            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                            : "bg-[#0051d5] hover:bg-[#003ea8] text-white hover:shadow-lg"
                    )}
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Publishing to Blog...</span>
                        </>
                    ) : (
                        <>
                            <Send className="w-4 h-4" />
                            <span>Publish Article</span>
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}
