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
const Nav_1 = __importDefault(require("./components/Nav"));
const routes_1 = require("./routes");
const core_1 = require("@material-ui/core");
const LocalImports = (props) => {
    const { path } = props.match;
    const { push } = props.history;
    const { onConnected } = props;
    return (React.createElement(React.Fragment, null,
        React.createElement(Nav_1.default, { redirect: push, path: path }),
        React.createElement(core_1.Box, { m: 2 }, routes_1.localImportsRoutes.map((route) => {
            return React.createElement(react_router_dom_1.Route, { exact: route.exact, key: route.path, path: `${path}/${route.path}`, component: () => React.createElement(route.component, { onConnected: onConnected }) });
        }))));
};
exports.default = LocalImports;
