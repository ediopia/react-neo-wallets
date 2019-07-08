import * as React from "react";
import { IRoute } from "../../../../types/types";
import { Link } from "react-router-dom";
const AppMenuItem = (props: IRoute) => {
  return (
    <Link to={props.path}>
      {
        props.label
      }
    </Link>
  );
};


export default AppMenuItem;
