import {NotesProps} from 'lib/types';

export const formInitialValues = {
  title: '',
  description: '',
  date: '',
  type: 1,
};

export const isFormValid = (state: NotesProps) =>
  state?.title && state?.description && state?.date;
