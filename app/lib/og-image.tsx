import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

let soraFonts: Record<number, Buffer> | null = null;

async function getSoraFonts() {
    if (!soraFonts) {
        const dir = join(process.cwd(), "assets/fonts");
        soraFonts = {
            400: await readFile(join(dir, "Sora-Regular.ttf")),
            700: await readFile(join(dir, "Sora-Bold.ttf")),
            800: await readFile(join(dir, "Sora-ExtraBold.ttf")),
        };
    }
    return soraFonts;
}

type OgContent = {
    kicker?: string;
    title: string;
    subtitle?: string;
    footer?: string;
};

export async function renderOgImage({
    kicker,
    title,
    subtitle,
    footer = "formy.prasuco.com",
}: OgContent) {
    const fonts = await getSoraFonts();

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    background: "#fcf9f8",
                    color: "#1c1b1b",
                    display: "flex",
                    fontFamily: "Sora",
                }}
            >
                <div style={{ width: 14, background: "#FFC437" }} />
                <div
                    style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        padding: "56px 72px 48px 56px",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                        <div
                            style={{
                                width: 44,
                                height: 44,
                                borderRadius: 12,
                                background: "#FFC437",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <span
                                style={{
                                    fontSize: 26,
                                    fontWeight: 800,
                                    color: "#1c1b1b",
                                }}
                            >
                                F
                            </span>
                        </div>
                        <span style={{ fontSize: 26, fontWeight: 800 }}>
                            Formy
                        </span>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {kicker ? (
                            <div
                                style={{
                                    fontSize: 18,
                                    fontWeight: 700,
                                    color: "#8a6d1a",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.14em",
                                    marginBottom: 18,
                                }}
                            >
                                {kicker}
                            </div>
                        ) : null}
                        <div
                            style={{
                                fontSize: 54,
                                fontWeight: 800,
                                lineHeight: 1.15,
                                maxWidth: 950,
                            }}
                        >
                            {title}
                        </div>
                        {subtitle ? (
                            <div
                                style={{
                                    fontSize: 22,
                                    color: "#4f4634",
                                    marginTop: 16,
                                    lineHeight: 1.4,
                                    maxWidth: 850,
                                }}
                            >
                                {subtitle}
                            </div>
                        ) : null}
                    </div>

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            borderTop: "2px solid #e5e2e1",
                            paddingTop: 20,
                        }}
                    >
                        <span
                            style={{ fontSize: 18, fontWeight: 600, color: "#4f4634" }}
                        >
                            {footer}
                        </span>
                        <span
                            style={{ fontSize: 18, fontWeight: 600, color: "#4f4634" }}
                        >
                            One POST endpoint per form.
                        </span>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
            fonts: [
                { name: "Sora", data: fonts[400], style: "normal", weight: 400 },
                { name: "Sora", data: fonts[700], style: "normal", weight: 700 },
                { name: "Sora", data: fonts[800], style: "normal", weight: 800 },
            ],
        },
    );
}
