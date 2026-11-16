import type { APIRoute } from "astro";
import {
    getAllItems,
    saveAllItems,
    type ManagedItem,
} from "@/lib/comunicacion";
import { markdownToHtml } from "@/lib/markdown";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();
        const items = await getAllItems();

        const prefix = body.type === "event" ? "event" : "news";
        const newItem: ManagedItem = {
            id: `${prefix}-${Date.now()}`,
            type: body.type === "event" ? "event" : "news",
            title: String(body.title || "").trim(),
            image: String(body.image || "").trim(),
            content: markdownToHtml(String(body.content || "")),
            publishedAt: body.publishedAt
                ? new Date(body.publishedAt).toISOString()
                : new Date().toISOString(),
            tags: Array.isArray(body.tags) ? body.tags : [],
            division: Array.isArray(body.division) ? body.division : [],
            location: body.location ? String(body.location).trim() : undefined,
        };

        items.unshift(newItem);
        await saveAllItems(items);

        return new Response(JSON.stringify({ ok: true, item: newItem }), {
            status: 201,
        });
    } catch {
        return new Response(
            JSON.stringify({ ok: false, error: "Error al crear" }),
            { status: 500 },
        );
    }
};

export const PUT: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();
        const items = await getAllItems();
        const index = items.findIndex((i) => i.id === body.id);

        if (index === -1) {
            return new Response(
                JSON.stringify({ ok: false, error: "No encontrado" }),
                { status: 404 },
            );
        }

        items[index] = {
            ...items[index],
            type: body.type === "event" ? "event" : "news",
            title: String(body.title || "").trim(),
            image: String(body.image || "").trim(),
            content: markdownToHtml(String(body.content || "")),
            publishedAt: body.publishedAt
                ? new Date(body.publishedAt).toISOString()
                : items[index].publishedAt,
            tags: Array.isArray(body.tags) ? body.tags : [],
            division: Array.isArray(body.division) ? body.division : [],
            location: body.location ? String(body.location).trim() : undefined,
        };

        await saveAllItems(items);
        return new Response(JSON.stringify({ ok: true, item: items[index] }), {
            status: 200,
        });
    } catch {
        return new Response(
            JSON.stringify({ ok: false, error: "Error al actualizar" }),
            { status: 500 },
        );
    }
};

export const DELETE: APIRoute = async ({ request }) => {
    try {
        const { id } = await request.json();
        const items = await getAllItems();
        const filtered = items.filter((i) => i.id !== id);

        await saveAllItems(filtered);
        return new Response(JSON.stringify({ ok: true }), { status: 200 });
    } catch {
        return new Response(
            JSON.stringify({ ok: false, error: "Error al eliminar" }),
            { status: 500 },
        );
    }
};
