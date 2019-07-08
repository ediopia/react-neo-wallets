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
const o3dapi = require("o3-dapi-core");
const o3dapiNeo = require("o3-dapi-neo");
o3dapi.initPlugins([o3dapiNeo]);
exports.onConnect = (provider, cb) => {
    switch (provider) {
        case "O3":
            connectO3(cb);
            break;
        case "NOS":
            connectNOS(cb);
    }
};
const connectO3 = (cb) => __awaiter(this, void 0, void 0, function* () {
    try {
        const account = yield o3dapi.NEO.getAccount();
        const { address } = account;
        cb(null, {
            provider: "O3",
            address,
            encryptedKey: "",
        });
    }
    catch (e) {
        cb(e.description ? e.description : e.type, undefined);
    }
});
const connectNOS = (cb) => {
    if (window.NOS) {
        const nos = window.NOS.V1;
        nos
            .getAddress()
            .then((address) => {
            cb(null, {
                provider: "NOS",
                address,
                encryptedKey: "",
            });
        })
            .catch(() => cb("FAILED_LOAD_NOS", undefined));
    }
    else {
        cb("NOS dapi provider not found.", undefined);
    }
};
