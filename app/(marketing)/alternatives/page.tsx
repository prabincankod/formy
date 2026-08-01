import type { Metadata } from "next";
import Link from "next/link";
import { contentMetadata } from "@/app/lib/seo";
import { brandNames } from "@/components/alternatives/data";
import { ComparisonTable } from "@/components/alternatives/ComparisonTable";
import { CompetitorLogo } from "@/components/alternatives/logos";
import { verdict as formsubmitVerdict } from "@/content/alternatives/formsubmit.mdx";
import { verdict as formspreeVerdict } from "@/content/alternatives/formspree.mdx";
import { verdict as formbackendVerdict } from "@/content/alternatives/formbackend.mdx";
import { verdict as formkeepVerdict } from "@/content/alternatives/formkeep.mdx";

const verdicts: Record<string, string> = {
    formsubmit: formsubmitVerdict,
    formspree: formspreeVerdict,
    formbackend: formbackendVerdict,
    formkeep: formkeepVerdict,
};

export const metadata: Metadata = {
    title:
        "Form Backend Alternatives — Formy vs FormSubmit, Formspree, FormBackend & FormKeep",
    description:
        "Compare Formy against FormSubmit, Formspree, FormBackend, and FormKeep on webhooks, dashboards, JSON POST, and free tiers. Pick the form backend that fits how you work.",
    alternates: {
        canonical: "/alternatives",
    },
    ...contentMetadata({
        title:
            "Form Backend Alternatives — Formy vs FormSubmit, Formspree, FormBackend & FormKeep",
        description:
            "Compare Formy against FormSubmit, Formspree, FormBackend, and FormKeep on webhooks, dashboards, JSON POST, and free tiers. Pick the form backend that fits how you work.",
        url: "/alternatives",
        image: "/og/alternatives.png",
    }),
};

const order = [
    "formsubmit",
    "formspree",
    "formbackend",
    "formkeep",
] as const;

export default function AlternativesIndex() {
    return (
        <>
            <p className="text-xs font-mono tracking-widest uppercase text-primary mb-3">
                Alternatives
            </p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-on-surface mb-4">
                Form backend alternatives, compared
            </h1>
            <p className="text-sm text-on-surface-variant leading-relaxed max-w-2xl mb-8">
                You have a form and you don&apos;t want to build a backend — the
                only real question is which service to point it at. This page
                compares Formy against the four form backends developers reach
                for first: FormSubmit, Formspree, FormBackend, and FormKeep. The
                short answer is up front: for a developer who writes their own
                HTML, the right backend is the thinnest one — a POST endpoint,
                webhooks, a dashboard, no field builder. That&apos;s what Formy is.
                The table below shows exactly what each tool trades off.
            </p>

            <div className="bg-surface-container-low border border-border-muted rounded-xl p-6 mb-10">
                <p className="text-sm text-on-surface-variant leading-relaxed">
                    <strong className="text-on-surface">
                        The short answer:
                    </strong>{" "}
                    FormSubmit is email-only with no history; Formspree is
                    dashboard-first and caps its free tier at 50 submissions a
                    month; FormBackend has no JSON webhook or submission
                    dashboard; FormKeep is solid but trial-only with a bigger
                    feature surface than most projects need. Formy is the one
                    endpoint, JSON POST, webhooks, a dashboard you can export
                    from, and a free tier — with a one-line migration from any
                    of them.
                </p>
            </div>

            <h2 className="text-xl font-semibold text-on-surface mb-4">
                Formy vs the alternatives, at a glance
            </h2>
            <ComparisonTable slugs={order} />
            <p className="text-xs text-on-surface-variant leading-relaxed mt-3 mb-10">
                Feature comparisons reflect the public capabilities of each
                service as of 1 August 2026. Pricing and limits change — verify
                on each provider&apos;s site before switching.
            </p>

            <h2 className="text-xl font-semibold text-on-surface mb-4">
                The alternatives in detail
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                {order.map((slug) => (
                    <Link
                        key={slug}
                        href={`/alternatives/${slug}`}
                        className="block bg-surface-container-lowest border border-border-muted rounded-xl p-6 hover:border-primary/40 transition-colors"
                    >
                        <div className="mb-3">
                            <CompetitorLogo
                                slug={slug}
                                name={brandNames[slug]}
                                iconOnly={slug === "formkeep"}
                            />
                        </div>
                        <p className="text-sm text-on-surface-variant leading-relaxed">
                            {verdicts[slug]}
                        </p>
                        <span className="inline-block mt-4 text-xs font-semibold text-primary">
                            Read the {brandNames[slug]} alternative &rarr;
                        </span>
                    </Link>
                ))}
            </div>

            <h2 className="text-xl font-semibold text-on-surface mb-4">
                How to compare a form backend
            </h2>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-10 max-w-2xl">
                Judge a form backend on five things: webhooks (can your systems
                consume submissions as JSON?), a dashboard (can you search and
                export history?), no field builder (do you keep your own
                markup?), raw JSON POST (any field names, no schema), and a free
                tier. Everything else — pricing pages, integration counts,
                &ldquo;AI features&rdquo; — is noise for a pipe that just moves form data.
                For the full reasoning, read{" "}
                <Link
                    href="/blog/form-backend-as-a-service"
                    className="text-primary hover:brightness-90 underline underline-offset-3"
                >
                    what to look for in a form backend as a service
                </Link>{" "}
                and the{" "}
                <Link
                    href="/blog/best-form-backend-for-developers"
                    className="text-primary hover:brightness-90 underline underline-offset-3"
                >
                    best form backend for developers comparison
                </Link>
                .
            </p>

            <div className="text-center bg-on-surface text-surface rounded-xl py-10 px-6">
                <h2 className="text-xl font-bold mb-2">
                    Stop comparing, start collecting
                </h2>
                <p className="text-sm text-surface/70 max-w-md mx-auto mb-6">
                    One POST endpoint per form. Any JSON. No field builder, no
                    SDK, no config — with webhooks, a dashboard, and export from
                    day one.
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
