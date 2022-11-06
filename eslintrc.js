// eslint-disable-next-line no-undef
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [
      'eslint:recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:json/recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ],
    settings: {
      'import/resolver': {
        'babel-module': {},
        jest: {
          jestConfigFile: './jest.config.js',
        },
      },
      'import/extensions': ['.js', '.ts'],
    },
    rules: {
      'prettier/prettier': 'error',
      '@typescript-eslint/no-explicit-any': 0,
      'import/no-unresolved': 0,
      '@typescript-eslint/explicit-member-accessibility': 'off',
      '@typescript-eslint/semi': ['error'],
      '@typescript-eslint/camelcase': 'off',
      'space-before-blocks': ['error'],
      'comma-spacing': ['error', { before: false, after: true }],
      'key-spacing': ['error', { mode: 'strict' }],
      'max-len': ['warn', { code: 120, tabWidth: 2, ignoreUrls: true }],
    },
  };
  