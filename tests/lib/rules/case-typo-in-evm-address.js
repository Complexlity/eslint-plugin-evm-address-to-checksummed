/**
 * @fileoverview This rule checks if the address is close to validity (invalid due to incorrect uppercase)
 * @author Complexlity
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/case-typo-in-evm-address"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("case-typo-in-evm-address", rule, {
  valid: [
    // give me some code that won't trigger a warning
    'var validAddress = "0x468d07ef902c4f4d6c524f7665b36d2d4b3e8993"',
    'var checkSummedAddress = "0x99C0C7a663ee06643fe876bBE468e878304518ed"'
  ],

  invalid: [
    {
      code: "var wronglyCheckSummedAddress1 = \"0x5f38dA95f1d53c5efd0246Efb03ae9ba72b60b51\"",
      output: "var wronglyCheckSummedAddress2 = \"0x5f38da95f1d53c5eFd0246EFb03ae9Ba72B60b51\"",
      errors: [{ message: "There seems to be a typo in the address"}],
    },
    {
      code: "var wronglyCheckSummedAddress1 = \"0x152cdf5aE4312b8a9B862237834775a381883B73\"",
      output: "var wronglyCheckSummedAddress2 = \"0x152cDf5AE4312B8A9b862237834775A381883b73\"",
      errors: [{ message: "There seems to be a typo in the address"}],
    },
  ],
});
