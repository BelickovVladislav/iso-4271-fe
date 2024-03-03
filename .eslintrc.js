module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  plugins: ['simple-import-sort', '@typescript-eslint'],
  rules: {
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],
    'simple-import-sort/imports': [
      2,
      {
        groups: [
          [
            // Packages. `react` related packages come first.
            '^react',
            '^next',
            '^@?\\w',
          ],
          [
            // Internal packages.
            '^(@|@shared|@api|@models|@widgets)(/.*|$)',
            // Side effect imports.
            '^\\u0000',
          ],
          [
            // Parent imports. Put `..` last.
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            // Other relative imports. Put same-folder imports and `.` last.
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
          ],
          // Style imports.
          ['^.+\\.s?css$'],
        ],
      },
    ],
    '@typescript-eslint/no-unused-vars': 'error',
  },
};
