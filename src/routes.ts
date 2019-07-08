import ConnectO3 from "./scenes/ConnectO3";
import ConnectNos from "./scenes/ConnectNos";
import LocalImports from "./scenes/LocalImports";
import AppMenu from "./scenes/Menu";

export const routes = [
  {
    exact: true,
    label: "Connect with O3",
    path: "/",
    component: AppMenu
  },
  {
    label: "Connect with O3",
    path: "/o3",
    component: ConnectO3
  },
  {
    label: "Connect with NOS",
    path: "/nos",
    component: ConnectNos
  },
  {
    label: "Import using keys",
    path: "/imports",
    component: LocalImports
  },
];
