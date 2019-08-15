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
const antd_1 = require("antd");
const styles_1 = require("../../styles");
const ftw_js_1 = __importDefault(require("../../../ftw-js"));
class ConnectWithPlugin extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            // @ts-ignore
            account: undefined,
            isLoading: true,
            errorMsg: "",
        };
        this.onStart = (account) => {
            this.props.onConnected(account);
        };
    }
    componentDidMount() {
        let { match } = this.props;
        const { params } = match;
        const provider = params.plugin;
        ftw_js_1.default.providers[provider]
            .getAccount()
            .then(account => {
            this.setState({
                account,
                isLoading: false,
            });
        })
            .catch(e => {
            this.setState({
                errorMsg: e.message,
                isLoading: false,
            });
        });
    }
    render() {
        const { account, isLoading, errorMsg } = this.state;
        return (react_1.default.createElement("div", null,
            !account ? (react_1.default.createElement(antd_1.PageHeader, { style: { display: "flex", paddingLeft: 0, paddingTop: 0 }, onBack: () => this.props.history.goBack(), title: "Back" })) : (false),
            isLoading ? (react_1.default.createElement(styles_1.Box, null,
                react_1.default.createElement(antd_1.Spin, null))) : errorMsg ? (react_1.default.createElement(antd_1.Result, { status: "warning", subTitle: errorMsg })) : (react_1.default.createElement(antd_1.Result, { status: "success", icon: react_1.default.createElement(antd_1.Icon, { type: "smile", theme: "twoTone" }), title: "Great, we've connected!", extra: react_1.default.createElement(antd_1.Button, { onClick: () => {
                        if (account) {
                            // @ts-ignore
                            this.onStart(account);
                        }
                    }, type: "primary" }, "Start") }))));
    }
}
exports.default = ConnectWithPlugin;
