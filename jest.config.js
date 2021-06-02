module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['**/*.ts', '!**/typings/**'],
  coverageReporters: ['lcov', 'text'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/dist',
    'handler.ts',
    '.build',
    '/src/models/db-opeation.queries.ts',
    '/src/db/index.ts',
    '/src/s3/index.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.test.json',
    },
  },
  verbose: true,
};
