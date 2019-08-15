import { ConnectedWallet, WalletInLocalStorage } from "../../models";
export declare const LocalWallet: {
    getCurrentWallet: () => ConnectedWallet;
    setCurrentWallet: (wallet: ConnectedWallet) => void;
    getPrivateKey: (encryptedKey: string, password: string) => Promise<string>;
    removeCurrentWallet: () => void;
    getLocalWalletList: () => WalletInLocalStorage[];
};
//# sourceMappingURL=index.d.ts.map