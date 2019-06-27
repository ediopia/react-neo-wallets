import React from "react";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core";

const styles = {
  root: {
    marginLeft: "5px",
  },
};

const SpinnerAdornment = withStyles(styles)((props: any) => {
  return <CircularProgress className={props.classes.root} size={20} />
});

const LoadingButton = (props: any) => {
  const { children, isLoading, ...rest } = props;
  return (
    <Button disabled={isLoading} {...rest}>
      {children}
      {isLoading && <SpinnerAdornment {...rest} />}
    </Button>
  );
};

export default LoadingButton
