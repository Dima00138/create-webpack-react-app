import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginTseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import prettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default [
  {
    files: ['src/**/**.*{js,jsx,ts,tsx,json}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parser: tsParser,
    },
  },
  {
    ignores: ['**/config/**', '**/webpack/**', '**/build/**'],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    plugins: {
      typescript: pluginTseslint.configs.recommended,
      react: pluginReact.configs.flat.recommended,
      'simple-import-sort': simpleImportSort,
      prettierPlugin: pluginPrettier.configs.recommended,
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
];
