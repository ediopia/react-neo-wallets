"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const store_1 = __importDefault(require("./store"));
exports.configureStore = store_1.default;
exports.ReduxProvider = (props) => {
    return (<react_redux_1.Provider store={store_1.default}>
      {props.children}
    </react_redux_1.Provider>);
};
