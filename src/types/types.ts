export interface AppProps {
  savedWallets?: [{
    encryptedKey: string;
    address: string;
  }];
  onConnected: (account: Account) => void;
}

export interface AppRoute {
  label: string;
  path: string;
  component: any;
  exact?: boolean;
}

export interface ImportRoute {
  label: string;
  component: any;
}

export interface Account {
  provider: string;
  address: string;
  encryptedKey?: string;
  privateKey?: string
}

export interface Nep2States {
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

