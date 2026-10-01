// @ts-check
import { SITE } from "@/constants/Site";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: SITE.URL,
    output: "static",
    integrations: [icon()],
    devToolbar: {
        enabled: false,
    },
});
