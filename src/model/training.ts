import { Student } from "./student";
import { Trainer } from "./trainer";

export class Training {
  public id: number;
  public name: string;
  public isActive: boolean;
  public start: Date;
  public end: Date;
  public trainers: Trainer[];
  public students: Student[];

  constructor() {
    this.id = -1;
    this.name = "";
    this.isActive = false;
    this.start = new Date();
    this.end = new Date();
    this.trainers = [];
    this.students = [];
  }
}
