const { defaultTransformerOptions } = require("jest-preset-angular/presets");

module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  transform: {
    "^.+\\.(ts|js|mjs|html|svg)$": [
      "jest-preset-angular",
      {
        ...defaultTransformerOptions,
        tsconfig: "<rootDir>/tsconfig.storyshots.json",
      },
    ],
  },
  transformIgnorePatterns: [
    "../node_modules/(?!.*\\.mjs$|@storybook/addon-docs/angular|@angular)",
  ],
};
