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
const Tabs_1 = __importDefault(require("@material-ui/core/Tabs"));
const Tab_1 = __importDefault(require("@material-ui/core/Tab"));
const routes_1 = require("../../routes");
const core_1 = require("@material-ui/core");
const ImportsNav = ({ path, redirect }) => {
    const [value, setValue] = react_1.useState(0);
    function handleChange(event, newValue) {
        setValue(newValue);
        redirect(`${path}/${routes_1.localImportsRoutes[newValue].path}`);
    }
    return (react_1.default.createElement(core_1.AppBar, { position: "static" },
        react_1.default.createElement(Tabs_1.default, { indicatorColor: "primary", variant: "scrollable", scrollButtons: "auto", value: value, onChange: handleChange }, routes_1.localImportsRoutes.map((route) => {
            return react_1.default.createElement(Tab_1.default, { key: route.label, label: route.label });
        }))));
};
exports.default = ImportsNav;
