import type { News } from "@/types/News";

export const NEWS: News[] = [
    {
        id: "news-001",
        title: "Inicio de obras de modernización en la red principal",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
        content:
            "La División de Infraestructura da comienzo a los trabajos de renovación de cableado y fibra óptica en el campus central para garantizar alta disponibilidad. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem architecto quo eius itaque saepe fuga minus voluptatem sunt? Quasi esse blanditiis velit molestias porro qui voluptatibus nobis? Eligendi aliquam quod quos nobis obcaecati consectetur ex soluta, expedita ad ab odit quisquam porro unde totam vel dolore saepe magnam harum natus. Dolore, doloremque modi voluptate vero laudantium culpa laboriosam corrupti consequuntur sequi aspernatur. Id doloremque, atque neque eos vel quos ipsa nostrum sed non inventore libero corrupti temporibus numquam laudantium est exercitationem amet commodi voluptas fugiat architecto autem illo. Delectus, cumque? Laborum debitis necessitatibus veniam dolorum delectus? Sint culpa pariatur repellendus!",
        publishedAt: new Date("2026-09-15T09:30:00Z"),
        tags: ["infraestructura", "mantenimiento", "redes"],
        division: ["infraestructura"],
    },
    {
        id: "news-002",
        title: "Nueva pasarela peatonal y accesos adaptados",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
        content:
            "Se han finalizado las obras de mejora de accesibilidad en los accesos peatonales sur, garantizando rampas normativas y señalética podotáctil. Eligendi aliquam quod quos nobis obcaecati consectetur ex soluta, expedita ad ab odit quisquam porro unde totam vel dolore saepe magnam harum natus. Dolore, doloremque modi voluptate vero laudantium culpa laboriosam corrupti consequuntur sequi aspernatur.",
        publishedAt: new Date("2026-09-20T11:00:00Z"),
        tags: ["accesibilidad", "urbanismo", "obras"],
        division: ["infraestructura"],
    },
    {
        id: "news-003",
        title: "Mantenimiento preventivo en centros de transformación eléctrica",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
        content:
            "Durante el próximo fin de semana se programarán cortes parciales de suministro eléctrico de 02:00 a 06:00 para la revisión de los transformadores.",
        publishedAt: new Date("2026-09-25T16:45:00Z"),
        tags: ["electricidad", "aviso", "seguridad"],
        division: ["infraestructura"],
    },
    {
        id: "news-004",
        title: "Instalación de paneles solares fotovoltaicos en el edificio central",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
        content:
            "Avanza el plan de sostenibilidad con la incorporación de 120 paneles solares que cubrirán hasta el 35% del consumo energético del edificio principal.",
        publishedAt: new Date("2026-09-28T08:15:00Z"),
        tags: ["sostenibilidad", "energia", "innovacion"],
        division: ["infraestructura"],
    },
    {
        id: "news-005",
        title: "Actualización de los protocolos generales de evacuación",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
        content:
            "Publicada la guía de actuación ante emergencias para el último trimestre del año. No se requieren acciones adicionales por parte de las divisiones operativas.",
        publishedAt: new Date("2026-10-01T10:00:00Z"),
        tags: ["seguridad", "normativa"],
    },
];
