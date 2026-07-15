import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-32 pb-24 md:pt-48 md:pb-36">
                <div className="max-w-[1200px] mx-auto px-4 md:px-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary text-primary-foreground rounded-full text-[11px] font-mono font-semibold uppercase tracking-widest mb-8 shadow-sm">
                        Soon
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-on-surface leading-[1.05] max-w-4xl mx-auto mb-6">
                        formy is launching soon
                    </h1>
                    <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-12 leading-relaxed">
                        Just plug in your forms, we will do the magic. The backend for forms that developers love. Simple API, robust security, and seamless automation.
                    </p>

                    <div className="max-w-xl mx-auto p-2 bg-surface-container-low border border-border-muted rounded-xl stat-card-shadow">
                        <form
                            action="https://api.web3forms.com/submit"
                            method="POST"
                            className="flex flex-col md:flex-row gap-2"
                        >
                            <input type="hidden" name="access_key" value="ce1766fc-e595-4938-942f-ab63c2e4b9a0" />
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="flex-1 bg-white border-none rounded-lg text-sm px-4 py-4 focus:ring-2 focus:ring-primary transition-all placeholder:text-outline-variant"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                required
                                className="flex-1 bg-white border-none rounded-lg text-sm px-4 py-4 focus:ring-2 focus:ring-primary transition-all placeholder:text-outline-variant"
                            />
                            <Button type="submit" size="lg" className="font-bold whitespace-nowrap">
                                Join Now
                            </Button>
                        </form>
                    </div>

                    <div className="mt-8 flex justify-center items-center gap-4 text-sm text-on-surface-variant/60 font-mono">
                        <span className="flex items-center gap-1">No credit card required</span>
                        <span className="w-1 h-1 bg-border-muted rounded-full" />
                        <span className="flex items-center gap-1">Instant setup</span>
                    </div>
                </div>
            </section>

            {/* Feature Bento Grid */}
            <section className="py-24 bg-surface-container-lowest border-y border-border-muted" id="features">
                <div className="max-w-[1200px] mx-auto px-4 md:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        {/* Large Feature Card */}
                        <div className="md:col-span-8 group relative overflow-hidden bg-surface-container border border-border-muted rounded-xl p-8 md:p-12 transition-all hover:border-primary stat-card-shadow">
                            <div className="max-w-md relative z-10">
                                <h3 className="text-xl font-semibold mb-4 text-on-surface">Effortless Integration</h3>
                                <p className="text-base text-on-surface-variant mb-8 leading-relaxed">
                                    Redirect your form actions to our endpoint and we&apos;ll handle the rest. Validation, storage, and notifications in one go.
                                </p>
                                <div className="bg-on-surface rounded-lg p-4 text-sm font-mono text-surface shadow-xl border-l-4 border-primary">
                                    &lt;form action=&quot;https://api.formy.io/v1/s/YOUR_ID&quot;&gt;
                                </div>
                            </div>
                            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all" />
                        </div>

                        {/* Small Feature Card 1 */}
                        <div className="md:col-span-4 bg-surface-container-low border border-border-muted rounded-xl p-8 transition-all hover:shadow-md stat-card-shadow">
                            <h3 className="text-lg font-semibold mb-2 text-on-surface">Spam Protection</h3>
                            <p className="text-sm text-on-surface-variant leading-relaxed">Built-in Honeypot and validation to keep your inbox clean of bots and noise.</p>
                        </div>

                        {/* Small Feature Card 2 */}
                        <div className="md:col-span-4 bg-surface-container-low border border-border-muted rounded-xl p-8 transition-all hover:shadow-md stat-card-shadow">
                            <h3 className="text-lg font-semibold mb-2 text-on-surface">Real-time Alerts</h3>
                            <p className="text-sm text-on-surface-variant leading-relaxed">Get notified instantly whenever someone fills your form.</p>
                        </div>

                        {/* Medium Feature Card */}
                        <div className="md:col-span-8 bg-surface-container border border-border-muted rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 overflow-hidden group stat-card-shadow">
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold mb-2 text-on-surface">Universal Compatibility</h3>
                                <p className="text-sm text-on-surface-variant leading-relaxed">Works with React, Vue, Webflow, or even plain HTML. No libraries needed.</p>
                            </div>
                            <div className="flex-1 relative h-40 w-full md:w-auto">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent-teal/30 rounded-lg opacity-20 rotate-3 group-hover:rotate-0 transition-transform" />
                                <div className="relative w-full h-full flex items-center justify-center gap-4 text-4xl opacity-60">
                                    <span className="font-bold text-on-surface">React</span>
                                    <span className="text-on-surface-variant">+</span>
                                    <span className="font-bold text-on-surface">Vue</span>
                                    <span className="text-on-surface-variant">+</span>
                                    <span className="font-bold text-on-surface">HTML</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-24 md:py-32 bg-on-surface text-surface">
                <div className="max-w-[1200px] mx-auto px-4 md:px-10 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Ready to simplify your backend?</h2>
                    <p className="text-lg text-surface-variant max-w-xl mx-auto mb-10 leading-relaxed opacity-70">
                        Join developers waiting for the launch of the most powerful form backend ever built.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="https://api.web3forms.com/submit"
                            className="bg-primary text-primary-foreground px-10 py-4 rounded-lg text-base font-bold hover:shadow-[0_0_20px_rgba(255,196,55,0.4)] transition-all active:scale-[0.98] inline-block"
                        >
                            Join the Waitlist
                        </a>
                        <a
                            href="#features"
                            className="border border-surface-variant text-surface px-10 py-4 rounded-lg text-base font-bold hover:bg-surface/10 transition-all inline-block"
                        >
                            View Documentation
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-surface py-12 border-t border-border-muted">
                <div className="max-w-[1200px] mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col gap-2 items-center md:items-start">
                        <img src="/logo.png" alt="Formy" className="h-8 w-auto" />
                        <p className="text-sm text-on-surface-variant">The magic backend for modern forms.</p>
                    </div>
                    <div className="flex gap-8 text-sm text-on-surface-variant">
                        <a href="#" className="hover:text-on-surface transition-colors">Twitter</a>
                        <a href="#" className="hover:text-on-surface transition-colors">GitHub</a>
                        <a href="#" className="hover:text-on-surface transition-colors">Discord</a>
                    </div>
                    <div className="font-mono text-xs text-on-surface-variant/50">
                        &copy; 2024 Formy Inc.
                    </div>
                </div>
            </footer>
        </>
    );
}
