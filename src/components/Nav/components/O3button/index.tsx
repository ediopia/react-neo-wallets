import * as React from "react";
import { ConnectProps } from "../../../../types/types";
import { onConnect } from "../../../../actions";
import { Button } from "@material-ui/core";
const O3Button = (props: ConnectProps) => {
  return (
    <Button fullWidth={true} onClick={() => onConnect("O3", props.onConnected)}>
      <span>Connect with O3</span>
    </Button>
  );
};

export default O3Button;
