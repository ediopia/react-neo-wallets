import {
  REVIEW_INVOKE,
  CANCEL_INVOKE,
  SUBMIT_INVOKE,
  ERROR_INVOKE,
} from "./types";
import { Dispatch } from "redux";
import { DashboardRootState } from "../../store.types";
import { DoInvokeArgs, InvokeArgs } from "../../../models";
import FTW from "../../../ftw-js";

export const reviewInvoke = (args: InvokeArgs) => (
  dispatch: Dispatch,
  getState: () => DashboardRootState
) => {
  const state = getState();
  const { walletState } = state;
  const script = FTW.invoke.getScript(walletState.currentWallet, args);
  dispatch({
    type: REVIEW_INVOKE,
    payload: script,
  });
};

export const cancelInvoke = () => {
  return {
    type: CANCEL_INVOKE,
  };
};

export const submitInvoke = ({ wallet, script, networkFee }: DoInvokeArgs) => (
  dispatch: Dispatch
) => {
  dispatch({
    type: SUBMIT_INVOKE,
  });
  FTW.invoke
    .doInvoke({
      wallet,
      script,
      networkFee,
    })
    .then((txid: string) => {
      console.log(txid);
      dispatch(resultInvoke(txid));
    })
    .catch((e: any) => {
      dispatch(errorInvoke(e.message));
    });
};

export const resultInvoke = (txid: string) => {
  return {
    type: REVIEW_INVOKE,
    payload: txid,
  };
};

export const errorInvoke = (errMsg: string) => {
  return {
    type: ERROR_INVOKE,
    payload: errMsg,
  };
};

export default {
  reviewInvoke,
  cancelInvoke,
  submitInvoke,
  resultInvoke,
  errorInvoke,
};
