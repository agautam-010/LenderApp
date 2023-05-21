import React, {createContext, useState, useContext} from 'react';
import {TodoDataTypes, fetchTodo} from './services';
import {NotesProps} from 'lib/types';
import {Toast} from 'lib/functions';
import {ENUMS} from 'src/lib';

const TodoContext = createContext<TodoDataTypes>({} as TodoDataTypes);

const TodoProvider = ({children}: {children: JSX.Element | JSX.Element[]}) => {
  const [todos, setTodoState] = useState<NotesProps[]>([]);
  const [count, setCount] = useState(0);
  const setTodo = async (todo: NotesProps) => setTodoState([todo, ...todos]);

  const getTodos = async () => {
    const response = await fetchTodo();
    if (response.success && response.count) {
      setTodoState(response.data as never);
      setCount(response.count);
    } else Toast(response.message, ENUMS.TOAST_TYPES.ERROR);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodo,
        getTodos,
        count,
      }}>
      {children}
    </TodoContext.Provider>
  );
};

function useTodo(): TodoDataTypes {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodo must be used within an AppProvider');
  }
  return context;
}

export {TodoContext, TodoProvider, useTodo};
