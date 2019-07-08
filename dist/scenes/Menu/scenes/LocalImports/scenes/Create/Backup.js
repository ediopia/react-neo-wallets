"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       padding: theme.spacing(3, 2),
//       margin: theme.spacing(0, 0, 2, 0),
//     },
//   }),
// );
const BackupKeys = (props) => {
    // const classes = useStyles();
    const { password, account, onConnected } = props;
    let { _address, _encrypted, _privateKey } = account;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(core_1.Paper, null,
            react_1.default.createElement(core_1.Typography, { component: "ul" },
                react_1.default.createElement("li", null, "You must save and backup the keys."),
                react_1.default.createElement("li", null, "If you lose them, you lose access to your assets."))),
        react_1.default.createElement(core_1.Paper, null,
            react_1.default.createElement(core_1.Typography, { component: "p" },
                react_1.default.createElement("strong", null, "Password"),
                ":",
                react_1.default.createElement("br", null),
                react_1.default.createElement("p", null, password),
                react_1.default.createElement("strong", null, "Wallet address"),
                ":",
                react_1.default.createElement("br", null),
                react_1.default.createElement("p", null, _address),
                react_1.default.createElement("strong", null, "Encrypted key"),
                ":",
                react_1.default.createElement("br", null),
                react_1.default.createElement("p", null, _encrypted),
                react_1.default.createElement("strong", null, "Private key"),
                ":",
                react_1.default.createElement("br", null),
                react_1.default.createElement("p", null, _privateKey))),
        react_1.default.createElement(core_1.Button, { onClick: () => onConnected(null, { provider: "LOCAL", address: _address, encryptedKey: _encrypted }), variant: "contained", color: "primary" }, "Open")));
};
exports.default = BackupKeys;
