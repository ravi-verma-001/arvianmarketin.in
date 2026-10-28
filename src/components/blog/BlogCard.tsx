import Link from "next/link";
import { format } from "date-fns";
import { BlogPost } from "@/types/blog";
import { ArrowRight, Calendar, User } from "lucide-react";

interface BlogCardProps {
    blog: BlogPost;
    index: number;
}

export function BlogCard({ blog, index }: BlogCardProps) {
    // Default fallback image if none provided
    const defaultImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop";

    // Auto truncate content to approx 120 characters (~2-3 lines)
    const truncatedContent = blog.content.length > 120
        ? blog.content.substring(0, 120) + "..."
        : blog.content;

    return (
        <div className="bg-[#1A1A1A] border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 group flex flex-col h-full shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
            {/* Image Container */}
            <div className="relative h-56 md:h-64 w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img
                    src={blog.coverImage || defaultImage}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                        // Fallback if provided URL breaks
                        (e.target as HTMLImageElement).src = defaultImage;
                    }}
                />
            </div>

            {/* Content Container */}
            <div className="p-6 md:p-8 flex flex-col flex-grow relative">
                {/* Meta Data */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {format(new Date(blog.createdAt), 'MMM dd, yyyy')}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs bg-white/5 py-1 px-2 rounded-full border border-white/10">
                        {blog.readTime || "3 min read"}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">
                    <Link href={`/blog/${blog.id}`} className="hover:underline decoration-transparent transition-all">
                        {blog.title}
                    </Link>
                </h3>

                {/* Preview text */}
                <p className="text-gray-400 leading-relaxed mb-6 flex-grow line-clamp-3">
                    {truncatedContent}
                </p>

                {/* Read More button (bottom aligned) */}
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                     <span className="flex items-center gap-1.5 text-sm text-gray-400">
                        <User className="w-4 h-4" />
                        {blog.author || "Arvian Marketing"}
                    </span>
                    <Link
                        href={`/blog/${blog.id}`}
                        className="inline-flex items-center gap-2 text-[#2563EB] font-medium hover:gap-3 transition-all text-sm"
                    >
                        Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
