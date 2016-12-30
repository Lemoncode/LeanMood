import { StudentSummary } from "../model/studentSummary";
import { TrainerSummary} from "../model/trainerSummary";
import { TrainingEntity } from "../model/training";

export const trainingMockData: TrainingEntity[] =
[
  {
    end: new Date(),
    id: 32,
    isActive: true,
    name: "React/Redux",
    start: new Date(),
    students: new Array<StudentSummary>(),
    trainers: new Array<TrainerSummary>(),
  },
  {
    end: new Date(),
    id: 12,
    isActive: true,
    name: "Responsive web design",
    start: new Date(),
    students: new Array<StudentSummary>(),
    trainers: new Array<TrainerSummary>(),
  },
  {
    end: new Date(),
    id: 33,
    isActive: true,
    name: "AngularJS 2.0",
    start: new Date(),
    students: new Array<StudentSummary>(),
    trainers: new Array<TrainerSummary>(),
  },
];
