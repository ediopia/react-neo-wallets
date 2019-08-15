import { InvokeScript } from "../../../models";
export declare const ERROR_INVOKE = "app/invoke/ERROR_INVOKE";
export declare const REVIEW_INVOKE = "app/invoke/REVIEW_INVOKE";
export declare const CANCEL_INVOKE = "app/invoke/CANCEL_INVOKE";
export declare const SUBMIT_INVOKE = "app/invoke/SUBMIT_INVOKE";
export declare const RESULT_INVOKE = "app/invoke/RESULT_INVOKE";
export declare const LOADING_INVOKE = "app/invoke/LOADING_INVOKE";
export declare const STOP_LOADING_INVOKE = "app/invoke/STOP_LOADING_INVOKE";
export interface InvokeStates {
    isSubmitting: boolean;
    txid?: string;
    script?: InvokeScript;
    errorMsg?: string;
}
export interface ReviewInvokeAction {
    type: typeof REVIEW_INVOKE;
    payload: InvokeScript;
}
export interface CancelInvokeAction {
    type: typeof CANCEL_INVOKE;
}
export interface SubmitInvokeAction {
    type: typeof SUBMIT_INVOKE;
}
export interface ResultInvokeAction {
    type: typeof RESULT_INVOKE;
    payload: string;
}
export interface ErrorInvokeAction {
    type: typeof ERROR_INVOKE;
    payload: string;
}
export interface LoadingInvokeAction {
    type: typeof LOADING_INVOKE;
}
export interface StopLoadingInvokeAction {
    type: typeof STOP_LOADING_INVOKE;
}
export declare type InvokeActionTypes = ReviewInvokeAction | CancelInvokeAction | SubmitInvokeAction | ResultInvokeAction | ErrorInvokeAction | LoadingInvokeAction | StopLoadingInvokeAction;
declare const _default: {
    ERROR_INVOKE: string;
    REVIEW_INVOKE: string;
    CANCEL_INVOKE: string;
    SUBMIT_INVOKE: string;
    RESULT_INVOKE: string;
    LOADING_INVOKE: string;
    STOP_LOADING_INVOKE: string;
};
export default _default;
//# sourceMappingURL=types.d.ts.map