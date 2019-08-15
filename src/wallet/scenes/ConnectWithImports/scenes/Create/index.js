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
const Form_1 = __importDefault(require("./Form"));
const Yup = __importStar(require("yup"));
const ValidateSchema = Yup.object().shape({
    password: Yup.string().required("Required"),
});
const CreateWallet = formik_1.withFormik({
    // Transform outer props into form values
    mapPropsToValues: () => {
        return {
            password: "",
            account: null,
        };
    },
    validationSchema: ValidateSchema,
    handleSubmit: (values, { props, setFieldValue, setSubmitting, setStatus }) => {
        const account = neon_js_1.default.create.account("");
        account
            .encrypt(values.password)
            .then(account => {
            setSubmitting(false);
            setFieldValue("account", {
                address: account.address,
                encryptedKey: account.encrypted,
                privateKey: account.privateKey,
                password: values.password,
            });
        })
            .catch(error => {
            setSubmitting(false);
            setStatus({
                errorMsg: error.message,
            });
        });
    },
})(Form_1.default);
exports.default = CreateWallet;
