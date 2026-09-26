// @ts-check
import { SITE } from "@/constants/Site";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: SITE.URL,
    output: "server",
    devToolbar: {
        enabled: false,
    },
});
