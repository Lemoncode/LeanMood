import { LoginCredentials } from "../model/loginCredentials";
import { LoginResponse } from "../model/loginResponse";
import { UserProfile } from "../model/userProfile";

import {} from "core-js";

class LoginAPI {
  public login(loginInfo: LoginCredentials): Promise<LoginResponse> {
    let loginResponse = new LoginResponse();

    if (loginInfo.login === "admin" && loginInfo.password === "test") {
      loginResponse.succeded = true;
      loginResponse.userProfile = {id: 12, fullname: "John Doe", role: "admin", email: "john@fakeemail.com"};
    } else {
      loginResponse.succeded = false;
      loginResponse.userProfile = null;
    }

    return Promise.resolve(loginResponse);
  }
}

export const LoginApi = new LoginAPI();
