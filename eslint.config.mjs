import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2024
    },
    files: ["src/**/*.mjs"],
    ignores: ["**/*.config.mjs"],
    rules: {
      semi: "error",
      "prefer-const": "error",
      "no-unused-vars": "warn"
    }
  }
];