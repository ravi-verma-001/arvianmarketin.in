import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import fs from "fs/promises";
import path from "path";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        if (process.env.DATABASE_URL) {
            try {
                const dbBlogs = await prisma.blogPost.findMany({
                    orderBy: { createdAt: "desc" },
                });
                if (dbBlogs && dbBlogs.length > 0) {
                    return NextResponse.json(dbBlogs);
                }
            } catch (e) {
                console.warn("Prisma query failed, falling back to local blogs.json", e);
            }
        }

        const filePath = path.join(process.cwd(), "src", "data", "blogs.json");
        const fileContents = await fs.readFile(filePath, "utf8");
        const blogs = JSON.parse(fileContents);
        return NextResponse.json(blogs);
    } catch (error) {
        console.error("Failed to fetch blog posts:", error);
        return NextResponse.json(
            { error: "Failed to fetch blog posts" },
            { status: 500 }
        );
    }
}

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const filePath = path.join(process.cwd(), "src", "data", "blogs.json");
        let blogs: any[] = [];
        try {
            const fileContents = await fs.readFile(filePath, "utf8");
            blogs = JSON.parse(fileContents);
        } catch (_) {}

        const newPost = {
            id: data.id || data.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || Date.now().toString(),
            title: data.title,
            content: data.content,
            author: data.author || "Ravi Verma",
            coverImage: data.coverImage || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
            category: data.category || "General",
            readTime: data.readTime || "4 min read",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        blogs.unshift(newPost);
        await fs.writeFile(filePath, JSON.stringify(blogs, null, 2), "utf8");

        if (process.env.DATABASE_URL) {
            try {
                await prisma.blogPost.create({
                    data: {
                        title: newPost.title,
                        content: newPost.content,
                        author: newPost.author,
                        coverImage: newPost.coverImage,
                        category: newPost.category,
                        readTime: newPost.readTime,
                    },
                });
            } catch (err) {
                console.warn("Prisma save failed, but saved to blogs.json", err);
            }
        }

        return NextResponse.json(newPost, { status: 201 });
    } catch (error) {
        console.error("Failed to create blog post:", error);
        return NextResponse.json(
            { error: "Failed to create blog post" },
            { status: 500 }
        );
    }
}
