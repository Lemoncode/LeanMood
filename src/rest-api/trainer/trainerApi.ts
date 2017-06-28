import {trainingContentMockData} from './trainerMockData';
import {exerciseEvaluationMockedData} from './exerciseEvaluationMockedData';
import { ExerciseEvaluation } from '../../model/trainer/deliveryEvaluation';

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
  public getExerciseEvaluationById(id: number): Promise<ExerciseEvaluation> {
    let evaluation: ExerciseEvaluation;

    const evaluationData = exerciseEvaluationMockedData.filter((evaluationItem) => {
      return evaluationItem.id === id;
    });

    if (evaluationData && evaluationData.length > 0) {
      evaluation = evaluationData[0];
    }

    return Promise.resolve(evaluation);
  }
}

export const trainerApi = new TrainerApi();
