import {trainerActionEnums} from '../../../../../common/actionEnums/trainer';
import {trainerApi} from '../../../../../rest-api';

export const fetchTrainingContentStarted = (trainingId: number) => {
  return (dispatcher) => {
    const promise = trainerApi.getTrainingConentByTrainingId(trainingId);

    promise.then(
      (data) => dispatcher(fetchTrainingContentCompleted(data)),
    );

    return promise;
  };
};

export const fetchTrainingContentCompleted = (content: string) => ({
  type: trainerActionEnums.GET_TRAINING_CONTENT_REQUEST_COMPLETED,
  payload: content,
});
