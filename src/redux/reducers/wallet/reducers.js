"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const immer_1 = __importDefault(require("immer"));
const types_1 = require("./types");
const ftw_js_1 = __importDefault(require("../../../ftw-js"));
const initialState = {
    currentWallet: ftw_js_1.default.wallet.getCurrentWallet(),
    savedWallets: ftw_js_1.default.wallet.getLocalWalletList(),
};
const walletReducer = (state = initialState, action) => immer_1.default(state, draft => {
    switch (action.type) {
        case types_1.CONNECT_WALLET:
            draft.currentWallet = action.wallet;
            break;
        case types_1.DISCONNECT_WALLET:
            draft.currentWallet = undefined;
            break;
        case types_1.UPDATE_PRIVATEKEY:
            if (draft.currentWallet) {
                draft.currentWallet.privateKey = action.payload;
            }
            break;
        default:
            return state;
    }
});
exports.default = walletReducer;
