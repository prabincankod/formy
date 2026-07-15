import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default async function SuccessPage({
    searchParams,
}: {
    searchParams: Promise<{ title?: string }>;
}) {
    const params = await searchParams;

    return (
        <div className="flex min-h-screen flex-col items-center justify-center px-4 bg-background">
            <div className="max-w-[480px] w-full text-center space-y-8">
                <div className="relative inline-block">
                    <div className="flex items-center justify-center w-24 h-24 rounded-full bg-primary shadow-xl shadow-primary/10">
                        <CheckCircle size={48} className="text-primary-foreground" />
                    </div>
                </div>

                <div>
                    <h1 className="text-2xl font-semibold text-on-surface tracking-tight">
                        Submission received!
                    </h1>
                    <p className="mt-2 text-base text-on-surface-variant leading-relaxed">
                        {params.title
                            ? <>Your response for <span className="font-bold text-on-surface">&apos;{params.title}&apos;</span> has been submitted successfully.</>
                            : "Your response has been submitted successfully."}
                    </p>
                    <p className="mt-1 text-sm text-on-surface-variant">
                        Thank you for your time.
                    </p>
                </div>

                <div>
                    <Link
                        href="/"
                        className="group relative inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:brightness-110 active:scale-[0.98] shadow-md"
                    >
                        Back to Formy
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <div className="p-4 rounded-xl border border-border-muted bg-surface-container-lowest flex items-center gap-4 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
                            <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </div>
                        <div className="text-left">
                            <p className="label-caps text-on-surface-variant">NOTIFICATION</p>
                            <p className="text-sm text-on-surface">Email copy sent</p>
                        </div>
                    </div>
                    <div className="p-4 rounded-xl border border-border-muted bg-surface-container-lowest flex items-center gap-4 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
                            <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <div className="text-left">
                            <p className="label-caps text-on-surface-variant">LOGS</p>
                            <p className="text-sm text-on-surface">Stored in Dashboard</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-8 pt-4 opacity-40 font-mono text-[11px] uppercase tracking-widest text-on-surface-variant">
                    <div className="flex items-center gap-2">
                        Secure
                    </div>
                    <div className="flex items-center gap-2">
                        Encrypted
                    </div>
                </div>
            </div>
        </div>
    );
}
