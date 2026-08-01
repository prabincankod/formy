import type { Metadata } from "next";
import Link from "next/link";
import { Stethoscope, Sparkles } from "lucide-react";
import { contentMetadata } from "@/app/lib/seo";
import {
    h1 as doctorH1,
    metadata as doctorMeta,
} from "@/content/use-cases/doctor-appointment-form.mdx";
import {
    h1 as cleaningH1,
    metadata as cleaningMeta,
} from "@/content/use-cases/cleaning-appointment-form.mdx";

export const metadata: Metadata = {
    title: "Use Cases — Formy | Appointment & Booking Form Examples",
    description:
        "Real form backend examples: appointment booking forms for doctors and cleaning services. Copy the HTML, add your Formy endpoint, done.",
    alternates: {
        canonical: "/use-cases",
    },
    ...contentMetadata({
        title: "Use Cases — Formy | Appointment & Booking Form Examples",
        description:
            "Real form backend examples: appointment booking forms for doctors and cleaning services. Copy the HTML, add your Formy endpoint, done.",
        url: "/use-cases",
        image: "/og/use-cases.png",
    }),
};

const useCases = [
    {
        href: "/use-cases/doctor-appointment-form",
        icon: Stethoscope,
        title: doctorH1,
        description: doctorMeta.description,
    },
    {
        href: "/use-cases/cleaning-appointment-form",
        icon: Sparkles,
        title: cleaningH1,
        description: cleaningMeta.description,
    },
];

export default function UseCasesIndex() {
    return (
        <>
            <p className="text-xs font-mono tracking-widest uppercase text-primary mb-3">
                Use cases
            </p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-on-surface mb-4">
                Appointment forms, done in minutes
            </h1>
            <p className="text-sm text-on-surface-variant leading-relaxed max-w-xl mb-12">
                Grab a ready-to-use HTML form, drop in your endpoint, and start
                collecting bookings. Each example shows the full form and the
                Formy setup behind it.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {useCases.map((useCase) => (
                    <Link
                        key={useCase.href}
                        href={useCase.href}
                        className="block bg-surface-container-lowest border border-border-muted rounded-xl p-6 hover:border-primary/40 transition-colors"
                    >
                        <useCase.icon
                            size={20}
                            className="text-primary mb-4"
                        />
                        <h2 className="text-lg font-semibold text-on-surface mb-2">
                            {useCase.title}
                        </h2>
                        <p className="text-sm text-on-surface-variant leading-relaxed">
                            {useCase.description}
                        </p>
                        <span className="inline-block mt-4 text-xs font-semibold text-primary">
                            View example &rarr;
                        </span>
                    </Link>
                ))}
            </div>
        </>
    );
}
