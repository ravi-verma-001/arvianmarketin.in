import Link from "next/link";
import { format } from "date-fns";
import { BlogPost } from "@/types/blog";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

interface BlogCardProps {
    blog: BlogPost;
    index?: number;
}

export function BlogCard({ blog, index = 0 }: BlogCardProps) {
    const defaultImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop";

    // Auto truncate content to approx 130 characters
    const truncatedContent = blog.content.length > 130
        ? blog.content.substring(0, 130).replace(/###.*?\n/g, "").trim() + "..."
        : blog.content;

    let formattedDate = "Recent";
    try {
        if (blog.createdAt) {
            formattedDate = format(new Date(blog.createdAt), "MMM dd, yyyy");
        }
    } catch (_) {
        formattedDate = "Recent";
    }

    return (
        <article className="bg-white rounded-2xl border border-[#E5EAF2] overflow-hidden hover:border-[#0051d5]/40 hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
            {/* Image Container */}
            <Link href={`/blog/${blog.id}`} className="block relative h-52 sm:h-56 w-full overflow-hidden bg-[#F6F8FC]">
                <img
                    src={blog.coverImage || defaultImage}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = defaultImage;
                    }}
                />
                {/* Category Pill Tag */}
                <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-bold text-[#0051d5] shadow-sm">
                    {blog.category || "Growth"}
                </div>
            </Link>

            {/* Content Container */}
            <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                <div>
                    {/* Meta Info */}
                    <div className="flex items-center gap-3 text-xs text-[#747780] mb-3">
                        <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-[#546a92]" />
                            {formattedDate}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5 bg-[#eff4ff] text-[#0051d5] px-2 py-0.5 rounded-md font-semibold text-[11px]">
                            <Clock className="w-3 h-3" />
                            {blog.readTime || "4 min read"}
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-[#001539] mb-3 line-clamp-2 group-hover:text-[#0051d5] transition-colors leading-snug">
                        <Link href={`/blog/${blog.id}`} className="hover:underline">
                            {blog.title}
                        </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="font-sans text-xs sm:text-sm text-[#546a92] leading-relaxed mb-6 line-clamp-3">
                        {truncatedContent}
                    </p>
                </div>

                {/* Bottom author + read action */}
                <div className="pt-4 border-t border-[#E5EAF2] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-[#001539] text-white flex items-center justify-center text-[11px] font-bold">
                            {(blog.author || "R").charAt(0)}
                        </div>
                        <span className="text-xs font-semibold text-[#0f131a]">
                            {blog.author || "Arvian Marketing"}
                        </span>
                    </div>

                    <Link
                        href={`/blog/${blog.id}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#0051d5] group-hover:text-[#001539] group-hover:translate-x-1 transition-all"
                    >
                        <span>Read Post</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </div>
        </article>
    );
}
