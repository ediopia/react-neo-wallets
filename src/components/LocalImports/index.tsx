import * as React from "react";
import { Route, RouteComponentProps } from "react-router-dom";
import Nav from "./components/Nav";
import { localImportsRoutes } from "./routes";
import { Box } from "@material-ui/core";

const LocalImports = (props: {onConnected: any} & RouteComponentProps) => {
  const { path } = props.match;
  const { push } = props.history;
  const { onConnected } = props;
  return (
    <>
      <Nav redirect={push} path={path} />
      <Box m={2}>
        {localImportsRoutes.map((route: any) => {
          return <Route exact={route.exact} key={route.path} path={`${path}/${route.path}`} component={() => <route.component onConnected={onConnected} />} />;
        })}
      </Box>
    </>
  );
};

export default LocalImports;
