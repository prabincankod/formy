"use client";

import { useState } from "react";
import { Statistic } from "antd";
import {
    FileText,
    Send,
    Clock,
    Inbox,
    Plus,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { CreateFormDialog } from "@/components/dashboard/CreateFormDialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function DashboardHome({
    totalForms,
    totalSubmissions,
    recentSubmissions,
    weeklySubmissions,
    hasForms,
}: {
    totalForms: number;
    totalSubmissions: number;
    recentSubmissions: number;
    weeklySubmissions: number;
    hasForms: boolean;
}) {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-semibold text-on-surface tracking-tight">Overview</h2>
                <p className="mt-1 text-base text-on-surface-variant">
                    Welcome back. Here&apos;s what&apos;s happening with your forms today.
                </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-surface-container-lowest p-6 border border-border-muted rounded-xl stat-card-shadow">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-primary rounded-lg">
                            <FileText size={18} className="text-primary-foreground" />
                        </div>
                    </div>
                    <p className="text-sm text-on-surface-variant">Total Forms</p>
                    <p className="text-3xl font-bold text-on-surface mt-1">{totalForms}</p>
                </div>
                <div className="bg-surface-container-lowest p-6 border border-border-muted rounded-xl stat-card-shadow">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-primary rounded-lg">
                            <Send size={18} className="text-primary-foreground" />
                        </div>
                    </div>
                    <p className="text-sm text-on-surface-variant">Submissions</p>
                    <p className="text-3xl font-bold text-on-surface mt-1">{totalSubmissions}</p>
                </div>
                <div className="bg-surface-container-lowest p-6 border border-border-muted rounded-xl stat-card-shadow">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-primary rounded-lg">
                            <Inbox size={18} className="text-primary-foreground" />
                        </div>
                    </div>
                    <p className="text-sm text-on-surface-variant">Last 30 Days</p>
                    <p className="text-3xl font-bold text-on-surface mt-1">{recentSubmissions}</p>
                </div>
                <div className="bg-surface-container-lowest p-6 border border-border-muted rounded-xl stat-card-shadow">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-primary rounded-lg">
                            <Clock size={18} className="text-primary-foreground" />
                        </div>
                    </div>
                    <p className="text-sm text-on-surface-variant">This Week</p>
                    <p className="text-3xl font-bold text-on-surface mt-1">{weeklySubmissions}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    {hasForms ? (
                        <div className="bg-surface-container-lowest border border-border-muted rounded-xl stat-card-shadow overflow-hidden">
                            <div className="px-6 py-5 border-b border-border-muted">
                                <h3 className="text-lg font-semibold text-on-surface">Recent Activity</h3>
                            </div>
                            <div className="flex flex-col items-center justify-center py-16 text-on-surface-variant">
                                <Inbox size={48} strokeWidth={1} />
                                <p className="mt-4 text-sm font-medium text-on-surface">
                                    {recentSubmissions > 0
                                        ? `${recentSubmissions} submissions in the last 30 days`
                                        : "No recent activity"}
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-surface-container-lowest border border-border-muted rounded-xl stat-card-shadow overflow-hidden">
                            <div className="flex flex-col items-center justify-center py-16 px-6">
                                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                                    <FileText size={40} className="text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold text-on-surface">
                                    Create your first form
                                </h3>
                                <p className="mt-1 max-w-sm text-center text-sm text-on-surface-variant leading-relaxed">
                                    Build a form in seconds. Collect submissions, review
                                    responses, and export data — all from one place.
                                </p>
                                <Button
                                    size="lg"
                                    className="mt-6"
                                    onClick={() => setOpen(true)}
                                >
                                    <Plus size={18} />
                                    Create Form
                                </Button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="space-y-6">
                    <div className="bg-surface-container-lowest border border-border-muted rounded-xl p-6 stat-card-shadow">
                        <h3 className="text-lg font-semibold text-on-surface mb-6">Quick Actions</h3>
                        <div className="space-y-4">
                            <button
                                onClick={() => setOpen(true)}
                                className="w-full h-24 rounded-xl border-2 border-dashed border-border-muted flex flex-col items-center justify-center gap-2 hover:border-primary hover:bg-primary/5 transition-all duration-300 text-on-surface-variant hover:text-on-surface"
                            >
                                <Plus size={24} />
                                <span className="text-sm font-semibold">Create new form</span>
                            </button>
                            {hasForms && (
                                <button
                                    onClick={() => router.push("/dashboard/forms")}
                                    className="w-full h-24 rounded-xl border-2 border-dashed border-border-muted flex flex-col items-center justify-center gap-2 hover:border-on-surface hover:bg-black/5 transition-all duration-300 text-on-surface-variant hover:text-on-surface"
                                >
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
                                    <span className="text-sm font-semibold">View all forms</span>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <CreateFormDialog open={open} onClose={() => setOpen(false)} />
        </div>
    );
}
