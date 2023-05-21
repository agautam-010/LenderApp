import NetInfo from '@react-native-community/netinfo';
import {API_BASE_URL} from './constants';

const ApiCall = (
  endPoint: string,
  params: {method: string; body?: object | undefined} = {
    method: API_METHODS.GET,
  },
) => {
  return new Promise<ResponseProps>(async (resolve, reject) => {
    const {isConnected} = await NetInfo.fetch();
    if (isConnected) {
      const body = params?.body ? {body: JSON.stringify(params.body)} : {};
      try {
        const res = await fetch(API_BASE_URL + endPoint, {
          method: params.method,
          headers: {
            'Content-Type': 'application/json',
          },
          ...body,
        });
        resolve(res.json());
      } catch (err) {
        reject(err);
      }
    } else {
      reject({err: 'No internet connectivity!'});
    }
  });
};

export const API = async (
  endPoint: string,
  params: {method: string; body?: object | undefined} = {
    method: API_METHODS.GET,
  },
) => {
  let response = {} as ResponseProps;
  try {
    response = await ApiCall(endPoint, params);
  } catch (error: any) {
    response = {
      success: false,
      message: error?.message || 'No Internet Connection',
    };
  }
  return response;
};

export interface ResponseProps {
  success: boolean;
  data?: object[] | object;
  message: string;
  count?: number;
}

export const API_METHODS = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
};

export const SPINNER_TYPE = {
  LOADING: 'Loading...',
  SUCCESS: 'Success',
  FAILURE: 'Failed',
  SUBMITTING: 'Submitting...',
};
