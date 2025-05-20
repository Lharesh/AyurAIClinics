module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node', // Use 'jsdom' if testing browser-based code
  roots: ['<rootDir>/src'], // Adjust to your source folder
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Use ts-jest to transform TypeScript files
  },
  testMatch: ['**/__tests__/**/*.(ts|tsx)', '**/?(*.)+(spec|test).(ts|tsx)'],
};