module.exports = {
	env: {
		browser: true,
		es6: true
	},
	parser: 'babel-eslint',
	extends: ['airbnb', 'prettier', 'prettier/react'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
			modules: true
		},
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	plugins: ['react', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'react/forbid-prop-types': [0, { forbid: ['any'] }],
		'react/prop-types': 0,
		'react/destructuring-assignment': 0,
		'react/sort-comp': 0,
		'react/no-did-update-set-state': 0,
		'react/jsx-boolean-value': 0,
		'prefer-template': 1,
		'prefer-const': 1,
		'no-unused-vars': 1,
		'import/prefer-default-export': 1,
		'import/no-extraneous-dependencies': 1,
		'import/no-unresolved': 1
	}
};
