module.exports = {
  presets: [
    '@babel/preset-env',
    {
      targets: {
        esmodules: true
      }
    }
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {regenerator: true},
    ]
  ]
}
module.exports = {
  presets: [
    [
      '@babel/preset-env', {
        targets: {
          esmodules: true
        }
      }
    ]
  ]
}