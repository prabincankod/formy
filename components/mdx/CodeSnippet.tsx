export function CodeSnippet({
    label,
    code,
}: {
    label: string;
    code: string;
}) {
    return (
        <div className="overflow-hidden rounded-xl border border-border-muted bg-surface-container-lowest">
            <div className="px-4 py-2 border-b border-border-muted bg-surface-container-low text-xs font-semibold text-on-surface-variant">
                {label}
            </div>
            <pre className="p-4 text-[0.85em] font-mono leading-relaxed text-on-surface overflow-x-auto select-all">
                {code}
            </pre>
        </div>
    );
}
