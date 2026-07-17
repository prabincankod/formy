"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import type { ComponentProps } from "react";

export function SubmitButton(props: ComponentProps<typeof Button>) {
    const { pending } = useFormStatus();

    return (
        <Button type="submit" {...props} disabled={pending || props.disabled}>
            {pending ? `${props.children}...` : props.children}
        </Button>
    );
}
