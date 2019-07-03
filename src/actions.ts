import { Account } from "./types/types";
const o3dapi = require("o3-dapi-core");
const o3dapiNeo = require("o3-dapi-neo");
o3dapi.initPlugins([o3dapiNeo]);
export const onConnect = (provider: string, cb: (error: any, account: Account | undefined) => void): void => {
  switch (provider) {
    case "O3":
      connectO3(cb);
      break;
    case "NOS":
      connectNOS(cb);
  }
};

const connectO3 = async (cb: (error: any, account: Account | undefined) => void) => {
  try {
    const account = await o3dapi.NEO.getAccount();
    const { address } = account;
    cb(null, {
      provider: "O3",
      address,
      encryptedKey: "",
    });
  } catch (e) {
    cb(e.description ? e.description : e.type, undefined);
  }
};

const connectNOS = (cb: (error: any, account: Account | undefined) => void) => {
  if (window.NOS) {
    const nos = window.NOS.V1;
    nos
      .getAddress()
      .then((address: string) => {
        cb(null, {
          provider: "NOS",
          address,
          encryptedKey: "",
        });
      })
      .catch(() => cb("FAILED_LOAD_NOS", undefined));
  } else {
    cb("NOS dapi provider not found.", undefined);
  }
};
