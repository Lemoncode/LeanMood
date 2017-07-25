import { Student } from '../model/student/student';
import { Trainer } from '../model/trainer';
import { Training } from '../model/training';

export const trainingMockData: Training[] = [
  {
    end: new Date(2017, 0, 31),
    id: 32,
    isActive: true,
    name: 'React/Redux',
    start: new Date(2017, 0, 1),
    students: [],
    trainers: [],
  },
  {
    end: new Date(2017, 1, 28),
    id: 12,
    isActive: true,
    name: 'Responsive web design',
    start: new Date(2017, 1, 1),
    students: [],
    trainers: [],
  },
  {
    end: new Date(2017, 2, 31),
    id: 33,
    isActive: true,
    name: 'AngularJS 2.0',
    start: new Date(2017, 2, 1),
    students: [],
    trainers: [],
  },
  {
    end: new Date(2017, 0, 31),
    id: 34,
    isActive: true,
    name: 'Full Stack Online Máster',
    start: new Date(2017, 0, 1),
    students: [{ id: 3, fullname: 'Student', isActive: true, email: 'student', phoneNumber: '' }],
    trainers: [{ id: 2 }],
  },
];
