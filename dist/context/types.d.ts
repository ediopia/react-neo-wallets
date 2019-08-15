import { ConnectedWallet } from "../models";
import { ReactNode } from "react";
export declare const CONNECT_WALLET = "app/wallet/CONNECT_WALLET";
export declare const DISCONNECT_WALLET = "app/wallet/DISCONNECT_WALLET";
export declare const UPDATE_PRIVATEKEY = "app/wallet/UPDATE_PRIVATEKEY";
export interface ContextProps {
    children: ReactNode;
}
export interface States {
    connectedWallet?: ConnectedWallet;
}
export interface ConnectWalletAction {
    type: typeof CONNECT_WALLET;
    payload: ConnectedWallet;
}
export interface DisconnectWalletAction {
    type: typeof DISCONNECT_WALLET;
}
export interface UpdatePrivateKeyAction {
    type: typeof UPDATE_PRIVATEKEY;
    payload: string;
}
export declare type ActionTypes = ConnectWalletAction | DisconnectWalletAction | UpdatePrivateKeyAction;
//# sourceMappingURL=types.d.ts.map