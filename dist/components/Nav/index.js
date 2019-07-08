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
const React = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const O3button_1 = __importDefault(require("./components/O3button"));
const NOSButton_1 = __importDefault(require("./components/NOSButton"));
const core_1 = require("@material-ui/core");
const antd_1 = require("antd");
const routes = [
    {
        label: "Connect with O3",
        path: "/o3",
    },
    {
        label: "Connect with NOS",
        path: "/nos",
    },
    {
        label: "Import using keys",
        path: "/imports",
    },
];
const Nav = (props) => {
    return (React.createElement("div", null,
        React.createElement(antd_1.List, { size: "large", bordered: true, dataSource: routes, renderItem: item => React.createElement(antd_1.List.Item, null, item.label) }),
        React.createElement(core_1.Grid, { container: true, spacing: 3 },
            React.createElement(core_1.Grid, { item: true, xs: true },
                React.createElement(O3button_1.default, Object.assign({}, props))),
            React.createElement(core_1.Grid, { item: true, xs: true },
                React.createElement(NOSButton_1.default, Object.assign({}, props))),
            React.createElement(core_1.Grid, { item: true, xs: true },
                React.createElement(react_router_dom_1.Link, { to: `/imports` },
                    React.createElement(antd_1.Button, { type: "primary" }, "Import"))))));
};
exports.default = Nav;
