"use strict";

module.exports = {
  root: true,
  plugins: ['evm-address-to-checksummed'],
  rules: {
    "evm-address-to-checksummed/evm-address-to-checksummed": "error",
    "evm-address-to-checksummed/case-typo-in-evm-address": "error"

  },
  extends: [
    "eslint:recommended",
    "plugin:eslint-plugin/recommended",
    "plugin:node/recommended",
  ],
  env: {
    node: true,
  },
  overrides: [
    {
      files: ["tests/**/*.js"],
      env: { mocha: true },
    },
  ],
};
