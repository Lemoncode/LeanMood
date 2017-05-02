import { ExerciseEvaluation } from '../../model/trainer/deliveryEvaluation';
import { Exercise } from '../../model/trainer/exercise';

const exercises = [
  { id: 123, name: 'Exercise delivery - Module UX + Design' },
  { id: 124, name: 'Exercise delivery - Module Layout' },
  { id: 125, name: 'Exercise delivery - Module Languages' },
];
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
];

export const exerciseEvaluationMockedData: ExerciseEvaluation[] = [
  {
    ...exercises[0],
    studentDelivery: [
      {
        id: 324,
        deliveryDate: new Date(2017, 3, 15),
        isDelivered: true,
        link: `/trainer/training/1/evaluation/${exercises[0].id}/student/${students[0].id}/delivery`,
        grade: 50,
        student: students[0],
      },
      {
        id: 325,
        deliveryDate: null,
        isDelivered: false,
        link: `/trainer/training/1/evaluation/${exercises[0].id}/student/${students[1].id}/delivery`,
        grade: NaN,
        student: students[1],
      },
      {
        id: 326,
        deliveryDate: new Date(2017, 3, 14),
        isDelivered: true,
        link: `/trainer/training/1/evaluation/${exercises[0].id}/student/${students[2].id}/delivery`,
        grade: 80,
        student: students[2],
      },
    ],
  },
  {
    ...exercises[1],
    studentDelivery: [
      {
        id: 327,
        deliveryDate: new Date(2017, 3, 9),
        isDelivered: true,
        link: `/trainer/training/1/evaluation/${exercises[1].id}/student/${students[0].id}/delivery`,
        grade: 60,
        student: students[0],
      },
      {
        id: 328,
        deliveryDate: null,
        isDelivered: false,
        link: `/trainer/training/1/evaluation/${exercises[1].id}/student/${students[1].id}/delivery`,
        grade: NaN,
        student: students[1],
      },
      {
        id: 329,
        deliveryDate: null,
        isDelivered: false,
        link: `/trainer/training/1/evaluation/${exercises[1].id}/student/${students[2].id}/delivery`,
        grade: NaN,
        student: students[2],
      },
    ],
  },
  {
    ...exercises[2],
    studentDelivery: [
      {
        id: 330,
        deliveryDate: new Date(2017, 4, 21),
        isDelivered: true,
        link: `/trainer/training/1/evaluation/${exercises[2].id}/student/${students[0].id}/delivery`,
        grade: 100,
        student: students[0],
      },
      {
        id: 331,
        deliveryDate: new Date(2017, 4, 13),
        isDelivered: true,
        link: `/trainer/training/1/evaluation/${exercises[2].id}/student/${students[1].id}/delivery`,
        grade: 70,
        student: students[1],
      },
      {
        id: 332,
        deliveryDate: new Date(2017, 4, 17),
        isDelivered: true,
        link: `/trainer/training/1/evaluation/${exercises[2].id}/student/${students[2].id}/delivery`,
        grade: 30,
        student: students[2],
      },
    ],
  },
];
