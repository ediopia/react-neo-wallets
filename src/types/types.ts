export interface AppProps {
  savedWallets?: [{
    encryptedKey: string;
    address: string;
  }];
  onConnected: (account: any) => void;
}

export interface IRoute {
  label: string;
  path: string;
  component: any;
  exact?: boolean;
}

export interface IImportRoute {
  label: string;
  component: any;
}

export interface Account {
  provider: string;
  address: string;
  encryptedKey: string | undefined;
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

