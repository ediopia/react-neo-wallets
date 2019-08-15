import { u, wallet as neonWallet } from "@cityofzion/neon-js";
import { ConnectedWallet, InvokeScript } from "../../../../models";
import { NLP2_CONTRACT_HASH } from "../index";

export const NLP2_RAFFLE_METHODS = {
  create: "createNewRaffle",
};

export interface RaffleInputs {
  prizeToken: 1 | 2 | 3;
  prizeAmount: number;
  ticketPrice: number;
  maxTickets: number;
}

const prizeTokenSymbol = (prizeToken: number) => {
  if (prizeToken === 1) {
    return "FTX";
  } else if (prizeToken === 2) {
    return "CNEO";
  } else {
    return "CGAS";
  }
};

const create = (wallet: ConnectedWallet, args: RaffleInputs): InvokeScript => {
  const { prizeAmount, maxTickets, prizeToken, ticketPrice } = args;
  return {
    transfer: {
      from: wallet.address,
      to: neonWallet.getAddressFromScriptHash(NLP2_CONTRACT_HASH),
      amount: prizeAmount,
      symbol: prizeTokenSymbol(prizeToken),
    },
    operation: NLP2_RAFFLE_METHODS.create,
    scriptHash: NLP2_CONTRACT_HASH,
    args: [
      {
        type: "Address",
        value: wallet.address,
      },
      {
        type: "Integer",
        value: 1,
      },
      {
        type: "Integer",
        value: prizeToken,
      },
      {
        type: "ByteArray",
        value: u.num2fixed8(prizeAmount),
      },
      {
        type: "ByteArray",
        value: u.num2fixed8(ticketPrice),
      },
      {
        type: "Integer",
        value: maxTickets,
      },
    ],
  };
};

const NLP2RaffleAPI = {
  create: create,
};

export default NLP2RaffleAPI;
