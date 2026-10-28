import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Digital Marketing Blog | Arvian Marketing Noida",
    description: "Explore actionable SEO, Web Design, and Social Media Marketing insights from Arvian Marketing, the fastest-growing marketing agency in Delhi NCR.",
    alternates: {
        canonical: "/blog",
    },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
