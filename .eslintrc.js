module.exports = {
  root: true,
  env: {
      es2021: true,
      node: true,
      browser: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
      tsconfigRootDir: __dirname,
      ecmaVersion: 12,
      sourceType: "module",
      project: ['./tsconfig.json'],
      ecmaFeatures: {
          jsx: true,
      },
  },
  plugins: [ '@typescript-eslint', 'react', 'react-hooks' ],
  extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      "plugin:@typescript-eslint/eslint-recommended",
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      "plugin:import/errors",
      "plugin:import/warnings"
    ],
  rules: {
    indent: [ 'error', 2 ],
    quotes: [ 'error', 'single' ],
    semi: [ 'error', 'always' ],
    'linebreak-style': [ 'error', 'windows' ],
  },
  ignorePatterns: ['**/*.js'],
  settings: {
    'import/resolver': {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      },
    },
    react: {
      version: "latest"
    }
  },
}