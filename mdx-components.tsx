import type { MDXComponents } from "mdx/types";
import Link from "next/link";

const components: MDXComponents = {
    h1: (props) => <h1 className="mt-2 mb-4 text-3xl md:text-4xl" {...props} />,
    h2: (props) => <h2 className="mt-10 mb-3" {...props} />,
    h3: (props) => <h3 className="mt-8 mb-2" {...props} />,
    h4: (props) => <h4 className="mt-6 mb-2" {...props} />,
    p: (props) => (
        <p className="my-4 text-on-surface-variant leading-relaxed" {...props} />
    ),
    ul: (props) => (
        <ul className="my-4 list-disc pl-6 space-y-1.5 text-on-surface-variant" {...props} />
    ),
    ol: (props) => (
        <ol className="my-4 list-decimal pl-6 space-y-1.5 text-on-surface-variant" {...props} />
    ),
    li: (props) => <li className="leading-relaxed" {...props} />,
    a: ({ href = "", ...props }) => {
        if (href.startsWith("/") || href.startsWith("#")) {
            return <Link href={href} {...props} />;
        }
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:brightness-90 underline underline-offset-3"
                {...props}
            />
        );
    },
    blockquote: (props) => <blockquote className="my-6" {...props} />,
    code: (props) => <code className="text-[0.8em]" {...props} />,
    pre: (props) => <pre className="my-5 text-[0.85em]" {...props} />,
    table: (props) => <div className="my-6 overflow-x-auto"><table {...props} /></div>,
    hr: (props) => <hr className="my-10" {...props} />,
};

export function useMDXComponents(): MDXComponents {
    return components;
}
