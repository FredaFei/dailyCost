module.exports = {
  verbose: true,
  clearMocks: false,
  collectCoverage: false,
  reporters: ['default', 'jest-junit'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json',
    }
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/__mocks__/fileMock.js',
    '\\.(css|less|scss)$': '<rootDir>/test/__mocks__/styleMock.js',
    // webpack alias -> jest alias
    '^views(.*)$': '<rootDir>/src/views$1',
    '^utils(.*)$': '<rootDir>/src/utils$1',
    '^components(.*)$': '<rootDir>/src/components$1',
  },
  testMatch: ['<rootDir>/**/__tests__/**/*.unit.(js|jsx|ts|tsx)'],
  transform: {
    '^.+unit\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  setupFilesAfterEnv: ['<rootDir>test/setupTests.js']
};
