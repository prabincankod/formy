export interface UseCaseModule {
    default: React.ComponentType;
    metadata: {
        title: string;
        description: string;
    };
    h1: string;
    cta: {
        title: string;
        body: string;
        label: string;
    };
}

export const slugs = [
    "doctor-appointment-form",
    "cleaning-appointment-form",
] as const;

export async function getUseCase(slug: string): Promise<UseCaseModule | null> {
    switch (slug) {
        case "doctor-appointment-form":
            return import(
                "@/content/use-cases/doctor-appointment-form.mdx"
            ) as Promise<UseCaseModule>;
        case "cleaning-appointment-form":
            return import(
                "@/content/use-cases/cleaning-appointment-form.mdx"
            ) as Promise<UseCaseModule>;
        default:
            return null;
    }
}
