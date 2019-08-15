import { O3 } from "./o3";
import { NOS } from "./nos";
import { RPC } from "./rpc";
import { ProviderMethods } from "../../models";

export const Providers: { [key: string]: ProviderMethods } = {
  O3,
  NOS,
  LOCAL: RPC,
};
