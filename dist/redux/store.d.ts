declare const store: import("redux").Store<{
    walletState: import("./reducers/wallet/types").RootWalletState;
    invokeState: import("./reducers/invoke/types").InvokeStates;
}, import("redux").AnyAction> & {
    dispatch: unknown;
};
export default store;
//# sourceMappingURL=store.d.ts.map