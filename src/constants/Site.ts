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
    { label: "Noticias", path: "/noticias" },
    {
        label: "Sobre Nosotros",
        path: "/sobre-nosotros",
        children: [
            { label: "Historia", path: "/sobre-nosotros/historia" },
            {
                label: "Junta Directiva",
                path: "/sobre-nosotros/junta-directiva",
            },
        ],
    },
] as Readonly<NavigationItem[]>;
