import React from "react";
import { ConnectProps } from "src/types/types";
import { createStyles, makeStyles, Paper, Button, Typography, Theme } from "@material-ui/core";

interface IProps extends ConnectProps {
  account: any;
  password: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2),
      margin: theme.spacing(0, 0, 2, 0),
    },
  }),
);

const BackupKeys = (props: IProps & ConnectProps) => {
  const classes = useStyles();

  const { password, account, onConnected } = props;
  let { _address, _encrypted, _privateKey } = account;
  return (
    <>
      <Paper className={classes.root}>
        <Typography component="ul">
          <li>You must save and backup the keys.</li>
          <li>If you lose them, you lose access to your assets.</li>
        </Typography>
      </Paper>
      <Paper className={classes.root}>
        <Typography component="p">
          <strong>Password</strong>
          :
          <br />
          <p>{password}</p>
          <strong>Wallet address</strong>
          :
          <br />
          <p>{_address}</p>
          <strong>Encrypted key</strong>
          :
          <br />
          <p>{_encrypted}</p>
          <strong>Private key</strong>
          :
          <br />
          <p>{_privateKey}</p>
        </Typography>
      </Paper>
      <Button
        onClick={() => onConnected(null, { provider: "LOCAL", address: _address, encryptedKey: _encrypted })}
        variant="contained"
        color="primary"
      >
        Open
      </Button>
    </>
  );
};

export default BackupKeys;
