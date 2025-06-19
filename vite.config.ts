import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  server: { open: true, port: 5173 },
  css: { preprocessorOptions: { scss: { api: "modern-compiler" } } },
  plugins: [
    react(),
    checker({
      typescript: { tsconfigPath: "tsconfig.json" },
      stylelint: { lintCommand: 'stylelint "./src/**/*.{css,scss}"' },
      eslint: { useFlatConfig: true, lintCommand: 'eslint "./src/**/*.{ts,tsx}"' },
    }),
  ],
});
