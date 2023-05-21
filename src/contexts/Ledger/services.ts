import {TransactionProps} from 'lib/types';
import {ResponseProps, API} from 'lib/services';

export interface TransactionDataTypes {
  transactions: TransactionProps[];
  setTransaction(todo: TransactionProps, id?: string): Promise<void>;
  getTransactions(): Promise<void>;
  count: number;
}

export const fetchTransactions = async (): Promise<ResponseProps> => {
  const response = await API('/transactions');
  return new Promise(resolve => {
    resolve(response);
  });
};
