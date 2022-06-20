/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  AdapterType,
  BalanceByAddressResult,
  Block,
  GetBuildParams,
  GetBlockResult,
  GetBlocksResult,
  GetBuildParamsResult,
  GetHeightResult,
  ParseBlockResult,
  pollTransactionFromBlockResult,
  TransactionBroadcastParams,
  TxBroadcastResult,
  TxByHashResult,
  UtxoByAddressResult,
} from './types';

export abstract class BaseNodeAdapter {
  abstract readonly type: AdapterType;
  abstract readonly name: string;
  abstract readonly network: string;
  abstract readonly tickers: string[];

  protected request<T, U>(
    method: 'POST' | 'GET' | 'PUT' | 'DELETE',
    url: string,
    data?: U,
    headers?: Record<string, string | number>,
  ): Promise<T> {
    return null;
  }

  async utxoByAddress(ticker: string, address: string): Promise<UtxoByAddressResult> {
    return null;
  }

  async txByHash(ticker: string, hash: string): Promise<TxByHashResult> {
    return null;
  }

  async getHeight(): Promise<GetHeightResult> {
    return null;
  }

  async getBuildParams(params?: GetBuildParams): Promise<GetBuildParamsResult> {
    return null;
  }

  async getBlock(height: number): Promise<GetBlockResult> {
    return null;
  }

  async getBlocks(fromHeight: number, toHeight: number): Promise<GetBlocksResult> {
    const promises: Promise<Block>[] = [];

    for (let i = fromHeight; i <= toHeight; ++i) {
      promises.push(this.getBlock(i));
    }

    return Promise.all(promises);
  }

  async parseBlock(block: Block): Promise<ParseBlockResult> {
    return null;
  }

  async balanceByAddress(ticker: string, address: string): Promise<BalanceByAddressResult> {
    return null;
  }

  async txBroadcast(
    ticker: string,
    params: TransactionBroadcastParams,
  ): Promise<TxBroadcastResult> {
    return null;
  }

  async old_pollTransactionFromBlock(
    ticker: string,
    address: string,
    blockHeight: number,
  ): Promise<pollTransactionFromBlockResult> {
    return null;
  }
}
