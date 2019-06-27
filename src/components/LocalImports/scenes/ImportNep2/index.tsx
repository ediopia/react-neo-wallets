import React from "react";
import Neon from "@cityofzion/neon-js";
import Yup from "yup";
import { withFormik, Form, FormikProps, FormikErrors } from "formik";
import { Button, FormControl, TextField } from "@material-ui/core";
import LoadingButton from "../../../LoadingButton";

import { ConnectProps, Nep2FormStates } from "../../../../types/types";

const InnerForm = (props: ConnectProps & FormikProps<Nep2FormStates>) => {
  const { touched, errors, isSubmitting, values, setFieldValue } = props;
  return (
    <Form>
      <FormControl fullWidth={true} margin="dense">
        <TextField
          error={!!errors.encryptedKey}
          id="encryptedKey"
          label="Encrypted key"
          value={values.encryptedKey}
          onChange={e => setFieldValue("encryptedKey", e.target.value)}
        />
      </FormControl>
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
};

type IProps = {
  encryptedKey?: string;
} & ConnectProps

const ImportNep2 = withFormik<IProps, Nep2FormStates>({
  // Transform outer props into form values
  mapPropsToValues: (props: any) => {
    return {
      encryptedKey: props.encryptedKey
        ? props.encryptedKey
        : "",
      password: "",
    };
  },

  validate: (values: Nep2FormStates) => {
    let errors: FormikErrors<any> = {};
    if (!values.encryptedKey) {
      errors.encryptedKey = "Required";
    }
    return errors;
  },
  handleSubmit: (values: Nep2FormStates, { props }: any) => {
    const account = Neon.create.account(values.encryptedKey);
    account
      .decrypt(values.password)
      .then((account: any) => {
        props.onConnected(null, {
          provider: "LOCAL",
          address: account._address,
          privateKey: account._privateKey,
          encryptedKey: account._encrypted,
        });
      })
      .catch((error: any) => {
        props.onConnected(error, null);
      });
  },
})(InnerForm);

export default ImportNep2;
