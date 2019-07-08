/* eslint-disable import/first */
import React, { useState } from "react";
import ReactNeoWallets from "react-neo-wallets";
import { Button, Modal, Typography } from "antd";
const { Title } = Typography;
import "./App.css";
import "antd/dist/antd.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [result, setResult] = useState(null);
  return (
    <div className="App">
      <Typography>
        <Title>React Neo Wallets</Title>
      </Typography>
      {result ? (
        <pre style={{ maxWidth: "300px", fontSize: "12px" }}>
          {JSON.stringify(result, null, 1)}
        </pre>
      ) : null}

      <Button onClick={() => setShowModal(true)} type="primary">
        Open wallet
      </Button>
      {showModal ? (
        <WalletModal
          handleResult={wallet => {
            setShowModal(false);
            setResult(wallet);
          }}
          onClose={() => setShowModal(false)}
        />
      ) : null}
    </div>
  );
}

const walletsInLocalStorage = [
  {
    encryptedKey: "6PYRj8SFUkDXm8vBunXkvVGAAan6HF3iDfKT4wcQMkpGkDHsVG8cbD9eSi",
    address: "AVKEWZxPog7j5gqfMoLhgox9HK44tWUG2J"
  },
  {
    encryptedKey: "6PYPUoZGMsGjWuqxekVcXrpzMdtks7VTSUZDoEpHLitjB2AnpWeLbpk2Dp",
    address: "AeRhK6NDmGiNTz8yAAJe3o4ecaqztFL12B"
  }
];

const WalletModal = ({ onClose, handleResult }) => {
  return (
    <Modal
      title="NEO wallets"
      footer={null}
      visible={true}
      onCancel={onClose}
      cancelText="Close"
    >
      <ReactNeoWallets
        savedWallets={walletsInLocalStorage}
        onConnected={wallet => handleResult(wallet)}
      />
    </Modal>
  );
};

export default App;
