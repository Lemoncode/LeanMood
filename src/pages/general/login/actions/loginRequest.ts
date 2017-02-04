import { hashHistory } from 'react-router';
import { LoginApi } from './../../../../rest-api/login';
import { LoginCredentials } from './../../../../model/loginCredentials';
import { loginActionEnums } from './../../../../common/actionEnums/login';
import { LoginResponse } from './../../../../model/loginResponse';
import { navigationHelper } from '../helper/navigateBasedOnRole';


export const loginRequestStarted = (loginCredentials : LoginCredentials) => {
  return function(dispatcher) {
    const promise = LoginApi.login(loginCredentials);

    promise.then( data => {
      dispatcher(loginRequestCompleted(data));

      if(data.succeded === true) {
        navigationHelper.navigateToHomeBasedOnRole(`/${data.userProfile.role}`)
      }
    })
    return promise;
  }
}

export const loginRequestCompleted = (loginResponse: LoginResponse) => ({
  type: loginActionEnums.USERPROFILE_PERFORM_LOGIN,
  payload: loginResponse
})
