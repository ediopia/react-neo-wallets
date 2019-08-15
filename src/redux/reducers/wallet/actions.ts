import { CONNECT_WALLET, DISCONNECT_WALLET, UPDATE_PRIVATEKEY } from "./types";
import { ConnectedWallet } from "../../../models";
import FTW from "../../../ftw-js";
import { message } from "antd";
import { Dispatch } from "redux";
import { LOADING_INVOKE, STOP_LOADING_INVOKE } from "../invoke/types";

export const connectWallet = (wallet: ConnectedWallet) => {
  FTW.wallet.setCurrentWallet(wallet);
  return {
    type: CONNECT_WALLET,
    wallet,
  };
};

export const disconnectWallet = () => {
  FTW.wallet.removeCurrentWallet();
  return {
    type: DISCONNECT_WALLET,
  };
};

export const updatePrivatekey = (
  encryptedKey: string,
  password: string
) => async (dispatch: Dispatch) => {
  dispatch({
    type: LOADING_INVOKE,
  });
  try {
    const privateKey = await FTW.wallet.getPrivateKey(encryptedKey, password);
    dispatch({
      type: UPDATE_PRIVATEKEY,
      payload: privateKey,
    });
  } catch (e) {
    message.error(e.message);
  }
  dispatch({
    type: STOP_LOADING_INVOKE,
  });
};

export default {
  connectWallet,
  disconnectWallet,
  updatePrivatekey,
};
