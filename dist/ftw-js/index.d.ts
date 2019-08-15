declare const FTW: {
    wallet: {
        getCurrentWallet: () => import("../models").ConnectedWallet;
        setCurrentWallet: (wallet: import("../models").ConnectedWallet) => void;
        getPrivateKey: (encryptedKey: string, password: string) => Promise<string>;
        removeCurrentWallet: () => void;
        getLocalWalletList: () => import("../models").WalletInLocalStorage[];
    };
    invoke: {
        getScript: (wallet: import("../models").ConnectedWallet, invokeArgs: import("../models").InvokeArgs) => any;
        doInvoke: (props: import("../models").DoInvokeArgs) => Promise<string>;
    };
    providers: {
        [key: string]: import("../models").ProviderMethods;
    };
};
export default FTW;
//# sourceMappingURL=index.d.ts.map