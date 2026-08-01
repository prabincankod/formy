declare module "*.mdx" {
    export const metadata: {
        title: string;
        description: string;
        date: string;
        readingTime: string;
        tags: string[];
    };
}
