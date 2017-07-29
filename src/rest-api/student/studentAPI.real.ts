import { TrainingTOC } from '../../model/student/trainingToc';
import { StudentSummary } from '../../model/studentSummary';
import { Student } from '../../model/student';
import { GetTOCByTraining, GetStudentSummaryList } from './studentAPI.contract';
import {
  mapStudentsToStudentSummaryList,
  mapTrainingToTrainingTOC,
} from './mappers';

const studentModuleURL = 'api/student/';
const trainingsURL = `${studentModuleURL}trainings/`;
const trainingIdURL = `${trainingsURL}id/`;
const studentsURL = `${studentModuleURL}students/`;

// TODO: Extract into business
const get: any = { method: 'GET', credentials: 'include' };

export const getTOCByTraining: GetTOCByTraining = (id: string): Promise<TrainingTOC> => (
  fetch(trainingIdURL, get)
    .then((response) => response.json())
    .then((training) => mapTrainingToTrainingTOC(training))
);

export const getStudentSummaryList: GetStudentSummaryList = (): Promise<StudentSummary[]> => (
  fetch(studentsURL, get)
    .then((response) => response.json())
    .then((students) => mapStudentsToStudentSummaryList(students))
);
