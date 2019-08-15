import { DashboardWalletState, RootWalletState } from "./reducers/wallet/types";
import { InvokeStates } from "./reducers/invoke/types";

export interface RootState {
  walletState: RootWalletState
  invokeState: InvokeStates
}

export interface DashboardRootState {
  walletState: DashboardWalletState
  invokeState: InvokeStates
}
