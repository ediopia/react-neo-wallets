import { ConnectedWallet, InvokeScript } from "../../../../models";
export declare const NLP2_RAFFLE_METHODS: {
    create: string;
};
export interface RaffleInputs {
    prizeToken: 1 | 2 | 3;
    prizeAmount: number;
    ticketPrice: number;
    maxTickets: number;
}
declare const NLP2RaffleAPI: {
    create: (wallet: ConnectedWallet, args: RaffleInputs) => InvokeScript;
};
export default NLP2RaffleAPI;
//# sourceMappingURL=raffle.d.ts.map