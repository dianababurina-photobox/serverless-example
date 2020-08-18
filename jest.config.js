module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['./src/'],
  testMatch: ['**/?(*.)test.ts'],
  collectCoverageFrom: ['src/**/*.{ts}'],
  coverageReporters: ['html', 'text', 'text-summary'],
};
