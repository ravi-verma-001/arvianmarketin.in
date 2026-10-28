import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-static";

export async function GET() {
    try {
        const blogs = await prisma.blogPost.findMany({
            orderBy: { createdAt: "desc" },
        });
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

        const newPost = await prisma.blogPost.create({
            data: {
                title: data.title,
                content: data.content,
                author: data.author || "Arvian Marketing",
                coverImage: data.coverImage || null,
                category: data.category || "Technology",
                readTime: data.readTime || null,
            },
        });

        return NextResponse.json(newPost, { status: 201 });
    } catch (error) {
        console.error("Failed to create blog post:", error);
        return NextResponse.json(
            { error: "Failed to create blog post" },
            { status: 500 }
        );
    }
}
