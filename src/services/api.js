import axios from 'axios';

const axiosConfig = {
  baseURL: `https://6.react.pages.academy/six-cities`,
  timeout: 5000,
  withCredentials: true
};

const HttpCodes = {
  UNAUTHORIZED: 401
};

export const createAPI = () => {
  const api = axios.create(axiosConfig);
  const onSuccess = (response) => response;
  const onFail = (err) => {
    const {response} = err;
    if (response.status === HttpCodes.UNAUTHORIZED) {
      // onUnauthorized();
      throw err;
    }
    throw err;
  };
  api.interceptors.response.use(onSuccess, onFail);
  return api;
};
