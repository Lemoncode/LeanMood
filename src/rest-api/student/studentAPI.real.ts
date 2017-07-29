import { TrainingTOC } from '../../model/student/trainingToc';
import { StudentSummary } from '../../model/studentSummary';
import { Student } from '../../model/student';
import { GetTOCByTraining, GetStudentSummaryList } from './studentAPI.contract';
import {
  mapStudentsToStudentSummaryList,
  mapTrainingToTrainingTOC,
} from './mappers';

const studentModuleURL = '/api/studentModule';
const trainingsURL = `${studentModuleURL}/trainings`;
const trainingIdURL = `${trainingsURL}/id=`;
const studentsURL = `${studentModuleURL}/students`;

// TODO: Extract into business
const get: any = { method: 'GET', credentials: 'include' };

export const getTOCByTraining: GetTOCByTraining = (id: string): Promise<TrainingTOC> => (
  fetch(`${trainingIdURL}${id}`, get)
    .then((response) => response.json())
    .then((training) => mapTrainingToTrainingTOC(training))
    // tslint:disable-next-line:no-console
    .catch((err) => console.log(err))
);

export const getStudentSummaryList: GetStudentSummaryList = (): Promise<StudentSummary[]> => (
  fetch(studentsURL, get)
    .then((response) => response.json())
    .then((students) => mapStudentsToStudentSummaryList(students))
    // tslint:disable-next-line:no-console
    .catch((err) => console.log(err))
);
