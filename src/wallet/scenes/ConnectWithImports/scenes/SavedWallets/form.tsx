import React from "react";
import { Form as FormikForm, FormikProps } from "formik";
import { Form, Alert, Select } from "antd";
const { Option } = Select;
import { Button } from "antd";
import PasswordInput from "../../../../components/PasswordInput";
import { Nep2States } from "../ImportNep2";
import { AppProps } from "../../../../index";

export default (props: AppProps & FormikProps<Nep2States>) => {
  const {
    savedWallets,
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
          onChange={(val: string) => setFieldValue("encryptedKey", val)}
        >
          {savedWallets && savedWallets.map(item => {
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
