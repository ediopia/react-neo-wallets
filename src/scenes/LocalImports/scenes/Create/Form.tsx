import React from "react";
import { Form as FormikForm, FormikProps } from "formik";
import { AppProps, CreateWalletStates } from "../../../../types/types";
import BackupKeys from "./Backup";
import PasswordInput from "../../../../components/PasswordInput";
import { Button, Form } from "antd";

export default (props: AppProps & FormikProps<CreateWalletStates>) => {
  const {
    onConnected,
    touched,
    errors,
    isSubmitting,
    values,
    setFieldValue
  } = props;
  const { account } = values;
  if (account) {
    return (
      <BackupKeys
        onConnected={onConnected}
        account={values.account}
      />
    );
  } else {
    return (
      <FormikForm>
        <Form.Item
          label="Password"
          validateStatus={isSubmitting ? "validating" : ""}
          help={errors.password ? errors.password : ""}
        >
          <PasswordInput
            onChange={val => setFieldValue("password", val)}
            value={values.password}
          />
        </Form.Item>
        <Button htmlType="submit" type="primary" loading={isSubmitting}>
          Open
        </Button>
      </FormikForm>
    );
  }
};
