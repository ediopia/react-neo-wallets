export interface Account {
  provider: string;
  address: string;
  encryptedKey: string | undefined;
}

export interface ConnectProps {
  onConnected: (error: any | null, account: Account | undefined) => void
}

export interface Nep2FormStates {
  encryptedKey: string;
  password: string;
}

export interface CreateWalletStates {
  password: string;
  account: any;
}

declare global {
  interface Window {
    NOS: any
  }
}

