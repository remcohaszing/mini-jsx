import config from '@remcohaszing/eslint'

export default [
  ...config,
  {
    rules: {
      '@typescript-eslint/no-unsafe-function-type': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      'unicorn/no-array-for-each': 'off'
    }
  }
]
