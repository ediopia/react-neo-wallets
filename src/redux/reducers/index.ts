import { combineReducers } from "redux";

import { default as walletState } from "./wallet";
import { default as invokeState } from "./invoke";

const reducer = combineReducers( {
  walletState,
  invokeState
} );

export default reducer;
