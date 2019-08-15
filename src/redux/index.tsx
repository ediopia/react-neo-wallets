import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import configureStore from "./store";

interface IProps {
  children: ReactNode;
}

export {configureStore}
export const ReduxProvider = (props: IProps) => {
  return (
    <Provider store={configureStore}>
      {props.children}
    </Provider>
  );
};
