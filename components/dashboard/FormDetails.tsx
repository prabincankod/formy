"use client";

import { useState, useRef, useTransition } from "react";
import { Descriptions } from "antd";
import {
    ArrowLeft,
    BarChart3,
    Link as LinkIcon,
    Code2,
    Check,
    Edit3,
    Trash2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { updateForm, deleteForm } from "@/app/actions/forms";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function FormDetails({
    id,
    title,
    slug,
    submissionCount,
}: {
    id: string;
    title: string;
    slug: string;
    submissionCount: number;
}) {
    const router = useRouter();
    const [editOpen, setEditOpen] = useState(false);
    const [pending, startTransition] = useTransition();
    const titleRef = useRef<HTMLInputElement>(null);
    const slugRef = useRef<HTMLInputElement>(null);

    const handleEdit = (e: React.FormEvent) => {
        e.preventDefault();
        const fd = new FormData();
        fd.set("title", titleRef.current?.value || "");
        fd.set("slug", slugRef.current?.value || "");
        startTransition(() => updateForm(id, fd));
    };

    return (
        <div className="space-y-6">
            <Button
                variant="ghost"
                onClick={() => router.push("/dashboard/forms")}
                className="-ml-2"
            >
                <ArrowLeft size={16} />
                Back to forms
            </Button>

            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-foreground">{title}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Form ID: {id}
                    </p>
                </div>

                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        onClick={() => {
                            if (titleRef.current) titleRef.current.value = title;
                            if (slugRef.current) slugRef.current.value = slug;
                            setEditOpen(true);
                        }}
                    >
                        <Edit3 size={16} />
                        Edit
                    </Button>
                    <AlertDialog>
                        <AlertDialogTrigger
                            render={<Button variant="destructive" />}
                        >
                            <Trash2 size={16} />
                            Delete
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Delete this form?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    All submissions and data will be permanently deleted.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                    variant="destructive"
                                    onClick={() => startTransition(() => deleteForm(id))}
                                >
                                    Delete
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                    <Button
                        onClick={() => router.push(`/dashboard/forms/${id}/submissions`)}
                    >
                        <BarChart3 size={16} />
                        Submissions ({submissionCount})
                    </Button>
                </div>
            </div>

            <Card>
                <CardContent className="pt-6">
                    <Descriptions
                        column={{ xs: 1, sm: 2 }}
                        classNames={{ label: "!text-muted-foreground !font-normal" }}
                    >
                        <Descriptions.Item label="Title">{title}</Descriptions.Item>
                        <Descriptions.Item label="Slug">
                            <code className="rounded bg-muted px-2 py-0.5 text-xs">
                                {slug}
                            </code>
                        </Descriptions.Item>
                        <Descriptions.Item label="Submissions">
                            {submissionCount}
                        </Descriptions.Item>
                    </Descriptions>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Submit Endpoint</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center gap-2">
                        <LinkIcon size={16} className="text-muted-foreground" />
                        <code className="flex-1 rounded bg-muted px-3 py-2 text-sm text-muted-foreground">
                            POST /api/submit (slug: {slug})
                        </code>
                        <Button
                            size="sm"
                            onClick={() =>
                                navigator.clipboard.writeText(
                                    `${typeof window !== "undefined" ? window.location.origin : ""}/api/submit`
                                )
                            }
                        >
                            Copy
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <IntegrationGuide slug={slug} />

            <Dialog open={editOpen} onOpenChange={(o) => { if (!o) setEditOpen(false); }}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit Form</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleEdit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="edit-title">Title</Label>
                            <Input
                                id="edit-title"
                                ref={titleRef}
                                defaultValue={title}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="edit-slug">Slug</Label>
                            <Input
                                id="edit-slug"
                                ref={slugRef}
                                defaultValue={slug}
                                pattern="^[a-z0-9-]*$"
                                title="Only lowercase letters, numbers, and hyphens"
                            />
                        </div>
                        <div className="flex justify-end gap-2">
                            <Button type="button" variant="outline" onClick={() => setEditOpen(false)}>
                                Cancel
                            </Button>
                            <Button type="submit" disabled={pending}>
                                {pending ? "Saving..." : "Save"}
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}

function IntegrationGuide({ slug }: { slug: string }) {
    const [htmlCopied, setHtmlCopied] = useState(false);
    const [jsCopied, setJsCopied] = useState(false);
    const [reactCopied, setReactCopied] = useState(false);
    const [vueCopied, setVueCopied] = useState(false);

    const endpoint = "/api/submit";
    const htmlSnippet = `<!-- HTML form -->
<form action="${endpoint}" method="POST" enctype="multipart/form-data">
    <input type="hidden" name="slug" value="${slug}" />

    <label for="name">Name</label>
    <input type="text" name="name" id="name" required />

    <label for="email">Email</label>
    <input type="email" name="email" id="email" required />

    <button type="submit">Submit</button>
</form>`;

    const jsSnippet = `// JavaScript fetch
const formData = new FormData();
formData.set("slug", "${slug}");
formData.set("name", "John Doe");
formData.set("email", "john@example.com");

const res = await fetch("${endpoint}", {
    method: "POST",
    body: formData,
});

const result = await res.json();
// { success: true }`;

    const reactSnippet = `// React component
import { useState } from "react";

export function MyForm() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const fd = new FormData(e.target);
    fd.set("slug", "${slug}");

    const res = await fetch("${endpoint}", {
      method: "POST",
      body: fd,
    });

    if (res.ok) alert("Submitted!");
    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <button type="submit" disabled={submitting}>
        {submitting ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}`;

    const vueSnippet = `<!-- Vue 3 component -->
<template>
  <form @submit.prevent="handleSubmit">
    <input name="name" placeholder="Name" required />
    <input name="email" type="email" placeholder="Email" required />
    <button :disabled="submitting">
      {{ submitting ? "Sending..." : "Submit" }}
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const submitting = ref(false);

async function handleSubmit(e) {
  submitting.value = true;
  const fd = new FormData(e.target);
  fd.set("slug", "${slug}");

  const res = await fetch("${endpoint}", { method: "POST", body: fd });
  if (res.ok) alert("Submitted!");
  submitting.value = false;
}
</script>`;

    const jsonSnippet = `// JSON API — POST with application/json
const res = await fetch("${endpoint}", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    "slug": "${slug}",
    "name": "John Doe",
    "email": "john@example.com"
  })
});

const result = await res.json();
// 201: { success: true }`;

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Code2 size={16} />
                    Integration Guide
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    <div>
                        <p className="mb-1 text-sm text-muted-foreground">
                            Submit data from your own frontend. CORS is enabled for all origins.
                            Accepts{" "}
                            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
                                multipart/form-data
                            </code>{" "}
                            and{" "}
                            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
                                application/json
                            </code>
                            .
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-2 text-sm font-semibold text-foreground">Endpoint</h4>
                        <div className="flex items-center gap-2">
                            <code className="flex-1 rounded bg-muted px-3 py-2 text-sm text-muted-foreground">
                                POST {endpoint}
                            </code>
                            <Button
                                size="sm"
                                variant="outline"
                                onClick={() => {
                                    navigator.clipboard.writeText(endpoint);
                                    setHtmlCopied(true);
                                    setTimeout(() => setHtmlCopied(false), 2000);
                                }}
                            >
                                {htmlCopied ? "Copied" : "Copy"}
                            </Button>
                        </div>
                    </div>

                    <div>
                        <h4 className="mb-2 text-sm font-semibold text-foreground">JSON API</h4>
                        <pre className="overflow-x-auto rounded-lg border border-border bg-muted p-4 text-xs text-foreground">
                            {jsonSnippet}
                        </pre>
                        <Button
                            size="sm"
                            variant="outline"
                            className="mt-2"
                            onClick={() => {
                                navigator.clipboard.writeText(jsonSnippet);
                                setJsCopied(true);
                                setTimeout(() => setJsCopied(false), 2000);
                            }}
                        >
                            {jsCopied ? "Copied" : "Copy JSON"}
                        </Button>
                    </div>

                    <div>
                        <h4 className="mb-2 text-sm font-semibold text-foreground">HTML form</h4>
                        <pre className="overflow-x-auto rounded-lg border border-border bg-muted p-4 text-xs text-foreground">
                            {htmlSnippet}
                        </pre>
                        <Button
                            size="sm"
                            variant="outline"
                            className="mt-2"
                            onClick={() => {
                                navigator.clipboard.writeText(htmlSnippet);
                                setHtmlCopied(true);
                                setTimeout(() => setHtmlCopied(false), 2000);
                            }}
                        >
                            {htmlCopied ? "Copied" : "Copy HTML"}
                        </Button>
                    </div>

                    <div>
                        <h4 className="mb-2 text-sm font-semibold text-foreground">React component</h4>
                        <pre className="overflow-x-auto rounded-lg border border-border bg-muted p-4 text-xs text-foreground">
                            {reactSnippet}
                        </pre>
                        <Button
                            size="sm"
                            variant="outline"
                            className="mt-2"
                            onClick={() => {
                                navigator.clipboard.writeText(reactSnippet);
                                setReactCopied(true);
                                setTimeout(() => setReactCopied(false), 2000);
                            }}
                        >
                            {reactCopied ? "Copied" : "Copy React"}
                        </Button>
                    </div>

                    <div>
                        <h4 className="mb-2 text-sm font-semibold text-foreground">Vue 3 component</h4>
                        <pre className="overflow-x-auto rounded-lg border border-border bg-muted p-4 text-xs text-foreground">
                            {vueSnippet}
                        </pre>
                        <Button
                            size="sm"
                            variant="outline"
                            className="mt-2"
                            onClick={() => {
                                navigator.clipboard.writeText(vueSnippet);
                                setVueCopied(true);
                                setTimeout(() => setVueCopied(false), 2000);
                            }}
                        >
                            {vueCopied ? "Copied" : "Copy Vue"}
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
