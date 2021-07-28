module.exports = {
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  moduleFileExtensions: ['js', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  collectCoverage: true,
  coverageReporters: ["json-summary"],
  collectCoverageFrom: [
    'src/**/*.js',
    '!**/node_modules/**'
  ],
}
