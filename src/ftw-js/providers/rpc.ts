import Neon, { api, u, wallet as NeonWallet } from "@cityofzion/neon-js";
import { DoInvokeArgs, ProviderMethods } from "../../models";
import { convertScriptToParams, getRpcEndpoint } from "../utils";

const invokeContract = async ({ wallet, script, networkFee }: DoInvokeArgs) => {
  // if(wallet.privateKey){
  const provider = new api.neoscan.instance("MainNet");
  const rpcEndpoint = await provider.getRPCEndpoint();
  const balance = await provider.getBalance(wallet.address);
  const account = new NeonWallet.Account(wallet.privateKey);
  const config = {
    api: provider,
    url: rpcEndpoint,
    account,
    privateKey: wallet.privateKey,
    fees: networkFee,
    override: [
      {
        usage: 240,
        data: u.reverseHex(u.str2hexstring("FTW")),
      },
    ],
    balance,
    script: Neon.create.script({
      scriptHash: script.scriptHash,
      operation: script.operation,
      args: script.args = convertScriptToParams(script.args),
    }),
  };
  const result = await Neon.doInvoke(config);

  console.log(result);
  return "txid";
};

const getAccount = async () => {
  return {
    provider: "Local",
    address: ""
  };
};

export const RPC: ProviderMethods = {
  invokeContract,
  getAccount,
};
