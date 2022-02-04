import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  testRegex: '.*\\.test\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  moduleNameMapper: {
    '^~/(.+)': '<rootDir>/src/$1',
  },
  collectCoverageFrom: ['<rootDir>/src/{controller,graphql}/**/*.ts'],
  testEnvironment: 'node',
  restoreMocks: true,
}

export default config
