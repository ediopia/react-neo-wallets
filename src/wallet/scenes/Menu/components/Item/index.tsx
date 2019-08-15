import React from "react";
import { Link } from "react-router-dom";
import { MenuRoute } from "../..";

const AppMenuItem = (props: MenuRoute) => {
  return <Link to={props.path}>{props.label}</Link>;
};

export default AppMenuItem;
