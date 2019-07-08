"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const actions_1 = require("../../actions");
const antd_1 = require("antd");
const ConnectO3 = (props) => {
    const [isLoading, setLoading] = react_1.useState(true);
    const [errorMsg, setErrorMsg] = react_1.useState("");
    react_1.useEffect(() => {
        // Update the document title using the browser API
        actions_1.onConnect("O3", (error, account) => {
            setLoading(false);
            if (error) {
                setErrorMsg(error);
            }
            else {
            }
        });
    });
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(antd_1.PageHeader, { onBack: () => props.history.goBack(), title: "Back" }),
        isLoading ? (react_1.default.createElement("div", null,
            react_1.default.createElement(antd_1.Spin, null))) : errorMsg ? (react_1.default.createElement(antd_1.Result, { status: "warning", title: "Something went wrong.", subTitle: errorMsg })) : (react_1.default.createElement(antd_1.Result, { status: "success", icon: react_1.default.createElement(antd_1.Icon, { type: "smile", theme: "twoTone" }), title: "Great, we've connected!" }))));
};
exports.default = ConnectO3;
