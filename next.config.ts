import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "formsubmit.co" },
            { protocol: "https", hostname: "formspree.io" },
            { protocol: "https", hostname: "formbackend.com" },
            { protocol: "https", hostname: "www.google.com" },
        ],
    },
};

const withMDX = createMDX({
    extension: /\.(md|mdx)$/,
    options: {
        remarkPlugins: ["remark-gfm"],
        rehypePlugins: [["rehype-slug", {}], ["rehype-autolink-headings", { behavior: "prepend" }]],
    },
});

export default withMDX(nextConfig);
