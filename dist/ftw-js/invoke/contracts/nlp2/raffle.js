"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const neon_js_1 = require("@cityofzion/neon-js");
const index_1 = require("../index");
exports.NLP2_RAFFLE_METHODS = {
    create: "createNewRaffle",
};
const prizeTokenSymbol = (prizeToken) => {
    if (prizeToken === 1) {
        return "FTX";
    }
    else if (prizeToken === 2) {
        return "CNEO";
    }
    else {
        return "CGAS";
    }
};
const create = (wallet, args) => {
    const { prizeAmount, maxTickets, prizeToken, ticketPrice } = args;
    return {
        transfer: {
            from: wallet.address,
            to: neon_js_1.wallet.getAddressFromScriptHash(index_1.NLP2_CONTRACT_HASH),
            amount: prizeAmount,
            symbol: prizeTokenSymbol(prizeToken),
        },
        operation: exports.NLP2_RAFFLE_METHODS.create,
        scriptHash: index_1.NLP2_CONTRACT_HASH,
        args: [
            {
                type: "Address",
                value: wallet.address,
            },
            {
                type: "Integer",
                value: 1,
            },
            {
                type: "Integer",
                value: prizeToken,
            },
            {
                type: "ByteArray",
                value: neon_js_1.u.num2fixed8(prizeAmount),
            },
            {
                type: "ByteArray",
                value: neon_js_1.u.num2fixed8(ticketPrice),
            },
            {
                type: "Integer",
                value: maxTickets,
            },
        ],
    };
};
const NLP2RaffleAPI = {
    create: create,
};
exports.default = NLP2RaffleAPI;
