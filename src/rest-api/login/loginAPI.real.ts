import { LoginCredentials } from '../../model/login/loginCredentials';
import { LoginResponse } from '../../model/login/loginResponse';
import { loginMockResponses } from './loginMockData';
import { LoginFunction } from './loginAPI.contract';
import { User } from '../model/general';
import { mapUserToModel } from '../mappers/general';
import { formatURL, post } from '../helpers';

export const login: LoginFunction = (loginInfo: LoginCredentials): Promise<LoginResponse> => {
  return fetch(formatURL('/login'), {
    ...post,
    body: JSON.stringify({
      email: loginInfo.login,
      password: loginInfo.password,
    }),
  })
    .then((response) => (
      response.ok ?
        response
          .json()
          .then(handleSuccessLogin) :
        handleFailLogin(response)
    ))
    .catch((err) => Promise.reject(err));
};

const handleSuccessLogin = (user: User): Promise<LoginResponse> => {
  const loginResponse = new LoginResponse();
  loginResponse.succeded = true;
  loginResponse.userProfile = mapUserToModel(user);

  return Promise.resolve(loginResponse);
};

const handleFailLogin = (response: Response): Promise<LoginResponse> => {
  const loginResponse = new LoginResponse();
  loginResponse.succeded = false;

  return Promise.resolve(loginResponse);
};
