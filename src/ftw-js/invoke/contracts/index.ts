import Raffle from "./nlp2/raffle";
import Lottery from "./nlp2/lottery";

export const NLP2_CONTRACT_HASH = "ada839286d23cdfb42eb556461b9382d02b6e12f";

interface SmartContracts {
  [key: string]: any;
}

export const SmartContracts: SmartContracts = {
  nlp2: {
    createRaffle: Raffle.create,
    drawLottery: Lottery.draw,
    verifyLottery: Lottery.verify,
  },
};

//
// const SmartContracts = (
//   wallet: ConnectedWallet,
//   { contract, operation, args }: InvokeArgs
// ): InvokeScript => {
//   return CONTRACT_LIST[contract][operation](wallet, args);
// };
//
// export default (wallet: ConnectedWallet, invokeArgs: InvokeArgs) => {
//   const{ contract, operation, args } = invokeArgs;
//   return CONTRACT_LIST[contract][operation](wallet, args)
// };
