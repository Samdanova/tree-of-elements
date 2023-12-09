module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint','prettier'],
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'eslint:recommended',
      'prettier/@typescript-eslint',
      'plugin:prettier/recommended',
    ],
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
        'prettier/prettier': 'error',
      },
  };
  