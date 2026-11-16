import type { News } from "@/types/News";

export const NEWS: News[] = [
    {
        id: "news-001",
        title: "Inicio de obras de modernización en la red principal",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
        images: [
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
        ],
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
        images: [
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
        ],
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
    {
        id: "news-006",
        title: "Inauguración de las nuevas salas de estudio colaborativo y zonas de descanso en el campus",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
        images: [
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
        ],
        content:
            "Tras varios meses de trabajo conjunto entre la Delegación de Estudiantes y el Vicerrectorado de Infraestructuras, esta semana han abierto sus puertas las nuevas salas de estudio colaborativo ubicadas en la planta baja del módulo central. El proyecto responde a una de las demandas históricas del estudiantado durante los periodos de evaluación continua y exámenes finales.\n\nEl espacio cuenta con una superficie total de 420 metros cuadrados divididos en tres ambientes diferenciados: una zona de trabajo en grupo equipada con pizarras digitales y mesas modulares, un área silenciosa con cabinas individuales insonorizadas para presentaciones o tutorías en línea, y un espacio de descanso con microondas, fuentes de agua filtrada y mobiliario ergonómico.\n\nEn materia tecnológica, se ha desplegado una red Wi-Fi 6E de alta densidad capaz de soportar más de 300 conexiones simultáneas sin pérdida de rendimiento, además de incorporar tomas de corriente y puertos USB-C de carga rápida en cada puesto de estudio. Todo el sistema de iluminación LED es regulable automáticamente según la luz natural exterior para reducir el consumo energético.\n\nEl horario de apertura será ininterrumpido de lunes a viernes de 07:30 a 22:00 horas, ampliándose hasta las 02:00 de la madrugada y durante los fines de semana en épocas de convocatoria ordinaria y extraordinaria. El acceso se realizará mediante la tarjeta universitaria inteligente o el código QR de la aplicación institucional.\n\nDesde la Comisión de Infraestructura seguiremos recogiendo sugerencias durante las próximas semanas para ajustar el equipamiento y evaluar la replicabilidad de este modelo en el resto de edificios del campus universitario.",
        publishedAt: new Date("2026-11-15T12:00:00Z"),
        tags: [
            "infraestructura",
            "espacios",
            "estudiantado",
            "campus",
            "innovacion",
        ],
        division: ["infraestructura"],
    },
];
