export interface AlternativeModule {
    default: React.ComponentType;
    metadata: {
        title: string;
        description: string;
    };
    h1: string;
    name: string;
    keyword: string;
    verdict: string;
}

export const slugs = [
    "formsubmit",
    "formspree",
    "formbackend",
    "formkeep",
] as const;

export async function getAlternative(
    slug: string,
): Promise<AlternativeModule | null> {
    switch (slug) {
        case "formsubmit":
            return import(
                "@/content/alternatives/formsubmit.mdx"
            ) as Promise<AlternativeModule>;
        case "formspree":
            return import(
                "@/content/alternatives/formspree.mdx"
            ) as Promise<AlternativeModule>;
        case "formbackend":
            return import(
                "@/content/alternatives/formbackend.mdx"
            ) as Promise<AlternativeModule>;
        case "formkeep":
            return import(
                "@/content/alternatives/formkeep.mdx"
            ) as Promise<AlternativeModule>;
        default:
            return null;
    }
}
