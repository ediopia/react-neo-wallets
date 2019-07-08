"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const formik_1 = require("formik");
const Backup_1 = __importDefault(require("./Backup"));
const PasswordInput_1 = __importDefault(require("../../../../components/PasswordInput"));
const antd_1 = require("antd");
exports.default = (props) => {
    const { onConnected, touched, errors, isSubmitting, values, setFieldValue } = props;
    const { account } = values;
    if (account) {
        return (react_1.default.createElement(Backup_1.default, { password: values.password, onConnected: onConnected, account: values.account }));
    }
    else {
        return (react_1.default.createElement(formik_1.Form, null,
            react_1.default.createElement(antd_1.Form.Item, { label: "Password", validateStatus: isSubmitting ? "validating" : "", help: errors.password ? errors.password : "" },
                react_1.default.createElement(PasswordInput_1.default, { onChange: val => setFieldValue("password", val), value: values.password })),
            react_1.default.createElement(antd_1.Button, { htmlType: "submit", type: "primary", loading: isSubmitting }, "Submit")));
    }
};
