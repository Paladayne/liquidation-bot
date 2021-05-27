/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MultiChainlinkPriceGuard } from "../MultiChainlinkPriceGuard";

export class MultiChainlinkPriceGuard__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    chainlinkGuards: string[],
    overrides?: Overrides
  ): Promise<MultiChainlinkPriceGuard> {
    return super.deploy(
      chainlinkGuards,
      overrides || {}
    ) as Promise<MultiChainlinkPriceGuard>;
  }
  getDeployTransaction(
    chainlinkGuards: string[],
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(chainlinkGuards, overrides || {});
  }
  attach(address: string): MultiChainlinkPriceGuard {
    return super.attach(address) as MultiChainlinkPriceGuard;
  }
  connect(signer: Signer): MultiChainlinkPriceGuard__factory {
    return super.connect(signer) as MultiChainlinkPriceGuard__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MultiChainlinkPriceGuard {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MultiChainlinkPriceGuard;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "chainlinkGuards",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161057c38038061057c8339818101604052602081101561003357600080fd5b810190808051604051939291908464010000000082111561005357600080fd5b90830190602082018581111561006857600080fd5b825186602082028301116401000000008211171561008557600080fd5b82525081516020918201928201910280838360005b838110156100b257818101518382015260200161009a565b5050505090500160405250505080516001600160401b03811180156100d657600080fd5b50604051908082528060200260200182016040528015610100578160200160208202803683370190505b5080516101159160009160209091019061017b565b5060005b81518110156101745781818151811061012e57fe5b60200260200101516000828154811061014357fe5b600091825260209091200180546001600160a01b0319166001600160a01b0392909216919091179055600101610119565b50506101f5565b8280548282559060005260206000209081019282156101d0579160200282015b828111156101d057825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019061019b565b506101dc9291506101e0565b5090565b5b808211156101dc57600081556001016101e1565b610378806102046000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c6414eee14610030575b600080fd5b6100536004803603604081101561004657600080fd5b5080359060200135610065565b60408051918252519081900360200190f35b600082815b600054811015610107576000818154811061008157fe5b6000918252602091829020015460408051635c19521760e01b81526004810186905290516001600160a01b0390921692635c19521792602480840193829003018186803b1580156100d157600080fd5b505afa1580156100e5573d6000803e3d6000fd5b505050506040513d60208110156100fb57600080fd5b5051915060010161006a565b508281106101345761012f816101296127106101238388610141565b9061018a565b906101e3565b610137565b60005b9150505b92915050565b600061018383836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610225565b9392505050565b6000826101995750600061013b565b828202828482816101a657fe5b04146101835760405162461bcd60e51b81526004018080602001828103825260218152602001806103226021913960400191505060405180910390fd5b600061018383836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506102bc565b600081848411156102b45760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610279578181015183820152602001610261565b50505050905090810190601f1680156102a65780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000818361030b5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610279578181015183820152602001610261565b50600083858161031757fe5b049594505050505056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a2646970667358221220d7529ac3957d1a4e1bb72731f03a0497d8423dd275f3c20805ab1519043cef1964736f6c63430007040033";
