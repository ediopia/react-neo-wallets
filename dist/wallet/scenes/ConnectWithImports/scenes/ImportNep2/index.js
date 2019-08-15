"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const neon_js_1 = __importDefault(require("@cityofzion/neon-js"));
const formik_1 = require("formik");
const form_1 = __importDefault(require("./form"));
const ImportNep2 = formik_1.withFormik({
    // Transform outer props into form values
    mapPropsToValues: (props) => {
        return {
            encryptedKey: props.encryptedKey ? props.encryptedKey : "",
            password: ""
        };
    },
    validate: (values) => {
        let errors = {};
        if (!values.encryptedKey) {
            errors.encryptedKey = "Required";
        }
        if (!neon_js_1.default.is.encryptedKey(values.encryptedKey)) {
            errors.encryptedKey = "It is not valid encrypted key format";
        }
        return errors;
    },
    handleSubmit: (values, { props, setStatus, setSubmitting }) => {
        const account = neon_js_1.default.create.account(values.encryptedKey);
        account
            .decrypt(values.password)
            .then((account) => {
            setSubmitting(false);
            props.onConnected({
                provider: "LOCAL",
                address: account.address,
                privateKey: account.privateKey,
                encryptedKey: account.encrypted
            });
        })
            .catch(error => {
            setSubmitting(false);
            setStatus({
                errorMsg: error.message
            });
        });
    }
})(form_1.default);
exports.default = ImportNep2;
