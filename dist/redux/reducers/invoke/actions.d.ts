import { Dispatch } from "redux";
import { DashboardRootState } from "../../store.types";
import { DoInvokeArgs, InvokeArgs } from "../../../models";
export declare const reviewInvoke: (args: InvokeArgs) => (dispatch: Dispatch<import("redux").AnyAction>, getState: () => DashboardRootState) => void;
export declare const cancelInvoke: () => {
    type: string;
};
export declare const submitInvoke: ({ wallet, script, networkFee }: DoInvokeArgs) => (dispatch: Dispatch<import("redux").AnyAction>) => void;
export declare const resultInvoke: (txid: string) => {
    type: string;
    payload: string;
};
export declare const errorInvoke: (errMsg: string) => {
    type: string;
    payload: string;
};
declare const _default: {
    reviewInvoke: (args: InvokeArgs) => (dispatch: Dispatch<import("redux").AnyAction>, getState: () => DashboardRootState) => void;
    cancelInvoke: () => {
        type: string;
    };
    submitInvoke: ({ wallet, script, networkFee }: DoInvokeArgs) => (dispatch: Dispatch<import("redux").AnyAction>) => void;
    resultInvoke: (txid: string) => {
        type: string;
        payload: string;
    };
    errorInvoke: (errMsg: string) => {
        type: string;
        payload: string;
    };
};
export default _default;
//# sourceMappingURL=actions.d.ts.map