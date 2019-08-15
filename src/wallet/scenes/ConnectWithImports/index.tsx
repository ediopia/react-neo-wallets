import React, { ReactNode, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { localImportsRoutes } from "./routes";
import { Tabs } from "antd";
import SavedWallets from "./scenes/SavedWallets";
import { AppProps } from "../../index";

interface Route {
  label: string
  component: any
}

const ConnectWithImports = (props: AppProps & RouteComponentProps) => {
  const [currentStep, setStep] = useState(
    props.savedWallets && props.savedWallets.length > 0 ? "0" : "1"
  );
  return (
    <div id="Local-imports" style={{minHeight: "300px"}}>
      <Tabs defaultActiveKey={currentStep} onChange={(activeKey => setStep(activeKey))}>
        {props.savedWallets && props.savedWallets.length > 0 ? (
          <Tabs.TabPane key="0" tab="Saved wallets">
            <SavedWallets {...props} />
          </Tabs.TabPane>
        ) : null}
        {localImportsRoutes.map((route: Route, index) => {
          const key = (index + 1).toString();
          return (
            <Tabs.TabPane key={key} tab={route.label}>
              <route.component {...props} />
            </Tabs.TabPane>
          );
        })}
      </Tabs>
    </div>
  );
};

export default ConnectWithImports;
