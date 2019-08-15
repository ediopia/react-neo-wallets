import { InvokeScript } from "../../../models";

export const ERROR_INVOKE = "app/invoke/ERROR_INVOKE";
export const REVIEW_INVOKE = "app/invoke/REVIEW_INVOKE";
export const CANCEL_INVOKE = "app/invoke/CANCEL_INVOKE";
export const SUBMIT_INVOKE = "app/invoke/SUBMIT_INVOKE";
export const RESULT_INVOKE = "app/invoke/RESULT_INVOKE";
export const LOADING_INVOKE = "app/invoke/LOADING_INVOKE";
export const STOP_LOADING_INVOKE = "app/invoke/STOP_LOADING_INVOKE";

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

export type InvokeActionTypes =
  | ReviewInvokeAction
  | CancelInvokeAction
  | SubmitInvokeAction
  | ResultInvokeAction
  | ErrorInvokeAction
  | LoadingInvokeAction
  | StopLoadingInvokeAction;

export default {
  ERROR_INVOKE,
  REVIEW_INVOKE,
  CANCEL_INVOKE,
  SUBMIT_INVOKE,
  RESULT_INVOKE,
  LOADING_INVOKE,
  STOP_LOADING_INVOKE,
};
