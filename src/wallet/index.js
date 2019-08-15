"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
require("antd/dist/antd.css");
const routes_1 = require("./routes");
const ReactNeoWallet = (props) => {
    return (<react_router_dom_1.MemoryRouter initialEntries={[`/`]}>
      <div>
        {routes_1.routes.map((route) => {
        return (<react_router_dom_1.Route key={route.path} path={route.path} exact={route.exact} component={(r) => (<route.component {...props} {...r}/>)}/>);
    })}
      </div>
    </react_router_dom_1.MemoryRouter>);
};
exports.default = ReactNeoWallet;
