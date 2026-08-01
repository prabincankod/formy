export function Callout({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="bg-surface-container-low border border-border-muted rounded-xl p-6 my-8">
            <p className="text-sm text-on-surface-variant leading-relaxed">
                <strong className="text-on-surface">{title}:</strong>{" "}
                {children}
            </p>
        </div>
    );
}
