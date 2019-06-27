import ImportNep2 from "./scenes/ImportNep2";
import ImportFile from "./scenes/ImportFile";
import CreateWallet from "./scenes/Create";
// import ImportPrivatekey from "./scenes/ImportPrivatekey";

export const localImportsRoutes = [
  {
    exact: true,
    label: "Passphrase",
    path: "",
    component: ImportNep2
  },
  {
    label: "Wallet file",
    path: "wallet-file",
    component: ImportFile
  },
  {
    label: "New wallet",
    path: "create",
    component: CreateWallet
  },
];
