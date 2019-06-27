import React, { useState } from "react";
import ImportNep2 from "../ImportNep2";
import { ConnectProps } from "../../../../types/types";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      display: "none",
    },
  }),
);

const ImportFile = (props: ConnectProps) => {
  const { onConnected } = props;
  const classes = useStyles();
  const [encryptedKey, setEncryptedKey] = useState("");
  const handleImportKeyfile = (e: any) => {
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
        onConnected("We can not support the file.", undefined);
      }
    };
    reader.readAsText(e.target.files[0]);
  };
  return (
    <>
      {encryptedKey ? (
        <ImportNep2 onConnected={onConnected} encryptedKey={encryptedKey} />
      ) : (
        <>
          <input
            className={classes.input}
            onChange={handleImportKeyfile}
            accept="application/json/*"
            id="contained-button-file"
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" component="span">
              Open wallet file
            </Button>
          </label>
        </>
      )}
    </>
  );
};

export default ImportFile;
