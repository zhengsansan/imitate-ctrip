module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'quotes': [1, 'single'],
    'import/no-extraneous-dependencies': ['error', {'devDependencies': true}],
    // 'import/extensions': ['error', 'always', {'js': 'never', 'vue': 'never', 'ts': 'never'}]
  },
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    // 'import/resolver': {
    //   webpack: {
    //     config: 'node_modules/@vue/cli-service/webpack.config.js',
    //   },
    // }
  }
};
