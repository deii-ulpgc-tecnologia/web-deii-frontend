import type { ROLES } from "@/constants/Roles";
import type { PATHS } from "@/constants/Site";

export interface NavigationItem {
    label: string;
    path: (typeof PATHS)[keyof typeof PATHS];
    icon: string;
    children?: NavigationItem[];
    permissions?: (typeof ROLES)[number]["id"][];
}
