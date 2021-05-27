/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IParamProviderFactoryV1Interface extends ethers.utils.Interface {
  functions: {
    "createPairParamProvider(address,address)": FunctionFragment;
    "createReserveParamProvider(address)": FunctionFragment;
    "getPairParamProvider(address,address)": FunctionFragment;
    "getReserveParamProvider(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createPairParamProvider",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "createReserveParamProvider",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPairParamProvider",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getReserveParamProvider",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "createPairParamProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createReserveParamProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPairParamProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReserveParamProvider",
    data: BytesLike
  ): Result;

  events: {};
}

export class IParamProviderFactoryV1 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IParamProviderFactoryV1Interface;

  functions: {
    createPairParamProvider(
      lendable: string,
      tradable: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createPairParamProvider(address,address)"(
      lendable: string,
      tradable: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    createReserveParamProvider(
      lendable: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createReserveParamProvider(address)"(
      lendable: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getPairParamProvider(
      lendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getPairParamProvider(address,address)"(
      lendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getReserveParamProvider(
      lendable: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getReserveParamProvider(address)"(
      lendable: string,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  createPairParamProvider(
    lendable: string,
    tradable: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createPairParamProvider(address,address)"(
    lendable: string,
    tradable: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  createReserveParamProvider(
    lendable: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createReserveParamProvider(address)"(
    lendable: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getPairParamProvider(
    lendable: string,
    tradable: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "getPairParamProvider(address,address)"(
    lendable: string,
    tradable: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getReserveParamProvider(
    lendable: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "getReserveParamProvider(address)"(
    lendable: string,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    createPairParamProvider(
      lendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "createPairParamProvider(address,address)"(
      lendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<string>;

    createReserveParamProvider(
      lendable: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "createReserveParamProvider(address)"(
      lendable: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getPairParamProvider(
      lendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "getPairParamProvider(address,address)"(
      lendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getReserveParamProvider(
      lendable: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "getReserveParamProvider(address)"(
      lendable: string,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    createPairParamProvider(
      lendable: string,
      tradable: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createPairParamProvider(address,address)"(
      lendable: string,
      tradable: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    createReserveParamProvider(
      lendable: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createReserveParamProvider(address)"(
      lendable: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getPairParamProvider(
      lendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPairParamProvider(address,address)"(
      lendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReserveParamProvider(
      lendable: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getReserveParamProvider(address)"(
      lendable: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createPairParamProvider(
      lendable: string,
      tradable: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createPairParamProvider(address,address)"(
      lendable: string,
      tradable: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    createReserveParamProvider(
      lendable: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createReserveParamProvider(address)"(
      lendable: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getPairParamProvider(
      lendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPairParamProvider(address,address)"(
      lendable: string,
      tradable: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReserveParamProvider(
      lendable: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getReserveParamProvider(address)"(
      lendable: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
