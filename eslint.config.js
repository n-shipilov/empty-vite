import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactRefresh from "eslint-plugin-react-refresh";
import pluginPrettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";

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
    },
  },
  {
    rules: {
      ...pluginPrettier.configs.recommended.rules,
      ...configPrettier.rules,
      ...pluginReactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "prefer-const": "error",
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
    },
  },
);
