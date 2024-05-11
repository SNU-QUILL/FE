module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  ignorePatterns: ["node_modules/", "dist/", "public/"],
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: ["react", "react-hooks", "@typescript-eslint"],
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prefer-stateless-function": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-one-expression-per-line": "off",
    "no-nested-ternary": "off", // 중첩된 삼항 연산자 허용
    "react/jsx-props-no-spreading": "off", // props에 spread 사용 가능
    "import/no-unresolved": "off", // import 경로 오류 허용(절대 경로 사용)
    "import/extensions": "off", // import 확장자 오류 허용(절대 경로 사용)
    forceConsistentCasingInFileNames: "off",
  },
};
