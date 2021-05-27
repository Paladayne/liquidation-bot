/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Errors } from "../Errors";

export class Errors__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Errors> {
    return super.deploy(overrides || {}) as Promise<Errors>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Errors {
    return super.attach(address) as Errors;
  }
  connect(signer: Signer): Errors__factory {
    return super.connect(signer) as Errors__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Errors {
    return new Contract(address, _abi, signerOrProvider) as Errors;
  }
}

const _abi = [
  {
    inputs: [],
    name: "F_ALREADY_REGISTERED_LENDABLE",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "F_ALREADY_REGISTERED_TRADABLE",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "F_NOT_A_PAIR_FACTORY",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "F_NOT_A_RESERVE_FACTORY",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "F_NOT_LENDABLE_TOKEN",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "F_NOT_REGISTERED_PAIR",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "F_NOT_REGISTERED_TOKEN",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "F_NOT_TRADABLE_TOKEN",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "F_UNINITIALIZED_RESERVE",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MATH_ADDITION_OVERFLOW",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MATH_DIVISION_BY_ZERO",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MATH_MULTIPLICATION_OVERFLOW",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "P_BORROW_LIMIT_EXCEEDED",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "P_DEBT_LEFT",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "P_HEALTHY_POSITION_LIQUIDATION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "P_INSUFFICIENT_LIQUIDITY",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "P_INSUFFICIENT_OUTPUT_AMOUNT",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "P_INSUFFICIENT_POSITION_DEPOSIT",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "P_INSUFFICIENT_WOW_BALANCE",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "P_INVALID_LEVERAGE_FACTOR",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "P_PRICE_THRESHOLD_OVERFLOW",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RT_FORBIDDEN_TRANSFER",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RT_PAIR_NOT_FOUND",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RT_RESERVE_NOT_FOUND",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "R_INSUFFICIENT_BALANCE",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "R_INSUFFICIENT_LIQUIDITY",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "R_INVALID_DEPOSIT_AMOUNT",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "R_INVALID_PAIR",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "R_INVALID_REPAY_AMOUNT",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x610a30610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106101d85760003560e01c806371431d461161010e578063cafb2fab116100ac578063de2fdf8b1161007b578063de2fdf8b1461031a578063df203efb14610322578063e36f220e1461032a578063e66c238a14610332576101d8565b8063cafb2fab146102fa578063d8289f8814610302578063db3a05db1461030a578063ddca5bf614610312576101d8565b8063a6ddc7f5116100e8578063a6ddc7f5146102da578063a8360415146102e2578063c665b298146102ea578063c6cb18be146102f2576101d8565b806371431d46146102c25780637bfb002a146102ca5780638254f4d0146102d2576101d8565b80633f5ba44a1161017b5780634d6800f6116101555780634d6800f6146102a257806352eaf6cb146102aa5780635ac8a0bb146102b2578063704b2185146102ba576101d8565b80633f5ba44a1461028a5780634349e3d8146102925780634b88e17f1461029a576101d8565b80630a15c5c5116101b75780630a15c5c51461026a5780630f5ee482146102725780633446045b1461027a5780633b514f0314610282576101d8565b8062d1afbe146101dd578063029d23441461025a578063082f7cec14610262575b600080fd5b6101e561033a565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561021f578181015183820152602001610207565b50505050905090810190601f16801561024c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101e5610373565b6101e5610392565b6101e56103ae565b6101e56103ca565b6101e56103e9565b6101e5610422565b6101e561043e565b6101e561045a565b6101e5610479565b6101e5610495565b6101e56104b1565b6101e56104cd565b6101e56104e9565b6101e5610522565b6101e561055b565b6101e5610577565b6101e5610593565b6101e56105af565b6101e56105cb565b6101e5610604565b6101e5610636565b6101e5610666565b6101e561069f565b6101e56106bb565b6101e56106f4565b6101e561072d565b6101e561075d565b6101e561078f565b6040518060400160405280602081526020017f50726f7669646564206164647265737320697320756e6b6e6f776e207061697281525081565b604051806040016040528060038152602001624d4d4f60e81b81525081565b6040518060600160405280602981526020016108676029913981565b6040518060600160405280602181526020016108466021913981565b604051806040016040528060038152602001624d414f60e81b81525081565b6040518060400160405280601e81526020017f4f6e6c7920706169722063616e2063616c6c2074686973206d6574686f64000081525081565b6040518060600160405280602b8152602001610890602b913981565b6040518060600160405280603381526020016107ed6033913981565b6040518060400160405280600381526020016226a22d60e91b81525081565b6040518060600160405280602481526020016107c96024913981565b6040518060600160405280603081526020016108f46030913981565b60405180606001604052806032815260200161097f6032913981565b6040518060600160405280603981526020016108bb6039913981565b6040518060400160405280601f81526020017f4f6e6c792057424e42207472616e73666572732061726520616c6c6f7765640081525081565b6040518060400160405280601c81526020017f506169723a20494e53554646494349454e545f4c49515549444954590000000081525081565b60405180606001604052806024815260200161095b6024913981565b6040518060600160405280602681526020016108206026913981565b6040518060600160405280602681526020016109b16026913981565b6040518060600160405280602481526020016109d76024913981565b6040518060400160405280601881526020017f496e73756666696369656e7420574f572062616c616e6365000000000000000081525081565b60405180604001604052806016815260200175496e73756666696369656e74206c697175696469747960501b81525081565b60405180604001604052806014815260200173496e73756666696369656e742062616c616e636560601b81525081565b6040518060400160405280601d81526020017f496e73756666696369656e7420706f736974696f6e206465706f73697400000081525081565b6040518060600160405280603781526020016109246037913981565b6040518060400160405280601781526020017f496e76616c6964206c6576657261676520666163746f7200000000000000000081525081565b6040518060400160405280601881526020017f5072696365207468726573686f6c64206f766572666c6f77000000000000000081525081565b60405180604001604052806014815260200173125b9d985b1a59081c995c185e48185b5bdd5b9d60621b81525081565b60405180604001604052806016815260200175125b9d985b1a590819195c1bdcda5d08185b5bdd5b9d60521b81525081565b6040518060400160405280601a81526020017f5061697220626f72726f77206c696d69742065786365656465640000000000008152508156fe556e61626c6520746f206c6971756964617465206865616c74687920706f736974696f6e4f6e6c79207265736572766520666163746f727920697320616c6c6f77656420746f2063616c6c2074686973206d6574686f6450726f76696465642061646472657373206973206e6f74206c656e6461626c6520746f6b656e50726f7669646564206164647265737320697320756e6b6e6f776e20746f6b656e50616e63616b65526f757465723a20494e53554646494349454e545f4f55545055545f414d4f554e54556e61626c6520746f2066696e64207061697220666f722070726f766964656420746f6b656e207061697252657365727665206f662070726f7669646564206c656e6461626c6520746f6b656e732069736e277420696e697469616c697a6564207965744f6e6c79207061697220666163746f727920697320616c6c6f77656420746f2063616c6c2074686973206d6574686f6454686572652069732064656274206c6566742061667465722072657061796d656e742e2053686f756c64206e657665722068617070656e4c656e6461626c6520746f6b656e20697320616c72656164792072656769737465726564556e61626c6520746f2066696e64207265736572766520666f722070726f7669646564206c656e6461626c6520746f6b656e50726f76696465642061646472657373206973206e6f74207472616461626c6520746f6b656e5472616461626c6520746f6b656e20697320616c72656164792072656769737465726564a264697066735822122021d427b7d9ecc4cb5702cc4f99052acc41214e411019e86b444bf44b16cf911b64736f6c63430007040033";
