import { TrainingSummary } from '../model/trainingSummary';
import { trainingMockData } from './trainingMockData';
import { TrainingEntity } from '../model/training';
class TrainingApi {
  trainingList : TrainingEntity[];

  constructor() {
    this.trainingList = trainingMockData;
  }

  setMockDataSeed(trainingList : TrainingEntity[]) {
    this.trainingList = trainingList;
  }

  getSummaryTrainingList() : Promise<TrainingSummary[]> {
    const trainingSummaryList : TrainingSummary[] = this.trainingList.map(training => {
      return {
        id : training.id,
        name : training.name,
        isActive : training.isActive
      };
    });

    return Promise.resolve(trainingSummaryList);
  }

  getTrainingById(id: number): Promise<TrainingEntity> {
    const training = this.trainingList.find(tr => tr.id === id);
    return Promise.resolve(training);
  }
}

export const trainingApi = new TrainingApi();
