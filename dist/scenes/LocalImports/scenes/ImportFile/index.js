"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const ImportNep2_1 = __importDefault(require("../ImportNep2"));
const antd_1 = require("antd");
const { Dragger } = antd_1.Upload;
const ImportFile = ({ onConnected }) => {
    const [encryptedKey, setEncryptedKey] = react_1.useState("");
    const [hasError, setError] = react_1.useState(false);
    const handleImportKeyfile = file => {
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const jsonObj = JSON.parse(event.target.result);
                if (jsonObj.key) {
                    setEncryptedKey(jsonObj.key);
                }
                // TODO::Need to make better importing system
                if (jsonObj.accounts && jsonObj.accounts.length > 0) {
                    setEncryptedKey(jsonObj.accounts[0].key);
                }
            }
            catch (e) {
                setError(true);
            }
        };
        reader.readAsText(file);
        return false;
    };
    return (react_1.default.createElement(react_1.default.Fragment, null, encryptedKey ? (react_1.default.createElement(ImportNep2_1.default, { onConnected: onConnected, encryptedKey: encryptedKey })) : (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Dragger, { accept: ".json,application/json", beforeUpload: handleImportKeyfile }, !hasError ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("p", { className: "ant-upload-drag-icon" },
                react_1.default.createElement(antd_1.Icon, { type: "inbox" })),
            react_1.default.createElement("p", { className: "ant-upload-text" }, "Click or drag file to this area to upload"))) : (react_1.default.createElement(antd_1.Result, { status: "warning", title: "There are some problems with your operation." })))))));
};
exports.default = ImportFile;
