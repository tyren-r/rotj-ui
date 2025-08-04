module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:prettier/recommended',
        "plugin:react/jsx-runtime"
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'react/function-component-definition': [
            'error', // Or "warn", depending on desired severity
            {
                namedComponents: ['arrow-function'], // prefer arrow components
                unnamedComponents: 'arrow-function',
            },
        ],
    },
};
