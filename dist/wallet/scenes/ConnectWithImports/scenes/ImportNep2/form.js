"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const formik_1 = require("formik");
const antd_1 = require("antd");
const antd_2 = require("antd");
const PasswordInput_1 = __importDefault(require("../../../../components/PasswordInput"));
exports.default = (props) => {
    const { touched, errors, isSubmitting, values, setFieldValue, status, setStatus } = props;
    return (react_1.default.createElement(formik_1.Form, null,
        react_1.default.createElement(antd_1.Form.Item, { label: "Encrypted key", validateStatus: isSubmitting ? "validating" : "", help: errors.encryptedKey && touched.encryptedKey ? errors.encryptedKey : "" },
            react_1.default.createElement(antd_1.Input, { value: values.encryptedKey, placeholder: "Encrypted key", id: "encryptedKey", onChange: e => setFieldValue("encryptedKey", e.target.value) })),
        react_1.default.createElement(antd_1.Form.Item, { label: "Password", validateStatus: isSubmitting ? "validating" : "", help: errors.password ? errors.password : "" },
            react_1.default.createElement(PasswordInput_1.default, { onChange: val => setFieldValue("password", val), value: values.password })),
        status && status.errorMsg ? (react_1.default.createElement(antd_1.Form.Item, null,
            react_1.default.createElement(antd_1.Alert, { message: status.errorMsg, type: "error", showIcon: true, closable: true, onClose: () => setStatus(null) }))) : null,
        react_1.default.createElement(antd_2.Button, { htmlType: "submit", type: "primary", loading: isSubmitting }, "Open")));
};
