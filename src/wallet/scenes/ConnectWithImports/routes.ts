import ImportNep2 from "./scenes/ImportNep2";
import ImportFile from "./scenes/ImportFile";
import CreateWallet from "./scenes/Create";
// import ImportPrivatekey from "./scenes/ImportPrivatekey";

export const localImportsRoutes = [
  {
    label: "Passphrase",
    component: ImportNep2
  },
  {
    label: "Wallet file",
    component: ImportFile
  },
  {
    label: "New wallet",
    component: CreateWallet
  },
];
