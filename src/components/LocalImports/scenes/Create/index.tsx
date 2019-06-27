import React from "react";
import Neon from "@cityofzion/neon-js";
import Yup from "yup";
import { withFormik, Form, FormikProps, FormikErrors } from "formik";
import { FormControl, TextField } from "@material-ui/core";
import LoadingButton from "../../../LoadingButton";

import { ConnectProps, CreateWalletStates } from "../../../../types/types";
import BackupKeys from "./Backup";

const InnerForm = (props: ConnectProps & FormikProps<CreateWalletStates>) => {
  const { onConnected, touched, errors, isSubmitting, values, setFieldValue } = props;
  if (values.account) {
    return <BackupKeys password={values.password} onConnected={onConnected} account={values.account} />;
  } else {
    return (
      <Form>
        <FormControl fullWidth={true} margin="dense">
          <TextField
            error={!!errors.password}
            type="password"
            id="password"
            label="Password"
            value={values.password}
            onChange={e => setFieldValue("password", e.target.value)}
          />
        </FormControl>
        <FormControl margin="dense">
          <LoadingButton variant="contained" type="submit" isLoading={isSubmitting}>
            Submit
          </LoadingButton>
        </FormControl>
      </Form>
    );
  }
};

const CreateWallet = withFormik<ConnectProps, CreateWalletStates>({
  // Transform outer props into form values
  mapPropsToValues: () => {
    return {
      password: "",
      account: null,
    };
  },

  validate: (values: CreateWalletStates) => {
    let errors: FormikErrors<any> = {};
    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  },
  handleSubmit: (values: CreateWalletStates, { props, setFieldValue }: any) => {
    const account = Neon.create.account("");
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

export default CreateWallet;
