import type { Metadata } from "next";

type ContentMeta = {
    title: string;
    description: string;
    url: string;
    type?: "website" | "article";
    publishedTime?: string;
    image?: string;
};

export function contentMetadata({
    title,
    description,
    url,
    type = "website",
    publishedTime,
    image,
}: ContentMeta): Metadata {
    return {
        openGraph: {
            title,
            description,
            type,
            url,
            siteName: "Formy",
            locale: "en_US",
            ...(publishedTime
                ? { publishedTime, modifiedTime: publishedTime }
                : {}),
            ...(image
                ? {
                      images: [
                          {
                              url: image,
                              width: 1200,
                              height: 630,
                              alt: `Formy — ${title}`,
                          },
                      ],
                  }
                : {}),
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            ...(image ? { images: [image] } : {}),
        },
    };
}
