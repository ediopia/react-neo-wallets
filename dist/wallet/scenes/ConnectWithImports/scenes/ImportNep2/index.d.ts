import React from "react";
import { ConnectedWallet } from "../../../../../models";
export interface Nep2States {
    encryptedKey: string;
    password: string;
}
declare type IProps = {
    encryptedKey?: string;
    onConnected: (account: ConnectedWallet) => void;
};
declare const ImportNep2: React.ComponentType<IProps>;
export default ImportNep2;
//# sourceMappingURL=index.d.ts.map