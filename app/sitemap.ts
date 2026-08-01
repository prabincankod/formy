import type { MetadataRoute } from "next";

const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://formy.prasuco.com";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: baseUrl, lastModified: new Date(), priority: 1 },
        { url: `${baseUrl}/auth`, lastModified: new Date(), priority: 0.3 },
        {
            url: `${baseUrl}/auth/register`,
            lastModified: new Date(),
            priority: 0.3,
        },
        { url: `${baseUrl}/success`, lastModified: new Date(), priority: 0.2 },
        { url: `${baseUrl}/blog`, lastModified: new Date(), priority: 0.8 },
        {
            url: `${baseUrl}/blog/serverless-form-handling`,
            lastModified: new Date("2026-07-01"),
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/form-backend-as-a-service`,
            lastModified: new Date("2026-07-08"),
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/best-form-backend-for-developers`,
            lastModified: new Date("2026-07-15"),
            priority: 0.7,
        },
        { url: `${baseUrl}/use-cases`, lastModified: new Date(), priority: 0.8 },
        {
            url: `${baseUrl}/use-cases/doctor-appointment-form`,
            lastModified: new Date(),
            priority: 0.6,
        },
        {
            url: `${baseUrl}/use-cases/cleaning-appointment-form`,
            lastModified: new Date(),
            priority: 0.6,
        },
    ];
}
