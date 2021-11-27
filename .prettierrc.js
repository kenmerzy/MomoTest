module.exports = {
  bracketSpacing: true,
  jsxBracketSameLine: false,
  singleQuote: true,
  trailingComma: 'all',
  importOrder: [
    '^react$',
    '^react-native$',
    '^(?!@graphql$|@graphql/(.*)$' +
      '|@contexts$|./contexts$' +
      '|@screens$' +
      '|@components$|@base$' +
      '|@utils$|@types$|@styles$|@navigation$|@services$|@constants$|@hooks$|@env$' +
      '|./(.*)$|../(.*)$' +
      '|@assets/(.*)$|@assets$)',
    '^(@graphql$|@graphql/(.*)$)',
    '^(@contexts$|./contexts$)',
    '^@screens$',
    '^(@base$|@components$|./components$)',
    '^(@utils$|@types$|@styles$|@navigation$|@services$|@constants$|@hooks$|@env$)',
    '^(./(.*)$|../(.*)$)',
    '^(@assets/(.*)$|@assets$)',
  ],
  importOrderSeparation: true,
};
