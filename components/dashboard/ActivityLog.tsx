"use client";

import Link from "next/link";
import { FileText } from "lucide-react";
import { timeAgo } from "@/lib/utils";

interface ActivityItem {
    id: string;
    formTitle: string;
    formId: string;
    createdAt: string;
}

export function ActivityLog({
    items,
    total,
}: {
    items: ActivityItem[];
    total: number;
}) {
    return (
        <>
            <div>
                <h1 className="text-xl font-semibold text-on-surface tracking-tight">Activity</h1>
                <p className="text-sm text-on-surface-variant mt-1">{total} submission{total !== 1 ? "s" : ""}</p>
            </div>

            {items.length === 0 ? (
                <div className="border border-border-muted rounded-lg bg-surface-container-lowest">
                    <div className="flex flex-col items-center justify-center py-24">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                            <FileText size={24} className="text-primary" />
                        </div>
                        <h3 className="text-base font-semibold text-on-surface mb-1">No activity yet</h3>
                        <p className="text-sm text-on-surface-variant">Submissions will appear here.</p>
                    </div>
                </div>
            ) : (
                <div className="space-y-1">
                    {items.map((a) => (
                        <Link
                            key={a.id}
                            href={`/dashboard/forms/${a.formId}/submissions/${a.id}`}
                            className="flex items-center justify-between px-4 py-3 rounded-lg bg-surface-container-lowest border border-border-muted hover:border-primary/30 transition-colors group"
                        >
                            <div className="min-w-0">
                                <p className="text-sm font-medium text-on-surface group-hover:text-primary transition-colors">
                                    {a.formTitle}
                                </p>
                                <p className="text-xs text-on-surface-variant mt-0.5">New submission</p>
                            </div>
                            <p className="text-xs text-on-surface-variant shrink-0 ml-4">{timeAgo(a.createdAt)}</p>
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
}
