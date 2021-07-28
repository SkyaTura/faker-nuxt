import { resolve } from 'path'

module.exports = {
  rootDir: resolve(__dirname, './'),
  buildDir: resolve(__dirname, '.nuxt'),
  ssr: false,
  srcDir: __dirname,
  render: {
    resourceHints: false
  },
  plugins: ['../../src/plugin'],
}
