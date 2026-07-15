import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { AntdRegistry } from "@/components/AntdRegistry";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ConfigProvider } from "antd";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Formy | The Backend for Forms",
    description: "Just plug in your forms, we will do the magic. Simple API, robust security, and seamless automation.",
    icons: {
        icon: "/logo.png",
        apple: "/logo.png",
    },
    openGraph: {
        title: "Formy | The Backend for Forms",
        description: "Just plug in your forms, we will do the magic. Simple API, robust security, and seamless automation.",
        siteName: "Formy",
        images: [{ url: "/logo.png" }],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col bg-background text-foreground">
                <Providers>
                    <AntdRegistry>
                        <ConfigProvider
                            theme={{
                                cssVar: {},
                                token: {
                                    colorPrimary: "#FFC437",
                                    colorLink: "#EA4335",
                                    colorInfo: "#EA4335",
                                    borderRadius: 8,
                                    colorBgLayout: "#fcf9f8",
                                    colorBgContainer: "#ffffff",
                                    colorBorderSecondary: "#E5E7EB",
                                    colorText: "#1c1b1b",
                                    colorTextSecondary: "#4f4634",
                                },
                                components: {
                                    Table: {
                                        headerBg: "#f6f3f2",
                                        headerBorderRadius: 8,
                                        borderRadius: 8,
                                        cellPaddingBlock: 10,
                                        cellPaddingInline: 16,
                                        borderColor: "#E5E7EB",
                                        headerSplitColor: "#E5E7EB",
                                        rowHoverBg: "#f6f3f2",
                                    },
                                    Form: {
                                        labelColor: "#1c1b1b",
                                        labelFontSize: 14,
                                        verticalLabelMargin: 4,
                                        itemMarginBottom: 16,
                                    },
                                    Card: {
                                        borderRadius: 8,
                                        colorBorderSecondary: "#E5E7EB",
                                    },
                                    Modal: {
                                        borderRadius: 8,
                                    },
                                    Menu: {
                                        itemBorderRadius: 8,
                                        subMenuItemBorderRadius: 8,
                                        itemColor: "#4f4634",
                                        itemHoverBg: "#ebe7e7",
                                        itemSelectedBg: "#FFC437",
                                        itemSelectedColor: "#000000",
                                    },
                                },
                            }}
                        >
                            <TooltipProvider delay={200}>
                                <NuqsAdapter>{children}</NuqsAdapter>
                            </TooltipProvider>
                        </ConfigProvider>
                    </AntdRegistry>
                </Providers>
            </body>
        </html>
    );
}
