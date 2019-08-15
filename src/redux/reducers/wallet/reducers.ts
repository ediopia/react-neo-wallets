import produce from "immer";
import { RootWalletState, WalletActionTypes, CONNECT_WALLET, DISCONNECT_WALLET, UPDATE_PRIVATEKEY } from "./types";
import FTW from "../../../ftw-js";

const initialState: RootWalletState = {
  currentWallet: FTW.wallet.getCurrentWallet(),
  savedWallets: FTW.wallet.getLocalWalletList(),
};

const walletReducer = (
  state = initialState,
  action: WalletActionTypes
): RootWalletState =>
  produce(state, draft => {
    switch (action.type) {
      case CONNECT_WALLET:
        draft.currentWallet = action.wallet;
        break;
      case DISCONNECT_WALLET:
        draft.currentWallet = undefined;
        break;
      case UPDATE_PRIVATEKEY:
        if(draft.currentWallet){
          draft.currentWallet.privateKey = action.payload;
        }
        break;
      default:
        return state;
    }
  });

export default walletReducer;
