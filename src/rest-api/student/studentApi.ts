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

  public getTOCByTraining(id: number): Promise<string> {
    let trainingTOC: string;
    const foundTraining = this.trainingList.find((training) => training.id === id);

    if (foundTraining) {
      trainingTOC = foundTraining.content;
    }

    return Promise.resolve(trainingTOC);
  }
}

export const studentAPI = new StudentAPI();
