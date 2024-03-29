import path from 'path'

export const meta = require('../package.json')

export default function FakerNuxt(moduleOptions) {
  const defaultOptions = {
    locale: null,
    seed: null,
  }
  const { locale, seed } = {
    ...defaultOptions,
    ...this.options.faker,
    ...moduleOptions,
  }
  const options = { json: JSON.stringify({ locale, seed }) }

  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    options,
  })
}
