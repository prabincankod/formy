export default function AlternativesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="flex-1 pt-16">
            <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">{children}</div>
        </main>
    );
}
