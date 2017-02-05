import { LoginCredentials } from '../../model/loginCredentials';
import { LoginResponse } from '../../model/loginResponse';
import { UserProfile } from '../../model/userProfile';
import {loginMockResponses} from './loginMockData';

class LoginAPI {
  public login(loginInfo: LoginCredentials): Promise<LoginResponse> {
    let loginResponse = loginMockResponses.find((response) => {
      return response.userProfile.email === loginInfo.login;
    });

    if (!loginResponse || loginInfo.password !== 'test') {
      loginResponse = new LoginResponse();
      loginResponse.succeded = false;
      loginResponse.userProfile = null;
    }

    return Promise.resolve(loginResponse);
  }
}

export const loginApi = new LoginAPI();
