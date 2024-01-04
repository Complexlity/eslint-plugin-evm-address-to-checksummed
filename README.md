# eslint-plugin-evm-address-to-checksummed

This plugin converts all evm addresses to their checksummed version

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-evm-address-to-checksummed`:

```sh
npm install eslint-plugin-evm-address-to-checksummed --save-dev
```

## Usage

Add `evm-address-to-checksummed` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "evm-address-to-checksummed"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "evm-address-to-checksummed/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->

🔧 Automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/user-guide/command-line-interface#--fix).

| Name                                                                   | Description                                                                               | 🔧 |
| :--------------------------------------------------------------------- | :---------------------------------------------------------------------------------------- | :- |
| [case-typo-in-evm-address](docs/rules/case-typo-in-evm-address.md)     | This rule checks if the address is close to validity (invalid due to incorrect uppercase) | 🔧 |
| [evm-address-to-checksummed](docs/rules/evm-address-to-checksummed.md) | This converts valid evm addresses to the checksummed version                              | 🔧 |

<!-- end auto-generated rules list -->


