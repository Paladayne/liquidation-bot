/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MockPairV2 } from "../MockPairV2";

export class MockPairV2__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<MockPairV2> {
    return super.deploy(overrides || {}) as Promise<MockPairV2>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockPairV2 {
    return super.attach(address) as MockPairV2;
  }
  connect(signer: Signer): MockPairV2__factory {
    return super.connect(signer) as MockPairV2__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockPairV2 {
    return new Contract(address, _abi, signerOrProvider) as MockPairV2;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
    ],
    name: "getPosition",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "selfValue",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "principalDebt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "currentDebt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "currentCost",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidationCost",
            type: "uint256",
          },
        ],
        internalType: "struct Position",
        name: "position",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "reserve",
        type: "address",
      },
      {
        internalType: "address",
        name: "pancakePair",
        type: "address",
      },
      {
        internalType: "address",
        name: "pancakeRouter",
        type: "address",
      },
      {
        internalType: "address",
        name: "lendable",
        type: "address",
      },
      {
        internalType: "address",
        name: "tradable",
        type: "address",
      },
      {
        internalType: "address",
        name: "treasurer",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
    name: "symbol",
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
    name: "totalSupply",
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
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611911806100206000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063395093511161008c578063a457c2d711610066578063a457c2d71461019d578063a9059cbb146101b0578063dd62ed3e146101c3578063ef090e4c146101d6576100cf565b8063395093511461016f57806370a082311461018257806395d89b4114610195576100cf565b806306fdde03146100d4578063095ea7b3146100f257806316c197391461011257806318160ddd1461013257806323b872dd14610147578063313ce5671461015a575b600080fd5b6100dc6101eb565b6040516100e99190611626565b60405180910390f35b610105610100366004611477565b610282565b6040516100e9919061161b565b61012561012036600461131c565b6102a0565b6040516100e99190611679565b61013a6103b5565b6040516100e991906116d2565b61010561015536600461143c565b6103bc565b610162610444565b6040516100e99190611731565b61010561017d366004611477565b61044e565b61013a61019036600461131c565b61049d565b6100dc6104bd565b6101056101ab366004611477565b61051f565b6101056101be366004611477565b610588565b61013a6101d1366004611336565b61059c565b6101e96101e4366004611368565b6105c8565b005b6101378054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156102785780601f1061024d57610100808354040283529160200191610278565b820191906000526020600020905b81548152906001019060200180831161025b57829003601f168201915b5050505050905090565b600061029661028f61074c565b8484610750565b5060015b92915050565b6102a86111c1565b6102b18261049d565b8082526102bd9061083d565b6002026020808301919091526001600160a01b03808416600090815261016f9092526040918290205460030282840152610166549151631724916d60e31b815291169063b9248b68906103169030908690600401611601565b60806040518083038186803b15801561032e57600080fd5b505afa158015610342573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610366919061158f565b5060808401919091526004909102606083015260050260a08201528051156103a55761039a81600001518260800151610916565b60e083015260c08201525b60c0810180516006029052919050565b6101365490565b60006103c9848484610a4d565b61043a846103d561074c565b6104358560405180606001604052806028815260200161181e602891396001600160a01b038a166000908152610135602052604081209061041461074c565b6001600160a01b031681526020810191909152604001600020549190610bad565b610750565b5060019392505050565b6101395460ff1690565b600061029661045b61074c565b8461043585610135600061046d61074c565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490610c44565b6001600160a01b038116600090815261013460205260409020545b919050565b6101388054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156102785780601f1061024d57610100808354040283529160200191610278565b600061029661052c61074c565b846104358560405180606001604052806025815260200161188f60259139610135600061055761074c565b6001600160a01b03908116825260208083019390935260409182016000908120918d16815292529020549190610bad565b600061029661059561074c565b8484610a4d565b6001600160a01b0391821660009081526101356020908152604080832093909416825291909152205490565b600054610100900460ff16806105e157506105e1610ca5565b806105ef575060005460ff16155b61062a5760405162461bcd60e51b815260040180806020018281038252602e8152602001806117cf602e913960400191505060405180910390fd5b600054610100900460ff16158015610655576000805460ff1961ff0019909116610100171660011790555b61065d610cb6565b610665610d58565b6106b1858560405160200161067b9291906115c4565b604051602081830303815290604052848460405160200161069d9291906115e2565b604051602081830303815290604052610e4b565b61016e805461016680546001600160a01b038f81166001600160a01b03199283161790925561016a80548f841690831617905561016b80548e841690831617905561016780548d8416908316811790915561016880548d85169084168117909155600160a01b9110150260ff60a01b19928b16919093161716179055801561073f576000805461ff00191690555b5050505050505050505050565b3390565b6001600160a01b0383166107955760405162461bcd60e51b815260040180806020018281038252602481526020018061186b6024913960400191505060405180910390fd5b6001600160a01b0382166107da5760405162461bcd60e51b81526004018080602001828103825260228152602001806117876022913960400191505060405180910390fd5b6001600160a01b0380841660008181526101356020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b60008161084c575060006104b8565b600080610857610f01565b9150915060008211801561086b5750600081115b6040518060400160405280601c81526020017f506169723a20494e53554646494349454e545f4c495155494449545900000000815250906108c85760405162461bcd60e51b81526004016108bf9190611626565b60405180910390fd5b5060006108d7856103e6610fc7565b905060006108e58284610fc7565b905060006108ff836108f9876103e8610fc7565b90610c44565b905080828161090a57fe5b04979650505050505050565b6040805160028082526060808301845260009384939192906020830190803683375050610168546101675483519394506001600160a01b039182169391169150839060009061096157fe5b602002602001018360018151811061097557fe5b6001600160a01b03938416602091820292909201015291811690915261016b5460405163d06ca61f60e01b8152606092919091169063d06ca61f906109c090899086906004016116db565b60006040518083038186803b1580156109d857600080fd5b505afa1580156109ec573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610a1491908101906114a0565b905080600181518110610a2357fe5b60200260200101519350610a426129048661102090919063ffffffff16565b925050509250929050565b6001600160a01b038316610a925760405162461bcd60e51b81526004018080602001828103825260258152602001806118466025913960400191505060405180910390fd5b6001600160a01b038216610ad75760405162461bcd60e51b81526004018080602001828103825260238152602001806117646023913960400191505060405180910390fd5b610ae2838383610efc565b610b20816040518060600160405280602681526020016117a9602691396001600160a01b038616600090815261013460205260409020549190610bad565b6001600160a01b03808516600090815261013460205260408082209390935590841681522054610b509082610c44565b6001600160a01b038084166000818152610134602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115610c3c5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610c01578181015183820152602001610be9565b50505050905090810190601f168015610c2e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015610c9e576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6000610cb0306110db565b15905090565b600054610100900460ff1680610ccf5750610ccf610ca5565b80610cdd575060005460ff16155b610d185760405162461bcd60e51b815260040180806020018281038252602e8152602001806117cf602e913960400191505060405180910390fd5b600054610100900460ff16158015610d43576000805460ff1961ff0019909116610100171660011790555b8015610d55576000805461ff00191690555b50565b600054610100900460ff1680610d715750610d71610ca5565b80610d7f575060005460ff16155b610dba5760405162461bcd60e51b815260040180806020018281038252602e8152602001806117cf602e913960400191505060405180910390fd5b600054610100900460ff16158015610de5576000805460ff1961ff0019909116610100171660011790555b603354610df06110e1565b11610e2c5760405162461bcd60e51b81526004018080602001828103825260288152602001806118b46028913960400191505060405180910390fd5b610e346110e1565b6033558015610d55576000805461ff001916905550565b600054610100900460ff1680610e645750610e64610ca5565b80610e72575060005460ff16155b610ead5760405162461bcd60e51b815260040180806020018281038252602e8152602001806117cf602e913960400191505060405180910390fd5b600054610100900460ff16158015610ed8576000805460ff1961ff0019909116610100171660011790555b610ee0610cb6565b610eea83836110e6565b8015610efc576000805461ff00191690555b505050565b60008060008061016a60009054906101000a90046001600160a01b03166001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b158015610f5657600080fd5b505afa158015610f6a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f8e9190611541565b5061016e546001600160701b03928316945091169150600160a01b900460ff16610fb9578082610fbc565b81815b909590945092505050565b600082610fd65750600061029a565b82820282848281610fe357fe5b0414610c9e5760405162461bcd60e51b81526004018080602001828103825260218152602001806117fd6021913960400191505060405180910390fd5b600082158061102d575081155b1561103a5750600061029a565b81611388198161104657fe5b048311156040518060400160405280601c81526020017f4d4154485f4d554c5449504c49434154494f4e5f4f564552464c4f5700000000815250906110cc5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610c01578181015183820152602001610be9565b50506127109102611388010490565b3b151590565b600290565b600054610100900460ff16806110ff57506110ff610ca5565b8061110d575060005460ff16155b6111485760405162461bcd60e51b815260040180806020018281038252602e8152602001806117cf602e913960400191505060405180910390fd5b600054610100900460ff16158015611173576000805460ff1961ff0019909116610100171660011790555b825161118790610137906020860190611206565b50815161119c90610138906020850190611206565b50610139805460ff191660121790558015610efc576000805461ff0019169055505050565b60405180610100016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f01602090048101928261123c5760008555611282565b82601f1061125557805160ff1916838001178555611282565b82800160010185558215611282579182015b82811115611282578251825591602001919060010190611267565b5061128e929150611292565b5090565b5b8082111561128e5760008155600101611293565b80356001600160a01b03811681146104b857600080fd5b60008083601f8401126112cf578081fd5b50813567ffffffffffffffff8111156112e6578182fd5b6020830191508360208285010111156112fe57600080fd5b9250929050565b80516001600160701b03811681146104b857600080fd5b60006020828403121561132d578081fd5b610c9e826112a7565b60008060408385031215611348578081fd5b611351836112a7565b915061135f602084016112a7565b90509250929050565b6000806000806000806000806000806101008b8d031215611387578586fd5b6113908b6112a7565b995061139e60208c016112a7565b98506113ac60408c016112a7565b97506113ba60608c016112a7565b96506113c860808c016112a7565b95506113d660a08c016112a7565b945060c08b013567ffffffffffffffff808211156113f2578586fd5b6113fe8e838f016112be565b909650945060e08d0135915080821115611416578384fd5b506114238d828e016112be565b915080935050809150509295989b9194979a5092959850565b600080600060608486031215611450578283fd5b611459846112a7565b9250611467602085016112a7565b9150604084013590509250925092565b60008060408385031215611489578182fd5b611492836112a7565b946020939093013593505050565b600060208083850312156114b2578182fd5b825167ffffffffffffffff808211156114c9578384fd5b818501915085601f8301126114dc578384fd5b8151818111156114e857fe5b83810291506114f884830161173f565b8181528481019084860184860187018a1015611512578788fd5b8795505b83861015611534578051835260019590950194918601918601611516565b5098975050505050505050565b600080600060608486031215611555578283fd5b61155e84611305565b925061156c60208501611305565b9150604084015163ffffffff81168114611584578182fd5b809150509250925092565b600080600080608085870312156115a4578384fd5b505082516020840151604085015160609095015191969095509092509050565b60008284833750652050726f787960d01b9101908152600601919050565b6000620e0e4f60eb1b8252828460038401379101600301908152919050565b6001600160a01b0392831681529116602082015260400190565b901515815260200190565b6000602080835283518082850152825b8181101561165257858101830151858201604001528201611636565b818111156116635783604083870101525b50601f01601f1916929092016040019392505050565b600061010082019050825182526020830151602083015260408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b90815260200190565b60006040820184835260206040818501528185518084526060860191508287019350845b818110156117245784516001600160a01b0316835293830193918301916001016116ff565b5090979650505050505050565b60ff91909116815260200190565b60405181810167ffffffffffffffff8111828210171561175b57fe5b60405291905056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726f56657273696f6e65643a207265766973696f6e20697320746f6f206c6f7720746f20757064617465a2646970667358221220ae7c024af5b2a0ca7f3bdf05003826c0cd218c5cddcc2503976e91514d2cd93164736f6c63430007040033";
