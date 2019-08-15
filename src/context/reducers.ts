import produce from "immer";
import {
  ActionTypes,
  CONNECT_WALLET,
  DISCONNECT_WALLET,
  UPDATE_PRIVATEKEY,
} from "./types";
import { States } from "./types";

export const walletReducer = (state: States, action: ActionTypes) => {
  switch (action.type) {
    case CONNECT_WALLET:
      return produce(state, draft => {
        draft.connectedWallet = action.payload ;
      });
    case DISCONNECT_WALLET:
      return produce(state, draft => {
        draft.connectedWallet = undefined;
      });
    case UPDATE_PRIVATEKEY:
      return produce(state, draft => {
        // @ts-ignore
        draft.connectedWallet.privateKey = action.payload;
      });
    default:
      return state;
  }
};
