import { TrainingEntity } from "../model/training";
import { TrainingSummary } from "../model/trainingSummary";
import { trainingMockData } from "./trainingMockData";
class TrainingApi {
  public trainingList: TrainingEntity[];

  constructor() {
    this.trainingList = trainingMockData;
  }

  public setMockDataSeed(trainingList: TrainingEntity[]) {
    this.trainingList = trainingList;
  }

  public getSummaryTrainingList(): Promise<TrainingSummary[]> {
    const trainingSummaryList: TrainingSummary[] = this.trainingList.map((training) => {
      return {
        id : training.id,
        isActive : training.isActive,
        name : training.name,
      };
    });

    return Promise.resolve(trainingSummaryList);
  }

  public getTrainingById(id: number): Promise<TrainingEntity> {
    const training = this.trainingList.find((tr) => tr.id === id);
    return Promise.resolve(training);
  }
}

export const trainingApi = new TrainingApi();
