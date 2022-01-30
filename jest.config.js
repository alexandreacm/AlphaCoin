module.exports = {
  preset: 'react-native',
  verbose: true,
  testMatch: ['**/__tests__/**/*.test.js'],
  setupFiles: ['<rootDir>/__tests__/jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@?react-navigation||@react-native-community)'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/ios',
    '<rootDir>/android',
    '<rootDir>/__tests__/jest.setup.js',
    '<rootDir>/node_modules'
  ],
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1'
  }
};
