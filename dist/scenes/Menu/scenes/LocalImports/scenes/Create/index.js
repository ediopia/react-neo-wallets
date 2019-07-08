"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const neon_js_1 = __importDefault(require("@cityofzion/neon-js"));
const formik_1 = require("formik");
const core_1 = require("@material-ui/core");
const LoadingButton_1 = __importDefault(require("../../../../../../components/LoadingButton"));
const Backup_1 = __importDefault(require("./Backup"));
const InnerForm = (props) => {
    const { onConnected, touched, errors, isSubmitting, values, setFieldValue } = props;
    if (values.account) {
        return react_1.default.createElement(Backup_1.default, { password: values.password, onConnected: onConnected, account: values.account });
    }
    else {
        return (react_1.default.createElement(formik_1.Form, null,
            react_1.default.createElement(core_1.FormControl, { fullWidth: true, margin: "dense" },
                react_1.default.createElement(core_1.TextField, { error: !!errors.password, type: "password", id: "password", label: "Password", value: values.password, onChange: e => setFieldValue("password", e.target.value) })),
            react_1.default.createElement(core_1.FormControl, { margin: "dense" },
                react_1.default.createElement(LoadingButton_1.default, { variant: "contained", type: "submit", isLoading: isSubmitting }, "Submit"))));
    }
};
const CreateWallet = formik_1.withFormik({
    // Transform outer props into form values
    mapPropsToValues: () => {
        return {
            password: "",
            account: null,
        };
    },
    validate: (values) => {
        let errors = {};
        if (!values.password) {
            errors.password = "Required";
        }
        return errors;
    },
    handleSubmit: (values, { props, setFieldValue }) => {
        const account = neon_js_1.default.create.account("");
        account
            .encrypt(values.password)
            .then(account => {
            setFieldValue("account", account);
        })
            .catch(e => {
            props.onConnected(e.message, undefined);
        });
    },
})(InnerForm);
exports.default = CreateWallet;
