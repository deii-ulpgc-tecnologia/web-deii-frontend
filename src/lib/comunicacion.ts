import fs from "node:fs/promises";
import path from "node:path";
import { NEWS } from "@/constants/News";
import { EVENTS } from "@/constants/Events";
import { markdownToHtml } from "@/lib/markdown";

export interface ManagedItem {
    id: string;
    type: "news" | "event";
    title: string;
    image: string;
    content: string;
    publishedAt: string;
    tags?: string[];
    division?: string[];
    location?: string;
}

interface RawEntry {
    id: string | number;
    title: string;
    image: string;
    content?: string;
    description?: string;
    publishedAt?: Date | string;
    date?: Date | string;
    tags?: string[];
    division?: string[];
    location?: string;
}

const DATA_DIR = path.resolve(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "comunicacion.json");

async function ensureStore(): Promise<ManagedItem[]> {
    try {
        const raw = await fs.readFile(DATA_FILE, "utf-8");
        return JSON.parse(raw) as ManagedItem[];
    } catch {
        const rawNews = NEWS as unknown as RawEntry[];
        const rawEvents = EVENTS as unknown as RawEntry[];

        const initialNews: ManagedItem[] = rawNews.map((n) => ({
            id: String(n.id),
            type: "news",
            title: n.title,
            image: n.image,
            content: markdownToHtml(n.content ?? ""),
            publishedAt: new Date(n.publishedAt ?? Date.now()).toISOString(),
            tags: n.tags,
            division: n.division,
        }));

        const initialEvents: ManagedItem[] = rawEvents.map((e) => ({
            id: String(e.id),
            type: "event",
            title: e.title,
            image: e.image,
            content: markdownToHtml(e.content ?? e.description ?? ""),
            publishedAt: new Date(
                e.publishedAt ?? e.date ?? Date.now(),
            ).toISOString(),
            tags: e.tags,
            division: e.division,
            location: e.location,
        }));

        const combined = [...initialNews, ...initialEvents];
        await saveAllItems(combined);
        return combined;
    }
}

export async function saveAllItems(items: ManagedItem[]): Promise<void> {
    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.writeFile(DATA_FILE, JSON.stringify(items, null, 2), "utf-8");
}

export async function getAllItems(): Promise<ManagedItem[]> {
    return await ensureStore();
}

export async function getNewsList() {
    const items = await ensureStore();
    return items
        .filter((i) => i.type === "news")
        .map((i) => ({ ...i, publishedAt: new Date(i.publishedAt) }));
}

export async function getEventsList() {
    const items = await ensureStore();
    return items
        .filter((i) => i.type === "event")
        .map((i) => ({
            ...i,
            publishedAt: new Date(i.publishedAt),
            date: new Date(i.publishedAt),
        }));
}
