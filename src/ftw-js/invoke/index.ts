import { SmartContracts } from "./contracts";
import { ConnectedWallet, DoInvokeArgs, InvokeArgs } from "../../models";
import { Providers } from "../providers";

const getScript = (wallet: ConnectedWallet, invokeArgs: InvokeArgs) => {
  const { contract, operation, args } = invokeArgs;
  console.log(invokeArgs)
  return SmartContracts[contract][operation](wallet, args);
};

const doInvoke = async (props: DoInvokeArgs) => {
  const { wallet } = props;
  try{
    return Providers[wallet.provider].invokeContract(props);
  }catch (e) {
    throw new Error("Provider or method doesn't exists")
  }
};

export const Invoke = {
  getScript,
  doInvoke,
};
