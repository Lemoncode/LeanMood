import {StudentSummary} from "./studentSummary";
import {TrainerSummary} from "./trainerSummary";

export class TrainingEntity {
  id : number;
  name : string;
  isActive : boolean;
  start : Date;
  end : Date;
  trainers : Array<TrainerSummary>;
  students : Array<StudentSummary>;

  constructor() {
    this.id = -1;
    this.name = '';
    this.isActive = false;
    // TODO: Temporary workaround, to avoid issues with Deepfreeze + Sinon
    // + Date objects.
    this.start = null; //new Date();
    this.end = null; // new Date();
    this.trainers = new Array<TrainerSummary>();
    this.students = new Array<StudentSummary>();
  }
}
