module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'simple-import-sort', 'prettier'],
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended',
        'plugin:simple-import-sort/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
    ],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['tsconfig.json'],
    },
    rules: {
        'comma-dangle': 0,
        '@typescript-eslint/quotes': 0,
        'typescript-eslint/no-unsafe-assignment': 1,
        'typescript-eslint/comma-dangle': 0,
        '@typescript-eslint/consistent-type-assertions': 1,
        '@typescript-eslint/no-misused-promises': 1,
        '@typescript-eslint/no-non-null-assertion': 1,
        '@typescript-eslint/no-for-in-array': 1,
        '@typescript-eslint/no-var-requires': 1,
        '@typescript-eslint/no-namespace': 1,
        '@typescript-eslint/naming-convention': ['error',
            { selector: 'interface', format: ['PascalCase'] },
            { selector: 'typeAlias', format: ['PascalCase'] }
        ],
        'simple-import-sort/imports': 'error',
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/ban-types': 'error',
    }
}