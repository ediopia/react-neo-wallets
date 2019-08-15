import { DoInvokeArgs, ProviderMethods } from "../../models";
import { convertScriptToParams } from "../utils";

declare global {
  interface Window {
    NOS: any;
  }
}

const invokeContract = async ({ wallet, script, networkFee }: DoInvokeArgs) => {
  // if (window.NOS) {
  try {
    const nos = window.NOS.V1;
    script.args = convertScriptToParams(script.args);
    // remove default encoding option
    script.encodeArgs = false;
    return await nos.invoke(script);
  } catch (e) {
    throw new Error(e.message);
  }
  // } else {
  //   throw new Error("Can't find nOS client")
  // }
};

const getAccount = async () => {
  try {
    const nos = window.NOS.V1;
    const address = await nos.getAddress();
    return {
      provider: "NOS",
      address,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};

export const NOS: ProviderMethods = {
  invokeContract,
  getAccount,
};
