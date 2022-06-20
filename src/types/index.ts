export interface NodesOptions {
  [name: string]: {
    url: string;
    headers?: {
      [key: string]: string;
    };
    basic?: {
      user: string;
      pass: string;
    };
    query?: {
      [key: string]: string;
    };
    data?: {
      [key: string]: string;
    };
    timeout?: number;
  };
}

export interface BalanceByAddressResponse {
  balance: string | number;
}

export interface Transaction {
  hash: string;
  ticker: string;
  from: FromParams[];
  to: ToParams[];
  status: string;
  [key: string]: unknown;
}

export class NetworkFeeResponseDto {
  networkFee: number;
  properties: Record<string, unknown>;
}

export interface TransactionParams {
  from: FromParams[] | FromParams;
  to: ToParams[] | ToParams;
  fee?: NetworkFeeResponseDto;
  spent?: {
    [address: string]: string[];
  };
  utxo?: {
    [address: string]: string[];
  };
}

export interface FromParams {
  address: string;
  extraId?: string;
  value: string | null;
}

export interface ToParams {
  address: string;
  extraId?: string;
  value: string;
}

export interface AddressKeyPair {
  [address: string]: string;
}

export interface TransactionBroadcastParams {
  signedData: string;
}

export interface TransactionBroadcastResults {
  hash: string;
}

export interface Block {
  height: number;
  timestamp: Date;
  transactions: Transaction[];
  data: Record<string, unknown>;
}

export interface AddressCreateResult {
  address: string;
  privateKey: string;
  publicKey: string;
}

export type AddressValidateResult = string | true;

export type TxSignResult =
  | string
  | {
      signedData: string;
      txHash?: string;
    };

export type TxValidateResult = boolean;

export type GetHeightResult = number;

export type GetBuildParams = Record<string, unknown>;

export type GetBuildParamsResult = Record<string, unknown>;

export type GetBlockResult = Block;

export type GetBlocksResult = Block[];

export type ParseBlockResult = Transaction[];

export interface BalanceByAddressResult {
  balance: string;
  [key: string]: string;
}

export type TxBroadcastResult = TransactionBroadcastResults | { error: string };

export interface pollTransactionFromBlockResult {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  block: any;
  transactions: Transaction[];
}

export type UtxoByAddressResult = Record<string, unknown>[];

export type TxByHashResult = Transaction;

export enum AdapterType {
  Node = 'Node',
  BBook = 'BBook',
}
