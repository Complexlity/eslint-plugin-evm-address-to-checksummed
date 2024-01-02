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
  ],

  invalid: [
    {
      code: "var address = \"0x0e5d6883e90aae3491413dd3f6f0f34b29f5d55d\"",
      output: "var address = \"0x0E5D6883e90aae3491413dD3f6f0F34B29f5D55d\"",
      errors: [{ message: "Use the checksummed evm address"}],
    },
  ],
});
