module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    // prettier config disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
    'prettier' // keep it at the end.
  ],
  rules: {
    'comma-dangle': ['error', 'never'],
    'consistent-return': 0,
    'import/extensions': 0,
    'import/no-import-module-exports': 0,
    'import/no-unresolved': 'off',
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    'max-classes-per-file': 'off',
    'no-extra-boolean-cast': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-shadow': ['error', { builtinGlobals: false, hoist: 'functions', allow: ['state'] }],
    'no-underscore-dangle': 'off',
    'no-use-before-define': ['error', { functions: false }],
    'object-curly-spacing': ['error', 'always'],
    'prettier/prettier': 'error',
    'vue/html-closing-bracket-newline': [ 'error', { singleline: 'never', multiline: 'never' }],
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 0,
    'vue/order-in-components': 'off',
    'vue/prefer-template': 0,
    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
  }
};
