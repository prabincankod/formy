"use client";

import Image from "next/image";
import { useState } from "react";

export type CompetitorSlug =
    | "formy"
    | "formsubmit"
    | "formspree"
    | "formbackend"
    | "formkeep";

const logoUrls: Record<CompetitorSlug, string> = {
    formy: "/logo.png",
    formsubmit: "https://formsubmit.co/image/logo.png",
    formspree: "https://formspree.io/images/formspree-logo-badge.svg",
    formbackend: "https://formbackend.com/images/logo.svg",
    formkeep: "https://www.google.com/s2/favicons?domain=formkeep.com&sz=128",
};

type CompetitorLogoProps = {
    slug: CompetitorSlug;
    name: string;
    iconOnly?: boolean;
    size?: "sm" | "md";
};

export function CompetitorLogo({
    slug,
    name,
    iconOnly = false,
    size = "md",
}: CompetitorLogoProps) {
    const [failed, setFailed] = useState(false);
    const height = size === "sm" ? "h-5" : "h-7";

    if (failed) {
        return (
            <span className="text-[15px] font-bold tracking-tight text-on-surface">
                {name}
            </span>
        );
    }

    return (
        <span className="inline-flex items-center gap-2">
            <Image
                src={logoUrls[slug]}
                alt={`${name} logo`}
                width={160}
                height={32}
                unoptimized
                onError={() => setFailed(true)}
                className={`${height} w-auto object-contain`}
            />
            {iconOnly && (
                <span className="text-[15px] font-bold tracking-tight text-on-surface">
                    {name}
                </span>
            )}
        </span>
    );
}
