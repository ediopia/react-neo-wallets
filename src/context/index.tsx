import React, { createContext, ReactNode, useContext, useReducer, Provider, Consumer } from "react";
import { walletReducer } from "./reducers";
import Actions  from "./actions";
import FTW from "../ftw-js";
import { States, ContextProps } from "./types";

interface WalletContextProps {
  state: States;
  dispatch: any
}

interface MapStateToProps {
  (state: States): any
}
interface MapDispatchToProps {
  (dispatch: States): any
}

const Context = createContext({} as WalletContextProps);

const ContextComponent = (props: ContextProps) => {

  const initialState: States = {
    connectedWallet: FTW.wallet.getCurrentWallet(),
  };

  const [state, dispatch] = useReducer(walletReducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};

function connect(mapStateToProps: MapStateToProps, mapDispatchToProps: MapDispatchToProps) {
  return function(Component: ReactNode) {
    return function() {
      const { state, dispatch } = useContext(Context);
      const stateToProps = mapStateToProps(state);
      const dispatchToProps = mapDispatchToProps(dispatch);
      // @ts-ignore
      const props = { ...stateToProps, ...dispatchToProps };
      // @ts-ignore
      return <Component {...props} />;
    };
  };
}

export {Context, Actions, connect}
export default ContextComponent;
