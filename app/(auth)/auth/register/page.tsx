import { Button } from "@/components/ui/button";
import { register } from "@/app/actions/auth";

export default async function RegisterPage({
    searchParams,
}: {
    searchParams: Promise<{ error?: string }>;
}) {
    const params = await searchParams;

    return (
        <>
            <div className="mb-8">
                <h1 className="font-heading text-2xl font-semibold text-on-surface tracking-tight">Create your account</h1>
                <p className="text-sm text-on-surface-variant mt-1">Start building forms in seconds</p>
            </div>

            {params.error ? (
                <div className="mb-6 rounded-lg bg-error-container/10 border border-error/20 px-4 py-3 flex items-center gap-3">
                    <span className="text-destructive text-sm font-bold">!</span>
                    <p className="text-sm font-medium text-on-error-container">{params.error}</p>
                </div>
            ) : null}

            <form action={register} className="space-y-5">
                <div className="space-y-2">
                    <label
                        htmlFor="email"
                        className="label-caps block text-on-surface-variant"
                    >
                        Email Address
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="mt-1 block w-full rounded-lg border border-border-muted bg-white px-4 py-3 text-on-surface outline-none transition-all focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder:text-outline-variant"
                        placeholder="name@company.com"
                    />
                </div>

                <div className="space-y-2">
                    <label
                        htmlFor="password"
                        className="label-caps block text-on-surface-variant"
                    >
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        minLength={8}
                        className="mt-1 block w-full rounded-lg border border-border-muted bg-white px-4 py-3 text-on-surface outline-none transition-all focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder:text-outline-variant"
                        placeholder="Min. 8 characters"
                    />
                </div>

                <Button type="submit" className="w-full font-semibold">
                    Create account
                </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-border-muted text-center">
                <p className="text-sm text-on-surface-variant">
                    Already have an account?{" "}
                    <a
                        href="/auth"
                        className="text-on-surface font-semibold hover:underline ml-1"
                    >
                        Sign in
                    </a>
                </p>
            </div>
        </>
    );
}
