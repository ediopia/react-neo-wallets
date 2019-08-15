import React from "react";
import Neon from "@cityofzion/neon-js";
import { withFormik } from "formik";
import Form from "./Form";
import * as Yup from "yup";
import { ConnectedWallet } from "../../../../../models";
export interface Props {
  onConnected: (account: ConnectedWallet) => void;
}

export interface CreateWalletStates {
  password: string;
  account: any;
}

const ValidateSchema = Yup.object().shape({
  password: Yup.string().required("Required"),
});

const CreateWallet = withFormik<Props, CreateWalletStates>({
  // Transform outer props into form values
  mapPropsToValues: () => {
    return {
      password: "",
      account: null,
    };
  },
  validationSchema: ValidateSchema,
  handleSubmit: (
    values: CreateWalletStates,
    { props, setFieldValue, setSubmitting, setStatus }
  ) => {
    const account = Neon.create.account("");
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
})(Form);

export default CreateWallet;
