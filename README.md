# Deprecated
### This package will be maintained [@neo-react](https://github.com/ediopia/neo-react)
Please use [@neo-react/wallets](https://www.npmjs.com/package/@neo-react/wallets)
# React NEO Wallets

## Description

Figuring out crypto wallets is the first obstacle for dapp development. This package will help you to handle NEO wallets for your NEO dapp.

## Features

- Connect with O3 wallet.
- Connect with NOS client.
- Import keys and local files.

## Demo

https://ediopia.github.io/react-neo-wallets/

## Installation

```
$ npm install --save react-neo-wallets
```

## Usage

```typescript
import React from "react";
import ReactNeoWallets from "react-neo-wallets";

interface WalletProps {
  provider: string;
  address: string;
  encryptedKey?: string;
  privateKey?: string;
}

const walletsInLocalStorage = [
  {
    encryptedKey: "6PYRj8SFUkDXm8vBunXkvVGAAan6HF3iDfKT4wcQMkpGkDHsVG8cbD9eSi",
    address: "AVKEWZxPog7j5gqfMoLhgox9HK44tWUG2J"
  },
  {
    encryptedKey: "6PYPUoZGMsGjWuqxekVcXrpzMdtks7VTSUZDoEpHLitjB2AnpWeLbpk2Dp",
    address: "AeRhK6NDmGiNTz8yAAJe3o4ecaqztFL12B"
  },
  ...
];

const WalletModal = () => {
  const handleConnected = (wallet: WalletProps) => {
    // Handle decrypted keys depending on your way.
  };
  return (
	  <ReactNeoWallets
	    savedWallets={walletsInLocalStorage}
	    onConnected={handleConnected}
	  />
  );
};
```
 
## License
 
The MIT License (MIT)
