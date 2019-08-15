import { WalletInLocalStorage, ConnectedWallet } from "../../../models";

export const CONNECT_WALLET = "app/wallet/CONNECT_WALLET";
export const DISCONNECT_WALLET = "app/wallet/DISCONNECT_WALLET";
export const UPDATE_PRIVATEKEY = "app/wallet/UPDATE_PRIVATEKEY";

export interface RootWalletState {
  currentWallet?: ConnectedWallet,
  savedWallets: WalletInLocalStorage[]
}

export interface DashboardWalletState {
  currentWallet: ConnectedWallet,
}

export interface ConnectWalletAction {
  type: typeof CONNECT_WALLET
  wallet: ConnectedWallet
}

export interface DisconnectWalletAction {
  type: typeof DISCONNECT_WALLET
}

export interface UpdatePrivateKeyAction {
  type: typeof UPDATE_PRIVATEKEY
  payload: string
}

export type WalletActionTypes = ConnectWalletAction | DisconnectWalletAction | UpdatePrivateKeyAction

export default {
  CONNECT_WALLET,
  DISCONNECT_WALLET,
  UPDATE_PRIVATEKEY
}
