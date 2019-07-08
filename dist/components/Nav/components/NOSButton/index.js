"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const actions_1 = require("../../../../actions");
const core_1 = require("@material-ui/core");
const NOSButton = (props) => {
    return (react_1.default.createElement(core_1.Button, { fullWidth: true, onClick: () => actions_1.onConnect("NOS", props.onConnected) },
        react_1.default.createElement("span", null, "Connect with NOS")));
};
exports.default = NOSButton;
