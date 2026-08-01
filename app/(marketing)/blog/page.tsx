import type { Metadata } from "next";
import Link from "next/link";

import { contentMetadata } from "@/app/lib/seo";

import ServerlessFormHandling, {
    metadata as p1,
} from "@/content/blog/serverless-form-handling.mdx";
import FormBackendAsAService, {
    metadata as p2,
} from "@/content/blog/form-backend-as-a-service.mdx";
import BestFormBackend, {
    metadata as p3,
} from "@/content/blog/best-form-backend-for-developers.mdx";

export const metadata: Metadata = {
    title: "Blog — Formy | Form Submission & Form Backend Guides",
    description:
        "Guides on serverless form handling, choosing a form backend as a service, webhooks, and collecting form submissions without building infrastructure.",
    alternates: {
        canonical: "/blog",
    },
    ...contentMetadata({
        title: "Blog — Formy | Form Submission & Form Backend Guides",
        description:
            "Guides on serverless form handling, choosing a form backend as a service, webhooks, and collecting form submissions without building infrastructure.",
        url: "/blog",
        image: "/og/blog.png",
    }),
};

const posts = [
    {
        slug: "serverless-form-handling",
        title: p1.title,
        description: p1.description,
        date: p1.date,
        readingTime: p1.readingTime,
        tags: p1.tags,
        Preview: ServerlessFormHandling,
    },
    {
        slug: "form-backend-as-a-service",
        title: p2.title,
        description: p2.description,
        date: p2.date,
        readingTime: p2.readingTime,
        tags: p2.tags,
        Preview: FormBackendAsAService,
    },
    {
        slug: "best-form-backend-for-developers",
        title: p3.title,
        description: p3.description,
        date: p3.date,
        readingTime: p3.readingTime,
        tags: p3.tags,
        Preview: BestFormBackend,
    },
];

function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}

export default function BlogIndex() {
    return (
        <>
            <p className="text-xs font-mono tracking-widest uppercase text-primary mb-3">
                Blog
            </p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-on-surface mb-4">
                Form submission guides
            </h1>
            <p className="text-sm text-on-surface-variant leading-relaxed max-w-xl mb-12">
                Practical writing on serverless form handling, form backends as
                a service, and collecting submissions without standing up
                infrastructure.
            </p>

            <div className="space-y-6">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="block bg-surface-container-lowest border border-border-muted rounded-xl p-6 hover:border-primary/40 transition-colors"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs text-on-surface-variant">
                                {formatDate(post.date)}
                            </span>
                            <span className="text-xs text-on-surface-variant">
                                ·
                            </span>
                            <span className="text-xs text-on-surface-variant">
                                {post.readingTime}
                            </span>
                        </div>
                        <h2 className="text-lg font-semibold text-on-surface mb-2 group-hover:text-primary">
                            {post.title}
                        </h2>
                        <p className="text-sm text-on-surface-variant leading-relaxed">
                            {post.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {post.tags.map((tag: string) => (
                                <span
                                    key={tag}
                                    className="text-[11px] font-mono text-on-surface-variant border border-border-muted rounded-full px-2.5 py-0.5"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}
