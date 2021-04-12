import bn from "bignumber.js";

export type Block = {
  height: number,
  hash: string,
  timestamp: number
}

export type Transaction = {
  from: string,
  to: string,
}

export type Position = {
  lendable: string;
  tradable: string;
  trader: string;
  cost: bn;
  liquidationCost: bn;
  debt: bn;
};
