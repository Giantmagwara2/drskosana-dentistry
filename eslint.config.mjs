import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Utility for resolving paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Compatibility layer for extending legacy ESLint configs
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// ESLint configuration
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // TypeScript Rules
      "@typescript-eslint/no-unused-vars": ["warn"], // Warn instead of error for unused variables
      "@typescript-eslint/no-explicit-any": ["warn"], // Warn against using `any` type

      // React Rules
      "react/no-unescaped-entities": "off", // Disable this rule as it can be overly restrictive
      "react/react-in-jsx-scope": "off", // No longer required with React 17+ JSX transform
      "react/jsx-key": "warn", // Ensure keys are used in lists (warn instead of error)

      // Next.js Rules
      "@next/next/no-img-element": "off", // Allow `<img>` elements if needed
      "@next/next/no-html-link-for-pages": "warn", // Warn against using `<a>` instead of `Link` for internal pages

      // Accessibility Rules
      "jsx-a11y/alt-text": "warn", // Warn for missing alt text on images
      "jsx-a11y/no-autofocus": "warn", // Warn against using `autofocus` for accessibility reasons

      // General Code Quality
      "no-console": ["warn", { allow: ["warn", "error"] }], // Allow only `warn` and `error` console logs
      "no-unused-vars": "off", // Disable base rule in favor of @typescript-eslint/no-unused-vars
      "prefer-const": "warn", // Prefer `const` over `let` where possible
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
  },
];

export default eslintConfig;