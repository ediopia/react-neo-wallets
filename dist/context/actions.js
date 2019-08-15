"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const antd_1 = require("antd");
const ftw_js_1 = __importDefault(require("../ftw-js"));
const types_2 = require("../redux/reducers/invoke/types");
exports.connectWallet = (wallet) => {
    ftw_js_1.default.wallet.setCurrentWallet(wallet);
    return {
        type: types_1.CONNECT_WALLET,
        wallet,
    };
};
exports.disconnectWallet = () => {
    ftw_js_1.default.wallet.removeCurrentWallet();
    return {
        type: types_1.DISCONNECT_WALLET,
    };
};
exports.updatePrivatekey = (encryptedKey, password) => (dispatch) => __awaiter(this, void 0, void 0, function* () {
    dispatch({
        type: types_2.LOADING_INVOKE,
    });
    try {
        const privateKey = yield ftw_js_1.default.wallet.getPrivateKey(encryptedKey, password);
        dispatch({
            type: types_1.UPDATE_PRIVATEKEY,
            payload: privateKey,
        });
    }
    catch (e) {
        antd_1.message.error(e.message);
    }
    dispatch({
        type: types_2.STOP_LOADING_INVOKE,
    });
});
exports.default = {
    connectWallet: exports.connectWallet,
    disconnectWallet: exports.disconnectWallet,
    updatePrivatekey: exports.updatePrivatekey,
};
