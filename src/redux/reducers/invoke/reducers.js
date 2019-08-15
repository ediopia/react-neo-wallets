"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const immer_1 = __importDefault(require("immer"));
const types_1 = require("./types");
const initialReviewStates = {
    script: undefined,
    isSubmitting: false,
    txid: undefined,
    errorMsg: undefined,
};
const invokeReducer = (state = initialReviewStates, action) => {
    return immer_1.default(state, draft => {
        switch (action.type) {
            case types_1.REVIEW_INVOKE:
                draft.script = action.payload;
                break;
            case types_1.CANCEL_INVOKE:
                draft.script = undefined;
                break;
            case types_1.SUBMIT_INVOKE:
                draft.isSubmitting = true;
                break;
            case types_1.RESULT_INVOKE:
                draft.txid = action.payload;
                draft.isSubmitting = false;
                break;
            case types_1.ERROR_INVOKE:
                draft.errorMsg = action.payload;
                draft.isSubmitting = false;
                break;
            case types_1.LOADING_INVOKE:
                draft.isSubmitting = true;
                break;
            case types_1.STOP_LOADING_INVOKE:
                draft.isSubmitting = false;
                break;
            default:
                return state;
        }
    });
};
exports.default = invokeReducer;
