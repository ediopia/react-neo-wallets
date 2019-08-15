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
    return (<div>
      <antd_1.List size="large" bordered dataSource={routes_1.menuRoutes} renderItem={(item) => {
        return (<antd_1.List.Item>
              <Item_1.default {...item}/>
            </antd_1.List.Item>);
    }}/>
    </div>);
};
exports.default = AppMenu;
