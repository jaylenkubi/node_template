module.exports = {
	extends: ['../../../.eslintrc.js'],
	root: false,
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: 'tsconfig.json'
	}
};
