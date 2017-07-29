import { LoginCredentials } from '../../model/login/loginCredentials';
import { LoginResponse } from '../../model/login/loginResponse';
import { loginMockResponses } from './loginMockData';
import { LoginFunction } from './loginAPI.contract';

// TODO: REPLACE WITH REAL CALL TO API REST WHEN READY
export const login: LoginFunction = (loginInfo: LoginCredentials): Promise<LoginResponse> => {

  const promise = new Promise<LoginResponse>((resolve, reject) => {

    // TODO: Use env variable for the base URL
    // 'http://localhost:5000/api/login'
    fetch('http://localhost:5000/api/login', {
      method: 'POST',
       mode : 'cors',
      credentials : 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        loginName: loginInfo.login,
        password: loginInfo.password,
      }),
    })
    .then((response) => {
                          const loginResponse = new LoginResponse();
                          loginResponse.succeded = true;
                          // TODO: Temporary get this info from api
                          loginResponse.userProfile = {
                                                        id: 2,
                                                        fullname: 'Trainer',
                                                        role: 'trainer',
                                                        email: 'trainer',
                                                        avatar:
  'https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-64.png',
                          };

                          resolve(loginResponse);
                        })
    .catch((err)  => {
      reject(err);
    });

  });

  return promise;
};
