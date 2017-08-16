
export class Student {

  public id: string;
  public fullname: string;
  public email: string;
  public phoneNumber: string;
  public isActive: boolean;

  constructor() {
    this.id = '-1';
    this.fullname = '';
    this.email = '';
    this.phoneNumber = '';
    this.isActive = true;
  }
}
