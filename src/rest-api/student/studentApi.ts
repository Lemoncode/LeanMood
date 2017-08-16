import { TrainingTOC } from '../../model/student/trainingToc';
import { trainingTOCMockData } from './trainingTocMockData';

class StudentAPI {
  private trainingList: TrainingTOC[];

  constructor() {
    this.trainingList = trainingTOCMockData;
  }

  public setMockedTrainings(newTrainingList) {
    this.trainingList = newTrainingList;
  }

  public getTOCByTraining(id: string): Promise<TrainingTOC> {
    const trainingTOC = this.trainingList.find((training) => training.id === id);
    return Promise.resolve(trainingTOC);
  }
}

export const studentAPI = new StudentAPI();
