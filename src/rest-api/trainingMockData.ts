import { Training } from '../model/training'
import { Student } from '../model/student'
import { Trainer } from '../model/trainer'

export const trainingMockData : Training[] =
[
  {
    id: 32,
    name: 'React/Redux',
    isActive: true,
    start: new Date(1,1,2017),
    end: new Date(31,1,2017),
    students: new Array<Student>(),
    trainers: new Array<Trainer>()
  },
  {
    id: 12,
    name: 'Responsive web design',
    isActive: true,
    start: new Date(1,2,2017),
    end: new Date(28,2,2017),
    students: new Array<Student>(),
    trainers: new Array<Trainer>()
  },
  {
    id: 33,
    name: 'AngularJS 2.0',
    isActive: true,
    start: new Date(1,3,2017),
    end: new Date(31,3,2017),
    students: new Array<Student>(),
    trainers: new Array<Trainer>()
  },
];
