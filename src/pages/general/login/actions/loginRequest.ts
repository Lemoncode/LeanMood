import { hashHistory } from 'react-router';
import { LoginApi } from './../../../../rest-api/login';
import { LoginCredentials } from './../../../../model/loginCredentials';
import { loginActionEnums } from './../../../../common/actionEnums/login';
import { LoginResponse } from './../../../../model/loginResponse';

export const loginRequestStarted = (loginCredentials : LoginCredentials) => {
  return function(dispatcher) {
    const promise = LoginApi.login(loginCredentials);

    promise.then( data => {
      dispatcher(loginRequestCompleted(data));

      if(data.succeded === true) {
        hashHistory.push('/students');
      }
    })
    return promise;
  }
}

export const loginRequestCompleted = (loginResponse: LoginResponse) => ({
  type: loginActionEnums.USERPROFILE_PERFORM_LOGIN,
  payload: loginResponse
})