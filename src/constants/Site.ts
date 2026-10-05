import type { NavigationItem } from "@/types/Navigation";

export const SITE = {
    TITLE: "Delegación de Estudiantes de la EII",
    SHORT_TITLE: "DEII",
    DESCRIPTION:
        "Página web oficial de la Delegación de Estudiantes de la Escuela de Ingeniería Informática de la Universidad de Las Palmas de Gran Canaria",
    URL: "https://deii.eii.ulpgc.es",
    IMAGE: "",
    AUTHOR: "División de Infraestructura",
    BACKGROUND_COLOR: "",
    THEME_COLOR: "",
    CATEGORIES: ["delegacion", "ulpgc", "eii", "deii"],
} as const;

export const PATHS = {
    /* COMUNICATION */
    COMMUNICATION: "/comunicacion",
    NEWS: "/comunicacion/noticias",
    EVENTS: "/comunicacion/eventos",

    /* ABOUT US */
    ABOUT_US: "/sobre-nosotros",
    BOARD_DIRECTORS: "/sobre-nosotros/junta-directiva",
    PET: "/sobre-nosotros/mascota",
    DIVISIONS: "/sobre-nosotros/divisiones",

    /* TRANSPARENCY */
    TRANSPARENCY: "/transparencia",
    REGULATION: "/transparencia/reglamentos",
    EXPENSES: "/transparencia/gastos",
    PROCEEDINGS: "/transparencia/actas",

    /* STUDENTS */
    STUDENTS: "/estudiantado",
    SUBJECTS_DOCUMENTATION: "/estudiantado/asignaturas",
    PARTICULAR_CLASSES: "/estudiantado/clases-particulares",
    COMPLAINTS_SUGGESTIONS: "/estudiantado/quejas-sugerencias",
    MOBILITY_EXPERIENCES: "/estudiantado/experiencias-movilidad",

    /* OTHER */
    JOIN_US: "/join-us",
} as const;

export const NAVIGATION = [
    {
        label: "Comunicación",
        path: PATHS.COMMUNICATION,
        icon: "lucide:megaphone",
        children: [
            {
                label: "Noticias",
                path: PATHS.NEWS,
                icon: "lucide:newspaper",
            },
            {
                label: "Eventos",
                path: PATHS.EVENTS,
                icon: "lucide:calendar-days",
            },
        ],
    },
    {
        label: "Sobre Nosotros",
        path: PATHS.ABOUT_US,
        icon: "lucide:info",
        children: [
            {
                label: "Junta Directiva",
                path: PATHS.BOARD_DIRECTORS,
                icon: "lucide:medal",
            },
            {
                label: "Nuestra Mascota",
                path: PATHS.PET,
                icon: "lucide:paw-print",
            },
            {
                label: "Divisiones",
                path: PATHS.DIVISIONS,
                icon: "lucide:boxes",
            },
        ],
    },
    {
        label: "Transparencia",
        path: PATHS.TRANSPARENCY,
        icon: "lucide:book-search",
        children: [
            {
                label: "Reglamentos",
                path: PATHS.REGULATION,
                icon: "lucide:scale",
            },
            {
                label: "Gastos",
                path: PATHS.EXPENSES,
                icon: "lucide:wallet",
            },
            {
                label: "Actas",
                path: PATHS.PROCEEDINGS,
                icon: "lucide:file-text",
                permissions: ["member"],
            },
        ],
    },
    {
        label: "Estudiantado",
        path: PATHS.STUDENTS,
        icon: "lucide:graduation-cap",
        children: [
            {
                label: "Asignaturas y Documentación",
                path: PATHS.SUBJECTS_DOCUMENTATION,
                icon: "lucide:folder-archive",
            },
            {
                label: "Clases particulares",
                path: PATHS.PARTICULAR_CLASSES,
                icon: "lucide:school",
            },
            {
                label: "Quejas y Sugerencias",
                path: PATHS.COMPLAINTS_SUGGESTIONS,
                icon: "lucide:messages-square",
            },
            {
                label: "Experiencias en Movilidad",
                path: PATHS.MOBILITY_EXPERIENCES,
                icon: "lucide:plane",
            },
        ],
    },
] as Readonly<NavigationItem[]>;
