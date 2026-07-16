import type { Metadata } from "next";
import { auth } from "@/app/lib/auth";
import { redirect } from "next/navigation";
import { SettingsForm } from "@/components/dashboard/SettingsForm";

export const metadata: Metadata = {
    title: "Settings | Formy",
    robots: { index: false, follow: false },
};

export default async function SettingsPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; success?: string }>;
}) {
  const session = await auth();
  if (!session?.userId) redirect("/auth");

  const params = await searchParams;

  return (
    <SettingsForm
      email={session.email ?? ""}
      error={params.error}
      success={params.success}
    />
  );
}
