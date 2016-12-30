import {UserProfile} from "./userProfile";

export class LoginResponse {
  succeded: boolean;
  userProfile: UserProfile;

  constructor() {
    this.succeded = false;
    this.userProfile = new UserProfile();
  }
}
