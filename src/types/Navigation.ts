import type { ROLES } from "@/constants/Roles";

export interface NavigationItem {
    label: string;
    path: string;
    icon: string;
    children?: NavigationItem[];
    permissions?: (typeof ROLES)[number]["id"][];
}
