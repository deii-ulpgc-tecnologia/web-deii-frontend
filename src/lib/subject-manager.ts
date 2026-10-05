import { DEGREES, SEMESTERS, TYPES, YEARS } from "@/constants/SubjectsConfig";
import type { MarkdownSubject, SubjectFrontmatter } from "@/types/Subject";
import type { MarkdownInstance } from "astro";
import { z } from "astro/zod";
import { createHash } from "node:crypto";

const modules = import.meta.glob<MarkdownInstance<SubjectFrontmatter>>(
    "@/constants/subjects/*/*/*/*.md",
    { eager: true },
);

const ALLOWED_DEGREES = DEGREES.map((d) => d.id) as [
    MarkdownSubject["degree"],
    ...MarkdownSubject["degree"][],
];
const ALLOWED_YEARS = YEARS.map((y) => y.id) as [
    MarkdownSubject["year"],
    ...MarkdownSubject["year"][],
];
const ALLOWED_SEMESTERS = SEMESTERS.map((s) => s.id) as [
    MarkdownSubject["semester"],
    ...MarkdownSubject["semester"][],
];
const ALLOWED_TYPES = TYPES.map((s) => s.id) as [
    MarkdownSubject["semester"],
    ...MarkdownSubject["semester"][],
];

const DataSchema = z.object({
    degree: z.enum(ALLOWED_DEGREES),
    year: z.enum(ALLOWED_YEARS),
    semester: z.enum(ALLOWED_SEMESTERS),
    type: z.enum(ALLOWED_TYPES),
});

const PATH_REGEX =
    /\/constants\/subjects\/([^/]+)\/([^/]+)\/([^/]+)\/([^/]+)\.md$/;

const ALL_SUBJECTS: MarkdownSubject[] = Object.entries(modules).map(
    ([filePath, file]) => {
        const normalizedPath = filePath.replace(/\\/g, "/");
        const match = normalizedPath.match(PATH_REGEX);

        if (!match) {
            throw new Error(`Invalid subject file path: ${filePath}`);
        }

        const [, degree, year, semester, slug] = match;

        const result = DataSchema.safeParse({
            degree,
            year,
            semester,
            type: file.frontmatter.type,
        });
        if (!result.success) {
            throw new Error(
                `Invalid path metadata for ${slug}: ${JSON.stringify(result.error.format())}`,
            );
        }

        return {
            ...file.frontmatter,
            degree: result.data.degree,
            year: result.data.year,
            semester: result.data.semester,
            slug,
            bg_color: getHexColorFromString(file.frontmatter.name),
            degree_color: getHexColorFromString(result.data.degree),
            Content: file.Content,
        };
    },
);

const SUBJECTS_BY_SLUG = new Map<string, MarkdownSubject>(
    ALL_SUBJECTS.map((s) => [s.slug, s]),
);

export interface SubjectFilter {
    degree?: MarkdownSubject["degree"];
    year?: MarkdownSubject["year"];
    semester?: MarkdownSubject["semester"];
    code?: string;
}

function getHexColorFromString(str: string) {
    const hash = createHash("sha256").update(str).digest();
    const rgb = hash.reduce((acc, byte, index) => {
        const targetIndex = index % 3;
        acc[targetIndex] = (acc[targetIndex] + byte) % 256;
        return acc;
    }, new Uint8Array(3));
    return "#" + Buffer.from(rgb).toString("hex");
}

/**
 * Returns all subjects.
 */
export function getAllSubjects(): MarkdownSubject[] {
    return ALL_SUBJECTS;
}

/**
 * Filters subjects by any combination of criteria (degree, year, semester or code).
 * If no filter is passed, returns all subjects.
 */
export function getSubjects(filter?: SubjectFilter): MarkdownSubject[] {
    if (!filter || Object.keys(filter).length === 0) {
        return ALL_SUBJECTS;
    }

    return ALL_SUBJECTS.filter((subject) => {
        if (filter.degree && subject.degree !== filter.degree) return false;
        if (filter.year && subject.year !== filter.year) return false;
        if (filter.semester && subject.semester !== filter.semester)
            return false;
        if (filter.code && subject.code !== filter.code) return false;
        return true;
    });
}

/**
 * Get Subject by slug.
 */
export function getSubjectBySlug(slug: string): MarkdownSubject | undefined {
    return SUBJECTS_BY_SLUG.get(slug);
}
