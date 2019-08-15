"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const ftw_js_1 = __importDefault(require("../../../ftw-js"));
exports.reviewInvoke = (args) => (dispatch, getState) => {
    const state = getState();
    const { walletState } = state;
    const script = ftw_js_1.default.invoke.getScript(walletState.currentWallet, args);
    dispatch({
        type: types_1.REVIEW_INVOKE,
        payload: script,
    });
};
exports.cancelInvoke = () => {
    return {
        type: types_1.CANCEL_INVOKE,
    };
};
exports.submitInvoke = ({ wallet, script, networkFee }) => (dispatch) => {
    dispatch({
        type: types_1.SUBMIT_INVOKE,
    });
    ftw_js_1.default.invoke
        .doInvoke({
        wallet,
        script,
        networkFee,
    })
        .then((txid) => {
        console.log(txid);
        dispatch(exports.resultInvoke(txid));
    })
        .catch((e) => {
        dispatch(exports.errorInvoke(e.message));
    });
};
exports.resultInvoke = (txid) => {
    return {
        type: types_1.REVIEW_INVOKE,
        payload: txid,
    };
};
exports.errorInvoke = (errMsg) => {
    return {
        type: types_1.ERROR_INVOKE,
        payload: errMsg,
    };
};
exports.default = {
    reviewInvoke: exports.reviewInvoke,
    cancelInvoke: exports.cancelInvoke,
    submitInvoke: exports.submitInvoke,
    resultInvoke: exports.resultInvoke,
    errorInvoke: exports.errorInvoke,
};
