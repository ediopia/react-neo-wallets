"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const actions_1 = require("../../../../actions");
const core_1 = require("@material-ui/core");
const O3Button = (props) => {
    return (React.createElement(core_1.Button, { fullWidth: true, onClick: () => actions_1.onConnect("O3", props.onConnected) },
        React.createElement("span", null, "Connect with O3")));
};
exports.default = O3Button;
