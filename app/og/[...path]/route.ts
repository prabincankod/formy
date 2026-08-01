import type { NextRequest } from "next/server";
import { renderOgImage } from "@/app/lib/og-image";
import { getPost, slugs as blogSlugs } from "@/app/lib/blog";
import { getUseCase, slugs as useCaseSlugs } from "@/app/lib/use-cases";
import {
    getAlternative,
    slugs as alternativeSlugs,
} from "@/app/lib/alternatives";

type OgContent = {
    kicker: string;
    title: string;
    subtitle?: string;
};

const indexPages: Record<string, OgContent> = {
    blog: {
        kicker: "Blog",
        title: "Form submission guides",
        subtitle:
            "Serverless form handling, form backends as a service, and collecting submissions without building infrastructure.",
    },
    "use-cases": {
        kicker: "Use cases",
        title: "Appointment forms, done in minutes",
        subtitle:
            "Ready-to-use HTML forms for doctors and cleaning services. Copy the form, add your Formy endpoint, done.",
    },
    alternatives: {
        kicker: "Alternatives",
        title: "Form backend alternatives, compared",
        subtitle:
            "Formy vs FormSubmit, Formspree, FormBackend, and FormKeep — webhooks, dashboards, JSON POST, and free tiers.",
    },
};

async function resolve(path: string[]): Promise<OgContent | null> {
    const section = path[0]?.replace(/\.png$/, "");
    const slug = path[1]?.replace(/\.png$/, "");

    if (path.length === 1 && indexPages[section]) {
        return indexPages[section];
    }

    if (
        section === "blog" &&
        slug &&
        (blogSlugs as readonly string[]).includes(slug)
    ) {
        const post = await getPost(slug);
        if (post) {
            return {
                kicker: "Blog",
                title: post.metadata.title,
                subtitle: post.metadata.description,
            };
        }
    }

    if (
        section === "use-cases" &&
        slug &&
        (useCaseSlugs as readonly string[]).includes(slug)
    ) {
        const useCase = await getUseCase(slug);
        if (useCase) {
            return {
                kicker: "Use case",
                title: useCase.h1,
                subtitle: useCase.metadata.description,
            };
        }
    }

    if (
        section === "alternatives" &&
        slug &&
        (alternativeSlugs as readonly string[]).includes(slug)
    ) {
        const alt = await getAlternative(slug);
        if (alt) {
            return {
                kicker: alt.keyword,
                title: `${alt.name} alternative`,
                subtitle: `Why developers switch from ${alt.name} to Formy.`,
            };
        }
    }

    return null;
}

export function generateStaticParams() {
    const params: { path: string[] }[] = [];
    for (const section of Object.keys(indexPages)) {
        params.push({ path: [`${section}.png`] });
    }
    for (const slug of blogSlugs) {
        params.push({ path: ["blog", `${slug}.png`] });
    }
    for (const slug of useCaseSlugs) {
        params.push({ path: ["use-cases", `${slug}.png`] });
    }
    for (const slug of alternativeSlugs) {
        params.push({ path: ["alternatives", `${slug}.png`] });
    }
    return params;
}

export async function GET(
    _request: NextRequest,
    { params }: { params: Promise<{ path: string[] }> },
) {
    const { path } = await params;
    const content = await resolve(path);

    if (!content) {
        return new Response("Not found", { status: 404 });
    }

    return renderOgImage(content);
}
