import { SITE } from "@/constants/Site";
import type { APIRoute } from "astro";

export const prerender = true;

export const GET: APIRoute = async () => {
    const robots = `
        User-agent: *
        Allow: /

        # Sitemap
        Sitemap: ${SITE.URL}/sitemap-0.xml

        # Crawl-delay for responsible crawling
        Crawl-delay: 1

        # Block admin and API routes if any
        Disallow: /api/
        Disallow: /_*
    `;

    return new Response(robots, {
        status: 200,
        headers: {
            "Content-Type": "text/plain",
        },
    });
};
