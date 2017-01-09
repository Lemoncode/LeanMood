<<<<<<< HEAD
import { Student } from "../model/student";
import { StudentSummary } from "../model/studentSummary";
import { Trainer } from "../model/trainer";
import { TrainerSummary} from "../model/trainerSummary";
import { Training } from "../model/training";
=======
import { Student } from '../model/student';
import { Trainer } from '../model/trainer';
import { Training } from '../model/training';
>>>>>>> 1a74c9a578d7b4a65b0460d0997cca74652df14c

export const trainingMockData: Training[] = [
  {
    end: null,
    id: 32,
    isActive: true,
<<<<<<< HEAD
    name: "React/Redux",
    start: null,
=======
    name: 'React/Redux',
    start: new Date(1, 1, 2017),
>>>>>>> 1a74c9a578d7b4a65b0460d0997cca74652df14c
    students: new Array<Student>(),
    trainers: new Array<Trainer>(),
  },
  {
    end: null,
    id: 12,
    isActive: true,
<<<<<<< HEAD
    name: "Responsive web design",
    start: null,
=======
    name: 'Responsive web design',
    start: new Date(1, 2, 2017),
>>>>>>> 1a74c9a578d7b4a65b0460d0997cca74652df14c
    students: new Array<Student>(),
    trainers: new Array<Trainer>(),
  },
  {
    end: null,
    id: 33,
    isActive: true,
<<<<<<< HEAD
    name: "AngularJS 2.0",
    start: null,
=======
    name: 'AngularJS 2.0',
    start: new Date(1, 3, 2017),
>>>>>>> 1a74c9a578d7b4a65b0460d0997cca74652df14c
    students: new Array<Student>(),
    trainers: new Array<Trainer>(),
  },
];
