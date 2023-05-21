export interface FormDataTypes {
  fullName?: string;
  email?: string;
  gender?: number;
  password?: string;
}

export const formInitialValues = {
  fullName: '',
  email: '',
  gender: 1,
  password: '',
};

export const isLoginFormValid = (state: FormDataTypes) => {
  return state?.email && state?.password;
};

export const isSignupFormValid = (state: FormDataTypes) => {
  return state?.email && state?.password;
};
