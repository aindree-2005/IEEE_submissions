module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "eol-last": "off",
    "no-multiple-empty-lines": "off",
    "no-trailing-spaces": "off",
    "semi": "off",
    "vue/multi-word-component-names": "off"
  }
}
