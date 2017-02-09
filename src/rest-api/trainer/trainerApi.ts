import {trainingContentMockData} from './trainerMockData';

class TrainerApi {
  public getTrainingConentByTrainingId(id: number): Promise<string> {
    let content: string;

    const trainingContent = trainingContentMockData.filter((trainingMockData) => {
      return trainingMockData.id === id;
    });

    if (trainingContent) {
      content = trainingContent[0].content;
    }

    return Promise.resolve(content);
  }
}

export const trainerApi = new TrainerApi();
