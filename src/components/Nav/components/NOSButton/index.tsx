import React from "react";
import { ConnectProps } from "../../../../types/types";
import { onConnect } from "../../../../actions";
import { Button } from "@material-ui/core";

const NOSButton = (props: ConnectProps) => {
  return (
    <Button fullWidth={true}  onClick={() => onConnect("NOS", props.onConnected)}>
      <span>Connect with NOS</span>
    </Button>
  );
};

export default NOSButton;
