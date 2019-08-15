export interface ConnectedWallet {
  provider: string;
  address: string;
  encryptedKey?: string;
  privateKey?: string;
}

export interface WalletInLocalStorage {
  address: string;
  encryptedKey: string;
}

export interface InvokeArgs {
  wallet: ConnectedWallet;
  contract: string;
  operation: string;
  args: any;
}

export interface InvokeScript {
  transfer: {
    from: string;
    to: string;
    amount: number;
    symbol: string;
  };
  operation: string;
  scriptHash: string;
  fee?: number;
  encodeArgs?: boolean;
  network?: "MainNet" | "TestNet" | "PrivateNet";
  args: InvokeScriptArgs[];
}
export interface InvokeScriptArgs {
  type: string;
  value: string | number;
}

export interface DoInvokeArgs {
  wallet: ConnectedWallet;
  script: InvokeScript;
  networkFee: number;
}

export interface ProviderMethods {
  invokeContract: (args: DoInvokeArgs) => Promise<string>;
  getAccount: () => Promise<ConnectedWallet>;
}
