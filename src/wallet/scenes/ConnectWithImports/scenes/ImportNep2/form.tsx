import React from "react";
import { Form as FormikForm, FormikProps } from "formik";
import { Input, Form, Alert } from "antd";
import { Button } from "antd";
import PasswordInput from "../../../../components/PasswordInput";
import { Nep2States } from "./index";

export default (props: FormikProps<Nep2States>) => {
  const {
    touched,
    errors,
    isSubmitting,
    values,
    setFieldValue,
    status,
    setStatus
  } = props;
  return (
    <FormikForm>
      <Form.Item
        label="Encrypted key"
        validateStatus={isSubmitting ? "validating" : ""}
        help={
          errors.encryptedKey && touched.encryptedKey ? errors.encryptedKey : ""
        }
      >
        <Input
          value={values.encryptedKey}
          placeholder="Encrypted key"
          id="encryptedKey"
          onChange={e => setFieldValue("encryptedKey", e.target.value)}
        />
      </Form.Item>
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
      {status && status.errorMsg ? (
        <Form.Item>
          <Alert
            message={status.errorMsg}
            type="error"
            showIcon
            closable
            onClose={() => setStatus(null)}
          />
        </Form.Item>
      ) : null}
      <Button htmlType="submit" type="primary" loading={isSubmitting}>
        Open
      </Button>
    </FormikForm>
  );
};
