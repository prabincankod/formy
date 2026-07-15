"use client";

import { useTransition, useMemo } from "react";
import { Table } from "antd";
import {
    ArrowLeft,
    Eye,
    Trash2,
    Search,
    Download,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useQueryState, parseAsInteger, parseAsString } from "nuqs";
import { deleteSubmission } from "@/app/actions/forms";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
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

interface SubmissionRow {
    id: string;
    data: Record<string, unknown>;
    createdAt: Date;
}

export function FormSubmissions({
    formId,
    formTitle,
    data,
    total,
    page: initialPage,
    pageSize: initialPageSize,
    search: initialSearch,
}: {
    formId: string;
    formTitle: string;
    data: SubmissionRow[];
    total: number;
    page: number;
    pageSize: number;
    search: string;
}) {
    const router = useRouter();
    const [, startTransition] = useTransition();

    const [page, setPage] = useQueryState(
        "page",
        parseAsInteger
            .withDefault(1)
            .withOptions({ shallow: false, startTransition })
    );
    const [searchInput, setSearchInput] = useQueryState(
        "search",
        parseAsString.withDefault("").withOptions({ shallow: false, startTransition })
    );

    const columns = useMemo(
        () => [
            {
                title: "ID",
                dataIndex: "id",
                key: "id",
                width: 80,
                render: (id: string) => (
                    <code className="text-xs text-muted-foreground">
                        {id.slice(0, 8)}…
                    </code>
                ),
            },
            {
                title: "Data",
                key: "data",
                render: (_: unknown, record: SubmissionRow) => {
                    const entries = Object.entries(record.data).slice(0, 3);
                    return (
                        <div className="flex flex-wrap gap-1">
                            {entries.map(([key, value]) => (
                                <Badge key={key} variant="outline" className="text-xs">
                                    {key}: {String(value).slice(0, 30)}
                                </Badge>
                            ))}
                            {Object.keys(record.data).length > 3 && (
                                <Badge variant="outline" className="text-xs text-muted-foreground">
                                    +{Object.keys(record.data).length - 3} more
                                </Badge>
                            )}
                        </div>
                    );
                },
            },
            {
                title: "Submitted",
                dataIndex: "createdAt",
                key: "createdAt",
                width: 180,
                render: (date: Date) => (
                    <span className="text-sm text-muted-foreground">
                        {new Date(date).toLocaleString()}
                    </span>
                ),
            },
            {
                title: "",
                key: "actions",
                width: 100,
                render: (_: unknown, record: SubmissionRow) => (
                    <div className="flex gap-1">
                        <Tooltip>
                            <TooltipTrigger
                                render={<Button
                                    variant="ghost"
                                    size="icon-sm"
                                    onClick={() =>
                                        router.push(
                                            `/dashboard/forms/${formId}/submissions/${record.id}`
                                        )
                                    }
                                />}
                            >
                                <Eye size={14} />
                            </TooltipTrigger>
                            <TooltipContent>View details</TooltipContent>
                        </Tooltip>
                        <AlertDialog>
                            <Tooltip>
                                <TooltipTrigger
                                    render={
                                        <AlertDialogTrigger
                                            render={<Button variant="ghost" size="icon-sm" />}
                                        >
                                            <Trash2 size={14} className="text-destructive" />
                                        </AlertDialogTrigger>
                                    }
                                />
                                <TooltipContent>Delete</TooltipContent>
                            </Tooltip>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Delete this submission?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction
                                        variant="destructive"
                                        onClick={async () => {
                                            await deleteSubmission(record.id);
                                            router.refresh();
                                        }}
                                    >
                                        Delete
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                ),
            },
        ],
        [formId, router]
    );

    const handleExport = () => {
        const a = document.createElement("a");
        a.href = `/api/forms/${formId}/export`;
        a.click();
    };

    return (
        <div className="space-y-6">
            <Button
                variant="ghost"
                onClick={() => router.push(`/dashboard/forms/${formId}`)}
                className="-ml-2"
            >
                <ArrowLeft size={16} />
                Back to form
            </Button>

            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-foreground">Submissions</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                        {formTitle} &middot; {total} total
                    </p>
                </div>
                <Button variant="outline" onClick={handleExport}>
                    <Download size={16} />
                    Export CSV
                </Button>
            </div>

            <div className="flex items-center gap-2">
                <div className="relative w-[280px]">
                    <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        placeholder="Search by ID..."
                        className="pl-9"
                        value={searchInput}
                        onChange={(e) => {
                            setSearchInput(e.target.value || null);
                            setPage(1);
                        }}
                    />
                </div>
            </div>

            <Card>
                <CardContent className="pt-6">
                    <Table
                        dataSource={data}
                        rowKey="id"
                        pagination={{
                            current: page,
                            pageSize: initialPageSize,
                            total,
                            onChange: (p) => setPage(p),
                            showSizeChanger: false,
                        }}
                        locale={{
                            emptyText: (
                                <div className="flex flex-col items-center justify-center py-16">
                                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                                        <Eye size={28} className="text-muted-foreground" />
                                    </div>
                                    <p className="text-sm font-medium text-foreground">
                                        {searchInput ? "No submissions match your search" : "No submissions yet"}
                                    </p>
                                    <p className="mt-1 text-xs text-muted-foreground">
                                        {searchInput
                                            ? "Try a different search term."
                                            : "Share your form to start collecting responses."}
                                    </p>
                                </div>
                            ),
                        }}
                        columns={columns}
                    />
                </CardContent>
            </Card>
        </div>
    );
}
