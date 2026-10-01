import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginAstro from "eslint-plugin-astro";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
    globalIgnores(["dist/", ".astro/", "node_modules/"]),

    // Base JS + TS rules
    js.configs.recommended,
    tseslint.configs.recommended,

    // Astro rules + accessibility rules
    eslintPluginAstro.configs.recommended,

    {
        languageOptions: {
            globals: { ...globals.browser, ...globals.node },
        },
    },

    // TypeScript in the frontmatter (--- ---) of .astro files
    {
        files: ["**/*.astro"],
        languageOptions: {
            parserOptions: {
                parser: tseslint.parser,
                extraFileExtensions: [".astro"],
            },
        },
    },

    // TypeScript in <script> blocks (virtual files like Foo.astro/script.js)
    {
        files: [
            "**/*.astro/*.js",
            "*.astro/*.js",
            "**/*.astro/*.ts",
            "*.astro/*.ts",
        ],
        languageOptions: {
            parser: tseslint.parser,
            sourceType: "module",
        },
    },

    // Must be last: disables rules that conflict with Prettier
    eslintConfigPrettier,
]);
