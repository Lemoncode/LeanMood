import { TrainingTOC } from '../../model/student/trainingToc';
import { StudentSummary } from '../../model/studentSummary';
import { Student } from '../../model/student';
import { trainingTOCMockData, studentMockData } from './mockData';
import { GetTOCByTraining, GetStudentSummaryList } from './studentAPI.contract';
import { mapStudentsToStudentSummaryList } from '../mappers/student';

const trainings: TrainingTOC[] = trainingTOCMockData;
const students: Student[] = studentMockData;

export const getTOCByTraining: GetTOCByTraining = (id: string): Promise<TrainingTOC> => {
  const trainingTOC = trainings.find((training) => training.id === id);
  return Promise.resolve(trainingTOC);
};

export const getStudentSummaryList: GetStudentSummaryList = (): Promise<StudentSummary[]> => {
  const studentSummaryList = mapStudentsToStudentSummaryList(students);
  return Promise.resolve(studentSummaryList);
};
