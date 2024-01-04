/**
 * @fileoverview This converts valid evm addresses to the checksummed version
 * @author Complexlity
 */
"use strict";

const createKeccakHash = require('keccak')
const { isAddress } = require('web3-validator');


//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "This converts valid evm addresses to the checksummed version",
      recommended: true,
      url: null, // URL to the documentation page for this rule
    },
    fixable: 'code', // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    // variables should be defined here


    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    // Function to convert an address to the checksummed versoin
    function toChecksumAddress(address) {
      address = address.toLowerCase().replace('0x', '')
      var hash = createKeccakHash('keccak256').update(address).digest('hex')
      var ret = '0x'

      for (var i = 0; i < address.length; i++) {
        if (parseInt(hash[i], 16) >= 8) {
          ret += address[i].toUpperCase()
        } else {
          ret += address[i]
        }
      }

      return ret
    }

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      Literal(node) {
        const value = node.value

        // Check if it is a valid address
        if (!isAddress(value)) return
        const checkSummedValue = toChecksumAddress(value)

        // Address is already checksummed
        if (checkSummedValue === value) return

        context.report({
          node,
          message: "Use the checksummed evm address",

          fix(fixer) {
            return fixer.replaceText(node, `"${checkSummedValue}"`);
          },
        });
      },
    };
  }
}
