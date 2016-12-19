import { TrainingEntity } from '../model/training'
import { StudentSummary } from '../model/studentSummary'
import { TrainerSummary} from '../model/trainerSummary'

export const trainingMockData : TrainingEntity[] =
[
  {
    id: 32,
    name: 'React/Redux',
    isActive: true,
    start: new Date(1,1,2017),
    end: new Date(31,1,2017),
    students: new Array<StudentSummary>(),
    trainers: new Array<TrainerSummary>()
  },
  {
    id: 12,
    name: 'Responsive web design',
    isActive: true,
    start: new Date(1,2,2017),
    end: new Date(28,2,2017),
    students: new Array<StudentSummary>(),
    trainers: new Array<TrainerSummary>()
  },
  {
    id: 33,
    name: 'AngularJS 2.0',
    isActive: true,
    start: new Date(1,3,2017),
    end: new Date(31,3,2017),
    students: new Array<StudentSummary>(),
    trainers: new Array<TrainerSummary>()
  },
];
