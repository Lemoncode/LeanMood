import { TrainingTOC } from '../../model/student/trainingToc';
import { trainingTOCMockData } from './trainingTocMockData';
import { GetTOCByTraining } from './studentAPI.contract';

const trainings: TrainingTOC[] = trainingTOCMockData;

export const getTOCByTraining: GetTOCByTraining = (id: number): Promise<TrainingTOC> => {
  const trainingTOC = trainings.find((training) => training.id === id);
  return Promise.resolve(trainingTOC);
};
