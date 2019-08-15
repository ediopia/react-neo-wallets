/// <reference types="react" />
import { ConnectedWallet } from "../../../../../models";
interface IProps {
    account: {
        password: string;
        address: string;
        encryptedKey: string;
        privateKey: string;
    };
    onConnected: (account: ConnectedWallet) => void;
}
declare const BackupKeys: (props: IProps) => JSX.Element;
export default BackupKeys;
//# sourceMappingURL=Backup.d.ts.map