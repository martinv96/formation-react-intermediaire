export default {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'jsx'],
    testMatch: ['**/__tests__/**/*.(js|jsx)', '**/*.(test|spec).(js|jsx)'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
};