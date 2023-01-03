module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  plugins: ["react"],
  rules: {
    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    semi: "off",
    "@typescript-eslint/semi": "off",
    quotes: "off",
    "@typescript-eslint/quotes": "off",
    "comma-dangle": "off",
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/explicit-function-return-type": "off"
  },
};
