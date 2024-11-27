module.exports = {
  // 환경 설정: 브라우저, ES6, Node.js 환경에서 실행됨을 명시
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  // ESLint가 무시할 파일/디렉토리 패턴 지정
  ignorePatterns: ["node_modules/", "dist/", "public/"],
  // TypeScript 파서 사용 지정
  parser: "@typescript-eslint/parser",
  // 확장할 ESLint 설정들
  extends: [
    "eslint:recommended", // ESLint 기본 추천 규칙
    "plugin:react/recommended", // React 추천 규칙
    "plugin:jsx-a11y/recommended", // JSX 접근성 추천 규칙
    "plugin:react-hooks/recommended", // React Hooks 추천 규칙
    "plugin:@typescript-eslint/recommended", // TypeScript 추천 규칙
    "prettier", // Prettier와 충돌하는 ESLint 규칙 비활성화
  ],
  // 사용할 ESLint 플러그인들
  plugins: ["react", "react-hooks", "@typescript-eslint", "unused-imports"],
  // 파서 옵션 설정
  parserOptions: {
    sourceType: "module", // ES6 모듈 사용
    ecmaFeatures: {
      jsx: true, // JSX 사용 가능
    },
  },
  // 개별 규칙 설정
  rules: {
    "react/react-in-jsx-scope": "off", // React를 import 하지 않아도 JSX 사용 가능
    "react/prefer-stateless-function": "off", // 클래스 컴포넌트 비허용
    "react/jsx-filename-extension": "off", // JSX를 사용하는 파일의 확장자 제한 해제
    "react/jsx-one-expression-per-line": "off", // 한 줄에 여러 표현식 허용
    "no-nested-ternary": "off", // 중첩된 삼항 연산자 허용
    "react/jsx-props-no-spreading": "off", // props에 spread 연산자 사용 허용
    "import/no-unresolved": "off", // import 경로 오류 허용 (절대 경로 사용 시)
    "import/extensions": "off", // import 시 파일 확장자 생략 허용
    forceConsistentCasingInFileNames: "off", // 파일 이름의 대소문자 일관성 검사 비활성화
    "@typescript-eslint/no-unused-vars": "error", // 사용하지 않는 변수 에러 처리
    "no-unused-vars": "off", // TypeScript 버전을 사용하기 위해 기본 규칙은 off
    "unused-imports/no-unused-imports": "error", // 사용하지 않는 import 구문 에러 처리
    "unused-imports/no-unused-vars": [
      "error",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
};
