export class TrainingSummary {
  public id: number;
  public name: string;
  public isActive: boolean;
  public start: Date;
  public end: Date;

  constructor() {
    this.id = -1;
    this.name = '';
    this.isActive = false;
  }
}
