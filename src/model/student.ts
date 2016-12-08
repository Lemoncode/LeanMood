
export class Student {

  id : number;
  fullname : string;
  email : string;
  phoneNumber : string;
  isActive : boolean;

  constructor() {
    this.id = -1;
    this.fullname = '';
    this.email = '';
    this.phoneNumber = '';
    this.isActive = true;
  }
}
