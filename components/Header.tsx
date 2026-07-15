import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border-muted">
            <div className="max-w-[1200px] mx-auto h-20 flex items-center justify-between px-4 md:px-10">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.png" alt="Formy" width={32} height={32} className="h-8 w-auto" />
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <a className="text-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#features">Features</a>
                    <a className="text-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#docs">Docs</a>
                    <a className="text-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#pricing">Pricing</a>
                </div>

                <Link
                    href="/auth"
                    className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold hover:brightness-95 transition-all active:scale-[0.98]"
                >
                    Get Started
                </Link>
            </div>
        </header>
    )
}
