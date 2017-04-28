import { ExerciseEvaluation } from '../../model/trainer/deliveryEvaluation';
import { Exercise } from '../../model/trainer/exercise';

const students = [
  {
    id: 10,
    avatar: 'http://static.dnnsharp.com/icons/user77.png',
    fullname: 'John Doe',
  },
  {
    id: 11,
    avatar: 'http://static.dnnsharp.com/icons/user77.png',
    fullname: 'Frank Miller',
  },
  {
    id: 12,
    avatar: 'http://static.dnnsharp.com/icons/user77.png',
    fullname: 'Peter Siege',
  },
]
export const exerciseEvaluationMockedData: ExerciseEvaluation[] = [
  {
    id: 123,
    name: 'Exercise delivery - Module UX + Design',
    studentDelivery: [
      {
        id: 324,
        deliveryDate: new Date(2017, 3, 15),
        isDelivered: true,
        link: '#',
        grade: 50,
        student: students[0],
      },
      {
        id: 325,
        deliveryDate: null,
        isDelivered: false,
        link: '#',
        grade: NaN,
        student: students[1],
      },
      {
        id: 326,
        deliveryDate: new Date(2017, 3, 14),
        isDelivered: true,
        link: '#',
        grade: 90,
        student: students[2],
      },
    ],
  },
  {
    id: 124,
    name: 'Exercise delivery - Module Layout',
    studentDelivery: [
      {
        id: 327,
        deliveryDate: new Date(2017, 3, 9),
        isDelivered: true,
        link: '#',
        grade: 50,
        student: students[0],
      },
      {
        id: 328,
        deliveryDate: null,
        isDelivered: false,
        link: '#',
        grade: NaN,
        student: students[1],
      },
      {
        id: 329,
        deliveryDate: null,
        isDelivered: false,
        link: '#',
        grade: 90,
        student: students[2],
      },
    ],
  },
  {
    id: 125,
    name: 'Exercise delivery - Module Languages',
    studentDelivery: [
      {
        id: 330,
        deliveryDate: new Date(2017, 4, 21),
        isDelivered: true,
        link: '#',
        grade: 50,
        student: students[0],
      },
      {
        id: 331,
        deliveryDate: new Date(2017, 4, 13),
        isDelivered: true,
        link: '#',
        grade: NaN,
        student: students[1],
      },
      {
        id: 332,
        deliveryDate: new Date(2017, 4, 17),
        isDelivered: true,
        link: '#',
        grade: 90,
        student: students[2],
      },
    ],
  },
];
