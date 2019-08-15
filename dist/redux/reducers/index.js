"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const wallet_1 = __importDefault(require("./wallet"));
const invoke_1 = __importDefault(require("./invoke"));
const reducer = redux_1.combineReducers({
    walletState: wallet_1.default,
    invokeState: invoke_1.default
});
exports.default = reducer;
