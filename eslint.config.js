import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import tseslint from "typescript-eslint";

export default tseslint.config(
    // 1. Astro rules + Astro accessibility rules combined
    ...eslintPluginAstro.configs.recommended,
    ...eslintPluginAstro.configs["jsx-a11y-recommended"],

    // 2. TypeScript configuration rules — scoped so it doesn't override the Astro parser
    {
        files: ["**/*.{ts,tsx,mts,cts,js,mjs,cjs}"],
        extends: [...tseslint.configs.recommended],
    },

    {
        rules: {
            // Your custom overrides go here
        },
    },

    // 3. MUST BE LAST: Prettier config (single object, don't spread)
    eslintPluginPrettierRecommended,
);
