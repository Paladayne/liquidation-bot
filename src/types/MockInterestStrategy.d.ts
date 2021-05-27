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

interface MockInterestStrategyInterface extends ethers.utils.Interface {
  functions: {
    "borrowRate(uint256)": FunctionFragment;
    "calculateInterestRates(uint256,uint256,uint256)": FunctionFragment;
    "liquidityRate(uint256,uint256)": FunctionFragment;
    "overallBorrowRate(uint256,uint256)": FunctionFragment;
    "setConfig(uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
    "utilizationRate(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "borrowRate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateInterestRates",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidityRate",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "overallBorrowRate",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setConfig",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "utilizationRate",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "borrowRate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calculateInterestRates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidityRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "overallBorrowRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "utilizationRate",
    data: BytesLike
  ): Result;

  events: {};
}

export class MockInterestStrategy extends Contract {
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

  interface: MockInterestStrategyInterface;

  functions: {
    borrowRate(
      utilization: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rate: BigNumber }>;

    "borrowRate(uint256)"(
      utilization: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rate: BigNumber }>;

    calculateInterestRates(
      debt: BigNumberish,
      liquidity: BigNumberish,
      avgBorrowRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { liqRate: BigNumber; rate: BigNumber }
    >;

    "calculateInterestRates(uint256,uint256,uint256)"(
      debt: BigNumberish,
      liquidity: BigNumberish,
      avgBorrowRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { liqRate: BigNumber; rate: BigNumber }
    >;

    liquidityRate(
      overallRate: BigNumberish,
      utilization: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rate: BigNumber }>;

    "liquidityRate(uint256,uint256)"(
      overallRate: BigNumberish,
      utilization: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rate: BigNumber }>;

    overallBorrowRate(
      debt: BigNumberish,
      avgRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rate: BigNumber }>;

    "overallBorrowRate(uint256,uint256)"(
      debt: BigNumberish,
      avgRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rate: BigNumber }>;

    setConfig(
      baseBorrowRate: BigNumberish,
      optimalSlope: BigNumberish,
      excessSlope: BigNumberish,
      optimalUtilization: BigNumberish,
      treasureFactor: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setConfig(uint256,uint256,uint256,uint256,uint256)"(
      baseBorrowRate: BigNumberish,
      optimalSlope: BigNumberish,
      excessSlope: BigNumberish,
      optimalUtilization: BigNumberish,
      treasureFactor: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    utilizationRate(
      debt: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { utilization: BigNumber }>;

    "utilizationRate(uint256,uint256)"(
      debt: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { utilization: BigNumber }>;
  };

  borrowRate(
    utilization: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "borrowRate(uint256)"(
    utilization: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateInterestRates(
    debt: BigNumberish,
    liquidity: BigNumberish,
    avgBorrowRate: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { liqRate: BigNumber; rate: BigNumber }>;

  "calculateInterestRates(uint256,uint256,uint256)"(
    debt: BigNumberish,
    liquidity: BigNumberish,
    avgBorrowRate: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { liqRate: BigNumber; rate: BigNumber }>;

  liquidityRate(
    overallRate: BigNumberish,
    utilization: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "liquidityRate(uint256,uint256)"(
    overallRate: BigNumberish,
    utilization: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  overallBorrowRate(
    debt: BigNumberish,
    avgRate: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "overallBorrowRate(uint256,uint256)"(
    debt: BigNumberish,
    avgRate: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setConfig(
    baseBorrowRate: BigNumberish,
    optimalSlope: BigNumberish,
    excessSlope: BigNumberish,
    optimalUtilization: BigNumberish,
    treasureFactor: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setConfig(uint256,uint256,uint256,uint256,uint256)"(
    baseBorrowRate: BigNumberish,
    optimalSlope: BigNumberish,
    excessSlope: BigNumberish,
    optimalUtilization: BigNumberish,
    treasureFactor: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  utilizationRate(
    debt: BigNumberish,
    liquidity: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "utilizationRate(uint256,uint256)"(
    debt: BigNumberish,
    liquidity: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    borrowRate(
      utilization: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "borrowRate(uint256)"(
      utilization: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateInterestRates(
      debt: BigNumberish,
      liquidity: BigNumberish,
      avgBorrowRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { liqRate: BigNumber; rate: BigNumber }
    >;

    "calculateInterestRates(uint256,uint256,uint256)"(
      debt: BigNumberish,
      liquidity: BigNumberish,
      avgBorrowRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { liqRate: BigNumber; rate: BigNumber }
    >;

    liquidityRate(
      overallRate: BigNumberish,
      utilization: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "liquidityRate(uint256,uint256)"(
      overallRate: BigNumberish,
      utilization: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    overallBorrowRate(
      debt: BigNumberish,
      avgRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "overallBorrowRate(uint256,uint256)"(
      debt: BigNumberish,
      avgRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setConfig(
      baseBorrowRate: BigNumberish,
      optimalSlope: BigNumberish,
      excessSlope: BigNumberish,
      optimalUtilization: BigNumberish,
      treasureFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setConfig(uint256,uint256,uint256,uint256,uint256)"(
      baseBorrowRate: BigNumberish,
      optimalSlope: BigNumberish,
      excessSlope: BigNumberish,
      optimalUtilization: BigNumberish,
      treasureFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    utilizationRate(
      debt: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "utilizationRate(uint256,uint256)"(
      debt: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    borrowRate(
      utilization: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "borrowRate(uint256)"(
      utilization: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateInterestRates(
      debt: BigNumberish,
      liquidity: BigNumberish,
      avgBorrowRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calculateInterestRates(uint256,uint256,uint256)"(
      debt: BigNumberish,
      liquidity: BigNumberish,
      avgBorrowRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    liquidityRate(
      overallRate: BigNumberish,
      utilization: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "liquidityRate(uint256,uint256)"(
      overallRate: BigNumberish,
      utilization: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    overallBorrowRate(
      debt: BigNumberish,
      avgRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "overallBorrowRate(uint256,uint256)"(
      debt: BigNumberish,
      avgRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setConfig(
      baseBorrowRate: BigNumberish,
      optimalSlope: BigNumberish,
      excessSlope: BigNumberish,
      optimalUtilization: BigNumberish,
      treasureFactor: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setConfig(uint256,uint256,uint256,uint256,uint256)"(
      baseBorrowRate: BigNumberish,
      optimalSlope: BigNumberish,
      excessSlope: BigNumberish,
      optimalUtilization: BigNumberish,
      treasureFactor: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    utilizationRate(
      debt: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "utilizationRate(uint256,uint256)"(
      debt: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    borrowRate(
      utilization: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "borrowRate(uint256)"(
      utilization: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateInterestRates(
      debt: BigNumberish,
      liquidity: BigNumberish,
      avgBorrowRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "calculateInterestRates(uint256,uint256,uint256)"(
      debt: BigNumberish,
      liquidity: BigNumberish,
      avgBorrowRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    liquidityRate(
      overallRate: BigNumberish,
      utilization: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "liquidityRate(uint256,uint256)"(
      overallRate: BigNumberish,
      utilization: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    overallBorrowRate(
      debt: BigNumberish,
      avgRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "overallBorrowRate(uint256,uint256)"(
      debt: BigNumberish,
      avgRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setConfig(
      baseBorrowRate: BigNumberish,
      optimalSlope: BigNumberish,
      excessSlope: BigNumberish,
      optimalUtilization: BigNumberish,
      treasureFactor: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setConfig(uint256,uint256,uint256,uint256,uint256)"(
      baseBorrowRate: BigNumberish,
      optimalSlope: BigNumberish,
      excessSlope: BigNumberish,
      optimalUtilization: BigNumberish,
      treasureFactor: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    utilizationRate(
      debt: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "utilizationRate(uint256,uint256)"(
      debt: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
