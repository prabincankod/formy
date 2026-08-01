import { comparisonRows, brandNames } from "./data";
import { CompetitorLogo, type CompetitorSlug } from "./logos";

function tone(value: string) {
    if (value === "Yes") return "text-emerald-600 font-semibold";
    if (value === "No") return "text-on-surface-variant/70";
    return "text-on-surface-variant";
}

export function ComparisonTable({
    slugs,
}: {
    slugs: readonly CompetitorSlug[];
}) {
    const brands: CompetitorSlug[] = [
        "formy",
        ...slugs.filter((s) => s !== "formy"),
    ];

    return (
        <div className="overflow-x-auto rounded-xl border border-border-muted bg-surface-container-lowest">
            <table className="w-full text-sm">
                <thead>
                    <tr className="border-b border-border-muted bg-surface-container-low">
                        <th className="text-left text-xs font-semibold uppercase tracking-wider text-on-surface-variant px-4 py-3 min-w-[180px]">
                            Feature
                        </th>
                        {brands.map((slug) => (
                            <th
                                key={slug}
                                className={`text-left px-4 py-3 min-w-[150px] ${
                                    slug === "formy" ? "bg-primary/10" : ""
                                }`}
                            >
                                <CompetitorLogo
                                    slug={slug}
                                    name={brandNames[slug]}
                                    iconOnly={slug === "formy" || slug === "formkeep"}
                                    size="sm"
                                />
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {comparisonRows.map((row, i) => (
                        <tr
                            key={row.label}
                            className={
                                i === comparisonRows.length - 1
                                    ? ""
                                    : "border-b border-border-muted"
                            }
                        >
                            <td className="text-on-surface px-4 py-3 font-medium">
                                {row.label}
                            </td>
                            {brands.map((slug) => (
                                <td
                                    key={slug}
                                    className={`px-4 py-3 ${
                                        slug === "formy"
                                            ? "bg-primary/10"
                                            : ""
                                    }`}
                                >
                                    <span className={tone(row.values[slug])}>
                                        {row.values[slug]}
                                    </span>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
