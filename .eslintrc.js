module.exports = {
	root: true,
	env: {
		node: true
	},
	'extends': [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/typescript/recommended'
	],
	parserOptions: {
		ecmaVersion: 2020
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/camelcase': 'off',
		'prefer-const': 'off',
		// 'semi': [1, 'never'],
		// 'indent': ['error', 'tab'],
		// 'vue/html-indent': ['error', 'tab'],
		'vue/no-deprecated-slot-attribute': 'off',
	},
	overrides: [
		{
			files: [
				'**/__tests__/*.{j,t}s?(x)',
				'**/tests/unit/**/*.spec.{j,t}s?(x)'
			],
			env: {
				jest: true
			}
		}
	]
}