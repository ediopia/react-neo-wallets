import React from "react";
import Actions from "./actions";
import { States, ContextProps } from "./types";
interface WalletContextProps {
    state: States;
    dispatch: any;
}
interface MapStateToProps {
    (state: States): any;
}
interface MapDispatchToProps {
    (dispatch: States): any;
}
declare const Context: React.Context<WalletContextProps>;
declare const ContextComponent: (props: ContextProps) => JSX.Element;
declare function connect(mapStateToProps: MapStateToProps, mapDispatchToProps: MapDispatchToProps): (Component: React.ReactNode) => () => JSX.Element;
export { Context, Actions, connect };
export default ContextComponent;
//# sourceMappingURL=index.d.ts.map