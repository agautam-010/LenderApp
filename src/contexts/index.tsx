import React, {ComponentProps, FC} from 'react';
import {AppProvider} from './AppContext';
import {TodoProvider} from './TodoContext';
import {TransactionProvider} from './Ledger';

const combineComponents = (...components: FC<any>[]): FC => {
  return components.reverse().reduce(
    (AccumulatedComponents, CurrentComponent) => {
      return ({children}: ComponentProps<FC>): JSX.Element => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({children}) => <>{children}</>,
  );
};

const AppContextProvider = combineComponents(
  AppProvider,
  TodoProvider,
  TransactionProvider,
);
export default AppContextProvider;
