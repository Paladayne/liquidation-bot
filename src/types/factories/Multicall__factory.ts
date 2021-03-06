/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Multicall } from "../Multicall";

export class Multicall__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Multicall> {
    return super.deploy(overrides || {}) as Promise<Multicall>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Multicall {
    return super.attach(address) as Multicall;
  }
  connect(signer: Signer): Multicall__factory {
    return super.connect(signer) as Multicall__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Multicall {
    return new Contract(address, _abi, signerOrProvider) as Multicall;
  }
}

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall.Call[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "aggregate",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "bytes[]",
        name: "returnData",
        type: "bytes[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockCoinbase",
    outputs: [
      {
        internalType: "address",
        name: "coinbase",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockDifficulty",
    outputs: [
      {
        internalType: "uint256",
        name: "difficulty",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockGasLimit",
    outputs: [
      {
        internalType: "uint256",
        name: "gaslimit",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "getEthBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061057c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c806372425d9d1161005b57806372425d9d146100e757806386d516e8146100ef578063a8b0574e146100f7578063ee82ac5e1461010c57610088565b80630f28c97d1461008d578063252dba42146100ab57806327e86d6e146100cc5780634d2301cc146100d4575b600080fd5b61009561011f565b6040516100a29190610469565b60405180910390f35b6100be6100b93660046102c0565b610123565b6040516100a2929190610472565b61009561025d565b6100956100e236600461029f565b610266565b610095610273565b610095610277565b6100ff61027b565b6040516100a29190610455565b61009561011a3660046103f6565b61027f565b4290565b8051439060609067ffffffffffffffff8111801561014057600080fd5b5060405190808252806020026020018201604052801561017457816020015b606081526020019060019003908161015f5790505b50905060005b8351811015610257576000606085838151811061019357fe5b6020026020010151600001516001600160a01b03168684815181106101b457fe5b6020026020010151602001516040516101cd9190610439565b6000604051808303816000865af19150503d806000811461020a576040519150601f19603f3d011682016040523d82523d6000602084013e61020f565b606091505b5091509150818160405160200161022792919061040e565b60405160208183030381529060405284848151811061024257fe5b6020908102919091010152505060010161017a565b50915091565b60001943014090565b6001600160a01b03163190565b4490565b4590565b4190565b4090565b80356001600160a01b038116811461029a57600080fd5b919050565b6000602082840312156102b0578081fd5b6102b982610283565b9392505050565b600060208083850312156102d2578182fd5b67ffffffffffffffff80843511156102e8578283fd5b8335840185601f8201126102fa578384fd5b80358281111561030657fe5b61031384858302016104f2565b81815284810190838601875b848110156103e75781358601601f196040828e038201121561033f578a8bfd5b604051604081018181108b8211171561035457fe5b604052610362838c01610283565b815260408301358a811115610375578c8dfd5b8084019350508d603f840112610389578b8cfd5b8a8301358a81111561039757fe5b6103a78c84601f840116016104f2565b92508083528e60408286010111156103bd578c8dfd5b80604085018d85013782018b018c9052808b0191909152855250928701929087019060010161031f565b50909998505050505050505050565b600060208284031215610407578081fd5b5035919050565b600083151560f81b8252825161042b816001850160208701610516565b919091016001019392505050565b6000825161044b818460208701610516565b9190910192915050565b6001600160a01b0391909116815260200190565b90815260200190565b600060408201848352602060408185015281855180845260608601915060608382028701019350828701855b828110156104e457878603605f19018452815180518088526104c581888a01898501610516565b601f01601f19169690960185019550928401929084019060010161049e565b509398975050505050505050565b60405181810167ffffffffffffffff8111828210171561050e57fe5b604052919050565b60005b83811015610531578181015183820152602001610519565b83811115610540576000848401525b5050505056fea2646970667358221220082ccc58dc935ba0ebff9484135c03c3ab3d58d24cebbdc82325cb4a757d39a464736f6c63430007040033";
