"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const local_wallet_1 = require("./local-wallet");
const invoke_1 = require("./invoke");
const providers_1 = require("./providers");
const FTW = {
    wallet: local_wallet_1.LocalWallet,
    invoke: invoke_1.Invoke,
    providers: providers_1.Providers
};
exports.default = FTW;
