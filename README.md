# React NEO wallets

## Installation

```
$ npm install --save react-neo-wallets
```

## Features

- Connect with O3 wallet.
- Connect with NOS client.
- Import local keys and files.

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
    <div>
      <ReactNeoWallets
        savedWallets={walletsInLocalStorage}
        onConnected={handleConnected}
      />
    </div>
  );
};
```
