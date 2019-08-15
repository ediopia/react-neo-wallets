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
const routes_1 = require("./routes");
const antd_1 = require("antd");
const SavedWallets_1 = __importDefault(require("./scenes/SavedWallets"));
const ConnectWithImports = (props) => {
    const [currentStep, setStep] = react_1.useState(props.savedWallets && props.savedWallets.length > 0 ? "0" : "1");
    return (react_1.default.createElement("div", { id: "Local-imports", style: { minHeight: "300px" } },
        react_1.default.createElement(antd_1.Tabs, { defaultActiveKey: currentStep, onChange: (activeKey => setStep(activeKey)) },
            props.savedWallets && props.savedWallets.length > 0 ? (react_1.default.createElement(antd_1.Tabs.TabPane, { key: "0", tab: "Saved wallets" },
                react_1.default.createElement(SavedWallets_1.default, Object.assign({}, props)))) : null,
            routes_1.localImportsRoutes.map((route, index) => {
                const key = (index + 1).toString();
                return (react_1.default.createElement(antd_1.Tabs.TabPane, { key: key, tab: route.label },
                    react_1.default.createElement(route.component, Object.assign({}, props))));
            }))));
};
exports.default = ConnectWithImports;
