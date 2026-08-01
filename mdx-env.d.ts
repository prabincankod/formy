declare module "*.mdx" {
    export const metadata: {
        title: string;
        description: string;
        date: string;
        readingTime: string;
        tags: string[];
    };
    export const h1: string;
    export const name: string;
    export const keyword: string;
    export const verdict: string;
    export const cta: {
        title: string;
        body: string;
        label: string;
    };
}
