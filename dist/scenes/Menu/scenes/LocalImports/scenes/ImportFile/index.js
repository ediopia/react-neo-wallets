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
const core_1 = require("@material-ui/core");
// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     input: {
//       display: "none",
//     },
//   }),
// );
const ImportFile = (props) => {
    const { onConnected } = props;
    // const classes = useStyles();
    const [encryptedKey, setEncryptedKey] = react_1.useState("");
    const handleImportKeyfile = (e) => {
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
                onConnected("We can not support the file.", undefined);
            }
        };
        reader.readAsText(e.target.files[0]);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null, encryptedKey ? (react_1.default.createElement(ImportNep2_1.default, { onConnected: onConnected, encryptedKey: encryptedKey })) : (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("input", { onChange: handleImportKeyfile, accept: "application/json/*", id: "contained-button-file", type: "file" }),
        react_1.default.createElement("label", { htmlFor: "contained-button-file" },
            react_1.default.createElement(core_1.Button, { variant: "contained", component: "span" }, "Open wallet file"))))));
};
exports.default = ImportFile;
