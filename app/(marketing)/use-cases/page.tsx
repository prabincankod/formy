import type { Metadata } from "next";
import Link from "next/link";
import { Stethoscope, Sparkles } from "lucide-react";

export const metadata: Metadata = {
    title: "Use Cases — Formy | Appointment & Booking Form Examples",
    description:
        "Real form backend examples: appointment booking forms for doctors and cleaning services. Copy the HTML, add your Formy endpoint, done.",
    alternates: {
        canonical: "/use-cases",
    },
};

const useCases = [
    {
        href: "/use-cases/doctor-appointment-form",
        icon: Stethoscope,
        title: "Doctor appointment form",
        description:
            "Collect patient name, phone, preferred date and reason for visit. Post straight to your Formy endpoint and get notified on every booking request.",
    },
    {
        href: "/use-cases/cleaning-appointment-form",
        icon: Sparkles,
        title: "Cleaning service appointment form",
        description:
            "Take cleaning bookings — service type, address, date — without a booking engine. Perfect for cleaners who want a simple form on their site.",
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
