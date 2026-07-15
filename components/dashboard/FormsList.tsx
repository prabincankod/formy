"use client";

import { useState, useTransition } from "react";
import { Table } from "antd";
import { Plus, FileText, Trash2 } from "lucide-react";
import Link from "next/link";
import { CreateFormDialog } from "@/components/dashboard/CreateFormDialog";
import { deleteForm } from "@/app/actions/forms";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface FormRow {
    id: string;
    title: string;
    slug: string;
    submissions: number;
}

export function FormsList({ data }: { data: FormRow[] }) {
    const [open, setOpen] = useState(false);
    const [, startTransition] = useTransition();
    const router = useRouter();

    return (
        <div>
            <div className="flex items-baseline justify-between mb-8">
                <div>
                    <h2 className="text-2xl font-semibold text-on-surface tracking-tight">Forms</h2>
                    <p className="text-base text-on-surface-variant">Manage and analyze your active form submissions.</p>
                </div>
                <Button onClick={() => setOpen(true)}>
                    <Plus size={16} />
                    Create Form
                </Button>
            </div>

            <CreateFormDialog open={open} onClose={() => setOpen(false)} />

            <div className="bg-surface-container-lowest border border-border-muted rounded-xl overflow-hidden stat-card-shadow">
                <Table
                    dataSource={data}
                    rowKey="id"
                    pagination={false}
                    locale={{
                        emptyText: (
                            <div className="flex flex-col items-center justify-center py-24">
                                <div className="relative w-48 h-48 mb-8">
                                    <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl opacity-50" />
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <FileText size={64} className="text-primary/40" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-on-surface mb-2">No forms yet</h3>
                                <p className="text-base text-on-surface-variant max-w-sm mb-8 text-center">
                                    Get started by creating your first form to capture responses and grow your audience.
                                </p>
                                <Button size="lg" onClick={() => setOpen(true)}>
                                    <Plus size={18} />
                                    Create Your First Form
                                </Button>
                            </div>
                        ),
                    }}
                    columns={[
                        {
                            title: (
                                <span className="label-caps text-on-surface-variant">Title</span>
                            ),
                            dataIndex: "title",
                            key: "title",
                            render: (title: string, record: FormRow) => (
                                <div>
                                    <Link
                                        href={`/dashboard/forms/${record.id}`}
                                        className="text-lg font-semibold text-on-surface hover:underline decoration-primary decoration-2 underline-offset-4"
                                    >
                                        {title}
                                    </Link>
                                </div>
                            ),
                        },
                        {
                            title: (
                                <span className="label-caps text-on-surface-variant">Slug</span>
                            ),
                            dataIndex: "slug",
                            key: "slug",
                            render: (slug: string) => (
                                <span className="text-sm font-mono bg-surface-container-highest px-2 py-1 rounded text-on-surface-variant">
                                    /{slug}
                                </span>
                            ),
                        },
                        {
                            title: (
                                <span className="label-caps text-on-surface-variant">Submissions</span>
                            ),
                            dataIndex: "submissions",
                            key: "submissions",
                            align: "right" as const,
                            render: (count: number) => (
                                <span className="text-lg font-bold text-on-surface">{count}</span>
                            ),
                        },
                        {
                            title: "",
                            key: "actions",
                            width: 60,
                            render: (_: unknown, record: FormRow) => (
                                <AlertDialog>
                                    <AlertDialogTrigger
                                        render={<Button variant="ghost" size="icon-sm" />}
                                    >
                                        <Trash2 size={14} className="text-on-surface-variant hover:text-destructive transition-colors" />
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Delete this form?</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                All submissions will be deleted.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                            <AlertDialogAction
                                                variant="destructive"
                                                onClick={() => startTransition(() => deleteForm(record.id))}
                                            >
                                                Delete
                                            </AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            ),
                        },
                    ]}
                />
            </div>
        </div>
    );
}
