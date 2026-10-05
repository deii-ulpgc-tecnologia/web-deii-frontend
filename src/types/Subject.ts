import type { DEGREES, SEMESTERS, YEARS } from "@/constants/SubjectsConfig";
import type { MarkdownInstance } from "astro";

export interface SubjectFrontmatter {
    name: string;
    code: string;
    credits: number;
    type: string;
    description: string;
    subject_url: string;
    teaching_guide: string;
}

export interface MarkdownSubject extends SubjectFrontmatter {
    degree: (typeof DEGREES)[number]["id"];
    year: (typeof YEARS)[number]["id"];
    semester: (typeof SEMESTERS)[number]["id"];
    slug: string;
    bg_color: string;
    degree_color: string;
    Content: MarkdownInstance<SubjectFrontmatter>["Content"];
}
