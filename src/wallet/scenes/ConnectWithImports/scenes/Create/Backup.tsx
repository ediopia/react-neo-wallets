import React from "react";
import { Alert, Button, Divider, Typography } from "antd";
import { AppProps } from "../../../..";
import { ConnectedWallet } from "../../../../../models";
const { Paragraph } = Typography;

interface IProps {
  account: {
    password: string;
    address: string;
    encryptedKey: string;
    privateKey: string;
  };
  onConnected: (account: ConnectedWallet) => void
}

const BackupKeys = (props: IProps) => {
  const { account, onConnected } = props;
  return (
    <>
      <Paragraph>
        <Alert
          message="Informational Notes"
          description="You must save and backup the keys. If you lose them, you lose access to your assets."
          type="info"
          showIcon
        />
      </Paragraph>
      <Paragraph>
        <ul>
          <li>Password: {account.password}</li>
          <li>Wallet address: {account.address}</li>
          <li>Encrypted key: {account.encryptedKey}</li>
          <li>Private key: {account.privateKey}</li>
        </ul>
      </Paragraph>
      <Divider />
      <Button
        onClick={() =>
          onConnected({
            provider: "LOCAL",
            address: account.address,
            encryptedKey: account.encryptedKey,
            privateKey: account.privateKey
          })
        }
        type="primary"
      >
        Open
      </Button>
    </>
  );
};

export default BackupKeys;
