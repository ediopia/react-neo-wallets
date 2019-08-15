/// <reference types="react" />
import "antd/dist/antd.css";
import { ConnectedWallet, WalletInLocalStorage } from "../models";
export interface IRoute {
    path: string;
    component: any;
    exact?: boolean;
}
export interface AppProps {
    savedWallets?: WalletInLocalStorage[];
    onConnected: (account: ConnectedWallet) => void;
}
declare const ReactNeoWallet: (props: AppProps) => JSX.Element;
export default ReactNeoWallet;
//# sourceMappingURL=index.d.ts.map