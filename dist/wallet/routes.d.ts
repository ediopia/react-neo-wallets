/// <reference types="react" />
import ConnectPlugin from './scenes/ConnectPlugin';
export declare const routes: ({
    exact: boolean;
    path: string;
    component: () => JSX.Element;
} | {
    path: string;
    component: typeof ConnectPlugin;
    exact?: undefined;
} | {
    path: string;
    component: (props: import(".").AppProps & import("react-router").RouteComponentProps<{}, import("react-router").StaticContext, any>) => JSX.Element;
    exact?: undefined;
})[];
export declare const menuRoutes: {
    label: string;
    path: string;
}[];
//# sourceMappingURL=routes.d.ts.map