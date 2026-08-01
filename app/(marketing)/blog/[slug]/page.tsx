import type { Metadata } from "next";
import Link from "next/link";
import { contentMetadata } from "@/app/lib/seo";
import { getPost, slugs } from "@/app/lib/blog";

export const dynamicParams = false;

export function generateStaticParams() {
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);
    if (!post) return {};

    return {
        title: post.metadata.title,
        description: post.metadata.description,
        alternates: {
            canonical: `/blog/${slug}`,
        },
        ...contentMetadata({
            title: post.metadata.title,
            description: post.metadata.description,
            url: `/blog/${slug}`,
            type: "article",
            publishedTime: post.metadata.date,
            image: `/og/blog/${slug}.png`,
        }),
    };
}

function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = await getPost(slug);
    if (!post) return null;

    const { default: Post, metadata } = post;

    return (
        <>
            <Link
                href="/blog"
                className="text-xs text-on-surface-variant hover:text-on-surface transition-colors"
            >
                &larr; Back to blog
            </Link>

            <article className="mt-6">
                <header className="mb-8">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs text-on-surface-variant">
                            {formatDate(metadata.date)}
                        </span>
                        <span className="text-xs text-on-surface-variant">·</span>
                        <span className="text-xs text-on-surface-variant">
                            {metadata.readingTime}
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-on-surface">
                        {metadata.title}
                    </h1>
                </header>

                <div className="prose-formy">
                    <Post />
                </div>
            </article>
        </>
    );
}
