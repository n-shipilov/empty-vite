import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactRefresh from "eslint-plugin-react-refresh";
import pluginPrettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";
import pluginImport from "eslint-plugin-import";

export default tseslint.config(
  { extends: [js.configs.recommended, ...tseslint.configs.recommended] },
  { ignores: ["dist", "node_modules", "eslint.config.js"] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
      },
    },
  },
  { files: ["**/*.{ts,tsx}"] },
  {
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      "react-refresh": pluginReactRefresh,
      prettier: pluginPrettier,
      import: pluginImport,
    },
  },
  {
    rules: {
      ...pluginPrettier.configs.recommended.rules,
      ...configPrettier.rules,
      ...pluginReactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "prefer-const": "error",
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
      "@typescript-eslint/no-unused-vars": ["warn", { ignoreRestSiblings: true }],
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
            {
              pattern: "@/components/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@/lib/**",
              group: "internal",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["react"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },
);
