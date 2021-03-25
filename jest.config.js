module.exports = {
  preset: "ts-jest",
  collectCoverage: false,
  collectCoverageFrom: ["packages/*/src/**/*.{ts,tsx}", "!**/node_modules/**"],
  coverageReporters: ["lcovonly", "text"],
  testEnvironment: "node",
  verbose: true,
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.test.json",
    },
  },
  setupFiles: ["./jest.setup-file.ts"],
};
