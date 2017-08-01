import { LoginCredentials } from '../../model/login/loginCredentials';
import { LoginResponse } from '../../model/login/loginResponse';
import { loginMockResponses } from './loginMockData';
import { LoginFunction } from './loginAPI.contract';

export const login: LoginFunction = (loginInfo: LoginCredentials): Promise<LoginResponse> => {
  return fetch('http://localhost:5000/api/login', {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: loginInfo.login,
      password: loginInfo.password,
    }),
  }).then((response) => (
    response.ok ?
      handleSuccessLogin(response) :
      handleFailLogin(response)
  )).catch((err) => {
    Promise.reject(err);
  });
};

const handleSuccessLogin = (response: Response): Promise<LoginResponse> => {
  const loginResponse = new LoginResponse();
  loginResponse.succeded = true;
  // TODO: Temporary get this info from api
  loginResponse.userProfile = {
    id: 2,
    fullname: 'Trainer',
    role: 'trainer',
    email: 'trainer',
    avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-64.png',
  };

  return Promise.resolve(loginResponse);
};

const handleFailLogin = (response: Response): Promise<LoginResponse> => {
  const loginResponse = new LoginResponse();
  loginResponse.succeded = false;

  return Promise.resolve(loginResponse);
};
