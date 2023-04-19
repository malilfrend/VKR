module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
        moduleDirectory: ['node_modules', 'src'],
        paths: [__dirname],
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.tsx', '.ts'],
    },
  },
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    'spaced-comment': 'off',
    'import/extensions': ['error', 'never'],
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-cycle': 1,
    'no-console': 'off',
    'no-underscore-dangle': ['error', { allow: ['__typename', '__STORE__'] }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-undef': 0,
    'no-unused-vars': 0,
    'no-shadow': 'off',
    'no-use-before-define': 'off',
    'no-magic-numbers': ['off'],
    'no-irregular-whitespace': [
      'error',
      {
        skipComments: true,
        skipStrings: true,
        skipTemplates: true,
      },
    ],
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-array-index-key': 1,
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/ban-ts-comment': 1,
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/ban-types': [
      1,
      {
        types: {
          String: {
            message: 'Use string instead',
            fixWith: 'string',
          },
          Boolean: {
            message: 'Use boolean instead',
            fixWith: 'boolean',
          },
          Number: {
            message: 'Use number instead',
            fixWith: 'number',
          },
          Symbol: {
            message: 'Use symbol instead',
            fixWith: 'symbol',
          },
          Function: {
            message: [
              'The `Function` type accepts any function-like value.',
              'It provides no type safety when calling the function, which can be a common source of bugs.',
              'It also accepts things like class declarations, which will throw at runtime as they will not be called with `new`.',
              'If you are expecting the function to accept certain arguments, you should explicitly define the function shape.',
            ].join('\n'),
          },
          // object typing
          Object: {
            message: [
              'The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.',
              '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
              '- If you want a type meaning "any value", you probably want `unknown` instead.',
            ].join('\n'),
          },
          object: {
            message: [
              'The `object` type is currently hard to use ([see this issue](https://github.com/microsoft/TypeScript/issues/21732)).',
              'Consider using `Record<string, unknown>` instead, as it allows you to more easily inspect and use the keys.',
            ].join('\n'),
          },
        },
        extendDefaults: false,
      },
    ],
  },
};
