import Link from "next/link";
import Image from "next/image";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center px-4 bg-background">
            <Link href="/" className="mb-8 flex items-center gap-3">
                <Image src="/logo.png" alt="Formy" width={40} height={40} className="h-10 w-auto" />
                <div>
                    <span className="text-xl font-bold text-on-surface">Formy</span>
                    <p className="text-[10px] font-mono text-on-surface-variant uppercase tracking-wider opacity-70 -mt-0.5">Form Builder</p>
                </div>
            </Link>
            <div className="w-full max-w-[400px] rounded-xl border-t-4 border-primary bg-white p-10 stat-card-shadow relative">
                {children}
            </div>
            <div className="mt-8 flex justify-center gap-4 font-mono text-[11px] uppercase tracking-widest text-outline">
                <Link href="/" className="hover:text-on-surface transition-colors">Home</Link>
                <span className="text-border-muted">•</span>
                <a href="#" className="hover:text-on-surface transition-colors">Privacy</a>
                <span className="text-border-muted">•</span>
                <a href="#" className="hover:text-on-surface transition-colors">Terms</a>
            </div>
        </div>
    );
}
