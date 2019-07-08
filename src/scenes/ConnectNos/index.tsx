import React, { useState, useEffect } from "react";
import { onConnect } from "../../actions";
import { PageHeader, Result, Spin, Icon } from "antd";
import { AppProps } from "../../types/types";
import { RouteComponentProps } from "react-router";

const ConnectNos = (props: AppProps & RouteComponentProps) => {
  const [isLoading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    // Update the document title using the browser API
    onConnect("NOS", (error, account) => {
      setLoading(false);
      if (error) {
        setErrorMsg(error);
      } else {
      }
    });
  });
  return (
    <div>
      <PageHeader
        onBack={() => props.history.goBack()}
        title="Back"
      />
      {isLoading ? (
        <div>
          <Spin />
        </div>
      ) : errorMsg ? (
        <Result
          status={"warning"}
          title="Something went wrong."
          subTitle={errorMsg}
        />
      ) : (
        <Result
          status={"success"}
          icon={<Icon type="smile" theme="twoTone" />}
          title="Great, we've connected!"
        />
      )}
    </div>
  );
};

export default ConnectNos;
