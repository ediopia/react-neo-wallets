"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
const { Paragraph } = antd_1.Typography;
const BackupKeys = (props) => {
    const { account, onConnected } = props;
    return (<>
      <Paragraph>
        <antd_1.Alert message="Informational Notes" description="You must save and backup the keys. If you lose them, you lose access to your assets." type="info" showIcon/>
      </Paragraph>
      <Paragraph>
        <ul>
          <li>Password: {account.password}</li>
          <li>Wallet address: {account.address}</li>
          <li>Encrypted key: {account.encryptedKey}</li>
          <li>Private key: {account.privateKey}</li>
        </ul>
      </Paragraph>
      <antd_1.Divider />
      <antd_1.Button onClick={() => onConnected({
        provider: "LOCAL",
        address: account.address,
        encryptedKey: account.encryptedKey,
        privateKey: account.privateKey
    })} type="primary">
        Open
      </antd_1.Button>
    </>);
};
exports.default = BackupKeys;
