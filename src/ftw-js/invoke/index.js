"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const contracts_1 = require("./contracts");
const providers_1 = require("../providers");
const getScript = (wallet, invokeArgs) => {
    const { contract, operation, args } = invokeArgs;
    console.log(invokeArgs);
    return contracts_1.SmartContracts[contract][operation](wallet, args);
};
const doInvoke = (props) => __awaiter(this, void 0, void 0, function* () {
    const { wallet } = props;
    try {
        return providers_1.Providers[wallet.provider].invokeContract(props);
    }
    catch (e) {
        throw new Error("Provider or method doesn't exists");
    }
});
exports.Invoke = {
    getScript,
    doInvoke,
};
