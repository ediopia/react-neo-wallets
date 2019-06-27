import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { localImportsRoutes } from "../../routes";
import { AppBar } from "@material-ui/core";

const ImportsNav: React.FC<{ path: string; redirect: (path: string) => void }> = ({ path, redirect }) => {
  const [value, setValue] = useState(0);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
    redirect(`${path}/${localImportsRoutes[newValue].path}`);
  }
  return (
    <AppBar position="static">
      <Tabs indicatorColor="primary" variant="scrollable" scrollButtons="auto" value={value} onChange={handleChange}>
        {localImportsRoutes.map((route: any) => {
          return <Tab key={route.label} label={route.label} />;
        })}
      </Tabs>
    </AppBar>
  );
};

export default ImportsNav;
