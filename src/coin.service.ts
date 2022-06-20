/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/require-await */
import {
  AddressCreateResult,
  AddressValidateResult,
  TransactionParams,
  TxSignResult,
  TxValidateResult,
  AddressKeyPair,
} from './types';
import { BaseNodeAdapter } from './base.node-adapter';

export abstract class CoinService {
  abstract readonly network: string;
  nodes: BaseNodeAdapter[] = [];
  blockBooks: BaseNodeAdapter[] = [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initNodes(...args: any): void {
    // override in child to init nodes
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initBlockBooks(...args: any): void {
    //  override in child to init blockbooks
  }

  async addressCreate(ticker: string): Promise<AddressCreateResult> {
    return null;
  }

  async addressValidate(
    ticker: string,
    address: string,
    privateKey: string,
    publicKey: string,
  ): Promise<AddressValidateResult> {
    return null;
  }

  async txSign(
    ticker: string,
    privateKeys: AddressKeyPair,
    params: TransactionParams,
  ): Promise<TxSignResult> {
    // or Buffer?
    return null;
  }

  async txBuild(ticker: string, params: TransactionParams): Promise<TransactionParams> {
    return null;
  }

  async txValidate(
    ticker: string,
    privateKeys: AddressKeyPair,
    params: TransactionParams,
  ): Promise<TxValidateResult> {
    return null;
  }

  // TODO: some methods for NetworkFee service

  // TODO: some methods for Nonce service
}
