import { MetadataRoute } from 'next';
import { allServicesData } from '@/data/servicesData';
import blogsData from '@/data/blogs.json';

const BASE_URL = 'https://arvianmarketing.in';

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    // 1. Core Static Application Routes
    const staticRoutes: MetadataRoute.Sitemap = [
        { url: `${BASE_URL}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
        { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
        { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
        { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    ];

    // 2. Dynamic Service Routing Integration
    const serviceRoutes: MetadataRoute.Sitemap = allServicesData.map((service) => ({
        url: `${BASE_URL}/services/${service.slug}`,
        lastModified: new Date(), // Always fresh on Next.js build execution
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    // 3. Dynamic Blog Fetching Simulation via local JSON
    const blogRoutes: MetadataRoute.Sitemap = blogsData.map((blog: { slug: string, createdAt: string }) => ({
        url: `${BASE_URL}/blog/${blog.slug}`,
        lastModified: new Date(blog.createdAt),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    // Concatenate All Maps into a single perfectly structured XML
    return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
