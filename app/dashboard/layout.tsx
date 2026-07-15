import { auth } from "@/app/lib/auth";
import { DashboardShell } from "@/components/dashboard/DashboardShell";

export default async function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await auth();

    return (
        <DashboardShell user={session ?? undefined}>
            {children}
        </DashboardShell>
    );
}
