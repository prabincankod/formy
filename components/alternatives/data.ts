import type { CompetitorSlug } from "./logos";

export const brandNames: Record<CompetitorSlug, string> = {
    formy: "Formy",
    formsubmit: "FormSubmit",
    formspree: "Formspree",
    formbackend: "FormBackend",
    formkeep: "FormKeep",
};

export type FeatureRow = {
    label: string;
    values: Record<CompetitorSlug, string>;
};

export const comparisonRows: FeatureRow[] = [
    {
        label: "Webhooks (JSON payload)",
        values: {
            formy: "Yes",
            formsubmit: "No",
            formspree: "Yes",
            formbackend: "No",
            formkeep: "Yes",
        },
    },
    {
        label: "Submission dashboard",
        values: {
            formy: "Yes — search + export",
            formsubmit: "No",
            formspree: "Yes",
            formbackend: "No",
            formkeep: "Yes",
        },
    },
    {
        label: "Own form builder you don't need",
        values: {
            formy: "No (by design)",
            formsubmit: "No",
            formspree: "Yes",
            formbackend: "No",
            formkeep: "No",
        },
    },
    {
        label: "Raw JSON POST",
        values: {
            formy: "Yes",
            formsubmit: "No",
            formspree: "Yes",
            formbackend: "No",
            formkeep: "Yes",
        },
    },
    {
        label: "Free tier",
        values: {
            formy: "Yes",
            formsubmit: "Yes",
            formspree: "Yes (50/mo)",
            formbackend: "No",
            formkeep: "Trial only",
        },
    },
    {
        label: "Setup for a developer",
        values: {
            formy: "Copy a slug",
            formsubmit: "Point at email",
            formspree: "Create form in dashboard",
            formbackend: "Create form in dashboard",
            formkeep: "Create form + token in dashboard",
        },
    },
];
