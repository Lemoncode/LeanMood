export class UserProfile {
  id : number;
  fullname : string;
  role : string;
  email : string;

  constructor()
  {
    // Likely to be changed by string or guid
    this.id = -1;
    this.fullname = "";
    this.role = "";
    this.email = "";
  }
}
