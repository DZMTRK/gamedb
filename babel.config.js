module.exports = api => {
  api.cache(false)

  const presets = ['@babel/preset-env', '@babel/preset-react']

  const plugins = [
    // @babel/preset-env
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-optional-chaining',
    // https://babeljs.io/docs/en/babel-plugin-transform-modules-commonjs
    '@babel/plugin-transform-modules-commonjs',
    // rest
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-proposal-function-sent',
    '@babel/plugin-proposal-throw-expressions',
    '@babel/plugin-transform-runtime',
    // typescript
    '@babel/plugin-transform-flow-strip-types',
    ['@babel/plugin-transform-typescript', { isTSX: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
  ]

  return {
    presets,
    plugins,
  }
}
