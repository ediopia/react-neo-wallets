import { ConnectedWallet } from "../models";
export declare const connectWallet: (wallet: ConnectedWallet) => {
    type: string;
    wallet: ConnectedWallet;
};
export declare const disconnectWallet: () => {
    type: string;
};
export declare const updatePrivatekey: (encryptedKey: string, password: string) => (dispatch: any) => Promise<void>;
declare const _default: {
    connectWallet: (wallet: ConnectedWallet) => {
        type: string;
        wallet: ConnectedWallet;
    };
    disconnectWallet: () => {
        type: string;
    };
    updatePrivatekey: (encryptedKey: string, password: string) => (dispatch: any) => Promise<void>;
};
export default _default;
//# sourceMappingURL=actions.d.ts.map