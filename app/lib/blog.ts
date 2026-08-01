export interface PostModule {
    default: React.ComponentType;
    metadata: {
        title: string;
        description: string;
        date: string;
        readingTime: string;
        tags: string[];
    };
}

export const slugs = [
    "serverless-form-handling",
    "form-backend-as-a-service",
    "best-form-backend-for-developers",
] as const;

export async function getPost(slug: string): Promise<PostModule | null> {
    switch (slug) {
        case "serverless-form-handling":
            return import(
                "@/content/blog/serverless-form-handling.mdx"
            ) as Promise<PostModule>;
        case "form-backend-as-a-service":
            return import(
                "@/content/blog/form-backend-as-a-service.mdx"
            ) as Promise<PostModule>;
        case "best-form-backend-for-developers":
            return import(
                "@/content/blog/best-form-backend-for-developers.mdx"
            ) as Promise<PostModule>;
        default:
            return null;
    }
}
