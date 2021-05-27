/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IVersioned } from "../IVersioned";

export class IVersioned__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IVersioned {
    return new Contract(address, _abi, signerOrProvider) as IVersioned;
  }
}

const _abi = [
  {
    inputs: [],
    name: "REVISION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];
