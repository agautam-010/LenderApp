import {NotesProps} from 'lib/types';
import {ResponseProps, API} from 'lib/services';

export interface TodoDataTypes {
  todos: NotesProps[];
  setTodo(todo: NotesProps): Promise<void>;
  getTodos(): Promise<void>;
  count: number;
}

export const fetchTodo = async (): Promise<ResponseProps> => {
  const response = await API('/notes');
  return new Promise(resolve => {
    resolve(response);
  });
};
