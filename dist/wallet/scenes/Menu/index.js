"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
const routes_1 = require("../../routes");
const Item_1 = __importDefault(require("./components/Item"));
const AppMenu = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(antd_1.List, { size: "large", bordered: true, dataSource: routes_1.menuRoutes, renderItem: (item) => {
                return (react_1.default.createElement(antd_1.List.Item, null,
                    react_1.default.createElement(Item_1.default, Object.assign({}, item))));
            } })));
};
exports.default = AppMenu;
