function escapeHtml(text: string): string {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function sanitizeUrl(url: string): string {
    const trimmed = url.trim();
    if (/^(https?:\/\/|\/[^/])/i.test(trimmed)) {
        return trimmed.replace(/"/g, "&quot;");
    }
    return "#";
}

function parseInline(text: string): string {
    let out = escapeHtml(text);

    // Imágenes en línea: ![alt](url)
    out = out.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, alt, url) => {
        const safeUrl = sanitizeUrl(url);
        return `<img src="${safeUrl}" alt="${alt}" loading="lazy" />`;
    });

    // Enlaces: [texto](url)
    out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, url) => {
        const safeUrl = sanitizeUrl(url);
        return `<a href="${safeUrl}" target="_blank" rel="noopener noreferrer">${label}</a>`;
    });

    // Negrita: **texto**
    out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");

    // Cursiva: *texto*
    out = out.replace(/\*([^*]+)\*/g, "<em>$1</em>");

    return out;
}

/**
 * Convierte Markdown a HTML limpio para guardar en base de datos
 */
export function markdownToHtml(markdown: string): string {
    if (!markdown) return "";

    const lines = markdown.replace(/\r\n/g, "\n").split("\n");
    const htmlBlocks: string[] = [];
    let i = 0;

    while (i < lines.length) {
        const line = lines[i].trim();

        // Línea vacía
        if (!line) {
            i++;
            continue;
        }

        // Imagen en bloque propio: ![pie de foto](url)
        const standaloneImg = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
        if (standaloneImg) {
            const alt = escapeHtml(standaloneImg[1]);
            const safeUrl = sanitizeUrl(standaloneImg[2]);
            if (alt) {
                htmlBlocks.push(
                    `<figure><img src="${safeUrl}" alt="${alt}" loading="lazy" /><figcaption>${alt}</figcaption></figure>`,
                );
            } else {
                htmlBlocks.push(
                    `<figure><img src="${safeUrl}" alt="" loading="lazy" /></figure>`,
                );
            }
            i++;
            continue;
        }

        // Encabezados (#, ##, ###)
        const headingMatch = line.match(/^(#{1,3})\s+(.+)$/);
        if (headingMatch) {
            const level = headingMatch[1].length + 1; // # -> h2, ## -> h3, ### -> h4
            const tag = `h${Math.min(level, 4)}`;
            htmlBlocks.push(`<${tag}>${parseInline(headingMatch[2])}</${tag}>`);
            i++;
            continue;
        }

        // Cita (> texto)
        if (line.startsWith("> ")) {
            const quoteLines: string[] = [];
            while (i < lines.length && lines[i].trim().startsWith("> ")) {
                quoteLines.push(parseInline(lines[i].trim().slice(2)));
                i++;
            }
            htmlBlocks.push(
                `<blockquote><p>${quoteLines.join("<br />")}</p></blockquote>`,
            );
            continue;
        }

        // Lista desordenada (- o *)
        if (/^[-*]\s+/.test(line)) {
            const items: string[] = [];
            while (i < lines.length && /^[-*]\s+/.test(lines[i].trim())) {
                items.push(
                    `<li>${parseInline(lines[i].trim().replace(/^[-*]\s+/, ""))}</li>`,
                );
                i++;
            }
            htmlBlocks.push(`<ul>${items.join("")}</ul>`);
            continue;
        }

        // Lista ordenada (1. )
        if (/^\d+\.\s+/.test(line)) {
            const items: string[] = [];
            while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
                items.push(
                    `<li>${parseInline(lines[i].trim().replace(/^\d+\.\s+/, ""))}</li>`,
                );
                i++;
            }
            htmlBlocks.push(`<ol>${items.join("")}</ol>`);
            continue;
        }

        // Párrafo normal (agrupa líneas seguidas hasta una línea en blanco)
        const paraLines: string[] = [];
        while (
            i < lines.length &&
            lines[i].trim() !== "" &&
            !/^(#{1,3}\s+|>\s+|[-*]\s+|\d+\.\s+|!\[([^\]]*)\]\(([^)]+)\)$)/.test(
                lines[i].trim(),
            )
        ) {
            paraLines.push(parseInline(lines[i].trim()));
            i++;
        }
        htmlBlocks.push(`<p>${paraLines.join("<br />")}</p>`);
    }

    return htmlBlocks.join("\n");
}

/**
 * Convierte el HTML almacenado de vuelta a Markdown para poder editarlo
 */
export function htmlToMarkdown(html: string): string {
    if (!html) return "";
    // Si aún es texto plano sin etiquetas HTML, lo devolvemos tal cual
    if (!/<[a-z][\s\S]*>/i.test(html)) return html;

    let md = html;

    // Figuras con imagen y figcaption opcional
    md = md.replace(
        /<figure>\s*<img[^>]*src="([^"]+)"[^>]*alt="([^"]*)"[^>]*\/?>\s*(?:<figcaption>([\s\S]*?)<\/figcaption>)?\s*<\/figure>/gi,
        (_, src, alt, caption) => `\n\n![${caption || alt || ""}](${src})\n\n`,
    );

    // Imágenes sueltas
    md = md.replace(
        /<img[^>]*src="([^"]+)"[^>]*alt="([^"]*)"[^>]*\/?>/gi,
        (_, src, alt) => `![${alt || ""}](${src})`,
    );

    // Encabezados
    md = md.replace(/<h2>([\s\S]*?)<\/h2>/gi, "\n\n# $1\n\n");
    md = md.replace(/<h3>([\s\S]*?)<\/h3>/gi, "\n\n## $1\n\n");
    md = md.replace(/<h4>([\s\S]*?)<\/h4>/gi, "\n\n### $1\n\n");

    // Citas
    md = md.replace(
        /<blockquote>\s*<p>([\s\S]*?)<\/p>\s*<\/blockquote>/gi,
        (_, text) => {
            const lines = text
                .split(/<br\s*\/?>/gi)
                .map((l: string) => `> ${l}`);
            return `\n\n${lines.join("\n")}\n\n`;
        },
    );

    // Listas
    md = md.replace(/<ul>([\s\S]*?)<\/ul>/gi, (_, inner) => {
        const items = inner.replace(/<li>([\s\S]*?)<\/li>/gi, "- $1\n");
        return `\n\n${items}\n`;
    });
    md = md.replace(/<ol>([\s\S]*?)<\/ol>/gi, (_, inner) => {
        let idx = 1;
        const items = inner.replace(
            /<li>([\s\S]*?)<\/li>/gi,
            () => `${idx++}. $1\n`,
        );
        return `\n\n${items}\n`;
    });

    // Enlaces, negrita, cursiva y saltos
    md = md.replace(/<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, "[$2]($1)");
    md = md.replace(/<strong>([\s\S]*?)<\/strong>/gi, "**$1**");
    md = md.replace(/<em>([\s\S]*?)<\/em>/gi, "*$1*");
    md = md.replace(/<br\s*\/?>/gi, "\n");
    md = md.replace(/<p>([\s\S]*?)<\/p>/gi, "\n\n$1\n\n");

    // Limpiar entidades y exceso de saltos de línea
    md = md
        .replace(/&quot;/g, '"')
        .replace(/&gt;/g, ">")
        .replace(/&lt;/g, "<")
        .replace(/&amp;/g, "&")
        .replace(/\n{3,}/g, "\n\n")
        .trim();

    return md;
}

/**
 * Extrae texto plano sin etiquetas HTML para los resúmenes de las tarjetas
 */
export function stripHtml(html: string): string {
    return html
        .replace(/<figcaption>[\s\S]*?<\/figcaption>/gi, " ")
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}
