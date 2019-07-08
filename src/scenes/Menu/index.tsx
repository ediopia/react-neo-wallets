import * as React from "react";
import { IRoute } from "../../types/types";
import { List } from "antd";
import { routes } from "../../routes";
import AppMenuItem from "./components/Item";
const AppMenu = () => {
  return (
    <div>
      <List
        size="large"
        bordered
        dataSource={routes}
        renderItem={(item: IRoute) => {
          if (!item.exact) {
            return (
              <List.Item>
                <AppMenuItem {...item} />
              </List.Item>
            );
          } else {
            return <div />;
          }
        }}
      />
    </div>
  );
};

export default AppMenu;
