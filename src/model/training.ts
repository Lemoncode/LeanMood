import {Student} from "./student";
import {Trainer} from "./trainer";

export class Training {
  id : number;
  name : string;
  active : boolean;
  start : Date;
  end : Date;
  trainers : Array<Trainer>;
  students : Array<Student>;

  constructor() {
    this.id = -1;
    this.name = '';
    this.active = false;
    this.start = new Date();
    this.end = new Date();
    this.trainers = new Array<Trainer>();
    this.students = new Array<Student>();
  }
}
