/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MockPriceGuard } from "../MockPriceGuard";

export class MockPriceGuard__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<MockPriceGuard> {
    return super.deploy(overrides || {}) as Promise<MockPriceGuard>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockPriceGuard {
    return super.attach(address) as MockPriceGuard;
  }
  connect(signer: Signer): MockPriceGuard__factory {
    return super.connect(signer) as MockPriceGuard__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockPriceGuard {
    return new Contract(address, _abi, signerOrProvider) as MockPriceGuard;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    name: "getThreshold",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "setThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060c88061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c8063960bfe04146037578063c6414eee146053575b600080fd5b605160048036036020811015604b57600080fd5b50356085565b005b607360048036036040811015606757600080fd5b5080359060200135608a565b60408051918252519081900360200190f35b600055565b50506000549056fea2646970667358221220f97abdfde848fb15abccae578296679d92ac68c5723f28624a0f2238b4b363cd64736f6c63430007040033";
