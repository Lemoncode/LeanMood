import {trainingContentMockData} from './trainerMockData';

class TrainerApi {
  getTrainingConentByTrainingId(id: number): Promise<string> {
    let content: string;

    const trainingContent = trainingContentMockData.filter((trainingMockData) => {
      return trainingMockData.trainingId === id;
    });

    if (trainingContent) {
      content = trainingContent[0].content;
    }

    return Promise.resolve(content);
  }
}

export const trainerApi = new TrainerApi();
