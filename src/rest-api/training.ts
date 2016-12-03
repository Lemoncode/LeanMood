import { Training } from '../model/training'
import { TrainingSummary } from '../model/trainingSummary'
import { trainingMockData } from './trainingMockData'

class TrainingApi {
  trainingList : Training[];

  constructor() {
    this.trainingList = trainingMockData;
  }

  setMockDataSeed(trainingList : Training[]) {
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
}

export const trainingApi = new TrainingApi();
