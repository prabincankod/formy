import { Button } from "@/components/ui/button";
import { login } from "@/app/actions/auth";

export default async function LoginPage({
    searchParams,
}: {
    searchParams: Promise<{ error?: string }>;
}) {
    const params = await searchParams;

    return (
        <>
            <div className="mb-8">
                <h1 className="font-heading text-2xl font-semibold text-on-surface tracking-tight">Sign in</h1>
                <p className="text-sm text-on-surface-variant mt-1">Access your form builder dashboard</p>
            </div>

            {params.error ? (
                <div className="mb-6 rounded-lg bg-error-container/10 border border-error/20 px-4 py-3 flex items-center gap-3">
                    <span className="text-destructive text-sm font-bold">!</span>
                    <p className="text-sm font-medium text-on-error-container">
                        {params.error === "CredentialsSignin"
                            ? "Invalid email or password"
                            : params.error}
                    </p>
                </div>
            ) : null}

            <form action={login} className="space-y-5">
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
                        className="mt-1 block w-full rounded-lg border border-border-muted bg-white px-4 py-3 text-on-surface outline-none transition-all focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder:text-outline-variant"
                        placeholder="••••••••"
                    />
                </div>

                <Button type="submit" className="w-full font-semibold">
                    Sign in
                </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-border-muted text-center">
                <p className="text-sm text-on-surface-variant">
                    Don&apos;t have an account?{" "}
                    <a
                        href="/auth/register"
                        className="text-on-surface font-semibold hover:underline ml-1"
                    >
                        Register
                    </a>
                </p>
            </div>
        </>
    );
}
