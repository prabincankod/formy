import type { Metadata } from "next";
import Link from "next/link";
import { contentMetadata } from "@/app/lib/seo";
import { getUseCase, slugs } from "@/app/lib/use-cases";

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
    const useCase = await getUseCase(slug);
    if (!useCase) return {};

    return {
        title: useCase.metadata.title,
        description: useCase.metadata.description,
        alternates: {
            canonical: `/use-cases/${slug}`,
        },
        ...contentMetadata({
            title: useCase.metadata.title,
            description: useCase.metadata.description,
            url: `/use-cases/${slug}`,
            image: `/og/use-cases/${slug}.png`,
        }),
    };
}

export default async function UseCasePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const useCase = await getUseCase(slug);
    if (!useCase) return null;

    const { default: UseCase } = useCase;

    return (
        <>
            <Link
                href="/use-cases"
                className="text-xs text-on-surface-variant hover:text-on-surface transition-colors"
            >
                &larr; All use cases
            </Link>

            <p className="text-xs font-mono tracking-widest uppercase text-primary mt-6 mb-3">
                Use case
            </p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-on-surface mb-4">
                {useCase.h1}
            </h1>

            <div className="prose-formy">
                <UseCase />
            </div>

            <div className="text-center bg-on-surface text-surface rounded-xl py-10 px-6">
                <h2 className="text-xl font-bold mb-2">{useCase.cta.title}</h2>
                <p className="text-sm text-surface/70 max-w-md mx-auto mb-6">
                    {useCase.cta.body}
                </p>
                <Link
                    href="/auth/register"
                    className="inline-flex items-center bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:brightness-95 transition-all"
                >
                    {useCase.cta.label}
                </Link>
            </div>
        </>
    );
}
