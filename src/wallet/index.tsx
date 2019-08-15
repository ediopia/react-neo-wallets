import React from "react";
import { MemoryRouter, Route, RouteComponentProps } from "react-router-dom";
import "antd/dist/antd.css";
import { routes } from "./routes";
import { ConnectedWallet, WalletInLocalStorage } from "../models";


export interface IRoute {
  path: string;
  component: any;
  exact?: boolean;
}
export interface AppProps {
  savedWallets?: WalletInLocalStorage[];
  onConnected: (account: ConnectedWallet) => void;
}

const ReactNeoWallet = (props: AppProps) => {
  return (
    <MemoryRouter initialEntries={[`/`]}>
      <div>
        {routes.map((route: IRoute) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={(r: RouteComponentProps) => (
                <route.component {...props} {...r} />
              )}
            />
          );
        })}
      </div>
    </MemoryRouter>
  );
};

export default ReactNeoWallet;
