import React, { useState } from "react";
import { Input, Icon } from "antd";

interface IState {
  showPassword: boolean;
}
interface IProps {
  value: string;
  onChange: (value: string) => void;
}

const PasswordInput = (props: IProps) => {
  // const classes = useStyles();
  const [values, setValues] = useState<IState>({
    showPassword: false
  });
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  return (
    <Input
      value={props.value}
      onChange={e => props.onChange(e.target.value)}
      placeholder="Password"
      type={values.showPassword ? "text" : "password"}
      suffix={
        <Icon
          onClick={handleClickShowPassword}
          type={values.showPassword ? "eye" : "eye-invisible"}
          style={{ color: "rgba(0,0,0,.45)" }}
        />
      }
    />
  );
};

export default PasswordInput;
