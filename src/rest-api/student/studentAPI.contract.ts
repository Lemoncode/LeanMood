import { TrainingTOC } from '../../model/student/trainingToc';
import { trainingTOCMockData } from './trainingTocMockData';

export type GetTOCByTraining = (id: number) => Promise<TrainingTOC>;
