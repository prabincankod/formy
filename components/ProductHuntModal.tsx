"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const LAUNCH = Date.parse("2026-07-20T07:01:00Z");
const STORAGE_KEY = "formy_ph_dismissed";

export function ProductHuntModal() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (Date.now() < LAUNCH) return;
        if (localStorage.getItem(STORAGE_KEY)) return;
        const t = setTimeout(() => setOpen(true), 2000);
        return () => clearTimeout(t);
    }, []);

    const dismiss = () => {
        localStorage.setItem(STORAGE_KEY, "1");
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={(o) => { if (!o) dismiss(); }}>
            <DialogContent showCloseButton={false} className="max-w-sm">
                <DialogHeader className="items-center text-center pt-4">
                    <div className="text-4xl mb-3">🎉</div>
                    <DialogTitle className="text-lg">We&apos;re live on Product Hunt!</DialogTitle>
                    <DialogDescription className="text-sm mt-2 leading-relaxed">
                        Love Formy? An upvote helps us reach more developers.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-2 px-6 pb-6">
                    <a
                        href="https://www.producthunt.com/products/formy?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-formy"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={dismiss}
                    >
                        <Button className="w-full gap-2">
                            <ExternalLink size={14} />
                            Upvote on Product Hunt
                        </Button>
                    </a>
                    <Button variant="ghost" size="sm" onClick={dismiss}>
                        Maybe later
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
