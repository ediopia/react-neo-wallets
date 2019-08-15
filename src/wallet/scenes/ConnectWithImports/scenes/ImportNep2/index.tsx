import React from "react";
import Neon from "@cityofzion/neon-js";
import { withFormik, FormikErrors } from "formik";
import Form from "./form";
import { ConnectedWallet } from "../../../../../models";

export interface Nep2States {
  encryptedKey: string;
  password: string;
}

type IProps = {
  encryptedKey?: string;
  onConnected: (account: ConnectedWallet) => void
};

const ImportNep2 = withFormik<IProps, Nep2States>({
  // Transform outer props into form values
  mapPropsToValues: (props: any) => {
    return {
      encryptedKey: props.encryptedKey ? props.encryptedKey : "",
      password: ""
    };
  },
  validate: (values: Nep2States) => {
    let errors: FormikErrors<any> = {};
    if (!values.encryptedKey) {
      errors.encryptedKey = "Required";
    }
    if (!Neon.is.encryptedKey(values.encryptedKey)) {
      errors.encryptedKey = "It is not valid encrypted key format";
    }
    return errors;
  },
  handleSubmit: (values: Nep2States, { props, setStatus, setSubmitting }) => {
    const account = Neon.create.account(values.encryptedKey);
    account
      .decrypt(values.password)
      .then((account: any) => {
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
})(Form);

export default ImportNep2;
