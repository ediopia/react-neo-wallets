import produce from "immer";
import {
  InvokeStates,
  REVIEW_INVOKE,
  InvokeActionTypes,
  CANCEL_INVOKE,
  SUBMIT_INVOKE,
  RESULT_INVOKE,
  ERROR_INVOKE,
  LOADING_INVOKE,
  STOP_LOADING_INVOKE,
} from "./types";

const initialReviewStates: InvokeStates = {
  script: undefined,
  isSubmitting: false,
  txid: undefined,
  errorMsg: undefined,
};

const invokeReducer = (
  state = initialReviewStates,
  action: InvokeActionTypes
) => {
  return produce(state, draft => {
    switch (action.type) {
      case REVIEW_INVOKE:
        draft.script = action.payload;
        break;
      case CANCEL_INVOKE:
        draft.script = undefined;
        break;
      case SUBMIT_INVOKE:
        draft.isSubmitting = true;
        break;
      case RESULT_INVOKE:
        draft.txid = action.payload;
        draft.isSubmitting = false;
        break;
      case ERROR_INVOKE:
        draft.errorMsg = action.payload;
        draft.isSubmitting = false;
        break;
      case LOADING_INVOKE:
        draft.isSubmitting = true;
        break;
      case STOP_LOADING_INVOKE:
        draft.isSubmitting = false;
        break;
      default:
        return state;
    }
  });
};

export default invokeReducer;
