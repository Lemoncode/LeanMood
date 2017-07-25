import { LoginCredentials } from '../../model/login/loginCredentials';
import { LoginResponse } from '../../model/login/loginResponse';
import { loginMockResponses } from './loginMockData';
import { LoginFunction } from './loginAPI.contract';

// TODO: REPLACE WITH REAL CALL TO API REST WHEN READY
export const login: LoginFunction = (loginInfo: LoginCredentials): Promise<LoginResponse> => {
  let loginResponse = loginMockResponses.find((response) => {
    return response.userProfile.email === loginInfo.login;
  });

  if (!loginResponse || loginInfo.password !== 'real') {
    loginResponse = new LoginResponse();
    loginResponse.succeded = false;
    loginResponse.userProfile = null;
  }
  return Promise.resolve(loginResponse);
};
