import {trainerActionEnums} from '../../../../../common/actionEnums/trainer';
import {trainerApi} from '../../../../../rest-api';

export const trainingContentRequestStarted = (trainingId: number) => {
  return (dispatcher) => {
    const promise = trainerApi.getTrainingConentByTrainingId(trainingId);

    promise.then(
      (data) => dispatcher(trainingContentRequestCompleted(data)),
    );

    return promise;
  };
};

export const trainingContentRequestCompleted = (content: string) => ({
  type: trainerActionEnums.GET_TRAINING_CONTENT_REQUEST_COMPLETED,
  payload: content,
});
