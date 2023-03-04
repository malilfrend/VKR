/* eslint-disable no-magic-numbers */
module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2019,
    },
    plugins: [
        '@typescript-eslint',
        'import',
        'react',
        'react-hooks',
        'jsx-a11y',
        'lodash',
        'prettier',
        'jest',
        'jest-dom',
        'testing-library',
    ],
    extends: [
        'airbnb',
        'prettier',
        'plugin:@typescript-eslint/recommended',
        'plugin:lodash/canonical',
        'plugin:jest/recommended',
    ],
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
    env: {
        browser: true,
        es6: true,
        node: true,
        jest: true,
    },
    rules: {
        curly: 1,
        camelcase: [
            0,
            {
                allow: ['^SupportOfferRequest_'],
            },
        ],
        'import/extensions': ['error', 'never'],
        'import/prefer-default-export': 0,
        'import/no-extraneous-dependencies': 0,
        'import/no-cycle': 1,
        'lodash/prefer-lodash-method': 0,
        'lodash/consistent-compose': [2, 'flowRight'],
        'lodash/import-scope': 'off',
        'lodash/prefer-includes': 'off',
        'lodash/prefer-lodash-typecheck': 'off',
        'lodash/prefer-constant': 'off',
        'lodash/prefer-noop': 'off',
        'lodash/preferred-get': 'off',
        'lodash/prefer-get': 'off',
        'lodash/prefer-is-nil': 'off',
        'lodash/prefer-startswith': 'off',
        'lodash/path-style': [2, 'array'],
        'no-console': 'off',
        'no-underscore-dangle': ['error', { allow: ['__typename', '__STORE__'] }],
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'no-undef': 0,
        'no-unused-vars': 0,
        'no-shadow': 'off',
        'no-use-before-define': 'off',
        'no-magic-numbers': [
            'error',
            {
                ignore: [-1, 0, 1],
                ignoreArrayIndexes: true,
                enforceConst: true,
                detectObjects: true,
            },
        ],
        'no-irregular-whitespace': [
            'error',
            {
                skipComments: true,
                skipStrings: true,
                skipTemplates: true,
            },
        ],
        'prettier/prettier': [
            2,
            {
                useTabs: false,
                tabWidth: 2,
                singleQuote: true,
                semi: true,
                printWidth: 120,
                trailingComma: 'all',
                proseWrap: 'never',
            },
        ],
        'react/destructuring-assignment': 'off',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 0,
        'react/prop-types': 0,
        'react/no-did-mount-set-state': 1,
        'react/no-did-update-set-state': 1,
        'react/no-array-index-key': 1,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/no-unused-vars': 2,
        '@typescript-eslint/ban-ts-comment': 1,
        '@typescript-eslint/no-explicit-any': 1,
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-var-requires': 0,
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
        'jest-dom/prefer-required': 'error',
        'jest-dom/prefer-enabled-disabled': 'error',
        'jest-dom/prefer-checked': 'error',
        'jest-dom/prefer-to-have-attribute': 'error',
        'jsx-a11y/anchor-is-valid': 0,
    },
    overrides: [
        {
            files: ['*.style.*', '*.styles.*'],
            rules: {
                'no-magic-numbers': 'off',
            },
        },
        {
            files: ['*.json'],
            rules: {
                'no-unused-expressions': 'off',
            },
        },
        {
            files: ['*.tsx', '*.ts'],
            rules: {
                'react/jsx-filename-extension': [
                    2,
                    {
                        extensions: ['.tsx', '.ts', '.jsx', '.js'],
                    },
                ],
            },
        },
        {
            files: ['*.jsx'],
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        {
            files: ['**/*.test.js', '**/*.test.jsx', '**/*.test.ts', '**/*.test.tsx'],
            env: {
                jest: true,
            },
            rules: {
                'import/no-extraneous-dependencies': 0,
            },
        },
    ],
};