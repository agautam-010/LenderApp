export type AuthData = {
  id: string;
  email: string;
  fullName: string;
  gender: string;
};
const signIn = (state: AuthData): Promise<AuthData> => {
  // this is a mock of an API call, in a real app
  // will be need connect with some real API,
  // send email and password, and if credential is corret
  //the API will resolve with some token and another datas as the below
  return new Promise(resolve => {
    resolve(state);
  });
};

export const authService = {signIn};
