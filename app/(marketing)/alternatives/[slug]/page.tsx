import type { Metadata } from "next";
import Link from "next/link";
import { contentMetadata } from "@/app/lib/seo";
import { getAlternative, slugs } from "@/app/lib/alternatives";
import { brandNames } from "@/components/alternatives/data";
import { CompetitorLogo, type CompetitorSlug } from "@/components/alternatives/logos";

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
    const alt = await getAlternative(slug);
    if (!alt) return {};

    return {
        title: alt.metadata.title,
        description: alt.metadata.description,
        alternates: {
            canonical: `/alternatives/${slug}`,
        },
        ...contentMetadata({
            title: alt.metadata.title,
            description: alt.metadata.description,
            url: `/alternatives/${slug}`,
            image: `/og/alternatives/${slug}.png`,
        }),
    };
}

export default async function AlternativePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const alt = await getAlternative(slug);
    if (!alt) return null;

    const { default: Alt } = alt;
    const others = slugs.filter((other) => other !== slug);
    const slugKey = slug as CompetitorSlug;

    return (
        <>
            <Link
                href="/alternatives"
                className="text-xs text-on-surface-variant hover:text-on-surface transition-colors"
            >
                &larr; All alternatives
            </Link>

            <div className="flex items-center gap-3 mt-6 mb-5">
                <CompetitorLogo slug="formy" name="Formy" iconOnly />
                <span className="text-xs font-mono text-on-surface-variant">
                    vs
                </span>
                <CompetitorLogo
                    slug={slugKey}
                    name={alt.name}
                    iconOnly={slugKey === "formkeep"}
                />
            </div>

            <p className="text-xs font-mono tracking-widest uppercase text-primary mb-3">
                {alt.keyword}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-on-surface mb-4">
                {alt.h1}
            </h1>

            <div className="prose-formy">
                <Alt />
            </div>

            <h2 className="text-xl font-semibold text-on-surface mb-4">
                Compare with other form backends
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                {others.map((other) => (
                    <Link
                        key={other}
                        href={`/alternatives/${other}`}
                        className="block bg-surface-container-lowest border border-border-muted rounded-xl p-5 hover:border-primary/40 transition-colors"
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <CompetitorLogo
                                slug={other as CompetitorSlug}
                                name={brandNames[other]}
                                iconOnly={other === "formkeep"}
                                size="sm"
                            />
                        </div>
                        <p className="text-sm text-on-surface-variant leading-relaxed">
                            Why developers switch from {brandNames[other]} to
                            Formy.
                        </p>
                        <span className="inline-block mt-3 text-xs font-semibold text-primary">
                            Compare &rarr;
                        </span>
                    </Link>
                ))}
            </div>

            <div className="text-center bg-on-surface text-surface rounded-xl py-10 px-6">
                <h2 className="text-xl font-bold mb-2">
                    Switch in one line
                </h2>
                <p className="text-sm text-surface/70 max-w-md mx-auto mb-6">
                    Create a form, copy your slug, swap the action URL. Your
                    HTML stays untouched — and you get webhooks, a dashboard,
                    and export from day one.
                </p>
                <Link
                    href="/auth/register"
                    className="inline-flex items-center bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:brightness-95 transition-all"
                >
                    Create your Formy form
                </Link>
            </div>
        </>
    );
}
