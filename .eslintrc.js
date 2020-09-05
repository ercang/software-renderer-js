module.exports = {
  env: {
    browser: true,
    es6: true,
    'jest/globals': true
  },
  extends: [
    'airbnb-base',
    'plugin:jest/recommended'
  ],
  plugins: ['jest'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': [
      'error',
      'unix'
    ],
    'max-len': 'off',
    'no-bitwise': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-mixed-operators': 'off',
  }
};
