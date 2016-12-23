import { TrainingEntity } from '../model/training'
import { StudentSummary } from '../model/studentSummary'
import { TrainerSummary} from '../model/trainerSummary'

export const trainingMockData : TrainingEntity[] =
[
  {
    id: 32,
    name: 'React/Redux',
    isActive: true,
    start: new Date(2017, 0, 1),
    end: new Date(2017, 0, 31),
    students: new Array<StudentSummary>(),
    trainers: new Array<TrainerSummary>()
  },
  {
    id: 12,
    name: 'Responsive web design',
    isActive: true,
    start: new Date(2017, 1, 1),
    end: new Date(2017, 1, 28),
    students: new Array<StudentSummary>(),
    trainers: new Array<TrainerSummary>()
  },
  {
    id: 33,
    name: 'AngularJS 2.0',
    isActive: true,
    start: new Date(2017, 2, 1),
    end: new Date(2017, 2, 31),
    students: new Array<StudentSummary>(),
    trainers: new Array<TrainerSummary>()
  },
];
