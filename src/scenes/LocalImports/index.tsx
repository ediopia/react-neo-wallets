import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { localImportsRoutes } from "./routes";
import { Tabs } from "antd";
import { AppProps, ImportRoute } from "../../types/types";
import SavedWallets from "./scenes/SavedWallets";

const LocalImports = (props: AppProps & RouteComponentProps) => {
  const [currentStep, setStep] = useState(
    props.savedWallets && props.savedWallets.length > 0 ? "0" : "1"
  );
  const handleNext = activeKey => {
    setStep(activeKey);
  };
  return (
    <div id="Local-imports">
      <Tabs defaultActiveKey={currentStep} onChange={handleNext}>
        {props.savedWallets && props.savedWallets.length > 0 ? (
          <Tabs.TabPane key="0" tab="Saved wallets">
            <SavedWallets {...props} />
          </Tabs.TabPane>
        ) : null}
        {localImportsRoutes.map((route: ImportRoute, index) => {
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

export default LocalImports;
