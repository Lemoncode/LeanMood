import { Student } from '../model/student/student';
import { Trainer } from '../model/trainer';
import { Training } from '../model/training';

export const trainingMockData: Training[] = [
  {
    end: new Date(31, 1, 2017),
    id: 32,
    isActive: true,
    name: 'React/Redux',
    start: new Date(1, 1, 2017),
    students: new Array<Student>(),
    trainers: new Array<Trainer>(),
  },
  {
    end: new Date(28, 2, 2017),
    id: 12,
    isActive: true,
    name: 'Responsive web design',
    start: new Date(1, 2, 2017),
    students: new Array<Student>(),
    trainers: new Array<Trainer>(),
  },
  {
    end: new Date(31, 3, 2017),
    id: 33,
    isActive: true,
    name: 'AngularJS 2.0',
    start: new Date(1, 3, 2017),
    students: new Array<Student>(),
    trainers: new Array<Trainer>(),
  },
];
