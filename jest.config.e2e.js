module.exports = {
  setupFilesAfterEnv: [
    './jest.setup.js'
  ],
  moduleFileExtensions: [
    'js',
    'json'
  ],
  testMatch: [
    '**/dist/tests/**/*.test.(js)',
    '**/dist/tests/**/*.spec.(js)'
  ],
  testEnvironment: 'node'
};
