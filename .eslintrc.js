module.exports = {
  root: true,
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  env: {
    node: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['.eslintrc.js', '.prettierrc.js'],
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'import/extensions': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
