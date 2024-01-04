/**
 * @fileoverview This rule checks that all evm addresses conform to the checksummed version and fixes them otherwise
 * @author Complexlity
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/evm-address-to-checksummed"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("evm-address-to-checksummed", rule, {
  valid: [
    // give me some code that won't trigger a warning
    'var checkSummedaddress = "0x468D07eF902C4F4D6c524F7665B36D2d4b3E8993"',
    'var invalidAddress = "0x99c0c7a663ee06643fe876bbe468e878318ed"',
    'var notAddress = "hello world"'
  ],

  invalid: [
    {
      code: "var unCheckSummedAddress = \"0x14a7faa2fdd6e4469d397080207c3045750cce82\"",
      output: "var unCheckSummedAddress = \"0x14a7FAa2FDd6E4469D397080207c3045750CCe82\"",
      errors: [{ message: "Use the checksummed evm address"}],
    },
  ],
});
