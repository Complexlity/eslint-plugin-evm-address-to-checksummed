# This rule checks if the address is close to validity (invalid due to incorrect uppercase) (`case-typo-in-evm-address`)

Please describe the origin of the rule here.

## Rule Details

This rule aims to...

Examples of **incorrect** code for this rule:

```js

// fill me in
let wronglyCheckSummed1 = "0x5f38dA95f1d53c5efd0246Efb03ae9ba72b60b51"
let possibleCasingTypoInAddress = "0x152cdf5ae4312b8a9B862237834775a381883B73"

```

Examples of **correct** code for this rule:

```js

// fill me in
let validAddress = '0x14a7faa2fdd6e4469d397080207c3045750cce82';
let correctlyCheckSummed = "0x4c906D3EcFaE8A4cC21Edf7E7A17dBd5B38D41fd"


```

### Options


## When Not To Use It

When you don't want to check if the address casing is correct

## Further Reading

