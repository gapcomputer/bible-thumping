module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    rules: {
        // Add project-specific rules here
        'no-console': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        'indent': ['error', 4],
        'semi': ['error', 'always']
    },
    env: {
        es2021: true,
        node: true
    },
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    }
};