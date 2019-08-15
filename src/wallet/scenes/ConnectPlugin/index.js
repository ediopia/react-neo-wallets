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
        return (<div>
        {!account ? (<antd_1.PageHeader style={{ display: "flex", paddingLeft: 0, paddingTop: 0 }} onBack={() => this.props.history.goBack()} title="Back"/>) : false}

        {isLoading ? (<styles_1.Box>
            <antd_1.Spin />
          </styles_1.Box>) : errorMsg ? (<antd_1.Result status={"warning"} subTitle={errorMsg}/>) : (<antd_1.Result status={"success"} icon={<antd_1.Icon type="smile" theme="twoTone"/>} title="Great, we've connected!" extra={<antd_1.Button onClick={() => this.onStart(account)} type="primary">
                Start
              </antd_1.Button>}/>)}
      </div>);
    }
}
exports.default = ConnectWithPlugin;
