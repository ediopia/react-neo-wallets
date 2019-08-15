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
const reducers_1 = require("./reducers");
const actions_1 = __importDefault(require("./actions"));
exports.Actions = actions_1.default;
const ftw_js_1 = __importDefault(require("../ftw-js"));
const Context = react_1.createContext({});
exports.Context = Context;
const ContextComponent = (props) => {
    const initialState = {
        connectedWallet: ftw_js_1.default.wallet.getCurrentWallet(),
    };
    const [state, dispatch] = react_1.useReducer(reducers_1.walletReducer, initialState);
    return (react_1.default.createElement(Context.Provider, { value: { state, dispatch } }, props.children));
};
function connect(mapStateToProps, mapDispatchToProps) {
    return function (Component) {
        return function () {
            const { state, dispatch } = react_1.useContext(Context);
            const stateToProps = mapStateToProps(state);
            const dispatchToProps = mapDispatchToProps(dispatch);
            // @ts-ignore
            const props = Object.assign({}, stateToProps, dispatchToProps);
            // @ts-ignore
            return react_1.default.createElement(Component, Object.assign({}, props));
        };
    };
}
exports.connect = connect;
exports.default = ContextComponent;
