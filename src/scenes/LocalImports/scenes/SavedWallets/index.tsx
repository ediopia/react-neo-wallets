import React from "react";
import Neon from "@cityofzion/neon-js";
import { withFormik } from "formik";
import { AppProps, Nep2States } from "../../../../types/types";
import Form from "./form";
import * as Yup from "yup";

const ValidateSchema = Yup.object().shape({
  password: Yup.string()
    .required('Required'),
});

const ImportNep2 = withFormik<AppProps, Nep2States>({
  // Transform outer props into form values
  mapPropsToValues: (props: any) => {
    return {
      encryptedKey: props.savedWallets[0].encryptedKey,
      password: ""
    };
  },
  validationSchema: ValidateSchema,
  handleSubmit: (values: Nep2States, { props, setStatus, setSubmitting }) => {
    const account = Neon.create.account(values.encryptedKey);
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
})(Form);

export default ImportNep2;
