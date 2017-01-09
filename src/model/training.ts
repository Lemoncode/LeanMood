<<<<<<< HEAD
import { Student } from "./student";
import { StudentSummary } from "./studentSummary";
import { Trainer } from "./trainer";
import { TrainerSummary } from "./trainerSummary";
=======
import { Student } from './student';
import { Trainer } from './trainer';
>>>>>>> 1a74c9a578d7b4a65b0460d0997cca74652df14c

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
    this.name = '';
    this.isActive = false;
    // TODO: Temporary workaround, to avoid issues with Deepfreeze + Sinon
    // + Date objects.
    this.start = new Date();
    this.end = new Date();
    this.trainers = [];
    this.students = [];
  }
}
