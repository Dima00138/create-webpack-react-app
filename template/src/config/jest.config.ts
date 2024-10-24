import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  rootDir: './../',
  roots: ['<rootDir>/tests', '<rootDir>'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^@assets/(.*)$': '<rootDir>/assets/$1',
    '^@common/(.*)$': '<rootDir>/common/$1',
    '^@components/(.*)$': '<rootDir>/components/$1',
    '^@constants/(.*)$': '<rootDir>/constants/$1',
    '^@store/(.*)$': '<rootDir>/store/$1',
    '^@pages/(.*)$': '<rootDir>/pages/$1',
    '^@utils/(.*)$': '<rootDir>/utils/$1',
  },
  transform: {
    '^.+\\.svg$': 'jest-transformer-svg',
  },
  testMatch: ['**/?(*.)(spec|test).[jt]s?(x)'],
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageDirectory: '<rootDir>/tests/coverage',
  coverageReporters: ['text', 'lcov'],
};

module.exports = config;
