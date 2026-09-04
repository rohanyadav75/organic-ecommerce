module.exports = [
  {
    files: ["**/*.{js,jsx}"],
    ignores: ["node_modules/**", "dist/**"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: {
      "react-hooks": require("eslint-plugin-react-hooks"),
      "react-refresh": require("eslint-plugin-react-refresh")
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }]
    }
  }
];
