import { ConnectedWallet } from "../models";
import FTW from "../ftw-js";
const o3dapi = require("o3-dapi-core");
const o3dapiNeo = require("o3-dapi-neo");
o3dapi.initPlugins([o3dapiNeo]);
export const onConnect = async (
  provider: string,
  cb: (error: any, account: ConnectedWallet | undefined) => void
): Promise<ConnectedWallet> => {
  return await FTW.providers[provider].getAccount();
};
