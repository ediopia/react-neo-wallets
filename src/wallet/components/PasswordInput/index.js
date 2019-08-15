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
const antd_1 = require("antd");
const PasswordInput = (props) => {
    // const classes = useStyles();
    const [values, setValues] = react_1.useState({
        showPassword: false
    });
    const handleClickShowPassword = () => {
        setValues(Object.assign({}, values, { showPassword: !values.showPassword }));
    };
    return (<antd_1.Input value={props.value} onChange={e => props.onChange(e.target.value)} placeholder="Password" type={values.showPassword ? "text" : "password"} suffix={<antd_1.Icon onClick={handleClickShowPassword} type={values.showPassword ? "eye" : "eye-invisible"} style={{ color: "rgba(0,0,0,.45)" }}/>}/>);
};
exports.default = PasswordInput;
