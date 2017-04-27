import { Training } from '../model/training';
import { TrainingSummary } from '../model/trainingSummary';
import { trainingMockData } from './trainingMockData';

class TrainingApi {
  public trainingList: Training[];

  constructor() {
    this.trainingList = trainingMockData;
  }

  public setMockDataSeed(trainingList: Training[]) {
    this.trainingList = trainingList;
  }

  public getSummaryTrainingList(): Promise<TrainingSummary[]> {
    const trainingSummaryList: TrainingSummary[] = this.trainingList.map((training) => {
      return {
        id: training.id,
        isActive: training.isActive,
        name: training.name,
        start: training.start,
        end: training.end,
      };
    });

    return Promise.resolve(trainingSummaryList);
  }

  public getSummaryTrainingListByStudent(studentId: number) {
    const trainingSummaryList: TrainingSummary[] = this.trainingList.filter((training) => {
      return (training.students && training.students.findIndex((s) => s.id === studentId) >= 0);
    });

    return Promise.resolve(trainingSummaryList);
  }

  public getTrainingListByTrainer(trainerId: number) {
    const trainingSummaryList: TrainingSummary[] = this.trainingList.filter((training) => {
      return (training.trainers.findIndex((trainer) => trainer.id === trainerId) >= 0);
    });

    return Promise.resolve(trainingSummaryList);
  }
}

export const trainingApi = new TrainingApi();
