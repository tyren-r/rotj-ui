import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
        'plugin:react/recommended',
        'airbnb',
        'plugin:prettier/recommended',
        "plugin:react/jsx-runtime"
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
        parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'react/function-component-definition': [
            'error', // Or "warn", depending on desired severity
            {
                namedComponents: ['arrow-function'], // prefer arrow components
                unnamedComponents: 'arrow-function',
            },
        ],
        "react/prop-types": "off" 
    },
  },
])
