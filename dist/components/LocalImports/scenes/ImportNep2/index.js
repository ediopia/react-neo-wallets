"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const neon_js_1 = __importDefault(require("@cityofzion/neon-js"));
const formik_1 = require("formik");
const core_1 = require("@material-ui/core");
const LoadingButton_1 = __importDefault(require("../../../LoadingButton"));
const PasswordInput_1 = __importDefault(require("../../../PasswordInput"));
// import PasswordInput from "../../../PasswordInput";
const InnerForm = (props) => {
    const { touched, errors, isSubmitting, values, setFieldValue } = props;
    return (react_1.default.createElement(formik_1.Form, null,
        react_1.default.createElement(core_1.FormControl, { fullWidth: true, margin: "dense" },
            react_1.default.createElement(core_1.TextField, { error: !!errors.encryptedKey, id: "encryptedKey", label: "Encrypted key", value: values.encryptedKey, onChange: e => setFieldValue("encryptedKey", e.target.value) })),
        react_1.default.createElement(core_1.FormControl, { fullWidth: true, margin: "dense" },
            react_1.default.createElement(core_1.InputLabel, { htmlFor: "adornment-password" }, "Password"),
            react_1.default.createElement(PasswordInput_1.default, { value: values.password, onChange: value => setFieldValue("password", value) })),
        react_1.default.createElement(core_1.Divider, null),
        react_1.default.createElement(core_1.FormControl, { margin: "dense" },
            react_1.default.createElement(LoadingButton_1.default, { variant: "contained", type: "submit", isLoading: isSubmitting }, "Submit"))));
};
const ImportNep2 = formik_1.withFormik({
    // Transform outer props into form values
    mapPropsToValues: (props) => {
        return {
            encryptedKey: props.encryptedKey
                ? props.encryptedKey
                : "",
            password: "",
        };
    },
    validate: (values) => {
        let errors = {};
        if (!values.encryptedKey) {
            errors.encryptedKey = "Required";
        }
        return errors;
    },
    handleSubmit: (values, { props }) => {
        const account = neon_js_1.default.create.account(values.encryptedKey);
        account
            .decrypt(values.password)
            .then((account) => {
            props.onConnected(null, {
                provider: "LOCAL",
                address: account._address,
                privateKey: account._privateKey,
                encryptedKey: account._encrypted,
            });
        })
            .catch((error) => {
            props.onConnected(error, null);
        });
    },
})(InnerForm);
exports.default = ImportNep2;
