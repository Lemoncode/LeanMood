import { TrainingTOC } from '../../model/student/trainingToc';
import { StudentSummary } from '../../model/studentSummary';
import { trainingTOCMockData, studentMockData } from './mockData';
import { GetTOCByTraining, GetStudents } from './studentAPI.contract';

const trainings: TrainingTOC[] = trainingTOCMockData;
const students: StudentSummary[] = studentMockData;

export const getTOCByTraining: GetTOCByTraining = (id: number): Promise<TrainingTOC> => {
  const trainingTOC = trainings.find((training) => training.id === id);
  return Promise.resolve(trainingTOC);
};

export const getStudents: GetStudents = (): Promise<StudentSummary[]> => {
  return Promise.resolve([...students]);
};
