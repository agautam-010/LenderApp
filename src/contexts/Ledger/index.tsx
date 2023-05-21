import React, {createContext, useState, useContext} from 'react';
import {TransactionDataTypes, fetchTransactions} from './services';
import {TransactionProps} from 'lib/types';
import {Toast} from 'lib/functions';
import {ENUMS} from 'src/lib';

const TransactionContext = createContext<TransactionDataTypes>(
  {} as TransactionDataTypes,
);

const TransactionProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [transactions, setTransactionsState] = useState<TransactionProps[]>([]);
  const [count, setCount] = useState(0);
  const setTransaction = async (transaction: TransactionProps, id: string) => {
    if (id) {
      const newTransactions = [...transactions];
      const tnsxIndex = newTransactions.findIndex(
        (x: TransactionProps) => x.id === transaction.id,
      );
      if (tnsxIndex) {
        newTransactions[tnsxIndex] = transaction;
        setTransactionsState(newTransactions);
      }
    } else setTransactionsState([transaction, ...transactions]);
  };

  const getTransactions = async () => {
    const response = await fetchTransactions();
    if (response.success && response.count) {
      setTransactionsState(response.data as never);
      setCount(response.count);
    } else Toast(response.message, ENUMS.TOAST_TYPES.ERROR);
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        setTransaction,
        getTransactions,
        count,
      }}>
      {children}
    </TransactionContext.Provider>
  );
};

function useTransactions(): TransactionDataTypes {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error('useTransaction must be used within an AppProvider');
  }
  return context;
}

export {TransactionContext, TransactionProvider, useTransactions};
