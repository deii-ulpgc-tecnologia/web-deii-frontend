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

export const NAVIGATION = [
    { label: "Noticias", path: "/noticias", icon: "lucide:newspaper" },
    {
        label: "Sobre Nosotros",
        path: "/sobre-nosotros",
        icon: "lucide:info",
        children: [
            {
                label: "Historia",
                path: "/sobre-nosotros/historia",
                icon: "lucide:landmark",
            },
            {
                label: "Junta Directiva",
                path: "/sobre-nosotros/junta-directiva",
                icon: "lucide:medal",
            },
            {
                label: "Nuestra Mascota",
                path: "/sobre-nosotros/mascota",
                icon: "lucide:paw-print",
            },
        ],
    },
] as Readonly<NavigationItem[]>;
