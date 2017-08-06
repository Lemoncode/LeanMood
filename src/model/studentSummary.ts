
export class StudentSummary {
  public id: string;
  public fullname: string;
  public email: string;
  public isActive: boolean;

  constructor() {
    this.id = '';
    this.fullname = '';
    this.email = '';
    this.isActive = false;
  }
}
