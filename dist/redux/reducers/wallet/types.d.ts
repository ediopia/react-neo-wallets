import { WalletInLocalStorage, ConnectedWallet } from "../../../models";
export declare const CONNECT_WALLET = "app/wallet/CONNECT_WALLET";
export declare const DISCONNECT_WALLET = "app/wallet/DISCONNECT_WALLET";
export declare const UPDATE_PRIVATEKEY = "app/wallet/UPDATE_PRIVATEKEY";
export interface RootWalletState {
    currentWallet?: ConnectedWallet;
    savedWallets: WalletInLocalStorage[];
}
export interface DashboardWalletState {
    currentWallet: ConnectedWallet;
}
export interface ConnectWalletAction {
    type: typeof CONNECT_WALLET;
    wallet: ConnectedWallet;
}
export interface DisconnectWalletAction {
    type: typeof DISCONNECT_WALLET;
}
export interface UpdatePrivateKeyAction {
    type: typeof UPDATE_PRIVATEKEY;
    payload: string;
}
export declare type WalletActionTypes = ConnectWalletAction | DisconnectWalletAction | UpdatePrivateKeyAction;
declare const _default: {
    CONNECT_WALLET: string;
    DISCONNECT_WALLET: string;
    UPDATE_PRIVATEKEY: string;
};
export default _default;
//# sourceMappingURL=types.d.ts.map