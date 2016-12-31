import { UserProfile } from "./userProfile";

export class LoginResponse {
  public succeded: boolean;
  public userProfile: UserProfile;

  constructor() {
    this.succeded = false;
    this.userProfile = new UserProfile();
  }
}
