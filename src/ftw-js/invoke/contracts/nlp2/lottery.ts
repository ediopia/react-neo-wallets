import { ConnectedWallet, InvokeScript } from "../../../../models";
import { NLP2_CONTRACT_HASH } from "../index";

export const NLP2_LOTTERY_METHODS = {
  draw: "drawLottery",
  verify: "verifyLotteryTicket",
};

const draw = (wallet: ConnectedWallet): InvokeScript => {
  return {
    transfer: {
      from: wallet.address,
      to: "",
      amount: 0,
      symbol: "",
    },
    operation: NLP2_LOTTERY_METHODS.draw,
    scriptHash: NLP2_CONTRACT_HASH,
    args: [
      {
        type: "Address",
        value: wallet.address,
      },
    ],
  };
};

const verify = (wallet: ConnectedWallet): InvokeScript => {
  return {
    transfer: {
      from: wallet.address,
      to: "",
      amount: 0,
      symbol: "",
    },
    operation: NLP2_LOTTERY_METHODS.verify,
    scriptHash: NLP2_CONTRACT_HASH,
    args: [
      {
        type: "Address",
        value: wallet.address,
      },
    ],
  };
};

export default {
  draw,
  verify,
};
