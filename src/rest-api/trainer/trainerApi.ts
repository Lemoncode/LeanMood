import {trainingContentMockData} from './trainerMockData';
import {exerciseEvaluationMockedData} from './exerciseEvaluationMockedData';
import { ExerciseEvaluation } from '../../model/trainer/deliveryEvaluation';

class TrainerApi {
  public getTrainingContentByTrainingId(id: number): Promise<string> {
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

    const evaluationData = exerciseEvaluationMockedData.find((evaluationItem) => {
      return evaluationItem.id === id;
    });

    if (evaluationData) {
      evaluation = evaluationData;
    }

    return Promise.resolve(evaluationData);
  }

  public saveExerciseEvaluation(exerciseEvaluation:ExerciseEvaluation){
    return Promise.resolve(exerciseEvaluation);
  }
}

export const trainerApi = new TrainerApi();
