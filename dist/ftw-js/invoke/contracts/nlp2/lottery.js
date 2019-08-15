"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
exports.NLP2_LOTTERY_METHODS = {
    draw: "drawLottery",
    verify: "verifyLotteryTicket",
};
const draw = (wallet) => {
    return {
        transfer: {
            from: wallet.address,
            to: "",
            amount: 0,
            symbol: "",
        },
        operation: exports.NLP2_LOTTERY_METHODS.draw,
        scriptHash: index_1.NLP2_CONTRACT_HASH,
        args: [
            {
                type: "Address",
                value: wallet.address,
            },
        ],
    };
};
const verify = (wallet) => {
    return {
        transfer: {
            from: wallet.address,
            to: "",
            amount: 0,
            symbol: "",
        },
        operation: exports.NLP2_LOTTERY_METHODS.verify,
        scriptHash: index_1.NLP2_CONTRACT_HASH,
        args: [
            {
                type: "Address",
                value: wallet.address,
            },
        ],
    };
};
exports.default = {
    draw,
    verify,
};
