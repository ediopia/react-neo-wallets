import * as React from "react";
import { AppRoute } from "../../../../types/types";
import { Link } from "react-router-dom";
const AppMenuItem = (props: AppRoute) => {
  return (
    <Link to={props.path}>
      {
        props.label
      }
    </Link>
  );
};


export default AppMenuItem;
