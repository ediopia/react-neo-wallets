"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const wallet_1 = __importDefault(require("./wallet"));
const redux_1 = require("./redux");
exports.ReduxProvider = redux_1.ReduxProvider;
exports.default = wallet_1.default;
