import * as React from "react";
import { NavLink } from "react-router-dom";
import O3Button from "./components/O3button";
import NOSButton from "./components/NOSButton";
import { Button, Grid } from "@material-ui/core";

const Nav = (props: any) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs>
        <O3Button {...props} />
      </Grid>
      <Grid item xs>
        <NOSButton {...props} />
      </Grid>
      <Grid item xs>
        <Button fullWidth={true}>
          <NavLink to={`/imports`}>
            <span>Import</span>
          </NavLink>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Nav;
