import React from "react";
import { List } from "antd";
import { menuRoutes } from "../../routes";
import AppMenuItem from "./components/Item";

export interface MenuRoute {
  path: string;
  label: string;
}

const AppMenu = () => {
  return (
    <div>
      <List
        size="large"
        bordered
        dataSource={menuRoutes}
        renderItem={(item: MenuRoute) => {
          return (
            <List.Item>
              <AppMenuItem {...item} />
            </List.Item>
          );
        }}
      />
    </div>
  );
};

export default AppMenu;
