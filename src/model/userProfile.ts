export class UserProfile {
  public id: number;
  public fullname: string;
  public role: string;
  public email: string;

  constructor() {
    // Likely to be changed by string or guid
    this.id = -1;
    this.fullname = '';
    this.role = '';
    this.email = '';
  }
}
