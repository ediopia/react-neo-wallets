import { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import { ConnectedWallet } from "../../../models";
import { AppProps } from "../../index";
interface MatchParams {
    plugin: string;
}
interface Props extends RouteComponentProps<MatchParams> {
}
declare class ConnectWithPlugin extends Component<AppProps & Props> {
    state: {
        account: any;
        isLoading: boolean;
        errorMsg: string;
    };
    componentDidMount(): void;
    onStart: (account: ConnectedWallet) => void;
    render(): JSX.Element;
}
export default ConnectWithPlugin;
//# sourceMappingURL=index.d.ts.map