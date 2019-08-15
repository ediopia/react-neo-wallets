import React, { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Button, Icon, PageHeader, Result, Spin } from "antd";
import { Box } from "../../styles";
import { ConnectedWallet } from "../../../models";
import { AppProps } from "../../index";
import FTW from "../../../ftw-js";

interface MatchParams {
  plugin: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

class ConnectWithPlugin extends Component<AppProps & Props> {
  state = {
    // @ts-ignore
    account: undefined,
    isLoading: true,
    errorMsg: "",
  };

  componentDidMount(): void {
    let { match } = this.props;
    const { params } = match;
    const provider = params.plugin;
    FTW.providers[provider]
      .getAccount()
      .then(account => {
        this.setState({
          account,
          isLoading: false,
        });
      })
      .catch(e => {
        this.setState({
          errorMsg: e.message,
          isLoading: false,
        });
      });
  }

  onStart = (account: ConnectedWallet) => {
    this.props.onConnected(account);
  };

  render() {
    const { account, isLoading, errorMsg } = this.state;

    return (
      <div>
        {!account ? (
          <PageHeader
            style={{ display: "flex", paddingLeft: 0, paddingTop: 0 }}
            onBack={() => this.props.history.goBack()}
            title="Back"
          />
        ) : (
          false
        )}

        {isLoading ? (
          <Box>
            <Spin />
          </Box>
        ) : errorMsg ? (
          <Result status={"warning"} subTitle={errorMsg} />
        ) : (
          <Result
            status={"success"}
            icon={<Icon type="smile" theme="twoTone" />}
            title="Great, we've connected!"
            extra={
              <Button
                onClick={() => {
                  if (account) {
                    // @ts-ignore
                    this.onStart(account);
                  }
                }}
                type="primary"
              >
                Start
              </Button>
            }
          />
        )}
      </div>
    );
  }
}

export default ConnectWithPlugin;
