"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const neon_js_1 = __importDefault(require("@cityofzion/neon-js"));
const formik_1 = require("formik");
const form_1 = __importDefault(require("./form"));
const Yup = __importStar(require("yup"));
const ValidateSchema = Yup.object().shape({
    password: Yup.string()
        .required('Required'),
});
const ImportNep2 = formik_1.withFormik({
    // Transform outer props into form values
    mapPropsToValues: (props) => {
        return {
            encryptedKey: props.savedWallets[0].encryptedKey,
            password: ""
        };
    },
    validationSchema: ValidateSchema,
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
