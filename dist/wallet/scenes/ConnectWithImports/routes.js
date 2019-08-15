"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ImportNep2_1 = __importDefault(require("./scenes/ImportNep2"));
const ImportFile_1 = __importDefault(require("./scenes/ImportFile"));
const Create_1 = __importDefault(require("./scenes/Create"));
// import ImportPrivatekey from "./scenes/ImportPrivatekey";
exports.localImportsRoutes = [
    {
        label: "Passphrase",
        component: ImportNep2_1.default
    },
    {
        label: "Wallet file",
        component: ImportFile_1.default
    },
    {
        label: "New wallet",
        component: Create_1.default
    },
];
