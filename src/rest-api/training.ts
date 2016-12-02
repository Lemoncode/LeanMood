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
      const summary = new TrainingSummary();
      summary.id = training.id;
      summary.name = training.name;
      summary.isActive = training.isActive;

      return summary;
    });

    return Promise.resolve(trainingSummaryList);
  }
}

export const trainingApi = new TrainingApi();
