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
const antd_1 = require("antd");
const routes_1 = require("../../routes");
const Item_1 = __importDefault(require("./components/Item"));
const AppMenu = () => {
    return (React.createElement("div", null,
        React.createElement(antd_1.List, { size: "large", bordered: true, dataSource: routes_1.routes, renderItem: (item) => {
                if (!item.exact) {
                    return (React.createElement(antd_1.List.Item, null,
                        React.createElement(Item_1.default, Object.assign({}, item))));
                }
                else {
                    return React.createElement("div", null);
                }
            } })));
};
exports.default = AppMenu;
