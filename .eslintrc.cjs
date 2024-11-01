/* eslint-env node */
module.exports = {
  'root': true,
  'extends': [
    'plugin:vue/recommended'
  ],
  rules: {
    'vue/multi-word-component-names': 0,
    'quotes': [2, 'single', { 'avoidEscape': true }],
    'semi': [ 'error', 'never' ],
    'comma-dangle': ['error', 'never']
}
}
