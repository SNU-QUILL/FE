module.exports = {
	root: true,
	globals: {
		React: true,
		JSX: true,
	},
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	ignorePatterns: ["node_modules/", "dist/", "public/"],
	plugins: ["react", "jsx-a11y", "react-hooks", "react-refresh"],
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:jsx-a11y/recommended",
		"plugin:react-hooks/recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier",
		"eslint-config-turbo",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
	},
	rules: {
		eqeqeq: "warn",
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": "warn",
		"no-var": "warn",
		"require-await": "warn",
		"react/no-array-index-key": "warn",
	},
};
