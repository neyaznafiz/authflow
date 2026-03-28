import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://authflownext.vercel.app";

    const routes = [
        "",
        "/signin",
        "/signup",
        "/forgot-password",
        "/verify-otp",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    return [...routes];
}
