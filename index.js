var isProduction = process.env.NODE_ENV === 'production'
module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true
  },

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
      modules: true,
      blockBindings: true,
      defaultParams: true,
      legacyDecorators: true,
      objectLiteralComputedProperties: true
    },
    sourceType: 'module'
  },

  plugins: ['import', 'node', 'promise', 'standard'],

  extends: ['standard'],

  globals: {
    document: false,
    navigator: false,
    window: false,
    $: false,
    jQuery: false,
    global: false
  },

  // Reset rules's configuration information for some "eslint-config-standard".
  rules: {
    // Disable the use of arguments.caller or arguments.callee.
    'no-caller': 'error',

    // enforce camelcase naming convention properties's never
    camelcase: ['error', { properties: 'never' }],

    // Disable the use of "console".
    'no-console': isProduction ? 'error' : 'off',

    // Disable the use of "debugger".
    'no-debugge': isProduction ? 'error' : 'off',

    // If there's a "return", in the "if" statement, you can't follow the "else" statement.
    'no-else-return': 'warn',

    // Disable extending native objects
    'no-extend-native': 'warn',

    // Disable unnecessary nesting block
    'no-lone-blocks': 'off',

    // You can't use extra spaces.
    'no-multi-spaces': 'warn',

    // No more than 2 lines for empty row
    'no-multiple-empty-lines': ['warn', { 'max': 1, 'maxEOF': 0 }],

    // Path splicing cannot be done with "_dirname" or "_filename" in node
    'no-path-concat': 'warn',

    // You cannot have an assignment expression in a return statement
    'no-return-assign': 'off',

    // disallow unnecessary return await
    'no-return-await': 'off',

    // require var declarations be placed at the top of their containing scope
    'vars-on-top': 'warn',

    // No spaces at the end of the line
    'no-trailing-spaces': 'warn',

    // Requires yield inside the generator function
    'require-yield': 'error',

    // disallow async functions which have no await expression
    'require-await': 'error',

    // Do you want to allow extra spaces in a non-empty array
    'array-bracket-spacing': ['warn', 'never'],

    // Disable the use of var, in block statements to handle variable escalation
    'block-scoped-var': 'error',

    // "this" alias
    'consistent-this': [2, 'that'],

    // The file ends with a single newline character
    'eol-last': 'warn',

    // The bracketed style of executing a function expression immediately
    'wrap-iife': [2, 'inside'],

    // Avoid multiline expressions and disable closures
    'no-unexpected-multiline': 'off',

    // Do you want to have spaces before parentheses when a function is defined
    'space-before-function-paren': ['warn', 'never']
  }
}
