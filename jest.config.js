/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
  moduleFileExtensions: ['js', 'ts'],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
};