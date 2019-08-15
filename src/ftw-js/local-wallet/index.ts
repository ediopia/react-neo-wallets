import store from "store";
import Neon from "@cityofzion/neon-js";
import { ConnectedWallet, WalletInLocalStorage } from "../../models";
const operations = require("store/plugins/operations");
store.addPlugin(operations);

const getCurrentWallet = (): ConnectedWallet => {
  return store.get("CURRENT_WALLET");
};

const getLocalWalletList = (): WalletInLocalStorage[] => {
  return store.get("SAVED_WALLETS") ? store.get("SAVED_WALLETS") : [];
};

const getPrivateKey = async (encryptedKey: string, password: string) => {
  try{
    const account = await Neon.create.account(encryptedKey).decrypt(password);
    return account.privateKey
  }catch (e) {
    throw new Error(e.message);
  }
};

const setCurrentWallet = (wallet: ConnectedWallet) => {
  if (wallet.privateKey) {
    delete wallet.privateKey;
  }

  store.set("CURRENT_WALLET", wallet);

  const savedWallets = getLocalWalletList();
  // Add in savedWalletList in local storage
  let i = 0;
  savedWallets.forEach((item: WalletInLocalStorage) => {
    if (item.encryptedKey === wallet.encryptedKey) {
      i += 1;
    }
  });
  if (i === 0 && wallet.address && wallet.encryptedKey) {
    // @ts-ignore
    store.push("SAVED_WALLETS", wallet);
  }
};

const removeCurrentWallet = () => {
  store.remove("CURRENT_WALLET");
};

export const LocalWallet = {
  getCurrentWallet,
  setCurrentWallet,
  getPrivateKey,
  removeCurrentWallet,
  getLocalWalletList,
};
