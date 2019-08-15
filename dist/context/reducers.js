"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const immer_1 = __importDefault(require("immer"));
const types_1 = require("./types");
exports.walletReducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case types_1.CONNECT_WALLET:
            return immer_1.default(state, draft => {
                draft.connectedWallet = action.payload;
            });
        case types_1.DISCONNECT_WALLET:
            return immer_1.default(state, draft => {
                draft.connectedWallet = undefined;
            });
        case types_1.UPDATE_PRIVATEKEY:
            return immer_1.default(state, draft => {
                // @ts-ignore
                draft.connectedWallet.privateKey = action.payload;
            });
        default:
            return state;
    }
};
