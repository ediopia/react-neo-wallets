import React, { useState } from "react";
import ImportNep2 from "../ImportNep2";
import { AppProps } from "../../../../types/types";
import { Icon, Upload, Result } from "antd";
const { Dragger } = Upload;

const ImportFile = ({ onConnected }: AppProps) => {
  const [encryptedKey, setEncryptedKey] = useState("");
  const [hasError, setError] = useState(false);
  const handleImportKeyfile = file => {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      try {
        const jsonObj = JSON.parse(event.target.result);
        if (jsonObj.key) {
          setEncryptedKey(jsonObj.key);
        }
        // TODO::Need to make better importing system
        if (jsonObj.accounts && jsonObj.accounts.length > 0) {
          setEncryptedKey(jsonObj.accounts[0].key);
        }
      } catch (e) {
        setError(true);
      }
    };
    reader.readAsText(file);
    return false;
  };
  return (
    <>
      {encryptedKey ? (
        <ImportNep2 onConnected={onConnected} encryptedKey={encryptedKey} />
      ) : (
        <>
          <Dragger accept=".json,application/json" beforeUpload={handleImportKeyfile}>
            {!hasError ? (
              <>
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
              </>
            ) : (
              <Result
                status="warning"
                title="There are some problems with your operation."
              />
            )}
          </Dragger>
        </>
      )}
    </>
  );
};

export default ImportFile;
