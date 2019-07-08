"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
const { Paragraph } = antd_1.Typography;
const BackupKeys = (props) => {
    const { account, onConnected } = props;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Paragraph, null,
            react_1.default.createElement(antd_1.Alert, { message: "Informational Notes", description: "You must save and backup the keys. If you lose them, you lose access to your assets.", type: "info", showIcon: true })),
        react_1.default.createElement(Paragraph, null,
            react_1.default.createElement("ul", null,
                react_1.default.createElement("li", null,
                    "Password: ",
                    account.password),
                react_1.default.createElement("li", null,
                    "Wallet address: ",
                    account.address),
                react_1.default.createElement("li", null,
                    "Encrypted key: ",
                    account.encryptedKey),
                react_1.default.createElement("li", null,
                    "Private key: ",
                    account.privateKey))),
        react_1.default.createElement(antd_1.Divider, null),
        react_1.default.createElement(antd_1.Button, { onClick: () => onConnected({
                provider: "LOCAL",
                address: account.address,
                encryptedKey: account.address,
                privateKey: account.privateKey
            }), type: "primary" }, "Open")));
};
exports.default = BackupKeys;
