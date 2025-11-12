import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import json from "@eslint/json";
import css from "@eslint/css";
import js from "@eslint/js";
import globals from "globals";
import { globalIgnores, defineConfig } from "eslint/config";
import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from "@vue/eslint-config-typescript";
import skipFormatting from "@vue/eslint-config-prettier/skip-formatting";

export default defineConfigWithVueTs(
  {
    name: "app/files-to-lint",
    files: ["**/*.{ts,mts,tsx,vue}"],
    languageOptions: {
      parser: await import("vue-eslint-parser"),
      parserOptions: {
        parser: tseslint.parser, // 使用 TypeScript ESLint 解析器处理 script 部分
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
  globalIgnores(["**/dist/**"]),
  pluginVue.configs["flat/essential"],
  vueTsConfigs.recommended,
  tseslint.configs.recommended,
  json.configs.recommended,
  css.configs.recommended,
  skipFormatting
);

// export default defineConfig([
//   { files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: {...globals.browser, ...globals.node} } },
//   tseslint.configs.recommended,
//   pluginVue.configs["flat/essential"],
//   { files: ["**/*.vue"], languageOptions: { parserOptions: { parser: tseslint.parser } } },
//   { files: ["**/*.json"], plugins: { json }, language: "json/json", extends: ["json/recommended"] },
//   { files: ["**/*.css"], plugins: { css }, language: "css/css", extends: ["css/recommended"] },
// ]);
