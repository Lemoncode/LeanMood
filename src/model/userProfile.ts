export class UserProfile {
  public id: string;
  public fullname: string;
  public role: string;
  public email: string;
  public avatar: string;

  constructor() {
    this.id = '';
    this.fullname = '';
    this.role = '';
    this.email = '';
    this.avatar = '';
  }
}
