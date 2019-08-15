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
const ftw_js_1 = __importDefault(require("../ftw-js"));
exports.WalletContext = react_1.createContext({});
function connect(mapStateToProps, mapDispatchToProps) {
    return function (Component) {
        return function () {
            const { state, dispatch } = react_1.useContext(exports.WalletContext);
            const stateToProps = mapStateToProps(state);
            const dispatchToProps = mapDispatchToProps(dispatch);
            const props = Object.assign({}, stateToProps, dispatchToProps);
            return <Component {...props}/>;
        };
    };
}
exports.connect = connect;
const WalletContextComponent = (props) => {
    const initialState = {
        currentWallet: ftw_js_1.default.wallet.getCurrentWallet(),
        savedWallets: ftw_js_1.default.wallet.getLocalWalletList(),
    };
    const [state, dispatch] = react_1.useReducer(reducers_1.walletReducer, initialState);
    return (<exports.WalletContext.Provider value={{ state, dispatch }}>
      {props.children}
    </exports.WalletContext.Provider>);
};
exports.default = WalletContextComponent;
