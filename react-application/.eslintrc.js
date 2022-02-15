module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:react-hooks/recommended", "plugin:prettier/recommended", "plugin:storybook/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {}
};