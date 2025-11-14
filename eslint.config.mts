import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import json from '@eslint/json';
import css from '@eslint/css';
import js from '@eslint/js';
import globals from 'globals';
import { globalIgnores } from 'eslint/config';
import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from '@vue/eslint-config-typescript';
import prettierPlugin from 'eslint-plugin-prettier/recommended';
import prettierConfig from 'eslint-config-prettier';

export default defineConfigWithVueTs(
  js.configs.recommended,
  globalIgnores(['**/dist/**']),
  pluginVue.configs['flat/essential'],
  tseslint.configs.recommended,
  vueTsConfigs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',

      globals: {
        ...globals.browser,
        ...globals.node,
        process: 'readable',
      },
    },
  },
  json.configs.recommended,
  css.configs.recommended,
  prettierPlugin,
  prettierConfig,
);
