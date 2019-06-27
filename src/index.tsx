import React from "react";
import { MemoryRouter, Route, RouteComponentProps } from "react-router-dom";
import Nav from "./components/Nav";
import LocalImports from "./components/LocalImports";

interface ReactNeoWalletProps {
  onConnected: () => void;
}

const ReactNeoWallet = (props: ReactNeoWalletProps) => {
  const { onConnected } = props;
  return (
    <div>
      <MemoryRouter initialEntries={[`/`]}>
        <div>
          <Route exact path={`/`} component={() => <Nav onConnected={props.onConnected} />} />
          <Route
            path={`/imports`}
            component={(props: RouteComponentProps) => <LocalImports {...props} onConnected={onConnected} />}
          />
        </div>
      </MemoryRouter>
    </div>
  );
};

export default ReactNeoWallet;
