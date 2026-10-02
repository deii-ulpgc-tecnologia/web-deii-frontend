import type { DIVISIONS } from "@/constants/Divisions";

export interface News {
    id: string;
    title: string;
    image: string;
    content: string;
    publishedAt: Date;
    tags?: string[];
    division?: (typeof DIVISIONS)[number]["id"][];
}
