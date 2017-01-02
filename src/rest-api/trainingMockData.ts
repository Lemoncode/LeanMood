import { Student } from "../model/student";
import { StudentSummary } from "../model/studentSummary";
import { Trainer } from "../model/trainer";
import { TrainerSummary} from "../model/trainerSummary";
import { Training } from "../model/training";

export const trainingMockData: Training[] =
[
  {
    end: null,
    id: 32,
    isActive: true,
    name: "React/Redux",
    start: null,
    students: new Array<Student>(),
    trainers: new Array<Trainer>(),
  },
  {
    end: null,
    id: 12,
    isActive: true,
    name: "Responsive web design",
    start: null,
    students: new Array<Student>(),
    trainers: new Array<Trainer>(),
  },
  {
    end: null,
    id: 33,
    isActive: true,
    name: "AngularJS 2.0",
    start: null,
    students: new Array<Student>(),
    trainers: new Array<Trainer>(),
  },
];
