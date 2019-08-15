"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const raffle_1 = __importDefault(require("./nlp2/raffle"));
const lottery_1 = __importDefault(require("./nlp2/lottery"));
exports.NLP2_CONTRACT_HASH = "ada839286d23cdfb42eb556461b9382d02b6e12f";
exports.SmartContracts = {
    nlp2: {
        createRaffle: raffle_1.default.create,
        drawLottery: lottery_1.default.draw,
        verifyLottery: lottery_1.default.verify,
    },
};
//
// const SmartContracts = (
//   wallet: ConnectedWallet,
//   { contract, operation, args }: InvokeArgs
// ): InvokeScript => {
//   return CONTRACT_LIST[contract][operation](wallet, args);
// };
//
// export default (wallet: ConnectedWallet, invokeArgs: InvokeArgs) => {
//   const{ contract, operation, args } = invokeArgs;
//   return CONTRACT_LIST[contract][operation](wallet, args)
// };
