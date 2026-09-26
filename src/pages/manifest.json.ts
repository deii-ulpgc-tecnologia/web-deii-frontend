import { SITE } from "@/constants/Site";
import type { APIRoute } from "astro";

export const prerender = true;

export const GET: APIRoute = async () => {
    const manifest = {
        name: SITE.TITLE,
        short_name: SITE.SHORT_TITLE,
        description: SITE.DESCRIPTION,
        start_url: "/",
        display: "standalone",
        background_color: SITE.BACKGROUND_COLOR,
        theme_color: SITE.THEME_COLOR,
        orientation: "portrait-primary",
        categories: SITE.CATEGORIES,
        lang: "es",
        icons: [
            {
                src: "/favicon.svg",
                sizes: "any",
                type: "image/svg+xml",
                purpose: "any maskable",
            },
        ],
    };

    return new Response(JSON.stringify(manifest), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
};
