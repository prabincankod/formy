"use client";

import { useState } from "react";
import { LayoutDashboard, FileText, Settings, Menu as MenuIcon, LogOut, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { logout } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const menuItems = [
    {
        key: "/dashboard",
        icon: <LayoutDashboard size={18} />,
        label: <Link href="/dashboard">Dashboard</Link>,
    },
    {
        key: "/dashboard/forms",
        icon: <FileText size={18} />,
        label: <Link href="/dashboard/forms">Forms</Link>,
    },
    {
        key: "/dashboard/settings",
        icon: <Settings size={18} />,
        label: <Link href="/dashboard/settings">Settings</Link>,
    },
];

export function DashboardShell({
    children,
    user,
}: {
    children: React.ReactNode;
    user?: { email?: string | null };
}) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    return (
        <div className="flex min-h-screen bg-background">
            {mobileOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                    onClick={() => setMobileOpen(false)}
                />
            )}

            <aside
                className={`fixed left-0 top-0 z-50 h-screen w-[240px] bg-surface-container-low border-r border-border-muted flex flex-col transition-transform duration-300 ${
                    mobileOpen ? "translate-x-0" : "-translate-x-full"
                } lg:translate-x-0`}
            >
                <div className="px-6 py-8 mb-6">
                    <Image src="/logo.png" alt="Formy" width={32} height={32} className="h-8 w-auto" />
                    <p className="mt-2 text-[10px] font-mono text-on-surface-variant uppercase tracking-wider opacity-70">Form Builder</p>
                </div>

                <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.key;
                        return (
                            <div
                                key={item.key}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                                    isActive
                                        ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                                        : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
                                }`}
                            >
                                {item.icon}
                                {item.label}
                            </div>
                        );
                    })}
                </nav>

                <div className="p-3 border-t border-border-muted">
                    <div className="flex items-center gap-3 px-3 py-2.5 text-sm text-on-surface-variant rounded-xl hover:bg-surface-container-high transition-colors">
                        <User size={16} />
                        <span className="truncate">{user?.email}</span>
                    </div>
                </div>
            </aside>

            <div className="flex-1 flex flex-col lg:ml-[240px]">
                <header className="flex h-16 items-center justify-between bg-surface px-6 border-b border-border-muted shrink-0">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden text-on-surface-variant"
                    >
                        <MenuIcon size={20} />
                    </Button>

                    <div className="ml-auto flex items-center gap-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger
                                render={<button type="button" className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm hover:bg-surface-container-high transition-colors" />}
                            >
                                <Avatar size="sm">
                                    <AvatarFallback className="bg-primary text-primary-foreground">
                                        {user?.email?.charAt(0).toUpperCase()}
                                    </AvatarFallback>
                                </Avatar>
                                <span className="hidden text-sm sm:inline text-on-surface-variant">
                                    {user?.email}
                                </span>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                    <form action={logout} className="w-full">
                                        <button
                                            type="submit"
                                            className="flex w-full items-center gap-1.5 text-left text-sm"
                                        >
                                            <LogOut size={14} />
                                            Sign out
                                        </button>
                                    </form>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </header>

                <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
                    <div className="max-w-[1440px] mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
