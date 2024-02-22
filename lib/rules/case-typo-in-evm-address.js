/**
 * @fileoverview This rule checks if the address is close to validity (invalid due to incorrect uppercase)
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
      description: "This rule checks if the address is close to validity (invalid due to incorrect uppercase)",
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
      const hash = createKeccakHash('keccak256').update(address).digest('hex')
      let ret = '0x'

      for (let i = 0; i < address.length; i++) {
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
        const lowerCaseValue = `${value}`.toLowerCase()

        // Check if it is a valid address or close to valid
        if (!isAddress(lowerCaseValue)) return
        const checkSummedValue = toChecksumAddress(value)

        // Address is already checksummed
        if (checkSummedValue === value) return

				if (!isAddress(value)) {
            //Address is not valid but the lowercase version is

					const message =  'There seems to be a typo in the address'
					// Check if it is already in the valid checksummed format
					context.report({
						node,
						message,

						fix(fixer) {
							return fixer.replaceText(node, `"${checkSummedValue}"`);
						},
					});
				}
				},
    };
  }
  }
