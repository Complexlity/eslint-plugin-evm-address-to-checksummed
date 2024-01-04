// Unchecksummed addresses (rule hit: evm-addresss-to-checksummed)
let value = '0x14a7faa2fdd6e4469d397080207c3045750cce82';
let value1 = '0x12c5a12a80bdd290ba19fabfe7153dc70e55a89b';
let value2 = '0x14a105fccfc16a681e1b48f18f2a92f782b8892c';
let value3 = '0xa3eaf717c2941b23dbffa1adedbba69d6ffeb9ad';

//Wrongly checksummed addresses or typo (rule hit: case-typo-in-evm-address)
let value4 = '0x5f38da95f1d53c5Efd0246efb03ae9ba72b60b51';
let value5 = '0x152cdf5aE4312b8a9a862237834775A381883b73';
let value6 = '0x62edff91B8185e1e2196b99724d1191ce5164F19';
let value7 = '0x936E864fd4d28a6618d318f46624d939484970F9';

//Correctly checksummed (no error)
let value8 = '0x468D07eF902C4F4D6c524F7665B36D2d4b3E8993';
let value9 = '0xAaa6Bf7F35f1CB1AFb9f5375E363140C9B197274';
let value10 = '0x4c906D3EcFaE8A4cC21Edf7E7A17dBd5B38D41fd';
let value11 = '0x99C0C7a663ee06643fe876bBE468e878304518ed';

//Invalid addresses (no error)
let value12 = '0x99c0c7a663ee06643fe876bbe468e878318ed';
let value13 = 21;
let value14 = 'complexlity';
let value15 = 'wow';
