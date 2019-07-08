import React from "react";
import { Form as FormikForm, FormikProps } from "formik";
import { AppProps, Nep2States } from "../../../../types/types";
import { Form, Alert, Select } from "antd";
const { Option } = Select;
import { Button } from "antd";
import _ from "underscore";
import PasswordInput from "../../../../components/PasswordInput";

export default (props: AppProps & FormikProps<Nep2States>) => {
  const {
    savedWallets,
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
      <Form.Item label="Saved encrypted keys">
        <Select
          defaultValue={values.encryptedKey}
          onChange={val => setFieldValue("encryptedKey", val)}
        >
          {savedWallets.map(item => {
            return (
              <Option key={item.encryptedKey} value={item.encryptedKey}>
                {item.encryptedKey}
              </Option>
            );
          })}
        </Select>
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
      {!_.isEmpty(status) && status.errorMsg ? (
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
