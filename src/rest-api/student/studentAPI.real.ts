import { TrainingTOC } from '../../model/student/trainingToc';
import { StudentSummary } from '../../model/studentSummary';
import { Student } from '../../model/student';
import { GetTOCByTraining, GetStudentSummaryList } from './studentAPI.contract';
import {
  mapStudentsToStudentSummaryList,
  mapTrainingToTrainingTOC,
} from '../mappers/student';
import { formatURL, get } from '../helpers';

const studentModuleURL = '/studentModule';
const trainingsURL = `${studentModuleURL}/trainings`;
const trainingIdURL = `${trainingsURL}/id=`;
const studentsURL = `${studentModuleURL}/students`;

export const getTOCByTraining: GetTOCByTraining = (id: string): Promise<TrainingTOC> => (
  fetch(formatURL(`${trainingIdURL}${id}`), get)
    .then((response) => response.json())
    .then((training) => mapTrainingToTrainingTOC(training))
    .catch((err) => Promise.reject(err))
);

export const getStudentSummaryList: GetStudentSummaryList = (): Promise<StudentSummary[]> => {

  return fetch(formatURL(studentsURL), get)
    .then((response) => response.json())
    .then((students) => mapStudentsToStudentSummaryList(students))
    .catch((err) => Promise.reject(err));
};
