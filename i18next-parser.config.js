module.exports = {
    createOldCatalogs: false,
    // Save the \_old files

    defaultNamespace: 'translation',
    // Default namespace used in your i18next config

    keySeparator: false,
    // Key separator used in your translation keys
    // If you want to use plain english keys, separators such as `.` and `:` will conflict. You might want to set `keySeparator: false` and `namespaceSeparator: false`. That way, `t('Status: Loading...')` will not think that there are a namespace and three separator dots for instance.

    // see below for more details
    lexers: {
        mjs: ['JavascriptLexer'],
        js: ['JavascriptLexer'], // if you're writing jsx inside .js files, change this to JsxLexer
        ts: ['JavascriptLexer'],
        jsx: ['JsxLexer'],
        tsx: ['JsxLexer'],

        default: ['JavascriptLexer'],
    },

    locales: ['en-US', 'uk', 'pl'],
    // An array of the locales in your applications

    namespaceSeparator: '::',
    // Namespace separator used in your translation keys
    // If you want to use plain english keys, separators such as `.` and `:` will conflict. You might want to set `keySeparator: false` and `namespaceSeparator: false`. That way, `t('Status: Loading...')` will not think that there are a namespace and three separator dots for instance.

    output: 'public/locales/$LOCALE/$NAMESPACE.json',
    // Supports $LOCALE and $NAMESPACE injection
    // Supports JSON (.json) and YAML (.yml) file formats
    // Where to write the locale files relative to process.cwd()

    pluralSeparator: '_',
    // Plural separator used in your translation keys
    // If you want to use plain english keys, separators such as `_` might conflict. You might want to set `pluralSeparator` to a different string that does not occur in your keys.

    input: ['src/**/*.ts', 'src/**/*.tsx'],
    // An array of globs that describe where to look for source files
    // relative to the location of the configuration file

    sort: true,
    // Whether or not to sort the catalog. Can also be a [compareFunction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#parameters)

    useKeysAsDefaultValue: true,
    // Whether to use the keys as the default value; ex. "Hello": "Hello", "World": "World"
    // This option takes precedence over the `defaultValue` and `skipDefaultValues` options
    // You may also specify a function accepting the locale and namespace as arguments

    verbose: false,
    // Display info about the parsing including some stats
};
