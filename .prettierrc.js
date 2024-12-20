module.exports = {
	tabWidth: 2,
	singleQuote: true,
	jsxSingleQuote: true,
	arrowParens: 'avoid',
	semi: false,
	trailingComma: 'none',
	useTabs: true,
	plugins: ['@trivago/prettier-plugin-sort-imports'],
	importOrder: ['^components/(.*)$', '^[./]'],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true
}
