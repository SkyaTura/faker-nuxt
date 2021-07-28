module.exports = {
  root: true,
  extends: ['plugin:vue/essential'],
  overrides: [
    {
      files: ['**/*.test.js'],
      env: {
        jest: true,
        browser: true,
      },
    },
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: ['vue']
}
